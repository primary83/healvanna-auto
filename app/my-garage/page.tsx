"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

// ---------- Data ----------

const YEARS = Array.from({ length: 11 }, (_, i) => 2025 - i); // 2025-2015

const MAKES_MODELS: Record<string, string[]> = {
  Acura: ["ILX", "Integra", "MDX", "RDX", "TLX", "ZDX EV"],
  Audi: ["A4", "A6", "Q5", "Q7", "e-tron GT", "Q4 e-tron", "Q8 e-tron"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "iX", "i4", "i5", "i7"],
  Buick: ["Enclave", "Encore GX", "Envista"],
  Cadillac: ["CT5", "Escalade", "Lyriq EV", "XT4", "XT5"],
  Chevrolet: ["Blazer EV", "Bolt EV", "Bolt EUV", "Camaro", "Colorado", "Equinox", "Equinox EV", "Malibu", "Silverado", "Silverado EV", "Tahoe", "Traverse"],
  Chrysler: ["300", "Pacifica", "Pacifica Hybrid"],
  Dodge: ["Charger", "Durango", "Hornet", "Hornet PHEV"],
  Fiat: ["500e"],
  Ford: ["Bronco", "Edge", "Escape", "Escape Hybrid", "Explorer", "F-150", "F-150 Lightning", "Maverick Hybrid", "Mustang", "Mustang Mach-E"],
  Genesis: ["G70", "G80", "GV60 EV", "GV70", "GV80", "Electrified G80"],
  GMC: ["Acadia", "Canyon", "Hummer EV", "Sierra", "Terrain", "Yukon"],
  Honda: ["Accord", "Accord Hybrid", "Civic", "Civic Hybrid", "CR-V", "CR-V Hybrid", "HR-V", "Pilot", "Prologue EV"],
  Hyundai: ["Elantra", "Elantra Hybrid", "Ioniq 5", "Ioniq 6", "Kona", "Kona Electric", "Palisade", "Santa Fe", "Santa Fe Hybrid", "Sonata", "Tucson", "Tucson Hybrid"],
  Infiniti: ["Q50", "QX50", "QX55", "QX60", "QX80"],
  Jaguar: ["F-PACE", "I-PACE EV"],
  Jeep: ["Cherokee", "Compass", "Grand Cherokee", "Grand Cherokee 4xe", "Wagoneer", "Wrangler", "Wrangler 4xe"],
  Kia: ["EV6", "EV9", "Forte", "K5", "Niro EV", "Niro Hybrid", "Seltos", "Sorento", "Sorento Hybrid", "Soul", "Sportage", "Sportage Hybrid", "Telluride"],
  Lexus: ["ES", "IS", "NX", "NX Hybrid", "RX", "RX Hybrid", "RZ 450e", "UX 300e"],
  Lincoln: ["Aviator", "Corsair", "Nautilus"],
  Mazda: ["CX-5", "CX-50", "CX-90", "CX-90 PHEV", "Mazda3", "MX-5 Miata"],
  Mercedes: ["A-Class", "C-Class", "E-Class", "EQB", "EQE", "EQS", "GLA", "GLC", "GLE", "GLS", "S-Class"],
  Mini: ["Clubman", "Countryman", "Cooper SE Electric", "Hardtop"],
  Nissan: ["Altima", "Ariya EV", "Frontier", "Kicks", "Leaf EV", "Pathfinder", "Rogue", "Sentra", "Z"],
  Porsche: ["Cayenne", "Macan", "Macan Electric", "Taycan"],
  Ram: ["1500", "2500", "ProMaster"],
  Rivian: ["R1S", "R1T"],
  Subaru: ["Ascent", "Crosstrek", "Crosstrek Hybrid", "Forester", "Impreza", "Legacy", "Outback", "Solterra EV", "WRX"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
  Toyota: ["4Runner", "Camry", "Camry Hybrid", "Corolla", "Corolla Hybrid", "Crown", "GR86", "Highlander", "Highlander Hybrid", "Prius", "Prius Prime", "RAV4", "RAV4 Hybrid", "RAV4 Prime", "Sequoia", "Tacoma", "Tundra", "Tundra Hybrid", "bZ4X EV"],
  Volkswagen: ["Atlas", "Golf GTI", "ID.4 EV", "ID.7 EV", "ID. Buzz EV", "Jetta", "Taos", "Tiguan"],
  Volvo: ["C40 Recharge", "EX30", "EX90", "S60", "XC40", "XC40 Recharge", "XC60", "XC90"],
};

const MAKES = Object.keys(MAKES_MODELS).sort();

// EV / Hybrid detection keywords
const EV_KEYWORDS = [
  "EV", "Electric", "Lightning", "Mach-E", "Bolt", "Leaf", "Ariya",
  "Ioniq 5", "Ioniq 6", "Kona Electric", "Niro EV", "EV6", "EV9",
  "I-PACE", "e-tron", "iX", "i4", "i5", "i7", "ID.4", "ID.7", "ID. Buzz",
  "Taycan", "Macan Electric", "Lyriq", "Blazer EV", "Equinox EV",
  "Silverado EV", "Hummer EV", "Cybertruck", "Fiat 500e", "500e",
  "Solterra", "bZ4X", "Prologue", "ZDX", "RZ 450e", "UX 300e",
  "Cooper SE", "C40 Recharge", "XC40 Recharge", "EX30", "EX90",
  "EQB", "EQE", "EQS", "Electrified G80", "GV60", "R1S", "R1T",
];

const HYBRID_KEYWORDS = [
  "Hybrid", "Prime", "PHEV", "4xe", "Prius",
];

type VehicleType = "gas" | "hybrid" | "ev";

function detectVehicleType(make: string, model: string): VehicleType {
  const full = `${make} ${model}`;
  // All Tesla / Rivian models are EV
  if (make === "Tesla" || make === "Rivian") return "ev";
  if (EV_KEYWORDS.some((kw) => full.includes(kw))) return "ev";
  if (HYBRID_KEYWORDS.some((kw) => full.includes(kw))) return "hybrid";
  return "gas";
}

// ---------- Maintenance schedules ----------

interface MaintenanceItem {
  name: string;
  intervalMiles?: number;
  intervalMonths?: number;
  costLow: number;
  costHigh: number;
}

const GAS_SCHEDULE: MaintenanceItem[] = [
  { name: "Oil Change", intervalMiles: 5000, costLow: 35, costHigh: 75 },
  { name: "Tire Rotation", intervalMiles: 7500, costLow: 25, costHigh: 50 },
  { name: "Air Filter", intervalMiles: 15000, costLow: 15, costHigh: 30 },
  { name: "Cabin Air Filter", intervalMiles: 15000, costLow: 15, costHigh: 40 },
  { name: "Brake Inspection", intervalMiles: 15000, costLow: 20, costHigh: 50 },
  { name: "Wiper Blades", intervalMonths: 12, costLow: 20, costHigh: 40 },
  { name: "Battery Test", intervalMonths: 12, costLow: 0, costHigh: 25 },
  { name: "Transmission Fluid", intervalMiles: 30000, costLow: 150, costHigh: 250 },
  { name: "Brake Pads", intervalMiles: 30000, costLow: 150, costHigh: 300 },
  { name: "Coolant Flush", intervalMiles: 30000, costLow: 100, costHigh: 150 },
  { name: "Spark Plugs", intervalMiles: 30000, costLow: 100, costHigh: 200 },
  { name: "Power Steering Fluid", intervalMiles: 50000, costLow: 80, costHigh: 150 },
  { name: "Timing Belt", intervalMiles: 60000, costLow: 500, costHigh: 1000 },
  { name: "Serpentine Belt", intervalMiles: 60000, costLow: 100, costHigh: 200 },
];

const HYBRID_SCHEDULE: MaintenanceItem[] = [
  { name: "Oil Change", intervalMiles: 5000, costLow: 35, costHigh: 75 },
  { name: "Tire Rotation", intervalMiles: 7500, costLow: 25, costHigh: 50 },
  { name: "Air Filter", intervalMiles: 15000, costLow: 15, costHigh: 30 },
  { name: "Cabin Air Filter", intervalMiles: 15000, costLow: 15, costHigh: 40 },
  { name: "Brake Inspection", intervalMiles: 15000, costLow: 20, costHigh: 50 },
  { name: "Wiper Blades", intervalMonths: 12, costLow: 20, costHigh: 40 },
  { name: "Battery Test", intervalMonths: 12, costLow: 0, costHigh: 25 },
  { name: "Transmission Fluid", intervalMiles: 30000, costLow: 150, costHigh: 250 },
  { name: "Brake Pads", intervalMiles: 30000, costLow: 150, costHigh: 300 },
  { name: "Coolant Flush", intervalMiles: 30000, costLow: 100, costHigh: 150 },
  { name: "Spark Plugs", intervalMiles: 30000, costLow: 100, costHigh: 200 },
  { name: "Hybrid Battery Check", intervalMonths: 24, costLow: 0, costHigh: 100 },
  { name: "EV System Inspection", intervalMonths: 24, costLow: 50, costHigh: 150 },
  { name: "Regenerative Brake Inspection", intervalMiles: 30000, costLow: 50, costHigh: 100 },
];

const EV_SCHEDULE: MaintenanceItem[] = [
  { name: "Tire Rotation", intervalMiles: 7500, costLow: 25, costHigh: 50 },
  { name: "Cabin Air Filter", intervalMonths: 24, costLow: 15, costHigh: 40 },
  { name: "Brake Fluid", intervalMonths: 24, costLow: 70, costHigh: 120 },
  { name: "Brake Inspection", intervalMiles: 12500, costLow: 20, costHigh: 50 },
  { name: "Coolant Flush", intervalMiles: 50000, costLow: 100, costHigh: 200 },
  { name: "Battery Health Check", intervalMonths: 12, costLow: 0, costHigh: 100 },
  { name: "Wiper Blades", intervalMonths: 12, costLow: 20, costHigh: 40 },
  { name: "12V Battery", intervalMonths: 48, costLow: 150, costHigh: 300 },
  { name: "Wheel Alignment", intervalMonths: 12, costLow: 80, costHigh: 150 },
  { name: "Multi-Point Inspection", intervalMonths: 12, costLow: 50, costHigh: 150 },
  { name: "Suspension Check", intervalMonths: 24, costLow: 50, costHigh: 100 },
];

function getSchedule(type: VehicleType): MaintenanceItem[] {
  if (type === "ev") return EV_SCHEDULE;
  if (type === "hybrid") return HYBRID_SCHEDULE;
  return GAS_SCHEDULE;
}

interface CategorizedItem extends MaintenanceItem {
  nextDueMiles: number;
  intervalLabel: string;
}

function categorize(
  schedule: MaintenanceItem[],
  mileage: number
): { dueNow: CategorizedItem[]; comingSoon: CategorizedItem[]; horizon: CategorizedItem[] } {
  const dueNow: CategorizedItem[] = [];
  const comingSoon: CategorizedItem[] = [];
  const horizon: CategorizedItem[] = [];

  for (const item of schedule) {
    let nextDueMiles: number;
    let intervalLabel: string;

    if (item.intervalMiles) {
      // How many full intervals have passed
      const intervalsPassed = Math.floor(mileage / item.intervalMiles);
      nextDueMiles = (intervalsPassed + 1) * item.intervalMiles;
      // If we're past due (within the current interval, near the boundary)
      if (mileage >= nextDueMiles - 500) {
        // technically overdue or right at it — push to next
        nextDueMiles = (intervalsPassed + 1) * item.intervalMiles;
      }
      intervalLabel = `Every ${item.intervalMiles.toLocaleString()} mi`;
    } else {
      // Month-based: estimate 12,000 miles/year → 1,000 mi/month
      const months = item.intervalMonths!;
      const equivalentMiles = months * 1000;
      const intervalsPassed = Math.floor(mileage / equivalentMiles);
      nextDueMiles = (intervalsPassed + 1) * equivalentMiles;
      intervalLabel = `Every ${months} months`;
    }

    const diff = nextDueMiles - mileage;
    const entry: CategorizedItem = { ...item, nextDueMiles, intervalLabel };

    if (diff <= 1000) {
      dueNow.push(entry);
    } else if (diff <= 5000) {
      comingSoon.push(entry);
    } else if (diff <= 15000) {
      horizon.push(entry);
    }
  }

  // Sort each group by nextDueMiles ascending
  const byMiles = (a: CategorizedItem, b: CategorizedItem) => a.nextDueMiles - b.nextDueMiles;
  dueNow.sort(byMiles);
  comingSoon.sort(byMiles);
  horizon.sort(byMiles);

  return { dueNow, comingSoon, horizon };
}

function annualCost(schedule: MaintenanceItem[]): { low: number; high: number } {
  let low = 0;
  let high = 0;
  for (const item of schedule) {
    // Approximate occurrences per year (assume 12,000 mi/yr)
    let timesPerYear: number;
    if (item.intervalMiles) {
      timesPerYear = 12000 / item.intervalMiles;
    } else {
      timesPerYear = 12 / item.intervalMonths!;
    }
    low += item.costLow * timesPerYear;
    high += item.costHigh * timesPerYear;
  }
  return { low: Math.round(low), high: Math.round(high) };
}

// ---------- Components ----------

function VehicleTypeBadge({ type }: { type: VehicleType }) {
  const config = {
    ev: { label: "Electric Vehicle", bg: "bg-[rgba(16,185,129,0.15)]", text: "text-[#10B981]", border: "border-[rgba(16,185,129,0.3)]" },
    hybrid: { label: "Hybrid Vehicle", bg: "bg-[rgba(245,158,11,0.15)]", text: "text-[#F59E0B]", border: "border-[rgba(245,158,11,0.3)]" },
    gas: { label: "Gas Vehicle", bg: "bg-[rgba(74,144,217,0.15)]", text: "text-[#4a90d9]", border: "border-[rgba(74,144,217,0.3)]" },
  };
  const c = config[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${c.bg} ${c.text} border ${c.border}`}>
      {type === "ev" && "⚡"} {type === "hybrid" && "🔋"} {type === "gas" && "⛽"} {c.label}
    </span>
  );
}

function MaintenanceGroup({
  title,
  emoji,
  accentColor,
  borderColor,
  items,
}: {
  title: string;
  emoji: string;
  accentColor: string;
  borderColor: string;
  items: CategorizedItem[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="mb-8">
      <h3 className={`text-lg font-medium ${accentColor} mb-4 flex items-center gap-2`}>
        <span>{emoji}</span> {title}
        <span className="text-xs font-normal text-[#6b7a94] ml-1">({items.length} {items.length === 1 ? "service" : "services"})</span>
      </h3>
      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-gradient-to-r from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.8)] border ${borderColor} hover:border-opacity-60 transition-all duration-300`}
          >
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-medium text-[#e8edf5]">{item.name}</div>
              <div className="text-xs text-[#6b7a94] mt-1">
                {item.intervalLabel} &middot; Due at {item.nextDueMiles.toLocaleString()} mi
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-sm font-medium text-[#e8edf5]">
                ${item.costLow}–${item.costHigh}
              </div>
              <Link
                href="/deals"
                className="text-xs font-medium text-[#10B981] hover:text-[#34D399] transition-colors whitespace-nowrap"
              >
                Find Deals &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Inner page (needs Suspense boundary for useSearchParams) ----------

function MyGarageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial values from URL
  const urlYear = searchParams.get("year") || "";
  const urlMake = searchParams.get("make") || "";
  const urlModel = searchParams.get("model") || "";
  const urlMileage = searchParams.get("mileage") || "";

  const [year, setYear] = useState(urlYear);
  const [make, setMake] = useState(urlMake);
  const [model, setModel] = useState(urlModel);
  const [mileage, setMileage] = useState(urlMileage);

  // Show timeline if URL has all params
  const [submitted, setSubmitted] = useState(
    !!(urlYear && urlMake && urlModel && urlMileage)
  );

  const models = make ? MAKES_MODELS[make] || [] : [];

  const handleMakeChange = (newMake: string) => {
    setMake(newMake);
    setModel("");
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (!year || !make || !model || !mileage) return;
    const params = new URLSearchParams({ year, make, model, mileage });
    router.push(`/my-garage?${params.toString()}`, { scroll: false });
    setSubmitted(true);
  };

  const vehicleType = submitted ? detectVehicleType(make, model) : null;
  const schedule = vehicleType ? getSchedule(vehicleType) : [];
  const mileageNum = parseInt(mileage, 10) || 0;

  const { dueNow, comingSoon, horizon } = useMemo(
    () => (submitted ? categorize(schedule, mileageNum) : { dueNow: [], comingSoon: [], horizon: [] }),
    [submitted, schedule, mileageNum]
  );

  const annual = useMemo(() => (submitted ? annualCost(schedule) : null), [submitted, schedule]);

  const selectClasses =
    "w-full px-4 py-3.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.25)] rounded-lg text-[#e8edf5] text-sm appearance-none focus:outline-none focus:border-[#4a90d9] transition-colors cursor-pointer";

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="MY GARAGE" />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">
            Personalized Maintenance
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">
            My <span className="text-[#4a90d9] font-light">Garage</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[560px] mx-auto leading-relaxed">
            Enter your vehicle details to get a personalized maintenance schedule.
            Know exactly what&apos;s due now, coming soon, and on the horizon.
          </p>
        </div>
      </section>

      {/* Vehicle Selector */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-2xl p-6 md:p-8 border border-[rgba(74,144,217,0.15)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Year */}
              <div>
                <label className="block text-xs text-[#6b7a94] mb-2 tracking-wide">Year</label>
                <select
                  value={year}
                  onChange={(e) => { setYear(e.target.value); setSubmitted(false); }}
                  className={selectClasses}
                >
                  <option value="">Select Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Make */}
              <div>
                <label className="block text-xs text-[#6b7a94] mb-2 tracking-wide">Make</label>
                <select
                  value={make}
                  onChange={(e) => handleMakeChange(e.target.value)}
                  className={selectClasses}
                >
                  <option value="">Select Make</option>
                  {MAKES.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-xs text-[#6b7a94] mb-2 tracking-wide">Model</label>
                <select
                  value={model}
                  onChange={(e) => { setModel(e.target.value); setSubmitted(false); }}
                  className={selectClasses}
                  disabled={!make}
                >
                  <option value="">
                    {make ? "Select Model" : "Select a make first"}
                  </option>
                  {models.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Mileage */}
              <div>
                <label className="block text-xs text-[#6b7a94] mb-2 tracking-wide">Current Mileage</label>
                <input
                  type="number"
                  value={mileage}
                  onChange={(e) => { setMileage(e.target.value); setSubmitted(false); }}
                  placeholder="Enter current mileage"
                  className={selectClasses}
                  min={0}
                  max={500000}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!year || !make || !model || !mileage}
              className="w-full mt-2 py-3.5 rounded-lg font-medium text-sm bg-[#10B981] hover:bg-[#059669] text-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Check My Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Maintenance Timeline */}
      {submitted && vehicleType && (
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Vehicle summary bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.1)]">
              <div className="text-sm font-medium text-[#e8edf5]">
                {year} {make} {model}
              </div>
              <span className="text-[#6b7a94]">&middot;</span>
              <div className="text-sm text-[#6b7a94]">{mileageNum.toLocaleString()} miles</div>
              <span className="text-[#6b7a94]">&middot;</span>
              <VehicleTypeBadge type={vehicleType} />
            </div>

            {/* Groups */}
            <MaintenanceGroup
              title="Due Now"
              emoji="🔴"
              accentColor="text-red-400"
              borderColor="border-[rgba(239,68,68,0.25)]"
              items={dueNow}
            />
            <MaintenanceGroup
              title="Coming Soon"
              emoji="🟡"
              accentColor="text-amber-400"
              borderColor="border-[rgba(245,158,11,0.25)]"
              items={comingSoon}
            />
            <MaintenanceGroup
              title="On the Horizon"
              emoji="🔵"
              accentColor="text-blue-400"
              borderColor="border-[rgba(74,144,217,0.25)]"
              items={horizon}
            />

            {dueNow.length === 0 && comingSoon.length === 0 && horizon.length === 0 && (
              <div className="text-center py-12 text-[#6b7a94]">
                <p className="text-lg mb-2">All caught up!</p>
                <p className="text-sm">No maintenance items due within the next 15,000 miles.</p>
              </div>
            )}

            {/* Annual cost estimate */}
            {annual && (
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[rgba(16,185,129,0.08)] to-[rgba(74,144,217,0.08)] border border-[rgba(16,185,129,0.2)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs tracking-[0.2em] uppercase text-[#10B981] font-medium mb-1">
                      Estimated Annual Maintenance Cost
                    </div>
                    <div className="text-2xl font-light text-[#e8edf5]">
                      ${annual.low.toLocaleString()} – ${annual.high.toLocaleString()}
                      <span className="text-sm text-[#6b7a94] ml-2">/ year</span>
                    </div>
                    <div className="text-xs text-[#6b7a94] mt-1">Based on average 12,000 miles driven per year</div>
                  </div>
                  <Link
                    href="/deals"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium transition-colors shrink-0"
                  >
                    Browse Deals
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

// ---------- Page export with metadata ----------

export default function MyGaragePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5] flex items-center justify-center">
          <div className="text-[#6b7a94]">Loading...</div>
        </div>
      }
    >
      <MyGarageInner />
    </Suspense>
  );
}
