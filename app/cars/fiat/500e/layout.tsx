import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Fiat 500e — Specs, Range & Pricing",
  description:
    "Fiat 500e — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Fiat 500e | Healvanna Auto",
    description: "Fiat 500e — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/fiat/500e",
  },
};

export default function Fiat500eLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Fiat 500e",
    brand: {
      "@type": "Brand",
      name: "Fiat"
    },
    description: "Fiat 500e electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/fiat/500e",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
