import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Cadillac Lyriq — Specs, Range & Pricing",
  description:
    "Cadillac Lyriq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Cadillac Lyriq | Healvanna Auto",
    description: "Cadillac Lyriq — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/cadillac/lyriq",
  },
};

export default function CadillacLyriqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cadillac Lyriq",
    brand: {
      "@type": "Brand",
      name: "Cadillac"
    },
    description: "Cadillac Lyriq electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/cadillac/lyriq",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
