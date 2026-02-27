import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Xiaomi Electric Vehicles — Models & Specs",
  description:
    "Explore Xiaomi electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Xiaomi Electric Vehicles | Healvanna Auto",
    description: "Explore Xiaomi electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/xiaomi",
  },
};

export default function XiaomiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Xiaomi Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Xiaomi SU7",
        url: "https://healvanna.com/cars/xiaomi/su7"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Xiaomi SU7 Pro",
        url: "https://healvanna.com/cars/xiaomi/su7-pro"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Xiaomi SU7 Max",
        url: "https://healvanna.com/cars/xiaomi/su7-max"
      }
    ]
  }} />
      {children}
    </>
  );
}
