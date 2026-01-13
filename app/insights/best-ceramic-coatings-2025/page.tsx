"use client";

import Link from "next/link";

export default function TeslaVsLucidVsRivian() {
  const vehicles = [
    {
      brand: "Tesla",
      model: "Model S Plaid",
      price: "$89,990",
      range: "396 miles",
      acceleration: "1.99s 0-60",
      charging: "Supercharger Network (15,000+)",
      interior: "Minimalist, 17\" touchscreen, yoke steering",
      pros: ["Fastest acceleration", "Best charging network", "Most software updates", "Highest resale value"],
      cons: ["Build quality inconsistent", "No CarPlay/Android Auto", "Polarizing interior design"],
      verdict: "Best for tech enthusiasts and performance seekers",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      score: 9.2
    },
    {
      brand: "Lucid",
      model: "Air Grand Touring",
      price: "$109,900",
      range: "516 miles",
      acceleration: "3.0s 0-60",
      charging: "900V architecture, fastest charging",
      interior: "Ultra-luxury, Glass Canopy roof, 34\" curved display",
      pros: ["Longest range by far", "Most luxurious interior", "Fastest charging speed", "Incredible efficiency"],
      cons: ["Smaller charging network", "New company (reliability unknown)", "Higher starting price"],
      verdict: "Best for luxury and range-focused buyers",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
      score: 9.0
    },
    {
      brand: "Rivian",
      model: "R1S",
      price: "$78,000",
      range: "352 miles",
      acceleration: "3.0s 0-60",
      charging: "Rivian Adventure Network + adapters",
      interior: "Adventure-ready, sustainable materials, 3-row seating",
      pros: ["Only 3-row luxury EV SUV", "Off-road capability", "Great value", "Practical cargo space"],
      cons: ["Smaller company", "Limited service centers", "Lower range than competitors"],
      verdict: "Best for families and outdoor enthusiasts",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      score: 8.8
    }
  ];

  const comparisonCategories = [
    { category: "Range", tesla: "396 mi", lucid: "516 mi", rivian: "352 mi", winner: "Lucid" },
    { category: "0-60 mph", tesla: "1.99s", lucid: "3.0s", rivian: "3.0s", winner: "Tesla" },
    { category: "Starting Price", tesla: "$89,990", lucid: "$109,900", rivian: "$78,000", winner: "Rivian" },
    { category: "Charging Network", tesla: "15,000+", lucid: "Growing", rivian: "Growing", winner: "Tesla" },
    { category: "Interior Luxury", tesla: "Good", lucid: "Excellent", rivian: "Great", winner: "Lucid" },
    { category: "Cargo Space", tesla: "28 cu ft", lucid: "32 cu ft", rivian: "104 cu ft", winner: "Rivian" },
    { category: "Off-Road", tesla: "No", lucid: "No", rivian: "Yes", winner: "Rivian" },
    { category: "Resale Value", tesla: "Excellent", lucid: "TBD", rivian: "Good", winner: "Tesla" },
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
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Comparison</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-extralight tracking-tight mb-6 leading-tight">
            Tesla vs Lucid vs Rivian: <span className="italic text-[#4a90d9]">The Ultimate Showdown</span>
          </h1>
          <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8">
            The American EV market has three clear leaders. We compare performance, luxury, range, and value to help you decide which premium electric vehicle is right for you.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#6b7a94]">
            <span>January 2025</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* Hero Image Grid */}
      <section className="px-12 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-3 gap-4 h-[300px]">
            {vehicles.map((v) => (
              <div key={v.brand} className="relative overflow-hidden rounded-lg group">
                <img src={v.image} alt={v.brand} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-xl font-medium">{v.brand}</div>
                  <div className="text-sm text-[#6b7a94]">{v.model}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="px-12 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl font-light mb-8">Quick Comparison</h2>
          <div className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(74,144,217,0.15)]">
                  <th className="text-left p-4 text-[11px] tracking-[0.15em] uppercase text-[#6b7a94]">Category</th>
                  <th className="text-center p-4 text-[11px] tracking-[0.15em] uppercase text-[#6b7a94]">Tesla</th>
                  <th className="text-center p-4 text-[11px] tracking-[0.15em] uppercase text-[#6b7a94]">Lucid</th>
                  <th className="text-center p-4 text-[11px] tracking-[0.15em] uppercase text-[#6b7a94]">Rivian</th>
                  <th className="text-center p-4 text-[11px] tracking-[0.15em] uppercase text-[#4a90d9]">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((row, i) => (
                  <tr key={row.category} className={i !== comparisonCategories.length - 1 ? "border-b border-[rgba(74,144,217,0.1)]" : ""}>
                    <td className="p-4 text-[14px] font-medium">{row.category}</td>
                    <td className={`p-4 text-[14px] text-center ${row.winner === "Tesla" ? "text-[#4a90d9]" : "text-[#6b7a94]"}`}>{row.tesla}</td>
                    <td className={`p-4 text-[14px] text-center ${row.winner === "Lucid" ? "text-[#4a90d9]" : "text-[#6b7a94]"}`}>{row.lucid}</td>
                    <td className={`p-4 text-[14px] text-center ${row.winner === "Rivian" ? "text-[#4a90d9]" : "text-[#6b7a94]"}`}>{row.rivian}</td>
                    <td className="p-4 text-[14px] text-center text-[#4a90d9] font-medium">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="px-12 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl font-light mb-8">In-Depth Analysis</h2>
          
          <div className="space-y-12">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.brand} className="bg-gradient-to-r from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-lg border border-[rgba(74,144,217,0.15)] overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 h-64 lg:h-auto">
                    <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:w-3/5 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-light">{vehicle.brand} <span className="text-[#4a90d9]">{vehicle.model}</span></h3>
                        <div className="text-lg text-[#6b7a94]">{vehicle.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-light text-[#4a90d9]">{vehicle.score}</div>
                        <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94]">Score</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-[rgba(74,144,217,0.1)]">
                      <div>
                        <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">Range</div>
                        <div className="text-[#e8edf5]">{vehicle.range}</div>
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">0-60 mph</div>
                        <div className="text-[#e8edf5]">{vehicle.acceleration}</div>
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">Charging</div>
                        <div className="text-[#e8edf5] text-sm">{vehicle.charging.split(",")[0]}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-[10px] tracking-[0.15em] uppercase text-green-400 mb-2">Strengths</div>
                        <ul className="text-sm text-[#a0aec0] space-y-1">
                          {vehicle.pros.map((pro, i) => (
                            <li key={i}>+ {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[10px] tracking-[0.15em] uppercase text-red-400 mb-2">Weaknesses</div>
                        <ul className="text-sm text-[#a0aec0] space-y-1">
                          {vehicle.cons.map((con, i) => (
                            <li key={i}>- {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-[rgba(74,144,217,0.1)] p-4 rounded">
                      <div className="text-[10px] tracking-[0.15em] uppercase text-[#4a90d9] mb-1">Our Verdict</div>
                      <div className="text-[#e8edf5]">{vehicle.verdict}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="px-12 pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-gradient-to-r from-[rgba(74,144,217,0.15)] to-[rgba(74,144,217,0.05)] p-8 rounded-lg border border-[rgba(74,144,217,0.2)]">
            <h2 className="text-2xl font-light mb-6">The Bottom Line</h2>
            <div className="space-y-4 text-[#a0aec0]">
              <p><strong className="text-[#e8edf5]">Choose Tesla</strong> if you want the most established EV with the best charging network, fastest acceleration, and highest resale value. The Model S Plaid is unmatched in performance.</p>
              <p><strong className="text-[#e8edf5]">Choose Lucid</strong> if luxury and range are your priorities. The Air offers the most refined interior and over 500 miles of range—perfect for those who want the best of the best.</p>
              <p><strong className="text-[#e8edf5]">Choose Rivian</strong> if you need space, versatility, and adventure capability. The R1S is the only premium 3-row electric SUV that can handle both school runs and off-road trails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 pb-20">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-xl font-light mb-4">Ready to Explore?</h3>
          <p className="text-[#6b7a94] mb-6">View our complete collection of premium electric vehicles.</p>
          <Link href="/cars" className="inline-block px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">
            Browse All Vehicles
          </Link>
        </div>
      </section>

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
