import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Audi Q8 E Tron — Specs, Range & Pricing",
  description:
    "Audi Q8 E Tron — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Audi Q8 E Tron | Healvanna Auto",
    description: "Audi Q8 E Tron — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/audi/q8-e-tron",
  },
};

export default function AudiQ8ETronLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Audi Q8 E Tron",
    brand: {
      "@type": "Brand",
      name: "Audi"
    },
    description: "Audi Q8 E Tron electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/audi/q8-e-tron",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
