import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "BYD Electric Vehicles — Models & Specs",
  description:
    "Explore BYD electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "BYD Electric Vehicles | Healvanna Auto",
    description: "Explore BYD electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/byd",
  },
};

export default function BYDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BYD Electric Vehicles",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BYD Seal",
        url: "https://healvanna.com/cars/byd/seal"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "BYD Atto 3",
        url: "https://healvanna.com/cars/byd/atto-3"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "BYD Dolphin",
        url: "https://healvanna.com/cars/byd/dolphin"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "BYD Han",
        url: "https://healvanna.com/cars/byd/han"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "BYD Tang",
        url: "https://healvanna.com/cars/byd/tang"
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "BYD Seal U",
        url: "https://healvanna.com/cars/byd/seal-u"
      }
    ]
  }} />
      {children}
    </>
  );
}
