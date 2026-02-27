import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volkswagen Electric Vehicles — Models & Specs",
  description:
    "Explore Volkswagen electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Volkswagen Electric Vehicles | Healvanna Auto",
    description: "Explore Volkswagen electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/volkswagen",
  },
};

export default function VolkswagenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Volkswagen Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Volkswagen ID.4",
        url: "https://healvanna.com/cars/volkswagen/id-4"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Volkswagen ID.Buzz",
        url: "https://healvanna.com/cars/volkswagen/id-buzz"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Volkswagen ID.7",
        url: "https://healvanna.com/cars/volkswagen/id-7"
      }
    ]
  }} />
      {children}
    </>
  );
}
