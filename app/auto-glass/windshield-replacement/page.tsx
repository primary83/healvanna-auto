import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("auto-glass", "windshield-replacement")!;

export const metadata: Metadata = {
  title: `Windshield Replacement Near You - OEM Glass Available`,
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

export default function WindshieldReplacementPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="windshield-replacement" />;
}
