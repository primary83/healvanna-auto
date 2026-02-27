import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Ford Mustang Mach E — Specs, Range & Pricing",
  description:
    "Ford Mustang Mach E — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Ford Mustang Mach E | Healvanna Auto",
    description: "Ford Mustang Mach E — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/ford/mustang-mach-e",
  },
};

export default function FordMustangMachELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ford Mustang Mach E",
    brand: {
      "@type": "Brand",
      name: "Ford"
    },
    description: "Ford Mustang Mach E electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/ford/mustang-mach-e",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
