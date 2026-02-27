import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Ford F 150 Lightning — Specs, Range & Pricing",
  description:
    "Ford F 150 Lightning — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Ford F 150 Lightning | Healvanna Auto",
    description: "Ford F 150 Lightning — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/ford/f-150-lightning",
  },
};

export default function FordF150LightningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ford F 150 Lightning",
    brand: {
      "@type": "Brand",
      name: "Ford"
    },
    description: "Ford F 150 Lightning electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/ford/f-150-lightning",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
