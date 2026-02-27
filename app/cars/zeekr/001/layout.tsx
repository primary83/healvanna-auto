import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Zeekr 001 — Specs, Range & Pricing",
  description:
    "Zeekr 001 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Zeekr 001 | Healvanna Auto",
    description: "Zeekr 001 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/zeekr/001",
  },
};

export default function Zeekr001Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Zeekr 001",
    brand: {
      "@type": "Brand",
      name: "Zeekr"
    },
    description: "Zeekr 001 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/zeekr/001",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
