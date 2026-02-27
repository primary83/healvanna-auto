import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Rivian R1s — Specs, Range & Pricing",
  description:
    "Rivian R1s — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Rivian R1s | Healvanna Auto",
    description: "Rivian R1s — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/rivian/r1s",
  },
};

export default function RivianR1sLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rivian R1s",
    brand: {
      "@type": "Brand",
      name: "Rivian"
    },
    description: "Rivian R1s electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/rivian/r1s",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
