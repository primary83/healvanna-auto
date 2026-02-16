// Structured pricing data for the "What Should This Cost?" estimator
// Base prices are for a mid-size sedan, moderate condition, national average

export interface PriceRange {
  low: number;
  mid: number;
  high: number;
}

export interface EstimateResult {
  low: number;
  mid: number;
  high: number;
  breakdown: {
    baseLabel: string;
    baseMid: number;
    vehicleLabel: string;
    vehicleMultiplier: number;
    vehicleAdjustment: number;
    severityLabel: string;
    severityMultiplier: number;
    severityAdjustment: number;
    cityLabel: string;
    cityMultiplier: number;
    cityAdjustment: number;
  };
}

// ─── Base Prices ───────────────────────────────────────────
// Source: serviceFAQs.ts, provider pages, industry averages
// All prices are USD for a mid-size sedan in moderate condition

export const SERVICE_BASE_PRICES: Record<string, PriceRange> = {
  // Car Detailing
  "car-detailing": { low: 150, mid: 300, high: 500 },
  "ceramic-coating": { low: 500, mid: 1200, high: 2000 },
  "interior-detailing": { low: 100, mid: 200, high: 400 },
  "mobile-detailing": { low: 100, mid: 250, high: 450 },

  // Car Wrapping
  "car-wrapping": { low: 2500, mid: 4000, high: 6000 },
  "vinyl-wrap": { low: 2500, mid: 4000, high: 6000 },
  "color-change-wrap": { low: 3000, mid: 5000, high: 8000 },
  "ppf": { low: 1500, mid: 3000, high: 6000 },

  // Body Shops
  "body-shops": { low: 500, mid: 1500, high: 3500 },
  "dent-repair": { low: 75, mid: 200, high: 500 },
  "paint-correction": { low: 300, mid: 600, high: 1200 },

  // Collision Repair
  "collision-repair": { low: 1500, mid: 4000, high: 8000 },
  "frame-repair": { low: 2000, mid: 5000, high: 10000 },
  "insurance-claims": { low: 1500, mid: 4000, high: 8000 },

  // Auto Glass
  "auto-glass": { low: 200, mid: 350, high: 600 },
  "windshield-repair": { low: 50, mid: 75, high: 150 },
  "windshield-replacement": { low: 200, mid: 400, high: 1000 },

  // Auto Painting
  "auto-painting": { low: 500, mid: 2500, high: 5000 },
  "custom-paint": { low: 3000, mid: 8000, high: 20000 },
  "color-matching": { low: 300, mid: 800, high: 2000 },

  // Car Washing
  "car-washing": { low: 15, mid: 30, high: 60 },
  "hand-wash": { low: 25, mid: 50, high: 80 },
  "full-service": { low: 30, mid: 60, high: 100 },
};

// ─── Vehicle Size Multipliers ──────────────────────────────

export type VehicleSize =
  | "compact"
  | "sedan"
  | "suv"
  | "truck"
  | "luxury"
  | "exotic";

export const VEHICLE_SIZES: {
  value: VehicleSize;
  label: string;
  examples: string;
  multiplier: number;
}[] = [
  {
    value: "compact",
    label: "Compact",
    examples: "Civic, Corolla, Model 3, Bolt",
    multiplier: 0.85,
  },
  {
    value: "sedan",
    label: "Sedan / Midsize",
    examples: "Camry, Accord, Model S, i4",
    multiplier: 1.0,
  },
  {
    value: "suv",
    label: "SUV / Crossover",
    examples: "RAV4, Model X, Tahoe, IX",
    multiplier: 1.3,
  },
  {
    value: "truck",
    label: "Truck / Van",
    examples: "F-150, Cybertruck, Silverado",
    multiplier: 1.4,
  },
  {
    value: "luxury",
    label: "Luxury",
    examples: "S-Class, 7 Series, Lucid Air",
    multiplier: 1.5,
  },
  {
    value: "exotic",
    label: "Exotic / Supercar",
    examples: "Ferrari, Lamborghini, McLaren",
    multiplier: 2.0,
  },
];

// ─── Severity / Condition Multipliers ──────────────────────

export type Severity = "minor" | "moderate" | "major" | "severe";

export const SEVERITY_LEVELS: {
  value: Severity;
  label: string;
  description: string;
  multiplier: number;
}[] = [
  {
    value: "minor",
    label: "Minor",
    description: "Small chips, light scratches, basic service",
    multiplier: 0.6,
  },
  {
    value: "moderate",
    label: "Moderate",
    description: "Standard service, typical wear and tear",
    multiplier: 1.0,
  },
  {
    value: "major",
    label: "Major",
    description: "Significant damage, extensive work needed",
    multiplier: 1.8,
  },
  {
    value: "severe",
    label: "Severe",
    description: "Structural damage, full restoration, multi-panel",
    multiplier: 2.5,
  },
];

// ─── City Cost-of-Living Multipliers ───────────────────────
// Based on cost-of-living indices; Orlando FL = 1.0 baseline

export const CITY_MULTIPLIERS: Record<string, number> = {
  "new-york-ny": 1.35,
  "los-angeles-ca": 1.25,
  "chicago-il": 1.1,
  "houston-tx": 0.95,
  "phoenix-az": 0.95,
  "san-antonio-tx": 0.9,
  "dallas-tx": 1.0,
  "austin-tx": 1.05,
  "miami-fl": 1.15,
  "orlando-fl": 1.0,
  "tampa-fl": 0.95,
  "jacksonville-fl": 0.9,
  "atlanta-ga": 1.05,
  "denver-co": 1.1,
  "seattle-wa": 1.25,
  "san-francisco-ca": 1.4,
  "san-diego-ca": 1.2,
  "las-vegas-nv": 1.0,
  "portland-or": 1.15,
  "charlotte-nc": 0.95,
};

// ─── Service Display Names ─────────────────────────────────
// Maps slugs to human-readable names for the result card

export const SERVICE_DISPLAY_NAMES: Record<string, string> = {
  "car-detailing": "Car Detailing",
  "ceramic-coating": "Ceramic Coating",
  "interior-detailing": "Interior Detailing",
  "mobile-detailing": "Mobile Detailing",
  "car-wrapping": "Full Car Wrap",
  "vinyl-wrap": "Vinyl Wrap",
  "color-change-wrap": "Color Change Wrap",
  "ppf": "Paint Protection Film (PPF)",
  "body-shops": "Body Work",
  "dent-repair": "Dent Repair",
  "paint-correction": "Paint Correction",
  "collision-repair": "Collision Repair",
  "frame-repair": "Frame Repair",
  "insurance-claims": "Insurance Claims Repair",
  "auto-glass": "Auto Glass",
  "windshield-repair": "Windshield Repair",
  "windshield-replacement": "Windshield Replacement",
  "auto-painting": "Auto Painting",
  "custom-paint": "Custom Paint Job",
  "color-matching": "Color Matching",
  "car-washing": "Car Wash",
  "hand-wash": "Hand Wash",
  "full-service": "Full Service Wash",
};

// ─── Service → Parent Slug Mapping ─────────────────────────
// Maps subcategory slugs to their parent service page slug for CTAs

export const SERVICE_PARENT_SLUGS: Record<string, string> = {
  "car-detailing": "car-detailing",
  "ceramic-coating": "car-detailing",
  "interior-detailing": "car-detailing",
  "mobile-detailing": "car-detailing",
  "car-wrapping": "car-wrapping",
  "vinyl-wrap": "car-wrapping",
  "color-change-wrap": "car-wrapping",
  "ppf": "car-wrapping",
  "body-shops": "body-shops",
  "dent-repair": "body-shops",
  "paint-correction": "body-shops",
  "collision-repair": "collision-repair",
  "frame-repair": "collision-repair",
  "insurance-claims": "collision-repair",
  "auto-glass": "auto-glass",
  "windshield-repair": "auto-glass",
  "windshield-replacement": "auto-glass",
  "auto-painting": "auto-painting",
  "custom-paint": "auto-painting",
  "color-matching": "auto-painting",
  "car-washing": "car-washing",
  "hand-wash": "car-washing",
  "full-service": "car-washing",
};

// ─── Grouped services for the dropdown ─────────────────────

export interface ServiceGroup {
  category: string;
  services: { slug: string; name: string }[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    category: "Car Detailing",
    services: [
      { slug: "car-detailing", name: "Full Detailing" },
      { slug: "ceramic-coating", name: "Ceramic Coating" },
      { slug: "interior-detailing", name: "Interior Detailing" },
      { slug: "mobile-detailing", name: "Mobile Detailing" },
    ],
  },
  {
    category: "Car Wrapping",
    services: [
      { slug: "car-wrapping", name: "Full Car Wrap" },
      { slug: "vinyl-wrap", name: "Vinyl Wrap" },
      { slug: "color-change-wrap", name: "Color Change Wrap" },
      { slug: "ppf", name: "Paint Protection Film (PPF)" },
    ],
  },
  {
    category: "Body Work",
    services: [
      { slug: "body-shops", name: "General Body Work" },
      { slug: "dent-repair", name: "Dent Repair" },
      { slug: "paint-correction", name: "Paint Correction" },
    ],
  },
  {
    category: "Collision Repair",
    services: [
      { slug: "collision-repair", name: "Collision Repair" },
      { slug: "frame-repair", name: "Frame Repair" },
    ],
  },
  {
    category: "Auto Glass",
    services: [
      { slug: "auto-glass", name: "Auto Glass (General)" },
      { slug: "windshield-repair", name: "Windshield Repair" },
      { slug: "windshield-replacement", name: "Windshield Replacement" },
    ],
  },
  {
    category: "Auto Painting",
    services: [
      { slug: "auto-painting", name: "Standard Paint Job" },
      { slug: "custom-paint", name: "Custom Paint Job" },
      { slug: "color-matching", name: "Color Matching" },
    ],
  },
  {
    category: "Car Washing",
    services: [
      { slug: "car-washing", name: "Basic Car Wash" },
      { slug: "hand-wash", name: "Hand Wash" },
      { slug: "full-service", name: "Full Service Wash" },
    ],
  },
];

// ─── Calculate Estimate ────────────────────────────────────

export function calculateEstimate(
  serviceSlug: string,
  vehicleSize: VehicleSize,
  severity: Severity,
  citySlug?: string
): EstimateResult | null {
  const basePrice = SERVICE_BASE_PRICES[serviceSlug];
  if (!basePrice) return null;

  const vehicleInfo = VEHICLE_SIZES.find((v) => v.value === vehicleSize);
  const severityInfo = SEVERITY_LEVELS.find((s) => s.value === severity);

  if (!vehicleInfo || !severityInfo) return null;

  const vehicleMult = vehicleInfo.multiplier;
  const severityMult = severityInfo.multiplier;
  const cityMult = citySlug ? CITY_MULTIPLIERS[citySlug] || 1.0 : 1.0;

  const totalMultiplier = vehicleMult * severityMult * cityMult;

  const low = Math.round(basePrice.low * totalMultiplier);
  const mid = Math.round(basePrice.mid * totalMultiplier);
  const high = Math.round(basePrice.high * totalMultiplier);

  // Build breakdown (based on mid price)
  const baseMid = basePrice.mid;
  const afterVehicle = Math.round(baseMid * vehicleMult);
  const afterSeverity = Math.round(afterVehicle * severityMult);
  const afterCity = Math.round(afterSeverity * cityMult);

  const cityLabel = citySlug
    ? citySlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
        .replace(/\s([a-z]{2})$/i, (_, st) => `, ${st.toUpperCase()}`)
    : "";

  return {
    low,
    mid,
    high,
    breakdown: {
      baseLabel: SERVICE_DISPLAY_NAMES[serviceSlug] || serviceSlug,
      baseMid,
      vehicleLabel: vehicleInfo.label,
      vehicleMultiplier: vehicleMult,
      vehicleAdjustment: afterVehicle - baseMid,
      severityLabel: severityInfo.label,
      severityMultiplier: severityMult,
      severityAdjustment: afterSeverity - afterVehicle,
      cityLabel,
      cityMultiplier: cityMult,
      cityAdjustment: afterCity - afterSeverity,
    },
  };
}
