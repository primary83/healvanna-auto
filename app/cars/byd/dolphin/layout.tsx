import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Dolphin — Specs, Range & Pricing",
  description:
    "BYD Dolphin — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BYD Dolphin | Healvanna Auto",
    description: "BYD Dolphin — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/byd/dolphin",
  },
};

export default function BYDDolphinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BYD Dolphin",
    brand: {
      "@type": "Brand",
      name: "BYD"
    },
    description: "BYD Dolphin electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/byd/dolphin",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
