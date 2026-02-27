import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "XPeng G9 — Specs, Range & Pricing",
  description:
    "XPeng G9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "XPeng G9 | Healvanna Auto",
    description: "XPeng G9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xpeng/g9",
  },
};

export default function XPengG9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "XPeng G9",
    brand: {
      "@type": "Brand",
      name: "XPeng"
    },
    description: "XPeng G9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xpeng/g9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
