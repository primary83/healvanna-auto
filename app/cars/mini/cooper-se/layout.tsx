import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mini Cooper Se — Specs, Range & Pricing",
  description:
    "Mini Cooper Se — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Mini Cooper Se | Healvanna Auto",
    description: "Mini Cooper Se — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/mini/cooper-se",
  },
};

export default function MiniCooperSeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mini Cooper Se",
    brand: {
      "@type": "Brand",
      name: "Mini"
    },
    description: "Mini Cooper Se electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/mini/cooper-se",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
