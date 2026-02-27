import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Hyundai Ioniq 9 — Specs, Range & Pricing",
  description:
    "Hyundai Ioniq 9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Hyundai Ioniq 9 | Healvanna Auto",
    description: "Hyundai Ioniq 9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/hyundai/ioniq-9",
  },
};

export default function HyundaiIoniq9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hyundai Ioniq 9",
    brand: {
      "@type": "Brand",
      name: "Hyundai"
    },
    description: "Hyundai Ioniq 9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/hyundai/ioniq-9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
