import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV vs Gas Cost Calculator — Compare Fuel Savings | Healvanna Auto",
  description:
    "Calculate how much you can save switching from gas to electric. Compare annual fuel costs, 5-year projections, maintenance savings, and CO2 emissions reduction.",
  openGraph: {
    title: "EV vs Gas Cost Calculator — Compare Fuel Savings | Healvanna Auto",
    description:
      "Calculate how much you can save switching from gas to electric. Compare annual fuel costs, 5-year projections, maintenance savings, and CO2 emissions reduction.",
    type: "website",
  },
};

export default function CalculateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
