import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Rivian R1t — Specs, Range & Pricing",
  description:
    "Rivian R1t — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Rivian R1t | Healvanna Auto",
    description: "Rivian R1t — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/rivian/r1t",
  },
};

export default function RivianR1tLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rivian R1t",
    brand: {
      "@type": "Brand",
      name: "Rivian"
    },
    description: "Rivian R1t electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/rivian/r1t",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
