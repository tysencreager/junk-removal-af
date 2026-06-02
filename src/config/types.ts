/**
 * Shape of a per-location site profile. One codebase renders multiple
 * localized sites; the active profile is chosen at build time by SITE_KEY
 * (see src/config/site.ts). Add a new market by dropping a new profile file
 * into src/config/profiles/ and registering it in site.ts.
 */

export interface Review {
  name: string;
  area: string;
  text: string;
}

export interface PageContent {
  title: string;
  description: string;
  /** Hero eyebrow override (optional; falls back to a star-rating line). */
  eyebrow?: string;
  h1: string;
  lede: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface SiteProfile {
  /** Stable key, matches the profile filename and SITE_KEY value. */
  key: string;

  /** Primary (canonical) domain for this site. */
  url: string;

  businessName: string;
  legalName: string;
  tagline: string;

  /** Two-line wordmark shown next to the logo in the header. */
  brand: { line1: string; line2: string };

  /** 'city' tightens copy to one town; 'state' frames it region-wide. */
  scope: 'city' | 'state';

  /** Address locality used in LocalBusiness schema. */
  city: string;
  state: string; // e.g. "UT"
  stateLong: string; // e.g. "Utah"
  zip: string;

  /** Heading label, e.g. "American Fork, UT" or "Utah". */
  region: string;
  /** Short label used mid-sentence, e.g. "American Fork" or "Utah". */
  regionShort: string;
  /** Trailing phrase for "serving X", e.g. "& nearby Utah County". */
  nearbyLabel: string;

  geo: { lat: number; lng: number };
  /** schema.org areaServed target. */
  areaServed: { type: 'City' | 'State'; name: string; wikidata?: string };
  /** Radius (meters) for the schema serviceArea GeoCircle. */
  serviceRadius: number;

  hours: string;
  priceRange: string;

  phone: { raw: string; display: string };

  form: { endpoint: string; redirect: string };

  areasServed: string[];

  /** Pre-rendered social/share image for this site (in /public). */
  ogImage: string;

  reviews: Review[];
  reviewsEyebrow: string;

  content: {
    home: PageContent & { faqHeading: string; faqs: Faq[] };
    services: PageContent;
    appliance: PageContent;
    furniture: PageContent;
    contact: PageContent;
  };
}
