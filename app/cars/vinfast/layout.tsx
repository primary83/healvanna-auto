import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "VinFast Electric Vehicles — Models & Specs",
  description:
    "Explore VinFast electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "VinFast Electric Vehicles | Healvanna Auto",
    description: "Explore VinFast electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/vinfast",
  },
};

export default function VinFastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VinFast Electric Vehicles",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "VinFast VF 8",
        url: "https://healvanna.com/cars/vinfast/vf-8"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "VinFast VF 9",
        url: "https://healvanna.com/cars/vinfast/vf-9"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "VinFast VF 6",
        url: "https://healvanna.com/cars/vinfast/vf-6"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "VinFast VF 7",
        url: "https://healvanna.com/cars/vinfast/vf-7"
      }
    ]
  }} />
      {children}
    </>
  );
}
