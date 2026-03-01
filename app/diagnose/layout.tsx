import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Diagnostic Code Lookup — OBD-II Trouble Codes | Healvanna Auto",
  description:
    "Diagnose your electric vehicle issues with our AI-powered diagnostic tool. OBD-II code lookup with plain-English explanations.",
  alternates: { canonical: "/diagnose" },
  openGraph: {
    title: "Car Diagnostic Code Lookup — OBD-II Trouble Codes | Healvanna Auto",
    description:
      "Look up any OBD-II diagnostic trouble code. Get plain-English explanations, severity levels, estimated repair costs, and find a certified mechanic near you.",
    type: "website",
    url: "https://healvanna.com/diagnose",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Diagnostic Code Lookup | Healvanna Auto",
    description: "Diagnose your vehicle with OBD-II code lookup and plain-English explanations.",
  },
};

export default function DiagnoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
