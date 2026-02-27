import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Mini Electric Vehicles — Models & Specs",
  description:
    "Explore Mini electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Mini Electric Vehicles | Healvanna Auto",
    description: "Explore Mini electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/mini",
  },
};

export default function MiniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mini Electric Vehicles",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Mini Cooper SE",
        url: "https://healvanna.com/cars/mini/cooper-se"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mini Countryman SE",
        url: "https://healvanna.com/cars/mini/countryman-se"
      }
    ]
  }} />
      {children}
    </>
  );
}
