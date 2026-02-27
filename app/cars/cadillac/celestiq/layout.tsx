import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Cadillac Celestiq — Specs, Range & Pricing",
  description:
    "Cadillac Celestiq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Cadillac Celestiq | Healvanna Auto",
    description: "Cadillac Celestiq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/cadillac/celestiq",
  },
};

export default function CadillacCelestiqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cadillac Celestiq",
    brand: {
      "@type": "Brand",
      name: "Cadillac"
    },
    description: "Cadillac Celestiq electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/cadillac/celestiq",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
