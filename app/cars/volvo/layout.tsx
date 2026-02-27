import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Volvo Electric Vehicles — Models & Specs",
  description:
    "Explore Volvo electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Volvo Electric Vehicles | Healvanna Auto",
    description: "Explore Volvo electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/volvo",
  },
};

export default function VolvoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Volvo Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Volvo EX30",
        url: "https://healvanna.com/cars/volvo/ex30"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Volvo EX90",
        url: "https://healvanna.com/cars/volvo/ex90"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Volvo EC40",
        url: "https://healvanna.com/cars/volvo/ec40"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Volvo XC40 Recharge",
        url: "https://healvanna.com/cars/volvo/xc40-recharge"
      }
    ]
  }} />
      {children}
    </>
  );
}
