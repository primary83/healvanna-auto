"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DirectoryState, DirectoryCity, Provider } from "../lib/types";
import { SERVICE_CATEGORIES } from "../lib/services";
import { getCitiesByState, getCityUrl } from "../lib/directoryData";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ProviderCard from "./ProviderCard";
import { CompareBar } from "./CompareProviders";

interface DirectoryCityContentProps {
  state: DirectoryState;
  city: DirectoryCity;
}

const sortOptions = [
  { label: "Nearest", value: "distance" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

export default function DirectoryCityContent({
  state,
  city,
}: DirectoryCityContentProps) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [activeCategory, setActiveCategory] = useState("all");
  const [compareList, setCompareList] = useState<Provider[]>([]);

  function handleCompareToggle(provider: Provider) {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === provider.id);
      if (exists) return prev.filter((p) => p.id !== provider.id);
      if (prev.length >= 3) return prev;
      return [...prev, provider];
    });
  }

  useEffect(() => {
    const fetchProviders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const categories =
          activeCategory === "all"
            ? "autodetailing,carwash,autocleaning,vehiclewraps,autocustomization,bodyshops,autoglass,auto_paint"
            : SERVICE_CATEGORIES.find((s) => s.slug === activeCategory)
                ?.yelpCategories || "autodetailing";

        const params = new URLSearchParams({
          latitude: city.latitude.toString(),
          longitude: city.longitude.toString(),
          categories,
          limit: "20",
          sort_by:
            sortBy === "distance"
              ? "distance"
              : sortBy === "rating"
              ? "rating"
              : "review_count",
        });

        if (searchQuery) params.set("term", searchQuery);

        const res = await fetch(`/api/yelp?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch providers");
        const data = await res.json();
        setProviders(data.providers || []);
      } catch {
        setError("Unable to load providers. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProviders();
  }, [city.latitude, city.longitude, activeCategory, sortBy, searchQuery]);

  const otherCities = getCitiesByState(state.slug).filter(
    (c) => c.slug !== city.slug
  );

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="DIRECTORY" />

      {/* Hero + Breadcrumbs */}
      <section className="pt-24 pb-6 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b7a94] mb-6">
            <Link href="/" className="hover:text-[#e8edf5] transition-colors">
              Home
            </Link>
            <span>&gt;</span>
            <Link
              href="/directory"
              className="text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            >
              Directory
            </Link>
            <span>&gt;</span>
            <Link
              href={`/directory/${state.slug}`}
              className="text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            >
              {state.name}
            </Link>
            <span>&gt;</span>
            <span className="text-[#e8edf5]">{city.name}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extralight mb-4 leading-tight">
            Car Services in{" "}
            <span className="italic text-[#4a90d9]">
              {city.name}
            </span>
            , {state.abbreviation}
          </h1>
          <p className="text-[#6b7a94] text-lg max-w-2xl leading-relaxed">
            Find and compare the best car service providers in {city.name},{" "}
            {state.abbreviation}. Real reviews, ratings, and contact
            information.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-[12px] font-medium transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-[#4a90d9] text-[#0a0f1a]"
                  : "bg-[rgba(74,144,217,0.08)] text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[rgba(74,144,217,0.15)]"
              }`}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES.map((service) => (
              <button
                key={service.slug}
                onClick={() => setActiveCategory(service.slug)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-[12px] font-medium transition-all duration-200 ${
                  activeCategory === service.slug
                    ? "bg-[#4a90d9] text-[#0a0f1a]"
                    : "bg-[rgba(74,144,217,0.08)] text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[rgba(74,144,217,0.15)]"
                }`}
              >
                {service.shortName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search + Sort */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7a94]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by business name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[13px] text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[13px] text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] transition-colors appearance-none cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Provider Grid */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-[1200px] mx-auto">
          {isLoading ? (
            <>
              <div className="text-[13px] text-[#6b7a94] mb-4">
                Loading providers...
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.08)] animate-pulse"
                  >
                    <div className="flex gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-[rgba(74,144,217,0.1)]" />
                      <div className="flex-1">
                        <div className="h-4 bg-[rgba(74,144,217,0.1)] rounded w-3/4 mb-2" />
                        <div className="h-3 bg-[rgba(74,144,217,0.06)] rounded w-1/2" />
                      </div>
                    </div>
                    <div className="h-3 bg-[rgba(74,144,217,0.06)] rounded w-full mb-3" />
                    <div className="h-3 bg-[rgba(74,144,217,0.06)] rounded w-2/3 mb-4" />
                    <div className="flex gap-2">
                      <div className="h-9 bg-[rgba(74,144,217,0.06)] rounded flex-1" />
                      <div className="h-9 bg-[rgba(74,144,217,0.06)] rounded flex-1" />
                      <div className="h-9 bg-[rgba(74,144,217,0.06)] rounded flex-1" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : error ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#ef4444]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <p className="text-[#6b7a94] mb-4">{error}</p>
              <button
                onClick={() => setActiveCategory(activeCategory)}
                className="px-6 py-2.5 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] text-sm font-medium rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : providers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(74,144,217,0.1)] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#4a90d9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <p className="text-[#6b7a94] mb-2">
                No providers found in {city.name} for this category.
              </p>
              <p className="text-[12px] text-[#3d4a61]">
                Try selecting a different service category or search term.
              </p>
            </div>
          ) : (
            <>
              <div className="text-[13px] text-[#6b7a94] mb-4">
                {providers.length} provider{providers.length !== 1 ? "s" : ""}{" "}
                found in {city.name}, {state.abbreviation}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {providers.map((provider) => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    onCompareToggle={handleCompareToggle}
                    isCompareSelected={
                      !!compareList.find((p) => p.id === provider.id)
                    }
                    compareDisabled={compareList.length >= 3}
                    providerLinkBase="/directory/provider"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Yelp Attribution */}
      {!isLoading && !error && providers.length > 0 && (
        <section className="px-6 md:px-12 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[11px] text-[#3d4a61] text-center">
              Provider data powered by Yelp. Ratings and reviews are from Yelp
              users.
            </p>
          </div>
        </section>
      )}

      {/* Other Cities */}
      {otherCities.length > 0 && (
        <section className="py-12 px-6 md:px-12 bg-[#0d1420]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2 font-medium">
              Explore More
            </div>
            <h2 className="text-xl font-extralight mb-6">
              Other Cities in{" "}
              <span className="italic text-[#4a90d9]">{state.name}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherCities.slice(0, 8).map((c) => (
                <Link
                  key={c.slug}
                  href={getCityUrl(state.slug, c.slug)}
                  className="group flex items-center justify-between p-3 rounded-lg bg-[rgba(15,22,40,0.4)] border border-[rgba(74,144,217,0.08)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300"
                >
                  <span className="text-[13px] text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                    {c.name}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-[#3d4a61] group-hover:text-[#4a90d9] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-extralight mb-4">
            Own a Business in{" "}
            <span className="italic text-[#4a90d9]">{city.name}</span>?
          </h2>
          <p className="text-[#6b7a94] mb-6 leading-relaxed">
            Get discovered by car owners in {city.name} looking for quality
            service providers.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] text-sm font-medium rounded-lg transition-colors duration-300"
          >
            List Your Business
          </Link>
        </div>
      </section>

      {/* Compare Bar */}
      <CompareBar
        selected={compareList}
        onRemove={(id) =>
          setCompareList((prev) => prev.filter((p) => p.id !== id))
        }
        onClear={() => setCompareList([])}
      />

      <Footer />
    </div>
  );
}
