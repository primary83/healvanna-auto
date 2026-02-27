import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mercedes Eqb — Specs, Range & Pricing",
  description:
    "Mercedes Eqb — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Mercedes Eqb | Healvanna Auto",
    description: "Mercedes Eqb — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/mercedes/eqb",
  },
};

export default function MercedesEqbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mercedes Eqb",
    brand: {
      "@type": "Brand",
      name: "Mercedes"
    },
    description: "Mercedes Eqb electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/mercedes/eqb",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
