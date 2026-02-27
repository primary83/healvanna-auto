import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto Mega — Specs, Range & Pricing",
  description:
    "Li Auto Mega — range, pricing, charging speed, maintenance schedule, and ownership costs.",
  openGraph: {
    title: "Li Auto Mega | Healvanna Auto",
    description: "Li Auto Mega — range, pricing, charging speed, maintenance schedule, and ownership costs.",
    url: "https://healvanna.com/cars/li-auto/mega",
  },
};

export default function LiAutoMegaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Li Auto Mega",
    brand: {
      "@type": "Brand",
      name: "Li Auto"
    },
    description: "Li Auto Mega electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/li-auto/mega",
    category: "Electric Vehicle"
  }} />
      {children}
    </>
  );
}
