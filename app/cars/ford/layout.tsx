import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Ford Electric Vehicles — Models & Specs",
  description:
    "Explore Ford electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Ford Electric Vehicles | Healvanna Auto",
    description: "Explore Ford electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/ford",
  },
};

export default function FordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ford Electric Vehicles",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ford Mustang Mach-E",
        url: "https://healvanna.com/cars/ford/mustang-mach-e"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ford F-150 Lightning",
        url: "https://healvanna.com/cars/ford/f-150-lightning"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ford E-Transit",
        url: "https://healvanna.com/cars/ford/e-transit"
      }
    ]
  }} />
      {children}
    </>
  );
}
