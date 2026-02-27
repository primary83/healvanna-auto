import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Hyundai Electric Vehicles — Models & Specs",
  description:
    "Explore Hyundai electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Hyundai Electric Vehicles | Healvanna Auto",
    description: "Explore Hyundai electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/hyundai",
  },
};

export default function HyundaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hyundai Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hyundai Ioniq 5",
        url: "https://healvanna.com/cars/hyundai/ioniq-5"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hyundai Ioniq 6",
        url: "https://healvanna.com/cars/hyundai/ioniq-6"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hyundai Kona Electric",
        url: "https://healvanna.com/cars/hyundai/kona-electric"
      }
    ]
  }} />
      {children}
    </>
  );
}
