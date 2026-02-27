import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto L7 — Specs, Range & Pricing",
  description:
    "Li Auto L7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Li Auto L7 | Healvanna Auto",
    description: "Li Auto L7 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/li-auto/l7",
  },
};

export default function LiAutoL7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Li Auto L7",
    brand: {
      "@type": "Brand",
      name: "Li Auto"
    },
    description: "Li Auto L7 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/li-auto/l7",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
