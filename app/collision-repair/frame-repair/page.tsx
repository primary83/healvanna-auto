import type { Metadata } from "next";
import { getSubcategory } from "../../lib/services";
import ServiceListingPage from "../../components/ServiceListingPage";

const data = getSubcategory("collision-repair", "frame-repair")!;

export const metadata: Metadata = {
  title: `Frame Repair Near You - Structural & Frame Straightening`,
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

export default function FrameRepairPage() {
  return <ServiceListingPage service={data.service} subcategorySlug="frame-repair" />;
}
