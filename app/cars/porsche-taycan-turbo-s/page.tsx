"use client";

import Link from "next/link";

export default function PorscheTaycanTurboS() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Vehicles", href: "/vehicles" },
    { name: "Care", href: "/care" },
    { name: "Insights", href: "/insights" },
  ];

  const specs = {
    performance: [
      { label: "Horsepower", value: "938 hp" },
      { label: "0-60 mph", value: "2.3 seconds" },
      { label: "Top Speed", value: "161 mph" },
      { label: "Quarter Mile", value: "10.5 seconds" },
      { label: "Motors", value: "Dual Motor AWD" },
      { label: "Torque", value: "849 lb-ft" },
    ],
    range: [
      { label: "EPA Range", value: "280 miles" },
      { label: "Battery", value: "105 kWh" },
      { label: "Efficiency", value: "79-89 MPGe" },
      { label: "Fast Charging", value: "170 mi in 15 min" },
      { label: "Max Charge Rate", value: "320 kW" },
      { label: "Charge Port", value: "CCS / J1772" },
    ],
    dimensions: [
      { label: "Length", value: '195.4"' },
      { label: "Width", value: '77.4"' },
      { label: "Height", value: '54.3"' },
      { label: "Wheelbase", value: '114.2"' },
      { label: "Weight", value: "5,081 lbs" },
      { label: "Cargo Space", value: "14.3 cu ft" },
    ],
  };

  const features = [
    { title: "800-Volt Architecture", description: "Industry-leading 800-volt electrical system enables ultra-fast 320kW charging and superior power delivery for track-ready performance.", icon: "⚡" },
    { title: "Porsche Active Ride", description: "Revolutionary active suspension system keeps the body perfectly level during acceleration, braking, and cornering for unmatched dynamics.", icon: "🎯" },
    { title: "Two-Speed Transmission", description: "Unique rear-axle two-speed gearbox provides explosive acceleration off the line and efficient high-speed cruising.", icon: "⚙️" },
    { title: "Porsche Electric Sport Sound", description: "Signature synthesized sound amplifies the driving experience both inside and outside the vehicle, standard on Turbo S.", icon: "🔊" },
    { title: "14.1\" Curved Display", description: "Driver-focused curved instrument cluster with customizable layouts, plus 10.9\" center touchscreen with Apple CarPlay.", icon: "🖥️" },
    { title: "PCCB Ceramic Brakes", description: "Optional Porsche Ceramic Composite Brakes offer fade-free stopping power and reduced unsprung weight for track performance.", icon: "🛑" },
  ];

  const pros = [
    "True Porsche driving dynamics in EV form",
    "Incredible 2.3-second 0-60 acceleration",
    "Industry-leading 320kW fast charging",
    "Apple CarPlay and Android Auto support",
    "Exceptional build quality and fit/finish",
    "Available Porsche Active Ride suspension",
    "Strong brand prestige and resale value",
    "Extensive dealer network for service"
  ];

  const cons = [
    "Lower range than competitors (280 miles)",
    "Premium pricing ($185,000+ MSRP)",
    "Expensive options add up quickly",
    "Smaller cargo space than rivals",
    "Rear seat space is tight for adults",
    "No frunk (front trunk) storage"
  ];

  const relatedArticles = [
    { title: "Tesla vs Lucid vs Rivian: Which Premium EV Wins?", category: "Comparison", link: "/insights/tesla-vs-lucid-vs-rivian", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80" },
    { title: "The Complete EV Maintenance Guide", category: "Guide", link: "/insights/ev-maintenance-guide", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { title: "Best Ceramic Coatings 2025", category: "Guide", link: "/insights/best-ceramic-coatings-2025", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-[rgba(10,15,26,0.95)] backdrop-blur-md border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-xl tracking-wider font-extralight">Healvanna<span className="text-[#4a90d9]">.</span></Link>
        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={`text-[13px] tracking-wide transition-all duration-300 pb-1 ${item.name === "Vehicles" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] via-[#0a0f1a] to-[#0a0f1a]" />
        <div className="relative max-w-[1200px] mx-auto px-12 pt-8">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link><span>/</span>
            <Link href="/cars" className="hover:text-[#4a90d9] transition-colors">Cars</Link><span>/</span>
            <span className="text-[#e8edf5]">Porsche Taycan Turbo S</span>
          </div>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full mb-4">Electric GT</div>
            <h1 className="text-[clamp(40px,5vw,60px)] font-extralight tracking-tight mb-2 leading-tight">Porsche Taycan</h1>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-6 leading-tight text-[#4a90d9] italic">Turbo S</h2>
            <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8 max-w-[500px]">The ultimate expression of Porsche E-Performance. With 938 horsepower, 800-volt architecture, and signature Porsche handling, the Taycan Turbo S proves electric cars can be true sports cars.</p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-[rgba(15,22,40,0.6)] rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-2xl font-light text-[#4a90d9] mb-1">2.3s</div>
                <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">0-60 mph</div>
              </div>
              <div className="text-center p-4 bg-[rgba(15,22,40,0.6)] rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-2xl font-light text-[#4a90d9] mb-1">280</div>
                <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Miles Range</div>
              </div>
              <div className="text-center p-4 bg-[rgba(15,22,40,0.6)] rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-2xl font-light text-[#4a90d9] mb-1">938</div>
                <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Horsepower</div>
              </div>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-light">$185,000</span>
              <span className="text-[#6b7a94] text-sm">Starting MSRP</span>
            </div>

            <div className="flex gap-4">
              <a href="https://www.porsche.com/usa/models/taycan/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Configure on Porsche.com</a>
              <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Find Detailers Near You</Link>
            </div>
          </div>

          <div className="relative">
            <img src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80" alt="Porsche Taycan Turbo S" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80" alt="Porsche Taycan Exterior" className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=400&q=80" alt="Porsche Taycan Interior" className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=400&q=80" alt="Porsche Taycan Rear" className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&q=80" alt="Porsche Taycan Driving" className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Technical Data</div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight tracking-tight">Full Specifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(specs).map(([category, items]) => (
              <div key={category} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-8 border border-[rgba(74,144,217,0.1)]">
                <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category === 'performance' ? '⚡' : category === 'range' ? '🔋' : '📐'}</span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="space-y-4">
                  {items.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-[rgba(74,144,217,0.1)]">
                      <span className="text-[#6b7a94] text-sm">{spec.label}</span>
                      <span className="text-[#e8edf5] font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">What's Included</div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight tracking-tight">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-[rgba(15,22,40,0.3)] rounded-lg border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-[14px] text-[#6b7a94] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Honest Assessment</div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight tracking-tight">Pros & Cons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[rgba(34,197,94,0.05)] rounded-xl p-8 border border-[rgba(34,197,94,0.2)]">
              <h3 className="text-xl font-medium mb-6 text-[#22c55e] flex items-center gap-3"><span>✓</span> What We Love</h3>
              <ul className="space-y-3">
                {pros.map((pro, index) => (<li key={index} className="flex items-start gap-3 text-[15px] text-[#a0aec0]"><span className="text-[#22c55e] mt-1">•</span>{pro}</li>))}
              </ul>
            </div>
            <div className="bg-[rgba(239,68,68,0.05)] rounded-xl p-8 border border-[rgba(239,68,68,0.2)]">
              <h3 className="text-xl font-medium mb-6 text-[#ef4444] flex items-center gap-3"><span>✗</span> Things to Consider</h3>
              <ul className="space-y-3">
                {cons.map((con, index) => (<li key={index} className="flex items-start gap-3 text-[15px] text-[#a0aec0]"><span className="text-[#ef4444] mt-1">•</span>{con}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Learn More</div>
            <h2 className="text-[clamp(28px,3vw,36px)] font-extralight tracking-tight">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.link} className="bg-[rgba(15,22,40,0.5)] rounded-lg overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 group">
                <div className="h-40 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2">{article.category}</div>
                  <h3 className="text-[15px] font-medium leading-snug">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="grid grid-cols-4 gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Vehicles", links: [{ name: "Browse All", href: "/cars" }, { name: "Electric", href: "/cars" }, { name: "Luxury", href: "/cars" }]},
            { title: "Care", links: [{ name: "Find Services", href: "/care" }, { name: "Detailing", href: "/care" }, { name: "Body Shops", href: "/craft" }]},
            { title: "Insights", links: [{ name: "All Articles", href: "/insights" }, { name: "EV Guides", href: "/insights/category/electric-vehicles" }, { name: "Comparisons", href: "/insights/category/market-insights" }]},
            { title: "Company", links: [{ name: "About", href: "/about" }, { name: "Contact", href: "/contact" }, { name: "For Business", href: "#" }]},
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.links.map((link) => (<Link key={link.name} href={link.href} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            {[{ name: "Privacy", href: "/privacy" }, { name: "Terms", href: "/terms" }, { name: "Cookies", href: "#" }].map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
