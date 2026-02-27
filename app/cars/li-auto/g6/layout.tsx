import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto G6 — Specs, Range & Pricing",
  description:
    "Li Auto G6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Li Auto G6 | Healvanna Auto",
    description: "Li Auto G6 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/li-auto/g6",
  },
};

export default function LiAutoG6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Li Auto G6",
    brand: {
      "@type": "Brand",
      name: "Li Auto"
    },
    description: "Li Auto G6 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/li-auto/g6",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
