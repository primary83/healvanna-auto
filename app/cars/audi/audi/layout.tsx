import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Audi Audi — Specs, Range & Pricing",
  description:
    "Audi Audi — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Audi Audi | Healvanna Auto",
    description: "Audi Audi — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/audi/audi",
  },
};

export default function AudiAudiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Audi Audi",
    brand: {
      "@type": "Brand",
      name: "Audi"
    },
    description: "Audi Audi electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/audi/audi",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
