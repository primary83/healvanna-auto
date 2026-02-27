import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "NIO Electric Vehicles — Models & Specs",
  description:
    "Explore NIO electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "NIO Electric Vehicles | Healvanna Auto",
    description: "Explore NIO electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/nio",
  },
};

export default function NIOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NIO Electric Vehicles",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "NIO ET7",
        url: "https://healvanna.com/cars/nio/et7"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "NIO ET5",
        url: "https://healvanna.com/cars/nio/et5"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "NIO ES8",
        url: "https://healvanna.com/cars/nio/es8"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "NIO ES6",
        url: "https://healvanna.com/cars/nio/es6"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "NIO EC7",
        url: "https://healvanna.com/cars/nio/ec7"
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "NIO EC6",
        url: "https://healvanna.com/cars/nio/ec6"
      }
    ]
  }} />
      {children}
    </>
  );
}
