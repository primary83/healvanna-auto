"use client";

import Link from "next/link";

export default function TeslaModelSPlaid() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Vehicles", href: "/vehicles" },
    { name: "Care", href: "/care" },
    { name: "Insights", href: "/insights" },
  ];

  const specs = {
    performance: [
      { label: "Horsepower", value: "1,020 hp" },
      { label: "0-60 mph", value: "1.99 seconds" },
      { label: "Top Speed", value: "200 mph" },
      { label: "Quarter Mile", value: "9.23 seconds" },
      { label: "Motors", value: "Tri-Motor AWD" },
      { label: "Torque", value: "1,050 lb-ft" },
    ],
    range: [
      { label: "EPA Range", value: "396 miles" },
      { label: "Battery", value: "100 kWh" },
      { label: "Efficiency", value: "97-108 MPGe" },
      { label: "Supercharging", value: "200 mi in 15 min" },
      { label: "Max Charge Rate", value: "250 kW" },
      { label: "Charge Port", value: "Tesla / NACS" },
    ],
    dimensions: [
      { label: "Length", value: '196.0"' },
      { label: "Width", value: '77.3"' },
      { label: "Height", value: '56.9"' },
      { label: "Wheelbase", value: '116.5"' },
      { label: "Weight", value: "4,766 lbs" },
      { label: "Cargo Space", value: "28 cu ft" },
    ],
  };

  const features = [
    {
      title: "Tri-Motor All-Wheel Drive",
      description: "Three high-performance motors deliver instant torque to all four wheels, providing unmatched acceleration and control in any condition.",
      icon: "⚡"
    },
    {
      title: "17\" Cinematic Display",
      description: "A stunning center touchscreen with 2200x1300 resolution, featuring gaming capabilities, streaming services, and Tesla's intuitive interface.",
      icon: "🖥️"
    },
    {
      title: "Autopilot & FSD Ready",
      description: "Advanced driver assistance with automatic steering, lane changes, and parking. Full Self-Driving capability available as an upgrade.",
      icon: "🤖"
    },
    {
      title: "Premium Audio System",
      description: "22-speaker, 960-watt audio system with active noise cancellation delivers immersive, studio-quality sound throughout the cabin.",
      icon: "🔊"
    },
    {
      title: "Glass Roof",
      description: "Expansive all-glass roof provides a spacious, open feel and UV/infrared protection for a comfortable interior temperature.",
      icon: "☀️"
    },
    {
      title: "Supercharger Network",
      description: "Access to Tesla's extensive Supercharger network with up to 250kW charging. Add up to 200 miles of range in just 15 minutes.",
      icon: "🔋"
    },
  ];

  const pros = [
    "Fastest accelerating production sedan ever made",
    "Industry-leading 396-mile range",
    "Access to Tesla Supercharger network",
    "Over-the-air software updates",
    "Spacious interior with hatchback practicality",
    "Advanced Autopilot capabilities",
    "Strong resale value",
    "Low maintenance costs"
  ];

  const cons = [
    "Premium price tag ($89,990+ MSRP)",
    "No Apple CarPlay or Android Auto",
    "Build quality inconsistencies reported",
    "Yoke steering wheel takes adjustment",
    "Range decreases significantly at high speeds",
    "Service center availability varies by region"
  ];

  const relatedArticles = [
    {
      title: "Tesla vs Lucid vs Rivian: Which Premium EV Wins?",
      category: "Comparison",
      link: "/insights/tesla-vs-lucid-vs-rivian",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80"
    },
    {
      title: "The Complete EV Maintenance Guide",
      category: "Guide",
      link: "/insights/ev-maintenance-guide",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
    },
    {
      title: "Best Ceramic Coatings 2025",
      category: "Guide",
      link: "/insights/best-ceramic-coatings-2025",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-[rgba(10,15,26,0.95)] backdrop-blur-md border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-xl tracking-wider font-extralight">
          Healvanna<span className="text-[#4a90d9]">.</span>
        </Link>
        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[13px] tracking-wide transition-all duration-300 pb-1 ${
                item.name === "Vehicles"
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-0 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] via-[#0a0f1a] to-[#0a0f1a]" />
        
        {/* Breadcrumb */}
        <div className="relative max-w-[1200px] mx-auto px-12 pt-8">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cars" className="hover:text-[#4a90d9] transition-colors">Cars</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">Tesla Model S Plaid</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-[1200px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full mb-4">
              Electric Sedan
            </div>
            <h1 className="text-[clamp(40px,5vw,60px)] font-extralight tracking-tight mb-2 leading-tight">
              Tesla Model S
            </h1>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-6 leading-tight text-[#4a90d9] italic">
              Plaid
            </h2>
            <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8 max-w-[500px]">
              The quickest accelerating production car ever made. With 1,020 horsepower, tri-motor all-wheel drive, and a 1.99-second 0-60 time, the Model S Plaid redefines what's possible in an electric sedan.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-[rgba(15,22,40,0.6)] rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-2xl font-light text-[#4a90d9] mb-1">1.99s</div>
                <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">0-60 mph</div>
              </div>
              <div className="text-center p-4 bg-[rgba(15,22,40,0.6)] rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-2xl font-light text-[#4a90d9] mb-1">396</div>
                <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Miles Range</div>
              </div>
              <div className="text-center p-4 bg-[rgba(15,22,40,0.6)] rounded-lg border border-[rgba(74,144,217,0.1)]">
                <div className="text-2xl font-light text-[#4a90d9] mb-1">1,020</div>
                <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Horsepower</div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-light">$89,990</span>
              <span className="text-[#6b7a94] text-sm">Starting MSRP</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a 
                href="https://www.tesla.com/models" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded"
              >
                Configure on Tesla.com
              </a>
              <Link 
                href="/care"
                className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded"
              >
                Find Detailers Near You
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80"
              alt="Tesla Model S Plaid"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80"
              alt="Tesla Model S Plaid Exterior"
              className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80"
              alt="Tesla Model S Plaid Interior"
              className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80"
              alt="Tesla Model S Plaid Charging"
              className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80"
              alt="Tesla Model S Plaid Driving"
              className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            />
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
            {/* Performance */}
            <div className="bg-[rgba(15,22,40,0.5)] rounded-xl p-8 border border-[rgba(74,144,217,0.1)]">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
                <span className="text-2xl">⚡</span> Performance
              </h3>
              <div className="space-y-4">
                {specs.performance.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[rgba(74,144,217,0.1)]">
                    <span className="text-[#6b7a94] text-sm">{spec.label}</span>
                    <span className="text-[#e8edf5] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Range & Charging */}
            <div className="bg-[rgba(15,22,40,0.5)] rounded-xl p-8 border border-[rgba(74,144,217,0.1)]">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
                <span className="text-2xl">🔋</span> Range & Charging
              </h3>
              <div className="space-y-4">
                {specs.range.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[rgba(74,144,217,0.1)]">
                    <span className="text-[#6b7a94] text-sm">{spec.label}</span>
                    <span className="text-[#e8edf5] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-[rgba(15,22,40,0.5)] rounded-xl p-8 border border-[rgba(74,144,217,0.1)]">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-3">
                <span className="text-2xl">📐</span> Dimensions
              </h3>
              <div className="space-y-4">
                {specs.dimensions.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[rgba(74,144,217,0.1)]">
                    <span className="text-[#6b7a94] text-sm">{spec.label}</span>
                    <span className="text-[#e8edf5] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
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
            {/* Pros */}
            <div className="bg-[rgba(34,197,94,0.05)] rounded-xl p-8 border border-[rgba(34,197,94,0.2)]">
              <h3 className="text-xl font-medium mb-6 text-[#22c55e] flex items-center gap-3">
                <span>✓</span> What We Love
              </h3>
              <ul className="space-y-3">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-[#a0aec0]">
                    <span className="text-[#22c55e] mt-1">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-[rgba(239,68,68,0.05)] rounded-xl p-8 border border-[rgba(239,68,68,0.2)]">
              <h3 className="text-xl font-medium mb-6 text-[#ef4444] flex items-center gap-3">
                <span>✗</span> Things to Consider
              </h3>
              <ul className="space-y-3">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-[#a0aec0]">
                    <span className="text-[#ef4444] mt-1">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Investment</div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight tracking-tight">Pricing & Options</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {/* Base Model S */}
            <div className="bg-[rgba(15,22,40,0.5)] rounded-xl p-8 border border-[rgba(74,144,217,0.1)]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2">Alternative</div>
              <h3 className="text-xl font-medium mb-2">Model S AWD</h3>
              <div className="text-3xl font-light mb-4">$74,990</div>
              <ul className="space-y-2 text-[14px] text-[#6b7a94] mb-6">
                <li>• 670 horsepower</li>
                <li>• 402 miles range</li>
                <li>• 3.1s 0-60 mph</li>
                <li>• Dual Motor AWD</li>
              </ul>
              <div className="text-[12px] text-[#6b7a94]">Best value for most buyers</div>
            </div>

            {/* Plaid */}
            <div className="bg-[rgba(74,144,217,0.1)] rounded-xl p-8 border border-[#4a90d9] relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#4a90d9] text-[#0a0f1a] text-[10px] font-medium uppercase tracking-wider rounded-full">
                Featured
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2">Performance</div>
              <h3 className="text-xl font-medium mb-2">Model S Plaid</h3>
              <div className="text-3xl font-light mb-4">$89,990</div>
              <ul className="space-y-2 text-[14px] text-[#a0aec0] mb-6">
                <li>• 1,020 horsepower</li>
                <li>• 396 miles range</li>
                <li>• 1.99s 0-60 mph</li>
                <li>• Tri Motor AWD</li>
                <li>• 200 mph top speed</li>
              </ul>
              <div className="text-[12px] text-[#4a90d9]">Ultimate performance</div>
            </div>
          </div>

          <div className="text-center mt-8 text-[13px] text-[#6b7a94]">
            Prices shown are base MSRP. Final price varies with options and destination charges. 
            <br />
            Federal tax credits of up to $7,500 may apply. Check <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="text-[#4a90d9] hover:underline">Tesla.com</a> for current pricing.
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Learn More</div>
            <h2 className="text-[clamp(28px,3vw,36px)] font-extralight tracking-tight">Related Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="bg-[rgba(15,22,40,0.5)] rounded-lg overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2">{article.category}</div>
                  <h3 className="text-[15px] font-medium leading-snug">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/insights" 
              className="inline-block px-8 py-3 text-[13px] font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight mb-6">
            Ready to Experience the Model S Plaid?
          </h2>
          <p className="text-[#6b7a94] mb-8 text-[16px] leading-relaxed">
            Configure your dream Tesla or find trusted specialists in your area to keep it in pristine condition.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://www.tesla.com/models/design" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded"
            >
              Build Your Model S
            </a>
            <Link 
              href="/care"
              className="px-10 py-4 text-[13px] font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded"
            >
              Find Care Specialists
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="grid grid-cols-4 gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Vehicles", links: [
              { name: "Browse All", href: "/cars" },
              { name: "Electric", href: "/cars" },
              { name: "Luxury", href: "/cars" }
            ]},
            { title: "Care", links: [
              { name: "Find Services", href: "/care" },
              { name: "Detailing", href: "/care" },
              { name: "Body Shops", href: "/craft" }
            ]},
            { title: "Insights", links: [
              { name: "All Articles", href: "/insights" },
              { name: "EV Guides", href: "/insights/category/electric-vehicles" },
              { name: "Comparisons", href: "/insights/category/market-insights" }
            ]},
            { title: "Company", links: [
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "For Business", href: "#" }
            ]},
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.links.map((link) => (
                <Link key={link.name} href={link.href} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Cookies", href: "#" }
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
