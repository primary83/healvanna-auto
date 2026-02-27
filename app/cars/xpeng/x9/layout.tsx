import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "XPeng X9 — Specs, Range & Pricing",
  description:
    "XPeng X9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "XPeng X9 | Healvanna Auto",
    description: "XPeng X9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xpeng/x9",
  },
};

export default function XPengX9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "XPeng X9",
    brand: {
      "@type": "Brand",
      name: "XPeng"
    },
    description: "XPeng X9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xpeng/x9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
