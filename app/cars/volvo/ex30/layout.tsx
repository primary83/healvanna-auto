import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volvo Ex30 — Specs, Range & Pricing",
  description:
    "Volvo Ex30 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volvo Ex30 | Healvanna Auto",
    description: "Volvo Ex30 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volvo/ex30",
  },
};

export default function VolvoEx30Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volvo Ex30",
    brand: {
      "@type": "Brand",
      name: "Volvo"
    },
    description: "Volvo Ex30 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volvo/ex30",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
