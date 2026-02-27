import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Service Deals & Coupons Near You | Healvanna Auto",
  description:
    "Find the best EV service deals near you. Detailing, wrapping, collision repair, and more from verified local shops.",
  openGraph: {
    title: "Car Service Deals & Coupons Near You | Healvanna Auto",
    description:
      "Find the best EV service deals near you. Detailing, wrapping, collision repair, and more from verified local shops.",
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
