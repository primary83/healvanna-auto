import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Nissan Ariya — Specs, Range & Pricing",
  description:
    "Nissan Ariya — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Nissan Ariya | Healvanna Auto",
    description: "Nissan Ariya — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nissan/ariya",
  },
};

export default function NissanAriyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Nissan Ariya",
    brand: {
      "@type": "Brand",
      name: "Nissan"
    },
    description: "Nissan Ariya electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nissan/ariya",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
