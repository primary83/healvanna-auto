export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  matchCategories: string[]; // matches against blog post category field
  matchSlugs?: string[]; // specific slugs to include
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "ev-guides",
    name: "Electric Vehicle Guides",
    description:
      "Expert guides for EV owners and buyers — from choosing your first electric car to maximizing range, understanding tax credits, and planning road trips.",
    matchCategories: ["Guides", "Technology"],
    matchSlugs: [
      "choose-first-ev",
      "ev-vs-hybrid",
      "ev-range-anxiety",
      "ev-maintenance-guide",
      "ev-tax-credits-2026",
      "ev-road-trip-planning-guide",
      "leasing-vs-buying-ev",
      "real-cost-owning-ev-2026",
      "how-to-install-home-ev-charger",
      "ev-charging-etiquette",
      "ev-charging-networks-compared",
      "best-electric-suvs-families-2026",
      "tesla-alternatives",
      "top-ev-apps",
      "hyundai-ioniq-6-vs-tesla-model-3",
      "kia-ev6-gt-review",
      "bmw-i4-vs-mercedes-eqe",
      "chevrolet-equinox-ev-review",
      "should-you-buy-used-ev",
      "best-used-evs-under-25k",
      "ev-battery-health-check",
      "cold-weather-ev-range",
      "ev-charging-cost-comparison",
    ],
  },
  {
    slug: "car-care",
    name: "Car Care & Detailing Tips",
    description:
      "Professional tips for maintaining your vehicle's appearance — ceramic coating, paint protection, interior detailing, vinyl wrap care, and washing techniques.",
    matchCategories: ["Guides", "Comparison"],
    matchSlugs: [
      "ceramic-coating-cost-2026",
      "ceramic-coating-tesla-model-3",
      "ppf-vs-ceramic-coating",
      "is-car-detailing-worth-it",
      "interior-detailing-checklist",
      "matte-paint-protection",
      "paint-correction-black-cars",
      "vinyl-wrap-care-guide",
      "car-wrap-vs-paint",
      "hand-wash-vs-automatic-car-wash",
      "leather-restoration-classic-cars",
      "winter-car-care-checklist",
    ],
  },
  {
    slug: "repair-guide",
    name: "Auto Repair & Collision Guide",
    description:
      "Navigate body shop selection, collision repair, auto glass decisions, and paint jobs with our expert repair guides. Know what to expect and what to look for.",
    matchCategories: ["Guides"],
    matchSlugs: [
      "choose-body-shop-after-accident",
      "find-best-collision-repair-shop",
      "auto-glass-repair-vs-replacement",
      "custom-car-paint-jobs",
      "ev-collision-repair-guide",
      "finding-trusted-body-shop",
    ],
  },
  {
    slug: "ev-technology",
    name: "EV Technology & Innovation",
    description:
      "Stay ahead of the curve with insights on battery technology, autonomous driving, wireless charging, vehicle-to-home power, and the future of electric mobility.",
    matchCategories: ["Technology"],
    matchSlugs: [
      "solid-state-batteries",
      "ev-battery-technology-2026",
      "wireless-ev-charging",
      "vehicle-to-home-v2h",
      "future-autonomous-evs",
      "top-ev-apps",
      "ev-charging-networks-compared",
    ],
  },
];

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}
