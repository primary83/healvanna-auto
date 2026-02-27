import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Et7 — Specs, Range & Pricing",
  description:
    "NIO Et7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "NIO Et7 | Healvanna Auto",
    description: "NIO Et7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nio/et7",
  },
};

export default function NIOEt7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NIO Et7",
    brand: {
      "@type": "Brand",
      name: "NIO"
    },
    description: "NIO Et7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nio/et7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
