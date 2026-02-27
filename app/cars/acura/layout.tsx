import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Acura Electric Vehicles — Models & Specs",
  description:
    "Explore Acura electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Acura Electric Vehicles | Healvanna Auto",
    description: "Explore Acura electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/acura",
  },
};

export default function AcuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Acura Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acura ZDX",
        url: "https://healvanna.com/cars/acura/zdx"
      }
    ]
  }} />
      {children}
    </>
  );
}
