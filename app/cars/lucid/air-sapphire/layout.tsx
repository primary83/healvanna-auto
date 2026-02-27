import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lucid Air Sapphire — Specs, Range & Pricing",
  description:
    "Lucid Air Sapphire — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Lucid Air Sapphire | Healvanna Auto",
    description: "Lucid Air Sapphire — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/lucid/air-sapphire",
  },
};

export default function LucidAirSapphireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lucid Air Sapphire",
    brand: {
      "@type": "Brand",
      name: "Lucid"
    },
    description: "Lucid Air Sapphire electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/lucid/air-sapphire",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
