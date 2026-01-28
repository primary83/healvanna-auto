import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("auto-painting", "custom-paint")!;

export const metadata: Metadata = {
  title: `Custom Paint Jobs Near You - Master Auto Painters`,
  description: data.subcategory.description,
  keywords: data.subcategory.keywords,
  alternates: { canonical: `/${data.service.slug}/${data.subcategory.slug}` },
  openGraph: {
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
    url: `https://healvanna.com/${data.service.slug}/${data.subcategory.slug}`,
  },
};

export default function CustomPaintPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="custom-paint" />;
}
