import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

// Generated per site so the sitemap URL always points at the active domain.
export const GET: APIRoute = () => {
  // NOTE: /thank-you is intentionally NOT disallowed here. It carries a
  // noindex meta tag, and Google can only honor noindex if it's allowed to
  // crawl the page — robots-blocking it can leave it "indexed without content".
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
