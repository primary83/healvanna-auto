import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, MAJOR_CITIES } from "../../lib/services";
import LocationServicePage from "../../components/LocationServicePage";

const service = getServiceBySlug("car-detailing")!;

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

  const title = `Best ${service.name} in ${city.city}, ${city.stateCode} - Top Rated Shops`;
  const description = `Find the best ${service.name.toLowerCase()} services in ${city.city}, ${city.stateCode}. Compare top-rated detailers with real reviews, ratings, and verified certifications.`;

  return {
    title,
    description,
    keywords: [...service.keywords, city.city, city.stateCode, `${service.name.toLowerCase()} ${city.city.toLowerCase()}`],
    alternates: { canonical: `/${service.slug}/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `https://healvanna.com/${service.slug}/${city.slug}`,
    },
  };
}

export default async function CarDetailingLocationPage({
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
