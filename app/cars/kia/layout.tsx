import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Kia Electric Vehicles — Models & Specs",
  description:
    "Explore Kia electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Kia Electric Vehicles | Healvanna Auto",
    description: "Explore Kia electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/kia",
  },
};

export default function KiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kia Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kia EV6",
        url: "https://healvanna.com/cars/kia/ev6"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kia EV9",
        url: "https://healvanna.com/cars/kia/ev9"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Kia EV3",
        url: "https://healvanna.com/cars/kia/ev3"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Kia Niro EV",
        url: "https://healvanna.com/cars/kia/niro-ev"
      }
    ]
  }} />
      {children}
    </>
  );
}
