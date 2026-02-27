import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Han — Specs, Range & Pricing",
  description:
    "BYD Han — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "BYD Han | Healvanna Auto",
    description: "BYD Han — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/byd/han",
  },
};

export default function BYDHanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BYD Han",
    brand: {
      "@type": "Brand",
      name: "BYD"
    },
    description: "BYD Han electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/byd/han",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
