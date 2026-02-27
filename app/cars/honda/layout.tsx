import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Honda Electric Vehicles — Models & Specs",
  description:
    "Explore Honda electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Honda Electric Vehicles | Healvanna Auto",
    description: "Explore Honda electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/honda",
  },
};

export default function HondaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Honda Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Honda Prologue",
        url: "https://healvanna.com/cars/honda/prologue"
      }
    ]
  }} />
      {children}
    </>
  );
}
