import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Lexus Electric Vehicles — Models & Specs",
  description:
    "Explore Lexus electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Lexus Electric Vehicles | Healvanna Auto",
    description: "Explore Lexus electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/lexus",
  },
};

export default function LexusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Lexus Electric Vehicles",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Lexus RZ 450e",
        url: "https://healvanna.com/cars/lexus/rz-450e"
      }
    ]
  }} />
      {children}
    </>
  );
}
