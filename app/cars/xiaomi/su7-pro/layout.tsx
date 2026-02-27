import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Xiaomi Su7 Pro — Specs, Range & Pricing",
  description:
    "Xiaomi Su7 Pro — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Xiaomi Su7 Pro | Healvanna Auto",
    description: "Xiaomi Su7 Pro — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xiaomi/su7-pro",
  },
};

export default function XiaomiSu7ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Xiaomi Su7 Pro",
    brand: {
      "@type": "Brand",
      name: "Xiaomi"
    },
    description: "Xiaomi Su7 Pro electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xiaomi/su7-pro",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
