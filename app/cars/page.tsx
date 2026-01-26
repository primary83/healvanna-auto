"use client";

import Link from "next/link";
import Image from "next/image";

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {[
{ name: "HOME", href: "/" },
{ name: "CARS", href: "/cars", active: true },
{ name: "CARE", href: "/care" },
{ name: "CRAFT", href: "/craft" },
{ name: "SHOP", href: "/shop" },
{ name: "BLOG", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                item.active
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Car Directory</div>
          <h1 className="text-[clamp(40px,5vw,56px)] font-extralight tracking-tight mb-4">
            Electric Vehicles
          </h1>
          <p className="text-[17px] text-[#6b7a94] max-w-[600px] leading-relaxed">
            Explore our complete directory of electric vehicles. Browse by brand or discover featured models from Tesla, Rivian, Porsche, and more.
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

          {/* View Models → Brands */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
{ name: "Rivian", models: "R1T · R1S", link: "/cars/rivian" },
{ name: "BMW", models: "i4 · i7 · iX", link: "/cars/bmw" },
{ name: "Mercedes-Benz", models: "EQS · EQE · EQB", link: "/cars/mercedes" },
{ name: "Porsche", models: "Taycan · Macan EV", link: "/cars/porsche" },
            ].map((brand) => (
              <Link href={brand.link} key={brand.name} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-5 border border-[rgba(74,144,217,0.1)] opacity-60">
                <h4 className="text-base font-medium text-white mb-1">{brand.name}</h4>
                <p className="text-[11px] text-[#6b7a94] mb-2">{brand.models}</p>
                <span className="text-[9px] tracking-[0.1em] uppercase text-[#4a90d9]">View Models →</span>
              </Link>
            ))}
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

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-6 gap-10 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: [
              { name: "Tesla", href: "/cars/tesla" },
              { name: "All Brands", href: "/cars" },
              { name: "SUVs", href: "/cars/suvs" },
              { name: "Sedans", href: "/cars" }
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
            { title: "Resources", links: [
              { name: "Blog", href: "/blog" },
              { name: "Guides", href: "/blog" }
            ]},
            { title: "Company", links: [
              { name: "About", href: "/about" },
              { name: "For Business", href: "/business" },
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
          <div className="text-[11px] text-[#3d4a61]">© 2026 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Cookies", href: "#" }
            ].map((link) => <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>)}
          </div>
        </div>
      </footer>
    </main>
  );
}
