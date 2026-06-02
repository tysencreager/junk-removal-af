import type { APIRoute } from 'astro';
import { SITE } from '../config/site';

// Generated per site so the sitemap URL always points at the active domain.
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# Keep the post-conversion page out of the index.
Disallow: /thank-you

Sitemap: ${SITE.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
