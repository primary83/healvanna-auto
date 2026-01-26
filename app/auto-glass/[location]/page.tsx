import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, MAJOR_CITIES } from "../../lib/services";
import LocationServicePage from "../../components/LocationServicePage";

const service = getServiceBySlug("auto-glass")!;

export async function generateStaticParams() {
  return MAJOR_CITIES.map((city) => ({ location: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const city = MAJOR_CITIES.find((c) => c.slug === location);
  if (!city) return { title: "Not Found" };

  const title = `Best ${service.name} Repair in ${city.city}, ${city.stateCode} - Windshield Experts`;
  const description = `Find the best ${service.name.toLowerCase()} repair and replacement in ${city.city}, ${city.stateCode}. Compare shops with ADAS recalibration and insurance-approved services.`;

  return {
    title,
    description,
    keywords: [...service.keywords, city.city, city.stateCode],
    alternates: { canonical: `/${service.slug}/${city.slug}` },
    openGraph: { title, description, url: `https://healvanna.com/${service.slug}/${city.slug}` },
  };
}

export default async function AutoGlassLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const city = MAJOR_CITIES.find((c) => c.slug === location);
  if (!city) notFound();

  return (
    <LocationServicePage
      service={service}
      cityName={city.city}
      stateCode={city.stateCode}
      latitude={city.latitude}
      longitude={city.longitude}
    />
  );
}
