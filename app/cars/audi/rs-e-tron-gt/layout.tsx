import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Audi Rs E Tron Gt — Specs, Range & Pricing",
  description:
    "Audi Rs E Tron Gt — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Audi Rs E Tron Gt | Healvanna Auto",
    description: "Audi Rs E Tron Gt — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/audi/rs-e-tron-gt",
  },
};

export default function AudiRsETronGtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Audi Rs E Tron Gt",
    brand: {
      "@type": "Brand",
      name: "Audi"
    },
    description: "Audi Rs E Tron Gt electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/audi/rs-e-tron-gt",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
