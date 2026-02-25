import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Service Deals & Coupons Near You | Healvanna Auto",
  description:
    "Find the best auto repair deals, oil change coupons, tire specials, and EV service discounts near you. Save on car maintenance with verified local shop deals.",
  openGraph: {
    title: "Car Service Deals & Coupons Near You | Healvanna Auto",
    description:
      "Find the best auto repair deals, oil change coupons, tire specials, and EV service discounts near you. Save on car maintenance with verified local shop deals.",
    type: "website",
  },
};

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
