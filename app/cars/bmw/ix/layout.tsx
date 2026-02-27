import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BMW Ix — Specs, Range & Pricing",
  description:
    "BMW Ix — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BMW Ix | Healvanna Auto",
    description: "BMW Ix — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/bmw/ix",
  },
};

export default function BMWIxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BMW Ix",
    brand: {
      "@type": "Brand",
      name: "BMW"
    },
    description: "BMW Ix electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/bmw/ix",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
