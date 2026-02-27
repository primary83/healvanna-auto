import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "GMC Hummer Ev Suv — Specs, Range & Pricing",
  description:
    "GMC Hummer Ev Suv — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "GMC Hummer Ev Suv | Healvanna Auto",
    description: "GMC Hummer Ev Suv — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/gmc/hummer-ev-suv",
  },
};

export default function GMCHummerEvSuvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GMC Hummer Ev Suv",
    brand: {
      "@type": "Brand",
      name: "GMC"
    },
    description: "GMC Hummer Ev Suv electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/gmc/hummer-ev-suv",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
