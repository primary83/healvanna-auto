"use client";

import Link from "next/link";

export default function CarsPage() {
  const featuredCars = [
    { id: 1, make: "Tesla", model: "Model S Plaid", year: "2024", category: "Electric Sedan", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80", range: "396 mi", acceleration: "1.99s", type: "EV", link: "/cars/tesla-model-s-plaid" },
    { id: 2, make: "Porsche", model: "Taycan Turbo S", year: "2024", category: "Electric GT", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", range: "280 mi", acceleration: "2.6s", type: "EV", link: "/cars/porsche-taycan-turbo-s" },
    { id: 3, make: "Lucid", model: "Air Sapphire", year: "2024", category: "Ultra-Luxury EV", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80", range: "427 mi", acceleration: "1.89s", type: "EV", link: "/cars/lucid-air-sapphire" },
    { id: 4, make: "Rivian", model: "R1S", year: "2024", category: "Electric SUV", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", range: "352 mi", acceleration: "3.0s", type: "EV", link: "/cars/rivian-r1s" },
    { id: 5, make: "Mercedes-Benz", model: "EQS 580", year: "2024", category: "Luxury EV Flagship", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", range: "350 mi", acceleration: "4.1s", type: "EV", link: "/cars/mercedes-eqs-580" },
    { id: 6, make: "BMW", model: "i7 xDrive60", year: "2024", category: "Luxury EV Sedan", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", range: "318 mi", acceleration: "4.5s", type: "EV", link: "/cars/bmw-i7-xdrive60" },
  ];

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

      {/* Hero */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Vehicle Directory</div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-4">
            Premium <span className="italic text-[#4a90d9]">Vehicles</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[550px] mx-auto leading-relaxed mb-12">
            Explore our curated selection of exceptional electric and luxury vehicles. In-depth specs, features, and honest assessments.
          </p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredCars.map((car) => (
              <Link
                key={car.id}
                href={car.link}
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold">{car.type}</span>
                  </div>
                  <div className="text-lg font-medium mb-1">{car.make} {car.model}</div>
                  <div className="text-xs text-[#6b7a94] mb-4">{car.year}</div>
                  <div className="flex justify-between text-[12px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(74,144,217,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                  </div>
                  <span className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded block text-center">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extralight mb-4">Can't Find Your Vehicle?</h2>
          <p className="text-[15px] text-[#6b7a94] mb-8">We're constantly adding new vehicles to our directory. Check back soon or subscribe for updates.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/insights" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Browse Insights</Link>
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Find Care Services</Link>
          </div>
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
              { name: "Body Shops", href: "/craft" },
              { name: "Auto Repair", href: "/craft" },
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
