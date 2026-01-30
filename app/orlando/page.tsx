"use client";

import Link from "next/link";
import Image from "next/image";

export default function OrlandoPage() {
  const evBrands = [
    { name: "Tesla", models: "Model S, 3, X, Y, Cybertruck", link: "/cars/tesla" },
    { name: "Rivian", models: "R1T, R1S", link: "/cars/rivian" },
    { name: "BMW", models: "i4, i7, iX", link: "/cars/bmw" },
    { name: "Mercedes", models: "EQS, EQE, EQB", link: "/cars/mercedes" },
    { name: "Porsche", models: "Taycan, Macan EV", link: "/cars/porsche" },
    { name: "Cadillac", models: "LYRIQ, CELESTIQ, Escalade IQ", link: "/cars/cadillac" },
  ];

  const orlandoAreas = [
    "Downtown Orlando",
    "Winter Park",
    "Lake Nona",
    "Dr. Phillips",
    "Kissimmee",
    "Altamonte Springs",
    "Oviedo",
    "Winter Garden",
    "Celebration",
    "Windermere",
    "Sanford",
    "Clermont",
  ];

  const chargingLocations = [
    { name: "Orlando International Airport (MCO)", chargers: "Tesla Superchargers + Universal" },
    { name: "Disney Springs", chargers: "ChargePoint Network" },
    { name: "The Mall at Millenia", chargers: "Electrify America" },
    { name: "Downtown Orlando", chargers: "Multiple Networks" },
    { name: "UCF Area", chargers: "ChargePoint + Tesla" },
    { name: "International Drive", chargers: "Various Locations" },
  ];

  const faqs = [
    {
      question: "What is the best EV for Orlando's climate?",
      answer: "Orlando's warm, humid climate is actually ideal for EVs. We recommend vehicles with good thermal management systems like Tesla, BMW, or Mercedes EVs. The consistent temperatures help maintain optimal battery performance year-round."
    },
    {
      question: "How much does it cost to charge an EV in Orlando?",
      answer: "Home charging in Orlando costs approximately $0.12-0.14 per kWh with Duke Energy or OUC. A full charge for a typical EV (60-75 kWh battery) costs $7-10 at home. Public charging varies from free to $0.40/kWh depending on the network."
    },
    {
      question: "Are there enough charging stations in Orlando?",
      answer: "Yes! Orlando has over 500 public charging stations across the metro area, with more being added monthly. Major locations include theme parks, shopping centers, and along I-4 and the 408. Tesla owners have access to multiple Supercharger locations."
    },
    {
      question: "Do EVs work well for Orlando commuters?",
      answer: "Absolutely. The average Orlando commute is 28 miles round trip. Even entry-level EVs offer 200+ miles of range, meaning most drivers only need to charge once or twice a week. Plus, you can skip the gas station entirely."
    },
    {
      question: "What EV incentives are available in Florida?",
      answer: "While Florida doesn't offer state EV incentives, federal tax credits up to $7,500 are available for qualifying vehicles. Some utilities like OUC offer time-of-use rates that make overnight charging more affordable."
    },
  ];

  const stats = [
    { value: "500+", label: "Charging Stations", detail: "In Orlando Metro" },
    { value: "28 mi", label: "Avg Commute", detail: "Perfect for EVs" },
    { value: "$7-10", label: "Full Charge Cost", detail: "At Home Rates" },
    { value: "92°F", label: "Summer Avg", detail: "A/C Efficient EVs" },
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
            { name: "FLORIDA", href: "/florida" },
            { name: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs tracking-[0.12em] transition-colors duration-300 text-[#8a919e] hover:text-[#e8edf5]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link href="/" className="hover:text-[#4a90d9]">Home</Link>
            <span>/</span>
            <Link href="/florida" className="hover:text-[#4a90d9]">Florida</Link>
            <span>/</span>
            <span className="text-[#4a90d9]">Orlando</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-[#4a90d9] text-sm tracking-widest mb-4">CENTRAL FLORIDA EV EXPERTS</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Electric Vehicles in <span className="text-[#4a90d9] italic">Orlando</span>
            </h1>
            <p className="text-xl text-[#8a919e] leading-relaxed mb-8">
              Orlando is embracing the electric revolution. As Central Florida's leading EV specialists, 
              Healvanna Auto helps Orlando residents find the perfect electric vehicle for theme park adventures, 
              daily commutes, and everything in between. Experience the future of driving in the City Beautiful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cars"
                className="px-8 py-4 bg-[#4a90d9] text-white rounded-lg font-medium hover:bg-[#3a7bc8] transition-colors"
              >
                Browse Orlando Inventory
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[#4a90d9] text-[#4a90d9] rounded-lg font-medium hover:bg-[#4a90d9]/10 transition-colors"
              >
                Visit Our Orlando Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Orlando Stats */}
      <section className="py-12 px-6 md:px-12 border-y border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div key={index} className="text-center p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <div className="text-3xl md:text-4xl font-light text-[#4a90d9] mb-2">{item.value}</div>
                <div className="text-[#e8edf5] font-medium mb-1">{item.label}</div>
                <div className="text-sm text-[#6b7a94]">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Orlando for EVs */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Why Orlando is Perfect for Electric Vehicles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <h3 className="text-xl font-medium text-[#4a90d9] mb-3">☀️ Year-Round Sunshine</h3>
                <p className="text-[#8a919e]">
                  Orlando's 233 sunny days per year make it ideal for solar charging and consistent battery performance. 
                  No cold weather range loss like northern states experience.
                </p>
              </div>
              <div className="p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <h3 className="text-xl font-medium text-[#4a90d9] mb-3">🔌 Growing Charging Network</h3>
                <p className="text-[#8a919e]">
                  From Disney to Downtown, Orlando's charging infrastructure is expanding rapidly. 
                  Major shopping centers, theme parks, and highways all offer convenient charging options.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <h3 className="text-xl font-medium text-[#4a90d9] mb-3">💰 Lower Operating Costs</h3>
                <p className="text-[#8a919e]">
                  Skip Orlando's gas prices averaging $3.50+/gallon. Charge at home for roughly $0.12/kWh 
                  and save thousands annually on fuel costs.
                </p>
              </div>
              <div className="p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <h3 className="text-xl font-medium text-[#4a90d9] mb-3">🛣️ Perfect for I-4 Commuters</h3>
                <p className="text-[#8a919e]">
                  Tired of I-4 traffic? EVs with autopilot features make the commute easier, 
                  and HOV lane access (with Clean Air Vehicle decal) saves time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Brands */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">EV Brands Available in Orlando</h2>
          <p className="text-[#6b7a94] mb-8 max-w-2xl">
            We carry a wide selection of electric vehicles from the world's leading manufacturers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evBrands.map((brand) => (
              <Link key={brand.name} href={brand.link}>
                <div className="group p-5 bg-[#0a0f1a] rounded-xl border border-[#1a2235] hover:border-[#4a90d9]/50 transition-all">
                  <h3 className="text-lg font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-[#6b7a94]">{brand.models}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba5e7] transition-colors"
            >
              View All Available EVs <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Charging Locations */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Orlando EV Charging Locations</h2>
          <p className="text-[#6b7a94] mb-8 max-w-2xl">
            Convenient charging options throughout the Orlando metro area.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chargingLocations.map((location, index) => (
              <div key={index} className="p-5 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <h3 className="text-[#e8edf5] font-medium mb-1">{location.name}</h3>
                <p className="text-sm text-[#4a90d9]">{location.chargers}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Orlando Areas We Serve</h2>
          <p className="text-[#6b7a94] mb-8 max-w-2xl">
            Healvanna Auto proudly serves all of Central Florida, including:
          </p>
          <div className="flex flex-wrap gap-3">
            {orlandoAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-[#0a0f1a] rounded-full text-[#8a919e] border border-[#1a2235] text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">
            Orlando EV FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-[#0d1420] rounded-xl border border-[#1a2235]">
                <h3 className="text-lg font-medium text-[#e8edf5] mb-3">{faq.question}</h3>
                <p className="text-[#8a919e]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Go Electric in Orlando?
          </h2>
          <p className="text-[#6b7a94] mb-8 text-lg">
            Visit our Orlando location or browse our inventory online. Our EV specialists are ready 
            to help you find the perfect electric vehicle for your Central Florida lifestyle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cars"
              className="px-8 py-4 bg-[#4a90d9] text-white rounded-lg font-medium hover:bg-[#3a7bc8] transition-colors"
            >
              Browse Inventory
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-[#4a90d9] text-[#4a90d9] rounded-lg font-medium hover:bg-[#4a90d9]/10 transition-colors"
            >
              Schedule Test Drive
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-6 md:px-12 border-t border-[#1a2235]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-6">Your Orlando Electric Vehicle Dealer</h2>
          <div className="prose prose-invert max-w-none text-[#8a919e] space-y-4">
            <p>
              Looking for an electric vehicle in Orlando, Florida? Healvanna Auto is Central Florida's 
              premier destination for new and pre-owned electric vehicles. We serve Orlando, Winter Park, 
              Lake Nona, Kissimmee, and all surrounding communities with a commitment to exceptional 
              customer service and EV expertise.
            </p>
            <p>
              Our Orlando team understands the unique needs of Central Florida drivers. Whether you're 
              navigating I-4 traffic, heading to the theme parks, or enjoying Florida's beautiful beaches, 
              we'll help you find an EV that fits your lifestyle perfectly.
            </p>
            <p>
              We offer competitive pricing, flexible financing options, and comprehensive after-sale support 
              including home charger installation referrals and maintenance services. Experience the Healvanna 
              difference today – where going electric is easy, affordable, and exciting.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-[#6b7a94]">
              © 2026 Healvanna Auto Orlando. Serving Central Florida's EV Community.
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
