import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Model Y — Specs, Range & Pricing",
  description:
    "Tesla Model Y — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Tesla Model Y | Healvanna Auto",
    description: "Tesla Model Y — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/tesla/model-y",
  },
};

export default function TeslaModelYLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tesla Model Y",
    brand: {
      "@type": "Brand",
      name: "Tesla"
    },
    description: "Tesla Model Y electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/tesla/model-y",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
