import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Nissan Electric Vehicles — Models & Specs",
  description:
    "Explore Nissan electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Nissan Electric Vehicles | Healvanna Auto",
    description: "Explore Nissan electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/nissan",
  },
};

export default function NissanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nissan Electric Vehicles",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Nissan Ariya",
        url: "https://healvanna.com/cars/nissan/ariya"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nissan LEAF",
        url: "https://healvanna.com/cars/nissan/leaf"
      }
    ]
  }} />
      {children}
    </>
  );
}
