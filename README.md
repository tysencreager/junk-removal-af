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
npm run dev      # local dev server at http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

Deploy the generated `dist/` folder to any fast CDN — **Netlify, Cloudflare
Pages, or Vercel** (drag-and-drop `dist/` or connect the repo; build command
`npm run build`, output dir `dist`).

---

## ⭐ The two things you'll change first

Everything configurable lives in **one file: [`src/config/site.ts`](src/config/site.ts)**.

### 1. Phone number (call tracking)

The phone number is a global variable. To swap in a **CallRail / Twilio**
tracking number, edit only these two lines — every `tel:` link and on-page
number across all pages updates automatically:

```ts
const PHONE_RAW = '+18015550199';      // E.164, used in tel: links
const PHONE_DISPLAY = '(801) 555-0199'; // shown on the page
```

Every phone instance on the site is already a clickable `tel:` link, and each is
tagged with a `data-call="..."` attribute (header, hero, sticky bar, footer,
CTA, forms, thank-you) so you can wire click-to-call analytics easily.

### 2. Form routing → your webhook/email + Thank-You redirect

The 3-field lead form (**Name, Phone, What do you need removed?**) POSTs to
`form.endpoint` and then redirects the visitor to **`/thank-you`** so a
conversion pixel can fire.

```ts
form: {
  endpoint: 'https://api.web3forms.com/submit', // your webhook / form service
  accessKey: 'YOUR_ACCESS_KEY_HERE',            // if your service uses one
  redirect: '/thank-you',
}
```

It works out-of-the-box with **[Web3Forms](https://web3forms.com)** (free):
create an access key, paste it above — leads arrive in your inbox and the
visitor lands on the Thank-You page.

**Using a different provider / raw webhook?** The form submits standard
`multipart/form-data` with fields: `name`, `phone`, `message`, `lead_source`,
`subject`, plus the hidden `redirect`. Point `endpoint` at your webhook (Zapier,
Make, n8n, your CRM). For **Formspree**, rename the hidden `redirect` field to
`_next` in [`src/components/LeadForm.astro`](src/components/LeadForm.astro).

> The form uses fetch + JS to redirect on success, and also falls back to a
> native POST + hidden `redirect` field if JavaScript is disabled. A honeypot
> field blocks basic spam bots.

### Conversion tracking

Add your Google Ads / GA4 / Meta pixels in
[`src/pages/thank-you.astro`](src/pages/thank-you.astro) (clearly marked
placeholder). That page is `noindex` and only loads after a successful submit,
so one `/thank-you` view = one captured lead.

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

## ⚠️ Before going live

- Replace the **placeholder reviews** in
  [`src/components/Reviews.astro`](src/components/Reviews.astro) with real,
  verifiable customer reviews.
- Set the live domain in `SITE.url` (`src/config/site.ts`) so canonical URLs,
  sitemap, and schema are correct.
- Plug in the real **tracking phone number** and **form endpoint**.
