import type { Metadata } from "next";
import { getServiceBySlug } from "../lib/services";
import ServiceListingPage from "../components/ServiceListingPage";

const service = getServiceBySlug("auto-painting")!;

export const metadata: Metadata = {
  title: `${service.name} Near You - Professional Refinishing`,
  description: service.seoDescription,
  keywords: service.keywords,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: `${service.name} - Healvanna Auto`,
    description: service.seoDescription,
    url: `https://healvanna.com/${service.slug}`,
  },
};

export default function AutoPaintingPage() {
  return <ServiceListingPage service={service} />;
}
