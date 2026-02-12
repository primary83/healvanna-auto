import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("auto-painting", "color-matching")!;

export const metadata: Metadata = {
  title: `Color Matching Near You - Precision Paint Matching`,
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

export default function ColorMatchingPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="color-matching" />;
}
