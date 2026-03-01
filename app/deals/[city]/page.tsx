import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEAL_CITIES,
  DEAL_SERVICE_CATEGORIES,
  getDealsForCity,
} from "../../lib/dealCities";
import CityDealsContent from "../../components/CityDealsContent";
import StructuredData, {
  generateOfferCatalogSchema,
  generateBreadcrumbSchema,
} from "../../components/StructuredData";

export async function generateStaticParams() {
  return DEAL_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = DEAL_CITIES.find((c) => c.slug === city);
  if (!cityData) return { title: "Not Found" };

  const deals = getDealsForCity(city);
  const title = `Car Service Deals in ${cityData.city}, FL`;
  const description = `Find ${deals.length} car service deals in ${cityData.city}. Oil change, brake, tire, and detailing coupons from local shops.`;

  return {
    title,
    description,
    alternates: { canonical: `/deals/${cityData.slug}` },
    openGraph: {
      title: `${title} | Healvanna Auto`,
      description,
      url: `https://healvanna.com/deals/${cityData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Healvanna Auto`,
      description,
    },
  };
}

export default async function CityDealsPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = DEAL_CITIES.find((c) => c.slug === city);
  if (!cityData) notFound();

  const deals = getDealsForCity(city);

  const offerSchema = generateOfferCatalogSchema(
    deals.map((d) => ({
      title: d.title,
      shop: d.shop,
      description: d.description,
      url: d.dealsPage,
      city: d.city,
      state: d.state,
    }))
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://healvanna.com" },
    { name: "Deals", url: "https://healvanna.com/deals" },
    { name: cityData.city, url: `https://healvanna.com/deals/${cityData.slug}` },
  ]);

  return (
    <>
      <StructuredData data={offerSchema} />
      <StructuredData data={breadcrumbSchema} />
      <CityDealsContent
        city={cityData}
        deals={deals}
        services={DEAL_SERVICE_CATEGORIES}
      />
    </>
  );
}
