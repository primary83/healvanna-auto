import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Subaru Solterra — Specs, Range & Pricing",
  description:
    "Subaru Solterra — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Subaru Solterra | Healvanna Auto",
    description: "Subaru Solterra — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/subaru/solterra",
  },
};

export default function SubaruSolterraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Subaru Solterra",
    brand: {
      "@type": "Brand",
      name: "Subaru"
    },
    description: "Subaru Solterra electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/subaru/solterra",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
