import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Recall Checker — Free Safety Recall Lookup | Healvanna Auto",
  description:
    "Check if your car has any open safety recalls. Free NHTSA recall lookup for all makes and models. Find a certified shop to get recalls fixed.",
  openGraph: {
    title: "Vehicle Recall Checker — Free Safety Recall Lookup | Healvanna Auto",
    description:
      "Check if your car has any open safety recalls. Free NHTSA recall lookup for all makes and models. Find a certified shop to get recalls fixed.",
    type: "website",
  },
};

export default function RecallsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
