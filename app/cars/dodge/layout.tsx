import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Dodge Electric Vehicles — Models & Specs",
  description:
    "Explore Dodge electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Dodge Electric Vehicles | Healvanna Auto",
    description: "Explore Dodge electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/dodge",
  },
};

export default function DodgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dodge Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dodge Charger Daytona",
        url: "https://healvanna.com/cars/dodge/charger-daytona"
      }
    ]
  }} />
      {children}
    </>
  );
}
