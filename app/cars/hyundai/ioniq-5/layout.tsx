import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Hyundai Ioniq 5 — Specs, Range & Pricing",
  description:
    "Hyundai Ioniq 5 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Hyundai Ioniq 5 | Healvanna Auto",
    description: "Hyundai Ioniq 5 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/hyundai/ioniq-5",
  },
};

export default function HyundaiIoniq5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hyundai Ioniq 5",
    brand: {
      "@type": "Brand",
      name: "Hyundai"
    },
    description: "Hyundai Ioniq 5 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/hyundai/ioniq-5",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
