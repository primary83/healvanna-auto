import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Chevrolet Equinox Ev — Specs, Range & Pricing",
  description:
    "Chevrolet Equinox Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Chevrolet Equinox Ev | Healvanna Auto",
    description: "Chevrolet Equinox Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/chevrolet/equinox-ev",
  },
};

export default function ChevroletEquinoxEvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Chevrolet Equinox Ev",
    brand: {
      "@type": "Brand",
      name: "Chevrolet"
    },
    description: "Chevrolet Equinox Ev electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/chevrolet/equinox-ev",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
