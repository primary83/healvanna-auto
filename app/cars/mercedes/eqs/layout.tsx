import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mercedes Eqs — Specs, Range & Pricing",
  description:
    "Mercedes Eqs — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Mercedes Eqs | Healvanna Auto",
    description: "Mercedes Eqs — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/mercedes/eqs",
  },
};

export default function MercedesEqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mercedes Eqs",
    brand: {
      "@type": "Brand",
      name: "Mercedes"
    },
    description: "Mercedes Eqs electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/mercedes/eqs",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
