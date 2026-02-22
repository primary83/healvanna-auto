interface ChargingCompatibilityProps {
  brand: string;
  model: string;
  batteryCapacity: number;
  maxChargeSpeed: number;
  connectorType: string;
  range: number;
  theme?: "sapphire" | "slate";
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `~${Math.round(minutes)} min`;
  const hrs = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return mins > 0 ? `~${hrs}h ${mins}m` : `~${hrs}h`;
}

const CHARGE_LEVELS = [
  { label: "Level 1", sublabel: "120V Outlet", kw: 1.4, color: "#3d4a61" },
  { label: "Level 2", sublabel: "240V / 7.7 kW", kw: 7.7, color: "#4a90d9" },
  { label: "Level 2", sublabel: "240V / 11 kW", kw: 11, color: "#4a90d9" },
  { label: "DC Fast", sublabel: "50 kW", kw: 50, color: "#34d399" },
  { label: "DC Fast", sublabel: "150 kW", kw: 150, color: "#34d399" },
  { label: "DC Fast", sublabel: "250 kW", kw: 250, color: "#34d399" },
];

const themes = {
  sapphire: {
    card: "bg-[rgba(15,22,40,0.6)] rounded-xl border border-[rgba(74,144,217,0.12)] p-5",
    title: "text-[14px] font-medium text-[#e8edf5]",
    label: "text-[10px] tracking-[0.05em] uppercase text-[#3d4a61] mb-0.5",
    value: "text-[14px] text-[#e8edf5]",
    divider: "border-b border-[rgba(74,144,217,0.08)]",
    sectionTitle: "text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-3 font-medium",
    rowLabel: "text-[12px] text-[#e8edf5]",
    rowSub: "text-[10px] text-[#3d4a61]",
    barBg: "bg-[rgba(74,144,217,0.08)]",
    icon: "text-[#4a90d9]",
  },
  slate: {
    card: "bg-slate-900/50 rounded-2xl border border-slate-800 p-6",
    title: "text-lg font-semibold text-white",
    label: "text-xs text-slate-500 mb-0.5",
    value: "text-sm text-white",
    divider: "border-b border-slate-800",
    sectionTitle: "text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium",
    rowLabel: "text-sm text-white",
    rowSub: "text-xs text-slate-500",
    barBg: "bg-slate-800",
    icon: "text-emerald-400",
  },
};

export default function ChargingCompatibility({
  brand,
  model,
  batteryCapacity,
  maxChargeSpeed,
  connectorType,
  range,
  theme = "sapphire",
}: ChargingCompatibilityProps) {
  const t = themes[theme];
  const chargeKwh = batteryCapacity * 0.7;

  return (
    <div className={t.card}>
      <div className="flex items-center gap-2 mb-4">
        <svg
          className={`w-5 h-5 ${t.icon}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
        <h3 className={t.title}>
          Charging — {brand} {model}
        </h3>
      </div>

      <div className={`flex flex-wrap gap-6 mb-4 pb-4 ${t.divider}`}>
        <div>
          <div className={t.label}>Battery</div>
          <div className={t.value}>{batteryCapacity} kWh</div>
        </div>
        <div>
          <div className={t.label}>Max Charge</div>
          <div className={t.value}>{maxChargeSpeed} kW</div>
        </div>
        <div>
          <div className={t.label}>Connector</div>
          <div className={t.value}>{connectorType}</div>
        </div>
        <div>
          <div className={t.label}>Range</div>
          <div className={t.value}>{range} mi</div>
        </div>
      </div>

      <div className={t.sectionTitle}>
        Estimated Charge Time (10% to 80%)
      </div>
      <div className="space-y-2">
        {CHARGE_LEVELS.map((level) => {
          const effectiveKw = Math.min(level.kw, maxChargeSpeed);
          const minutes = (chargeKwh / effectiveKw) * 60;
          const barWidth = Math.max(
            5,
            Math.min(100, (1 - minutes / 3000) * 100)
          );

          return (
            <div key={`${level.label}-${level.kw}`} className="flex items-center gap-3">
              <div className="w-[100px] flex-shrink-0">
                <div className={t.rowLabel}>{level.label}</div>
                <div className={t.rowSub}>{level.sublabel}</div>
              </div>
              <div className={`flex-1 h-2 ${t.barBg} rounded-full overflow-hidden`}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${barWidth}%`,
                    backgroundColor: level.color,
                  }}
                />
              </div>
              <div
                className="text-[12px] font-medium w-[70px] text-right"
                style={{ color: level.color }}
              >
                {formatTime(minutes)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
