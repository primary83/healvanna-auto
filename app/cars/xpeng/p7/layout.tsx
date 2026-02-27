import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "XPeng P7 — Specs, Range & Pricing",
  description:
    "XPeng P7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "XPeng P7 | Healvanna Auto",
    description: "XPeng P7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/xpeng/p7",
  },
};

export default function XPengP7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "XPeng P7",
    brand: {
      "@type": "Brand",
      name: "XPeng"
    },
    description: "XPeng P7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/xpeng/p7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
