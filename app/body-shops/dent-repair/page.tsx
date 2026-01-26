import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("body-shops", "dent-repair")!;

export const metadata: Metadata = {
  title: `Dent Repair Near You - Paintless Dent Removal Specialists`,
  description: data.subcategory.description,
  keywords: data.subcategory.keywords,
  alternates: { canonical: `/${data.service.slug}/${data.subcategory.slug}` },
  openGraph: {
    title: `${data.subcategory.name} - Healvanna Auto`,
    description: data.subcategory.description,
    url: `https://healvanna.com/${data.service.slug}/${data.subcategory.slug}`,
  },
};

export default function DentRepairPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="dent-repair" />;
}
