import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("car-wrapping", "color-change-wrap")!;

export const metadata: Metadata = {
  title: `Color Change Wrap Near You - Transform Your Vehicle`,
  description: data.subcategory.description,
  keywords: data.subcategory.keywords,
  alternates: { canonical: `/${data.service.slug}/${data.subcategory.slug}` },
  openGraph: {
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
    url: `https://healvanna.com/${data.service.slug}/${data.subcategory.slug}`,
  },
};

export default function ColorChangeWrapPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="color-change-wrap" />;
}
