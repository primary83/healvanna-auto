import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("car-wrapping", "ppf")!;

export const metadata: Metadata = {
  title: `Paint Protection Film (PPF) Near You - Clear Bra Installers`,
  description: data.subcategory.description,
  keywords: data.subcategory.keywords,
  alternates: { canonical: `/${data.service.slug}/${data.subcategory.slug}` },
  openGraph: {
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
    url: `https://healvanna.com/${data.service.slug}/${data.subcategory.slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
  },
};

export default function PPFPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="ppf" />;
}
