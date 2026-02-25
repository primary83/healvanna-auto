export interface Deal {
  id: string;
  shop: string;
  website: string;
  dealsPage: string;
  city: string;
  state: string;
  title: string;
  description: string;
  discountLabel: string;
  dealType: "percent_off" | "dollar_off" | "bogo" | "new_customer" | "seasonal" | "free_service" | "bundle";
  categories: string[];
  expiration: string;
}

export const DEALS: Deal[] = [
  {
    "id": "firestone-bogo-tires",
    "shop": "Firestone Complete Auto Care",
    "website": "https://www.firestonecompleteautocare.com/",
    "dealsPage": "https://www.firestonecompleteautocare.com/offers/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Buy 3 Get 1 FREE SureDrive Touring Tires",
    "description": "Purchase three SureDrive Touring A/S tires and receive the fourth free on a set of four.",
    "discountLabel": "BOGO",
    "dealType": "bogo",
    "categories": [
      "tires"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "firestone-bridgestone-80",
    "shop": "Firestone Complete Auto Care",
    "website": "https://www.firestonecompleteautocare.com/",
    "dealsPage": "https://www.firestonecompleteautocare.com/offers/",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "$80 Off Bridgestone Turanza Tires",
    "description": "Receive $80 off instantly when you purchase a set of four Bridgestone Turanza tires.",
    "discountLabel": "$80 OFF",
    "dealType": "dollar_off",
    "categories": [
      "tires"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "firestone-pennzoil-oil",
    "shop": "Firestone Complete Auto Care",
    "website": "https://www.firestonecompleteautocare.com/",
    "dealsPage": "https://www.firestonecompleteautocare.com/offers/",
    "city": "Tampa",
    "state": "Florida",
    "title": "Up to $60 Off Pennzoil Full Synthetic Oil Change",
    "description": "$35 off instantly plus $25 Prepaid Mastercard by mail on Pennzoil Full Synthetic Oil Change.",
    "discountLabel": "$60 OFF",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "firestone-free-brake-insp",
    "shop": "Firestone Complete Auto Care",
    "website": "https://www.firestonecompleteautocare.com/",
    "dealsPage": "https://www.firestonecompleteautocare.com/offers/",
    "city": "Miami",
    "state": "Florida",
    "title": "Free Brake Inspection",
    "description": "Complimentary brake inspection at any Firestone location. No purchase necessary.",
    "discountLabel": "FREE",
    "dealType": "free_service",
    "categories": [
      "brakes",
      "inspection"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "firestone-oil-2999",
    "shop": "Firestone Complete Auto Care",
    "website": "https://www.firestonecompleteautocare.com/",
    "dealsPage": "https://www.firestonecompleteautocare.com/offers/",
    "city": "Kissimmee",
    "state": "Florida",
    "title": "$29.99 Standard Oil Change",
    "description": "Standard oil change with new oil filter for $29.99.",
    "discountLabel": "$29.99",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "firestone-brake-100",
    "shop": "Firestone Complete Auto Care",
    "website": "https://www.firestonecompleteautocare.com/",
    "dealsPage": "https://www.firestonecompleteautocare.com/offers/",
    "city": "Jacksonville",
    "state": "Florida",
    "title": "Up to $100 Off Brake Service",
    "description": "Save up to $100 on standard brake service. $50 off front or rear brake service options.",
    "discountLabel": "$100 OFF",
    "dealType": "dollar_off",
    "categories": [
      "brakes"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "meineke-orl-synblend",
    "shop": "Meineke Car Care Center",
    "website": "https://www.meineke.com/",
    "dealsPage": "https://www.meineke.com/locations/fl/orlando-2929/coupon/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Synthetic Blend Oil Change — $29.99",
    "description": "Synthetic blend oil change for $29.99 (regular $49.99). Includes tire pressure check, free tire rotation, visual brake check, and digital health check.",
    "discountLabel": "$29.99",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "June 29, 2026"
  },
  {
    "id": "meineke-orl-fullsyn",
    "shop": "Meineke Car Care Center",
    "website": "https://www.meineke.com/",
    "dealsPage": "https://www.meineke.com/locations/fl/orlando-2929/coupon/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Full Synthetic Oil Change — $59.99",
    "description": "Full synthetic oil change for $59.99 (regular $79.99). Includes tire pressure check, free tire rotation, and digital health check.",
    "discountLabel": "$59.99",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "June 29, 2026"
  },
  {
    "id": "meineke-orl-brake100",
    "shop": "Meineke Car Care Center",
    "website": "https://www.meineke.com/",
    "dealsPage": "https://www.meineke.com/locations/fl/orlando-2929/coupon/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Up to $100 Off Brake Pads & Shoes",
    "description": "Save up to $100 on brake pads and shoes — $50 off per axle.",
    "discountLabel": "$100 OFF",
    "dealType": "dollar_off",
    "categories": [
      "brakes"
    ],
    "expiration": "June 29, 2026"
  },
  {
    "id": "meineke-orl-heroes",
    "shop": "Meineke Car Care Center",
    "website": "https://www.meineke.com/",
    "dealsPage": "https://www.meineke.com/locations/fl/orlando-2929/coupon/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Hometown Heroes Discount — 10% Off",
    "description": "10% off for veterans, first responders, teachers, and nurses. Combinable with other offers.",
    "discountLabel": "10% OFF",
    "dealType": "percent_off",
    "categories": [
      "oil change",
      "brakes",
      "maintenance"
    ],
    "expiration": "June 29, 2026"
  },
  {
    "id": "meineke-orl-battery",
    "shop": "Meineke Car Care Center",
    "website": "https://www.meineke.com/",
    "dealsPage": "https://www.meineke.com/locations/fl/orlando-2929/coupon/",
    "city": "Orlando",
    "state": "Florida",
    "title": "$15 Off New Battery + Free Battery Check",
    "description": "$15 off a new battery purchase with a free battery check included.",
    "discountLabel": "$15 OFF",
    "dealType": "dollar_off",
    "categories": [
      "battery"
    ],
    "expiration": "June 29, 2026"
  },
  {
    "id": "meineke-orl-inspect",
    "shop": "Meineke Car Care Center",
    "website": "https://www.meineke.com/",
    "dealsPage": "https://www.meineke.com/locations/fl/orlando-2929/coupon/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Free Multi-Point Inspection",
    "description": "Complimentary multi-point vehicle inspection at no cost.",
    "discountLabel": "FREE",
    "dealType": "free_service",
    "categories": [
      "inspection"
    ],
    "expiration": "June 29, 2026"
  },
  {
    "id": "jiffy-new-cust-30",
    "shop": "ACE Jiffy Lube",
    "website": "https://www.jiffylubeflorida.com/",
    "dealsPage": "https://jiffylubespecials.com/coupons-new-customer30/",
    "city": "Tampa",
    "state": "Florida",
    "title": "$30 OFF New Customer Coupon",
    "description": "$30 off for new customers. Includes oil filter change, inspection, vital fluid check, tire pressure check, and battery check.",
    "discountLabel": "$30 OFF",
    "dealType": "new_customer",
    "categories": [
      "oil change",
      "maintenance",
      "inspection"
    ],
    "expiration": "October 26, 2026"
  },
  {
    "id": "jiffy-syn-26off",
    "shop": "Jiffy Lube Florida",
    "website": "https://www.jiffylubeflorida.com/",
    "dealsPage": "https://www.jiffylubeflorida.com/coupons",
    "city": "Sarasota",
    "state": "Florida",
    "title": "$26 OFF Synthetic Oil Change",
    "description": "$26 off any synthetic oil change. Includes Synthetic Pennzoil motor oil, oil filter, and complimentary vehicle inspection.",
    "discountLabel": "$26 OFF",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "jiffy-conv-50off",
    "shop": "Jiffy Lube Florida",
    "website": "https://www.jiffylubeflorida.com/",
    "dealsPage": "https://www.jiffylubeflorida.com/coupons",
    "city": "Orlando",
    "state": "Florida",
    "title": "50% OFF Conventional Oil Change",
    "description": "50% off conventional oil change. Includes Pennzoil motor oil, oil filter, and complimentary vehicle inspection.",
    "discountLabel": "50% OFF",
    "dealType": "percent_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tirekingdom-15back",
    "shop": "Tire Kingdom by Mavis",
    "website": "https://www.tirekingdom.com/",
    "dealsPage": "https://www.mavis.com/tirekingdom/tire-deals/",
    "city": "Orlando",
    "state": "Florida",
    "title": "15% Back as Visa Prepaid Card on $799+",
    "description": "Get 15% back (up to $150) as a Visa Prepaid Card with a purchase of $799+ on Mavis Tire credit card.",
    "discountLabel": "15% BACK",
    "dealType": "percent_off",
    "categories": [
      "tires"
    ],
    "expiration": "March 14, 2026"
  },
  {
    "id": "tirekingdom-military",
    "shop": "Tire Kingdom by Mavis",
    "website": "https://www.tirekingdom.com/",
    "dealsPage": "https://www.mavis.com/tirekingdom/tire-deals/",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "10% Military Discount",
    "description": "10% discount for active duty military, reservists, and veterans on total sales price before tax.",
    "discountLabel": "10% OFF",
    "dealType": "percent_off",
    "categories": [
      "tires",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "pepboys-cooper-bogo",
    "shop": "Pep Boys",
    "website": "https://www.pepboys.com/",
    "dealsPage": "https://www.pepboys.com/sale-specials-coupons",
    "city": "Tampa",
    "state": "Florida",
    "title": "Free 4th Tire on Cooper Adventurer Tires",
    "description": "Buy a set of 4 Cooper Adventurer All Season tires and the 4th tire is free.",
    "discountLabel": "BOGO",
    "dealType": "bogo",
    "categories": [
      "tires"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "pepboys-kumho-80",
    "shop": "Pep Boys",
    "website": "https://www.pepboys.com/",
    "dealsPage": "https://www.pepboys.com/sale-specials-coupons",
    "city": "Miami",
    "state": "Florida",
    "title": "$80 Back on 4 Select Kumho Tires",
    "description": "$80 back on four select Kumho tires including Ecsta Sport, Solus 4S, Crugen HP71, and Road Venture models.",
    "discountLabel": "$80 BACK",
    "dealType": "dollar_off",
    "categories": [
      "tires"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "pepboys-battery-free",
    "shop": "Pep Boys",
    "website": "https://www.pepboys.com/",
    "dealsPage": "https://www.pepboys.com/sale-specials-coupons",
    "city": "Kissimmee",
    "state": "Florida",
    "title": "FREE Battery Installation",
    "description": "Free battery installation (save up to $19.99) with coupon.",
    "discountLabel": "FREE",
    "dealType": "free_service",
    "categories": [
      "battery"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "pepboys-alignment-10",
    "shop": "Pep Boys",
    "website": "https://www.pepboys.com/",
    "dealsPage": "https://www.pepboys.com/sale-specials-coupons",
    "city": "Jacksonville",
    "state": "Florida",
    "title": "$10 OFF 1-Year Wheel Alignment",
    "description": "$10 off one-year wheel alignment service with coupon.",
    "discountLabel": "$10 OFF",
    "dealType": "dollar_off",
    "categories": [
      "alignment",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-orl-oil-3499",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/orlando/3400-south-orange-avenue-32806/offers?shopnum=3194",
    "city": "Orlando",
    "state": "Florida",
    "title": "$34.99 Synthetic Blend Oil Change with Tire Rotation",
    "description": "Synthetic blend oil change for $34.99 with tire rotation. Includes oil filter, brake check, battery and fluid inspection.",
    "discountLabel": "$34.99",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-orl-brake100",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/orlando/3400-south-orange-avenue-32806/offers?shopnum=3194",
    "city": "Orlando",
    "state": "Florida",
    "title": "Up to $100 Off Brake Service",
    "description": "$50 off per axle on brake service. Limited lifetime guarantee on Midas Brake Pads and Shoes.",
    "discountLabel": "$100 OFF",
    "dealType": "dollar_off",
    "categories": [
      "brakes"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-jax-free-pads",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/jacksonville/10311-atlantic-boulevard-32225/offers?shopnum=3548",
    "city": "Jacksonville",
    "state": "Florida",
    "title": "Free Brake Pads With Any Brake Repair",
    "description": "Free brake pads with any brake repair, with limited lifetime guarantee on parts.",
    "discountLabel": "FREE",
    "dealType": "free_service",
    "categories": [
      "brakes"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-jax-oil",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/jacksonville/10311-atlantic-boulevard-32225/offers?shopnum=3548",
    "city": "Jacksonville",
    "state": "Florida",
    "title": "$20-$30 Off Oil Change",
    "description": "$20 off synthetic blend or $30 off full synthetic oil change with digital vehicle inspection.",
    "discountLabel": "$30 OFF",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-ftl-tiered",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/ft-lauderdale/235-east-sunrise-boulevard-33304/offers?shopnum=3149",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "$25 Off $250 / $50 Off $500 / $75 Off $750",
    "description": "Tiered discount on brakes, exhaust, suspension, alignments, belts, hoses, and more.",
    "discountLabel": "$75 OFF",
    "dealType": "dollar_off",
    "categories": [
      "brakes",
      "maintenance",
      "alignment"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-naples-bogo-tires",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/naples/2111-pine-ridge-road-34109/offers?shopnum=3727",
    "city": "Naples",
    "state": "Florida",
    "title": "Buy 3 Select Tires Get 1 Free with Alignment",
    "description": "Buy 3 select tires and get the 4th free with alignment purchase.",
    "discountLabel": "BOGO",
    "dealType": "bogo",
    "categories": [
      "tires",
      "alignment"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "midas-naples-oil2999",
    "shop": "Midas",
    "website": "https://www.midas.com/",
    "dealsPage": "https://www.midas.com/store/fl/naples/2111-pine-ridge-road-34109/offers?shopnum=3727",
    "city": "Naples",
    "state": "Florida",
    "title": "$29.99 Synthetic Blend Oil Change",
    "description": "$29.99 synthetic blend or $59.99 full synthetic. Includes oil filter, Closer Look Vehicle Check, and 4-wheel tire rotation.",
    "discountLabel": "$29.99",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "maaco-orl-paint",
    "shop": "Maaco",
    "website": "https://www.maaco.com/",
    "dealsPage": "https://www.maaco.com/locations/fl/orlando-11845/offers/",
    "city": "Orlando",
    "state": "Florida",
    "title": "Basic Paint Job Starting at $499",
    "description": "Full vehicle paint job starting at $499 for the basic package. Premium packages available. Free estimate included.",
    "discountLabel": "$499",
    "dealType": "seasonal",
    "categories": [
      "paint",
      "body work"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "maaco-jax-body",
    "shop": "Maaco",
    "website": "https://www.maaco.com/",
    "dealsPage": "https://www.maaco.com/locations/fl/jacksonville-10199/offers/",
    "city": "Jacksonville",
    "state": "Florida",
    "title": "Paint & Body Shop Coupon",
    "description": "Claim a coupon for auto body work, collision repair, and car painting. Free estimates available.",
    "discountLabel": "COUPON",
    "dealType": "dollar_off",
    "categories": [
      "paint",
      "body work"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tiresplus-care-999",
    "shop": "Tires Plus Total Car Care",
    "website": "https://www.tiresplus.com/",
    "dealsPage": "https://www.tiresplus.com/offers/",
    "city": "Orlando",
    "state": "Florida",
    "title": "$9.99 Car Care Package",
    "description": "Comprehensive car care package for only $9.99.",
    "discountLabel": "$9.99",
    "dealType": "dollar_off",
    "categories": [
      "maintenance",
      "inspection"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tiresplus-align-20",
    "shop": "Tires Plus Total Car Care",
    "website": "https://www.tiresplus.com/",
    "dealsPage": "https://www.tiresplus.com/offers/",
    "city": "West Palm Beach",
    "state": "Florida",
    "title": "$20 Off Lifetime Wheel Alignment",
    "description": "$20 off lifetime wheel alignment. Also $40 off with purchase of two Bridgestone tires.",
    "discountLabel": "$20 OFF",
    "dealType": "dollar_off",
    "categories": [
      "alignment",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tiresplus-battery-free",
    "shop": "Tires Plus Total Car Care",
    "website": "https://www.tiresplus.com/",
    "dealsPage": "https://www.tiresplus.com/offers/",
    "city": "Daytona Beach",
    "state": "Florida",
    "title": "Free Battery Check",
    "description": "Complimentary battery testing at no charge.",
    "discountLabel": "FREE",
    "dealType": "free_service",
    "categories": [
      "battery",
      "inspection"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "empire-oil-3495",
    "shop": "Empire Auto Care",
    "website": "https://empireautocare.com/",
    "dealsPage": "https://empireautocare.com/auto-repair-specials/",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "Semi-Synthetic Oil Change — $34.95",
    "description": "Includes OBD scan, safety inspection, maintenance light reset, and fluids check. Excludes diesels.",
    "discountLabel": "$34.95",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance",
      "inspection"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "empire-brake-50",
    "shop": "Empire Auto Care",
    "website": "https://empireautocare.com/",
    "dealsPage": "https://empireautocare.com/auto-repair-specials/",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "$50 OFF Brake Service Per Axle",
    "description": "$50 off per axle on brake work. Shop supplies and additional parts extra.",
    "discountLabel": "$50 OFF",
    "dealType": "dollar_off",
    "categories": [
      "brakes"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "empire-bundle-87",
    "shop": "Empire Auto Care",
    "website": "https://empireautocare.com/",
    "dealsPage": "https://empireautocare.com/auto-repair-specials/",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "Seasonal Multi-Service Bundle — $87",
    "description": "Bundle includes tire rotation, wipers, battery testing, fluid checks, belt inspection, suspension check, and test drive.",
    "discountLabel": "$87",
    "dealType": "bundle",
    "categories": [
      "maintenance",
      "tires",
      "battery",
      "inspection"
    ],
    "expiration": "August 31, 2026"
  },
  {
    "id": "empire-tiered",
    "shop": "Empire Auto Care",
    "website": "https://empireautocare.com/",
    "dealsPage": "https://empireautocare.com/auto-repair-specials/",
    "city": "Fort Lauderdale",
    "state": "Florida",
    "title": "$25-$75 Off Based on Purchase Amount",
    "description": "$25 off $100+, $50 off $250+, or $75 off $500+. Excludes tires and batteries.",
    "discountLabel": "$75 OFF",
    "dealType": "dollar_off",
    "categories": [
      "maintenance",
      "brakes",
      "AC service"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tuffy-orl-oil-2999",
    "shop": "Tuffy Auto Service Center",
    "website": "https://www.tuffyeastcolonial.com/",
    "dealsPage": "https://www.tuffyeastcolonial.com/current_specials",
    "city": "Orlando",
    "state": "Florida",
    "title": "$29.99 Conventional Oil Change",
    "description": "Conventional oil change for $29.99, or $15 off full synthetic or diesel oil change.",
    "discountLabel": "$29.99",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tuffy-orl-brake60",
    "shop": "Tuffy Auto Service Center",
    "website": "https://www.tuffyeastcolonial.com/",
    "dealsPage": "https://www.tuffyeastcolonial.com/current_specials",
    "city": "Orlando",
    "state": "Florida",
    "title": "Up to $60 Off 4-Wheel Brake Service",
    "description": "Up to $60 off 4-wheel brake service, or $30 off 2-wheel. Includes free brake inspection.",
    "discountLabel": "$60 OFF",
    "dealType": "dollar_off",
    "categories": [
      "brakes",
      "inspection"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tuffy-orl-ac2499",
    "shop": "Tuffy Auto Service Center",
    "website": "https://www.tuffyeastcolonial.com/",
    "dealsPage": "https://www.tuffyeastcolonial.com/current_specials",
    "city": "Orlando",
    "state": "Florida",
    "title": "$24.99 A/C Service Special",
    "description": "A/C service for $24.99. New 1234YF refrigerant also available.",
    "discountLabel": "$24.99",
    "dealType": "dollar_off",
    "categories": [
      "AC service"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tuffy-orl-align",
    "shop": "Tuffy Auto Service Center",
    "website": "https://www.tuffyeastcolonial.com/",
    "dealsPage": "https://www.tuffyeastcolonial.com/current_specials",
    "city": "Orlando",
    "state": "Florida",
    "title": "Alignment Special — $50 OFF",
    "description": "Alignment now only $99 (save $50). Includes tire rotation and balance.",
    "discountLabel": "$50 OFF",
    "dealType": "dollar_off",
    "categories": [
      "alignment",
      "tires",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "tuffy-orl-flush-bogo",
    "shop": "Tuffy Auto Service Center",
    "website": "https://www.tuffyeastcolonial.com/",
    "dealsPage": "https://www.tuffyeastcolonial.com/current_specials",
    "city": "Orlando",
    "state": "Florida",
    "title": "Power Flush Sale — Buy One, Get One 50% OFF",
    "description": "Buy one power flush service, get the second one at 50% off.",
    "discountLabel": "50% OFF",
    "dealType": "bogo",
    "categories": [
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "take5-25off",
    "shop": "Take 5 Oil Change",
    "website": "https://www.take5.com/",
    "dealsPage": "https://www.take5.com/oil-change/coupons/",
    "city": "Kissimmee",
    "state": "Florida",
    "title": "25% OFF Core or Complete Oil Change",
    "description": "25% off any core or complete oil change. Available via text or email enrollment.",
    "discountLabel": "25% OFF",
    "dealType": "percent_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "April 1, 2026"
  },
  {
    "id": "take5-military",
    "shop": "Take 5 Oil Change",
    "website": "https://www.take5.com/",
    "dealsPage": "https://www.take5.com/oil-change/coupons/",
    "city": "Orlando",
    "state": "Florida",
    "title": "25% OFF Veterans & Military Discount",
    "description": "25% off for veterans and military members. Must show proof of service or military ID.",
    "discountLabel": "25% OFF",
    "dealType": "percent_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "December 31, 2026"
  },
  {
    "id": "valvoline-syn-15",
    "shop": "Valvoline Instant Oil Change",
    "website": "https://www.vioc.com/",
    "dealsPage": "https://www.vioc.com/oil-change-coupons/",
    "city": "Miami",
    "state": "Florida",
    "title": "$15 Off Synthetic Oil Change",
    "description": "$15 off synthetic or synthetic blend oil change. Includes up to 5 quarts of Valvoline motor oil, filter, lube, and maintenance check.",
    "discountLabel": "$15 OFF",
    "dealType": "dollar_off",
    "categories": [
      "oil change",
      "maintenance"
    ],
    "expiration": "March 31, 2026"
  },
  {
    "id": "dons-free-brake",
    "shop": "Don's Complete Auto Service",
    "website": "https://www.donscompleteautoservice.com/",
    "dealsPage": "https://www.donscompleteautoservice.com/coupons.html",
    "city": "Kissimmee",
    "state": "Florida",
    "title": "Free Brake Inspection with Oil Change",
    "description": "Complimentary brake inspection with any tire rotation or oil change. Special discounts for first responders, teachers, and Disney employees.",
    "discountLabel": "FREE",
    "dealType": "free_service",
    "categories": [
      "brakes",
      "inspection"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "prestige-wash-bogo",
    "shop": "Prestige Auto Spa & Car Wash",
    "website": "https://www.prestigeautospa.com/",
    "dealsPage": "https://www.prestigeautospa.com/unlimited-washes/",
    "city": "North Miami Beach",
    "state": "Florida",
    "title": "Buy 1 Month, Get 2nd Month FREE",
    "description": "Buy one month of unlimited car wash membership and get the second month free. Plans start at $34.99/month.",
    "discountLabel": "BOGO",
    "dealType": "bogo",
    "categories": [
      "detailing",
      "car wash"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "batteriesplus-auto25",
    "shop": "Batteries Plus",
    "website": "https://www.batteriesplus.com/",
    "dealsPage": "https://www.batteriesplus.com/promotions",
    "city": "Tampa",
    "state": "Florida",
    "title": "Up to $25 Off Select Auto Batteries",
    "description": "Group 1 AGM batteries $25 off, Group 2 $20 off, Group 3 $15 off. Limit two per group per order.",
    "discountLabel": "$25 OFF",
    "dealType": "dollar_off",
    "categories": [
      "battery"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "expert-ev-lowest",
    "shop": "Expert Car Care",
    "website": "https://www.expertcarcare.com/",
    "dealsPage": "https://www.expertcarcare.com/auto-repair-coupons",
    "city": "Orlando",
    "state": "Florida",
    "title": "Lowest Labor Rates for Tesla & EV Service in Florida",
    "description": "Lowest labor rates in the state for Tesla and all hybrid/electric vehicle service. Specializing in tires and alignments. AAA discounts available.",
    "discountLabel": "LOW PRICE",
    "dealType": "dollar_off",
    "categories": [
      "EV service",
      "tires",
      "alignment",
      "maintenance"
    ],
    "expiration": "Ongoing"
  },
  {
    "id": "autobahn-ev-25off",
    "shop": "Autobahn Auto Center",
    "website": "https://autobahnofboca.com/",
    "dealsPage": "https://autobahnofboca.com/electric-vehicle-repair/",
    "city": "Boca Raton",
    "state": "Florida",
    "title": "Up to 25% Off Full EV & European Vehicle Service",
    "description": "Monthly rotating specials with savings up to 25% off. Specializes in Audi, BMW, Porsche, Mercedes, VW. 3-year/36k warranty.",
    "discountLabel": "25% OFF",
    "dealType": "percent_off",
    "categories": [
      "EV service",
      "maintenance"
    ],
    "expiration": "Ongoing"
  }
];

export const DEAL_TYPES = [
  { slug: "percent_off", label: "% Off" },
  { slug: "dollar_off", label: "$ Deal" },
  { slug: "bogo", label: "BOGO" },
  { slug: "bundle", label: "Bundle" },
  { slug: "new_customer", label: "New Customer" },
  { slug: "seasonal", label: "Seasonal" },
  { slug: "free_service", label: "Free Service" },
];

export const SERVICE_FILTERS = [
  "oil change", "tires", "brakes", "AC service", "battery",
  "EV service", "detailing", "inspection", "alignment",
  "maintenance", "paint", "body work",
];

export const STATES = [
  "Florida", "Alabama", "Arizona", "California", "Colorado", "Connecticut",
  "Georgia", "Illinois", "Indiana", "Louisiana", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Missouri", "Nevada", "New Jersey", "New York",
  "North Carolina", "Ohio", "Oregon", "Pennsylvania", "South Carolina",
  "Tennessee", "Texas", "Virginia", "Washington", "Wisconsin",
];

export function generateDealCode(title: string, shop: string): string {
  let hash = 0;
  const str = title + shop;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const code = Math.abs(hash).toString(36).toUpperCase().slice(0, 6).padEnd(6, "0");
  return "HV-" + code;
}
