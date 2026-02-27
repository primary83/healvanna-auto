import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Es8 — Specs, Range & Pricing",
  description:
    "NIO Es8 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "NIO Es8 | Healvanna Auto",
    description: "NIO Es8 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nio/es8",
  },
};

export default function NIOEs8Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NIO Es8",
    brand: {
      "@type": "Brand",
      name: "NIO"
    },
    description: "NIO Es8 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nio/es8",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
