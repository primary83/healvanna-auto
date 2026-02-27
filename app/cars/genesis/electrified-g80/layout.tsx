import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Genesis Electrified G80 — Specs, Range & Pricing",
  description:
    "Genesis Electrified G80 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Genesis Electrified G80 | Healvanna Auto",
    description: "Genesis Electrified G80 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/genesis/electrified-g80",
  },
};

export default function GenesisElectrifiedG80Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Genesis Electrified G80",
    brand: {
      "@type": "Brand",
      name: "Genesis"
    },
    description: "Genesis Electrified G80 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/genesis/electrified-g80",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
