import { MetadataRoute } from "next";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "./lib/services";

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

  return [...staticPages, ...servicePages, ...locationPages];
}
