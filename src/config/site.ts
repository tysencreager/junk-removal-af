/**
 * SINGLE SOURCE OF TRUTH for the whole site.
 *
 * ── CALL TRACKING ──────────────────────────────────────────────────────────
 * The phone number lives here as a global variable. To swap in a CallRail /
 * Twilio tracking number later, change ONLY `phone.raw` and `phone.display`
 * below — every `tel:` link and on-page number across all pages updates
 * automatically. Do not hard-code phone numbers anywhere else.
 *
 * ── FORM ROUTING ───────────────────────────────────────────────────────────
 * Lead form submissions POST to `form.endpoint`. Point this at your webhook
 * or a form-to-email service (Web3Forms, Formspree, Basin, Make/Zapier, etc.).
 * On success the visitor is redirected to `/thank-you` so a conversion pixel
 * can fire. See README.md for wiring instructions.
 */

const PHONE_RAW = '+18017080084'; // swap here for a CallRail/Twilio tracking number later
const PHONE_DISPLAY = '(801) 708-0084'; // keep in sync with the number above

export const SITE = {
  // Used for canonical URLs, sitemap, and schema. Update to the live domain.
  url: 'https://www.americanforkjunkremoval.com',

  businessName: 'American Fork Junk Removal',
  legalName: 'American Fork Junk Removal',
  tagline: 'Fast, Affordable, Same-Day Hauling',

  city: 'American Fork',
  state: 'UT',
  stateLong: 'Utah',
  zip: '84003',

  // Geo center of American Fork, UT (used in LocalBusiness schema).
  geo: { lat: 40.3769, lng: -111.7958 },

  hours: 'Mo-Su 06:00-21:00',
  priceRange: '$$',

  phone: {
    raw: PHONE_RAW, // E.164 for tel: links
    display: PHONE_DISPLAY, // human-readable, shown on the page
    tel: `tel:${PHONE_RAW}`,
  },

  // Lead-capture form routing — Formspree.
  form: {
    // Your Formspree endpoint. Create a form at https://formspree.io and paste
    // its ID here (Forms → your form → the URL ends in /f/XXXXXXXX).
    // TODO: replace `xxxxxxxx` with your real Formspree form ID.
    endpoint: 'https://formspree.io/f/xxxxxxxx',
    // Visitors land here after a successful submit (fire conversion pixel here).
    redirect: '/thank-you',
  },

  // Local trust signal — specific American Fork neighborhoods & nearby areas.
  areasServed: [
    'Downtown American Fork',
    'Shadow Valley',
    'The Highlands',
    'Hunter Hollow',
    'Greenwood',
    'Forbush Corner',
    'Manning Canyon',
    'Mountainville',
    'Pioneer Crossing',
    'Cedar Hills (nearby)',
    'Highland (nearby)',
    'Pleasant Grove (nearby)',
    'Lehi (nearby)',
    'Alpine (nearby)',
  ],

  zipsServed: ['84003'],
} as const;

export type Site = typeof SITE;
