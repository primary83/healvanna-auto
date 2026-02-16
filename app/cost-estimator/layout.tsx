import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should This Cost? | AI-Powered Auto Service Estimator | Healvanna Auto",
  description:
    "Get instant cost estimates for auto services. Snap a photo of your car or damage and our AI estimates repair costs — or use the manual estimator. Free, fast, and transparent.",
  keywords: [
    "auto repair cost estimator",
    "car service cost calculator",
    "collision repair estimate",
    "car detailing cost",
    "body shop estimate",
    "windshield replacement cost",
    "car wrap cost",
    "paint job cost",
    "dent repair cost",
    "AI car damage assessment",
  ],
  openGraph: {
    title: "What Should This Cost? | AI Auto Service Estimator",
    description:
      "Snap a photo and get instant cost estimates for car repairs, detailing, wrapping, painting, and more.",
    type: "website",
    url: "https://healvanna.com/cost-estimator",
  },
};

export default function CostEstimatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
