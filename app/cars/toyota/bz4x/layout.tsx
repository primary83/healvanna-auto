import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Toyota Bz4x — Specs, Range & Pricing",
  description:
    "Toyota Bz4x — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Toyota Bz4x | Healvanna Auto",
    description: "Toyota Bz4x — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/toyota/bz4x",
  },
};

export default function ToyotaBz4xLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Toyota Bz4x",
    brand: {
      "@type": "Brand",
      name: "Toyota"
    },
    description: "Toyota Bz4x electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/toyota/bz4x",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
