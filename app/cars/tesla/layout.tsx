import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Tesla Electric Vehicles — Models & Specs",
  description:
    "Explore Tesla electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Tesla Electric Vehicles | Healvanna Auto",
    description: "Explore Tesla electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/tesla",
  },
};

export default function TeslaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tesla Electric Vehicles",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Tesla Model 3",
        url: "https://healvanna.com/cars/tesla/model-3"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tesla Model S",
        url: "https://healvanna.com/cars/tesla/model-s"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tesla Model X",
        url: "https://healvanna.com/cars/tesla/model-x"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tesla Model Y",
        url: "https://healvanna.com/cars/tesla/model-y"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Tesla Cybertruck",
        url: "https://healvanna.com/cars/tesla/cybertruck"
      }
    ]
  }} />
      {children}
    </>
  );
}
