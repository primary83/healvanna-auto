import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEAL_CITIES,
  DEAL_SERVICE_CATEGORIES,
  getDealsForCityService,
} from "../../../lib/dealCities";
import CityServiceDealsContent from "../../../components/CityServiceDealsContent";
import StructuredData, {
  generateOfferCatalogSchema,
  generateBreadcrumbSchema,
} from "../../../components/StructuredData";

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of DEAL_CITIES) {
    for (const service of DEAL_SERVICE_CATEGORIES) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city, service } = await params;
  const cityData = DEAL_CITIES.find((c) => c.slug === city);
  const serviceData = DEAL_SERVICE_CATEGORIES.find((s) => s.slug === service);
  if (!cityData || !serviceData) return { title: "Not Found" };

  const deals = getDealsForCityService(city, service);
  const title = `${serviceData.name} Deals in ${cityData.city}, FL`;
  const description = `${deals.length} ${serviceData.name.toLowerCase()} deals in ${cityData.city}. Compare coupons and discounts from local auto shops.`;

  return {
    title,
    description,
    alternates: { canonical: `/deals/${cityData.slug}/${serviceData.slug}` },
    openGraph: {
      title: `${title} | Healvanna Auto`,
      description,
      url: `https://healvanna.com/deals/${cityData.slug}/${serviceData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Healvanna Auto`,
      description,
    },
  };
}

export default async function CityServiceDealsPage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const cityData = DEAL_CITIES.find((c) => c.slug === city);
  const serviceData = DEAL_SERVICE_CATEGORIES.find((s) => s.slug === service);
  if (!cityData || !serviceData) notFound();

  const deals = getDealsForCityService(city, service);

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
    {
      name: serviceData.name,
      url: `https://healvanna.com/deals/${cityData.slug}/${serviceData.slug}`,
    },
  ]);

  return (
    <>
      <StructuredData data={offerSchema} />
      <StructuredData data={breadcrumbSchema} />
      <CityServiceDealsContent
        city={cityData}
        service={serviceData}
        deals={deals}
        otherServices={DEAL_SERVICE_CATEGORIES}
      />
    </>
  );
}
