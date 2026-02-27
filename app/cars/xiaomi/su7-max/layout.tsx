import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Xiaomi Su7 Max — Specs, Range & Pricing",
  description:
    "Xiaomi Su7 Max — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Xiaomi Su7 Max | Healvanna Auto",
    description: "Xiaomi Su7 Max — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xiaomi/su7-max",
  },
};

export default function XiaomiSu7MaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Xiaomi Su7 Max",
    brand: {
      "@type": "Brand",
      name: "Xiaomi"
    },
    description: "Xiaomi Su7 Max electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xiaomi/su7-max",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
