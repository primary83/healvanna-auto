"use client";

import Link from "next/link";
import Image from "next/image";

export default function FloridaPage() {
  const cities = [
    {
      name: "Orlando",
      slug: "orlando",
      description: "Central Florida's premier EV destination",
      population: "2.6M+ Metro",
      highlight: "Theme Park Capital",
    },
    {
      name: "Miami",
      slug: "miami",
      description: "South Florida's luxury EV market",
      population: "6M+ Metro",
      highlight: "Luxury & Performance",
    },
    {
      name: "Tampa",
      slug: "tampa",
      description: "Tampa Bay's growing EV community",
      population: "3.1M+ Metro",
      highlight: "Fast-Growing Market",
    },
    {
      name: "Jacksonville",
      slug: "jacksonville",
      description: "Northeast Florida's EV hub",
      population: "1.6M+ Metro",
      highlight: "Largest City by Area",
    },
    {
      name: "Fort Lauderdale",
      slug: "fort-lauderdale",
      description: "Broward County's EV specialists",
      population: "1.9M+ Metro",
      highlight: "Coastal Living",
    },
    {
      name: "West Palm Beach",
      slug: "west-palm-beach",
      description: "Palm Beach County's EV experts",
      population: "1.5M+ Metro",
      highlight: "Affluent Market",
    },
  ];

  const services = [
    {
      title: "EV Sales & Leasing",
      description: "Browse our curated selection of premium electric vehicles from top manufacturers worldwide.",
      icon: "🚗",
    },
    {
      title: "Home Charger Installation",
      description: "Professional Level 2 charger installation for your Florida home by certified electricians.",
      icon: "🔌",
    },
    {
      title: "EV Maintenance",
      description: "Specialized service for electric vehicles including battery health checks and software updates.",
      icon: "🔧",
    },
    {
      title: "Trade-In Program",
      description: "Get top dollar for your current vehicle when you upgrade to electric.",
      icon: "💰",
    },
  ];

  const floridaAdvantages = [
    { stat: "300+", label: "Sunny Days/Year", detail: "Perfect for solar charging" },
    { stat: "$0", label: "State EV Tax", detail: "No additional EV taxes" },
    { stat: "3,000+", label: "Public Chargers", detail: "Growing network statewide" },
    { stat: "70°F", label: "Avg Temperature", detail: "Ideal for battery life" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em]">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars" },
            { name: "SERVICES", href: "/services" },
            { name: "FLORIDA", href: "/florida", active: true },
            { name: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] transition-colors duration-300 ${
                item.active
                  ? "text-[#4a90d9] border-b border-[#4a90d9] pb-1"
                  : "text-[#8a919e] hover:text-[#e8edf5]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-[#4a90d9] text-sm tracking-widest mb-4">SERVING THE SUNSHINE STATE</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Electric Vehicles in <span className="text-[#4a90d9] italic">Florida</span>
            </h1>
            <p className="text-xl text-[#8a919e] leading-relaxed mb-8">
              Florida is the perfect place to go electric. With year-round sunshine, growing charging infrastructure, 
              and no state income tax, there's never been a better time to make the switch. Healvanna Auto serves 
              all major Florida cities with premium EV sales, service, and support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cars"
                className="px-8 py-4 bg-[#4a90d9] text-white rounded-lg font-medium hover:bg-[#3a7bc8] transition-colors"
              >
                Browse EVs
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[#4a90d9] text-[#4a90d9] rounded-lg font-medium hover:bg-[#4a90d9]/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Advantages */}
      <section className="py-12 px-6 md:px-12 border-y border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-center mb-10">Why Go Electric in Florida?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {floridaAdvantages.map((item, index) => (
              <div key={index} className="text-center p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <div className="text-3xl md:text-4xl font-light text-[#4a90d9] mb-2">{item.stat}</div>
                <div className="text-[#e8edf5] font-medium mb-1">{item.label}</div>
                <div className="text-sm text-[#6b7a94]">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Florida Cities We Serve</h2>
            <p className="text-[#6b7a94] max-w-2xl mx-auto">
              From Miami to Jacksonville, we provide premium EV services across Florida's major metropolitan areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.slug} href={`/florida/${city.slug}`}>
                <div className="group p-6 bg-[#0d1420] rounded-xl border border-[#1a2235] hover:border-[#4a90d9]/50 transition-all duration-300 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-xs bg-[#1a2235] text-[#4a90d9] px-2 py-1 rounded">
                      {city.highlight}
                    </span>
                  </div>
                  <p className="text-[#6b7a94] mb-4">{city.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#8a919e]">{city.population}</span>
                    <span className="text-[#4a90d9] text-sm group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Our Florida EV Services</h2>
            <p className="text-[#6b7a94] max-w-2xl mx-auto">
              Comprehensive electric vehicle services tailored for Florida drivers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-[#0a0f1a] rounded-xl border border-[#1a2235] hover:border-[#4a90d9]/30 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-[#e8edf5] mb-2">{service.title}</h3>
                <p className="text-sm text-[#6b7a94]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Go Electric in Florida?</h2>
          <p className="text-[#6b7a94] mb-8 text-lg">
            Join thousands of Florida drivers who have made the switch to electric. 
            Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cars"
              className="px-8 py-4 bg-[#4a90d9] text-white rounded-lg font-medium hover:bg-[#3a7bc8] transition-colors"
            >
              View Our Inventory
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#4a90d9] text-[#4a90d9] rounded-lg font-medium hover:bg-[#4a90d9]/10 transition-colors"
            >
              Schedule a Test Drive
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-6 md:px-12 border-t border-[#1a2235]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-6">Electric Vehicles in Florida: Your Complete Guide</h2>
          <div className="prose prose-invert max-w-none text-[#8a919e] space-y-4">
            <p>
              Florida has become one of the fastest-growing markets for electric vehicles in the United States. 
              With its warm climate, extensive highway system, and rapidly expanding charging infrastructure, 
              the Sunshine State offers ideal conditions for EV ownership.
            </p>
            <p>
              At Healvanna Auto, we specialize in helping Florida residents find the perfect electric vehicle 
              for their lifestyle. Whether you're commuting in Orlando, cruising Miami Beach, or exploring 
              Tampa Bay, we have an EV that fits your needs.
            </p>
            <p>
              Our Florida locations offer comprehensive services including new and pre-owned EV sales, 
              home charger installation, battery maintenance, and trade-in programs. We carry all major 
              electric vehicle brands including Tesla, Rivian, BMW, Mercedes, Porsche, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-[#6b7a94]">
              © 2026 Healvanna Auto Florida. All rights reserved.
            </div>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
