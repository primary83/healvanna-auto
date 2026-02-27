import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto P7 — Specs, Range & Pricing",
  description:
    "Li Auto P7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Li Auto P7 | Healvanna Auto",
    description: "Li Auto P7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/li-auto/p7",
  },
};

export default function LiAutoP7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Li Auto P7",
    brand: {
      "@type": "Brand",
      name: "Li Auto"
    },
    description: "Li Auto P7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/li-auto/p7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
