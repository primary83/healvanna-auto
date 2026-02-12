import { MetadataRoute } from "next";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "./lib/services";
import { BLOG_CATEGORIES } from "./lib/blogCategories";
import { getAllStates, getCitiesByState } from "./lib/directoryData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://healvanna.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/business`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/get-quote`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare-evs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/orlando`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  // Service category pages: /car-detailing, /car-wrapping, etc.
  const servicePages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service subcategory pages: /car-detailing/ceramic-coating, etc.
  const serviceSubcategoryPages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap(
    (service) =>
      service.subcategories.map((sub) => ({
        url: `${baseUrl}/${service.slug}/${sub.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
  );

  // Service + Location pages: /car-detailing/miami-fl, etc.
  const locationPages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((service) =>
    MAJOR_CITIES.map((city) => ({
      url: `${baseUrl}/${service.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  // Blog posts (all 93 articles)
  const blogSlugs = [
    "auto-glass-repair-vs-replacement",
    "best-car-air-fresheners",
    "best-dashcams-car-protection-2026",
    "best-detailing-kits-beginners",
    "best-electric-suvs-families-2026",
    "best-interior-detailing-products",
    "best-tire-shine-products",
    "best-used-evs-under-25k",
    "bmw-i4-vs-mercedes-eqe",
    "car-scratch-removal-guide",
    "car-wash-soap-guide",
    "car-waxing-schedule",
    "car-wrap-vs-paint",
    "ceramic-coating-cost-2026",
    "ceramic-coating-maintenance-tips",
    "ceramic-coating-tesla-model-3",
    "chevrolet-equinox-ev-review",
    "choose-body-shop-after-accident",
    "choose-car-wrap-color",
    "choose-first-ev",
    "clay-bar-guide",
    "cold-weather-ev-range",
    "custom-car-paint-jobs",
    "detail-car-like-pro-at-home",
    "electric-pickup-trucks-compared",
    "ev-battery-degradation-guide",
    "ev-battery-health-check",
    "ev-battery-technology-2026",
    "ev-battery-warranty-guide",
    "ev-charging-cost-comparison",
    "ev-charging-etiquette",
    "ev-charging-levels-explained",
    "ev-charging-networks-compared",
    "ev-collision-repair-guide",
    "ev-environment-impact",
    "ev-fleet-management-business",
    "ev-home-charging-installation-guide",
    "ev-insurance-guide",
    "ev-lease-vs-buy",
    "ev-maintenance-guide",
    "ev-maintenance-myths",
    "ev-myths-debunked",
    "ev-paint-protection-guide",
    "ev-range-anxiety",
    "ev-regenerative-braking-explained",
    "ev-resale-value-2026",
    "ev-road-trip-accessories",
    "ev-road-trip-planning-guide",
    "ev-tax-credits-2026",
    "ev-towing-guide",
    "ev-vs-gas-maintenance-costs",
    "ev-vs-hybrid",
    "ev-window-tinting-guide",
    "find-best-collision-repair-shop",
    "future-autonomous-evs",
    "hand-wash-vs-automatic-car-wash",
    "headlight-restoration-guide",
    "how-to-install-home-ev-charger",
    "how-to-remove-swirl-marks",
    "hyundai-ioniq-6-vs-tesla-model-3",
    "interior-detailing-checklist",
    "is-car-detailing-worth-it",
    "is-ppf-worth-it",
    "kia-ev6-gt-review",
    "leasing-vs-buying-ev",
    "leather-restoration-classic-cars",
    "maintain-car-wrap",
    "matte-paint-protection",
    "paint-correction-black-cars",
    "ppf-vs-ceramic-coating",
    "protect-car-paint-summer-heat",
    "protect-car-parking-lot-damage",
    "real-cost-owning-ev-2026",
    "remove-water-spots-from-car",
    "road-trip-car-prep",
    "scenic-ev-road-trips",
    "sedan-vs-suv-ev",
    "should-you-buy-used-ev",
    "solid-state-batteries",
    "start-car-detailing-business",
    "start-mobile-detailing-business",
    "tesla-alternatives",
    "tesla-model-y-vs-ioniq-5",
    "top-electric-car-shows-2026",
    "top-ev-apps",
    "vehicle-to-home-v2h",
    "vinyl-wrap-care-guide",
    "vinyl-wrapping-ev-guide",
    "what-to-expect-electrify-expo-2026",
    "window-tinting-guide",
    "winter-car-care-checklist",
    "winter-ev-care-guide",
    "wireless-ev-charging",
  ];

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Car pages: brands, models, standalone pages
  const carPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/cars`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/cars/brands`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/cars/suvs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  // Car brand and model pages
  const carBrandModels: Record<string, string[]> = {
    tesla: ["model-3", "model-s", "model-x", "model-y", "cybertruck"],
    rivian: ["r1s", "r1t"],
    bmw: ["i4", "i7", "ix"],
    mercedes: ["eqb", "eqe", "eqs"],
    porsche: ["taycan", "macan-ev"],
    lucid: ["air-grand-touring", "air-pure", "air-sapphire", "air-touring", "gravity"],
    hyundai: ["ioniq-5", "ioniq-6", "ioniq-9", "kona-electric"],
    kia: ["ev3", "ev6", "ev9", "niro-ev"],
    ford: ["mustang-mach-e", "f-150-lightning", "e-transit"],
    volvo: ["ec40", "ex30", "ex90", "xc40-recharge"],
    polestar: ["polestar-2", "polestar-3", "polestar-4"],
    audi: ["e-tron-gt", "q4-e-tron", "q8-e-tron", "rs-e-tron-gt"],
    chevrolet: ["equinox-ev", "blazer-ev", "silverado-ev"],
    cadillac: ["lyriq", "escalade-iq", "celestiq", "optiq"],
    genesis: ["gv60", "electrified-g80", "electrified-gv70"],
    volkswagen: ["id4", "id7", "id-buzz"],
    jaguar: ["i-pace", "type-00"],
    byd: ["atto-3", "dolphin", "han", "seal", "seal-u", "tang"],
    "li-auto": ["l6", "l7", "l8", "l9", "g6", "g9", "p7", "x9", "mega"],
    nio: ["es6", "es8", "et5", "et7", "ec6", "ec7"],
    xpeng: ["p7", "g6", "g9", "x9"],
    xiaomi: ["su7", "su7-pro", "su7-max"],
    vinfast: ["vf6", "vf7", "vf8", "vf9"],
    zeekr: ["001", "007", "009", "x"],
  };

  const carBrandModelPages: MetadataRoute.Sitemap = Object.entries(carBrandModels).flatMap(
    ([brand, models]) => [
      { url: `${baseUrl}/cars/${brand}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
      ...models.map((model) => ({
        url: `${baseUrl}/cars/${brand}/${model}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ]
  );

  // Standalone car pages (duplicates at top-level for legacy URLs)
  const standaloneCarSlugs = [
    "air-grand-touring", "air-pure", "air-sapphire", "air-touring", "gravity",
    "bmw-i7-xdrive60", "lucid-air-sapphire", "mercedes-eqs-580",
    "porsche-taycan-turbo-s", "rivian-r1s", "tesla-model-s-plaid",
    "ec40", "ex30", "ex90", "xc40-recharge", "id4", "id7", "id-buzz",
  ];

  const standaloneCarPages: MetadataRoute.Sitemap = standaloneCarSlugs.map((slug) => ({
    url: `${baseUrl}/cars/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  // Audi nested duplicate pages (app/cars/audi/audi/...)
  const audiNestedPages: MetadataRoute.Sitemap = [
    "e-tron-gt", "q4-e-tron", "q8-e-tron", "rs-e-tron-gt",
  ].flatMap((model) => [
    { url: `${baseUrl}/cars/audi/audi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/cars/audi/audi/${model}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ]);
  // Deduplicate the audi/audi brand page
  const audiNestedDeduped = audiNestedPages.filter(
    (page, index, self) => self.findIndex((p) => p.url === page.url) === index
  );

  // Guide pages
  const guideSlugs = [
    "car-detailing",
    "car-audio-sound-systems",
    "ceramic-coating-101",
    "home-ev-charging",
    "leather-upholstery-care",
    "led-lighting-upgrades",
    "new-car-protection-packages",
    "paint-correction-scratch-removal",
    "ppf-paint-protection-film",
    "vinyl-wraps",
    "wheels-rims-tire-care",
    "window-tinting",
  ];

  const guideCities = ["miami", "orlando", "tampa", "jacksonville", "fort-lauderdale"];

  const guidePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...guideSlugs.flatMap((guide) => [
      { url: `${baseUrl}/guides/${guide}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
      ...guideCities.map((city) => ({
        url: `${baseUrl}/guides/${guide}/${city}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ]),
  ];

  // Insights pages
  const insightSlugs = [
    "best-ceramic-coatings-2024",
    "best-ceramic-coatings-2025",
    "ppf-vs-ceramic-coating",
    "tesla-vs-lucid-vs-rivian",
    "finding-trusted-body-shop",
    "ev-maintenance-guide",
    "us-evs-vs-chinese-evs",
  ];

  const insightCategories = ["premium-care", "repair-craft", "electric-vehicles", "market-insights"];

  const insightPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    ...insightSlugs.map((slug) => ({
      url: `${baseUrl}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insightCategories.map((cat) => ({
      url: `${baseUrl}/insights/category/${cat}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  // Care & Craft showcase pages
  const carePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/care`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/care/precision-auto-spa`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${baseUrl}/care/elite-ceramic-works`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${baseUrl}/care/luxe-interior-studio`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
  ];

  const craftPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/craft`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/craft/prestige-auto-body`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${baseUrl}/craft/heritage-restoration`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${baseUrl}/craft/ev-collision-center`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
  ];

  // Directory pages: /directory, /directory/[state], /directory/[state]/[city]
  const states = getAllStates();
  const directoryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/directory`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...states.flatMap((state) => {
      const cities = getCitiesByState(state.slug);
      return [
        { url: `${baseUrl}/directory/${state.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
        ...cities.map((city) => ({
          url: `${baseUrl}/directory/${state.slug}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.5,
        })),
      ];
    }),
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...serviceSubcategoryPages,
    ...locationPages,
    ...blogPages,
    ...blogCategoryPages,
    ...carPages,
    ...carBrandModelPages,
    ...standaloneCarPages,
    ...audiNestedDeduped,
    ...guidePages,
    ...insightPages,
    ...carePages,
    ...craftPages,
    ...directoryPages,
  ];
}
