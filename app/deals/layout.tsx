import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Service Deals Near You — Oil Change, Brakes, Detailing Coupons",
  description:
    "Compare car service deals from local shops in Florida. Oil change, brake, tire, detailing, and EV service coupons — all in one place.",
  alternates: {
    canonical: "/deals",
  },
  openGraph: {
    title: "Auto Service Deals Near You | Healvanna Auto",
    description:
      "Compare car service deals from local shops in Florida. Oil change, brake, tire, detailing, and EV service coupons.",
    type: "website",
    url: "https://healvanna.com/deals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Service Deals Near You | Healvanna Auto",
    description:
      "Compare car service deals from local shops in Florida. Oil change, brake, tire, detailing, and EV service coupons.",
  },
};

export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
