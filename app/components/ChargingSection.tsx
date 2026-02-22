import Link from "next/link";
import ChargingCompatibility from "./ChargingCompatibility";
import { CHARGING_SPECS } from "../lib/chargingData";

interface ChargingSectionProps {
  brand: string;
  model: string;
  slug: string;
  range: number;
  theme?: "sapphire" | "slate";
}

const ctaThemes = {
  sapphire: {
    card: "bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl",
    headline: "text-[#e8edf5]",
    subtitle: "text-[#8a9bb5]",
    badge: "bg-[rgba(68,102,136,0.15)] text-[#4a90d9]",
    button: "bg-[#446688] hover:bg-[#557799] text-white",
  },
  slate: {
    card: "bg-slate-900/50 border border-slate-800 rounded-2xl",
    headline: "text-white",
    subtitle: "text-slate-400",
    badge: "bg-emerald-500/10 text-emerald-400",
    button: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
};

export default function ChargingSection({
  brand,
  model,
  slug,
  range,
  theme = "sapphire",
}: ChargingSectionProps) {
  const specs = CHARGING_SPECS[slug];
  if (!specs) return null;

  const cta = ctaThemes[theme];

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <ChargingCompatibility
          brand={brand}
          model={model}
          batteryCapacity={specs.batteryCapacity}
          maxChargeSpeed={specs.maxChargeSpeed}
          connectorType={specs.connectorType}
          range={range}
          theme={theme}
        />

        {/* Find Chargers CTA */}
        <div className={`${cta.card} p-6 md:p-8 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
          <div>
            <h3 className={`text-lg font-semibold ${cta.headline} mb-1`}>
              Find Compatible Chargers Near You
            </h3>
            <p className={`text-sm ${cta.subtitle}`}>
              {brand} {model}
              <span className="mx-2">•</span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${cta.badge}`}>
                {specs.connectorType}
              </span>
              <span className="mx-2">•</span>
              Up to {specs.maxChargeSpeed} kW
            </p>
          </div>
          <Link
            href={`/charge?vehicle=${encodeURIComponent(slug)}`}
            className={`${cta.button} px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2 whitespace-nowrap`}
          >
            Find Chargers
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
