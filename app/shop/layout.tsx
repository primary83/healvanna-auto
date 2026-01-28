import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - EV Accessories & Premium Car Products",
  description:
    "Browse curated EV accessories, premium car care products, and automotive essentials. Quality products for discerning vehicle owners.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop EV Accessories & Car Products | Healvanna Auto",
    description:
      "Curated EV accessories and premium car care products for discerning owners.",
    url: "https://healvanna.com/shop",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
