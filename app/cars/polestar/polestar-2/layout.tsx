import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Polestar Polestar 2 — Specs, Range & Pricing",
  description:
    "Polestar Polestar 2 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Polestar Polestar 2 | Healvanna Auto",
    description: "Polestar Polestar 2 — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/polestar/polestar-2",
  },
};

export default function PolestarPolestar2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Polestar Polestar 2",
    brand: {
      "@type": "Brand",
      name: "Polestar"
    },
    description: "Polestar Polestar 2 electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/polestar/polestar-2",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
