import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Model S — Specs, Range & Pricing",
  description:
    "Tesla Model S — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Tesla Model S | Healvanna Auto",
    description: "Tesla Model S — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/tesla/model-s",
  },
};

export default function TeslaModelSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tesla Model S",
    brand: {
      "@type": "Brand",
      name: "Tesla"
    },
    description: "Tesla Model S electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/tesla/model-s",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
