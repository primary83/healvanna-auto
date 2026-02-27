const fs = require("fs");
const path = require("path");

// Brand data for ItemList schemas
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

const carsDir = path.join(__dirname, "app", "cars");
let updated = 0;

// Add ItemList structured data to brand layout.tsx files
for (const [slug, brand] of Object.entries(BRANDS)) {
  const layoutPath = path.join(carsDir, slug, "layout.tsx");
  if (!fs.existsSync(layoutPath)) continue;

  const content = fs.readFileSync(layoutPath, "utf-8");
  // Skip if already has StructuredData
  if (content.includes("StructuredData")) continue;

  // Build ItemList JSON-LD
  const items = brand.models.map((model, i) => {
    const modelSlug = model.toLowerCase().replace(/[\s.]+/g, "-").replace(/[^a-z0-9-]/g, "");
    return `      {
        "@type": "ListItem",
        position: ${i + 1},
        name: "${brand.name} ${model}",
        url: "https://healvanna.com/cars/${slug}/${modelSlug}"
      }`;
  });

  const jsonLd = `{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "${brand.name} Electric Vehicles",
    numberOfItems: ${brand.models.length},
    itemListElement: [
${items.join(",\n")}
    ]
  }`;

  // Rewrite the layout to include StructuredData
  const funcName = content.match(/export default function (\w+)/)?.[1] || "BrandLayout";
  const newContent = `import type { Metadata } from "next";
import StructuredData from "../../components/StructuredData";

${content.split("\n").filter(l => !l.startsWith("import")).join("\n").trim()}
`.replace(
    `export default function ${funcName}`,
    `export default function ${funcName}`
  ).replace(
    "return children;",
    `return (
    <>
      <StructuredData data={${jsonLd}} />
      {children}
    </>
  );`
  );

  fs.writeFileSync(layoutPath, newContent, "utf-8");
  updated++;
}

// Add Product structured data to model layout.tsx files
for (const [brandSlug, brand] of Object.entries(BRANDS)) {
  const brandDir = path.join(carsDir, brandSlug);
  if (!fs.existsSync(brandDir)) continue;

  const entries = fs.readdirSync(brandDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const modelSlug = entry.name;
    const layoutPath = path.join(brandDir, modelSlug, "layout.tsx");
    if (!fs.existsSync(layoutPath)) continue;

    const content = fs.readFileSync(layoutPath, "utf-8");
    if (content.includes("StructuredData")) continue;

    const modelName = modelSlug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const jsonLd = `{
    "@context": "https://schema.org",
    "@type": "Product",
    name: "${brand.name} ${modelName}",
    brand: {
      "@type": "Brand",
      name: "${brand.name}"
    },
    description: "${brand.name} ${modelName} electric vehicle — specs, range, pricing, and ownership details.",
    url: "https://healvanna.com/cars/${brandSlug}/${modelSlug}",
    category: "Electric Vehicle"
  }`;

    const funcName = content.match(/export default function (\w+)/)?.[1] || "ModelLayout";
    const newContent = `import type { Metadata } from "next";
import StructuredData from "../../../components/StructuredData";

${content.split("\n").filter(l => !l.startsWith("import")).join("\n").trim()}
`.replace(
      "return children;",
      `return (
    <>
      <StructuredData data={${jsonLd}} />
      {children}
    </>
  );`
    );

    fs.writeFileSync(layoutPath, newContent, "utf-8");
    updated++;
  }
}

console.log(`Updated ${updated} layout files with structured data`);
