import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Polestar Electric Vehicles — Models & Specs",
  description:
    "Explore Polestar electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Polestar Electric Vehicles | Healvanna Auto",
    description: "Explore Polestar electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/polestar",
  },
};

export default function PolestarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Polestar Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Polestar Polestar 2",
        url: "https://healvanna.com/cars/polestar/polestar-2"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Polestar Polestar 3",
        url: "https://healvanna.com/cars/polestar/polestar-3"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Polestar Polestar 4",
        url: "https://healvanna.com/cars/polestar/polestar-4"
      }
    ]
  }} />
      {children}
    </>
  );
}
