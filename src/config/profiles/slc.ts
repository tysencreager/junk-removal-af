import type { SiteProfile } from '../types';
import { SHARED_PHONE } from './shared';

export const slc: SiteProfile = {
  key: 'slc',
  url: 'https://junkremovalslc.com',

  businessName: 'Salt Lake City Junk Removal',
  legalName: 'Salt Lake City Junk Removal',
  tagline: 'Fast, Affordable, Same-Day Hauling',
  brand: { line1: 'Salt Lake City', line2: 'Junk Removal' },

  scope: 'city',
  city: 'Salt Lake City',
  state: 'UT',
  stateLong: 'Utah',
  zip: '84101',

  region: 'Salt Lake City, UT',
  regionShort: 'Salt Lake City',
  nearbyLabel: '& the Salt Lake Valley',

  geo: { lat: 40.7608, lng: -111.891 },
  areaServed: { type: 'City', name: 'Salt Lake City, Utah', wikidata: 'https://www.wikidata.org/wiki/Q23337' },
  serviceRadius: 24000,

  hours: 'Mo-Su 06:00-21:00',
  priceRange: '$$',

  phone: SHARED_PHONE,
  form: { endpoint: 'https://formspree.io/f/xbdergae', redirect: '/thank-you' },
  gaId: 'G-XXXXXXXXXX', // TODO: Salt Lake City GA4 Measurement ID

  areasServed: [
    'Downtown Salt Lake City',
    'Sugar House',
    'The Avenues',
    'Federal Heights',
    'Liberty Wells',
    'Rose Park',
    'Glendale',
    'Poplar Grove',
    'Yalecrest',
    'Millcreek (nearby)',
    'Holladay (nearby)',
    'Murray (nearby)',
    'South Salt Lake (nearby)',
    'West Valley City (nearby)',
  ],

  ogImage: '/og-slc.png',

  reviewsEyebrow: 'What Your Salt Lake City Neighbors Say',
  reviews: [
    {
      name: 'Megan T.',
      area: 'Sugar House, Salt Lake City',
      text: 'Same-day pickup on a sectional and an old mattress. The crew was quick, polite, and the price they quoted on the phone is exactly what I paid. Easy.',
    },
    {
      name: 'Carlos R.',
      area: 'The Avenues, Salt Lake City',
      text: 'Carried a fridge and washer down two flights without marking the walls. Booked in the morning and they were done by early afternoon. Highly recommend.',
    },
    {
      name: 'Ashley P.',
      area: 'Rose Park, Salt Lake City',
      text: 'Did a full garage cleanout — old furniture, junk, yard waste, all of it. Fair price and they swept up after. Will use them again for sure.',
    },
  ],

  content: {
    home: {
      title: 'Junk Removal Salt Lake City UT | Fast & Affordable',
      description:
        'Need fast junk removal in Salt Lake City, Utah? We haul away furniture, appliances, yard waste, and construction debris. Call now for a free estimate!',
      h1: 'Junk Removal Services in Salt Lake City, UT',
      lede: 'Fast, affordable, same-day junk hauling in Salt Lake City, Utah. We take furniture, appliances, yard waste, and construction debris — you point, we haul.',
      faqHeading: 'Salt Lake City Junk Removal FAQs',
      faqs: [
        {
          q: 'How much does junk removal cost in Salt Lake City, UT?',
          a: 'Most Salt Lake City junk removal jobs are priced by how much space your items take up in the truck, from single-item pickups up to full truckloads. We give you an upfront, all-inclusive price before we start — no hidden fees. Call (801) 708-0084 for a free estimate.',
        },
        {
          q: 'Do you offer same-day junk removal?',
          a: 'Yes. We offer same-day and next-day junk removal across Salt Lake City and the Salt Lake Valley whenever our schedule allows. Call early in the day for the best chance at a same-day pickup.',
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
          q: 'What areas do you serve?',
          a: 'We serve all of Salt Lake City and the surrounding valley, including Sugar House, The Avenues, Millcreek, Holladay, Murray, South Salt Lake, and West Valley City.',
        },
      ],
    },
    services: {
      title: 'Junk & Debris Removal Salt Lake City UT | Full-Service Hauling',
      description:
        'Full-service junk & debris removal in Salt Lake City, Utah. Furniture, appliances, yard waste, construction debris, and full property cleanouts. Same-day hauling — free estimate!',
      eyebrow: 'Full-Service Hauling in Salt Lake City, UT',
      h1: 'Junk & Debris Removal Services in Salt Lake City, UT',
      lede: 'One local crew for everything you need gone — junk, debris, and complete cleanouts. Upfront pricing and same-day service across Salt Lake City and the valley.',
    },
    appliance: {
      title: 'Appliance Removal Salt Lake City UT | Same-Day Pickup',
      description:
        'Fast appliance removal in Salt Lake City, Utah. We haul away old refrigerators, washers, dryers, stoves, and water heaters. Same-day pickup — free estimate!',
      eyebrow: 'Same-Day Appliance Pickup in Salt Lake City, UT',
      h1: 'Appliance Removal in Salt Lake City, UT',
      lede: 'Got a dead fridge or an old washer taking up space? We haul away heavy appliances across Salt Lake City — fast, insured, and same-day. You don’t lift a finger.',
    },
    furniture: {
      title: 'Furniture Removal Salt Lake City UT | Same-Day Pickup',
      description:
        'Need furniture disposal in Salt Lake City, Utah? We remove couches, mattresses, dressers, and old furniture. Same-day pickup and donation — free estimate!',
      eyebrow: 'Same-Day Furniture Pickup in Salt Lake City, UT',
      h1: 'Furniture Removal in Salt Lake City, UT',
      lede: 'Old couch, worn-out mattress, or a houseful of furniture to clear? We disassemble, lift, and haul it all away across Salt Lake City — and donate what we can.',
    },
    contact: {
      title: 'Junk Removal Quote Salt Lake City UT | Free Same-Day Estimate',
      description:
        'Get a free junk removal quote in Salt Lake City, Utah. Call now or send a few details for fast, upfront pricing and same-day pickup. No obligation!',
      h1: 'Get Your Free Junk Removal Quote in Salt Lake City, UT',
      lede: 'Tell us what you need hauled and we’ll get right back to you with an upfront price. Prefer to talk? Call now — we answer 7 days a week.',
    },
  },
};
