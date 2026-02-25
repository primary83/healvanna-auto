export interface OBDCode {
  code: string;
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  system: string;
  commonCauses: string[];
  symptoms: string[];
  estimatedCostMin: number;
  estimatedCostMax: number;
  difficulty: "Easy" | "Moderate" | "Advanced" | "Professional";
}

// Import all code sub-files
import { P00XX_CODES } from "./codes/p00xx";
import { P01XX_CODES } from "./codes/p01xx";
import { P02XX_CODES } from "./codes/p02xx";
import { P03XX_CODES } from "./codes/p03xx";
import { P04XX_CODES } from "./codes/p04xx";
import { P05XX_CODES } from "./codes/p05xx";
import { P06XX_CODES } from "./codes/p06xx";
import { P07XX_CODES } from "./codes/p07xx";
import { P08XX_CODES } from "./codes/p08xx";
import { P09XX_CODES } from "./codes/p09xx";
import { P10XX_CODES } from "./codes/p10xx";
import { P11XX_CODES } from "./codes/p11xx";
import { P12XX_CODES } from "./codes/p12xx";
import { P13XX_CODES } from "./codes/p13xx";
import { P14XX_CODES } from "./codes/p14xx";
import { P15XX_CODES } from "./codes/p15xx";
import { P16XX_CODES } from "./codes/p16xx";
import { P17XX_CODES } from "./codes/p17xx";
import { P18XX_CODES } from "./codes/p18xx";
import { P19XX_CODES } from "./codes/p19xx";
import { P20XX_CODES } from "./codes/p20xx";
import { P21XX_CODES } from "./codes/p21xx";
import { P22XX_CODES } from "./codes/p22xx";
import { P23XX_CODES } from "./codes/p23xx";
import { P24XX_CODES } from "./codes/p24xx";
import { P25XX_CODES } from "./codes/p25xx";
import { P26XX_CODES } from "./codes/p26xx";
import { P27XX_CODES } from "./codes/p27xx";
import { P28XX_CODES } from "./codes/p28xx";
import { P29XX_CODES } from "./codes/p29xx";
import { P30XX_CODES } from "./codes/p30xx";
import { P31XX_CODES } from "./codes/p31xx";
import { P32XX_CODES } from "./codes/p32xx";
import { P33XX_CODES } from "./codes/p33xx";
import { P34XX_CODES } from "./codes/p34xx";
import { BODY_CODES } from "./codes/body";
import { CHASSIS_CODES } from "./codes/chassis";
import { NETWORK_CODES } from "./codes/network";

// Merged array of all OBD-II codes
export const OBD_CODES: OBDCode[] = [
  ...P00XX_CODES,
  ...P01XX_CODES,
  ...P02XX_CODES,
  ...P03XX_CODES,
  ...P04XX_CODES,
  ...P05XX_CODES,
  ...P06XX_CODES,
  ...P07XX_CODES,
  ...P08XX_CODES,
  ...P09XX_CODES,
  ...P10XX_CODES,
  ...P11XX_CODES,
  ...P12XX_CODES,
  ...P13XX_CODES,
  ...P14XX_CODES,
  ...P15XX_CODES,
  ...P16XX_CODES,
  ...P17XX_CODES,
  ...P18XX_CODES,
  ...P19XX_CODES,
  ...P20XX_CODES,
  ...P21XX_CODES,
  ...P22XX_CODES,
  ...P23XX_CODES,
  ...P24XX_CODES,
  ...P25XX_CODES,
  ...P26XX_CODES,
  ...P27XX_CODES,
  ...P28XX_CODES,
  ...P29XX_CODES,
  ...P30XX_CODES,
  ...P31XX_CODES,
  ...P32XX_CODES,
  ...P33XX_CODES,
  ...P34XX_CODES,
  ...BODY_CODES,
  ...CHASSIS_CODES,
  ...NETWORK_CODES,
];

// Top 10 most commonly searched codes for quick-access
export const TOP_CODES = ["P0300", "P0420", "P0171", "P0442", "P0455", "P0128", "P0401", "P0440", "P0430", "P0135"];

// Lookup by code (case-insensitive)
export function getCodeByCode(code: string): OBDCode | undefined {
  return OBD_CODES.find((c) => c.code.toLowerCase() === code.toLowerCase());
}

// Search codes by query (searches code, title, description, system, causes, symptoms)
export function searchCodes(query: string): OBDCode[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return OBD_CODES.filter(
    (c) =>
      c.code.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.system.toLowerCase().includes(q) ||
      c.commonCauses.some((cause) => cause.toLowerCase().includes(q)) ||
      c.symptoms.some((symptom) => symptom.toLowerCase().includes(q))
  );
}

// Severity color mapping
export const SEVERITY_COLORS: Record<OBDCode["severity"], { text: string; bg: string; border: string }> = {
  Low: { text: "text-[#34d399]", bg: "bg-[rgba(52,211,153,0.1)]", border: "border-[rgba(52,211,153,0.2)]" },
  Medium: { text: "text-[#f59e0b]", bg: "bg-[rgba(245,158,11,0.1)]", border: "border-[rgba(245,158,11,0.2)]" },
  High: { text: "text-[#f97316]", bg: "bg-[rgba(249,115,22,0.1)]", border: "border-[rgba(249,115,22,0.2)]" },
  Critical: { text: "text-[#ef4444]", bg: "bg-[rgba(239,68,68,0.1)]", border: "border-[rgba(239,68,68,0.2)]" },
};

// Difficulty color mapping
export const DIFFICULTY_COLORS: Record<OBDCode["difficulty"], { text: string; bg: string }> = {
  Easy: { text: "text-[#34d399]", bg: "bg-[rgba(52,211,153,0.1)]" },
  Moderate: { text: "text-[#f59e0b]", bg: "bg-[rgba(245,158,11,0.1)]" },
  Advanced: { text: "text-[#f97316]", bg: "bg-[rgba(249,115,22,0.1)]" },
  Professional: { text: "text-[#ef4444]", bg: "bg-[rgba(239,68,68,0.1)]" },
};
