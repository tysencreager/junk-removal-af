import type { SiteProfile } from '../types';

export const utah: SiteProfile = {
  key: 'utah',
  url: 'https://junkremovalservicesutah.com',

  businessName: 'Utah Junk Removal Services',
  legalName: 'Utah Junk Removal Services',
  tagline: 'Fast, Affordable, Same-Day Hauling Statewide',
  brand: { line1: 'Utah', line2: 'Junk Removal Services' },

  scope: 'state',
  // Statewide business still needs a base locality for LocalBusiness schema.
  city: 'Salt Lake City',
  state: 'UT',
  stateLong: 'Utah',
  zip: '84101',

  region: 'Utah',
  regionShort: 'Utah',
  nearbyLabel: 'statewide',

  geo: { lat: 39.32, lng: -111.0937 },
  areaServed: { type: 'State', name: 'Utah', wikidata: 'https://www.wikidata.org/wiki/Q829' },
  serviceRadius: 250000,

  hours: 'Mo-Su 06:00-21:00',
  priceRange: '$$',

  phone: { raw: '+18014412533', display: '(801) 441-2533' },
  form: { endpoint: 'https://formspree.io/f/xjgdbyen', redirect: '/thank-you/' },
  gaId: 'G-XXXXXXXXXX', // TODO: Utah GA4 Measurement ID

  areasServed: [
    'Salt Lake City',
    'Provo',
    'Ogden',
    'West Valley City',
    'Sandy',
    'Orem',
    'Lehi',
    'Layton',
    'South Jordan',
    'St. George',
    'Logan',
    'Park City',
    'Tooele',
    'American Fork',
  ],

  ogImage: '/og-utah.png',

  reviewsEyebrow: 'What Utah Homeowners Say',
  reviews: [
    {
      name: 'Megan T.',
      area: 'Salt Lake City, UT',
      text: 'Same-day pickup on a sectional and an old mattress. Quick, polite, and the phone quote is exactly what I paid. Great service.',
    },
    {
      name: 'Derek W.',
      area: 'Provo, UT',
      text: 'Did a full garage cleanout — old furniture, junk, yard waste, all of it. Fair price and they swept up after. Would absolutely use again.',
    },
    {
      name: 'Ashley P.',
      area: 'Ogden, UT',
      text: 'Hauled a fridge and washer out of the basement without a scratch. Booked in the morning, done by afternoon. Highly recommend statewide.',
    },
  ],

  content: {
    home: {
      title: 'Junk Removal Utah | Same-Day Hauling, Upfront Prices',
      description:
        'Same-day junk removal across Utah. Furniture, appliances, yard waste & full cleanouts with upfront pricing. Call (801) 441-2533 for a free quote!',
      h1: 'Junk Removal Services in Utah',
      lede: 'Fast, affordable, same-day junk hauling across Utah. We take furniture, appliances, yard waste, and construction debris from the Wasatch Front to St. George — you point, we haul.',
      faqHeading: 'Utah Junk Removal FAQs',
      faqs: [
        {
          q: 'How much does junk removal cost in Utah?',
          a: 'Most junk removal jobs are priced by how much space your items take up in the truck, from single-item pickups up to full truckloads. We give you an upfront, all-inclusive price before we start — no hidden fees. Call (801) 441-2533 for a free estimate.',
        },
        {
          q: 'Do you offer same-day junk removal?',
          a: 'Yes. We offer same-day and next-day junk removal across Utah whenever our schedule allows. Call early in the day for the best chance at a same-day pickup in your area.',
        },
        {
          q: 'What items do you take?',
          a: 'We haul almost anything non-hazardous: furniture, appliances, mattresses, yard waste, construction debris, electronics, hot tubs, and full garage, basement, or estate cleanouts. We cannot take hazardous materials like paint, chemicals, or asbestos.',
        },
        {
          q: 'Do I need to move everything outside first?',
          a: 'No. Our crew does all the heavy lifting. Just point to what you want gone — basement, garage, attic, or backyard — and we carry it out for you.',
        },
        {
          q: 'What areas of Utah do you serve?',
          a: 'We serve communities across Utah, including Salt Lake City, Provo, Ogden, West Valley City, Sandy, Orem, Lehi, Layton, South Jordan, and St. George.',
        },
      ],
    },
    services: {
      title: 'Junk & Debris Removal Utah | Full-Service Statewide Hauling',
      description:
        'Full-service junk & debris removal across Utah. Furniture, appliances, yard waste, construction debris, and full property cleanouts. Same-day hauling — free estimate!',
      eyebrow: 'Full-Service Hauling Across Utah',
      h1: 'Junk & Debris Removal Services in Utah',
      lede: 'One crew for everything you need gone — junk, debris, and complete cleanouts. Upfront pricing and same-day service in cities across Utah.',
    },
    appliance: {
      title: 'Appliance Removal Utah | Fridge Haul-Away From $75',
      description:
        'Same-day appliance removal across Utah from $75. Freon-safe fridge & freezer disposal, heavy lifting included, upfront prices. Call (801) 441-2533!',
      eyebrow: 'Same-Day Appliance Pickup Across Utah',
      h1: 'Appliance Removal in Utah',
      lede: 'Got a dead fridge or an old washer taking up space? We haul away heavy appliances across Utah — fast, insured, and same-day. You don’t lift a finger.',
    },
    furniture: {
      title: 'Furniture Removal Utah | Same-Day Pickup Statewide',
      description:
        'Need furniture disposal in Utah? We remove couches, mattresses, dressers, and old furniture statewide. Same-day pickup and donation — free estimate!',
      eyebrow: 'Same-Day Furniture Pickup Across Utah',
      h1: 'Furniture Removal in Utah',
      lede: 'Old couch, worn-out mattress, or a houseful of furniture to clear? We disassemble, lift, and haul it all away across Utah — and donate what we can.',
    },
    contact: {
      title: 'Junk Removal Quote Utah | Free Same-Day Estimate',
      description:
        'Get a free junk removal quote anywhere in Utah. Call now or send a few details for fast, upfront pricing and same-day pickup. No obligation!',
      h1: 'Get Your Free Junk Removal Quote in Utah',
      lede: 'Tell us what you need hauled and we’ll get right back to you with an upfront price. Prefer to talk? Call now — we answer 7 days a week.',
    },
  },
};
