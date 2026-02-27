import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Ford E Transit — Specs, Range & Pricing",
  description:
    "Ford E Transit — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Ford E Transit | Healvanna Auto",
    description: "Ford E Transit — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/ford/e-transit",
  },
};

export default function FordETransitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ford E Transit",
    brand: {
      "@type": "Brand",
      name: "Ford"
    },
    description: "Ford E Transit electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/ford/e-transit",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
