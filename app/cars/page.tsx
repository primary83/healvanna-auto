"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const brands = [
  {
    name: "Tesla",
    logo: "T",
    country: "United States",
    region: "american",
    founded: "2003",
    specialty: "Electric Vehicles",
    description: "The pioneer of modern electric vehicles, Tesla leads the industry with cutting-edge technology and the most extensive Supercharger network.",
    models: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
    slug: "tesla",
    color: "#e31937",
    tags: ["electric"],
    link: "/cars/tesla",
  },
  {
    name: "Porsche",
    logo: "P",
    country: "Germany",
    region: "european",
    founded: "1931",
    specialty: "Sports Cars & Electric GT",
    description: "From the iconic 911 to the groundbreaking Taycan, Porsche combines racing heritage with electrified performance.",
    models: ["Taycan", "Macan Electric", "911", "Cayenne"],
    slug: "porsche",
    color: "#c9002e",
    tags: ["luxury", "performance"],
    link: "/cars/porsche",
  },
  {
    name: "Rivian",
    logo: "R",
    country: "United States",
    region: "american",
    founded: "2009",
    specialty: "Electric Adventure Vehicles",
    description: "Built for adventure, Rivian creates electric vehicles that conquer any terrain while maintaining premium comfort and zero emissions.",
    models: ["R1T", "R1S", "R2", "R3"],
    slug: "rivian",
    color: "#ff8c00",
    tags: ["electric"],
    link: "/cars/rivian",
  },
  {
    name: "BMW",
    logo: "BMW",
    country: "Germany",
    region: "european",
    founded: "1916",
    specialty: "Sports Sedans & Electric i Series",
    description: "The Ultimate Driving Machine goes electric with the i Series, maintaining BMW's legendary dynamics with zero-emission powertrains.",
    models: ["i4", "i5", "i7", "iX", "iX1"],
    slug: "bmw",
    color: "#0066b1",
    tags: ["luxury", "performance"],
    link: "/cars/bmw",
  },
  {
    name: "Mercedes-Benz",
    logo: "MB",
    country: "Germany",
    region: "european",
    founded: "1926",
    specialty: "Luxury Vehicles & EVs",
    description: "The inventor of the automobile continues to innovate with the EQ lineup, bringing S-Class luxury to the electric era.",
    models: ["EQS Sedan", "EQS SUV", "EQE Sedan", "EQE SUV", "EQB"],
    slug: "mercedes-benz",
    color: "#00adef",
    tags: ["luxury"],
    link: "/cars/mercedes",
  },
  {
    name: "BYD",
    logo: "BYD",
    country: "China",
    region: "chinese",
    founded: "1995",
    specialty: "Mass-Market & Premium EVs",
    description: "The world's largest EV manufacturer by volume, BYD combines advanced Blade Battery technology with aggressive pricing.",
    models: ["Seal", "Atto 3", "Dolphin", "Han", "Tang", "Seal U"],
    slug: "byd",
    color: "#c00000",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "NIO",
    logo: "NIO",
    country: "China",
    region: "chinese",
    founded: "2014",
    specialty: "Premium Smart EVs & Battery Swap",
    description: "Pioneering battery-swap technology and premium EV design, NIO delivers a luxury ownership experience with innovative power solutions.",
    models: ["ET7", "ET5", "ES8", "ES6", "EC7", "EC6"],
    slug: "nio",
    color: "#00a0e9",
    tags: ["electric", "luxury"],
    link: "/cars/brands",
  },
  {
    name: "XPeng",
    logo: "XP",
    country: "China",
    region: "chinese",
    founded: "2014",
    specialty: "Smart EVs & Autonomous Driving",
    description: "A technology-first automaker leading in advanced driver assistance and smart cockpit features.",
    models: ["G9", "G6", "P7", "X9", "Mona M03"],
    slug: "xpeng",
    color: "#00c853",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Li Auto",
    logo: "Li",
    country: "China",
    region: "chinese",
    founded: "2015",
    specialty: "Extended-Range & Pure Electric SUVs",
    description: "Known for family-oriented smart SUVs, Li Auto pioneered the extended-range EV concept in China.",
    models: ["Mega", "L9", "L8", "L7", "L6"],
    slug: "li-auto",
    color: "#1a73e8",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Zeekr",
    logo: "ZK",
    country: "China",
    region: "chinese",
    founded: "2021",
    specialty: "Premium Performance EVs",
    description: "Geely's premium EV brand combines Scandinavian-inspired design with cutting-edge battery technology.",
    models: ["001", "009", "X", "007", "Mix"],
    slug: "zeekr",
    color: "#6c5ce7",
    tags: ["electric", "performance"],
    link: "/cars/brands",
  },
  {
    name: "Xiaomi",
    logo: "Mi",
    country: "China",
    region: "chinese",
    founded: "2021",
    specialty: "Tech-Forward Electric Vehicles",
    description: "The tech giant brings its ecosystem expertise to automotive, delivering highly integrated smart EVs.",
    models: ["SU7", "SU7 Pro", "SU7 Max", "YU7"],
    slug: "xiaomi",
    color: "#ff6900",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "BYD Yangwang",
    logo: "YW",
    country: "China",
    region: "chinese",
    founded: "2023",
    specialty: "Ultra-Luxury Performance EVs",
    description: "BYD's ultra-premium brand pushes the boundaries of EV performance with advanced e4 four-motor technology.",
    models: ["U8", "U9"],
    slug: "yangwang",
    color: "#b8860b",
    tags: ["electric", "luxury", "performance"],
    link: "/cars/brands",
  },
  {
    name: "Lucid",
    logo: "L",
    country: "United States",
    region: "american",
    founded: "2007",
    specialty: "Ultra-Luxury EVs",
    description: "Setting new standards in EV range and luxury, Lucid delivers the most efficient electric powertrains.",
    models: ["Air Pure", "Air Touring", "Air Grand Touring", "Air Sapphire", "Gravity"],
    slug: "lucid",
    color: "#8b6914",
    tags: ["electric", "luxury"],
    link: "/cars/brands",
  },
  {
    name: "Hyundai",
    logo: "H",
    country: "South Korea",
    region: "asian",
    founded: "1967",
    specialty: "Mainstream & Performance EVs",
    description: "Leading the charge with the acclaimed Ioniq lineup, Hyundai delivers 800V ultra-fast charging and award-winning design.",
    models: ["Ioniq 5", "Ioniq 6", "Ioniq 9", "Kona Electric"],
    slug: "hyundai",
    color: "#002c5f",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Kia",
    logo: "K",
    country: "South Korea",
    region: "asian",
    founded: "1944",
    specialty: "Value-Driven Electric Vehicles",
    description: "Kia's bold design language and E-GMP platform deliver impressive range, fast charging, and spacious interiors.",
    models: ["EV6", "EV9", "EV3", "Niro EV"],
    slug: "kia",
    color: "#05141f",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Volvo",
    logo: "V",
    country: "Sweden",
    region: "european",
    founded: "1927",
    specialty: "Safety-First Electric Vehicles",
    description: "Committed to becoming fully electric by 2030, Volvo brings legendary safety focus and Scandinavian minimalism to premium EVs.",
    models: ["EX90", "EX30", "EC40", "XC40 Recharge"],
    slug: "volvo",
    color: "#003057",
    tags: ["electric", "luxury"],
    link: "/cars/brands",
  },
  {
    name: "Volkswagen",
    logo: "VW",
    country: "Germany",
    region: "european",
    founded: "1937",
    specialty: "Accessible Electric Mobility",
    description: "The people's car company brings electric mobility to the mainstream with its dedicated MEB platform.",
    models: ["ID.4", "ID. Buzz", "ID.7", "ID.3"],
    slug: "volkswagen",
    color: "#001e50",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Audi",
    logo: "A",
    country: "Germany",
    region: "european",
    founded: "1909",
    specialty: "Quattro Performance & e-tron EVs",
    description: "Audi's quattro heritage meets electric innovation in the e-tron lineup, delivering all-weather confidence.",
    models: ["e-tron GT", "Q8 e-tron", "Q4 e-tron", "A6 e-tron"],
    slug: "audi",
    color: "#bb0a30",
    tags: ["luxury", "performance"],
    link: "/cars/brands",
  },
  {
    name: "Ford",
    logo: "F",
    country: "United States",
    region: "american",
    founded: "1903",
    specialty: "Electric Trucks & Performance",
    description: "America's truck brand electrifies its icons with the F-150 Lightning and Mustang Mach-E.",
    models: ["F-150 Lightning", "Mustang Mach-E", "E-Transit"],
    slug: "ford",
    color: "#003478",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Polestar",
    logo: "PS",
    country: "Sweden",
    region: "european",
    founded: "2017",
    specialty: "Performance Electric Vehicles",
    description: "Born from Volvo's racing division, Polestar creates focused electric performance cars with Scandinavian minimalist design.",
    models: ["Polestar 2", "Polestar 3", "Polestar 4", "Polestar 5"],
    slug: "polestar",
    color: "#c4a052",
    tags: ["electric", "performance"],
    link: "/cars/brands",
  },
  {
    name: "Genesis",
    logo: "G",
    country: "South Korea",
    region: "asian",
    founded: "2015",
    specialty: "Korean Luxury & EVs",
    description: "Hyundai's luxury division delivers exceptional value with striking design and growing electric options.",
    models: ["Electrified G80", "Electrified GV70", "GV60"],
    slug: "genesis",
    color: "#1c1c1c",
    tags: ["luxury"],
    link: "/cars/brands",
  },
  {
    name: "Cadillac",
    logo: "CA",
    country: "United States",
    region: "american",
    founded: "1902",
    specialty: "American Luxury EVs",
    description: "GM's luxury division goes all-electric with the Ultium platform, blending American boldness with cutting-edge technology.",
    models: ["Lyriq", "Celestiq", "Escalade IQ", "Optiq"],
    slug: "cadillac",
    color: "#a6192e",
    tags: ["luxury", "electric"],
    link: "/cars/brands",
  },
  {
    name: "Chevrolet",
    logo: "CH",
    country: "United States",
    region: "american",
    founded: "1911",
    specialty: "Affordable & Performance EVs",
    description: "GM's Ultium platform powers Chevrolet's electric future, from the affordable Equinox EV to the iconic Silverado EV.",
    models: ["Equinox EV", "Blazer EV", "Silverado EV"],
    slug: "chevrolet",
    color: "#d1a836",
    tags: ["electric"],
    link: "/cars/brands",
  },
  {
    name: "Jaguar",
    logo: "J",
    country: "United Kingdom",
    region: "european",
    founded: "1922",
    specialty: "Ultra-Luxury Electric GT",
    description: "Reinventing itself as an all-electric ultra-luxury brand with a bold new lineup of striking electric vehicles.",
    models: ["I-Pace", "Type 00"],
    slug: "jaguar",
    color: "#1a472a",
    tags: ["luxury"],
    link: "/cars/brands",
  },
  {
    name: "Lotus",
    logo: "LO",
    country: "United Kingdom",
    region: "european",
    founded: "1952",
    specialty: "Lightweight Sports Cars & EVs",
    description: "The masters of lightweight engineering bring their expertise to the electric era with stunning hypercars.",
    models: ["Eletre", "Emeya", "Emira"],
    slug: "lotus",
    color: "#ffd700",
    tags: ["performance", "luxury"],
    link: "/cars/brands",
  },
  {
    name: "Rolls-Royce",
    logo: "RR",
    country: "United Kingdom",
    region: "european",
    founded: "1906",
    specialty: "Ultra-Luxury Vehicles",
    description: "The pinnacle of automotive luxury enters the electric era with the Spectre, bringing silent refinement to bespoke motoring.",
    models: ["Spectre", "Phantom", "Ghost", "Cullinan"],
    slug: "rolls-royce",
    color: "#660099",
    tags: ["luxury"],
    link: "/cars/brands",
  },
  {
    name: "Bentley",
    logo: "B",
    country: "United Kingdom",
    region: "european",
    founded: "1919",
    specialty: "Grand Touring & Luxury",
    description: "British craftsmanship meets modern performance, with a commitment to fully electrify by 2030.",
    models: ["Continental GT", "Flying Spur", "Bentayga"],
    slug: "bentley",
    color: "#006847",
    tags: ["luxury"],
    link: "/cars/brands",
  },
  {
    name: "VinFast",
    logo: "VF",
    country: "Vietnam",
    region: "asian",
    founded: "2017",
    specialty: "Affordable Global EVs",
    description: "Vietnam's first global automaker is rapidly expanding with competitively priced electric SUVs and sedans.",
    models: ["VF 8", "VF 9", "VF 7", "VF 6", "VF 3"],
    slug: "vinfast",
    color: "#1a3c6d",
    tags: ["electric"],
    link: "/cars/brands",
  },
];

const filters = [
  { label: "All Brands", value: "all" },
  { label: "Electric Focus", value: "electric" },
  { label: "Luxury", value: "luxury" },
  { label: "Performance", value: "performance" },
  { label: "European", value: "european" },
  { label: "American", value: "american" },
  { label: "Chinese", value: "chinese" },
  { label: "Asian", value: "asian" },
];

export default function CarsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredBrands = activeFilter === "all"
    ? brands
    : ["electric", "luxury", "performance"].includes(activeFilter)
      ? brands.filter((b) => b.tags.includes(activeFilter))
      : brands.filter((b) => b.region === activeFilter);

  const featuredCars = [
    { id: 1, make: "Tesla", model: "Model S Plaid", year: "2024", category: "Electric Sedan", image: "/cars/tesla/model-s.png", range: "396 mi", acceleration: "1.99s", type: "EV", link: "/cars/tesla/model-s" },
    { id: 2, make: "Tesla", model: "Model 3", year: "2024", category: "Electric Sedan", image: "/cars/tesla/model-3.png", range: "333 mi", acceleration: "3.1s", type: "EV", link: "/cars/tesla/model-3" },
    { id: 3, make: "Tesla", model: "Model Y", year: "2024", category: "Electric SUV", image: "/cars/tesla/model-y.png", range: "310 mi", acceleration: "3.5s", type: "EV", link: "/cars/tesla/model-y" },
    { id: 4, make: "Tesla", model: "Model X", year: "2024", category: "Luxury Electric SUV", image: "/cars/tesla/model-x.png", range: "348 mi", acceleration: "2.5s", type: "EV", link: "/cars/tesla/model-x" },
    { id: 5, make: "Tesla", model: "Cybertruck", year: "2024", category: "Electric Truck", image: "/cars/tesla/cybertruck.png", range: "318 mi", acceleration: "2.6s", type: "EV", link: "/cars/tesla/cybertruck" },
    { id: 6, make: "Porsche", model: "Taycan Turbo S", year: "2024", category: "Electric GT", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", range: "280 mi", acceleration: "2.6s", type: "EV", link: "/cars/porsche-taycan-turbo-s" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CARS" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#4a90d9] tracking-[0.3em] text-sm mb-4 font-medium">BRAND DIRECTORY</p>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-2">
            All <span className="italic text-[#4a90d9]">Brands</span>
          </h1>
          <p className="text-[#6b7a94] text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Explore the world&apos;s finest automotive manufacturers. From legendary heritage brands
            to innovative electric pioneers, discover vehicles that define excellence.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-[#4a90d9] text-white shadow-[0_4px_16px_rgba(74,144,217,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#0d1424] rounded-xl p-5 border border-white/5 text-center">
              <p className="text-2xl font-extralight text-[#4a90d9] mb-1">28+</p>
              <p className="text-[#6b7a94] text-xs">Premium Brands</p>
            </div>
            <div className="bg-[#0d1424] rounded-xl p-5 border border-white/5 text-center">
              <p className="text-2xl font-extralight text-[#4a90d9] mb-1">120+</p>
              <p className="text-[#6b7a94] text-xs">Vehicle Models</p>
            </div>
            <div className="bg-[#0d1424] rounded-xl p-5 border border-white/5 text-center">
              <p className="text-2xl font-extralight text-[#4a90d9] mb-1">100%</p>
              <p className="text-[#6b7a94] text-xs">Expert Reviewed</p>
            </div>
            <div className="bg-[#0d1424] rounded-xl p-5 border border-white/5 text-center">
              <p className="text-2xl font-extralight text-[#4a90d9] mb-1">Weekly</p>
              <p className="text-[#6b7a94] text-xs">Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <Link
                href={brand.link}
                key={brand.slug}
                className="group bg-[#0d1420] rounded-xl overflow-hidden border border-white/5 hover:border-[#4a90d9]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg"
                    style={{ backgroundColor: brand.color + "20", color: brand.color }}
                  >
                    {brand.logo}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">{brand.country}</p>
                    <p className="text-gray-600 text-xs">Est. {brand.founded}</p>
                  </div>
                </div>

                <h3 className="text-xl font-light text-white mb-1 group-hover:text-[#4a90d9] transition-colors">{brand.name}</h3>
                <p className="text-[#4a90d9] text-sm mb-3">{brand.specialty}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{brand.description}</p>

                <div className="mb-4">
                  <p className="text-gray-500 text-xs mb-2">Popular Models</p>
                  <div className="flex flex-wrap gap-2">
                    {brand.models.slice(0, 4).map((model) => (
                      <span
                        key={model}
                        className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded"
                      >
                        {model}
                      </span>
                    ))}
                    {brand.models.length > 4 && (
                      <span className="text-xs text-gray-500">+{brand.models.length - 4} more</span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[#4a90d9] text-sm group-hover:translate-x-1 transition-transform inline-block">
                    Explore {brand.name} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Featured</div>
            <h2 className="text-2xl font-light tracking-tight mb-2">Popular Models</h2>
            <p className="text-[#6b7a94] text-sm">Explore our curated selection of exceptional electric vehicles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Link key={car.id} href={car.link} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block">
                <div className="h-48 overflow-hidden relative">
                  {car.image.startsWith('/') ? (
                    <Image
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      fill
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  ) : (
                    <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold">{car.type}</span>
                  </div>
                  <div className="text-lg font-medium mb-1">{car.make} {car.model}</div>
                  <div className="text-xs text-[#6b7a94] mb-4">{car.year}</div>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(74,144,217,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded block text-center">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Electric Revolution Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extralight text-white text-center mb-4">
            The Electric <span className="italic text-[#4a90d9]">Revolution</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Every major automaker is transitioning to electric. We track their progress and help you
            find the best EVs from both established luxury brands and innovative newcomers.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0d1420] rounded-xl p-8 border border-white/5">
              <h3 className="text-xl text-white mb-4">Legacy Brands Going Electric</h3>
              <p className="text-gray-400 mb-4">
                Traditional luxury automakers like Mercedes-Benz, BMW, and Porsche are investing billions
                in electrification, bringing decades of refinement to EV technology.
              </p>
              <Link href="/blog" className="text-[#4a90d9] text-sm hover:underline">
                Read our analysis →
              </Link>
            </div>
            <div className="bg-[#0d1420] rounded-xl p-8 border border-white/5">
              <h3 className="text-xl text-white mb-4">EV-Native Manufacturers</h3>
              <p className="text-gray-400 mb-4">
                Companies like Tesla, Lucid, and Rivian were built from the ground up for electric,
                often leading in range, technology, and charging infrastructure.
              </p>
              <Link href="/blog" className="text-[#4a90d9] text-sm hover:underline">
                Compare approaches →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Found Your Perfect EV?</h2>
          <p className="text-[#6b7a94] mb-8">Protect your investment with our premium Care services - ceramic coating, PPF, and detailing from verified specialists.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/blog" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">
              Read EV Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
