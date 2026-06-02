import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';

// https://astro.build
// Static output for maximum speed + near-perfect Lighthouse scores.
// Deploy the generated `dist/` folder to any fast CDN (Netlify, Cloudflare Pages, Vercel).
export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Keep the noindex thank-you page out of the sitemap.
      filter: (page) => !page.includes('/thank-you'),
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
