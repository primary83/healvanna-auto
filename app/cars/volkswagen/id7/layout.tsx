import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volkswagen Id7 — Specs, Range & Pricing",
  description:
    "Volkswagen Id7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volkswagen Id7 | Healvanna Auto",
    description: "Volkswagen Id7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volkswagen/id7",
  },
};

export default function VolkswagenId7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volkswagen Id7",
    brand: {
      "@type": "Brand",
      name: "Volkswagen"
    },
    description: "Volkswagen Id7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volkswagen/id7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
