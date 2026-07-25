// Draws public/og.png (1200x630, the card shown when a link is shared) and
// public/icon-180.png (Apple touch icon) from SVG with sharp. Run with
// `npm run og` after changing the logo or the tagline; both files are
// committed, so the build does not need sharp.
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const icon = await readFile(new URL("../public/icon.svg", import.meta.url), "utf8");
const iconData = Buffer.from(icon).toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1030"/><stop offset="1" stop-color="#1b1048"/>
    </linearGradient>
    <linearGradient id="t" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8fb4ff"/><stop offset="0.5" stop-color="#a5a8ff"/><stop offset="1" stop-color="#c9a8ff"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0" stop-color="#4a4bf0" stop-opacity="0.55"/><stop offset="1" stop-color="#4a4bf0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <image href="data:image/svg+xml;base64,${iconData}" x="80" y="80" width="112" height="112"/>
  <text x="214" y="160" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff" letter-spacing="-1.5">whereti</text>
  <text x="80" y="330" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff" letter-spacing="-2">Find any file on your PC</text>
  <text x="80" y="420" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="72" font-weight="700" fill="url(#t)" letter-spacing="-2">the moment you type.</text>
  <text x="80" y="530" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" fill="#b9c0dc">Names and the words inside documents · Free and open source · Windows</text>
</svg>`;

await writeFile(new URL("../public/og.png", import.meta.url), await sharp(Buffer.from(svg)).png().toBuffer());
await writeFile(
  new URL("../public/icon-180.png", import.meta.url),
  await sharp(Buffer.from(icon), { density: 300 }).resize(180, 180).png().toBuffer(),
);
console.log("public/og.png and public/icon-180.png written");
