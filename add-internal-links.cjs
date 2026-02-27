const fs = require("fs");
const path = require("path");

const BRANDS = {
  tesla: { name: "Tesla" },
  rivian: { name: "Rivian" },
  bmw: { name: "BMW" },
  mercedes: { name: "Mercedes" },
  porsche: { name: "Porsche" },
  byd: { name: "BYD" },
  nio: { name: "NIO" },
  xpeng: { name: "XPeng" },
  "li-auto": { name: "Li Auto" },
  zeekr: { name: "Zeekr" },
  xiaomi: { name: "Xiaomi" },
  lucid: { name: "Lucid" },
  hyundai: { name: "Hyundai" },
  kia: { name: "Kia" },
  genesis: { name: "Genesis" },
  volvo: { name: "Volvo" },
  volkswagen: { name: "Volkswagen" },
  audi: { name: "Audi" },
  ford: { name: "Ford" },
  polestar: { name: "Polestar" },
  cadillac: { name: "Cadillac" },
  chevrolet: { name: "Chevrolet" },
  jaguar: { name: "Jaguar" },
  vinfast: { name: "VinFast" },
  honda: { name: "Honda" },
  nissan: { name: "Nissan" },
  toyota: { name: "Toyota" },
  lexus: { name: "Lexus" },
  subaru: { name: "Subaru" },
  acura: { name: "Acura" },
  mini: { name: "Mini" },
  fiat: { name: "Fiat" },
  dodge: { name: "Dodge" },
  gmc: { name: "GMC" },
};

const RELATED = {
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
  cadillac: ["genesis", "mercedes", "bmw", "lincoln"],
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
let updated = 0;

for (const [slug, brand] of Object.entries(BRANDS)) {
  const pagePath = path.join(carsDir, slug, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Skip if already has "You Might Also Like" or "Related Brands"
  if (content.includes("You Might Also Like") || content.includes("Related Brands") || content.includes("Also Explore")) continue;

  const related = (RELATED[slug] || []).filter(r => BRANDS[r]).slice(0, 4);
  if (related.length === 0) continue;

  // Build the related brands JSX
  const relatedLinks = related.map(r => {
    const name = BRANDS[r]?.name || r;
    return `              <Link href="/cars/${r}" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">${name}</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>`;
  });

  const relatedSection = `
      {/* You Might Also Like */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
${relatedLinks.join("\n")}
          </div>
        </div>
      </section>
`;

  // Insert before the <footer> tag
  const footerIdx = content.lastIndexOf("<footer");
  if (footerIdx === -1) {
    // Try before </main>
    const mainIdx = content.lastIndexOf("</main>");
    if (mainIdx === -1) continue;
    content = content.slice(0, mainIdx) + relatedSection + "\n" + content.slice(mainIdx);
  } else {
    content = content.slice(0, footerIdx) + relatedSection + "\n      " + content.slice(footerIdx);
  }

  fs.writeFileSync(pagePath, content, "utf-8");
  updated++;
  console.log(`Updated: cars/${slug}/page.tsx`);
}

console.log(`\nDone! Updated ${updated} brand pages with related brands`);
