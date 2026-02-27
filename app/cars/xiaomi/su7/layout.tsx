import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Xiaomi Su7 — Specs, Range & Pricing",
  description:
    "Xiaomi Su7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Xiaomi Su7 | Healvanna Auto",
    description: "Xiaomi Su7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xiaomi/su7",
  },
};

export default function XiaomiSu7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Xiaomi Su7",
    brand: {
      "@type": "Brand",
      name: "Xiaomi"
    },
    description: "Xiaomi Su7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xiaomi/su7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
