import type { Metadata } from "next";
import { getServiceBySlug } from "../lib/services";
import ServiceListingPage from "../components/ServiceListingPage";

const service = getServiceBySlug("car-wrapping")!;

export const metadata: Metadata = {
  title: `${service.name} Near You - Find Vinyl Wrap & PPF Specialists`,
  description: service.seoDescription,
  keywords: service.keywords,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: `${service.name} - Healvanna Auto`,
    description: service.seoDescription,
    url: `https://healvanna.com/${service.slug}`,
  },
};

export default function CarWrappingPage() {
  return <ServiceListingPage service={service} />;
}
