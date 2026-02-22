interface ChargingCompatibilityProps {
  brand: string;
  model: string;
  batteryCapacity: number;
  maxChargeSpeed: number;
  connectorType: string;
  range: number;
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

export default function ChargingCompatibility({
  brand,
  model,
  batteryCapacity,
  maxChargeSpeed,
  connectorType,
  range,
}: ChargingCompatibilityProps) {
  // 10% to 80% charge = 70% of capacity
  const chargeKwh = batteryCapacity * 0.7;

  return (
    <div className="bg-[rgba(15,22,40,0.6)] rounded-xl border border-[rgba(74,144,217,0.12)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-5 h-5 text-[#4a90d9]"
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
        <h3 className="text-[14px] font-medium text-[#e8edf5]">
          Charging — {brand} {model}
        </h3>
      </div>

      {/* Specs Row */}
      <div className="flex gap-6 mb-4 pb-4 border-b border-[rgba(74,144,217,0.08)]">
        <div>
          <div className="text-[10px] tracking-[0.05em] uppercase text-[#3d4a61] mb-0.5">
            Battery
          </div>
          <div className="text-[14px] text-[#e8edf5]">
            {batteryCapacity} kWh
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.05em] uppercase text-[#3d4a61] mb-0.5">
            Max Charge
          </div>
          <div className="text-[14px] text-[#e8edf5]">
            {maxChargeSpeed} kW
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.05em] uppercase text-[#3d4a61] mb-0.5">
            Connector
          </div>
          <div className="text-[14px] text-[#e8edf5]">{connectorType}</div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.05em] uppercase text-[#3d4a61] mb-0.5">
            Range
          </div>
          <div className="text-[14px] text-[#e8edf5]">{range} mi</div>
        </div>
      </div>

      {/* Charge Times */}
      <div className="text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-3 font-medium">
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
                <div className="text-[12px] text-[#e8edf5]">{level.label}</div>
                <div className="text-[10px] text-[#3d4a61]">
                  {level.sublabel}
                </div>
              </div>
              <div className="flex-1 h-2 bg-[rgba(74,144,217,0.08)] rounded-full overflow-hidden">
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
