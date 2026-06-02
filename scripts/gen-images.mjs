// Regenerate social/share + schema raster images from source assets.
// Run with: npm run gen:images
// Outputs (committed to /public): og-image.png (1200x630), logo.png.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const p = (rel) => resolve(root, rel);

// 1) Open Graph / Twitter card image (raster — SVG is not supported by most
//    social crawlers or Google rich results).
const ogBase = await sharp(p('scripts/og-source.svg'), { density: 96 })
  .resize(1200, 630)
  .png()
  .toBuffer();

const logoForOg = await sharp(p('src/assets/junkremoval-logo.png'))
  .resize({ width: 300 })
  .png()
  .toBuffer();

await sharp(ogBase)
  .composite([{ input: logoForOg, top: 250, left: 870 }])
  .png({ quality: 90 })
  .toFile(p('public/og-image.png'));

// 2) Square logo for schema.org (ImageObject / Organization.logo).
await sharp(p('src/assets/junkremoval-logo.png'))
  .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(p('public/logo.png'));

console.log('Generated public/og-image.png and public/logo.png');
