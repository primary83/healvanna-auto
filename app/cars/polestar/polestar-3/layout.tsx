import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Polestar Polestar 3 — Specs, Range & Pricing",
  description:
    "Polestar Polestar 3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Polestar Polestar 3 | Healvanna Auto",
    description: "Polestar Polestar 3 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/polestar/polestar-3",
  },
};

export default function PolestarPolestar3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Polestar Polestar 3",
    brand: {
      "@type": "Brand",
      name: "Polestar"
    },
    description: "Polestar Polestar 3 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/polestar/polestar-3",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
