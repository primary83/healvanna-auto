"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "News", "Reviews", "Events", "Guides", "Technology"];

const blogPosts = [
  {
    id: 1,
    slug: "top-electric-car-shows-2026",
    title: "Top Electric Car Shows to Attend in 2026",
    excerpt: "Discover the biggest and most exciting electric vehicle shows and expos happening in 2026. From Electrify Expo to EV Tech Expo, find out where you can test drive the latest EVs.",
    category: "Events",
    date: "January 18, 2026",
    readTime: "8 min read",
    image: "/blog/electric-car-show-2026.png",
  },
  {
    id: 2,
    slug: "what-to-expect-electrify-expo-2026",
    title: "What to Expect at Electrify Expo 2026",
    excerpt: "Your complete guide to North America's largest electric vehicle festival. Learn what to do, what to see, and how to make the most of your Electrify Expo experience.",
    category: "Events",
    date: "January 18, 2026",
    readTime: "9 min read",
    image: "/blog/electrify-expo-2026.png",
  },
  {
    id: 3,
    slug: "ev-battery-technology-2026",
    title: "New EV Battery Technology: What's Coming in 2026",
    excerpt: "Explore the cutting-edge battery innovations transforming electric vehicles. From solid-state batteries to silicon anodes, discover what's powering the future of EVs.",
    category: "Technology",
    date: "January 18, 2026",
    readTime: "10 min read",
    image: "/blog/ev-battery-technology-2026.png",
  },
  {
    id: 4,
    slug: "best-electric-suvs-families-2026",
    title: "Best Electric SUVs for Families in 2026",
    excerpt: "Find the perfect electric SUV for your family. We compare range, cargo space, safety features, and value across the top family-friendly EVs available in 2026.",
    category: "Reviews",
    date: "January 18, 2026",
    readTime: "10 min read",
    image: "/blog/electric-suv-family-2026.png",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              Healvanna Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Electric Vehicle{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stay informed with the latest EV news, reviews, technology updates, and event coverage. 
              Your trusted source for everything electric mobility.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Article Count */}
          <p className="text-center text-slate-500 mb-8">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-emerald-500/90 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-3xl p-8 md:p-12 border border-emerald-500/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated on EV News
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Get the latest electric vehicle news, reviews, and insights delivered to your inbox. 
              No spam, just the content you care about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
