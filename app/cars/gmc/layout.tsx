import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "GMC Electric Vehicles — Models & Specs",
  description:
    "Explore GMC electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "GMC Electric Vehicles | Healvanna Auto",
    description: "Explore GMC electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/gmc",
  },
};

export default function GMCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GMC Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "GMC Hummer EV SUV",
        url: "https://healvanna.com/cars/gmc/hummer-ev-suv"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GMC Hummer EV Pickup",
        url: "https://healvanna.com/cars/gmc/hummer-ev-pickup"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "GMC Sierra EV",
        url: "https://healvanna.com/cars/gmc/sierra-ev"
      }
    ]
  }} />
      {children}
    </>
  );
}
