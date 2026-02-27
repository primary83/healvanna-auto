import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Nissan Leaf — Specs, Range & Pricing",
  description:
    "Nissan Leaf — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Nissan Leaf | Healvanna Auto",
    description: "Nissan Leaf — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nissan/leaf",
  },
};

export default function NissanLeafLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nissan Leaf",
    brand: {
      "@type": "Brand",
      name: "Nissan"
    },
    description: "Nissan Leaf electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nissan/leaf",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
