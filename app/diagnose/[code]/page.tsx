import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  OBD_CODES,
  getCodeByCode,
  SEVERITY_COLORS,
  DIFFICULTY_COLORS,
} from "../../lib/obdCodes";

// Pre-build pages for all codes
export function generateStaticParams() {
  return OBD_CODES.map((c) => ({ code: c.code.toLowerCase() }));
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const obdCode = getCodeByCode(code);
  if (!obdCode) {
    return { title: "Code Not Found | Healvanna Auto" };
  }

  const title = `${obdCode.code} Code: ${obdCode.title} | Healvanna Auto`;
  const description = obdCode.description.substring(0, 160);

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default async function CodeDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const obdCode = getCodeByCode(code);
  if (!obdCode) notFound();

  const severity = SEVERITY_COLORS[obdCode.severity];
  const difficulty = DIFFICULTY_COLORS[obdCode.difficulty];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="DIAGNOSE" />

      {/* Breadcrumb */}
      <div className="pt-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link
              href="/diagnose"
              className="hover:text-[#4a90d9] transition-colors"
            >
              Diagnose
            </Link>
            <span>/</span>
            <span className="text-[#e8edf5]">
              {obdCode.code}
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="pt-8 pb-6 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[28px] md:text-[36px] font-mono font-bold text-[#4a90d9]">
              {obdCode.code}
            </span>
            <span
              className={`px-3 py-1 text-[11px] tracking-[0.03em] font-semibold rounded-full ${severity.bg} ${severity.text} border ${severity.border}`}
            >
              {obdCode.severity} Severity
            </span>
            <span className="px-3 py-1 text-[11px] tracking-[0.03em] rounded-full bg-[rgba(74,144,217,0.1)] text-[#4a90d9] border border-[rgba(74,144,217,0.2)]">
              {obdCode.system}
            </span>
          </div>
          <h1 className="text-[22px] md:text-[28px] font-light text-[#e8edf5] mb-2">
            {obdCode.title}
          </h1>
        </div>
      </section>

      {/* Content Cards */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-[800px] mx-auto space-y-4">
          {/* What This Means */}
          <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
            <h2 className="text-[11px] tracking-[0.15em] uppercase text-[#4a90d9] font-medium mb-3">
              What This Means
            </h2>
            <p className="text-[14px] text-[#8a9bb5] leading-relaxed">
              {obdCode.description}
            </p>
          </div>

          {/* Common Symptoms */}
          <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
            <h2 className="text-[11px] tracking-[0.15em] uppercase text-[#4a90d9] font-medium mb-3">
              Common Symptoms
            </h2>
            <ul className="space-y-2">
              {obdCode.symptoms.map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[14px] text-[#8a9bb5]"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 text-[#f59e0b] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
                    />
                  </svg>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* Common Causes */}
          <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
            <h2 className="text-[11px] tracking-[0.15em] uppercase text-[#4a90d9] font-medium mb-3">
              Common Causes
            </h2>
            <ul className="space-y-2">
              {obdCode.commonCauses.map((cause, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[14px] text-[#8a9bb5]"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 text-[#4a90d9] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.384-3.19A1.5 1.5 0 015 10.69V6.31a1.5 1.5 0 011.036-1.29l5.384-3.19a1.5 1.5 0 011.16 0l5.384 3.19A1.5 1.5 0 0119 6.31v4.38a1.5 1.5 0 01-1.036 1.29l-5.384 3.19a1.5 1.5 0 01-1.16 0z"
                    />
                  </svg>
                  {cause}
                </li>
              ))}
            </ul>
          </div>

          {/* Estimated Repair Cost */}
          <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
            <h2 className="text-[11px] tracking-[0.15em] uppercase text-[#4a90d9] font-medium mb-3">
              Estimated Repair Cost
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <div className="text-[28px] font-light text-[#e8edf5]">
                  ${obdCode.estimatedCostMin} &ndash; $
                  {obdCode.estimatedCostMax}
                </div>
                <div className="text-[12px] text-[#6b7a94] mt-0.5">
                  Parts and labor (varies by vehicle and location)
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#6b7a94] uppercase tracking-[0.05em]">
                  Difficulty:
                </span>
                <span
                  className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full ${difficulty.bg} ${difficulty.text}`}
                >
                  {obdCode.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Find a Shop CTA */}
          <div className="p-8 rounded-2xl bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-[18px] font-semibold text-[#e8edf5] mb-1">
                  Need This Fixed?
                </h3>
                <p className="text-[14px] text-[#6b7a94]">
                  Find certified mechanics near you who can diagnose and repair{" "}
                  {obdCode.code}.
                </p>
              </div>
              <Link
                href="/care"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Find a Shop Near You
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Search */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-[800px] mx-auto">
          <Link
            href="/diagnose"
            className="inline-flex items-center gap-2 text-[13px] text-[#4a90d9] hover:gap-3 transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Search Another Code
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] text-[#3d4a61] leading-relaxed">
            For informational purposes only. Diagnostic trouble codes are
            starting points for diagnosis, not definitive answers. Always consult
            a certified mechanic for proper diagnosis and repair. Estimated costs
            vary by vehicle, location, and shop rates.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
