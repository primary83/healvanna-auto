const fs = require("fs");
const path = require("path");

// Brand data — name mapping and model lists for metadata
const BRANDS = {
  tesla: { name: "Tesla", models: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"] },
  rivian: { name: "Rivian", models: ["R1T", "R1S"] },
  bmw: { name: "BMW", models: ["i4", "i7", "iX"] },
  mercedes: { name: "Mercedes", models: ["EQS", "EQE", "EQB"] },
  porsche: { name: "Porsche", models: ["Taycan", "Macan EV"] },
  byd: { name: "BYD", models: ["Seal", "Atto 3", "Dolphin", "Han", "Tang", "Seal U"] },
  nio: { name: "NIO", models: ["ET7", "ET5", "ES8", "ES6", "EC7", "EC6"] },
  xpeng: { name: "XPeng", models: ["G9", "P7", "G6", "X9"] },
  "li-auto": { name: "Li Auto", models: ["MEGA", "L9", "L8", "L7", "L6"] },
  zeekr: { name: "Zeekr", models: ["001", "009", "X", "007"] },
  xiaomi: { name: "Xiaomi", models: ["SU7", "SU7 Pro", "SU7 Max"] },
  lucid: { name: "Lucid", models: ["Air Pure", "Air Touring", "Air GT", "Sapphire", "Gravity"] },
  hyundai: { name: "Hyundai", models: ["Ioniq 5", "Ioniq 6", "Kona Electric"] },
  kia: { name: "Kia", models: ["EV6", "EV9", "EV3", "Niro EV"] },
  genesis: { name: "Genesis", models: ["GV60", "Electrified G80", "Electrified GV70"] },
  volvo: { name: "Volvo", models: ["EX30", "EX90", "EC40", "XC40 Recharge"] },
  volkswagen: { name: "Volkswagen", models: ["ID.4", "ID.Buzz", "ID.7"] },
  audi: { name: "Audi", models: ["Q4 e-tron", "Q8 e-tron", "e-tron GT", "RS e-tron GT"] },
  ford: { name: "Ford", models: ["Mustang Mach-E", "F-150 Lightning", "E-Transit"] },
  polestar: { name: "Polestar", models: ["Polestar 2", "Polestar 3", "Polestar 4"] },
  cadillac: { name: "Cadillac", models: ["LYRIQ", "CELESTIQ", "Escalade IQ", "OPTIQ"] },
  chevrolet: { name: "Chevrolet", models: ["Equinox EV", "Blazer EV", "Silverado EV"] },
  jaguar: { name: "Jaguar", models: ["I-PACE", "Type 00"] },
  vinfast: { name: "VinFast", models: ["VF 8", "VF 9", "VF 6", "VF 7"] },
  honda: { name: "Honda", models: ["Prologue"] },
  nissan: { name: "Nissan", models: ["Ariya", "LEAF"] },
  toyota: { name: "Toyota", models: ["bZ4X"] },
  lexus: { name: "Lexus", models: ["RZ 450e"] },
  subaru: { name: "Subaru", models: ["Solterra"] },
  acura: { name: "Acura", models: ["ZDX"] },
  mini: { name: "Mini", models: ["Cooper SE", "Countryman SE"] },
  fiat: { name: "Fiat", models: ["500e"] },
  dodge: { name: "Dodge", models: ["Charger Daytona"] },
  gmc: { name: "GMC", models: ["Hummer EV SUV", "Hummer EV Pickup", "Sierra EV"] },
};

// Related brands mapping
const RELATED_BRANDS = {
  tesla: ["rivian", "lucid", "polestar", "bmw"],
  rivian: ["tesla", "ford", "gmc", "chevrolet"],
  bmw: ["mercedes", "audi", "porsche", "genesis"],
  mercedes: ["bmw", "audi", "porsche", "genesis"],
  porsche: ["bmw", "mercedes", "audi", "tesla"],
  byd: ["nio", "xpeng", "zeekr", "xiaomi"],
  nio: ["byd", "xpeng", "zeekr", "li-auto"],
  xpeng: ["byd", "nio", "zeekr", "xiaomi"],
  "li-auto": ["nio", "byd", "xpeng", "zeekr"],
  zeekr: ["byd", "nio", "xpeng", "xiaomi"],
  xiaomi: ["byd", "nio", "xpeng", "zeekr"],
  lucid: ["tesla", "mercedes", "porsche", "bmw"],
  hyundai: ["kia", "genesis", "toyota", "nissan"],
  kia: ["hyundai", "genesis", "volkswagen", "chevrolet"],
  genesis: ["bmw", "mercedes", "audi", "lexus"],
  volvo: ["polestar", "bmw", "audi", "mercedes"],
  volkswagen: ["kia", "hyundai", "chevrolet", "ford"],
  audi: ["bmw", "mercedes", "porsche", "genesis"],
  ford: ["chevrolet", "rivian", "gmc", "tesla"],
  polestar: ["volvo", "bmw", "tesla", "audi"],
  cadillac: ["lincoln", "genesis", "mercedes", "bmw"],
  chevrolet: ["ford", "kia", "volkswagen", "gmc"],
  jaguar: ["porsche", "bmw", "mercedes", "audi"],
  vinfast: ["hyundai", "kia", "nissan", "toyota"],
  honda: ["toyota", "nissan", "hyundai", "subaru"],
  nissan: ["honda", "toyota", "hyundai", "kia"],
  toyota: ["honda", "nissan", "subaru", "hyundai"],
  lexus: ["genesis", "bmw", "mercedes", "acura"],
  subaru: ["toyota", "honda", "nissan", "volkswagen"],
  acura: ["lexus", "genesis", "bmw", "honda"],
  mini: ["fiat", "volkswagen", "bmw", "polestar"],
  fiat: ["mini", "volkswagen", "nissan", "honda"],
  dodge: ["ford", "chevrolet", "gmc", "tesla"],
  gmc: ["chevrolet", "ford", "rivian", "cadillac"],
};

const carsDir = path.join(__dirname, "app", "cars");
let created = 0;
let skipped = 0;

// Generate brand layouts
for (const [slug, brand] of Object.entries(BRANDS)) {
  const brandDir = path.join(carsDir, slug);
  if (!fs.existsSync(brandDir)) { skipped++; continue; }
  
  const layoutPath = path.join(brandDir, "layout.tsx");
  if (fs.existsSync(layoutPath)) { skipped++; continue; }
  
  const modelList = brand.models.join(", ");
  const desc = `Explore ${brand.name} electric vehicles — models, specs, charging info, and maintenance schedules.`;
  
  const content = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${brand.name} Electric Vehicles — Models & Specs",
  description:
    "${desc}",
  openGraph: {
    title: "${brand.name} Electric Vehicles | Healvanna Auto",
    description: "${desc}",
    url: "https://healvanna.com/cars/${slug}",
  },
};

export default function ${brand.name.replace(/[^a-zA-Z]/g, "")}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
`;
  
  fs.writeFileSync(layoutPath, content, "utf-8");
  created++;
  console.log(`Created: ${layoutPath}`);
}

// Generate model layouts
for (const [brandSlug, brand] of Object.entries(BRANDS)) {
  const brandDir = path.join(carsDir, brandSlug);
  if (!fs.existsSync(brandDir)) continue;
  
  // Get model subdirectories
  const entries = fs.readdirSync(brandDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const modelSlug = entry.name;
    const modelDir = path.join(brandDir, modelSlug);
    
    // Check if page.tsx exists
    if (!fs.existsSync(path.join(modelDir, "page.tsx"))) continue;
    
    const layoutPath = path.join(modelDir, "layout.tsx");
    if (fs.existsSync(layoutPath)) { skipped++; continue; }
    
    // Convert slug to display name
    const modelName = modelSlug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    
    const desc = `${brand.name} ${modelName} — range, pricing, charging speed, maintenance schedule, and ownership costs.`;
    
    const content = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${brand.name} ${modelName} — Specs, Range & Pricing",
  description:
    "${desc}",
  openGraph: {
    title: "${brand.name} ${modelName} | Healvanna Auto",
    description: "${desc}",
    url: "https://healvanna.com/cars/${brandSlug}/${modelSlug}",
  },
};

export default function ${brand.name.replace(/[^a-zA-Z]/g, "")}${modelName.replace(/[^a-zA-Z0-9]/g, "")}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
`;
    
    fs.writeFileSync(layoutPath, content, "utf-8");
    created++;
    console.log(`Created: cars/${brandSlug}/${modelSlug}/layout.tsx`);
  }
}

console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
