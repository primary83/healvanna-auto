import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Rivian Electric Vehicles — Models & Specs",
  description:
    "Explore Rivian electric vehicles — models, specs, charging info, and maintenance schedules.",
  openGraph: {
    title: "Rivian Electric Vehicles | Healvanna Auto",
    description: "Explore Rivian electric vehicles — models, specs, charging info, and maintenance schedules.",
    url: "https://healvanna.com/cars/rivian",
  },
};

export default function RivianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rivian Electric Vehicles",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Rivian R1T",
        url: "https://healvanna.com/cars/rivian/r1t"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rivian R1S",
        url: "https://healvanna.com/cars/rivian/r1s"
      }
    ]
  }} />
      {children}
    </>
  );
}
