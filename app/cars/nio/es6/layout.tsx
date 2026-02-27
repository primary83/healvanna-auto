import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Es6 — Specs, Range & Pricing",
  description:
    "NIO Es6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "NIO Es6 | Healvanna Auto",
    description: "NIO Es6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nio/es6",
  },
};

export default function NIOEs6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NIO Es6",
    brand: {
      "@type": "Brand",
      name: "NIO"
    },
    description: "NIO Es6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nio/es6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
