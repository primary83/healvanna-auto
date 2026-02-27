import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Model 3 — Specs, Range & Pricing",
  description:
    "Tesla Model 3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Tesla Model 3 | Healvanna Auto",
    description: "Tesla Model 3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/tesla/model-3",
  },
};

export default function TeslaModel3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tesla Model 3",
    brand: {
      "@type": "Brand",
      name: "Tesla"
    },
    description: "Tesla Model 3 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/tesla/model-3",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
