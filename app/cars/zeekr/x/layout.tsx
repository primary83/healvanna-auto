import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Zeekr X — Specs, Range & Pricing",
  description:
    "Zeekr X — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Zeekr X | Healvanna Auto",
    description: "Zeekr X — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/zeekr/x",
  },
};

export default function ZeekrXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Zeekr X",
    brand: {
      "@type": "Brand",
      name: "Zeekr"
    },
    description: "Zeekr X electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/zeekr/x",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
