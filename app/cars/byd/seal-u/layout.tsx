import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Seal U — Specs, Range & Pricing",
  description:
    "BYD Seal U — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BYD Seal U | Healvanna Auto",
    description: "BYD Seal U — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/byd/seal-u",
  },
};

export default function BYDSealULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BYD Seal U",
    brand: {
      "@type": "Brand",
      name: "BYD"
    },
    description: "BYD Seal U electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/byd/seal-u",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
