import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Porsche Macan Ev — Specs, Range & Pricing",
  description:
    "Porsche Macan Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Porsche Macan Ev | Healvanna Auto",
    description: "Porsche Macan Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/porsche/macan-ev",
  },
};

export default function PorscheMacanEvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Porsche Macan Ev",
    brand: {
      "@type": "Brand",
      name: "Porsche"
    },
    description: "Porsche Macan Ev electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/porsche/macan-ev",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
