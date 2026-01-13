"use client";

import Link from "next/link";

export default function InsightsPage() {
  const articles = [
    {
      slug: "us-evs-vs-chinese-evs",
      title: "US EVs vs Chinese EVs",
      category: "Comparison",
      description: "A comprehensive comparison of American and Chinese electric vehicles. We analyze range, technology, build quality, and value to help you understand the global EV landscape.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      readTime: "8 min read",
      date: "January 2025",
      available: true
    },
    {
      slug: "best-ceramic-coatings-2025",
      title: "Best Ceramic Coatings 2025",
      category: "Guide",
      description: "We tested the top ceramic coating brands to find the best protection for your premium vehicle. From Ceramic Pro to Gtechniq, here's what you need to know.",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
      readTime: "8 min read",
      date: "January 2025",
      available: true
    },
    {
      slug: "tesla-vs-lucid-vs-rivian",
      title: "Tesla vs Lucid vs Rivian",
      category: "Comparison",
      description: "The ultimate American EV showdown. We compare the top three US electric vehicle brands across performance, luxury, range, and value.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      readTime: "12 min read",
      date: "January 2025",
      available: true
    },
    {
      slug: "ev-maintenance-guide",
      title: "Complete EV Maintenance Guide",
      category: "Guide",
      description: "Everything you need to know about maintaining your electric vehicle for optimal performance and longevity. From battery care to brake maintenance, we cover it all.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      readTime: "15 min read",
      date: "January 2025",
      available: true
    },
    {
      slug: "ppf-vs-ceramic-coating",
      title: "PPF vs Ceramic Coating",
      category: "Guide",
      description: "The ultimate guide to paint protection. We break down the differences between paint protection film and ceramic coating, including costs and which option is best for you.",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      readTime: "14 min read",
      date: "January 2025",
      available: true
    },
    {
      slug: "finding-trusted-body-shop",
      title: "Finding a Trusted Body Shop",
      category: "Guide",
      description: "How to find a reputable body shop for your luxury or electric vehicle. Red flags to avoid, certifications to look for, and questions to ask.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      readTime: "12 min read",
      date: "January 2025",
      available: true
    },
  ];

  const categories = ["All", "Comparison", "Guide", "News"];

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

      {/* Hero */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Insights</div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-4">
            Market <span className="italic text-[#4a90d9]">Intelligence</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[550px] mx-auto leading-relaxed mb-12">
            Expert analysis, in-depth comparisons, and comprehensive guides for the discerning automotive enthusiast.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-12 bg-[#0a0f1a] border-b border-[rgba(74,144,217,0.1)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-[13px] ${
                  index === 0
                    ? "border-[#4a90d9] bg-[rgba(74,144,217,0.1)] text-[#e8edf5]"
                    : "border-[rgba(74,144,217,0.2)] text-[#6b7a94] hover:border-[rgba(74,144,217,0.4)] hover:text-[#e8edf5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/insights/${article.slug}`}
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{article.category}</div>
                    <div className="text-[10px] text-[#3d4a61]">{article.date}</div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-[rgba(74,144,217,0.1)]">
                    <span className="text-[11px] text-[#6b7a94]">{article.readTime}</span>
                    <span className="text-[11px] tracking-[0.1em] uppercase text-[#4a90d9] font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extralight mb-4">Stay Informed</h2>
          <p className="text-[15px] text-[#6b7a94] mb-8">Get the latest insights, comparisons, and guides delivered to your inbox.</p>
          <div className="flex gap-4 max-w-[400px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#0a0f1a] border border-[rgba(74,144,217,0.3)] rounded px-4 py-3 text-[14px] text-[#e8edf5] placeholder-[#3d4a61] focus:border-[#4a90d9] focus:outline-none transition-colors"
            />
            <button className="px-6 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-6 gap-10 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: [
              { name: "Electric Vehicles", href: "/cars" },
              { name: "Luxury Sedans", href: "/cars" },
              { name: "SUVs", href: "/cars" },
              { name: "All Brands", href: "/cars" }
            ]},
            { title: "Care", links: [
              { name: "Detailing", href: "/care" },
              { name: "Ceramic Coating", href: "/care" },
              { name: "PPF", href: "/care" },
              { name: "Interior", href: "/care" }
            ]},
            { title: "Craft", links: [
              { name: "Body Shops", href: "/craft" },
              { name: "Auto Repair", href: "/craft" },
              { name: "Restoration", href: "/craft" }
            ]},
            { title: "Markets", links: [
              { name: "Austin", href: "/care" },
              { name: "Miami", href: "/care" },
              { name: "Los Angeles", href: "/care" },
              { name: "New York", href: "/care" }
            ]},
            { title: "Insights", links: [
              { name: "Comparisons", href: "/insights" },
              { name: "Buying Guides", href: "/insights" },
              { name: "Maintenance", href: "/insights" }
            ]},
            { title: "Company", links: [
              { name: "About", href: "/about" },
              { name: "For Business", href: "#" },
              { name: "Contact", href: "/contact" }
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
            ].map((link) => <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
