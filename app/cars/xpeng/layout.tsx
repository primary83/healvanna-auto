import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "XPeng Electric Vehicles — Models & Specs",
  description:
    "Explore XPeng electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "XPeng Electric Vehicles | Healvanna Auto",
    description: "Explore XPeng electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/xpeng",
  },
};

export default function XPengLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "XPeng Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "XPeng G9",
        url: "https://healvanna.com/cars/xpeng/g9"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "XPeng P7",
        url: "https://healvanna.com/cars/xpeng/p7"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "XPeng G6",
        url: "https://healvanna.com/cars/xpeng/g6"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "XPeng X9",
        url: "https://healvanna.com/cars/xpeng/x9"
      }
    ]
  }} />
      {children}
    </>
  );
}
