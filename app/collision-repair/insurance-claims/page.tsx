import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("collision-repair", "insurance-claims")!;

export const metadata: Metadata = {
  title: `Insurance Claim Repair Shops Near You - Direct Billing`,
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

export default function InsuranceClaimsPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="insurance-claims" />;
}
