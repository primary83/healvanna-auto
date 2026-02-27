import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Model X — Specs, Range & Pricing",
  description:
    "Tesla Model X — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Tesla Model X | Healvanna Auto",
    description: "Tesla Model X — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/tesla/model-x",
  },
};

export default function TeslaModelXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tesla Model X",
    brand: {
      "@type": "Brand",
      name: "Tesla"
    },
    description: "Tesla Model X electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/tesla/model-x",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
