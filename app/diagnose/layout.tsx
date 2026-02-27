import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Diagnostic Code Lookup — OBD-II Trouble Codes | Healvanna Auto",
  description:
    "Diagnose your electric vehicle issues with our AI-powered diagnostic tool. OBD-II code lookup with plain-English explanations.",
  openGraph: {
    title: "Car Diagnostic Code Lookup — OBD-II Trouble Codes | Healvanna Auto",
    description:
      "Look up any OBD-II diagnostic trouble code. Get plain-English explanations, severity levels, estimated repair costs, and find a certified mechanic near you.",
    type: "website",
  },
};

export default function DiagnoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
