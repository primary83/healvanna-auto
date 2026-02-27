import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lexus Rz 450e — Specs, Range & Pricing",
  description:
    "Lexus Rz 450e — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Lexus Rz 450e | Healvanna Auto",
    description: "Lexus Rz 450e — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/lexus/rz-450e",
  },
};

export default function LexusRz450eLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lexus Rz 450e",
    brand: {
      "@type": "Brand",
      name: "Lexus"
    },
    description: "Lexus Rz 450e electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/lexus/rz-450e",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
