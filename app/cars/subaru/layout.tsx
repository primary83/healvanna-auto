import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Subaru Electric Vehicles — Models & Specs",
  description:
    "Explore Subaru electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Subaru Electric Vehicles | Healvanna Auto",
    description: "Explore Subaru electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/subaru",
  },
};

export default function SubaruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Subaru Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Subaru Solterra",
        url: "https://healvanna.com/cars/subaru/solterra"
      }
    ]
  }} />
      {children}
    </>
  );
}
