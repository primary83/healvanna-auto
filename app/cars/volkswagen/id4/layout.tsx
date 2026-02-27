import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volkswagen Id4 — Specs, Range & Pricing",
  description:
    "Volkswagen Id4 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volkswagen Id4 | Healvanna Auto",
    description: "Volkswagen Id4 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volkswagen/id4",
  },
};

export default function VolkswagenId4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volkswagen Id4",
    brand: {
      "@type": "Brand",
      name: "Volkswagen"
    },
    description: "Volkswagen Id4 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volkswagen/id4",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
