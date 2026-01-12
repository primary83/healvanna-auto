"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "Premium Car",
      titleAccent: "Ownership",
      subtitle: "A curated guide to exceptional vehicles, trusted care specialists, and master craftsmen. For discerning automotive enthusiasts.",
      category: "The Curated Guide",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80",
    },
    {
      title: "Electric",
      titleAccent: "Excellence",
      subtitle: "Explore the finest EVs from Tesla, Rivian, Lucid, and beyond. In-depth guides to help you find your perfect electric vehicle.",
      category: "EV Directory",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80",
    },
    {
      title: "Trusted",
      titleAccent: "Specialists",
      subtitle: "Verified detailers, ceramic coating experts, and restoration craftsmen. Find premium care for your premium vehicle.",
      category: "Service Directory",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80",
    },
  ];

  const featuredCars = [
    { id: 1, make: "Tesla", model: "Model S Plaid", year: "2024", category: "Electric Sedan", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80", range: "396 mi", acceleration: "1.99s", type: "EV" },
    { id: 2, make: "Porsche", model: "Taycan Turbo S", year: "2024", category: "Electric GT", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", range: "280 mi", acceleration: "2.6s", type: "EV" },
    { id: 3, make: "Lucid", model: "Air Sapphire", year: "2024", category: "Ultra-Luxury EV", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80", range: "427 mi", acceleration: "1.89s", type: "EV" },
    { id: 4, make: "Rivian", model: "R1S", year: "2024", category: "Electric SUV", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", range: "352 mi", acceleration: "3.0s", type: "EV" },
    { id: 5, make: "Mercedes-Benz", model: "EQS 580", year: "2024", category: "Luxury EV Flagship", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", range: "350 mi", acceleration: "4.1s", type: "EV" },
    { id: 6, make: "BMW", model: "i7 xDrive60", year: "2024", category: "Luxury EV Sedan", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", range: "318 mi", acceleration: "4.5s", type: "EV" },
  ];

  const careServices = [
    { id: 1, name: "Precision Auto Spa", category: "Premium Detailing", city: "Austin, TX", specialties: ["EV-Safe", "Ceramic Coating", "Paint Correction"], verified: true, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", description: "Austin's premier EV detailing specialists. Factory-trained on Tesla, Rivian, and Lucid vehicles." },
    { id: 2, name: "Elite Ceramic Works", category: "Ceramic & PPF", city: "Miami, FL", specialties: ["XPEL PPF", "Ceramic Pro", "Gtechniq"], verified: true, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", description: "Certified Ceramic Pro installer. Specializing in exotic and luxury vehicle protection." },
    { id: 3, name: "Luxe Interior Studio", category: "Interior Restoration", city: "Los Angeles, CA", specialties: ["Leather Repair", "Custom Upholstery", "Vegan Leather"], verified: true, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Bespoke interior restoration for discerning owners. Vegan leather specialists for modern EVs." },
  ];

  const craftServices = [
    { id: 1, name: "EV Collision Center", category: "EV-Certified Body Shop", city: "Austin, TX", specialties: ["Tesla Certified", "Rivian Trained", "Aluminum Repair"], verified: true, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", description: "Factory-certified collision repair for electric vehicles. Specialized equipment for high-voltage systems." },
    { id: 2, name: "Prestige Auto Body", category: "Luxury Body Shop", city: "Miami, FL", specialties: ["Porsche Certified", "Ferrari Approved", "Concours Finish"], verified: true, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", description: "OEM-certified repairs for European luxury brands. Show-quality paint and finishing." },
    { id: 3, name: "Heritage Restoration", category: "Classic Restoration", city: "Scottsdale, AZ", specialties: ["Full Frame-Off", "Concours Prep", "Matching Numbers"], verified: true, image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80", description: "Award-winning classic car restoration. From barn finds to concours winners." },
  ];

  const categoryCards = [
    { title: "Electric Vehicles", subtitle: "Tesla · Rivian · Lucid · Porsche", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80" },
    { title: "Premium Care", subtitle: "Detailing · Ceramic · PPF", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80" },
    { title: "Repair & Craft", subtitle: "Body Shops · Restoration", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80" },
    { title: "Market Insights", subtitle: "Guides · Comparisons · News", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80" },
  ];

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <div className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </div>
        <div className="flex gap-10">
          {["HOME", "CARS", "CARE", "CRAFT", "INSIGHTS"].map((item, index) => (
            <span
              key={item}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                index === 0
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="h-screen relative overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/95 via-[#0a0f1a]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
            <div className="relative h-full flex items-center px-12">
              <div className="max-w-[650px]">
                <div className={`text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-5 font-medium transition-all duration-700 ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "200ms" }}>
                  {slide.category}
                </div>
                <h1 className={`text-[clamp(48px,6vw,72px)] font-extralight leading-[1.1] mb-6 tracking-tight transition-all duration-700 ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "400ms" }}>
                  {slide.title} <span className="text-[#4a90d9] italic font-light">{slide.titleAccent}</span>
                </h1>
                <p className={`text-[17px] text-[#8a9bb5] leading-relaxed mb-10 max-w-[500px] transition-all duration-700 ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
                  {slide.subtitle}
                </p>
                <div className={`flex gap-4 transition-all duration-700 ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "800ms" }}>
                  <button className="px-10 py-4 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300">
                    Explore Directory
                  </button>
                  <button className="px-10 py-4 text-[13px] font-medium border border-[#3d4a61] text-[#e8edf5] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-12 left-12 flex items-center gap-6">
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-[2px] transition-all duration-500 ${
                  currentSlide === index ? "w-12 bg-[#4a90d9]" : "w-6 bg-[#3d4a61] hover:bg-[#6b7a94]"
                }`}
              />
            ))}
          </div>
          <div className="text-[11px] text-[#6b7a94] tracking-wider">
            {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 right-12 flex gap-3">
          <button onClick={prevSlide} className="w-12 h-12 border border-[#3d4a61] flex items-center justify-center text-[#6b7a94] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">
            ←
          </button>
          <button onClick={nextSlide} className="w-12 h-12 border border-[#3d4a61] flex items-center justify-center text-[#6b7a94] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">
            →
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-12 bg-[#0d1424]">
        <div className="grid grid-cols-4 gap-5 max-w-[1300px] mx-auto">
          {categoryCards.map((card, index) => (
            <div key={index} className="relative h-72 overflow-hidden cursor-pointer group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${card.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-medium mb-1">{card.title}</h3>
                <p className="text-[12px] text-[#6b7a94]">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CARS Section */}
      <section className="py-24 px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Cars</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Featured Vehicles</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Explore our curated selection of premium electric and luxury vehicles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {featuredCars.slice(0, 6).map((car) => (
            <div key={car.id} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group">
              <div className="h-48 overflow-hidden">
                <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2.5">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{car.category}</div>
                  <span className="text-[8px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold">{car.type}</span>
                </div>
                <div className="text-lg font-medium mb-1">{car.make} {car.model}</div>
                <div className="text-xs text-[#6b7a94] mb-4">{car.year}</div>
                <div className="flex gap-4 text-[11px] text-[#6b7a94] mb-5">
                  <span>⚡ {car.range}</span>
                  <span>🚀 {car.acceleration}</span>
                </div>
                <button className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Vehicles</button>
        </div>
      </section>

      {/* CARE Section */}
      <section className="py-24 px-12 bg-[#0d1424]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Care</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Premium Services</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Verified detailing specialists, ceramic coating experts, and interior restoration craftsmen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {careServices.map((service) => (
            <div key={service.id} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group">
              <div className="h-44 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2.5">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{service.category}</div>
                  {service.verified && <span className="text-[8px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold">✓ Verified</span>}
                </div>
                <div className="text-lg font-medium mb-1">{service.name}</div>
                <div className="text-xs text-[#6b7a94] mb-3.5">{service.city}</div>
                <div className="text-[13px] text-[#6b7a94] leading-relaxed mb-4">{service.description}</div>
                <div className="flex gap-1.5 flex-wrap mb-5">
                  {service.specialties.map((s) => <span key={s} className="text-[9px] tracking-[0.1em] uppercase px-2.5 py-1.5 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-sm">{s}</span>)}
                </div>
                <button className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">View Profile</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Care Services</button>
        </div>
      </section>

      {/* CRAFT Section */}
      <section className="py-24 px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Craft</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Repair & Restoration</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">EV-certified body shops, luxury collision repair, and classic restoration specialists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {craftServices.map((service) => (
            <div key={service.id} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group">
              <div className="h-44 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2.5">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{service.category}</div>
                  {service.verified && <span className="text-[8px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold">✓ Verified</span>}
                </div>
                <div className="text-lg font-medium mb-1">{service.name}</div>
                <div className="text-xs text-[#6b7a94] mb-3.5">{service.city}</div>
                <div className="text-[13px] text-[#6b7a94] leading-relaxed mb-4">{service.description}</div>
                <div className="flex gap-1.5 flex-wrap mb-5">
                  {service.specialties.map((s) => <span key={s} className="text-[9px] tracking-[0.1em] uppercase px-2.5 py-1.5 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-sm">{s}</span>)}
                </div>
                <button className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">View Profile</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Craft Services</button>
        </div>
      </section>

      {/* INSIGHTS Section */}
      <section className="py-24 px-12 bg-[#0d1424]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Insights</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Market Intelligence</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Expert analysis, comparisons, and guides for the discerning automotive enthusiast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {[
            { title: "US EVs vs Chinese EVs", category: "Comparison", description: "A deep dive into how American and Chinese electric vehicles stack up in range, tech, and value.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", link: "/insights/us-evs-vs-chinese-evs" },
            { title: "Best Ceramic Coatings 2024", category: "Guide", description: "We tested the top ceramic coating brands to find the best protection for your premium vehicle.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", link: "#" },
            { title: "EV Maintenance Guide", category: "Guide", description: "Everything you need to know about maintaining your electric vehicle for peak performance.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", link: "#" },
          ].map((article, index) => (
            <a key={index} href={article.link} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block">
              <div className="h-44 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2.5 font-medium">{article.category}</div>
                <div className="text-lg font-medium mb-3">{article.title}</div>
                <div className="text-[13px] text-[#6b7a94] leading-relaxed mb-5">{article.description}</div>
                <button className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Read Article</button>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Insights</button>
        </div>
      </section>

      {/* CTA */}
      <section className="h-[70vh] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 to-[#0a0f1a]/90" />
        <div className="relative text-center max-w-[600px] px-6">
          <h2 className="text-[clamp(32px,5vw,48px)] font-extralight mb-4 tracking-tight">Your Guide to Premium Auto</h2>
          <p className="text-base text-[#6b7a94] mb-8 leading-relaxed">Join thousands of enthusiasts who trust Healvanna for expert vehicle guides and verified service providers.</p>
          <button className="px-14 py-4 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300">Subscribe to Updates</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-6 gap-10 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: ["Electric Vehicles", "Luxury Sedans", "SUVs", "All Brands"] },
            { title: "Care", links: ["Detailing", "Ceramic Coating", "PPF", "Interior"] },
            { title: "Craft", links: ["EV Body Shops", "Luxury Collision", "Restoration"] },
            { title: "Markets", links: ["Austin", "Miami", "Los Angeles", "New York", "Dubai"] },
            { title: "Insights", links: ["Comparisons", "Buying Guides", "Maintenance"] },
            { title: "Company", links: [
              { name: "About", href: "/about" },
              { name: "For Business", href: "#" },
              { name: "Contact", href: "/contact" }
            ]},
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.title === "Company" 
                ? (column.links as Array<{name: string, href: string}>).map((link) => (
                    <a key={link.name} href={link.href} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</a>
                  ))
                : (column.links as string[]).map((link) => (
                    <a key={link} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link}</a>
                  ))
              }
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
            ].map((link) => <a key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</a>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
