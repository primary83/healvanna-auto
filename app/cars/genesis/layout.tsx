import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Genesis Electric Vehicles — Models & Specs",
  description:
    "Explore Genesis electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Genesis Electric Vehicles | Healvanna Auto",
    description: "Explore Genesis electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/genesis",
  },
};

export default function GenesisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Genesis Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Genesis GV60",
        url: "https://healvanna.com/cars/genesis/gv60"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Genesis Electrified G80",
        url: "https://healvanna.com/cars/genesis/electrified-g80"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Genesis Electrified GV70",
        url: "https://healvanna.com/cars/genesis/electrified-gv70"
      }
    ]
  }} />
      {children}
    </>
  );
}
