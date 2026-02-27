import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Hyundai Ioniq 6 — Specs, Range & Pricing",
  description:
    "Hyundai Ioniq 6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Hyundai Ioniq 6 | Healvanna Auto",
    description: "Hyundai Ioniq 6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/hyundai/ioniq-6",
  },
};

export default function HyundaiIoniq6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hyundai Ioniq 6",
    brand: {
      "@type": "Brand",
      name: "Hyundai"
    },
    description: "Hyundai Ioniq 6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/hyundai/ioniq-6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
