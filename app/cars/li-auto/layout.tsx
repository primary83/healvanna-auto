import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Li Auto Electric Vehicles — Models & Specs",
  description:
    "Explore Li Auto electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Li Auto Electric Vehicles | Healvanna Auto",
    description: "Explore Li Auto electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/li-auto",
  },
};

export default function LiAutoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Li Auto Electric Vehicles",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Li Auto MEGA",
        url: "https://healvanna.com/cars/li-auto/mega"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Li Auto L9",
        url: "https://healvanna.com/cars/li-auto/l9"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Li Auto L8",
        url: "https://healvanna.com/cars/li-auto/l8"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Li Auto L7",
        url: "https://healvanna.com/cars/li-auto/l7"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Li Auto L6",
        url: "https://healvanna.com/cars/li-auto/l6"
      }
    ]
  }} />
      {children}
    </>
  );
}
