import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Chevrolet Electric Vehicles — Models & Specs",
  description:
    "Explore Chevrolet electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Chevrolet Electric Vehicles | Healvanna Auto",
    description: "Explore Chevrolet electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/chevrolet",
  },
};

export default function ChevroletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chevrolet Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Chevrolet Equinox EV",
        url: "https://healvanna.com/cars/chevrolet/equinox-ev"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Chevrolet Blazer EV",
        url: "https://healvanna.com/cars/chevrolet/blazer-ev"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Chevrolet Silverado EV",
        url: "https://healvanna.com/cars/chevrolet/silverado-ev"
      }
    ]
  }} />
      {children}
    </>
  );
}
