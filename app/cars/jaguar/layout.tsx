import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Jaguar Electric Vehicles — Models & Specs",
  description:
    "Explore Jaguar electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Jaguar Electric Vehicles | Healvanna Auto",
    description: "Explore Jaguar electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/jaguar",
  },
};

export default function JaguarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jaguar Electric Vehicles",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Jaguar I-PACE",
        url: "https://healvanna.com/cars/jaguar/i-pace"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Jaguar Type 00",
        url: "https://healvanna.com/cars/jaguar/type-00"
      }
    ]
  }} />
      {children}
    </>
  );
}
