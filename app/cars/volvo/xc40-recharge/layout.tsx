import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volvo Xc40 Recharge — Specs, Range & Pricing",
  description:
    "Volvo Xc40 Recharge — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Volvo Xc40 Recharge | Healvanna Auto",
    description: "Volvo Xc40 Recharge — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/volvo/xc40-recharge",
  },
};

export default function VolvoXc40RechargeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Volvo Xc40 Recharge",
    brand: {
      "@type": "Brand",
      name: "Volvo"
    },
    description: "Volvo Xc40 Recharge electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/volvo/xc40-recharge",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
