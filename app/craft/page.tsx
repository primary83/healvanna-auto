"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useGeoLocation, calculateDistance } from "../hooks/useGeoLocation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface CraftProvider {
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
  phone: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  distance: string;
  url: string;
  priceRange: string;
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

const categories = ["All", "Body Shops", "Auto Glass", "Collision Repair", "Auto Painting"];
const locations = ["My Location", "Orlando, FL", "Winter Garden, FL", "Kissimmee, FL", "Tampa, FL", "Jacksonville, FL", "Miami, FL", "Austin, TX", "Los Angeles, CA", "New York, NY"];
const sortOptions = [
  { label: "Nearest", value: "distance" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

export default function CraftPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("My Location");
  const [sortBy, setSortBy] = useState("distance");
  const [providers, setProviders] = useState<CraftProvider[]>([]);
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

  // Fetch providers from Google Places API when location changes
  useEffect(() => {
    const fetchProviders = async () => {
      if (!centerLat || !centerLon) return;

      setIsLoadingProviders(true);
      setError(null);

      try {
        // Google Places categories for body shops, collision repair, and related services
        const categories = "bodyshops,autoglass,auto_paint";
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

        const response = await fetch(`/api/places?${params.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to fetch providers");
        }

        const data = await response.json();
        setProviders(data.providers || []);
      } catch (err) {
        console.error("Error fetching providers:", err);
        setError("Unable to load shops. Please try again later.");
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
      <Navigation activeItem="SERVICES" />

      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] font-medium">Craft Directory</div>
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
            Body Shops & <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Restoration</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] leading-relaxed">
            Find certified collision repair specialists, luxury body shops, and master restoration craftsmen. Real reviews and ratings powered by Google.
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
                placeholder="Search by name, specialty, or certification..."
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
              "Loading shops..."
            ) : error ? (
              <span className="text-[#ef4444]">{error}</span>
            ) : (
              <>
                Showing <span className="text-[#e8edf5] font-medium">{filteredProviders.length}</span> certified shops
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
                <div key={i} className="bg-[rgba(15,22,40,0.6)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.12)] animate-pulse">
                  <div className="h-40 bg-[rgba(74,144,217,0.1)]"></div>
                  <div className="p-5">
                    <div className="h-4 bg-[rgba(74,144,217,0.1)] rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-[rgba(74,144,217,0.1)] rounded w-1/2 mb-3"></div>
                    <div className="h-3 bg-[rgba(74,144,217,0.1)] rounded w-1/3 mb-4"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-[rgba(74,144,217,0.1)] rounded w-16"></div>
                      <div className="h-6 bg-[rgba(74,144,217,0.1)] rounded w-24"></div>
                    </div>
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
              <p className="text-[#6b7a94]">No shops found in this area. Try a different location or search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProviders.map((provider) => (
                <a
                  key={provider.id}
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(15,22,40,0.6)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 cursor-pointer group"
                >
                  {/* Hero Image */}
                  <div className="relative h-40 w-full bg-gradient-to-br from-[rgba(74,144,217,0.15)] to-[rgba(15,22,40,0.8)]">
                    {provider.image ? (
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-[#4a90d9]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(15,22,40,0.8)] to-transparent" />
                  </div>

                  {/* Info Section */}
                  <div className="p-5">
                    <h3 className="text-[15px] font-semibold text-[#e8edf5] mb-1 truncate group-hover:text-[#4a90d9] transition-colors">
                      {provider.name}
                    </h3>
                    <p className="text-[12px] text-[#6b7a94] truncate mb-3">
                      {provider.address}
                    </p>

                    {/* Rating Row */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#f5c518] text-sm">★</span>
                      <span className="text-[13px] font-medium text-[#e8edf5]">{provider.rating}</span>
                      <span className="text-[12px] text-[#6b7a94]">({provider.reviewCount})</span>
                      <span className="text-[12px] text-[#4a90d9] ml-1">{provider.distanceText}</span>
                      {provider.priceRange && (
                        <span className="text-[12px] text-[#6b7a94] ml-auto">{provider.priceRange}</span>
                      )}
                    </div>

                    {/* Category Tag */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-medium px-3 py-1.5 rounded-md bg-[rgba(74,144,217,0.12)] text-[#4a90d9]">
                        {provider.category}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Google Attribution */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[11px] text-[#3d4a61]">
            Business data provided by <span className="text-[#4285f4]">Google</span>
          </p>
        </div>
      </section>

      {/* Insurance Partner Section */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-light mb-4">Insurance Claim Assistance</h3>
                <p className="text-[#6b7a94] mb-6">
                  All our verified shops work directly with major insurance providers. Get OEM-quality repairs without the hassle of dealing with adjusters.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6b7a94]">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4a90d9]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Direct Insurance Billing
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4a90d9]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    OEM Parts Guaranteed
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#4a90d9]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lifetime Warranty
                  </span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <Link href="/contact" className="inline-block px-8 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors">
                  Find a Shop Near You
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
