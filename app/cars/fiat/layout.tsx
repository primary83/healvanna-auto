import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Fiat Electric Vehicles — Models & Specs",
  description:
    "Explore Fiat electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Fiat Electric Vehicles | Healvanna Auto",
    description: "Explore Fiat electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/fiat",
  },
};

export default function FiatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fiat Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Fiat 500e",
        url: "https://healvanna.com/cars/fiat/500e"
      }
    ]
  }} />
      {children}
    </>
  );
}
