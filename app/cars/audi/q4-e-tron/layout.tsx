import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Audi Q4 E Tron — Specs, Range & Pricing",
  description:
    "Audi Q4 E Tron — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Audi Q4 E Tron | Healvanna Auto",
    description: "Audi Q4 E Tron — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/audi/q4-e-tron",
  },
};

export default function AudiQ4ETronLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Audi Q4 E Tron",
    brand: {
      "@type": "Brand",
      name: "Audi"
    },
    description: "Audi Q4 E Tron electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/audi/q4-e-tron",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
