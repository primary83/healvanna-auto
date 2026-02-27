import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Porsche Electric Vehicles — Models & Specs",
  description:
    "Explore Porsche electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Porsche Electric Vehicles | Healvanna Auto",
    description: "Explore Porsche electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/porsche",
  },
};

export default function PorscheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Porsche Electric Vehicles",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Porsche Taycan",
        url: "https://healvanna.com/cars/porsche/taycan"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Porsche Macan EV",
        url: "https://healvanna.com/cars/porsche/macan-ev"
      }
    ]
  }} />
      {children}
    </>
  );
}
