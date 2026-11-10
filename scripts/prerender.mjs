// Turns the client build in dist/ into static HTML per route, so crawlers and link previews
// see real content and per-page meta tags. Runs after `vite build` and the SSR build (see package.json).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, routes, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await readFile(path.join(distDir, "index.html"), "utf8");

const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;
if (!SEO_BLOCK.test(template) || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--seo-start/end--> or <!--app-html--> markers");
}

async function writePage(url, file) {
  const { html, head } = await render(url);
  const page = template.replace(SEO_BLOCK, head).replace("<!--app-html-->", html);
  const outFile = path.join(distDir, file);
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, page);
  console.log(`  prerendered ${url} -> ${file}`);
}

for (const { path: url } of routes) {
  await writePage(url, url === "/" ? "index.html" : `${url.slice(1)}/index.html`);
}
// Most static hosts (Netlify, Vercel, Cloudflare Pages, Firebase) serve 404.html for unknown paths.
await writePage("/404", "404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path: url, priority }) =>
      `  <url>\n    <loc>${new URL(url, SITE_URL)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority.toFixed(1)}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await writeFile(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", SITE_URL)}\n`);
console.log(`  wrote sitemap.xml (${routes.length} URLs) and robots.txt`);

await rm(ssrDir, { recursive: true, force: true });
