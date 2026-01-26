import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("auto-glass", "windshield-repair")!;

export const metadata: Metadata = {
  title: `Windshield Repair Near You - Chip & Crack Repair`,
  description: data.subcategory.description,
  keywords: data.subcategory.keywords,
  alternates: { canonical: `/${data.service.slug}/${data.subcategory.slug}` },
  openGraph: {
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
    url: `https://healvanna.com/${data.service.slug}/${data.subcategory.slug}`,
  },
};

export default function WindshieldRepairPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="windshield-repair" />;
}
