import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volvo Ex90 — Specs, Range & Pricing",
  description:
    "Volvo Ex90 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volvo Ex90 | Healvanna Auto",
    description: "Volvo Ex90 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volvo/ex90",
  },
};

export default function VolvoEx90Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volvo Ex90",
    brand: {
      "@type": "Brand",
      name: "Volvo"
    },
    description: "Volvo Ex90 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volvo/ex90",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
