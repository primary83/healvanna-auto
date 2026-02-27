import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Et5 — Specs, Range & Pricing",
  description:
    "NIO Et5 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "NIO Et5 | Healvanna Auto",
    description: "NIO Et5 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nio/et5",
  },
};

export default function NIOEt5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NIO Et5",
    brand: {
      "@type": "Brand",
      name: "NIO"
    },
    description: "NIO Et5 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nio/et5",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
