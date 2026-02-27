import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Cadillac Optiq — Specs, Range & Pricing",
  description:
    "Cadillac Optiq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Cadillac Optiq | Healvanna Auto",
    description: "Cadillac Optiq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/cadillac/optiq",
  },
};

export default function CadillacOptiqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cadillac Optiq",
    brand: {
      "@type": "Brand",
      name: "Cadillac"
    },
    description: "Cadillac Optiq electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/cadillac/optiq",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
