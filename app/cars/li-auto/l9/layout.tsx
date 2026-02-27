import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto L9 — Specs, Range & Pricing",
  description:
    "Li Auto L9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Li Auto L9 | Healvanna Auto",
    description: "Li Auto L9 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/li-auto/l9",
  },
};

export default function LiAutoL9Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Li Auto L9",
    brand: {
      "@type": "Brand",
      name: "Li Auto"
    },
    description: "Li Auto L9 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/li-auto/l9",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
