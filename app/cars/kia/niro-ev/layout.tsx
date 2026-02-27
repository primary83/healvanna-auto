import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Kia Niro Ev — Specs, Range & Pricing",
  description:
    "Kia Niro Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Kia Niro Ev | Healvanna Auto",
    description: "Kia Niro Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/kia/niro-ev",
  },
};

export default function KiaNiroEvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kia Niro Ev",
    brand: {
      "@type": "Brand",
      name: "Kia"
    },
    description: "Kia Niro Ev electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/kia/niro-ev",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
