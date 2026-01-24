"use client";
import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "News", "Reviews", "Events", "Guides", "Technology"];

  const blogPosts = [
    {
      id: 1,
      title: "How to Install a Home EV Charger: Complete Step-by-Step Guide",
      excerpt: "Everything you need to know about home EV charger installation, from choosing the right equipment to understanding electrical requirements and costs.",
      category: "Guides",
      image: "/blog/home-ev-charger-installation.png",
      date: "January 18, 2026",
      readTime: "12 min read",
      slug: "how-to-install-home-ev-charger"
    },
    {
      id: 2,
      title: "EV Road Trip Planning: Your Complete 2026 Guide",
      excerpt: "Master the art of electric road trips with our comprehensive guide covering route planning, charging strategies, and essential tips for long-distance EV travel.",
      category: "Guides",
      image: "/blog/ev-road-trip-planning.png",
      date: "January 18, 2026",
      readTime: "14 min read",
      slug: "ev-road-trip-planning-guide"
    },
    {
      id: 3,
      title: "Understanding EV Tax Credits in 2026: Complete Guide",
      excerpt: "Navigate the complex world of EV tax credits with our comprehensive guide to federal incentives, income limits, and how to maximize your savings.",
      category: "Guides",
      image: "/blog/ev-tax-credits-2026.png",
      date: "January 18, 2026",
      readTime: "11 min read",
      slug: "ev-tax-credits-2026"
    },
    {
      id: 4,
      title: "How to Maintain Your Electric Vehicle: Essential Guide",
      excerpt: "Discover the simplified maintenance requirements of EVs and learn how to keep your electric vehicle running efficiently for years to come.",
      category: "Guides",
      image: "/blog/ev-maintenance-guide.png",
      date: "January 18, 2026",
      readTime: "10 min read",
      slug: "ev-maintenance-guide"
    },
    {
      id: 5,
      title: "EV Charging Networks Compared: Tesla Supercharger vs Electrify America",
      excerpt: "A comprehensive comparison of major EV charging networks including reliability, speed, coverage, and pricing to help you choose the best option.",
      category: "Technology",
      image: "/blog/ev-charging-networks-compared.png",
      date: "January 18, 2026",
      readTime: "13 min read",
      slug: "ev-charging-networks-compared"
    },
    {
      id: 6,
      title: "Wireless EV Charging: Is It Ready for Prime Time?",
      excerpt: "Explore the world of wireless EV charging technology, from how it works to current systems available and what the future holds.",
      category: "Technology",
      image: "/blog/wireless-ev-charging.png",
      date: "January 18, 2026",
      readTime: "11 min read",
      slug: "wireless-ev-charging"
    },
    {
      id: 7,
      title: "Vehicle-to-Home (V2H) Technology: Your EV as a Backup Generator",
      excerpt: "Learn how V2H technology transforms your electric vehicle into a home backup power system, which vehicles support it, and what equipment you need.",
      category: "Technology",
      image: "/blog/vehicle-to-home-v2h.png",
      date: "January 18, 2026",
      readTime: "12 min read",
      slug: "vehicle-to-home-v2h"
    },
    {
      id: 8,
      title: "Top Electric Car Shows to Attend in 2026",
      excerpt: "Discover the most anticipated electric vehicle exhibitions and auto shows happening in 2026, from CES to the LA Auto Show.",
      category: "Events",
      image: "/blog/electric-car-shows-2026.png",
      date: "January 15, 2026",
      readTime: "8 min read",
      slug: "electric-car-shows-2026"
    },
    {
      id: 9,
      title: "What to Expect at Electrify Expo 2026",
      excerpt: "Your complete guide to Electrify Expo 2026 - the largest outdoor electric vehicle festival featuring test drives, exhibits, and more.",
      category: "Events",
      image: "/blog/electrify-expo-2026.png",
      date: "January 14, 2026",
      readTime: "7 min read",
      slug: "electrify-expo-2026"
    },
    {
      id: 10,
      title: "New EV Battery Technology: What's Coming in 2026",
      excerpt: "Explore the cutting-edge battery technologies set to revolutionize electric vehicles in 2026, from solid-state to sodium-ion innovations.",
      category: "Technology",
      image: "/blog/ev-battery-technology-2026.png",
      date: "January 12, 2026",
      readTime: "10 min read",
      slug: "ev-battery-technology-2026"
    },
    {
      id: 11,
      title: "Best Electric SUVs for Families in 2026",
      excerpt: "Find the perfect electric SUV for your family with our comprehensive guide covering range, safety, cargo space, and value.",
      category: "Reviews",
      image: "/blog/best-electric-suvs-families-2026.png",
      date: "January 10, 2026",
      readTime: "12 min read",
      slug: "best-electric-suvs-families-2026"
    }
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
            HEALVANNA <span className="text-[#4a90d9]">AUTO</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-[14px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors duration-300">HOME</a>
            <a href="/cars" className="text-[14px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors duration-300">CARS</a>
            <a href="/care" className="text-[14px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors duration-300">CARE</a>
            <a href="/craft" className="text-[14px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors duration-300">CRAFT</a>
            <a href="/insights" className="text-[14px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors duration-300">INSIGHTS</a>
            <a href="/blog" className="text-[14px] text-[#4a90d9] transition-colors duration-300">BLOG</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-[#4a90d9] text-[14px] tracking-[0.2em] uppercase mb-4 block">Our Blog</span>
          <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] mb-6">
            EV Insights &
            <span className="text-[#4a90d9]"> News</span>
          </h1>
          <p className="text-[18px] text-[#6b7a94] max-w-[600px]">
            Stay informed with the latest electric vehicle news, reviews, buying guides, and industry insights.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#4a90d9] text-white"
                    : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:bg-[rgba(74,144,217,0.2)] hover:text-[#e8edf5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-[rgba(74,144,217,0.05)] rounded-2xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-white text-[11px] font-medium rounded-full ${
                      post.category === "Technology" ? "bg-[#10b981]" :
                      post.category === "Events" ? "bg-[#8b5cf6]" :
                      post.category === "Reviews" ? "bg-[#f59e0b]" :
                      post.category === "Guides" ? "bg-[#4a90d9]" :
                      "bg-[#4a90d9]"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[12px] text-[#6b7a94] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#e8edf5] mb-3 group-hover:text-[#4a90d9] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-[#6b7a94] line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 pb-20">
        <div className="max-w-[800px] mx-auto bg-[rgba(74,144,217,0.1)] rounded-3xl p-12 text-center border border-[rgba(74,144,217,0.2)]">
          <h2 className="text-[32px] font-bold mb-4">Stay Updated</h2>
          <p className="text-[#6b7a94] mb-8">Get the latest EV news and insights delivered to your inbox weekly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-[#0a0f1a] border border-[rgba(74,144,217,0.3)] rounded-full text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]"
            />
            <button className="px-8 py-3 bg-[#4a90d9] text-white font-medium rounded-full hover:bg-[#3a7bc8] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080c14] py-12 px-6 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#6b7a94] text-[14px]">© 2025 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
