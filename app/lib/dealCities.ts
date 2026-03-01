import { DEALS, Deal } from "./dealsData";

export interface DealCity {
  city: string;
  state: string;
  slug: string;
  lat: number;
  lng: number;
}

export interface DealServiceCategory {
  name: string;
  slug: string;
  filter: string;
}

// Derive unique cities from actual deal data
export const DEAL_CITIES: DealCity[] = (() => {
  const seen = new Map<string, DealCity>();
  for (const deal of DEALS) {
    const slug = deal.city.toLowerCase().replace(/\s+/g, "-");
    if (!seen.has(slug)) {
      seen.set(slug, {
        city: deal.city,
        state: deal.state,
        slug,
        lat: deal.lat,
        lng: deal.lng,
      });
    }
  }
  return Array.from(seen.values());
})();

// Service categories for deal landing pages
export const DEAL_SERVICE_CATEGORIES: DealServiceCategory[] = [
  { name: "Oil Change", slug: "oil-change", filter: "oil change" },
  { name: "Tires", slug: "tires", filter: "tires" },
  { name: "Brake Service", slug: "brakes", filter: "brakes" },
  { name: "AC Service", slug: "ac-service", filter: "AC service" },
  { name: "EV Service", slug: "ev-service", filter: "EV service" },
  { name: "Detailing", slug: "detailing", filter: "detailing" },
  { name: "Maintenance", slug: "maintenance", filter: "maintenance" },
  { name: "Battery", slug: "battery", filter: "battery" },
  { name: "Inspection", slug: "inspection", filter: "inspection" },
  { name: "Alignment", slug: "alignment", filter: "alignment" },
  { name: "Paint", slug: "paint", filter: "paint" },
  { name: "Body Work", slug: "body-work", filter: "body work" },
];

export function getDealsForCity(citySlug: string): Deal[] {
  const city = DEAL_CITIES.find((c) => c.slug === citySlug);
  if (!city) return [];
  return DEALS.filter((d) => d.city === city.city);
}

export function getDealsForCityService(
  citySlug: string,
  serviceSlug: string
): Deal[] {
  const city = DEAL_CITIES.find((c) => c.slug === citySlug);
  const service = DEAL_SERVICE_CATEGORIES.find((s) => s.slug === serviceSlug);
  if (!city || !service) return [];
  return DEALS.filter(
    (d) => d.city === city.city && d.categories.includes(service.filter)
  );
}
