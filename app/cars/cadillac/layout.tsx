import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Cadillac Electric Vehicles — Models & Specs",
  description:
    "Explore Cadillac electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Cadillac Electric Vehicles | Healvanna Auto",
    description: "Explore Cadillac electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/cadillac",
  },
};

export default function CadillacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cadillac Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Cadillac LYRIQ",
        url: "https://healvanna.com/cars/cadillac/lyriq"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cadillac CELESTIQ",
        url: "https://healvanna.com/cars/cadillac/celestiq"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cadillac Escalade IQ",
        url: "https://healvanna.com/cars/cadillac/escalade-iq"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Cadillac OPTIQ",
        url: "https://healvanna.com/cars/cadillac/optiq"
      }
    ]
  }} />
      {children}
    </>
  );
}
