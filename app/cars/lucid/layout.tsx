import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lucid Electric Vehicles — Models & Specs",
  description:
    "Explore Lucid electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Lucid Electric Vehicles | Healvanna Auto",
    description: "Explore Lucid electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/lucid",
  },
};

export default function LucidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Lucid Electric Vehicles",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Lucid Air Pure",
        url: "https://healvanna.com/cars/lucid/air-pure"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lucid Air Touring",
        url: "https://healvanna.com/cars/lucid/air-touring"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Lucid Air GT",
        url: "https://healvanna.com/cars/lucid/air-gt"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Lucid Sapphire",
        url: "https://healvanna.com/cars/lucid/sapphire"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Lucid Gravity",
        url: "https://healvanna.com/cars/lucid/gravity"
      }
    ]
  }} />
      {children}
    </>
  );
}
