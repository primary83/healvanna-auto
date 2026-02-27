import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "VinFast Vf7 — Specs, Range & Pricing",
  description:
    "VinFast Vf7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "VinFast Vf7 | Healvanna Auto",
    description: "VinFast Vf7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/vinfast/vf7",
  },
};

export default function VinFastVf7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VinFast Vf7",
    brand: {
      "@type": "Brand",
      name: "VinFast"
    },
    description: "VinFast Vf7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/vinfast/vf7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
