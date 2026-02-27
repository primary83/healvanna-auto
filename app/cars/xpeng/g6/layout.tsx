import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "XPeng G6 — Specs, Range & Pricing",
  description:
    "XPeng G6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "XPeng G6 | Healvanna Auto",
    description: "XPeng G6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xpeng/g6",
  },
};

export default function XPengG6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "XPeng G6",
    brand: {
      "@type": "Brand",
      name: "XPeng"
    },
    description: "XPeng G6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xpeng/g6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
