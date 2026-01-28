import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All EV Car Brands - Electric Vehicle Directory | 28+ Brands",
  description: "Explore 28+ electric vehicle brands including Tesla, BYD, NIO, XPeng, Rivian, BMW, Mercedes-Benz, Porsche, and more. Compare Chinese EVs, luxury electrics, and affordable options.",
  keywords: ["electric car brands", "EV brands", "Chinese electric cars", "BYD", "NIO", "XPeng", "Tesla", "Porsche", "Lucid", "Rivian", "BMW", "Mercedes-Benz", "Audi", "Zeekr", "Li Auto", "Xiaomi car", "Hyundai Ioniq", "Kia EV", "VinFast", "Volvo electric"],
};

const brands = [
  {
    name: "Tesla",
    logo: "T",
    country: "United States",
    founded: "2003",
    specialty: "Electric Vehicles",
    description: "The pioneer of modern electric vehicles, Tesla leads the industry with cutting-edge technology, over-the-air updates, and the most extensive Supercharger network.",
    models: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
    slug: "tesla",
    color: "#e31937"
  },
  {
    name: "Porsche",
    logo: "P",
    country: "Germany",
    founded: "1931",
    specialty: "Sports Cars & Electric GT",
    description: "From the iconic 911 to the groundbreaking Taycan, Porsche combines racing heritage with electrified performance for the discerning driver.",
    models: ["Taycan", "911", "Cayenne", "Panamera", "Macan Electric"],
    slug: "porsche",
    color: "#c9002e"
  },
  {
    name: "Lucid",
    logo: "L",
    country: "United States",
    founded: "2007",
    specialty: "Ultra-Luxury EVs",
    description: "Setting new standards in EV range and luxury, Lucid delivers the most efficient electric powertrains wrapped in California-designed elegance.",
    models: ["Air Pure", "Air Touring", "Air Grand Touring", "Air Sapphire", "Gravity"],
    slug: "lucid",
    color: "#8b6914"
  },
  {
    name: "Rivian",
    logo: "R",
    country: "United States",
    founded: "2009",
    specialty: "Electric Adventure Vehicles",
    description: "Built for adventure, Rivian creates electric vehicles that conquer any terrain while maintaining premium comfort and zero emissions.",
    models: ["R1T", "R1S", "R2", "R3"],
    slug: "rivian",
    color: "#ff8c00"
  },
  {
    name: "Mercedes-Benz",
    logo: "MB",
    country: "Germany",
    founded: "1926",
    specialty: "Luxury Vehicles & EVs",
    description: "The inventor of the automobile continues to innovate with the EQ lineup, bringing S-Class luxury to the electric era.",
    models: ["EQS Sedan", "EQS SUV", "EQE Sedan", "EQE SUV", "EQB"],
    slug: "mercedes-benz",
    color: "#00adef"
  },
  {
    name: "BMW",
    logo: "BMW",
    country: "Germany",
    founded: "1916",
    specialty: "Sports Sedans & Electric i Series",
    description: "The Ultimate Driving Machine goes electric with the i Series, maintaining BMW's legendary dynamics with zero-emission powertrains.",
    models: ["i4", "i5", "i7", "iX", "iX1"],
    slug: "bmw",
    color: "#0066b1"
  },
  {
    name: "Audi",
    logo: "A",
    country: "Germany",
    founded: "1909",
    specialty: "Quattro Performance & e-tron EVs",
    description: "Audi's quattro heritage meets electric innovation in the e-tron lineup, delivering all-weather confidence with premium German engineering.",
    models: ["e-tron GT", "Q8 e-tron", "Q4 e-tron", "A6 e-tron"],
    slug: "audi",
    color: "#bb0a30"
  },
  {
    name: "Lotus",
    logo: "LO",
    country: "United Kingdom",
    founded: "1952",
    specialty: "Lightweight Sports Cars & EVs",
    description: "The masters of lightweight engineering bring their expertise to the electric era with the stunning Eletre and Emeya hypercars.",
    models: ["Eletre", "Emeya", "Emira"],
    slug: "lotus",
    color: "#ffd700"
  },
  {
    name: "Polestar",
    logo: "PS",
    country: "Sweden",
    founded: "2017",
    specialty: "Performance Electric Vehicles",
    description: "Born from Volvo's racing division, Polestar creates focused electric performance cars with Scandinavian minimalist design.",
    models: ["Polestar 2", "Polestar 3", "Polestar 4", "Polestar 5"],
    slug: "polestar",
    color: "#c4a052"
  },
  {
    name: "Genesis",
    logo: "G",
    country: "South Korea",
    founded: "2015",
    specialty: "Korean Luxury & EVs",
    description: "Hyundai's luxury division delivers exceptional value with striking design, advanced technology, and growing electric options.",
    models: ["Electrified G80", "Electrified GV70", "GV60", "G90"],
    slug: "genesis",
    color: "#1c1c1c"
  },
  {
    name: "Rolls-Royce",
    logo: "RR",
    country: "United Kingdom",
    founded: "1906",
    specialty: "Ultra-Luxury Vehicles",
    description: "The pinnacle of automotive luxury enters the electric era with the Spectre, bringing silent refinement to bespoke motoring.",
    models: ["Spectre", "Phantom", "Ghost", "Cullinan"],
    slug: "rolls-royce",
    color: "#660099"
  },
  {
    name: "Bentley",
    logo: "B",
    country: "United Kingdom",
    founded: "1919",
    specialty: "Grand Touring & Luxury",
    description: "British craftsmanship meets modern performance, with a commitment to fully electrify by 2030 while maintaining handcrafted excellence.",
    models: ["Continental GT", "Flying Spur", "Bentayga"],
    slug: "bentley",
    color: "#006847"
  },
  // Chinese EV Brands
  {
    name: "BYD",
    logo: "BYD",
    country: "China",
    founded: "1995",
    specialty: "Mass-Market & Premium EVs",
    description: "The world's largest EV manufacturer by volume, BYD combines advanced Blade Battery technology with aggressive pricing across sedans, SUVs, and luxury segments.",
    models: ["Seal", "Atto 3", "Dolphin", "Han", "Tang", "Seal U"],
    slug: "byd",
    color: "#c00000"
  },
  {
    name: "NIO",
    logo: "NIO",
    country: "China",
    founded: "2014",
    specialty: "Premium Smart EVs & Battery Swap",
    description: "Pioneering battery-swap technology and premium EV design, NIO delivers a luxury ownership experience with innovative power solutions and an AI-driven cockpit.",
    models: ["ET7", "ET5", "ES8", "ES6", "EC7", "EC6"],
    slug: "nio",
    color: "#00a0e9"
  },
  {
    name: "XPeng",
    logo: "XP",
    country: "China",
    founded: "2014",
    specialty: "Smart EVs & Autonomous Driving",
    description: "A technology-first automaker leading in advanced driver assistance and smart cockpit features, with competitive pricing across its growing lineup.",
    models: ["G9", "G6", "P7", "X9", "Mona M03"],
    slug: "xpeng",
    color: "#00c853"
  },
  {
    name: "Li Auto",
    logo: "Li",
    country: "China",
    founded: "2015",
    specialty: "Extended-Range & Pure Electric SUVs",
    description: "Known for family-oriented smart SUVs, Li Auto pioneered the extended-range EV concept in China and now offers both EREV and pure electric platforms.",
    models: ["Mega", "L9", "L8", "L7", "L6"],
    slug: "li-auto",
    color: "#1a73e8"
  },
  {
    name: "Zeekr",
    logo: "ZK",
    country: "China",
    founded: "2021",
    specialty: "Premium Performance EVs",
    description: "Geely's premium EV brand combines Scandinavian-inspired design with cutting-edge battery technology, including the ultra-fast-charging Golden Battery architecture.",
    models: ["001", "009", "X", "007", "Mix"],
    slug: "zeekr",
    color: "#6c5ce7"
  },
  {
    name: "BYD Yangwang",
    logo: "YW",
    country: "China",
    founded: "2023",
    specialty: "Ultra-Luxury Performance EVs",
    description: "BYD's ultra-premium brand pushes the boundaries of EV performance with advanced e4 four-motor technology and luxury positioning to rival established European marques.",
    models: ["U8", "U9"],
    slug: "yangwang",
    color: "#b8860b"
  },
  {
    name: "Xiaomi",
    logo: "Mi",
    country: "China",
    founded: "2021",
    specialty: "Tech-Forward Electric Vehicles",
    description: "The tech giant brings its ecosystem expertise to automotive, delivering a highly integrated smart EV with industry-leading software and competitive performance.",
    models: ["SU7", "SU7 Pro", "SU7 Max", "YU7"],
    slug: "xiaomi",
    color: "#ff6900"
  },
  // Other Global EV Brands
  {
    name: "Hyundai",
    logo: "H",
    country: "South Korea",
    founded: "1967",
    specialty: "Mainstream & Performance EVs",
    description: "Leading the charge with the acclaimed Ioniq lineup, Hyundai delivers 800V ultra-fast charging and award-winning design at accessible price points.",
    models: ["Ioniq 5", "Ioniq 6", "Ioniq 9", "Kona Electric"],
    slug: "hyundai",
    color: "#002c5f"
  },
  {
    name: "Kia",
    logo: "K",
    country: "South Korea",
    founded: "1944",
    specialty: "Value-Driven Electric Vehicles",
    description: "Kia's bold new design language and E-GMP platform deliver impressive range, fast charging, and spacious interiors at competitive prices.",
    models: ["EV6", "EV9", "EV3", "Niro EV"],
    slug: "kia",
    color: "#05141f"
  },
  {
    name: "Volvo",
    logo: "V",
    country: "Sweden",
    founded: "1927",
    specialty: "Safety-First Electric Vehicles",
    description: "Committed to becoming fully electric by 2030, Volvo brings its legendary safety focus and Scandinavian minimalism to a growing range of premium EVs.",
    models: ["EX90", "EX30", "EC40", "XC40 Recharge"],
    slug: "volvo",
    color: "#003057"
  },
  {
    name: "Volkswagen",
    logo: "VW",
    country: "Germany",
    founded: "1937",
    specialty: "Accessible Electric Mobility",
    description: "The people's car company brings electric mobility to the mainstream with its dedicated MEB platform, making EVs accessible to millions worldwide.",
    models: ["ID.4", "ID. Buzz", "ID.7", "ID.3"],
    slug: "volkswagen",
    color: "#001e50"
  },
  {
    name: "Ford",
    logo: "F",
    country: "United States",
    founded: "1903",
    specialty: "Electric Trucks & Performance",
    description: "America's truck brand electrifies its icons with the F-150 Lightning and Mustang Mach-E, bringing EV capability to mainstream American buyers.",
    models: ["F-150 Lightning", "Mustang Mach-E", "E-Transit"],
    slug: "ford",
    color: "#003478"
  },
  {
    name: "Chevrolet",
    logo: "CH",
    country: "United States",
    founded: "1911",
    specialty: "Affordable & Performance EVs",
    description: "GM's Ultium platform powers Chevrolet's electric future, from the affordable Equinox EV to the reborn Blazer EV and iconic Silverado EV truck.",
    models: ["Equinox EV", "Blazer EV", "Silverado EV"],
    slug: "chevrolet",
    color: "#d1a836"
  },
  {
    name: "VinFast",
    logo: "VF",
    country: "Vietnam",
    founded: "2017",
    specialty: "Affordable Global EVs",
    description: "Vietnam's first global automaker is rapidly expanding with competitively priced electric SUVs and sedans, targeting value-conscious EV buyers worldwide.",
    models: ["VF 8", "VF 9", "VF 7", "VF 6", "VF 3"],
    slug: "vinfast",
    color: "#1a3c6d"
  },
  {
    name: "Jaguar",
    logo: "J",
    country: "United Kingdom",
    founded: "1922",
    specialty: "Ultra-Luxury Electric GT",
    description: "Reinventing itself as an all-electric ultra-luxury brand, Jaguar is preparing a bold new lineup of striking electric vehicles with prices starting above $100,000.",
    models: ["I-Pace", "Type 00"],
    slug: "jaguar",
    color: "#1a472a"
  },
  {
    name: "Cadillac",
    logo: "CA",
    country: "United States",
    founded: "1902",
    specialty: "American Luxury EVs",
    description: "GM's luxury division goes all-electric with the Ultium platform, blending American boldness with cutting-edge technology in its new electric lineup.",
    models: ["Lyriq", "Celestiq", "Escalade IQ", "Optiq"],
    slug: "cadillac",
    color: "#a6192e"
  },
];

export default function AllBrandsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-wider">
            <span className="text-white">HEALVANNA</span>
            <span className="text-[#4a90d9] ml-2">AUTO</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-white border-b-2 border-[#4a90d9] pb-1">CARS</Link>
            <Link href="/care" className="text-gray-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-gray-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/insights" className="text-gray-300 hover:text-white transition-colors">INSIGHTS</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#4a90d9] tracking-[0.3em] text-sm mb-4">BRAND DIRECTORY</p>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-2">
            All <span className="italic text-[#4a90d9]">Brands</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Explore the world's finest automotive manufacturers. From legendary heritage brands 
            to innovative electric pioneers, discover vehicles that define excellence.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/cars" className="text-[#4a90d9] hover:underline">Cars</Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">All Brands</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-[#4a90d9] text-white rounded-full text-sm">
              All Brands
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              Electric Focus
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              Luxury
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              Performance
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              European
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              American
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              Chinese
            </button>
            <button className="px-6 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors">
              Asian
            </button>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <Link 
                href={`/cars?brand=${brand.slug}`} 
                key={brand.slug}
                className="group bg-[#0d1420] rounded-xl overflow-hidden border border-white/5 hover:border-[#4a90d9]/30 transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: brand.color + '20', color: brand.color }}
                  >
                    {brand.logo}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">{brand.country}</p>
                    <p className="text-gray-600 text-xs">Est. {brand.founded}</p>
                  </div>
                </div>

                <h3 className="text-xl font-light text-white mb-1">{brand.name}</h3>
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

      {/* Stats Section */}
      <section className="px-6 py-20 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extralight text-[#4a90d9] mb-2">28+</p>
              <p className="text-gray-400">Premium Brands</p>
            </div>
            <div>
              <p className="text-4xl font-extralight text-[#4a90d9] mb-2">120+</p>
              <p className="text-gray-400">Vehicle Models</p>
            </div>
            <div>
              <p className="text-4xl font-extralight text-[#4a90d9] mb-2">100%</p>
              <p className="text-gray-400">Expert Reviewed</p>
            </div>
            <div>
              <p className="text-4xl font-extralight text-[#4a90d9] mb-2">Weekly</p>
              <p className="text-gray-400">Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Electric Focus Section */}
      <section className="px-6 py-20">
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
              <Link href="/insights" className="text-[#4a90d9] text-sm hover:underline">
                Read our analysis →
              </Link>
            </div>
            <div className="bg-[#0d1420] rounded-xl p-8 border border-white/5">
              <h3 className="text-xl text-white mb-4">EV-Native Manufacturers</h3>
              <p className="text-gray-400 mb-4">
                Companies like Tesla, Lucid, and Rivian were built from the ground up for electric, 
                often leading in range, technology, and charging infrastructure.
              </p>
              <Link href="/insights" className="text-[#4a90d9] text-sm hover:underline">
                Compare approaches →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-[#0d1420]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extralight text-white mb-4">
            Can&apos;t Decide on a Brand?
          </h2>
          <p className="text-gray-400 mb-8">
            Our comparison guides pit the best models from different brands head-to-head, 
            helping you make an informed decision based on what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/insights"
              className="inline-block bg-[#4a90d9] text-white px-8 py-3 rounded-lg hover:bg-[#3a7bc8] transition-colors"
            >
              Read Comparisons
            </Link>
            <Link 
              href="/cars"
              className="inline-block bg-white/5 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Browse All Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            <span className="text-white">HEALVANNA</span>
            <span className="text-[#4a90d9] ml-2">AUTO</span>
          </Link>
          <p className="text-gray-500 mt-4">© 2025 Healvanna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
