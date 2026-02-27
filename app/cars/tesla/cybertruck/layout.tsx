import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Cybertruck — Specs, Range & Pricing",
  description:
    "Tesla Cybertruck — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Tesla Cybertruck | Healvanna Auto",
    description: "Tesla Cybertruck — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/tesla/cybertruck",
  },
};

export default function TeslaCybertruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tesla Cybertruck",
    brand: {
      "@type": "Brand",
      name: "Tesla"
    },
    description: "Tesla Cybertruck electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/tesla/cybertruck",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
