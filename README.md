# American Fork Junk Removal — Lead Gen Site

A hyper-local, bloat-free **rank & rent** lead-generation asset built to rank #1 on
Google for **"junk removal American Fork UT"** and convert visitors into phone
calls and form leads.

Built with **[Astro](https://astro.build)** (static output, system fonts, no web
fonts, inlined CSS, zero client JS except a tiny form handler) for near-perfect
Lighthouse scores and instant CDN load times.

---

## Quick start

```bash
npm install
npm run dev               # American Fork site at http://localhost:4321
SITE_KEY=slc npm run dev  # preview the Salt Lake City site instead
npm run build:all         # build all three sites into dist/<key>/
npm run preview           # preview a production build
```

This repo builds **three localized sites** from one codebase — see
[Multi-site architecture](#multi-site-architecture-3-localized-sites-1-codebase)
for the build keys, per-site config, and Cloudflare Pages deploy steps.

---

## ⭐ The two things you'll change first

> **Multi-site note:** this repo now builds three localized sites (see
> [Multi-site architecture](#multi-site-architecture-3-localized-sites-1-codebase)).
> Per-location content lives in `src/config/profiles/<key>.ts`; values shared by
> all sites (phone, form endpoint) live in
> [`src/config/profiles/shared.ts`](src/config/profiles/shared.ts).

### 1. Phone number (call tracking)

The phone number is a global variable. To swap in a **CallRail / Twilio**
tracking number for all sites, edit `SHARED_PHONE` in `profiles/shared.ts` —
every `tel:` link and on-page number updates automatically. For a **per-market**
tracking number (recommended), override `phone` in that market's profile
instead:

```ts
// src/config/profiles/shared.ts
export const SHARED_PHONE = { raw: '+18017080084', display: '(801) 708-0084' };
```

Every phone instance is already a clickable `tel:` link, each tagged with a
`data-call="..."` attribute (header, hero, sticky bar, footer, CTA, forms,
thank-you) so you can wire click-to-call analytics easily.

### 2. Form routing → Formspree + Thank-You redirect

The lead form (**Name, Phone, Timeline, What do you need removed?**) is wired for
**[Formspree](https://formspree.io)**. It POSTs to the active profile's
`form.endpoint` and then redirects the visitor to **`/thank-you`** so a
conversion pixel can fire.

```ts
// src/config/profiles/shared.ts (shared default for all sites)
export const SHARED_FORM = {
  endpoint: 'https://formspree.io/f/xrednnvq',
  redirect: '/thank-you',
};
```

**Setup:**

1. Create a free account at [formspree.io](https://formspree.io) and add a form.
   Set the notification email to wherever leads should land.
2. Copy the endpoint (`https://formspree.io/f/abcdwxyz`) into `SHARED_FORM`.
3. **Recommended:** create a *separate* Formspree form per market and override
   `form` in each profile, so SLC / Utah / American Fork leads land in the right
   inbox. Every submission is tagged with the originating site + region either way.
4. Submit the form once on each live site so Formspree can send its one-time
   confirmation email — click the link to verify, and leads start flowing.

The form submits the fields `name`, `phone`, `message`, and `lead_source`
(which page/section the lead came from), plus Formspree's control fields:
`_subject` (notification subject), `_next` (Thank-You redirect for the no-JS
path), and `_gotcha` (honeypot — Formspree silently drops bot submissions that
fill it).

> The form uses fetch + JS to redirect on success (Formspree returns JSON for
> AJAX submits), and falls back to a native POST + `_next` redirect if
> JavaScript is disabled.

**Want a raw webhook / different provider instead?** Point `endpoint` at your
webhook (Zapier, Make, n8n, your CRM) — the visible fields are standard
`multipart/form-data` (`name`, `phone`, `timeline`, `message`, `lead_source`,
`site`). Provider-specific control fields (`_subject`, `_next`, `_gotcha`) live
in [`src/components/LeadForm.astro`](src/components/LeadForm.astro).

### Conversion tracking (GA4)

GA4 is wired in. To turn it on for a site, set that profile's `gaId` to its GA4
**Measurement ID** (`G-XXXXXXXXXX`) in `src/config/profiles/<key>.ts`. While it's
left as the `G-XXXXXXXXXX` placeholder, no analytics code is emitted at all.

When enabled:

- The GA4 base tag (`gtag.js`) loads site-wide (async) so sessions, traffic
  source, and campaign data are captured for proper attribution.
- The **thank-you page fires a `generate_lead` event** — it only loads after a
  successful form submit, so each event = one captured lead. In GA4 →
  **Admin → Events**, mark `generate_lead` as a **Key Event (conversion)**.
- Each site uses its own `gaId`, so set up a separate GA4 property per market.

To also track a **Google Ads** conversion, drop a `gtag('event','conversion',…)`
call into the marked spot in [`src/pages/thank-you.astro`](src/pages/thank-you.astro).

---

## Multi-site architecture (3 localized sites, 1 codebase)

This repo builds **three independent, fully localized sites** from one set of
templates. Each targets its own market, domain, content, schema, and share
image — they are *not* duplicate content of each other.

| SITE_KEY       | Domain                          | Market / target          |
| -------------- | ------------------------------- | ------------------------ |
| `americanfork` | `junkremovalamericanfork.com`   | American Fork (city)     |
| `slc`          | `junkremovalslc.com`            | Salt Lake City (city)    |
| `utah`         | `junkremovalservicesutah.com`   | Utah (statewide)         |

**How it works:** a `SITE_KEY` env var selects a profile at build time
(`src/config/site.ts`). Each profile lives in `src/config/profiles/<key>.ts` and
owns everything location-specific: domain, business name, brand wordmark, city/
region labels, geo + areaServed, areas served, reviews, FAQs, and all page
titles/descriptions/H1s/ledes. Templates and components read from the active
profile, so the same code renders a different localized site per key.

```bash
# Build one site locally (outputs to dist/<key>/)
npm run build:af      # American Fork
npm run build:slc     # Salt Lake City
npm run build:utah    # statewide Utah
npm run build:all     # all three

# Preview a specific site
SITE_KEY=slc npm run dev
```

**Shared vs. per-site settings**

- Phone number & form endpoint default to shared values in
  `src/config/profiles/shared.ts`. For real per-market lead attribution, give
  each profile its own CallRail/Twilio number and its own Formspree form
  (override `phone` / `form` in that profile). Every submission is already
  tagged with the originating site name + region.
- Share images are pre-generated per site (`public/og-<key>.png`) by
  `npm run gen:images`. Edit the text in `scripts/gen-images.mjs`.

### City landing pages (statewide Utah site only)

The Utah site adds per-city landing pages (e.g. `/provo`, `/ogden`, `/st-george`)
to capture city-level "junk removal [city]" searches. They're generated by
[`src/pages/[city].astro`](src/pages/%5Bcity%5D.astro) from
[`src/config/cities.ts`](src/config/cities.ts), each with unique copy,
neighborhood lists, FAQs (FAQPage schema), and breadcrumbs.

- The route only emits pages when the active profile is statewide
  (`scope: 'state'`), so the city-scoped sites (American Fork, SLC) never build
  them. The Utah homepage links to every city via a "Cities We Serve" grid, and
  each city cross-links to nearby cities.
- **Add a city:** append an entry to `UTAH_CITIES` in `src/config/cities.ts`
  (slug, name, county, blurb, neighborhoods, nearby) — the page, internal links,
  and sitemap entry are created automatically.
- Salt Lake City is intentionally excluded here so it doesn't compete with its
  own dedicated site, `junkremovalslc.com`.

### Deploying the three sites on Cloudflare Pages

Create **one Cloudflare Pages project per site**, all pointing at this repo:

| Project        | Env var                 | Build command     | Output dir | Custom domain                 |
| -------------- | ----------------------- | ----------------- | ---------- | ----------------------------- |
| af-junk        | `SITE_KEY=americanfork` | `npm run build`   | `dist`     | `junkremovalamericanfork.com` |
| slc-junk       | `SITE_KEY=slc`          | `npm run build`   | `dist`     | `junkremovalslc.com`          |
| utah-junk      | `SITE_KEY=utah`         | `npm run build`   | `dist`     | `junkremovalservicesutah.com` |

`npm run build` reads `SITE_KEY` from the project's environment and outputs the
correct localized site to `dist`. Set `NODE_VERSION=20` (or `22`) in each
project's env if the default is older. Add each domain under that project's
**Custom domains** — Cloudflare handles DNS + SSL.

> Because each domain serves its *own* market-specific content with its own
> canonical/sitemap/schema, there's no duplicate-content issue and no redirects
> needed. (Optional: also attach the `www.` variant of each domain and let
> Cloudflare 301 it to the apex.)

---

## Pages

| Route                 | Purpose                          | Target keyword                  |
| --------------------- | -------------------------------- | ------------------------------- |
| `/`                   | Main conversion + local authority| junk removal American Fork UT   |
| `/services`           | Everything we haul away          | debris removal, hauling services|
| `/appliance-removal`  | Niche intent capture             | appliance removal American Fork |
| `/furniture-removal`  | Residential cleanout intent      | furniture disposal American Fork|
| `/contact`            | Dedicated lead capture form      | junk removal quote American Fork|
| `/thank-you`          | Post-submit conversion page      | (noindex)                       |

---

## SEO baked in

- **Title / meta description** per page (home uses the exact brief copy).
- **HomeAndConstructionBusiness JSON-LD** schema in `Layout.astro`, with
  `areaServed` locked to **American Fork, Utah (ZIP 84003)**, geo coordinates,
  hours, offers, and aggregate rating.
- **Heading structure** follows the brief: one H1 per page, descriptive H2s
  (*What We Take*, *How Our American Fork Hauling Process Works*) and H3
  item categories.
- Auto-generated **sitemap** (`@astrojs/sitemap`) + `robots.txt`.
- Canonical URLs, Open Graph tags, geo meta tags.
- **Mobile-first**, with a sticky **"Tap to Call"** bar anchored to the bottom
  of the screen on phones.
- **Zero distractions**: no outbound links, no social icons, no complex nav —
  only Call or Fill the Form.

---

## Images

To keep the payload near-zero, visuals use inline SVG/CSS (no image requests).
When you add real job photos, **compress them to WebP** and use descriptive,
local alt text per the brief, e.g.:

```html
<img src="/images/junk-removal-truck-american-fork-utah.webp"
     alt="Junk removal truck in American Fork Utah" width="..." height="..." />
```

Astro's built-in `<Image />` component (from `astro:assets`) will optimize and
serve WebP automatically if you place source photos in `src/assets/`.

---

## ⚠️ Before going live (each site)

- Replace the **placeholder reviews** for each market (defined per profile in
  `src/config/profiles/<key>.ts`) with real, verifiable customer reviews.
- Confirm the domain in each profile's `url` is correct (drives canonical URLs,
  sitemap, schema, and OG URLs).
- Plug in the real **tracking phone number** and **Formspree form** — ideally a
  separate number + form per market (see Multi-site architecture above).
- Submit each site's sitemap in **Google Search Console** and set up a **Google
  Business Profile** per market — for local-service terms, GBP + citations drive
  the map pack more than on-page SEO alone.
