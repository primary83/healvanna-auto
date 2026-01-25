"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Business {
  id: string;
  name: string;
  image_url: string;
  url: string;
  review_count: number;
  categories: { alias: string; title: string }[];
  rating: number;
  location: {
    address1: string;
    city: string;
    state: string;
    zip_code: string;
    display_address: string[];
  };
  phone: string;
  display_phone: string;
  distance: number;
}

export default function CarePage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("auto_detailing");
  const [hasSearched, setHasSearched] = useState(false);
// Auto-detect user location on page load
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ip-api.com/json/');
        const data = await response.json();
        if (data.status === 'success') {
          setLocation(`${data.city}, ${data.regionName}`);
        }
      } catch (error) {
        console.log('Could not detect location');
      }
    };
    detectLocation();
  }, []);
  const categories = [
    { value: "auto_detailing", label: "Auto Detailing", description: "Detailing & Ceramic Coating" },
    { value: "vehicle_wraps", label: "PPF & Wraps", description: "Paint Protection Film" },
    { value: "auto_upholstery", label: "Interior", description: "Upholstery & Restoration" },
  ];

  const popularLocations = [
    "Austin, TX",
    "Miami, FL",
    "Los Angeles, CA",
    "New York, NY",
    "Houston, TX",
    "Phoenix, AZ",
  ];

  const searchBusinesses = async () => {
    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const response = await fetch(
        `/api/yelp?location=${encodeURIComponent(location)}&category=${category}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch businesses");
      }

      const data = await response.json();
      setBusinesses(data.businesses || []);
    } catch (err) {
      setError("Unable to load services. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

// Google Search function
  const searchOnGoogle = () => { if (!location || location.trim() === '') { alert('Please enter your zip code or city to search'); return; }
    const categoryLabels: { [key: string]: string } = {
      'auto_detailing': 'car detailing',
      'car_wash': 'car wash',
      'auto_repair': 'auto repair',
      'body_shops': 'auto body shop',
      'car_dealers': 'car dealers',
      'evcharging': 'EV charging stations'
    };
    const searchTerm = categoryLabels[category] || 'car detailing';
    const query = encodeURIComponent(`${searchTerm} near ${location}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };  
const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-[#4a90d9]">★</span>);
    }
    if (hasHalf) {
      stars.push(<span key="half" className="text-[#4a90d9]">½</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="text-[#3d4a61]">★</span>);
    }

    return stars;
  };

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
                item.name === "CARE"
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
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Care Directory</div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-4">
            Premium <span className="italic text-[#4a90d9]">Detailing & Protection</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[550px] mx-auto leading-relaxed mb-12">
            Find verified specialists in auto detailing, ceramic coating, and paint protection in your area.
          </p>

          {/* Search Form */}
          <div className="bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded-lg p-8 max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Category Selection */}
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2 font-medium">Service Type</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.3)] rounded px-4 py-3 text-[14px] text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2 font-medium">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State or Zip"
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.3)] rounded px-4 py-3 text-[14px] text-[#e8edf5] placeholder-[#3d4a61] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={searchBusinesses}
                  disabled={loading}
                  className="w-full py-3 px-6 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded disabled:opacity-50"
                >
                  {loading ? "Searching..." : "Find Services"}
                </button>
<button
                  onClick={searchOnGoogle}
                  className="w-full py-3 px-6 text-[13px] font-medium border border-[#4a90d9] text-[#4a90d9] hover:bg-[#4a90d9] hover:text-[#0a0f1a] transition-all duration-300 rounded"
                >
                  Search on Google
                </button>
              </div>
            </div>

            {/* Popular Locations */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-[11px] text-[#6b7a94] mr-2">Popular:</span>
              {popularLocations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className={`text-[11px] px-3 py-1 rounded transition-colors ${
                    location === loc
                      ? "bg-[rgba(74,144,217,0.2)] text-[#4a90d9]"
                      : "text-[#6b7a94] hover:text-[#e8edf5]"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 px-12 bg-[#0a0f1a] border-b border-[rgba(74,144,217,0.1)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  category === cat.value
                    ? "border-[#4a90d9] bg-[rgba(74,144,217,0.1)] text-[#e8edf5]"
                    : "border-[rgba(74,144,217,0.2)] text-[#6b7a94] hover:border-[rgba(74,144,217,0.4)] hover:text-[#e8edf5]"
                }`}
              >
                <div className="text-[13px] font-medium">{cat.label}</div>
                <div className="text-[10px] opacity-70">{cat.description}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1300px] mx-auto">
          {error && (
            <div className="text-center py-12">
              <p className="text-[#ff6b6b]">{error}</p>
            </div>
          )}

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-2 border-[#4a90d9] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-[#6b7a94]">Finding premium services near you...</p>
            </div>
          )}

          {!loading && !error && hasSearched && businesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#6b7a94]">No services found in this area. Try a different location.</p>
            </div>
          )}

          {!loading && !hasSearched && (
            <div className="text-center py-12">
              <div className="text-[#4a90d9] text-4xl mb-4">🔍</div>
              <p className="text-[#6b7a94] text-lg mb-2">Ready to find premium care services</p>
              <p className="text-[#3d4a61] text-sm">Enter your location and click "Find Services" to get started</p>
            </div>
          )}

          {!loading && businesses.length > 0 && (
            <>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-xl font-light">
                    {businesses.length} Services Found
                  </h2>
                  <p className="text-[13px] text-[#6b7a94]">
                    {categories.find(c => c.value === category)?.label} in {location}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {businesses.map((business) => (
                  <div
                    key={business.id}
                    className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group"
                  >
                    <div className="h-48 overflow-hidden bg-[#0d1424]">
                      {business.image_url ? (
                        <img
                          src={business.image_url}
                          alt={business.name}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#3d4a61]">
                          <span className="text-4xl">🚗</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">
                          {business.categories[0]?.title || "Auto Service"}
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(business.rating)}
                        </div>
                      </div>
                      <h3 className="text-lg font-medium mb-1 line-clamp-1">{business.name}</h3>
                      <p className="text-xs text-[#6b7a94] mb-3">
                        {business.location.display_address.join(", ")}
                      </p>
                      <div className="flex items-center gap-4 text-[12px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(74,144,217,0.1)]">
                        <div>
                          <span className="text-[#e8edf5] font-medium">{business.rating}</span> Rating
                        </div>
                        <div>
                          <span className="text-[#e8edf5] font-medium">{business.review_count}</span> Reviews
                        </div>
                      </div>
                      {business.display_phone && (
                        <p className="text-[13px] text-[#6b7a94] mb-4">{business.display_phone}</p>
                      )}
                      <a
                        href={business.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded text-center"
                      >
                        View on Yelp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
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
              { name: "EV Body Shops", href: "/craft" },
              { name: "Luxury Collision", href: "/craft" },
              { name: "Restoration", href: "/craft" }
            ]},
            { title: "Markets", links: [
              { name: "Austin", href: "/care?location=Austin" },
              { name: "Miami", href: "/care?location=Miami" },
              { name: "Los Angeles", href: "/care?location=Los Angeles" },
              { name: "New York", href: "/care?location=New York" }
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
