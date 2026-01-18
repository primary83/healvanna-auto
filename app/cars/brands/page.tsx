import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Car Brands - Premium & Electric Vehicle Directory",
  description: "Explore all premium and electric vehicle brands in our directory. From Tesla to Porsche, Lucid to Mercedes-Benz, discover the finest vehicles from the world's top automakers.",
  keywords: ["car brands", "luxury car brands", "electric car brands", "Tesla", "Porsche", "Lucid", "Rivian", "BMW", "Mercedes-Benz", "Audi"],
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
              <p className="text-4xl font-extralight text-[#4a90d9] mb-2">12+</p>
              <p className="text-gray-400">Premium Brands</p>
            </div>
            <div>
              <p className="text-4xl font-extralight text-[#4a90d9] mb-2">50+</p>
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
