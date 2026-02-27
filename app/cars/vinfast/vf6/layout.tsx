import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "VinFast Vf6 — Specs, Range & Pricing",
  description:
    "VinFast Vf6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "VinFast Vf6 | Healvanna Auto",
    description: "VinFast Vf6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/vinfast/vf6",
  },
};

export default function VinFastVf6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VinFast Vf6",
    brand: {
      "@type": "Brand",
      name: "VinFast"
    },
    description: "VinFast Vf6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/vinfast/vf6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
