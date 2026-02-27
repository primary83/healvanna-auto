import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Zeekr 007 — Specs, Range & Pricing",
  description:
    "Zeekr 007 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Zeekr 007 | Healvanna Auto",
    description: "Zeekr 007 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/zeekr/007",
  },
};

export default function Zeekr007Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Zeekr 007",
    brand: {
      "@type": "Brand",
      name: "Zeekr"
    },
    description: "Zeekr 007 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/zeekr/007",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
