"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CarsPage() {
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
      <section className="pt-32 pb-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Car Directory</div>
          <h1 className="text-[clamp(40px,5vw,56px)] font-extralight tracking-tight mb-4">
            Electric Vehicles
          </h1>
          <p className="text-[17px] text-[#6b7a94] max-w-[600px] leading-relaxed">
            Explore our complete directory of 120+ electric vehicles across 22+ brands. Browse from Tesla to BYD, NIO to Porsche — the most comprehensive EV directory.
          </p>
        </div>
      </section>

      {/* Browse by Brand Section */}
      <section className="py-16 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-light tracking-tight mb-2">Browse by Brand</h2>
            <p className="text-[#6b7a94] text-sm">Select a manufacturer to explore all available models</p>
          </div>
          
          {/* Tesla - Featured Brand */}
          <Link href="/cars/tesla" className="block mb-6">
            <div className="bg-gradient-to-r from-[rgba(220,38,38,0.1)] to-[rgba(15,22,40,1)] rounded-2xl overflow-hidden border border-[rgba(220,38,38,0.2)] hover:border-[rgba(220,38,38,0.5)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_32px_64px_-16px_rgba(220,38,38,0.2)] group">
              <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2">
                      <svg viewBox="0 0 278.7 36.3" className="w-full h-auto">
                        <path fill="#e82127" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6zM31.3 14.4v7h18.2v21h7.1v-21H89v-7H31.3zM174.4 14.4v21.9h40.1v-7h-33.1v-2.3h33.1v-12.6h-40.1zm7 7h26.1v2.3h-26.1v-2.3zM79.9 14.4v21.9H120v-7H87v-2.3h33V14.4H79.9zm7 7h26.1v2.3H86.9v-2.3zM0 14.4l17.8 21.9h8.9L9 14.4H0zm21.7 0l17.8 21.9h8.9L30.5 14.4h-8.8zM129.5 14.4v21.9h7V14.4h-7zM147.9 14.4v21.9h7v-21h25.6V7.1h-32.6v7.3z"/>
                        <path fill="#e82127" d="M139.3 0C115.4 0 95.5 4.4 89 7.1h100.6c-6.5-2.7-26.4-7.1-50.3-7.1z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">Tesla</h3>
                      <p className="text-[#6b7a94] text-sm">5 Models Available</p>
                    </div>
                  </div>
                  <p className="text-[#6b7a94] text-sm mb-4">The world's leading electric vehicle manufacturer. From the accessible Model 3 to the record-breaking Model S Plaid.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"].map((model) => (
                      <span key={model} className="text-[10px] tracking-[0.05em] px-2.5 py-1 bg-[rgba(220,38,38,0.1)] text-red-400 rounded-full border border-[rgba(220,38,38,0.2)]">
                        {model}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 text-xs text-[#6b7a94]">
                    <div><span className="text-white font-medium">$38,990</span> Starting</div>
                    <div><span className="text-white font-medium">402 mi</span> Max Range</div>
                    <div><span className="text-white font-medium">1.99s</span> Fastest 0-60</div>
                  </div>
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image 
                    src="/cars/tesla/model-s.png" 
                    alt="Tesla Model S"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="px-8 pb-5">
                <span className="inline-flex items-center text-red-400 text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Explore All Tesla Models
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* All Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Rivian", models: "R1T · R1S · R2", link: "/cars/rivian", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=600&q=80", country: "USA" },
              { name: "BMW", models: "i4 · i7 · iX · i5", link: "/cars/bmw", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80", country: "Germany" },
              { name: "Mercedes-Benz", models: "EQS · EQE · EQB", link: "/cars/mercedes", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", country: "Germany" },
              { name: "Porsche", models: "Taycan · Macan EV", link: "/cars/porsche", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", country: "Germany" },
              { name: "BYD", models: "Seal · Atto 3 · Dolphin · Han · Tang", link: "/cars/brands", image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=600&q=80", country: "China" },
              { name: "NIO", models: "ET7 · ET5 · ES6 · EC7 · EP9", link: "/cars/brands", image: "https://images.unsplash.com/photo-1694076439640-3c0fc4e9e8ee?w=600&q=80", country: "China" },
              { name: "XPeng", models: "G9 · P7 · G6 · X9", link: "/cars/brands", image: "https://images.unsplash.com/photo-1697654361888-e24650fa1860?w=600&q=80", country: "China" },
              { name: "Li Auto", models: "MEGA · L9 · L7 · L6", link: "/cars/brands", image: "https://images.unsplash.com/photo-1698256029750-0cdebc2eca0b?w=600&q=80", country: "China" },
              { name: "Zeekr", models: "001 · 009 · X · 007", link: "/cars/brands", image: "https://images.unsplash.com/photo-1697017559073-4b2d5765303e?w=600&q=80", country: "China" },
              { name: "Xiaomi", models: "SU7 · SU7 Pro · SU7 Max", link: "/cars/brands", image: "https://images.unsplash.com/photo-1712749028550-24ef15a1fb64?w=600&q=80", country: "China" },
              { name: "Lucid", models: "Air · Gravity", link: "/cars/brands", image: "https://images.unsplash.com/photo-1664141249828-5c6e1b3faed5?w=600&q=80", country: "USA" },
              { name: "Hyundai", models: "IONIQ 5 · IONIQ 6 · Kona EV", link: "/cars/brands", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=600&q=80", country: "South Korea" },
              { name: "Kia", models: "EV6 · EV9 · Niro EV", link: "/cars/brands", image: "https://images.unsplash.com/photo-1676573680498-5765e2eac178?w=600&q=80", country: "South Korea" },
              { name: "Volvo", models: "EX30 · EX90 · C40 · XC40", link: "/cars/brands", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=600&q=80", country: "Sweden" },
              { name: "Volkswagen", models: "ID.4 · ID.7 · ID.Buzz", link: "/cars/brands", image: "https://images.unsplash.com/photo-1622838520460-3521c68afd78?w=600&q=80", country: "Germany" },
              { name: "Ford", models: "Mustang Mach-E · F-150 Lightning", link: "/cars/brands", image: "https://images.unsplash.com/photo-1643750228773-b997a0c1db66?w=600&q=80", country: "USA" },
              { name: "Audi", models: "e-tron GT · Q8 e-tron · Q4", link: "/cars/brands", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&q=80", country: "Germany" },
              { name: "Polestar", models: "Polestar 2 · Polestar 3 · Polestar 4", link: "/cars/brands", image: "https://images.unsplash.com/photo-1664141250065-cf3a1dae59b7?w=600&q=80", country: "Sweden" },
              { name: "Cadillac", models: "LYRIQ · CELESTIQ · Escalade IQ", link: "/cars/brands", image: "https://images.unsplash.com/photo-1657123543888-4877e7b6c5c6?w=600&q=80", country: "USA" },
              { name: "Genesis", models: "GV60 · G80 EV · GV70 EV", link: "/cars/brands", image: "https://images.unsplash.com/photo-1680266694127-1029b5765fd5?w=600&q=80", country: "South Korea" },
              { name: "Jaguar", models: "I-PACE", link: "/cars/brands", image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80", country: "UK" },
              { name: "VinFast", models: "VF 8 · VF 9 · VF 6", link: "/cars/brands", image: "https://images.unsplash.com/photo-1694537746498-a5dab4d5a5fb?w=600&q=80", country: "Vietnam" },
            ].map((brand) => (
              <Link href={brand.link} key={brand.name} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] group block">
                <div className="h-36 overflow-hidden relative">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,26,0.8)] to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white/70 rounded-full border border-white/10">{brand.country}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-[15px] font-semibold text-white mb-1 group-hover:text-[#4a90d9] transition-colors">{brand.name}</h4>
                  <p className="text-[11px] text-[#6b7a94] mb-3">{brand.models}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.08em] uppercase text-[#4a90d9] font-medium group-hover:gap-2.5 transition-all">
                    View Models
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Brands Link */}
          <div className="mt-8 text-center">
            <Link href="/cars/brands" className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded-lg">
              View Complete Brand Directory
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1300px] mx-auto">
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

      {/* Quick Links */}
      <section className="py-16 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-xl font-light tracking-tight mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Electric SUVs", count: "12 vehicles", link: "/cars/suvs" },
              { name: "Electric Sedans", count: "8 vehicles", link: "/cars" },
              { name: "Electric Trucks", count: "4 vehicles", link: "/cars" },
              { name: "Luxury EVs", count: "15 vehicles", link: "/cars" },
            ].map((category) => (
              <Link key={category.name} href={category.link} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-5 border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all group">
                <h4 className="text-base font-medium text-white mb-1 group-hover:text-[#4a90d9] transition-colors">{category.name}</h4>
                <p className="text-[11px] text-[#6b7a94]">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 bg-[#0a0f1a]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Found Your Perfect EV?</h2>
          <p className="text-[#6b7a94] mb-8">Protect your investment with our premium Care services - ceramic coating, PPF, and detailing from verified specialists.</p>
          <div className="flex justify-center gap-4">
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
