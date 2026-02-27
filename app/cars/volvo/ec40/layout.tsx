import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volvo Ec40 — Specs, Range & Pricing",
  description:
    "Volvo Ec40 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volvo Ec40 | Healvanna Auto",
    description: "Volvo Ec40 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volvo/ec40",
  },
};

export default function VolvoEc40Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volvo Ec40",
    brand: {
      "@type": "Brand",
      name: "Volvo"
    },
    description: "Volvo Ec40 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volvo/ec40",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
