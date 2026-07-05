/**
 * Values shared across every location profile.
 *
 * CALL TRACKING: all sites currently use one number. For per-market lead
 * attribution (the whole point of separate rank & rent sites), give each
 * profile its own CallRail/Twilio tracking number by overriding `phone` in
 * that profile instead of using SHARED_PHONE.
 *
 * FORM ROUTING: likewise, point each market at its own Formspree form so leads
 * land in the right inbox / route to the right partner. Submissions are tagged
 * with the site name regardless (see LeadForm.astro).
 */
export const SHARED_PHONE = { raw: '+18017080084', display: '(801) 708-0084' };

export const SHARED_FORM = {
  endpoint: 'https://formspree.io/f/xrednnvq',
  redirect: '/thank-you/',
};
