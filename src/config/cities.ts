/**
 * City landing pages for the statewide Utah site (junkremovalservicesutah.com).
 * Rendered by src/pages/[city].astro, which only emits these routes when the
 * active profile is statewide (SITE.scope === 'state'). Each city has unique
 * copy + neighborhood lists to avoid thin/duplicate content.
 *
 * Salt Lake City lives here now. It used to be omitted so it wouldn't compete
 * with its own dedicated site (junkremovalslc.com); that site was retired, so
 * the statewide site is where SLC traffic should land.
 */
export interface UtahCity {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  neighborhoods: string[];
  /** Slugs of nearby cities for internal linking. */
  nearby: string[];
  /** Optional per-city SEO overrides when GSC shows the city's query profile
   *  doesn't match the shared template (e.g. South Jordan's trash/waste cluster). */
  seoTitle?: string;
  seoDescription?: string;
}

export const UTAH_CITIES: UtahCity[] = [
  {
    slug: 'provo',
    name: 'Provo',
    county: 'Utah County',
    blurb:
      'From student apartments near BYU to family homes on the east bench, we clear out furniture, appliances, and full cleanouts across Provo — fast and same-day.',
    neighborhoods: ['Downtown Provo', 'Joaquin', 'Edgemont', 'Grandview', 'Rock Canyon', 'Sunset'],
    nearby: ['orem', 'lehi', 'springville'],
  },
  {
    slug: 'orem',
    name: 'Orem',
    county: 'Utah County',
    blurb:
      'Garage cleanouts, old appliances, and curbside furniture pickups throughout Orem — we do the heavy lifting and haul it away the same day.',
    neighborhoods: ['Sharon Park', 'Cascade', 'Northridge', 'Geneva Heights', 'Suncrest', 'Hillcrest'],
    nearby: ['provo', 'lindon', 'lehi'],
    // GSC 7/23–8/5: /orem/ at 60 impr across 17 kw, dominated by cleanout
    // queries (garage/basement/home cleanouts) the template title never
    // mentions. Same relevance play as the 7/30 South Jordan override.
    seoTitle: 'Junk Removal Orem UT | Cleanouts & Same-Day Hauling',
    seoDescription:
      'Garage, basement & home cleanouts in Orem — full-service junk removal, same-day hauling, upfront prices from $75. Free quote: (801) 441-2533!',
  },
  {
    slug: 'lehi',
    name: 'Lehi',
    county: 'Utah County',
    blurb:
      'Booming Silicon Slopes neighborhoods mean lots of moves and remodels — we haul construction debris, old furniture, and appliances across Lehi same-day.',
    neighborhoods: ['Traverse Mountain', 'Thanksgiving Point', 'Holbrook Farms', 'Spring Creek', 'Sage Vista', 'Ivory Ridge'],
    nearby: ['american-fork', 'orem', 'provo'],
  },
  {
    slug: 'american-fork',
    name: 'American Fork',
    county: 'Utah County',
    blurb:
      'Single-item pickups to whole-house cleanouts across American Fork — furniture, appliances, yard waste, and construction debris, hauled the same day.',
    neighborhoods: ['Downtown', 'Shadow Valley', 'The Highlands', 'Hunter Hollow', 'Greenwood', 'Mountainville'],
    nearby: ['lehi', 'orem', 'provo'],
  },
  {
    slug: 'salt-lake-city',
    name: 'Salt Lake City',
    county: 'Salt Lake County',
    blurb:
      'Downtown high-rises, Avenues bungalows, and Sugar House rentals — we haul furniture, appliances, mattresses, and full move-out cleanouts across Salt Lake City the same day.',
    neighborhoods: ['Downtown', 'Sugar House', 'The Avenues', 'Federal Heights', 'Liberty Wells', 'Rose Park', 'Glendale', 'Poplar Grove', 'Yalecrest'],
    nearby: ['murray', 'west-valley-city', 'taylorsville'],
  },
  {
    slug: 'sandy',
    name: 'Sandy',
    county: 'Salt Lake County',
    blurb:
      'Basement and garage cleanouts, hot tub removal, and bulky furniture pickups throughout Sandy — quick quotes and same-day hauling.',
    neighborhoods: ['Historic Sandy', 'Alta View', 'Bell Canyon', 'Granite', 'Willow Creek', 'White City'],
    nearby: ['draper', 'south-jordan', 'west-jordan'],
  },
  {
    slug: 'draper',
    name: 'Draper',
    county: 'Salt Lake County',
    blurb:
      'From the Point of the Mountain to Suncrest, we clear out furniture, appliances, and renovation debris across Draper — insured crews, same-day service.',
    neighborhoods: ['Suncrest', 'SouthFork', 'Steeplechase', 'Corner Canyon', 'Hidden Valley', 'Eastridge'],
    nearby: ['sandy', 'south-jordan', 'lehi'],
  },
  {
    slug: 'south-jordan',
    name: 'South Jordan',
    county: 'Salt Lake County',
    blurb:
      'Daybreak and the surrounding South Jordan neighborhoods keep us busy with move-out cleanouts, old furniture, and appliance hauling — same-day when you need it.',
    neighborhoods: ['Daybreak', 'Glenmoor', 'River Ridge', 'Welby', 'Jordan Ridge', 'SunRiver'],
    nearby: ['west-jordan', 'sandy', 'draper'],
    // GSC 7/16–7/30: 123 impr across 55 keywords, dominated by "trash service /
    // waste / garbage south jordan" variants the generic title never mentions.
    seoTitle: 'Junk Removal South Jordan UT | Trash & Waste Hauling',
    seoDescription:
      'Same-day junk removal & trash hauling in South Jordan — Daybreak to Glenmoor. Upfront prices from $75, cleanouts & waste pickup. Call (801) 441-2533!',
  },
  {
    slug: 'west-jordan',
    name: 'West Jordan',
    county: 'Salt Lake County',
    blurb:
      'Garage, basement, and storage-unit cleanouts across West Jordan — we take furniture, appliances, and construction debris off your hands the same day.',
    neighborhoods: ['Jordan Landing', 'Westland', 'Sunset Ridge', 'Heartland', 'Country Pines', 'Maple Hills'],
    nearby: ['south-jordan', 'west-valley-city', 'sandy'],
  },
  {
    slug: 'west-valley-city',
    name: 'West Valley City',
    county: 'Salt Lake County',
    blurb:
      'Utah’s second-largest city — we handle residential and commercial junk removal across West Valley City, from single appliances to full property cleanouts.',
    neighborhoods: ['Hunter', 'Granger', 'Chesterfield', 'Redwood', 'Glendale-area', 'Valley West'],
    nearby: ['salt-lake-city', 'west-jordan', 'taylorsville'],
  },
  {
    slug: 'taylorsville',
    name: 'Taylorsville',
    county: 'Salt Lake County',
    blurb:
      'Fast, affordable junk removal across Taylorsville — old furniture, appliances, yard waste, and garage cleanouts hauled away same-day.',
    neighborhoods: ['Bennion', 'Plymouth', 'Westbrook', 'Fox Point', 'Central Taylorsville', 'Vista'],
    nearby: ['west-valley-city', 'west-jordan', 'murray'],
  },
  {
    slug: 'murray',
    name: 'Murray',
    county: 'Salt Lake County',
    blurb:
      'Centrally located Murray gets quick same-day service — furniture removal, appliance hauling, and full basement or estate cleanouts.',
    neighborhoods: ['Murray Downtown', 'Vine Street', 'Arlington Hills', 'Liberty', 'Cottonwood', 'Winchester'],
    nearby: ['salt-lake-city', 'taylorsville', 'sandy'],
  },
  {
    slug: 'ogden',
    name: 'Ogden',
    county: 'Weber County',
    blurb:
      'Historic Ogden homes and downtown lofts alike — we haul furniture, appliances, and construction debris across the city same-day.',
    neighborhoods: ['Downtown Ogden', 'East Bench', 'Jefferson', 'Shadow Valley', 'Mount Ogden', 'Marriott-Slaterville'],
    nearby: ['layton', 'roy', 'clearfield'],
  },
  {
    slug: 'layton',
    name: 'Layton',
    county: 'Davis County',
    blurb:
      'Davis County’s hub — we clear out garages, haul old appliances, and take away furniture across Layton with fast, upfront pricing.',
    neighborhoods: ['Layton Hills', 'Ellison Park', 'East Layton', 'Kays Creek', 'Adams', 'Oak Hills'],
    nearby: ['ogden', 'clearfield', 'kaysville'],
  },
  {
    slug: 'st-george',
    name: 'St. George',
    county: 'Washington County',
    blurb:
      'Southern Utah’s fastest-growing city — from snowbird cleanouts to remodel debris, we haul it away across St. George the same day.',
    neighborhoods: ['Downtown', 'Bloomington', 'Little Valley', 'Dixie Downs', 'Green Valley', 'The Ledges'],
    nearby: ['washington', 'hurricane', 'cedar-city'],
  },
  {
    slug: 'logan',
    name: 'Logan',
    county: 'Cache County',
    blurb:
      'From USU student housing to family homes in the valley, we handle furniture, appliance, and full cleanout hauling across Logan.',
    neighborhoods: ['Downtown Logan', 'The Island', 'Adams', 'Woodruff', 'Hillcrest', 'Cliffside'],
    nearby: ['north-logan', 'providence', 'smithfield'],
  },
];
