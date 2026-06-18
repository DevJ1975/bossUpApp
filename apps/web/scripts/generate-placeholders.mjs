/**
 * Generates on-brand gradient placeholder images in public/images.
 *
 * These are intentionally abstract "atmosphere" visuals in the BossUp palette.
 * To use real photography (e.g. licensed Adobe Stock), replace the files of the
 * same name (swap the extension to .jpg and update the <img> src if desired).
 *
 * Run with: node scripts/generate-placeholders.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("public/images");
const W = 1600;
const H = 1100;

/** @param {[number,number,number,string,number][]} blobs */
function svg(blobs) {
  const shapes = blobs
    .map(
      ([cx, cy, r, color, op]) =>
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${op}"/>`
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.3" y2="1">
      <stop offset="0" stop-color="#0b1224"/>
      <stop offset="1" stop-color="#05070f"/>
    </linearGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="120"/>
    </filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
    <radialGradient id="vig" cx="50%" cy="42%" r="80%">
      <stop offset="55%" stop-color="#05070f" stop-opacity="0"/>
      <stop offset="100%" stop-color="#05070f" stop-opacity="0.9"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g filter="url(#soft)">${shapes}</g>
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.05"/>
</svg>`;
}

const AMBER = "#ffb020";
const GOLD = "#ffd57a";
const CYAN = "#22d3ee";
const IRIS = "#7c5cff";
const CORAL = "#ff7849";

const images = {
  "airport-terminal": [
    [380, 250, 520, CYAN, 0.5],
    [1300, 850, 460, AMBER, 0.4],
    [900, 400, 380, IRIS, 0.35],
  ],
  "frontline-team": [
    [420, 760, 520, AMBER, 0.5],
    [1200, 280, 460, CORAL, 0.4],
    [1050, 820, 360, IRIS, 0.3],
  ],
  coaching: [
    [1150, 300, 520, CYAN, 0.5],
    [430, 820, 460, IRIS, 0.45],
    [760, 420, 320, GOLD, 0.3],
  ],
  "mobile-learning": [
    [350, 350, 480, AMBER, 0.5],
    [1280, 720, 480, CYAN, 0.45],
    [820, 520, 300, GOLD, 0.3],
  ],
  leadership: [
    [800, 320, 560, AMBER, 0.5],
    [1250, 880, 420, GOLD, 0.4],
    [320, 820, 380, CORAL, 0.3],
  ],
  partnership: [
    [430, 420, 520, IRIS, 0.5],
    [1220, 700, 500, CYAN, 0.45],
    [820, 540, 300, AMBER, 0.25],
  ],
};

await mkdir(OUT, { recursive: true });
for (const [name, blobs] of Object.entries(images)) {
  const file = path.join(OUT, `${name}.svg`);
  await writeFile(file, svg(blobs), "utf8");
  console.log("wrote", path.relative(process.cwd(), file));
}
console.log(`\nDone — ${Object.keys(images).length} placeholder images generated.`);
