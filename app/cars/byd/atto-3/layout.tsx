import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Atto 3 — Specs, Range & Pricing",
  description:
    "BYD Atto 3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BYD Atto 3 | Healvanna Auto",
    description: "BYD Atto 3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/byd/atto-3",
  },
};

export default function BYDAtto3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BYD Atto 3",
    brand: {
      "@type": "Brand",
      name: "BYD"
    },
    description: "BYD Atto 3 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/byd/atto-3",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
