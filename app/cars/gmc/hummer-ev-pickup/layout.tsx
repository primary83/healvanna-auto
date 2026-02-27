import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "GMC Hummer Ev Pickup — Specs, Range & Pricing",
  description:
    "GMC Hummer Ev Pickup — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "GMC Hummer Ev Pickup | Healvanna Auto",
    description: "GMC Hummer Ev Pickup — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/gmc/hummer-ev-pickup",
  },
};

export default function GMCHummerEvPickupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GMC Hummer Ev Pickup",
    brand: {
      "@type": "Brand",
      name: "GMC"
    },
    description: "GMC Hummer Ev Pickup electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/gmc/hummer-ev-pickup",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
