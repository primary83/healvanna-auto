import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote - Healvanna Auto",
  description:
    "Request a free quote from verified automotive service providers. Detailing, ceramic coating, wrapping, body shops, collision repair, auto glass, and painting.",
  alternates: { canonical: "/get-quote" },
  openGraph: {
    title: "Get a Free Quote - Healvanna Auto",
    description:
      "Request a free quote from verified automotive service providers near you.",
    url: "https://healvanna.com/get-quote",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote - Healvanna Auto",
    description:
      "Request a free quote from verified automotive service providers near you.",
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
