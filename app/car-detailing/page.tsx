import type { Metadata } from "next";
import { getServiceBySlug } from "../lib/services";
import ServiceListingPage from "../components/ServiceListingPage";

const service = getServiceBySlug("car-detailing")!;

export const metadata: Metadata = {
  title: `${service.name} Near You - Find Trusted Detailers`,
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

export default function CarDetailingPage() {
  return <ServiceListingPage service={service} />;
}
