import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("car-washing", "full-service")!;

export const metadata: Metadata = {
  title: `Full Service Car Wash Near You - Complete Interior & Exterior`,
  description: data.subcategory.description,
  keywords: data.subcategory.keywords,
  alternates: { canonical: `/${data.service.slug}/${data.subcategory.slug}` },
  openGraph: {
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
    url: `https://healvanna.com/${data.service.slug}/${data.subcategory.slug}`,
  },
};

export default function FullServiceWashPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="full-service" />;
}
