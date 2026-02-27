import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lucid Gravity — Specs, Range & Pricing",
  description:
    "Lucid Gravity — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Lucid Gravity | Healvanna Auto",
    description: "Lucid Gravity — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/lucid/gravity",
  },
};

export default function LucidGravityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lucid Gravity",
    brand: {
      "@type": "Brand",
      name: "Lucid"
    },
    description: "Lucid Gravity electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/lucid/gravity",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
