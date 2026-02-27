import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Chevrolet Blazer Ev — Specs, Range & Pricing",
  description:
    "Chevrolet Blazer Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Chevrolet Blazer Ev | Healvanna Auto",
    description: "Chevrolet Blazer Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/chevrolet/blazer-ev",
  },
};

export default function ChevroletBlazerEvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Chevrolet Blazer Ev",
    brand: {
      "@type": "Brand",
      name: "Chevrolet"
    },
    description: "Chevrolet Blazer Ev electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/chevrolet/blazer-ev",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
