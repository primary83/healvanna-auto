import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Acura Zdx — Specs, Range & Pricing",
  description:
    "Acura Zdx — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Acura Zdx | Healvanna Auto",
    description: "Acura Zdx — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/acura/zdx",
  },
};

export default function AcuraZdxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Acura Zdx",
    brand: {
      "@type": "Brand",
      name: "Acura"
    },
    description: "Acura Zdx electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/acura/zdx",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
