import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Porsche Taycan — Specs, Range & Pricing",
  description:
    "Porsche Taycan — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Porsche Taycan | Healvanna Auto",
    description: "Porsche Taycan — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/porsche/taycan",
  },
};

export default function PorscheTaycanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Porsche Taycan",
    brand: {
      "@type": "Brand",
      name: "Porsche"
    },
    description: "Porsche Taycan electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/porsche/taycan",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
