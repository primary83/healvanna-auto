"use client";

import Link from "next/link";

export default function BestCeramicCoatings() {
  const coatings = [
    {
      rank: 1,
      name: "Ceramic Pro 9H",
      brand: "Ceramic Pro",
      rating: 9.5,
      durability: "Lifetime (with maintenance)",
      price: "$1,500 - $5,000",
      pros: ["Hardest coating available (9H)", "Lifetime warranty option", "Extensive dealer network", "Multiple layer system"],
      cons: ["Premium pricing", "Professional installation only", "Requires annual inspections"],
      bestFor: "Owners wanting maximum long-term protection with warranty backing"
    },
    {
      rank: 2,
      name: "Gtechniq Crystal Serum Ultra",
      brand: "Gtechniq",
      rating: 9.3,
      durability: "9+ years",
      price: "$1,800 - $4,500",
      pros: ["Exceptional chemical resistance", "10H hardness rating", "Dual-layer system", "9-year guarantee"],
      cons: ["Limited installer availability", "Higher price point", "Complex application process"],
      bestFor: "Exotic and collector car owners who demand the best"
    },
    {
      rank: 3,
      name: "IGL Kenzo",
      brand: "IGL Coatings",
      rating: 9.1,
      durability: "5-7 years",
      price: "$1,200 - $3,000",
      pros: ["Eco-friendly formulation", "Excellent gloss enhancement", "Good chemical resistance", "Competitive pricing"],
      cons: ["Newer brand in market", "Fewer installers available", "Shorter track record"],
      bestFor: "Environmentally conscious owners wanting premium protection"
    },
    {
      rank: 4,
      name: "Modesta BC-05",
      brand: "Modesta",
      rating: 9.0,
      durability: "5+ years",
      price: "$2,000 - $6,000",
      pros: ["Ultra-premium finish", "Exceptional depth and clarity", "Strong hydrophobic properties", "Elite brand status"],
      cons: ["Very expensive", "Limited availability", "Long curing time"],
      bestFor: "Concours-level show cars and ultra-luxury vehicles"
    },
    {
      rank: 5,
      name: "CarPro Cquartz UK 3.0",
      brand: "CarPro",
      rating: 8.8,
      durability: "2-3 years",
      price: "$800 - $1,500",
      pros: ["Excellent value", "DIY-friendly option available", "Good durability", "Strong community support"],
      cons: ["Shorter lifespan", "Requires more maintenance", "Not as hard as competitors"],
      bestFor: "Enthusiasts wanting quality protection at a reasonable price"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-[rgba(10,15,26,0.95)] backdrop-blur-md border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-xl tracking-wider font-extralight">Healvanna<span className="text-[#4a90d9]">.</span></Link>
        <div className="flex gap-10">
          {[
            { name: "Home", href: "/" },
            { name: "Vehicles", href: "/cars" },
            { name: "Care", href: "/care" },
            { name: "Craft", href: "/craft" },
            { name: "Insights", href: "/insights" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className={`text-[13px] tracking-wide transition-all duration-300 pb-1 ${item.name === "Insights" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link><span>/</span>
            <Link href="/insights" className="hover:text-[#4a90d9] transition-colors">Insights</Link><span>/</span>
            <span className="text-[#e8edf5]">Best Ceramic Coatings 2024</span>
          </div>

          <div className="mb-6">
            <span className="px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full">Guide</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-6 leading-tight">Best Ceramic Coatings 2024</h1>
          <p className="text-xl text-[#6b7a94] mb-8 leading-relaxed">We tested the top ceramic coating brands to find the best protection for your premium vehicle. Here's our comprehensive ranking based on durability, gloss, hydrophobic properties, and value.</p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>By Healvanna Editorial</span>
            <span>•</span>
            <span>Updated January 2024</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80" alt="Ceramic Coating Application" className="w-full h-96 object-cover rounded-lg" />
        </div>
      </section>

      {/* Introduction */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-2xl font-light mb-6 text-[#e8edf5]">Why Ceramic Coating Matters</h2>
            <p className="text-[#6b7a94] leading-relaxed mb-6">
              Ceramic coatings have revolutionized automotive paint protection. Unlike traditional waxes and sealants that last weeks or months, professional ceramic coatings create a semi-permanent bond with your vehicle's paint that can last years with proper maintenance.
            </p>
            <p className="text-[#6b7a94] leading-relaxed mb-6">
              The technology works by creating a nanoscopic layer of protection that is chemically bonded to your paint. This layer provides exceptional hardness (measured on the pencil hardness scale), hydrophobic properties that make water bead and sheet off, and resistance to UV rays, bird droppings, tree sap, and other environmental contaminants.
            </p>
            <p className="text-[#6b7a94] leading-relaxed mb-8">
              For this guide, we evaluated over 20 professional-grade ceramic coatings based on real-world performance data from certified installers, laboratory testing results, warranty coverage, and owner satisfaction surveys.
            </p>
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="px-12 pb-20">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Our Top 5 Ceramic Coatings</h2>
          
          <div className="space-y-8">
            {coatings.map((coating) => (
              <div key={coating.rank} className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#4a90d9] rounded-full flex items-center justify-center text-xl font-bold text-[#0a0f1a]">
                        {coating.rank}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">{coating.name}</h3>
                        <p className="text-[#6b7a94] text-sm">{coating.brand}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-[#4a90d9]">{coating.rating}/10</div>
                      <div className="text-xs text-[#6b7a94]">Overall Score</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[rgba(74,144,217,0.1)] rounded p-3">
                      <div className="text-xs text-[#6b7a94] mb-1">Durability</div>
                      <div className="text-sm font-medium">{coating.durability}</div>
                    </div>
                    <div className="bg-[rgba(74,144,217,0.1)] rounded p-3">
                      <div className="text-xs text-[#6b7a94] mb-1">Price Range</div>
                      <div className="text-sm font-medium">{coating.price}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-[#22c55e] mb-2">✓ Pros</h4>
                      <ul className="space-y-1">
                        {coating.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-[#6b7a94]">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#ef4444] mb-2">✗ Cons</h4>
                      <ul className="space-y-1">
                        {coating.cons.map((con, i) => (
                          <li key={i} className="text-sm text-[#6b7a94]">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[rgba(74,144,217,0.05)] rounded p-4">
                    <span className="text-xs text-[#4a90d9] font-medium">BEST FOR: </span>
                    <span className="text-sm text-[#6b7a94]">{coating.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="px-12 py-20 bg-[#0d1424]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-8">How to Choose the Right Ceramic Coating</h2>
          
          <div className="space-y-6 text-[#6b7a94]">
            <div>
              <h3 className="text-lg font-medium text-[#e8edf5] mb-2">Consider Your Budget</h3>
              <p className="leading-relaxed">Professional ceramic coating installation typically ranges from $500 for entry-level products to $5,000+ for premium multi-layer systems. Factor in the cost of paint correction, which is usually required before coating application.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#e8edf5] mb-2">Evaluate Your Needs</h3>
              <p className="leading-relaxed">Daily drivers in harsh climates may benefit from maximum durability coatings, while garage-kept collector cars might prioritize gloss and depth over extreme hardness.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#e8edf5] mb-2">Research Installers</h3>
              <p className="leading-relaxed">The quality of installation is as important as the product itself. Look for certified installers with documented training, positive reviews, and proper facilities including climate-controlled application bays.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#e8edf5] mb-2">Understand Maintenance Requirements</h3>
              <p className="leading-relaxed">All ceramic coatings require specific maintenance to maintain warranty coverage. This typically includes using pH-neutral soaps, avoiding automatic car washes, and periodic decontamination washes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-20 bg-[#0a0f1a]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-[#6b7a94] mb-8">Browse our directory of verified ceramic coating specialists in your area.</p>
          <Link href="/care" className="inline-block px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Find Ceramic Coating Installers</Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-12 py-20 bg-[#0d1424]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl font-light mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/insights/ev-maintenance-guide" className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] p-6 hover:border-[rgba(74,144,217,0.4)] transition-all">
              <div className="text-xs text-[#4a90d9] mb-2">GUIDE</div>
              <h3 className="text-lg font-medium mb-2">EV Maintenance Guide</h3>
              <p className="text-sm text-[#6b7a94]">Everything you need to know about maintaining your electric vehicle.</p>
            </Link>
            <Link href="/insights/us-evs-vs-chinese-evs" className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] p-6 hover:border-[rgba(74,144,217,0.4)] transition-all">
              <div className="text-xs text-[#4a90d9] mb-2">COMPARISON</div>
              <h3 className="text-lg font-medium mb-2">US EVs vs Chinese EVs</h3>
              <p className="text-sm text-[#6b7a94]">How American and Chinese electric vehicles compare in range, tech, and value.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
