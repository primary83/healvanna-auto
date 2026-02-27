import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Audi Electric Vehicles — Models & Specs",
  description:
    "Explore Audi electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Audi Electric Vehicles | Healvanna Auto",
    description: "Explore Audi electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/audi",
  },
};

export default function AudiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Audi Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Audi Q4 e-tron",
        url: "https://healvanna.com/cars/audi/q4-e-tron"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Audi Q8 e-tron",
        url: "https://healvanna.com/cars/audi/q8-e-tron"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Audi e-tron GT",
        url: "https://healvanna.com/cars/audi/e-tron-gt"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Audi RS e-tron GT",
        url: "https://healvanna.com/cars/audi/rs-e-tron-gt"
      }
    ]
  }} />
      {children}
    </>
  );
}
