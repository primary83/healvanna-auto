import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lucid Air Pure — Specs, Range & Pricing",
  description:
    "Lucid Air Pure — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Lucid Air Pure | Healvanna Auto",
    description: "Lucid Air Pure — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/lucid/air-pure",
  },
};

export default function LucidAirPureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lucid Air Pure",
    brand: {
      "@type": "Brand",
      name: "Lucid"
    },
    description: "Lucid Air Pure electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/lucid/air-pure",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
