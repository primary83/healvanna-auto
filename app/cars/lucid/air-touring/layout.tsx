import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lucid Air Touring — Specs, Range & Pricing",
  description:
    "Lucid Air Touring — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Lucid Air Touring | Healvanna Auto",
    description: "Lucid Air Touring — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/lucid/air-touring",
  },
};

export default function LucidAirTouringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lucid Air Touring",
    brand: {
      "@type": "Brand",
      name: "Lucid"
    },
    description: "Lucid Air Touring electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/lucid/air-touring",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
