import type { SiteProfile } from '../types';
import { SHARED_PHONE, SHARED_FORM } from './shared';

export const americanfork: SiteProfile = {
  key: 'americanfork',
  url: 'https://junkremovalamericanfork.com',

  businessName: 'American Fork Junk Removal',
  legalName: 'American Fork Junk Removal',
  tagline: 'Fast, Affordable, Same-Day Hauling',
  brand: { line1: 'American Fork', line2: 'Junk Removal' },

  scope: 'city',
  city: 'American Fork',
  state: 'UT',
  stateLong: 'Utah',
  zip: '84003',

  region: 'American Fork, UT',
  regionShort: 'American Fork',
  nearbyLabel: '& nearby Utah County',

  geo: { lat: 40.3769, lng: -111.7958 },
  areaServed: { type: 'City', name: 'American Fork, Utah', wikidata: 'https://www.wikidata.org/wiki/Q749477' },
  serviceRadius: 16000,

  hours: 'Mo-Su 06:00-21:00',
  priceRange: '$$',

  phone: SHARED_PHONE,
  form: SHARED_FORM, // Formspree: xrednnvq
  gaId: 'G-XXXXXXXXXX', // TODO: American Fork GA4 Measurement ID

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

  ogImage: '/og-americanfork.png',

  reviewsEyebrow: 'What Your American Fork Neighbors Say',
  reviews: [
    {
      name: 'Jared M.',
      area: 'Shadow Valley, American Fork',
      text: 'Booked in the morning, gone by afternoon. They hauled an old fridge and a couch out of my basement without a scratch on the walls. Fair price, no surprises.',
    },
    {
      name: 'Brittany S.',
      area: 'The Highlands, American Fork',
      text: 'We did a full garage cleanout and they took everything — old furniture, paint cans, yard waste. Friendly crew and same-day service. Highly recommend.',
    },
    {
      name: 'Devin R.',
      area: 'Downtown American Fork',
      text: 'Called for construction debris after a bathroom remodel. Quick quote over the phone, showed up on time, and the price matched exactly. Will use again.',
    },
  ],

  content: {
    home: {
      title: 'Junk Removal American Fork UT | Fast & Affordable',
      description:
        'Need fast junk removal in American Fork, Utah? We haul away furniture, appliances, yard waste, and construction debris. Call now for a free estimate!',
      h1: 'Junk Removal Services in American Fork, UT',
      lede: 'Fast, affordable, same-day junk hauling in American Fork, Utah. We take furniture, appliances, yard waste, and construction debris — you point, we haul.',
      faqHeading: 'American Fork Junk Removal FAQs',
      faqs: [
        {
          q: 'How much does junk removal cost in American Fork, UT?',
          a: 'Most American Fork junk removal jobs are priced by how much space your items take up in the truck, starting from single-item pickups up to full truckloads. We give you an upfront, all-inclusive price before we start — no hidden fees. Call (801) 708-0084 for a free estimate.',
        },
        {
          q: 'Do you offer same-day junk removal?',
          a: 'Yes. We offer same-day and next-day junk removal across American Fork and nearby Utah County whenever our schedule allows. Call early in the day for the best chance at a same-day pickup.',
        },
        {
          q: 'What items do you take?',
          a: 'We haul almost anything non-hazardous: furniture, appliances, mattresses, yard waste, construction debris, electronics, hot tubs, and full garage, basement, or estate cleanouts. We cannot take hazardous materials like paint, chemicals, or asbestos.',
        },
        {
          q: 'Do I need to move everything outside first?',
          a: 'No. Our crew does all the heavy lifting. Just point to what you want gone — whether it is in the basement, garage, attic, or backyard — and we carry it out for you.',
        },
        {
          q: 'What areas do you serve?',
          a: 'We serve all of American Fork, Utah (84003) and surrounding communities including Highland, Cedar Hills, Pleasant Grove, Lehi, and Alpine.',
        },
      ],
    },
    services: {
      title: 'Junk & Debris Removal American Fork UT | Full-Service Hauling',
      description:
        'Full-service junk & debris removal in American Fork, Utah. Furniture, appliances, yard waste, construction debris, and full property cleanouts. Same-day hauling — free estimate!',
      eyebrow: 'Full-Service Hauling in American Fork, UT',
      h1: 'Junk & Debris Removal Services in American Fork, UT',
      lede: 'One local crew for everything you need gone — junk, debris, and complete cleanouts. Upfront pricing and same-day service across American Fork and Utah County.',
    },
    appliance: {
      title: 'Appliance Removal American Fork UT | Same-Day Pickup',
      description:
        'Fast appliance removal in American Fork, Utah. We haul away old refrigerators, washers, dryers, stoves, and water heaters. Same-day pickup — free estimate!',
      eyebrow: 'Same-Day Appliance Pickup in American Fork, UT',
      h1: 'Appliance Removal in American Fork, UT',
      lede: 'Got a dead fridge or an old washer taking up space? We haul away heavy appliances across American Fork — fast, insured, and same-day. You don’t lift a finger.',
    },
    furniture: {
      title: 'Furniture Removal American Fork UT | Same-Day Pickup',
      description:
        'Need furniture disposal in American Fork, Utah? We remove couches, mattresses, dressers, and old furniture. Same-day pickup and donation — free estimate!',
      eyebrow: 'Same-Day Furniture Pickup in American Fork, UT',
      h1: 'Furniture Removal in American Fork, UT',
      lede: 'Old couch, worn-out mattress, or a houseful of furniture to clear? We disassemble, lift, and haul it all away across American Fork — and donate what we can.',
    },
    contact: {
      title: 'Junk Removal Quote American Fork UT | Free Same-Day Estimate',
      description:
        'Get a free junk removal quote in American Fork, Utah. Call now or send a few details for fast, upfront pricing and same-day pickup. No obligation!',
      h1: 'Get Your Free Junk Removal Quote in American Fork, UT',
      lede: 'Tell us what you need hauled and we’ll get right back to you with an upfront price. Prefer to talk? Call now — we answer 7 days a week.',
    },
  },
};
