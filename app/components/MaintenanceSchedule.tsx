interface MaintenanceScheduleProps {
  brand: string;
  model: string;
  theme?: "sapphire" | "slate";
}

const MAINTENANCE_ITEMS = [
  {
    service: "Tire Rotation",
    interval: "Every 7,500 miles",
    notes: "Heavier EVs wear tires faster — rotate regularly for even wear",
  },
  {
    service: "Cabin Air Filter",
    interval: "Every 2 years",
    notes: "Replace HEPA or standard cabin filter for clean airflow",
  },
  {
    service: "Brake Fluid",
    interval: "Every 2 years",
    notes: "Test and replace brake fluid to maintain hydraulic performance",
  },
  {
    service: "Brake Inspection",
    interval: "Every 12,500 miles",
    notes: "Reduced wear due to regenerative braking — inspect pads and rotors",
  },
  {
    service: "Coolant Flush",
    interval: "Every 50,000 miles",
    notes: "Battery thermal management system coolant replacement",
  },
  {
    service: "Battery Health Check",
    interval: "Every 12 months",
    notes: "State of health monitoring, degradation check, and cell balance",
  },
  {
    service: "Wiper Blades",
    interval: "Every 12 months",
    notes: "Inspect and replace wiper blades as needed for visibility",
  },
  {
    service: "Multi-Point Inspection",
    interval: "Every 12 months",
    notes: "Suspension, steering, underbody, and wheel bearing check",
  },
];

const themes = {
  sapphire: {
    section: "py-12 px-6 md:px-12",
    container: "max-w-[1300px] mx-auto",
    title: "text-2xl font-light text-[#e8edf5] mb-1",
    subtitle: "text-[#6b7a94] text-sm mb-6",
    card: "bg-[rgba(15,22,40,0.6)] rounded-xl border border-[rgba(74,144,217,0.12)] overflow-hidden",
    headerBg: "bg-[rgba(74,144,217,0.06)]",
    headerText: "text-[#6b7a94] text-[11px] tracking-[0.08em] uppercase font-medium",
    rowBorder: "border-b border-[rgba(74,144,217,0.08)]",
    serviceName: "text-[14px] text-[#e8edf5] font-medium",
    interval: "text-[13px] text-[#4a90d9] font-medium",
    notes: "text-[12px] text-[#6b7a94] leading-relaxed",
    icon: "text-[#4a90d9]",
    disclaimer: "text-[11px] text-[#3d4a61] mt-4",
  },
  slate: {
    section: "py-12 px-6 md:px-12",
    container: "max-w-7xl mx-auto",
    title: "text-2xl font-bold text-white mb-1",
    subtitle: "text-slate-400 text-sm mb-6",
    card: "bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden",
    headerBg: "bg-slate-800/50",
    headerText: "text-slate-400 text-[11px] tracking-[0.08em] uppercase font-medium",
    rowBorder: "border-b border-slate-800/60",
    serviceName: "text-sm text-white font-medium",
    interval: "text-sm text-emerald-400 font-medium",
    notes: "text-xs text-slate-500 leading-relaxed",
    icon: "text-emerald-400",
    disclaimer: "text-xs text-slate-600 mt-4",
  },
};

export default function MaintenanceSchedule({
  brand,
  model,
  theme = "sapphire",
}: MaintenanceScheduleProps) {
  const t = themes[theme];

  return (
    <section className={t.section}>
      <div className={t.container}>
        <h2 className={t.title}>Maintenance Schedule</h2>
        <p className={t.subtitle}>
          Recommended service intervals for the {brand} {model}
        </p>

        <div className={t.card}>
          {/* Header row */}
          <div className={`${t.headerBg} px-5 py-3 grid grid-cols-[1fr_160px_1fr] md:grid-cols-[1fr_180px_1.5fr] gap-4 items-center`}>
            <span className={t.headerText}>Service</span>
            <span className={t.headerText}>Interval</span>
            <span className={`${t.headerText} hidden md:block`}>Details</span>
          </div>

          {/* Rows */}
          {MAINTENANCE_ITEMS.map((item, i) => (
            <div
              key={item.service}
              className={`px-5 py-4 grid grid-cols-[1fr_160px_1fr] md:grid-cols-[1fr_180px_1.5fr] gap-4 items-start ${
                i < MAINTENANCE_ITEMS.length - 1 ? t.rowBorder : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <svg
                  className={`w-4 h-4 ${t.icon} flex-shrink-0`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17l-5.3-3.06a1.5 1.5 0 01-.56-2.04l3.06-5.3a1.5 1.5 0 012.04-.56l5.3 3.06a1.5 1.5 0 01.56 2.04l-3.06 5.3a1.5 1.5 0 01-2.04.56zM19.5 12h.01M4.5 12h.01M12 4.5v.01M12 19.5v.01"
                  />
                </svg>
                <span className={t.serviceName}>{item.service}</span>
              </div>
              <span className={t.interval}>{item.interval}</span>
              <span className={`${t.notes} hidden md:block`}>{item.notes}</span>
            </div>
          ))}
        </div>

        <p className={t.disclaimer}>
          Intervals are general EV recommendations. Always follow the {brand} owner&apos;s manual for your specific {model} service schedule.
        </p>
      </div>
    </section>
  );
}
