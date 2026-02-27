import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BMW I4 — Specs, Range & Pricing",
  description:
    "BMW I4 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BMW I4 | Healvanna Auto",
    description: "BMW I4 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/bmw/i4",
  },
};

export default function BMWI4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BMW I4",
    brand: {
      "@type": "Brand",
      name: "BMW"
    },
    description: "BMW I4 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/bmw/i4",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
