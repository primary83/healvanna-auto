import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mercedes Eqe — Specs, Range & Pricing",
  description:
    "Mercedes Eqe — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Mercedes Eqe | Healvanna Auto",
    description: "Mercedes Eqe — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/mercedes/eqe",
  },
};

export default function MercedesEqeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mercedes Eqe",
    brand: {
      "@type": "Brand",
      name: "Mercedes"
    },
    description: "Mercedes Eqe electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/mercedes/eqe",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
