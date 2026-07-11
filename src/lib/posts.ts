import MarkdownIt from "markdown-it";
import { postMetadata, type PostMetadata } from "./postMetadata";

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
  heroImage?: string;
  category: string;
  tags: string[];
  readingMinutes: number;
};

const filePattern = /(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;
const headingPattern = /^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m;
const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/;

type FrontmatterValue = string | string[];
type Frontmatter = Record<string, FrontmatterValue | undefined>;

function cleanFrontmatterValue(value: string) {
  const trimmed = value.trim();
  return trimmed.replace(/^['"]|['"]$/g, "");
}

function parseInlineList(value: string) {
  return value
    .slice(1, -1)
    .split(",")
    .map(cleanFrontmatterValue)
    .filter(Boolean);
}

function parseFrontmatterFields(source: string): Frontmatter {
  const data: Frontmatter = {};
  let currentListKey: string | null = null;

  for (const line of source.split(/\r?\n/)) {
    const listMatch = line.match(/^\s*-\s+(.+)$/);
    if (listMatch && currentListKey) {
      const existing = data[currentListKey];
      const items = Array.isArray(existing) ? existing : [];
      data[currentListKey] = [...items, cleanFrontmatterValue(listMatch[1])];
      continue;
    }

    const fieldMatch = line.match(/^([A-Za-z][\w-]*):(?:\s*(.*))?$/);
    if (!fieldMatch) {
      currentListKey = null;
      continue;
    }

    const [, rawKey, rawValue = ""] = fieldMatch;
    const key = rawKey.trim();
    const value = rawValue.trim();

    if (!value) {
      data[key] = [];
      currentListKey = key;
      continue;
    }

    data[key] = value.startsWith("[") && value.endsWith("]")
      ? parseInlineList(value)
      : cleanFrontmatterValue(value);
    currentListKey = null;
  }

  return data;
}

function parseFrontmatter(raw: string) {
  const match = raw.match(frontmatterPattern);
  if (!match) {
    return { metadata: {} as Frontmatter, content: raw };
  }

  return {
    metadata: parseFrontmatterFields(match[1]),
    content: raw.slice(match[0].length)
  };
}

function metadataString(metadata: Frontmatter | PostMetadata, key: string) {
  const value = metadata[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function metadataList(metadata: Frontmatter | PostMetadata, key: string) {
  const value = metadata[key];
  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }
  if (typeof value === "string" && value.trim()) {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }
  return undefined;
}

function stripFirstHeading(markdownSource: string) {
  return markdownSource.replace(/^\s{0,3}#{1,6}\s+.+?\s*#*\s*(?:\r?\n)+/, "");
}

function firstHeading(markdownSource: string, fallback: string) {
  return markdownSource.match(headingPattern)?.[1]?.trim() ?? fallback;
}

function firstImage(markdownSource: string) {
  const markdownMatch = /!\[[^\]]*]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/i.exec(markdownSource);
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

function inferCategory(title: string, slug: string, body: string) {
  const text = `${title} ${slug} ${body}`.toLowerCase();

  if (slug.toLowerCase().startsWith("tt-") || text.includes("thách thức")) {
    return "Contest";
  }

  if (text.includes("icpc") || text.includes("atcoder")) {
    return "ICPC";
  }

  if (text.includes("nus") || text.includes("ay25") || text.includes("review")) {
    return "University";
  }

  if (text.includes("thach") || text.includes("tt recap")) {
    return "Contest";
  }

  return "Notes";
}

function inferTags(category: string, title: string, body: string) {
  const text = `${title} ${body}`.toLowerCase();
  const tags = new Set<string>([category]);

  if (category === "Contest") {
    tags.add("Recap");
    tags.add("CP");
    return [...tags];
  }

  if (text.includes("icpc")) tags.add("ICPC");
  if (text.includes("hcmus")) tags.add("HCMUS");
  if (text.includes("atcoder")) tags.add("AtCoder");
  if (text.includes("nus")) tags.add("NUS");
  if (text.includes("review")) tags.add("Review");
  if (text.includes("competitive") || text.includes("contest")) tags.add("CP");

  return [...tags].slice(0, 4);
}

function parsePost(sourcePath: string, raw: string): BlogPost {
  const sourceName = sourcePath.split("/").at(-1) ?? sourcePath;
  const match = sourceName.match(filePattern);

  if (!match) {
    throw new Error(`Post filename must match YYYY-MM-DD-slug.md: ${sourceName}`);
  }

  const [, year, month, day, slug] = match;
  const date = `${year}-${month}-${day}`;
  const { metadata, content } = parseFrontmatter(raw);
  const defaults = postMetadata[sourceName] ?? {};
  const body = stripFirstHeading(content).trim();
  const title = metadataString(metadata, "title")
    ?? metadataString(defaults, "title")
    ?? firstHeading(content, slug.replace(/-/g, " "));
  const excerptSource = plainText(body);
  const wordCount = excerptSource ? excerptSource.split(/\s+/).length : 0;
  const routeSlug = `${date}-${slug}`;
  const category = metadataString(metadata, "category")
    ?? metadataString(defaults, "category")
    ?? inferCategory(title, slug, body);
  const thumbnail = metadataString(metadata, "cover")
    ?? metadataString(defaults, "cover")
    ?? metadataString(metadata, "thumbnail")
    ?? metadataString(defaults, "thumbnail")
    ?? firstImage(content);
  const heroImage = metadataString(metadata, "hero")
    ?? metadataString(defaults, "hero")
    ?? metadataString(metadata, "background")
    ?? metadataString(defaults, "background")
    ?? thumbnail;

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
    thumbnail,
    heroImage,
    category,
    tags: metadataList(metadata, "tags") ?? metadataList(defaults, "tags") ?? inferTags(category, title, body),
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
