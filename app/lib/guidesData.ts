// Types
export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  heroImage?: string;
  featured?: boolean;
  faqs: { question: string; answer: string }[];
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  description: string;
  electricityRate: string;
  evIncentives: string[];
  popularEvs: string[];
  chargingNetworks: string[];
  localTips: string[];
}

// City data for location-specific guides
export const cities: CityData[] = [
  {
    slug: "miami",
    name: "Miami",
    state: "FL",
    description: "Miami's year-round sunshine and growing luxury EV market make it an ideal location for electric vehicle ownership, with expanding charging infrastructure throughout South Florida.",
    electricityRate: "$0.12-0.15/kWh",
    evIncentives: [
      "Florida has no state income tax, so no state EV tax credit",
      "Some utilities offer time-of-use rates for EV charging",
      "FPL offers rebates for home charger installation",
      "HOV lane access for EVs"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "BMW iX", "Mercedes EQS", "Porsche Taycan"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "EVgo"],
    localTips: [
      "FPL (Florida Power & Light) offers off-peak rates from 11 PM - 6 AM",
      "Many luxury condo buildings now offer EV charging amenities",
      "Salt air can affect your EV - regular detailing is recommended",
      "Hurricane season (June-November) - keep your EV charged for emergencies"
    ]
  },
  {
    slug: "orlando",
    name: "Orlando",
    state: "FL",
    description: "Orlando's suburban layout and growing tech scene have accelerated EV adoption, with expanding charging infrastructure throughout Central Florida.",
    electricityRate: "$0.11-0.14/kWh",
    evIncentives: [
      "OUC (Orlando Utilities Commission) offers EV rate plans",
      "Duke Energy rebates for Level 2 charger installation",
      "No state EV tax credit (no state income tax)",
      "Some employers offer workplace charging"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "Ford Mustang Mach-E", "Chevrolet Bolt", "Rivian R1S"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "Blink"],
    localTips: [
      "OUC offers a dedicated EV rate plan with lower overnight rates",
      "Theme parks (Disney, Universal) have extensive EV charging",
      "I-4 corridor has good Supercharger coverage",
      "Summer heat means pre-conditioning your EV while plugged in saves range"
    ]
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "FL",
    description: "Tampa Bay's growing metropolitan area offers excellent EV infrastructure with multiple charging networks and utility incentives.",
    electricityRate: "$0.11-0.14/kWh",
    evIncentives: [
      "TECO Energy offers EV charging rebates",
      "Duke Energy programs available in some areas",
      "No state EV tax credit",
      "Some local employers provide workplace charging"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "Ford F-150 Lightning", "Rivian R1T", "BMW iX"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "EVgo"],
    localTips: [
      "TECO offers time-of-use rates favorable for overnight charging",
      "I-75 and I-275 corridors have good charging coverage",
      "Tampa International Airport has EV charging",
      "Coastal humidity - consider paint protection for your EV"
    ]
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    state: "FL",
    description: "Fort Lauderdale's affluent community and waterfront lifestyle have embraced electric vehicles, with strong charging infrastructure along the coast.",
    electricityRate: "$0.12-0.15/kWh",
    evIncentives: [
      "FPL rebates for home charger installation",
      "No state income tax means no state EV credit",
      "Some condo associations installing shared charging",
      "Municipal parking garages adding EV stations"
    ],
    popularEvs: ["Tesla Model S", "Porsche Taycan", "Mercedes EQS", "BMW iX", "Lucid Air"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "Blink"],
    localTips: [
      "Salt air from the ocean requires regular washing and waxing",
      "Many luxury buildings now include EV charging as an amenity",
      "FPL's off-peak rates make overnight charging economical",
      "I-95 corridor has extensive Supercharger coverage"
    ]
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    state: "FL",
    description: "Jacksonville's sprawling layout and growing EV adoption have led to expanding charging infrastructure across Northeast Florida.",
    electricityRate: "$0.10-0.13/kWh",
    evIncentives: [
      "JEA offers some of the lowest electricity rates in Florida",
      "No state EV tax credit (no state income tax)",
      "Growing workplace charging programs",
      "Municipal fleet electrification creating more public chargers"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "Ford Mustang Mach-E", "Chevrolet Bolt EUV", "Hyundai Ioniq 5"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "Blink"],
    localTips: [
      "JEA's low rates make EV ownership very economical",
      "I-95 and I-10 corridors have good charging coverage",
      "Beach communities are adding more public charging",
      "Mild winters mean great EV range year-round"
    ]
  }
];

// All guides data
export const guides: Guide[] = [
  {
    slug: "home-ev-charging",
    title: "The Complete Guide to Home EV Charging",
    shortTitle: "Home EV Charging",
    description: "Everything you need to know about installing a home EV charger, from choosing the right equipment to understanding costs and installation requirements.",
    metaDescription: "Learn how to install a home EV charger. Compare Level 1 vs Level 2 charging, understand costs, electrical requirements, and find the best charger for your electric vehicle.",
    category: "EV Ownership",
    readTime: "12 min read",
    lastUpdated: "January 2025",
    featured: true,
    faqs: [
      {
        question: "How much does it cost to install a home EV charger?",
        answer: "A typical Level 2 home charger installation costs $1,000-$2,500 total, including the charger ($300-$700) and installation ($500-$1,500). Costs vary based on your electrical panel capacity and whether upgrades are needed."
      },
      {
        question: "Can I install an EV charger myself?",
        answer: "While some chargers are plug-and-play, hardwired installations require a licensed electrician for safety and code compliance. DIY electrical work may void warranties and insurance coverage."
      },
      {
        question: "How long does it take to charge an EV at home?",
        answer: "Level 1 charging (120V outlet) adds 3-5 miles of range per hour. Level 2 charging (240V) adds 25-30 miles per hour, fully charging most EVs overnight in 6-10 hours."
      },
      {
        question: "Do I need to upgrade my electrical panel for an EV charger?",
        answer: "Not always. A 200-amp panel can usually support a Level 2 charger. Older homes with 100-amp panels may need upgrades ($1,000-$3,000) to handle the additional load safely."
      },
      {
        question: "What's the difference between Level 1 and Level 2 charging?",
        answer: "Level 1 uses a standard 120V outlet (included with your EV) and is slow but free to set up. Level 2 uses a 240V outlet (like a dryer) and charges 5-7x faster, ideal for daily driving."
      }
    ]
  },
  {
    slug: "ceramic-coating-101",
    title: "Ceramic Coating 101: Is It Worth It for Your Car?",
    shortTitle: "Ceramic Coating 101",
    description: "A complete guide to ceramic coating for vehicles. Learn what ceramic coating does, how much it costs, and whether it's the right choice for protecting your car's paint.",
    metaDescription: "Is ceramic coating worth it? Learn about ceramic coating costs, benefits, how long it lasts, and whether professional application is better than DIY for your vehicle.",
    category: "Paint Protection",
    readTime: "10 min read",
    lastUpdated: "January 2025",
    featured: true,
    faqs: [
      {
        question: "How long does ceramic coating last?",
        answer: "Professional ceramic coatings typically last 2-5 years with proper maintenance. Premium coatings can last 5-7+ years. DIY coatings usually last 6 months to 2 years."
      },
      {
        question: "Is ceramic coating worth the money?",
        answer: "For most car owners who want easier maintenance and better protection, yes. It reduces washing time, protects against UV damage and chemical stains, and maintains resale value. It's especially worthwhile for new or recently detailed vehicles."
      },
      {
        question: "Can I apply ceramic coating myself?",
        answer: "Yes, but results vary significantly. DIY coatings are less durable and require careful surface preparation. Professional application costs more but provides better coverage, longer durability, and often includes warranties."
      },
      {
        question: "Does ceramic coating prevent scratches?",
        answer: "Ceramic coating provides minor scratch resistance but won't prevent rock chips or deep scratches. For physical protection, you need paint protection film (PPF). Many owners use both: PPF on high-impact areas and ceramic coating over everything."
      },
      {
        question: "What's the difference between ceramic coating and PPF?",
        answer: "Ceramic coating is a liquid that provides chemical/UV protection and gloss but minimal physical protection. PPF (paint protection film) is a thick clear film that absorbs impacts and prevents rock chips. Many owners use both: PPF on high-impact areas and ceramic coating over everything."
      }
    ]
  },
  {
    slug: "ppf-paint-protection-film",
    title: "PPF Paint Protection Film: The Complete Guide",
    shortTitle: "PPF Guide",
    description: "Everything you need to know about Paint Protection Film (PPF). Learn about costs, benefits, coverage options, and how to choose the right installer for your vehicle.",
    metaDescription: "Complete guide to Paint Protection Film (PPF). Learn about PPF costs, full front vs full body coverage, self-healing technology, and how to find quality installers near you.",
    category: "Paint Protection",
    readTime: "14 min read",
    lastUpdated: "February 2025",
    featured: true,
    faqs: [
      {
        question: "How much does PPF cost?",
        answer: "PPF pricing varies by coverage: partial front (bumper only) costs $500-$800, full front package (bumper, hood, fenders, mirrors) runs $1,500-$2,500, and full body coverage ranges from $5,000-$8,000+. Luxury and exotic vehicles typically cost more due to complex body lines."
      },
      {
        question: "How long does PPF last?",
        answer: "Quality PPF from brands like XPEL, 3M, or SunTek typically lasts 7-10 years with proper care. Most premium films come with 10-year warranties against yellowing, cracking, and peeling."
      },
      {
        question: "Is PPF worth it for a new car?",
        answer: "Yes, especially if you plan to keep the car long-term or want to preserve resale value. Applying PPF to a new car is easier (no paint correction needed) and protects the factory finish from day one. The cost is often recovered in preserved resale value."
      },
      {
        question: "Does PPF self-heal?",
        answer: "Yes, premium PPF has self-healing top coats that repair minor scratches and swirl marks when exposed to heat (sunlight or warm water). Deep scratches that penetrate the film won't self-heal but the film can often be replaced in sections."
      },
      {
        question: "Can you put ceramic coating over PPF?",
        answer: "Absolutely, and it's recommended. Ceramic coating over PPF adds hydrophobic properties, makes the film easier to clean, enhances gloss, and provides additional UV protection. This combination offers the best of both worlds: physical protection from PPF and chemical protection from ceramic coating."
      },
      {
        question: "What's the difference between PPF and vinyl wrap?",
        answer: "PPF is a clear, thick protective film designed to absorb impacts and protect paint. Vinyl wrap is a colored film used to change your car's appearance. PPF protects, vinyl wraps decorate. Some owners use colored PPF for both protection and style changes."
      }
    ]
  }
];

// Helper function to get guide by slug
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

// Helper function to get city by slug
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug === slug);
}

// Get all guide slugs for static generation
export function getAllGuideSlugs(): string[] {
  return guides.map(g => g.slug);
}

// Get all city slugs for static generation
export function getAllCitySlugs(): string[] {
  return cities.map(c => c.slug);
}

// Get featured guides
export function getFeaturedGuides(): Guide[] {
  return guides.filter(g => g.featured);
}

// Get guides by category
export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(g => g.category === category);
}

// Simple city list for dropdowns/links
export const cityList = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];
