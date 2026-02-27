import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Zeekr Electric Vehicles — Models & Specs",
  description:
    "Explore Zeekr electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Zeekr Electric Vehicles | Healvanna Auto",
    description: "Explore Zeekr electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/zeekr",
  },
};

export default function ZeekrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zeekr Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Zeekr 001",
        url: "https://healvanna.com/cars/zeekr/001"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Zeekr 009",
        url: "https://healvanna.com/cars/zeekr/009"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Zeekr X",
        url: "https://healvanna.com/cars/zeekr/x"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Zeekr 007",
        url: "https://healvanna.com/cars/zeekr/007"
      }
    ]
  }} />
      {children}
    </>
  );
}
