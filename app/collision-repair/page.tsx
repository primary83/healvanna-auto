import type { Metadata } from "next";
import { getServiceBySlug } from "../lib/services";
import ServiceListingPage from "../components/ServiceListingPage";

const service = getServiceBySlug("collision-repair")!;

export const metadata: Metadata = {
  title: `${service.name} Near You - Expert Accident Damage Repair`,
  description: service.seoDescription,
  keywords: service.keywords,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: `${service.name} - Healvanna Auto`,
    description: service.seoDescription,
    url: `https://healvanna.com/${service.slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.name} - Healvanna Auto`,
    description: service.seoDescription,
  },
};

export default function CollisionRepairPage() {
  return <ServiceListingPage service={service} />;
}
