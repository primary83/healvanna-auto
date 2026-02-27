import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mini Countryman Se — Specs, Range & Pricing",
  description:
    "Mini Countryman Se — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Mini Countryman Se | Healvanna Auto",
    description: "Mini Countryman Se — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/mini/countryman-se",
  },
};

export default function MiniCountrymanSeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mini Countryman Se",
    brand: {
      "@type": "Brand",
      name: "Mini"
    },
    description: "Mini Countryman Se electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/mini/countryman-se",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
