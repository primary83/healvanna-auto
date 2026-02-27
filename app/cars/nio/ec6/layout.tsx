import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Ec6 — Specs, Range & Pricing",
  description:
    "NIO Ec6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "NIO Ec6 | Healvanna Auto",
    description: "NIO Ec6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/nio/ec6",
  },
};

export default function NIOEc6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NIO Ec6",
    brand: {
      "@type": "Brand",
      name: "NIO"
    },
    description: "NIO Ec6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/nio/ec6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
