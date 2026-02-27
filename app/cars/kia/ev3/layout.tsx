import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Kia Ev3 — Specs, Range & Pricing",
  description:
    "Kia Ev3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Kia Ev3 | Healvanna Auto",
    description: "Kia Ev3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/kia/ev3",
  },
};

export default function KiaEv3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kia Ev3",
    brand: {
      "@type": "Brand",
      name: "Kia"
    },
    description: "Kia Ev3 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/kia/ev3",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
