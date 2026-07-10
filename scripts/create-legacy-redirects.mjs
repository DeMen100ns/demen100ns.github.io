import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const postsDir = path.resolve("_posts");
const distDir = path.resolve("dist");
const filePattern = /(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;
const headingPattern = /^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/m;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function redirectPage(destination, title) {
  const escapedDestination = escapeHtml(destination);
  const escapedTitle = escapeHtml(title);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex">
    <meta http-equiv="refresh" content="0; url=${escapedDestination}">
    <link rel="canonical" href="${escapedDestination}">
    <title>Redirecting to ${escapedTitle}</title>
  </head>
  <body>
    <p><a href="${escapedDestination}">Continue to ${escapedTitle}</a></p>
  </body>
</html>
`;
}

const files = (await readdir(postsDir)).filter((file) => file.endsWith(".md"));

for (const file of files) {
  const match = file.match(filePattern);

  if (!match) {
    throw new Error(`Post filename must match YYYY-MM-DD-slug.md: ${file}`);
  }

  const [, year, month, day, slug] = match;
  const date = `${year}-${month}-${day}`;
  const raw = await readFile(path.join(postsDir, file), "utf8");
  const title = raw.match(headingPattern)?.[1]?.trim() ?? slug.replace(/-/g, " ");
  const destination = `/posts/${date}-${slug}/`;
  const target = path.join(distDir, year, month, day, `${slug}.html`);

  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, redirectPage(destination, title));
}
