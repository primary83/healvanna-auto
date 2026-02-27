import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Tang — Specs, Range & Pricing",
  description:
    "BYD Tang — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BYD Tang | Healvanna Auto",
    description: "BYD Tang — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/byd/tang",
  },
};

export default function BYDTangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BYD Tang",
    brand: {
      "@type": "Brand",
      name: "BYD"
    },
    description: "BYD Tang electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/byd/tang",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
