import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Jaguar I Pace — Specs, Range & Pricing",
  description:
    "Jaguar I Pace — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Jaguar I Pace | Healvanna Auto",
    description: "Jaguar I Pace — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/jaguar/i-pace",
  },
};

export default function JaguarIPaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Jaguar I Pace",
    brand: {
      "@type": "Brand",
      name: "Jaguar"
    },
    description: "Jaguar I Pace electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/jaguar/i-pace",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
