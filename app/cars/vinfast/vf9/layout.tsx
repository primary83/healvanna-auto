import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "VinFast Vf9 — Specs, Range & Pricing",
  description:
    "VinFast Vf9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "VinFast Vf9 | Healvanna Auto",
    description: "VinFast Vf9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/vinfast/vf9",
  },
};

export default function VinFastVf9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VinFast Vf9",
    brand: {
      "@type": "Brand",
      name: "VinFast"
    },
    description: "VinFast Vf9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/vinfast/vf9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
