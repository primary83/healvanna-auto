"use client";

import Link from "next/link";

export default function BestCeramicCoatings2025() {
  const coatings = [
    {
      rank: 1,
      name: "Ceramic Pro 9H",
      rating: 4.9,
      durability: "Lifetime (with maintenance)",
      price: "$1,500 - $5,000+",
      pros: ["Industry-leading hardness", "Lifetime warranty available", "Multi-layer system", "Professional-only application"],
      cons: ["Most expensive option", "Requires certified installer"],
      bestFor: "Ultimate protection seekers",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80"
    },
    {
      rank: 2,
      name: "Gtechniq Crystal Serum Ultra",
      rating: 4.8,
      durability: "9+ years",
      price: "$1,200 - $2,500",
      pros: ["Exceptional chemical resistance", "10H hardness rating", "9-year warranty", "Superior gloss"],
      cons: ["Professional application only", "Higher price point"],
      bestFor: "Luxury vehicle owners",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80"
    },
    {
      rank: 3,
      name: "IGL Coatings Kenzo",
      rating: 4.7,
      durability: "5-7 years",
      price: "$800 - $1,800",
      pros: ["Eco-friendly formula", "Excellent hydrophobic properties", "Good value", "Easy maintenance"],
      cons: ["Less known brand", "Fewer certified installers"],
      bestFor: "Eco-conscious owners",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    },
    {
      rank: 4,
      name: "Modesta BC-05",
      rating: 4.7,
      durability: "5+ years",
      price: "$2,000 - $4,000",
      pros: ["Glass coating technology", "Extreme gloss", "Premium Japanese quality", "Self-healing properties"],
      cons: ["Very expensive", "Limited availability"],
      bestFor: "Show car enthusiasts",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
    },
    {
      rank: 5,
      name: "CarPro Cquartz UK 3.0",
      rating: 4.5,
      durability: "2-3 years",
      price: "$500 - $1,200",
      pros: ["Great entry-level pro coating", "Excellent water beading", "Good chemical resistance", "Affordable"],
      cons: ["Shorter lifespan", "Requires reapplication"],
      bestFor: "Budget-conscious enthusiasts",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars" },
            { name: "CARE", href: "/care" },
            { name: "CRAFT", href: "/craft" },
            { name: "INSIGHTS", href: "/insights" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                item.name === "INSIGHTS"
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Article Header */}
      <section className="pt-32 pb-12 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto">
          <Link href="/insights" className="inline-flex items-center text-[#4a90d9] text-sm mb-8 hover:underline">
            ← Back to Insights
          </Link>
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Guide</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-extralight tracking-tight mb-6 leading-tight">
            Best Ceramic Coatings <span className="italic text-[#4a90d9]">2025</span>
          </h1>
          <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8">
            We tested and researched the top ceramic coating brands to find the best protection for your premium vehicle. From Ceramic Pro to Gtechniq, here's everything you need to know.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#6b7a94]">
            <span>January 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80"
            alt="Ceramic coating application"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="px-12 pb-20">
        <div className="max-w-[900px] mx-auto">
          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Why Ceramic Coating?</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Ceramic coatings have revolutionized car care. Unlike traditional waxes that last weeks, ceramic coatings bond with your paint at a molecular level, providing years of protection against UV rays, chemical stains, bird droppings, and minor scratches.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              For electric vehicle and luxury car owners, ceramic coating isn't just about protection—it's about preserving the value and appearance of a significant investment. The hydrophobic properties mean easier cleaning, and the enhanced gloss makes your vehicle look showroom-fresh for years.
            </p>
          </div>

          {/* Rankings */}
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Our Top 5 Picks for 2025</h2>
          
          <div className="space-y-8">
            {coatings.map((coating) => (
              <div 
                key={coating.rank}
                className="bg-gradient-to-r from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-lg border border-[rgba(74,144,217,0.15)] overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img
                      src={coating.image}
                      alt={coating.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-light text-[#4a90d9]">#{coating.rank}</span>
                      <div>
                        <h3 className="text-xl font-medium">{coating.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
                          <span className="text-[#4a90d9]">★ {coating.rating}</span>
                          <span>•</span>
                          <span>{coating.durability}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-lg font-medium text-[#4a90d9] mb-4">{coating.price}</div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-[10px] tracking-[0.15em] uppercase text-[#4a90d9] mb-2">Pros</div>
                        <ul className="text-sm text-[#a0aec0] space-y-1">
                          {coating.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-400">+</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.15em] uppercase text-[#4a90d9] mb-2">Cons</div>
                        <ul className="text-sm text-[#a0aec0] space-y-1">
                          {coating.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-400">-</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="text-[#6b7a94]">Best for: </span>
                      <span className="text-[#e8edf5]">{coating.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buying Guide */}
          <div className="mt-16">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">How to Choose</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[rgba(15,22,40,0.5)] p-6 rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-[#4a90d9] text-2xl mb-3">💰</div>
                <h3 className="font-medium mb-2">Budget</h3>
                <p className="text-sm text-[#6b7a94]">Entry-level professional coatings start around $500. Premium options with lifetime warranties can exceed $5,000.</p>
              </div>
              <div className="bg-[rgba(15,22,40,0.5)] p-6 rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-[#4a90d9] text-2xl mb-3">⏱️</div>
                <h3 className="font-medium mb-2">Longevity</h3>
                <p className="text-sm text-[#6b7a94]">Consider how long you plan to keep your vehicle. Multi-layer systems offer the best long-term value.</p>
              </div>
              <div className="bg-[rgba(15,22,40,0.5)] p-6 rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-[#4a90d9] text-2xl mb-3">🔧</div>
                <h3 className="font-medium mb-2">Installer</h3>
                <p className="text-sm text-[#6b7a94]">Always choose a certified installer. The application process is as important as the product itself.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[rgba(74,144,217,0.1)] to-transparent rounded-lg border border-[rgba(74,144,217,0.2)]">
            <h3 className="text-xl font-light mb-3">Ready to Protect Your Vehicle?</h3>
            <p className="text-[#6b7a94] mb-6">Find certified ceramic coating installers in your area.</p>
            <Link href="/care" className="inline-block px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">
              Find Detailers Near You
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
