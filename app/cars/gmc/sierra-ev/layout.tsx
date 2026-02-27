import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "GMC Sierra Ev — Specs, Range & Pricing",
  description:
    "GMC Sierra Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "GMC Sierra Ev | Healvanna Auto",
    description: "GMC Sierra Ev — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/gmc/sierra-ev",
  },
};

export default function GMCSierraEvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GMC Sierra Ev",
    brand: {
      "@type": "Brand",
      name: "GMC"
    },
    description: "GMC Sierra Ev electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/gmc/sierra-ev",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
