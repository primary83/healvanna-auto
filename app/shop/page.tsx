"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "charging", name: "Charging" },
    { id: "interior", name: "Interior" },
    { id: "exterior", name: "Exterior" },
    { id: "tech", name: "Tech & Gadgets" },
  ];

  const products = [
    // Charging
    {
      id: 1,
      name: "Tesla Wall Connector",
      description: "Official Tesla home charging solution. Up to 44 miles of range per hour.",
      price: "$425",
      category: "charging",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80",
      rating: 4.8,
      reviews: 2847,
      affiliateUrl: "https://amazon.com", // Replace with your affiliate link
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "ChargePoint Home Flex",
      description: "Universal EV charger. Works with all EVs. Up to 50 amps.",
      price: "$549",
      category: "charging",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      rating: 4.7,
      reviews: 1923,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    {
      id: 3,
      name: "Lectron V-Box 48 Amp",
      description: "Smart EV charger with WiFi. Compatible with Tesla & J1772.",
      price: "$379",
      category: "charging",
      image: "https://images.unsplash.com/photo-1647500666543-5c0e12d5d3a0?w=400&q=80",
      rating: 4.6,
      reviews: 856,
      affiliateUrl: "https://amazon.com",
      badge: "Great Value"
    },
    {
      id: 4,
      name: "Tesla Mobile Connector",
      description: "Portable charging solution. Includes NEMA 14-50 adapter.",
      price: "$230",
      category: "charging",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&q=80",
      rating: 4.9,
      reviews: 3421,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    // Interior
    {
      id: 5,
      name: "All-Weather Floor Mats",
      description: "Custom-fit laser measured floor mats. Heavy duty, easy to clean.",
      price: "$149",
      category: "interior",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80",
      rating: 4.7,
      reviews: 4521,
      affiliateUrl: "https://amazon.com",
      badge: "Best Seller"
    },
    {
      id: 6,
      name: "Center Console Organizer",
      description: "Premium organizer tray. Perfect fit for Tesla Model 3/Y.",
      price: "$39",
      category: "interior",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
      rating: 4.5,
      reviews: 2156,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    {
      id: 7,
      name: "Wireless Phone Charger Pad",
      description: "15W fast wireless charging. Anti-slip surface. Universal fit.",
      price: "$45",
      category: "interior",
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&q=80",
      rating: 4.4,
      reviews: 1834,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    {
      id: 8,
      name: "Leather Seat Covers",
      description: "Premium synthetic leather. Custom fit. Easy installation.",
      price: "$189",
      category: "interior",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=400&q=80",
      rating: 4.6,
      reviews: 967,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    // Exterior
    {
      id: 9,
      name: "Car Cover - All Weather",
      description: "Waterproof, UV resistant. Custom fit for your EV model.",
      price: "$89",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80",
      rating: 4.5,
      reviews: 1245,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    {
      id: 10,
      name: "Ceramic Coating Kit",
      description: "Professional grade 9H ceramic coating. 3-year protection.",
      price: "$69",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400&q=80",
      rating: 4.7,
      reviews: 2341,
      affiliateUrl: "https://amazon.com",
      badge: "Top Rated"
    },
    {
      id: 11,
      name: "Mud Flaps Set",
      description: "Custom molded splash guards. No drilling required.",
      price: "$49",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400&q=80",
      rating: 4.4,
      reviews: 789,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    {
      id: 12,
      name: "Wheel Touch-Up Kit",
      description: "Fix curb rash easily. Includes primer, paint, and clear coat.",
      price: "$35",
      category: "exterior",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
      rating: 4.3,
      reviews: 654,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    // Tech & Gadgets
    {
      id: 13,
      name: "Dash Cam 4K Front & Rear",
      description: "4K front + 1080p rear. Built-in GPS. Parking mode.",
      price: "$149",
      category: "tech",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&q=80",
      rating: 4.6,
      reviews: 3567,
      affiliateUrl: "https://amazon.com",
      badge: "Best Seller"
    },
    {
      id: 14,
      name: "Tire Pressure Monitoring System",
      description: "Real-time TPMS with solar-powered display. Easy install.",
      price: "$59",
      category: "tech",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      rating: 4.5,
      reviews: 1123,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
    {
      id: 15,
      name: "Portable Jump Starter",
      description: "2000A peak. Works on 12V vehicles. USB-C power bank.",
      price: "$79",
      category: "tech",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80",
      rating: 4.8,
      reviews: 4892,
      affiliateUrl: "https://amazon.com",
      badge: "Essential"
    },
    {
      id: 16,
      name: "Electric Air Compressor",
      description: "Portable tire inflator. Digital display. Auto shut-off.",
      price: "$45",
      category: "tech",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
      rating: 4.6,
      reviews: 2234,
      affiliateUrl: "https://amazon.com",
      badge: null
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < fullStars ? 'text-amber-400' : i === fullStars && hasHalfStar ? 'text-amber-400' : 'text-slate-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            HEALVANNA <span className="text-[#4a90d9]">AUTO</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-slate-300 hover:text-white transition-colors">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/shop" className="text-[#4a90d9]">SHOP</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-16 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4a90d9]/10 rounded-full text-[#4a90d9] text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>EV ACCESSORIES SHOP</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium EV Accessories
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Curated selection of the best chargers, accessories, and gadgets for your electric vehicle. 
            Top-rated products from trusted brands.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-8 border-b border-slate-800/50 sticky top-[73px] bg-slate-950/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#4a90d9] text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-400">
              Showing <span className="text-white font-medium">{filteredProducts.length}</span> products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <a
                key={product.id}
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all overflow-hidden"
              >
                {/* Product Image */}
                <div className="aspect-square relative overflow-hidden bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#4a90d9] rounded-full text-xs font-medium text-white">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="px-4 py-2 bg-[#4a90d9] rounded-lg text-white text-sm font-medium">
                      View on Amazon →
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1 group-hover:text-[#4a90d9] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(product.rating)}
                    <span className="text-sm text-slate-400">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#4a90d9]">{product.price}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Amazon
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="px-4 py-8 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-500">
            <span className="text-slate-400">Affiliate Disclosure:</span> As an Amazon Associate, Healvanna Auto earns from qualifying purchases. 
            This helps us maintain the site and continue providing great content at no extra cost to you.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-slate-400 mb-8">
            Check out our buying guides and reviews to find the perfect accessories for your EV.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-[#4a90d9] hover:bg-[#3a7bc8] text-white rounded-lg font-medium transition-colors"
            >
              Read Our Guides
            </Link>
            <Link
              href="/cars"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
            >
              Browse EVs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2026 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
