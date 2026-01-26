import { MetadataRoute } from "next";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "./lib/services";
import { BLOG_CATEGORIES } from "./lib/blogCategories";

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
  ];

  // Service category pages: /car-detailing, /car-wrapping, etc.
  const servicePages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service + Location pages: /car-detailing/miami-fl, etc.
  const locationPages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((service) =>
    MAJOR_CITIES.map((city) => ({
      url: `${baseUrl}/${service.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  // Blog posts
  const blogSlugs = [
    "ceramic-coating-cost-2026",
    "car-wrap-vs-paint",
    "choose-body-shop-after-accident",
    "auto-glass-repair-vs-replacement",
    "is-car-detailing-worth-it",
    "custom-car-paint-jobs",
    "find-best-collision-repair-shop",
    "hand-wash-vs-automatic-car-wash",
    "interior-detailing-checklist",
    "vinyl-wrap-care-guide",
    "ceramic-coating-tesla-model-3",
    "ppf-vs-ceramic-coating",
    "matte-paint-protection",
    "leather-restoration-classic-cars",
    "paint-correction-black-cars",
    "choose-first-ev",
    "ev-vs-hybrid",
    "future-autonomous-evs",
    "ev-charging-etiquette",
    "top-ev-apps",
    "how-to-install-home-ev-charger",
    "ev-road-trip-planning-guide",
    "ev-tax-credits-2026",
    "ev-maintenance-guide",
    "ev-charging-networks-compared",
    "wireless-ev-charging",
    "vehicle-to-home-v2h",
    "top-electric-car-shows-2026",
    "what-to-expect-electrify-expo-2026",
    "ev-battery-technology-2026",
    "best-electric-suvs-families-2026",
    "real-cost-owning-ev-2026",
    "ev-range-anxiety",
    "tesla-alternatives",
    "solid-state-batteries",
    "ev-environment-impact",
    "leasing-vs-buying-ev",
    "ev-collision-repair-guide",
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

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages, ...blogCategoryPages];
}
