import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Audi E Tron Gt — Specs, Range & Pricing",
  description:
    "Audi E Tron Gt — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Audi E Tron Gt | Healvanna Auto",
    description: "Audi E Tron Gt — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/audi/e-tron-gt",
  },
};

export default function AudiETronGtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Audi E Tron Gt",
    brand: {
      "@type": "Brand",
      name: "Audi"
    },
    description: "Audi E Tron Gt electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/audi/e-tron-gt",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
