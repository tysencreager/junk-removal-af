import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';

// @astrojs/sitemap only emits sitemap-index.xml + sitemap-0.xml, but crawlers
// and audit tools probe the conventional /sitemap.xml. Publish the full urlset
// there too (the site is ~20 URLs, far under the 45k entry limit, so
// sitemap-0.xml always contains every page). Must be listed AFTER sitemap()
// in `integrations` — build:done hooks run in integration order.
function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const out = fileURLToPath(dir);
        await copyFile(join(out, 'sitemap-0.xml'), join(out, 'sitemap.xml'));
      },
    },
  };
}

// https://astro.build
// Static output for maximum speed + near-perfect Lighthouse scores.
// Deploy the generated `dist/` folder to any fast CDN (Netlify, Cloudflare Pages, Vercel).
export default defineConfig({
  site: SITE.url,
  output: 'static',
  // One canonical URL form everywhere (links, canonicals, sitemap). The CDN
  // serves directory-style URLs, so the slashed form is the one that resolves
  // without a redirect — 'always' keeps Google from crawling redirect variants.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Keep the noindex thank-you page out of the sitemap.
      filter: (page) => !page.includes('/thank-you'),
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
    sitemapXmlAlias(),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
