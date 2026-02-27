const fs = require("fs");
const path = require("path");

const COMPETING = {
  "tesla/model-3": [
    { label: "BMW i4", path: "/cars/bmw/i4" },
    { label: "Hyundai Ioniq 6", path: "/cars/hyundai/ioniq-6" },
    { label: "Polestar 2", path: "/cars/polestar/polestar-2" },
  ],
  "tesla/model-y": [
    { label: "Hyundai Ioniq 5", path: "/cars/hyundai/ioniq-5" },
    { label: "Kia EV6", path: "/cars/kia/ev6" },
    { label: "Ford Mustang Mach-E", path: "/cars/ford/mustang-mach-e" },
  ],
  "tesla/model-s": [
    { label: "Lucid Air Touring", path: "/cars/lucid/air-touring" },
    { label: "Mercedes EQS", path: "/cars/mercedes/eqs" },
    { label: "BMW i7", path: "/cars/bmw/i7" },
  ],
  "tesla/model-x": [
    { label: "Rivian R1S", path: "/cars/rivian/r1s" },
    { label: "BMW iX", path: "/cars/bmw/ix" },
    { label: "Mercedes EQS", path: "/cars/mercedes/eqs" },
  ],
  "tesla/cybertruck": [
    { label: "Rivian R1T", path: "/cars/rivian/r1t" },
    { label: "Ford F-150 Lightning", path: "/cars/ford/f-150-lightning" },
    { label: "GMC Hummer EV Pickup", path: "/cars/gmc/hummer-ev-pickup" },
  ],
  "bmw/i4": [
    { label: "Tesla Model 3", path: "/cars/tesla/model-3" },
    { label: "Polestar 2", path: "/cars/polestar/polestar-2" },
    { label: "Mercedes EQE", path: "/cars/mercedes/eqe" },
  ],
  "bmw/i7": [
    { label: "Mercedes EQS", path: "/cars/mercedes/eqs" },
    { label: "Lucid Air GT", path: "/cars/lucid/air-grand-touring" },
    { label: "Tesla Model S", path: "/cars/tesla/model-s" },
  ],
  "bmw/ix": [
    { label: "Mercedes EQS", path: "/cars/mercedes/eqs" },
    { label: "Audi Q8 e-tron", path: "/cars/audi/q8-e-tron" },
    { label: "Tesla Model X", path: "/cars/tesla/model-x" },
  ],
  "hyundai/ioniq-5": [
    { label: "Tesla Model Y", path: "/cars/tesla/model-y" },
    { label: "Kia EV6", path: "/cars/kia/ev6" },
    { label: "VW ID.4", path: "/cars/volkswagen/id4" },
  ],
  "hyundai/ioniq-6": [
    { label: "Tesla Model 3", path: "/cars/tesla/model-3" },
    { label: "BMW i4", path: "/cars/bmw/i4" },
    { label: "Polestar 2", path: "/cars/polestar/polestar-2" },
  ],
  "kia/ev6": [
    { label: "Hyundai Ioniq 5", path: "/cars/hyundai/ioniq-5" },
    { label: "Tesla Model Y", path: "/cars/tesla/model-y" },
    { label: "Ford Mustang Mach-E", path: "/cars/ford/mustang-mach-e" },
  ],
  "kia/ev9": [
    { label: "Hyundai Ioniq 9", path: "/cars/hyundai/ioniq-9" },
    { label: "Rivian R1S", path: "/cars/rivian/r1s" },
    { label: "Tesla Model X", path: "/cars/tesla/model-x" },
  ],
  "ford/mustang-mach-e": [
    { label: "Tesla Model Y", path: "/cars/tesla/model-y" },
    { label: "Hyundai Ioniq 5", path: "/cars/hyundai/ioniq-5" },
    { label: "Kia EV6", path: "/cars/kia/ev6" },
  ],
  "ford/f-150-lightning": [
    { label: "Tesla Cybertruck", path: "/cars/tesla/cybertruck" },
    { label: "Rivian R1T", path: "/cars/rivian/r1t" },
    { label: "Chevrolet Silverado EV", path: "/cars/chevrolet/silverado-ev" },
  ],
  "rivian/r1t": [
    { label: "Tesla Cybertruck", path: "/cars/tesla/cybertruck" },
    { label: "Ford F-150 Lightning", path: "/cars/ford/f-150-lightning" },
    { label: "GMC Hummer EV Pickup", path: "/cars/gmc/hummer-ev-pickup" },
  ],
  "rivian/r1s": [
    { label: "Tesla Model X", path: "/cars/tesla/model-x" },
    { label: "Kia EV9", path: "/cars/kia/ev9" },
    { label: "Cadillac Escalade IQ", path: "/cars/cadillac/escalade-iq" },
  ],
  "mercedes/eqs": [
    { label: "BMW i7", path: "/cars/bmw/i7" },
    { label: "Lucid Air GT", path: "/cars/lucid/air-grand-touring" },
    { label: "Tesla Model S", path: "/cars/tesla/model-s" },
  ],
  "mercedes/eqe": [
    { label: "BMW i4", path: "/cars/bmw/i4" },
    { label: "Tesla Model 3", path: "/cars/tesla/model-3" },
    { label: "Polestar 2", path: "/cars/polestar/polestar-2" },
  ],
  "porsche/taycan": [
    { label: "Tesla Model S", path: "/cars/tesla/model-s" },
    { label: "Lucid Air Sapphire", path: "/cars/lucid/air-sapphire" },
    { label: "BMW i4", path: "/cars/bmw/i4" },
  ],
  "audi/e-tron-gt": [
    { label: "Porsche Taycan", path: "/cars/porsche/taycan" },
    { label: "Tesla Model S", path: "/cars/tesla/model-s" },
    { label: "BMW i7", path: "/cars/bmw/i7" },
  ],
  "audi/q4-e-tron": [
    { label: "VW ID.4", path: "/cars/volkswagen/id4" },
    { label: "Tesla Model Y", path: "/cars/tesla/model-y" },
    { label: "Volvo EX30", path: "/cars/volvo/ex30" },
  ],
  "volkswagen/id4": [
    { label: "Hyundai Ioniq 5", path: "/cars/hyundai/ioniq-5" },
    { label: "Kia EV6", path: "/cars/kia/ev6" },
    { label: "Chevrolet Equinox EV", path: "/cars/chevrolet/equinox-ev" },
  ],
  "volvo/ex30": [
    { label: "Mini Cooper SE", path: "/cars/mini/cooper-se" },
    { label: "Audi Q4 e-tron", path: "/cars/audi/q4-e-tron" },
    { label: "Tesla Model Y", path: "/cars/tesla/model-y" },
  ],
  "polestar/polestar-2": [
    { label: "Tesla Model 3", path: "/cars/tesla/model-3" },
    { label: "BMW i4", path: "/cars/bmw/i4" },
    { label: "Hyundai Ioniq 6", path: "/cars/hyundai/ioniq-6" },
  ],
  "lucid/air-touring": [
    { label: "Mercedes EQS", path: "/cars/mercedes/eqs" },
    { label: "Tesla Model S", path: "/cars/tesla/model-s" },
    { label: "BMW i7", path: "/cars/bmw/i7" },
  ],
  "cadillac/lyriq": [
    { label: "Tesla Model Y", path: "/cars/tesla/model-y" },
    { label: "BMW iX", path: "/cars/bmw/ix" },
    { label: "Genesis GV60", path: "/cars/genesis/gv60" },
  ],
  "chevrolet/equinox-ev": [
    { label: "VW ID.4", path: "/cars/volkswagen/id4" },
    { label: "Hyundai Ioniq 5", path: "/cars/hyundai/ioniq-5" },
    { label: "Kia EV6", path: "/cars/kia/ev6" },
  ],
  "genesis/gv60": [
    { label: "BMW iX", path: "/cars/bmw/ix" },
    { label: "Cadillac LYRIQ", path: "/cars/cadillac/lyriq" },
    { label: "Lexus RZ 450e", path: "/cars/lexus/rz-450e" },
  ],
};

const carsDir = path.join(__dirname, "app", "cars");
let updated = 0;

for (const [modelPath, competitors] of Object.entries(COMPETING)) {
  const pagePath = path.join(carsDir, modelPath, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, "utf-8");
  if (content.includes("Compare With") || content.includes("Competing Models")) continue;

  const brandSlug = modelPath.split("/")[0];
  const brandName = brandSlug.charAt(0).toUpperCase() + brandSlug.slice(1);

  const links = competitors.map(c =>
    `              <Link href="${c.path}" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">\n                <div className="text-white font-medium text-sm">${c.label}</div>\n                <div className="text-emerald-400 text-xs mt-1">Compare \u2192</div>\n              </Link>`
  );

  const section = `\n      {/* Compare With */}\n      <section className="px-4 pb-12">\n        <div className="max-w-7xl mx-auto">\n          <h2 className="text-lg font-semibold text-white mb-4">Compare With Competitors</h2>\n          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">\n${links.join("\n")}\n          </div>\n          <div className="mt-4">\n            <Link href="/cars/${brandSlug}" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">\n              \u2190 All ${brandName} Models\n            </Link>\n          </div>\n        </div>\n      </section>\n`;

  // Insert before footer or </main>
  const footerIdx = content.lastIndexOf("<footer");
  if (footerIdx !== -1) {
    content = content.slice(0, footerIdx) + section + "\n      " + content.slice(footerIdx);
  } else {
    const mainIdx = content.lastIndexOf("</main>");
    if (mainIdx !== -1) {
      content = content.slice(0, mainIdx) + section + "\n" + content.slice(mainIdx);
    } else {
      continue;
    }
  }

  fs.writeFileSync(pagePath, content, "utf-8");
  updated++;
  console.log("Updated: cars/" + modelPath + "/page.tsx");
}

console.log("\nDone! Updated " + updated + " model pages with competitor links");
