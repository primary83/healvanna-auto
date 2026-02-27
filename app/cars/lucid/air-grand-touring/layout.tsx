import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lucid Air Grand Touring — Specs, Range & Pricing",
  description:
    "Lucid Air Grand Touring — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Lucid Air Grand Touring | Healvanna Auto",
    description: "Lucid Air Grand Touring — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/lucid/air-grand-touring",
  },
};

export default function LucidAirGrandTouringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lucid Air Grand Touring",
    brand: {
      "@type": "Brand",
      name: "Lucid"
    },
    description: "Lucid Air Grand Touring electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/lucid/air-grand-touring",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
