import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mercedes Electric Vehicles — Models & Specs",
  description:
    "Explore Mercedes electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Mercedes Electric Vehicles | Healvanna Auto",
    description: "Explore Mercedes electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/mercedes",
  },
};

export default function MercedesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mercedes Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Mercedes EQS",
        url: "https://healvanna.com/cars/mercedes/eqs"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mercedes EQE",
        url: "https://healvanna.com/cars/mercedes/eqe"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mercedes EQB",
        url: "https://healvanna.com/cars/mercedes/eqb"
      }
    ]
  }} />
      {children}
    </>
  );
}
