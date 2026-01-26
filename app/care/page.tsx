"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useGeoLocation, calculateDistance } from "../hooks/useGeoLocation";

interface Provider {
  id: string;
  name: string;
  category: string;
  city: string;
  state: string;
  address: string;
  specialties: string[];
  verified: boolean;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  phone: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  distance: string;
  url: string;
}

// Location coordinates for distance calculation when user selects a location
const locationCoordinates: Record<string, { lat: number; lon: number }> = {
  "Orlando, FL": { lat: 28.5383, lon: -81.3792 },
  "Winter Garden, FL": { lat: 28.5653, lon: -81.5862 },
  "Tampa, FL": { lat: 27.9506, lon: -82.4572 },
  "Jacksonville, FL": { lat: 30.3322, lon: -81.6557 },
  "Miami, FL": { lat: 25.7617, lon: -80.1918 },
  "Kissimmee, FL": { lat: 28.2920, lon: -81.4076 },
  "Austin, TX": { lat: 30.2672, lon: -97.7431 },
  "Los Angeles, CA": { lat: 34.0522, lon: -118.2437 },
  "New York, NY": { lat: 40.7128, lon: -74.006 },
};

const categories = ["All", "Auto Detailing", "Car Wash", "Auto Customization", "Paint Protection"];
const locations = ["My Location", "Orlando, FL", "Winter Garden, FL", "Kissimmee, FL", "Tampa, FL", "Jacksonville, FL", "Miami, FL", "Austin, TX", "Los Angeles, CA", "New York, NY"];
const sortOptions = [
  { label: "Nearest", value: "distance" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

export default function CarePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("My Location");
  const [sortBy, setSortBy] = useState("distance");
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoadingProviders, setIsLoadingProviders] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // IP-based geolocation
  const { latitude: userLat, longitude: userLon, isLoading: isLoadingLocation, detectedLocation } = useGeoLocation();

  // Determine the center point for distance calculation
  const { centerLat, centerLon, displayLocation } = useMemo(() => {
    if (selectedLocation === "My Location") {
      return {
        centerLat: userLat,
        centerLon: userLon,
        displayLocation: detectedLocation,
      };
    }
    const coords = locationCoordinates[selectedLocation];
    if (coords) {
      return {
        centerLat: coords.lat,
        centerLon: coords.lon,
        displayLocation: selectedLocation,
      };
    }
    return {
      centerLat: userLat,
      centerLon: userLon,
      displayLocation: detectedLocation,
    };
  }, [selectedLocation, userLat, userLon, detectedLocation]);

  // Fetch providers from Yelp API when location changes
  useEffect(() => {
    const fetchProviders = async () => {
      if (!centerLat || !centerLon) return;

      setIsLoadingProviders(true);
      setError(null);

      try {
        // Yelp categories for auto detailing and related services
        const categories = "autodetailing,carwash,autocustomization";
        const params = new URLSearchParams({
          latitude: centerLat.toString(),
          longitude: centerLon.toString(),
          categories,
          limit: "20",
          sort_by: sortBy === "distance" ? "distance" : sortBy === "rating" ? "rating" : "review_count",
        });

        if (searchQuery) {
          params.append("term", searchQuery);
        }

        const response = await fetch(`/api/yelp?${params.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to fetch providers");
        }

        const data = await response.json();
        setProviders(data.providers || []);
      } catch (err) {
        console.error("Error fetching providers:", err);
        setError("Unable to load providers. Please try again later.");
      } finally {
        setIsLoadingProviders(false);
      }
    };

    fetchProviders();
  }, [centerLat, centerLon, sortBy, searchQuery]);

  // Filter and sort providers
  const filteredProviders = useMemo(() => {
    // Recalculate distances from center point
    const providersWithDistance = providers.map((provider) => {
      const distance = calculateDistance(
        centerLat,
        centerLon,
        provider.latitude,
        provider.longitude
      );
      return {
        ...provider,
        calculatedDistance: distance,
        distanceText: `${distance.toFixed(1)} mi`,
      };
    });

    let result = providersWithDistance.filter((provider) => {
      const categoryMatch = selectedCategory === "All" ||
        provider.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        provider.specialties.some(s => s.toLowerCase().includes(selectedCategory.toLowerCase()));

      return categoryMatch;
    });

    switch (sortBy) {
      case "distance":
        result.sort((a, b) => a.calculatedDistance - b.calculatedDistance);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [providers, selectedCategory, sortBy, centerLat, centerLon]);

  const isLoading = isLoadingLocation || isLoadingProviders;

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
  { name: "SHOP", href: "/shop" },
  { name: "BLOG", href: "/blog" },
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

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] font-medium">Care Directory</div>
            {displayLocation && (
              <div className="flex items-center gap-1.5 text-[11px] text-[#6b7a94] bg-[rgba(74,144,217,0.1)] px-3 py-1 rounded-full">
                <svg className="w-3.5 h-3.5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {isLoadingLocation && selectedLocation === "My Location" ? "Detecting location..." : `Near ${displayLocation}`}
              </div>
            )}
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Premium Detailing & <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Protection</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] leading-relaxed">
            Find verified specialists in auto detailing, ceramic coating, PPF installation, and interior restoration. Real reviews and ratings powered by Yelp.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3d4a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9] cursor-pointer min-w-[180px]"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#0a0f1a]">
                  {loc === "My Location" ? `📍 ${loc}${detectedLocation ? ` (${detectedLocation})` : ""}` : loc}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9] cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#0a0f1a]">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
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

          <p className="text-sm text-[#6b7a94]">
            {isLoading ? (
              "Loading providers..."
            ) : error ? (
              <span className="text-[#ef4444]">{error}</span>
            ) : (
              <>
                Showing <span className="text-[#e8edf5] font-medium">{filteredProviders.length}</span> verified providers
                {displayLocation && <span> near <span className="text-[#4a90d9]">{displayLocation}</span></span>}
              </>
            )}
          </p>
        </div>
      </section>

      {/* Provider Grid - Directory Style */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)] animate-pulse">
                  <div className="flex gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-[rgba(74,144,217,0.1)]"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-[rgba(74,144,217,0.1)] rounded mb-2 w-3/4"></div>
                      <div className="h-3 bg-[rgba(74,144,217,0.1)] rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="h-3 bg-[rgba(74,144,217,0.1)] rounded w-1/3 mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-[rgba(74,144,217,0.1)] rounded w-16"></div>
                    <div className="h-6 bg-[rgba(74,144,217,0.1)] rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-[#6b7a94] mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-[#4a90d9] text-[#0a0f1a] rounded hover:bg-[#6ba8eb] transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : filteredProviders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6b7a94]">No providers found in this area. Try a different location or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProviders.map((provider) => (
                <a
                  key={provider.id}
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 cursor-pointer group"
                >
                  {/* Top Row: Image + Info */}
                  <div className="flex gap-4 mb-4">
                    {/* Image Container */}
                    <div className="w-14 h-14 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {provider.image ? (
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg className="w-7 h-7 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>

                    {/* Provider Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-[#e8edf5] mb-1 truncate group-hover:text-[#4a90d9] transition-colors">
                        {provider.name}
                      </h3>
                      <p className="text-[12px] text-[#6b7a94] truncate">
                        {provider.address}
                      </p>
                    </div>
                  </div>

                  {/* Rating Row */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#f5c518] text-sm">★</span>
                    <span className="text-[13px] font-medium text-[#e8edf5]">{provider.rating}</span>
                    <span className="text-[12px] text-[#6b7a94]">({provider.reviewCount})</span>
                    <span className="text-[12px] text-[#4a90d9] ml-1">{provider.distanceText}</span>
                    {provider.priceRange && (
                      <span className="text-[12px] text-[#6b7a94] ml-auto">{provider.priceRange}</span>
                    )}
                  </div>

                  {/* Status & Category Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-[10px] font-semibold px-3 py-1.5 rounded-md ${
                      provider.isOpen
                        ? "bg-[rgba(34,197,94,0.15)] text-[#22c55e]"
                        : "bg-[rgba(239,68,68,0.15)] text-[#ef4444]"
                    }`}>
                      {provider.isOpen ? "Open" : "Closed"}
                    </span>
                    <span className="text-[10px] font-medium px-3 py-1.5 rounded-md bg-[rgba(74,144,217,0.12)] text-[#4a90d9]">
                      {provider.category}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Yelp Attribution */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[11px] text-[#3d4a61]">
            Business data provided by <span className="text-[#c41200]">Yelp</span>
          </p>
        </div>
      </section>

      {/* Become a Provider CTA */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto text-center bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-12">
          <h3 className="text-2xl font-light mb-4">Are You a Premium Service Provider?</h3>
          <p className="text-[#6b7a94] mb-6">
            Join our network of verified automotive care specialists. Get discovered by discerning vehicle owners looking for quality service.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors">
            Apply to Join
          </Link>
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
