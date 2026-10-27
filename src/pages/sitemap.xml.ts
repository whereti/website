// The sitemap, written by hand like silentsilo.com's: every page, nothing else.
import { SITE } from "../links";

const PAGES = ["", "search", "faq", "privacy", "security", "supporter", "who", "terms", "legal"];

export function GET() {
  const urls = PAGES.map((p) => {
    const loc = p ? `${SITE}/${p}/` : `${SITE}/`;
    const priority = p ? "0.7" : "1.0";
    return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
