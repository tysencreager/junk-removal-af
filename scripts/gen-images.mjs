// Regenerate social/share + schema raster images for every site.
// Run with: npm run gen:images
// Outputs (committed to /public): og-<key>.png (1200x630) per site + logo.png.
//
// Keep the entries below in sync with src/config/profiles/*. They only drive
// the share image text, so a small amount of duplication is fine.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const p = (rel) => resolve(root, rel);

const SITES = [
  { key: 'americanfork', eyebrow: '#1 RATED · AMERICAN FORK, UT', l1: 'Junk Removal in', l2: 'American Fork, UT', sub: 'Fast · Affordable · Same-Day Hauling' },
  { key: 'slc', eyebrow: '#1 RATED · SALT LAKE CITY, UT', l1: 'Junk Removal in', l2: 'Salt Lake City, UT', sub: 'Fast · Affordable · Same-Day Hauling' },
  { key: 'utah', eyebrow: '#1 RATED · STATEWIDE UTAH', l1: 'Junk Removal', l2: 'Across Utah', sub: 'Fast · Affordable · Same-Day · Statewide' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const svg = (s) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#14211b"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <defs>
    <radialGradient id="g" cx="78%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#16803c" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#14211b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <text x="80" y="160" fill="#f5a623" font-family="system-ui,Arial,sans-serif" font-size="30" font-weight="800" letter-spacing="2">★★★★★  ${esc(s.eyebrow)}</text>
  <text x="80" y="285" fill="#ffffff" font-family="system-ui,Arial,sans-serif" font-size="76" font-weight="900">${esc(s.l1)}</text>
  <text x="80" y="372" fill="#ffffff" font-family="system-ui,Arial,sans-serif" font-size="76" font-weight="900">${esc(s.l2)}</text>
  <text x="80" y="452" fill="#cde0d6" font-family="system-ui,Arial,sans-serif" font-size="34" font-weight="600">${esc(s.sub)}</text>
  <g transform="translate(80,500)">
    <rect width="420" height="62" rx="12" fill="#f15a24"/>
    <text x="210" y="41" fill="#fff" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="29" font-weight="800">Call for a Free Estimate</text>
  </g>
</svg>`;

const logoForOg = await sharp(p('src/assets/junkremoval-logo.png'))
  .resize({ width: 280 })
  .png()
  .toBuffer();

for (const s of SITES) {
  const base = await sharp(Buffer.from(svg(s)), { density: 96 }).resize(1200, 630).png().toBuffer();
  await sharp(base)
    .composite([{ input: logoForOg, top: 255, left: 880 }])
    .png({ quality: 90 })
    .toFile(p(`public/og-${s.key}.png`));
  console.log(`Generated public/og-${s.key}.png`);
}

// Square logo for schema.org (ImageObject / Organization.logo) — shared.
await sharp(p('src/assets/junkremoval-logo.png'))
  .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(p('public/logo.png'));
console.log('Generated public/logo.png');
