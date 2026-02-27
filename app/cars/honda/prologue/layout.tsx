import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Honda Prologue — Specs, Range & Pricing",
  description:
    "Honda Prologue — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Honda Prologue | Healvanna Auto",
    description: "Honda Prologue — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/honda/prologue",
  },
};

export default function HondaPrologueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Honda Prologue",
    brand: {
      "@type": "Brand",
      name: "Honda"
    },
    description: "Honda Prologue electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/honda/prologue",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
