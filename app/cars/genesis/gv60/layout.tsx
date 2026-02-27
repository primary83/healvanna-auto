import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Genesis Gv60 — Specs, Range & Pricing",
  description:
    "Genesis Gv60 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Genesis Gv60 | Healvanna Auto",
    description: "Genesis Gv60 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/genesis/gv60",
  },
};

export default function GenesisGv60Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Genesis Gv60",
    brand: {
      "@type": "Brand",
      name: "Genesis"
    },
    description: "Genesis Gv60 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/genesis/gv60",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
