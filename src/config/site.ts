/**
 * Active site selector.
 *
 * One codebase, one live site. The build picks a profile via the SITE_KEY
 * environment variable (defaults to the statewide Utah site):
 *
 *   SITE_KEY=utah  npm run build   → junkremovalservicesutah.com
 *
 * The city-scoped American Fork and Salt Lake City sites
 * (junkremovalamericanfork.com / junkremovalslc.com) were retired — their
 * markets are now served by the statewide site's /american-fork/ and
 * /salt-lake-city/ landing pages. Their profiles live in git history if the
 * domains are ever relaunched.
 *
 * Add a new market: create src/config/profiles/<key>.ts and register it in
 * PROFILES below. Everything else (copy, schema, sitemap, OG image) follows.
 */
import type { SiteProfile } from './types';
import { utah } from './profiles/utah';

const PROFILES: Record<string, SiteProfile> = {
  utah,
};

// Normalize so case/whitespace in the SITE_KEY env var can't break a build
// (e.g. "Utah" or " utah " both resolve to the `utah` profile).
const key = (process.env.SITE_KEY ?? 'utah').trim().toLowerCase();
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
