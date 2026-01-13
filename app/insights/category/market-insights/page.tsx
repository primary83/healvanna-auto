"use client";

import Link from "next/link";

export default function MarketInsightsCategory() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Vehicles", href: "/vehicles" },
    { name: "Care", href: "/care" },
    { name: "Insights", href: "/insights" },
  ];

  // This category shows ALL articles as a comprehensive index
  const articles = [
    {
      title: "US EVs vs Chinese EVs: A Complete Comparison",
      category: "Comparison",
      description: "How do American electric vehicles stack up against their Chinese competitors? We analyze performance, price, technology, and value.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      link: "/insights/us-evs-vs-chinese-evs",
      readTime: "10 min read"
    },
    {
      title: "Best Ceramic Coatings 2025: Professional Rankings",
      category: "Guide",
      description: "We tested the top ceramic coating brands to find the best protection for your premium vehicle.",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
      link: "/insights/best-ceramic-coatings-2025",
      readTime: "11 min read"
    },
    {
      title: "Tesla vs Lucid vs Rivian: Which Premium EV Wins?",
      category: "Comparison",
      description: "A head-to-head comparison of the top American electric vehicle brands. Performance, range, luxury, and value compared.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      link: "/insights/tesla-vs-lucid-vs-rivian",
      readTime: "12 min read"
    },
    {
      title: "The Complete EV Maintenance Guide",
      category: "Guide",
      description: "Everything you need to know about maintaining your electric vehicle. Battery care, brake maintenance, tire rotation, and more.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      link: "/insights/ev-maintenance-guide",
      readTime: "14 min read"
    },
    {
      title: "PPF vs Ceramic Coating: Which One Does Your Car Need?",
      category: "Comparison",
      description: "The ultimate guide to paint protection. We break down the differences between PPF and ceramic coating.",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      link: "/insights/ppf-vs-ceramic-coating",
      readTime: "14 min read"
    },
    {
      title: "How to Find a Trusted Body Shop: The Complete Guide",
      category: "Guide",
      description: "Learn how to identify reputable collision repair shops, understand certifications, and protect yourself.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      link: "/insights/finding-trusted-body-shop",
      readTime: "12 min read"
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
                item.name === "Insights"
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
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/insights" className="inline-flex items-center text-[#4a90d9] text-sm mb-8 hover:underline">
            ← Back to All Insights
          </Link>
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Category</div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-6 leading-tight">
            Market Insights
          </h1>
          <p className="text-[18px] text-[#6b7a94] leading-relaxed max-w-[700px]">
            Comprehensive guides, detailed comparisons, and expert analysis to help you make informed decisions about your vehicle.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="px-12 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 text-xs tracking-wide bg-[#4a90d9] text-white rounded-full">All Articles</span>
            <Link href="/insights/category/electric-vehicles" className="px-4 py-2 text-xs tracking-wide bg-[rgba(74,144,217,0.1)] text-[#4a90d9] rounded-full hover:bg-[rgba(74,144,217,0.2)] transition-colors">Electric Vehicles</Link>
            <Link href="/insights/category/premium-care" className="px-4 py-2 text-xs tracking-wide bg-[rgba(74,144,217,0.1)] text-[#4a90d9] rounded-full hover:bg-[rgba(74,144,217,0.2)] transition-colors">Premium Care</Link>
            <Link href="/insights/category/repair-craft" className="px-4 py-2 text-xs tracking-wide bg-[rgba(74,144,217,0.1)] text-[#4a90d9] rounded-full hover:bg-[rgba(74,144,217,0.2)] transition-colors">Repair & Craft</Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-lg overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">
                      {article.category}
                    </div>
                    <div className="text-[11px] text-[#6b7a94]">{article.readTime}</div>
                  </div>
                  <h3 className="text-lg font-medium mb-3 leading-snug">{article.title}</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed mb-5">
                    {article.description}
                  </p>
                  <div className="text-[11px] tracking-[0.1em] uppercase font-medium text-[#4a90d9] group-hover:translate-x-1 transition-transform duration-300">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-12 pb-24">
        <div className="max-w-[800px] mx-auto text-center p-12 bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] rounded-xl border border-[rgba(74,144,217,0.2)]">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] mb-4 font-medium">Stay Updated</div>
          <h2 className="text-2xl font-extralight mb-4">Get the Latest Insights</h2>
          <p className="text-[#6b7a94] mb-8 text-sm">Join our newsletter for new guides, comparisons, and industry news delivered to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.2)] rounded-lg text-sm text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]"
            />
            <button className="px-6 py-3 bg-[#4a90d9] text-white text-sm font-medium rounded-lg hover:bg-[#5a9fe9] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="grid grid-cols-4 gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Vehicles", links: [
              { name: "Browse All", href: "/vehicles" },
              { name: "Electric", href: "/vehicles?type=electric" },
              { name: "Luxury", href: "/vehicles?type=luxury" }
            ]},
            { title: "Care", links: [
              { name: "Find Services", href: "/care" },
              { name: "Detailing", href: "/care?service=detailing" },
              { name: "Body Shops", href: "/care?service=bodyshop" }
            ]},
            { title: "Insights", links: [
              { name: "All Articles", href: "/insights" },
              { name: "Comparisons", href: "/insights/category/market-insights" },
              { name: "Guides", href: "/insights" }
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
