import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BMW I7 — Specs, Range & Pricing",
  description:
    "BMW I7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BMW I7 | Healvanna Auto",
    description: "BMW I7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/bmw/i7",
  },
};

export default function BMWI7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BMW I7",
    brand: {
      "@type": "Brand",
      name: "BMW"
    },
    description: "BMW I7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/bmw/i7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
