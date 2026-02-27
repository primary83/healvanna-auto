import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Cadillac Escalade Iq — Specs, Range & Pricing",
  description:
    "Cadillac Escalade Iq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Cadillac Escalade Iq | Healvanna Auto",
    description: "Cadillac Escalade Iq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/cadillac/escalade-iq",
  },
};

export default function CadillacEscaladeIqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cadillac Escalade Iq",
    brand: {
      "@type": "Brand",
      name: "Cadillac"
    },
    description: "Cadillac Escalade Iq electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/cadillac/escalade-iq",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
