import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "BMW Electric Vehicles — Models & Specs",
  description:
    "Explore BMW electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "BMW Electric Vehicles | Healvanna Auto",
    description: "Explore BMW electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/bmw",
  },
};

export default function BMWLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BMW Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BMW i4",
        url: "https://healvanna.com/cars/bmw/i4"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "BMW i7",
        url: "https://healvanna.com/cars/bmw/i7"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "BMW iX",
        url: "https://healvanna.com/cars/bmw/ix"
      }
    ]
  }} />
      {children}
    </>
  );
}
