import MarkdownIt from "markdown-it";

const postModules = import.meta.glob<string>("../../_posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export type BlogPost = {
  sourcePath: string;
  sourceName: string;
  title: string;
  date: string;
  year: string;
  month: string;
  day: string;
  slug: string;
  routeSlug: string;
  url: string;
  legacyUrl: string;
  excerpt: string;
  body: string;
  thumbnail?: string;
  readingMinutes: number;
};

const filePattern = /(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;
const headingPattern = /^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m;

function stripFirstHeading(markdownSource: string) {
  return markdownSource.replace(/^\s{0,3}#{1,6}\s+.+?\s*#*\s*(?:\r?\n)+/, "");
}

function firstHeading(markdownSource: string, fallback: string) {
  return markdownSource.match(headingPattern)?.[1]?.trim() ?? fallback;
}

function firstImage(markdownSource: string) {
  const markdownMatch = /!\[[^\]]*]\((https?:\/\/[^)\s]+)(?:\s+["'][^"']*["'])?\)/i.exec(markdownSource);
  const htmlMatch = /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/i.exec(markdownSource);

  const candidates = [
    markdownMatch && { index: markdownMatch.index, url: markdownMatch[1] },
    htmlMatch && { index: htmlMatch.index, url: htmlMatch[1] }
  ].filter(Boolean) as Array<{ index: number; url: string }>;

  return candidates.sort((a, b) => a.index - b.index)[0]?.url;
}

function plainText(markdownSource: string) {
  return markdownSource
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`~|:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, limit = 180) {
  if (text.length <= limit) {
    return text;
  }

  const shortened = text.slice(0, limit).replace(/\s+\S*$/, "");
  return `${shortened}...`;
}

function parsePost(sourcePath: string, raw: string): BlogPost {
  const sourceName = sourcePath.split("/").at(-1) ?? sourcePath;
  const match = sourceName.match(filePattern);

  if (!match) {
    throw new Error(`Post filename must match YYYY-MM-DD-slug.md: ${sourceName}`);
  }

  const [, year, month, day, slug] = match;
  const date = `${year}-${month}-${day}`;
  const body = stripFirstHeading(raw).trim();
  const title = firstHeading(raw, slug.replace(/-/g, " "));
  const excerptSource = plainText(body);
  const wordCount = excerptSource ? excerptSource.split(/\s+/).length : 0;
  const routeSlug = `${date}-${slug}`;

  return {
    sourcePath,
    sourceName,
    title,
    date,
    year,
    month,
    day,
    slug,
    routeSlug,
    url: `/posts/${routeSlug}/`,
    legacyUrl: `/${year}/${month}/${day}/${slug}.html`,
    excerpt: truncate(excerptSource),
    body,
    thumbnail: firstImage(raw),
    readingMinutes: Math.max(1, Math.ceil(wordCount / 220))
  };
}

export function getAllPosts() {
  return Object.entries(postModules)
    .map(([sourcePath, raw]) => parsePost(sourcePath, raw))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function renderMarkdown(markdownSource: string) {
  return markdown.render(markdownSource);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00.000Z`));
}
