/**
 * Active site selector.
 *
 * One codebase, multiple localized sites. The build picks a profile via the
 * SITE_KEY environment variable (defaults to American Fork):
 *
 *   SITE_KEY=americanfork  npm run build   → junkremovalamericanfork.com
 *   SITE_KEY=slc           npm run build   → junkremovalslc.com
 *   SITE_KEY=utah          npm run build   → junkremovalservicesutah.com
 *
 * Convenience scripts: build:af / build:slc / build:utah / build:all.
 *
 * Add a new market: create src/config/profiles/<key>.ts and register it in
 * PROFILES below. Everything else (copy, schema, sitemap, OG image) follows.
 */
import type { SiteProfile } from './types';
import { americanfork } from './profiles/americanfork';
import { slc } from './profiles/slc';
import { utah } from './profiles/utah';

const PROFILES: Record<string, SiteProfile> = {
  americanfork,
  slc,
  utah,
};

const key = process.env.SITE_KEY ?? 'americanfork';
const profile = PROFILES[key];

if (!profile) {
  throw new Error(
    `Unknown SITE_KEY "${key}". Valid keys: ${Object.keys(PROFILES).join(', ')}`,
  );
}

// Derive the tel: href once so components never build it themselves.
export const SITE = {
  ...profile,
  phone: {
    ...profile.phone,
    tel: `tel:${profile.phone.raw}`,
  },
};

export type Site = typeof SITE;
