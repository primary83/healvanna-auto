"use client";

import { useState } from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  authorTitle: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "US EVs vs Chinese EVs: A Comprehensive Comparison",
    description: "A deep dive into how American and Chinese electric vehicles stack up in range, technology, build quality, and value proposition for 2024.",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    author: "David Park",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    authorTitle: "Content Director",
    date: "January 18, 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Best Ceramic Coatings 2024: Professional Testing Results",
    description: "We tested the top ceramic coating brands including Ceramic Pro, Gtechniq, and Modesta to find the best protection for your premium vehicle.",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    author: "Sarah Williams",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    authorTitle: "Head of Provider Relations",
    date: "January 15, 2026",
    readTime: "15 min read",
  },
  {
    id: 3,
    title: "Complete EV Maintenance Guide: What You Need to Know",
    description: "Everything you need to know about maintaining your electric vehicle for peak performance, from battery care to brake maintenance.",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    author: "Marcus Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    authorTitle: "Founder & CEO",
    date: "January 12, 2026",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "PPF vs Ceramic Coating: Which Protection Is Right for You?",
    description: "Understanding the differences between paint protection film and ceramic coatings, and when to use each for optimal vehicle protection.",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: "Sarah Williams",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    authorTitle: "Head of Provider Relations",
    date: "January 10, 2026",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "How to Install a Home EV Charger: Complete Guide",
    description: "Step-by-step guide to installing a Level 2 EV charger at home, including electrical requirements, costs, and best charger recommendations.",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    author: "David Park",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    authorTitle: "Content Director",
    date: "January 8, 2026",
    readTime: "14 min read",
  },
  {
    id: 6,
    title: "The Rise of Wireless EV Charging: What to Expect",
    description: "Exploring the future of wireless charging for electric vehicles, current technology, and when we can expect mainstream adoption.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
    author: "Marcus Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    authorTitle: "Founder & CEO",
    date: "January 5, 2026",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "Tesla Model S Plaid vs Lucid Air Sapphire: Ultimate Showdown",
    description: "Comparing the two fastest production sedans ever made. Which ultra-high-performance EV deserves your consideration?",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    author: "David Park",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    authorTitle: "Content Director",
    date: "January 3, 2026",
    readTime: "11 min read",
  },
  {
    id: 8,
    title: "V2H Technology: Powering Your Home with Your EV",
    description: "How vehicle-to-home technology works, which EVs support it, and whether it makes sense for your energy needs.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    author: "Elena Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    authorTitle: "Head of Product",
    date: "January 1, 2026",
    readTime: "9 min read",
  },
];

const categories = ["All", "Comparison", "Guide", "Technology", "News"];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = articles.filter(
    (article) => selectedCategory === "All" || article.category === selectedCategory
  );

  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex gap-10">
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

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Insights</div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Market Intelligence & <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Guides</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] leading-relaxed">
            Expert analysis, in-depth comparisons, and comprehensive guides for the discerning automotive enthusiast.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider rounded-full transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#4a90d9] text-[#0a0f1a] font-medium"
                    : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:text-[#e8edf5] border border-[rgba(74,144,217,0.2)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "All" && (
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-lg overflow-hidden border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all cursor-pointer group">
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 bg-[#4a90d9] text-[#0a0f1a] rounded font-semibold">Featured</span>
                  <span className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded font-medium">{featuredArticle.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium mb-4 leading-tight">{featuredArticle.title}</h2>
                <p className="text-[#6b7a94] leading-relaxed mb-6">{featuredArticle.description}</p>
                <div className="flex items-center gap-4">
                  <img src={featuredArticle.authorImage} alt={featuredArticle.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-medium">{featuredArticle.author}</div>
                    <div className="text-xs text-[#6b7a94]">{featuredArticle.date} · {featuredArticle.readTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-lg overflow-hidden border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] cursor-pointer group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 bg-[rgba(74,144,217,0.9)] text-[#0a0f1a] rounded font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 leading-snug line-clamp-2">{article.title}</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={article.authorImage} alt={article.author} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-medium">{article.author}</div>
                        <div className="text-[10px] text-[#6b7a94]">{article.authorTitle}</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-[#6b7a94]">{article.readTime}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-gradient-to-br from-[rgba(74,144,217,0.1)] to-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.2)] rounded-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[rgba(74,144,217,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light mb-3">Stay Updated</h3>
            <p className="text-[#6b7a94] mb-6 max-w-[400px] mx-auto">
              Get the latest EV news, expert guides, and exclusive insights delivered to your inbox weekly.
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-[#4a90d9]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-[400px] mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-xs text-[#3d4a61] mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="px-6 md:px-12 pb-20 bg-[#0d1424] py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Topics</div>
            <h2 className="text-2xl font-light">Explore by Topic</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "EV Buying Guide", count: 12, icon: "🚗" },
              { name: "Ceramic Coating", count: 8, icon: "✨" },
              { name: "Tesla Tips", count: 15, icon: "⚡" },
              { name: "PPF Protection", count: 6, icon: "🛡️" },
              { name: "Maintenance", count: 10, icon: "🔧" },
              { name: "Charging", count: 7, icon: "🔌" },
              { name: "Comparisons", count: 9, icon: "⚖️" },
              { name: "Industry News", count: 14, icon: "📰" },
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.1)] rounded-lg p-5 hover:border-[rgba(74,144,217,0.3)] transition-colors cursor-pointer group"
              >
                <div className="text-2xl mb-2">{topic.icon}</div>
                <div className="font-medium mb-1 group-hover:text-[#4a90d9] transition-colors">{topic.name}</div>
                <div className="text-xs text-[#6b7a94]">{topic.count} articles</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: ["Electric Vehicles", "Luxury Sedans", "SUVs", "All Brands"] },
            { title: "Care", links: ["Detailing", "Ceramic Coating", "PPF", "Interior"] },
            { title: "Craft", links: ["EV Body Shops", "Luxury Collision", "Restoration"] },
            { title: "Insights", links: ["Comparisons", "Buying Guides", "Maintenance"] },
            { title: "Company", links: ["About", "For Business", "Contact"] },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto gap-4">
          <div className="text-[11px] text-[#3d4a61]">© 2024 Healvanna Auto. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <span key={link} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
