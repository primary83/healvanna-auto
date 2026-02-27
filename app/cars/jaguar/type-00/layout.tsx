import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Jaguar Type 00 — Specs, Range & Pricing",
  description:
    "Jaguar Type 00 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Jaguar Type 00 | Healvanna Auto",
    description: "Jaguar Type 00 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/jaguar/type-00",
  },
};

export default function JaguarType00Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Jaguar Type 00",
    brand: {
      "@type": "Brand",
      name: "Jaguar"
    },
    description: "Jaguar Type 00 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/jaguar/type-00",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
