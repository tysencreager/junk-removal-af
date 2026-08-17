# Utah Junk Removal Services — Lead Gen Site

A statewide, bloat-free **rank & rent** lead-generation asset built to rank on
Google for **"junk removal [Utah city]"** and convert visitors into phone calls
and form leads.

Built with **[Astro](https://astro.build)** (static output, system fonts, no web
fonts, inlined CSS, zero client JS except a tiny form handler) for near-perfect
Lighthouse scores and instant CDN load times.

---

## Quick start

```bash
npm install
npm run dev        # site at http://localhost:4321
npm run build      # build into dist/
npm run preview    # preview a production build
```

The repo builds **one live site** — `junkremovalservicesutah.com` — from a
profile selected at build time. See
[Site architecture](#site-architecture-profile-driven-build) for the profile
system, the retired city sites, and Cloudflare Pages deploy steps.

---

## ⭐ The two things you'll change first

> **Where config lives:** everything location-specific is in
> [`src/config/profiles/utah.ts`](src/config/profiles/utah.ts), selected by
> [`src/config/site.ts`](src/config/site.ts). City landing pages are driven by
> [`src/config/cities.ts`](src/config/cities.ts).

### 1. Phone number (call tracking)

The phone number is a profile value. To swap in a **CallRail / Twilio**
tracking number, edit `phone` in the profile — every `tel:` link and on-page
number updates automatically:

```ts
// src/config/profiles/utah.ts
phone: { raw: '+18014412533', display: '(801) 441-2533' },
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
// src/config/profiles/utah.ts
form: { endpoint: 'https://formspree.io/f/xjgdbyen', redirect: '/thank-you/' },
```

**Setup:**

1. Create a free account at [formspree.io](https://formspree.io) and add a form.
   Set the notification email to wherever leads should land.
2. Copy the endpoint (`https://formspree.io/f/abcdwxyz`) into the profile's `form`.
3. Submit the form once on the live site so Formspree can send its one-time
   confirmation email — click the link to verify, and leads start flowing.

Every submission is tagged with the originating site + region, and
`lead_source` records which page and section the lead came from — so city-page
leads are attributable even though every market shares one form.

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
- The profile carries its own `gaId`, so the site gets its own GA4 property.

To also track a **Google Ads** conversion, drop a `gtag('event','conversion',…)`
call into the marked spot in [`src/pages/thank-you.astro`](src/pages/thank-you.astro).

---

## Site architecture (profile-driven build)

Everything location-specific lives in a **profile** selected at build time by
the `SITE_KEY` env var (`src/config/site.ts`). The profile
(`src/config/profiles/utah.ts`) owns the domain, business name, brand wordmark,
city/region labels, geo + areaServed, areas served, reviews, FAQs, and all page
titles/descriptions/H1s/ledes. Templates read from the active profile, so
re-pointing the whole site at a different market is a config change, not a
template change.

| SITE_KEY | Domain                        | Market / target  |
| -------- | ----------------------------- | ---------------- |
| `utah`   | `junkremovalservicesutah.com` | Utah (statewide) |

`utah` is the default, so a bare `npm run build` produces the live site. An
unrecognized `SITE_KEY` fails the build loudly rather than silently shipping the
wrong market.

Share images are pre-generated per key (`public/og-<key>.png`) by
`npm run gen:images`. Edit the text in `scripts/gen-images.mjs`.

### Retired sites

Two city-scoped sites were unpublished; the statewide site now serves their
markets via its `/american-fork/` and `/salt-lake-city/` landing pages.

| Retired domain                | Was SITE_KEY   | Traffic now goes to |
| ----------------------------- | -------------- | ------------------- |
| `junkremovalamericanfork.com` | `americanfork` | `/american-fork/`   |
| `junkremovalslc.com`          | `slc`          | `/salt-lake-city/`  |

Their profiles (`profiles/americanfork.ts`, `profiles/slc.ts`,
`profiles/shared.ts`) and OG images were removed but remain in git history — see
the commit that retired them if a domain is ever relaunched.

**Unpublishing checklist (Cloudflare):**

1. Delete the `af-junk` and `slc-junk` Pages projects (or just remove their
   custom domains) so neither domain serves the old build.
2. Keep both domains in the Cloudflare account and point each apex + `www` at a
   proxied placeholder record, so redirect rules can run.
3. Add a **Bulk Redirect** (or a Redirect Rule per domain) preserving link
   equity — wildcard, 301, preserving nothing else:
   - `junkremovalamericanfork.com/*` → `https://junkremovalservicesutah.com/american-fork/`
   - `junkremovalslc.com/*` → `https://junkremovalservicesutah.com/salt-lake-city/`
4. In Google Search Console, use **Change of Address** on each retired property
   only if the whole domain moved to a domain you own — otherwise just let the
   301s be crawled, and remove the retired properties once traffic drains.
5. Update any Google Business Profile, citation, or directory listing that
   points at a retired domain.

### City landing pages

The statewide site emits per-city landing pages (e.g. `/salt-lake-city`,
`/provo`, `/ogden`) to capture city-level "junk removal [city]" searches. They're
generated by [`src/pages/[city].astro`](src/pages/%5Bcity%5D.astro) from
[`src/config/cities.ts`](src/config/cities.ts), each with unique copy,
neighborhood lists, FAQs (FAQPage schema), and breadcrumbs.

- The route only emits pages when the active profile is statewide
  (`scope: 'state'`), so a city-scoped profile would never build them. The
  homepage links to every city via a "Cities We Serve" grid, and each city
  cross-links to nearby cities.
- **Add a city:** append an entry to `UTAH_CITIES` in `src/config/cities.ts`
  (slug, name, county, blurb, neighborhoods, nearby) — the page, internal links,
  and sitemap entry are created automatically. Add a matching non-slash 301 to
  [`public/_redirects`](public/_redirects).
- `seoTitle` / `seoDescription` are optional per-city overrides, added when
  Search Console shows a city's real query cluster doesn't match the shared
  template (see South Jordan and Orem).

### Deploying on Cloudflare Pages

One Cloudflare Pages project points at this repo:

| Project   | Env var         | Build command   | Output dir | Custom domain                 |
| --------- | --------------- | --------------- | ---------- | ----------------------------- |
| utah-junk | `SITE_KEY=utah` | `npm run build` | `dist`     | `junkremovalservicesutah.com` |

Set `NODE_VERSION=20` (or `22`) in the project's env if the default is older.
Add the domain under **Custom domains** — Cloudflare handles DNS + SSL.
(Optional: also attach the `www.` variant and let Cloudflare 301 it to the apex.)

---

## Pages

| Route                 | Purpose                           | Target keyword                   |
| --------------------- | --------------------------------- | -------------------------------- |
| `/`                   | Main conversion + local authority | junk removal Utah                |
| `/services`           | Everything we haul away           | debris removal, hauling services |
| `/junk-removal-cost`  | Pricing-intent guide              | junk removal cost Utah           |
| `/appliance-removal`  | Niche intent capture              | appliance removal Utah           |
| `/furniture-removal`  | Residential cleanout intent       | furniture disposal Utah          |
| `/mattress-disposal`  | Niche intent capture              | mattress disposal Salt Lake City |
| `/[city]`             | City-level intent (15 pages)      | junk removal [city] UT           |
| `/contact`            | Dedicated lead capture form       | junk removal quote Utah          |
| `/thank-you`          | Post-submit conversion page       | (noindex)                        |

---

## SEO baked in

- **Title / meta description** per page, with per-city overrides where Search
  Console shows a different query cluster.
- **HomeAndConstructionBusiness JSON-LD** schema in `Layout.astro`, with
  `areaServed` set from the active profile (**Utah**, statewide), geo
  coordinates, hours, offers, and aggregate rating.
- **Heading structure**: one H1 per page, descriptive H2s (*What We Take*, *How
  Our Utah Hauling Process Works*) and H3 item categories.
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
<img src="/images/junk-removal-truck-salt-lake-city-utah.webp"
     alt="Junk removal truck in Salt Lake City Utah" width="..." height="..." />
```

Astro's built-in `<Image />` component (from `astro:assets`) will optimize and
serve WebP automatically if you place source photos in `src/assets/`.

---

## ⚠️ Before going live

- Replace the **placeholder reviews** in `src/config/profiles/utah.ts` with
  real, verifiable customer reviews.
- Confirm the profile's `url` is correct (drives canonical URLs, sitemap,
  schema, and OG URLs).
- Plug in the real **tracking phone number** and **Formspree form**.
- Submit the sitemap in **Google Search Console** and set up a **Google Business
  Profile** — for local-service terms, GBP + citations drive the map pack more
  than on-page SEO alone.
- After retiring a domain, confirm its 301s resolve to a **200** (not a redirect
  chain) and that no live page still links to the retired domain.
