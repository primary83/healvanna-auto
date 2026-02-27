import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Kia Ev9 — Specs, Range & Pricing",
  description:
    "Kia Ev9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Kia Ev9 | Healvanna Auto",
    description: "Kia Ev9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/kia/ev9",
  },
};

export default function KiaEv9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kia Ev9",
    brand: {
      "@type": "Brand",
      name: "Kia"
    },
    description: "Kia Ev9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/kia/ev9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
