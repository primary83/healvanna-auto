"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      exploreLink: "/cars",
      learnMoreLink: "/insights",
    },
    {
      title: "Electric",
      titleAccent: "Excellence",
      subtitle: "Explore the finest EVs from Tesla, Rivian, Lucid, and beyond. In-depth guides to help you find your perfect electric vehicle.",
      category: "EV Directory",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80",
      exploreLink: "/cars",
      learnMoreLink: "/insights/category/electric-vehicles",
    },
    {
      title: "Trusted",
      titleAccent: "Specialists",
      subtitle: "Verified detailers, ceramic coating experts, and restoration craftsmen. Find premium care for your premium vehicle.",
      category: "Service Directory",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80",
      exploreLink: "/care",
      learnMoreLink: "/insights/category/premium-care",
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
    { title: "Electric Vehicles", subtitle: "Tesla · Rivian · Lucid · Porsche", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80", link: "/insights/category/electric-vehicles" },
    { title: "Premium Care", subtitle: "Detailing · Ceramic · PPF", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80", link: "/insights/category/premium-care" },
    { title: "Repair & Craft", subtitle: "Body Shops · Restoration", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80", link: "/insights/category/repair-craft" },
    { title: "Market Insights", subtitle: "Guides · Comparisons · News", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", link: "/insights/category/market-insights" },
  ];

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CARS", href: "/cars" },
    { name: "CARE", href: "/care" },
    { name: "CRAFT", href: "/craft" },
    { name: "INSIGHTS", href: "/insights" },
  ];

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                index === 0
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
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
            <div className="absolute inset-0 flex items-center">
              <div className={`ml-16 max-w-[600px] transition-all duration-1000 ${isLoaded && currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">{slide.category}</div>
                <h1 className="text-[clamp(48px,7vw,72px)] font-extralight leading-[1.05] mb-6 tracking-tight">
                  {slide.title}<br />
                  <span className="italic text-[#4a90d9]">{slide.titleAccent}</span>
                </h1>
                <p className="text-[15px] text-[#6b7a94] leading-relaxed mb-8 max-w-[450px]">{slide.subtitle}</p>
                <div className="flex gap-4">
                  <Link href={slide.exploreLink} className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300">Explore Directory</Link>
                  <Link href={slide.learnMoreLink} className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(232,237,245,0.25)] text-[#e8edf5] hover:bg-[rgba(232,237,245,0.1)] transition-all duration-300">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-16 flex items-center gap-6">
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-[3px] transition-all duration-300 rounded-full ${
                  currentSlide === index ? "w-12 bg-[#4a90d9]" : "w-6 bg-[rgba(232,237,245,0.25)] hover:bg-[rgba(232,237,245,0.5)]"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] tracking-[0.1em] text-[#6b7a94] font-medium">0{currentSlide + 1} / 0{heroSlides.length}</span>
        </div>

        <div className="absolute bottom-10 right-16 flex gap-3">
          <button onClick={prevSlide} className="w-11 h-11 flex items-center justify-center border border-[rgba(232,237,245,0.25)] hover:bg-[rgba(232,237,245,0.1)] transition-all duration-300 text-lg">←</button>
          <button onClick={nextSlide} className="w-11 h-11 flex items-center justify-center border border-[rgba(232,237,245,0.25)] hover:bg-[rgba(232,237,245,0.1)] transition-all duration-300 text-lg">→</button>
        </div>
      </section>

      {/* Categories Quick Nav */}
      <section className="py-24 px-12 bg-[#0d1424]">
        <div className="text-center mb-14">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Discover</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight">Explore Our Directory</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
          {categoryCards.map((card, index) => (
            <Link key={index} href={card.link} className="relative h-[280px] overflow-hidden cursor-pointer group rounded block">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${card.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/95 via-[#0a0f1a]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-lg font-medium mb-1.5">{card.title}</div>
                <div className="text-[13px] text-[#6b7a94]">{card.subtitle}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Cars</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Featured Vehicles</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Explore our curated selection of exceptional electric and luxury vehicles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group">
              <div className="h-48 overflow-hidden">
                <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
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
                <button className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/cars" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Vehicles</Link>
        </div>
      </section>

      {/* CARE Section */}
      <section className="py-24 px-12 bg-[#0d1424]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Care</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Premium Detailing & Protection</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Verified specialists in detailing, ceramic coating, and paint protection for discerning owners.</p>
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
          <Link href="/care" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Care Services</Link>
        </div>
      </section>

      {/* CRAFT Section */}
      <section className="py-24 px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Craft</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Body Shops & Restoration</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Certified collision repair and master restoration craftsmen for every era.</p>
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
          <Link href="/craft" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Craft Services</Link>
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
            <Link key={index} href={article.link} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block">
              <div className="h-44 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2.5 font-medium">{article.category}</div>
                <div className="text-lg font-medium mb-3">{article.title}</div>
                <div className="text-[13px] text-[#6b7a94] leading-relaxed mb-5">{article.description}</div>
                <button className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Read Article</button>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/insights" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Insights</Link>
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
              { name: "EV Body Shops", href: "/craft" },
              { name: "Luxury Collision", href: "/craft" },
              { name: "Restoration", href: "/craft" }
            ]},
            { title: "Markets", links: [
              { name: "Austin", href: "/care?location=Austin" },
              { name: "Miami", href: "/care?location=Miami" },
              { name: "Los Angeles", href: "/care?location=Los Angeles" },
              { name: "New York", href: "/care?location=New York" },
              { name: "Dubai", href: "/care?location=Dubai" }
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
