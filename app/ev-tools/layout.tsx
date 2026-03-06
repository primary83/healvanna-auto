import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Match & Savings Hub — Find Your Perfect EV & See How Much You'll Save | Healvanna Auto",
  description:
    "Find your perfect electric car, calculate your exact savings vs gas, and get your personal EV Readiness Score — all in one free tool.",
  alternates: { canonical: "/ev-tools" },
  openGraph: {
    title: "EV Match & Savings Hub — Find Your Perfect Electric Car | Healvanna Auto",
    description:
      "Find your perfect electric car, calculate your exact savings vs gas, and get your personal EV Readiness Score — all in one free tool.",
    url: "https://healvanna.com/ev-tools",
    type: "website",
    images: ["https://healvanna.com/blog/ev-vs-hybrid-guide.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Match & Savings Hub — Find Your Perfect Electric Car | Healvanna Auto",
    description:
      "Find your perfect electric car, calculate your exact savings vs gas, and get your personal EV Readiness Score — all in one free tool.",
  },
};

export default function EVToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
