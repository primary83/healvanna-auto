import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Hyundai Kona Electric — Specs, Range & Pricing",
  description:
    "Hyundai Kona Electric — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Hyundai Kona Electric | Healvanna Auto",
    description: "Hyundai Kona Electric — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/hyundai/kona-electric",
  },
};

export default function HyundaiKonaElectricLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Hyundai Kona Electric",
    brand: {
      "@type": "Brand",
      name: "Hyundai"
    },
    description: "Hyundai Kona Electric electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/hyundai/kona-electric",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
