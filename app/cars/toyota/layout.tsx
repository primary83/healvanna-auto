import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Toyota Electric Vehicles — Models & Specs",
  description:
    "Explore Toyota electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Toyota Electric Vehicles | Healvanna Auto",
    description: "Explore Toyota electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/toyota",
  },
};

export default function ToyotaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Toyota Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Toyota bZ4X",
        url: "https://healvanna.com/cars/toyota/bz4x"
      }
    ]
  }} />
      {children}
    </>
  );
}
