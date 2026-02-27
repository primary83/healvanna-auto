import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Chevrolet Silverado Ev — Specs, Range & Pricing",
  description:
    "Chevrolet Silverado Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Chevrolet Silverado Ev | Healvanna Auto",
    description: "Chevrolet Silverado Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/chevrolet/silverado-ev",
  },
};

export default function ChevroletSilveradoEvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Chevrolet Silverado Ev",
    brand: {
      "@type": "Brand",
      name: "Chevrolet"
    },
    description: "Chevrolet Silverado Ev electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/chevrolet/silverado-ev",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
