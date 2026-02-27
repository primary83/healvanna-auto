import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Dodge Charger Daytona — Specs, Range & Pricing",
  description:
    "Dodge Charger Daytona — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Dodge Charger Daytona | Healvanna Auto",
    description: "Dodge Charger Daytona — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/dodge/charger-daytona",
  },
};

export default function DodgeChargerDaytonaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dodge Charger Daytona",
    brand: {
      "@type": "Brand",
      name: "Dodge"
    },
    description: "Dodge Charger Daytona electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/dodge/charger-daytona",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
