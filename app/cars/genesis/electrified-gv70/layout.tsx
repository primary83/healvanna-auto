import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Genesis Electrified Gv70 — Specs, Range & Pricing",
  description:
    "Genesis Electrified Gv70 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Genesis Electrified Gv70 | Healvanna Auto",
    description: "Genesis Electrified Gv70 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/genesis/electrified-gv70",
  },
};

export default function GenesisElectrifiedGv70Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Genesis Electrified Gv70",
    brand: {
      "@type": "Brand",
      name: "Genesis"
    },
    description: "Genesis Electrified Gv70 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/genesis/electrified-gv70",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
