import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Seal — Specs, Range & Pricing",
  description:
    "BYD Seal — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BYD Seal | Healvanna Auto",
    description: "BYD Seal — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/byd/seal",
  },
};

export default function BYDSealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BYD Seal",
    brand: {
      "@type": "Brand",
      name: "BYD"
    },
    description: "BYD Seal electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/byd/seal",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
