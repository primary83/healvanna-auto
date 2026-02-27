import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Zeekr 009 — Specs, Range & Pricing",
  description:
    "Zeekr 009 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Zeekr 009 | Healvanna Auto",
    description: "Zeekr 009 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/zeekr/009",
  },
};

export default function Zeekr009Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Zeekr 009",
    brand: {
      "@type": "Brand",
      name: "Zeekr"
    },
    description: "Zeekr 009 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/zeekr/009",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
