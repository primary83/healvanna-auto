import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Ec7 — Specs, Range & Pricing",
  description:
    "NIO Ec7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "NIO Ec7 | Healvanna Auto",
    description: "NIO Ec7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nio/ec7",
  },
};

export default function NIOEc7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NIO Ec7",
    brand: {
      "@type": "Brand",
      name: "NIO"
    },
    description: "NIO Ec7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nio/ec7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
