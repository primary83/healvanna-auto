import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volkswagen Id Buzz — Specs, Range & Pricing",
  description:
    "Volkswagen Id Buzz — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volkswagen Id Buzz | Healvanna Auto",
    description: "Volkswagen Id Buzz — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volkswagen/id-buzz",
  },
};

export default function VolkswagenIdBuzzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volkswagen Id Buzz",
    brand: {
      "@type": "Brand",
      name: "Volkswagen"
    },
    description: "Volkswagen Id Buzz electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volkswagen/id-buzz",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
