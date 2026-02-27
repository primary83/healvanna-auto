import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "VinFast Vf8 — Specs, Range & Pricing",
  description:
    "VinFast Vf8 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "VinFast Vf8 | Healvanna Auto",
    description: "VinFast Vf8 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/vinfast/vf8",
  },
};

export default function VinFastVf8Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VinFast Vf8",
    brand: {
      "@type": "Brand",
      name: "VinFast"
    },
    description: "VinFast Vf8 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/vinfast/vf8",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
