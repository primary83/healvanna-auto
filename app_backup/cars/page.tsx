"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Types
interface Car {
  id: number;
  make: string;
  model: string;
  year: string;
  category: string;
  image: string;
  range: string;
  acceleration: string;
  type: string;
  price: string;
  priceValue: number;
  rangeValue: number;
  chargingTime: string;
  cargo: string;
  safetyRating: number;
  horsepower: string;
}

// Extended car data with pricing
const allCars: Car[] = [
  { id: 1, make: "Tesla", model: "Model S Plaid", year: "2024", category: "Electric Sedan", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80", range: "396 mi", acceleration: "1.99s", type: "EV", price: "$89,990", priceValue: 89990, rangeValue: 396, chargingTime: "30 min", cargo: "28 cu ft", safetyRating: 5, horsepower: "1,020 hp" },
  { id: 2, make: "Porsche", model: "Taycan Turbo S", year: "2024", category: "Electric GT", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", range: "280 mi", acceleration: "2.6s", type: "EV", price: "$185,000", priceValue: 185000, rangeValue: 280, chargingTime: "22 min", cargo: "14 cu ft", safetyRating: 5, horsepower: "750 hp" },
  { id: 3, make: "Lucid", model: "Air Sapphire", year: "2024", category: "Ultra-Luxury EV", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80", range: "427 mi", acceleration: "1.89s", type: "EV", price: "$249,000", priceValue: 249000, rangeValue: 427, chargingTime: "20 min", cargo: "32 cu ft", safetyRating: 5, horsepower: "1,234 hp" },
  { id: 4, make: "Rivian", model: "R1S", year: "2024", category: "Electric SUV", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", range: "352 mi", acceleration: "3.0s", type: "EV", price: "$78,000", priceValue: 78000, rangeValue: 352, chargingTime: "35 min", cargo: "104 cu ft", safetyRating: 5, horsepower: "835 hp" },
  { id: 5, make: "Mercedes-Benz", model: "EQS 580", year: "2024", category: "Luxury EV Flagship", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", range: "350 mi", acceleration: "4.1s", type: "EV", price: "$104,400", priceValue: 104400, rangeValue: 350, chargingTime: "31 min", cargo: "22 cu ft", safetyRating: 5, horsepower: "516 hp" },
  { id: 6, make: "BMW", model: "i7 xDrive60", year: "2024", category: "Luxury EV Sedan", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", range: "318 mi", acceleration: "4.5s", type: "EV", price: "$119,300", priceValue: 119300, rangeValue: 318, chargingTime: "34 min", cargo: "19 cu ft", safetyRating: 5, horsepower: "536 hp" },
  { id: 7, make: "Tesla", model: "Model X Plaid", year: "2024", category: "Electric SUV", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80", range: "326 mi", acceleration: "2.5s", type: "EV", price: "$94,990", priceValue: 94990, rangeValue: 326, chargingTime: "32 min", cargo: "88 cu ft", safetyRating: 5, horsepower: "1,020 hp" },
  { id: 8, make: "Audi", model: "e-tron GT RS", year: "2024", category: "Electric GT", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", range: "232 mi", acceleration: "3.1s", type: "EV", price: "$164,150", priceValue: 164150, rangeValue: 232, chargingTime: "23 min", cargo: "13 cu ft", safetyRating: 5, horsepower: "637 hp" },
  { id: 9, make: "Rivian", model: "R1T", year: "2024", category: "Electric Truck", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", range: "352 mi", acceleration: "3.0s", type: "EV", price: "$73,000", priceValue: 73000, rangeValue: 352, chargingTime: "35 min", cargo: "68 cu ft", safetyRating: 5, horsepower: "835 hp" },
  { id: 10, make: "Lucid", model: "Air Grand Touring", year: "2024", category: "Luxury EV Sedan", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80", range: "516 mi", acceleration: "3.0s", type: "EV", price: "$138,000", priceValue: 138000, rangeValue: 516, chargingTime: "20 min", cargo: "32 cu ft", safetyRating: 5, horsepower: "819 hp" },
  { id: 11, make: "Tesla", model: "Model 3 Performance", year: "2024", category: "Electric Sedan", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80", range: "315 mi", acceleration: "3.1s", type: "EV", price: "$52,990", priceValue: 52990, rangeValue: 315, chargingTime: "25 min", cargo: "23 cu ft", safetyRating: 5, horsepower: "510 hp" },
  { id: 12, make: "Porsche", model: "Taycan 4S", year: "2024", category: "Electric GT", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", range: "227 mi", acceleration: "3.8s", type: "EV", price: "$106,400", priceValue: 106400, rangeValue: 227, chargingTime: "22 min", cargo: "14 cu ft", safetyRating: 5, horsepower: "522 hp" },
];

const brands = ["All", "Tesla", "Porsche", "Lucid", "Rivian", "Mercedes-Benz", "BMW", "Audi"];
const categories = ["All", "Electric Sedan", "Electric SUV", "Electric GT", "Electric Truck", "Ultra-Luxury EV", "Luxury EV Sedan", "Luxury EV Flagship"];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $75K", min: 0, max: 75000 },
  { label: "$75K - $100K", min: 75000, max: 100000 },
  { label: "$100K - $150K", min: 100000, max: 150000 },
  { label: "$150K+", min: 150000, max: Infinity },
];
const rangeOptions = [
  { label: "Any Range", min: 0 },
  { label: "200+ miles", min: 200 },
  { label: "300+ miles", min: 300 },
  { label: "400+ miles", min: 400 },
];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Range: High to Low", value: "range-desc" },
  { label: "Fastest 0-60", value: "acceleration" },
];

export default function CarsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [selectedRangeOption, setSelectedRangeOption] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    let result = allCars.filter((car) => {
      // Search filter
      const searchMatch =
        searchQuery === "" ||
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Brand filter
      const brandMatch = selectedBrand === "All" || car.make === selectedBrand;

      // Category filter
      const categoryMatch = selectedCategory === "All" || car.category === selectedCategory;

      // Price filter
      const priceRange = priceRanges[selectedPriceRange];
      const priceMatch = car.priceValue >= priceRange.min && car.priceValue < priceRange.max;

      // Range filter
      const rangeOption = rangeOptions[selectedRangeOption];
      const rangeMatch = car.rangeValue >= rangeOption.min;

      return searchMatch && brandMatch && categoryMatch && priceMatch && rangeMatch;
    });

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case "range-desc":
        result.sort((a, b) => b.rangeValue - a.rangeValue);
        break;
      case "acceleration":
        result.sort((a, b) => parseFloat(a.acceleration) - parseFloat(b.acceleration));
        break;
    }

    return result;
  }, [searchQuery, selectedBrand, selectedCategory, selectedPriceRange, selectedRangeOption, sortBy]);

  const toggleCompare = (id: number) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter((carId) => carId !== id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, id]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrand("All");
    setSelectedCategory("All");
    setSelectedPriceRange(0);
    setSelectedRangeOption(0);
    setSortBy("featured");
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
                item.name === "CARS"
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
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Vehicle Directory</div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Luxury & Electric <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Vehicles</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] leading-relaxed">
            Explore our curated collection of premium EVs and luxury vehicles. Compare specs, check availability, and find your perfect match.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3d4a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-4 bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.3)] rounded text-[#4a90d9] text-sm tracking-wider uppercase flex items-center gap-2 hover:bg-[rgba(74,144,217,0.2)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
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

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-medium tracking-wider uppercase text-[#4a90d9]">Filter Vehicles</h3>
                <button onClick={clearFilters} className="text-xs text-[#6b7a94] hover:text-[#e8edf5] transition-colors">
                  Clear All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Brand Filter */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#6b7a94] mb-3 block">Brand</label>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`px-3 py-1.5 text-xs rounded transition-colors ${
                          selectedBrand === brand
                            ? "bg-[#4a90d9] text-[#0a0f1a]"
                            : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:text-[#e8edf5]"
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#6b7a94] mb-3 block">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-sm text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#0a0f1a]">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#6b7a94] mb-3 block">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-sm text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] cursor-pointer"
                  >
                    {priceRanges.map((range, idx) => (
                      <option key={idx} value={idx} className="bg-[#0a0f1a]">
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Range Filter */}
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#6b7a94] mb-3 block">Minimum Range</label>
                  <select
                    value={selectedRangeOption}
                    onChange={(e) => setSelectedRangeOption(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-sm text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] cursor-pointer"
                  >
                    {rangeOptions.map((range, idx) => (
                      <option key={idx} value={idx} className="bg-[#0a0f1a]">
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-[#6b7a94]">
              Showing <span className="text-[#e8edf5] font-medium">{filteredCars.length}</span> vehicles
            </p>
            {compareList.length > 0 && (
              <button className="px-4 py-2 bg-[#4a90d9] text-[#0a0f1a] text-sm font-medium rounded hover:bg-[#6ba8eb] transition-colors">
                Compare ({compareList.length}/3)
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto">
          {filteredCars.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium mb-2">No vehicles found</h3>
              <p className="text-[#6b7a94] mb-6">Try adjusting your filters or search query</p>
              <button onClick={clearFilters} className="px-6 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-lg overflow-hidden border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                    <span className="absolute top-4 right-4 text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 bg-[#4a90d9] text-[#0a0f1a] rounded font-semibold">{car.type}</span>
                    <button
                      onClick={() => toggleCompare(car.id)}
                      className={`absolute top-4 left-4 w-8 h-8 rounded flex items-center justify-center transition-colors ${
                        compareList.includes(car.id) ? "bg-[#4a90d9] text-[#0a0f1a]" : "bg-[rgba(0,0,0,0.5)] text-[#e8edf5] hover:bg-[rgba(74,144,217,0.3)]"
                      }`}
                    >
                      {compareList.includes(car.id) ? "✓" : "+"}
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2.5 font-medium">{car.category}</div>
                    <div className="text-xl font-medium mb-1.5">
                      {car.make} {car.model}
                    </div>
                    <div className="text-[13px] text-[#6b7a94] mb-2">{car.year}</div>
                    <div className="text-2xl font-semibold text-[#4a90d9] mb-4">{car.price}</div>

                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <div className="text-[8px] tracking-[0.15em] uppercase text-[#3d4a61] mb-1">Range</div>
                        <div className="text-sm font-medium text-[#e8edf5]">{car.range}</div>
                      </div>
                      <div>
                        <div className="text-[8px] tracking-[0.15em] uppercase text-[#3d4a61] mb-1">0-60 mph</div>
                        <div className="text-sm font-medium text-[#e8edf5]">{car.acceleration}</div>
                      </div>
                      <div>
                        <div className="text-[8px] tracking-[0.15em] uppercase text-[#3d4a61] mb-1">Fast Charge</div>
                        <div className="text-sm font-medium text-[#e8edf5]">{car.chargingTime}</div>
                      </div>
                      <div>
                        <div className="text-[8px] tracking-[0.15em] uppercase text-[#3d4a61] mb-1">Power</div>
                        <div className="text-sm font-medium text-[#e8edf5]">{car.horsepower}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-5">
                      <div className="text-[8px] tracking-[0.15em] uppercase text-[#3d4a61] mr-2">Safety</div>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < car.safetyRating ? "text-[#4a90d9]" : "text-[#3d4a61]"}>
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Service Links Section */}
                    <div className="border-t border-[rgba(74,144,217,0.15)] pt-4 mt-1">
                      <div className="text-[9px] tracking-[0.15em] uppercase text-[#4a90d9] mb-3 font-medium">Find Services for This Vehicle</div>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/care?vehicle=${encodeURIComponent(`${car.make} ${car.model}`)}`}
                          className="flex items-center gap-1.5 px-3 py-2 text-[10px] tracking-[0.05em] bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] rounded-md text-[#6b7a94] hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.4)] hover:bg-[rgba(74,144,217,0.15)] transition-all duration-300"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          Detailing
                        </Link>
                        <Link
                          href={`/care?vehicle=${encodeURIComponent(`${car.make} ${car.model}`)}&service=ppf`}
                          className="flex items-center gap-1.5 px-3 py-2 text-[10px] tracking-[0.05em] bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] rounded-md text-[#6b7a94] hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.4)] hover:bg-[rgba(74,144,217,0.15)] transition-all duration-300"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          PPF & Coating
                        </Link>
                        <Link
                          href={`/craft?vehicle=${encodeURIComponent(`${car.make} ${car.model}`)}`}
                          className="flex items-center gap-1.5 px-3 py-2 text-[10px] tracking-[0.05em] bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] rounded-md text-[#6b7a94] hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.4)] hover:bg-[rgba(74,144,217,0.15)] transition-all duration-300"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Body Shops
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Complete Vehicle Care</div>
            <h2 className="text-[clamp(24px,4vw,40px)] font-extralight tracking-tight mb-4">
              Services for Your <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Vehicle</span>
            </h2>
            <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto leading-relaxed">
              Found your dream car? Connect with verified service providers who specialize in premium electric and luxury vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Detailing Card */}
            <Link href="/care" className="group bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] rounded-xl p-8 border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                <svg className="w-7 h-7 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[#4a90d9] transition-colors">Premium Detailing</h3>
              <p className="text-[13px] text-[#6b7a94] mb-4 leading-relaxed">
                Expert detailing services to keep your EV looking showroom-fresh. Paint correction, interior restoration, and more.
              </p>
              <div className="flex items-center gap-2 text-[#4a90d9] text-sm font-medium">
                Find Detailers
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* PPF & Coating Card */}
            <Link href="/care?service=protection" className="group bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] rounded-xl p-8 border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                <svg className="w-7 h-7 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[#4a90d9] transition-colors">PPF & Ceramic Coating</h3>
              <p className="text-[13px] text-[#6b7a94] mb-4 leading-relaxed">
                Protect your investment with paint protection film and ceramic coatings from certified installers.
              </p>
              <div className="flex items-center gap-2 text-[#4a90d9] text-sm font-medium">
                Find Installers
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Body Shops Card */}
            <Link href="/craft" className="group bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] rounded-xl p-8 border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                <svg className="w-7 h-7 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-[#4a90d9] transition-colors">Body Shops & Collision</h3>
              <p className="text-[13px] text-[#6b7a94] mb-4 leading-relaxed">
                Find EV-certified body shops specializing in aluminum repair, collision work, and restoration.
              </p>
              <div className="flex items-center gap-2 text-[#4a90d9] text-sm font-medium">
                Find Body Shops
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Can't Find Section */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto text-center bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-12">
          <h3 className="text-2xl font-light mb-4">Can&apos;t Find Your Vehicle?</h3>
          <p className="text-[#6b7a94] mb-6">We&apos;re constantly adding new vehicles to our directory. Let us know what you&apos;re looking for.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors">
            Request a Vehicle
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
