import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Kia Ev6 — Specs, Range & Pricing",
  description:
    "Kia Ev6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Kia Ev6 | Healvanna Auto",
    description: "Kia Ev6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/kia/ev6",
  },
};

export default function KiaEv6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kia Ev6",
    brand: {
      "@type": "Brand",
      name: "Kia"
    },
    description: "Kia Ev6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/kia/ev6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
