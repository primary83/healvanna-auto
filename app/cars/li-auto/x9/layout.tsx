import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto X9 — Specs, Range & Pricing",
  description:
    "Li Auto X9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Li Auto X9 | Healvanna Auto",
    description: "Li Auto X9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/li-auto/x9",
  },
};

export default function LiAutoX9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Li Auto X9",
    brand: {
      "@type": "Brand",
      name: "Li Auto"
    },
    description: "Li Auto X9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/li-auto/x9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
