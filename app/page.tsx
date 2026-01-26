"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ServiceSearchBar from "./components/ServiceSearchBar";
import { SERVICE_CATEGORIES } from "./lib/services";

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
      titleAccent: "Services",
      subtitle: "Find trusted automotive service providers — detailing, wrapping, body shops, collision repair, and more. Verified specialists near you.",
      category: "Service Directory",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&q=80",
      exploreLink: "/services",
      learnMoreLink: "/insights",
    },
    {
      title: "Trusted",
      titleAccent: "Specialists",
      subtitle: "Verified detailers, ceramic coating experts, and restoration craftsmen. Find premium care for your premium vehicle.",
      category: "Find Your Pro",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80",
      exploreLink: "/services",
      learnMoreLink: "/insights",
    },
    {
      title: "Quality",
      titleAccent: "Craftsmanship",
      subtitle: "From body shops to auto glass, collision repair to custom painting. Every service category covered with real reviews.",
      category: "All Services",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80",
      exploreLink: "/services",
      learnMoreLink: "/insights",
    },
  ];

  const careServices = [
    { id: 1, name: "Precision Auto Spa", category: "Premium Detailing", city: "Austin, TX", specialties: ["EV-Safe", "Ceramic Coating", "Paint Correction"], verified: true, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", description: "Austin's premier EV detailing specialists. Factory-trained on Tesla, Rivian, and Lucid vehicles.", link: "/care/precision-auto-spa" },
    { id: 2, name: "Elite Ceramic Works", category: "Ceramic & PPF", city: "Miami, FL", specialties: ["XPEL PPF", "Ceramic Pro", "Gtechniq"], verified: true, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", description: "Certified Ceramic Pro installer. Specializing in exotic and luxury vehicle protection.", link: "/care/elite-ceramic-works" },
    { id: 3, name: "Luxe Interior Studio", category: "Interior Restoration", city: "Los Angeles, CA", specialties: ["Leather Repair", "Custom Upholstery", "Vegan Leather"], verified: true, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", description: "Bespoke interior restoration for discerning owners. Vegan leather specialists for modern EVs.", link: "/care/luxe-interior-studio" },
  ];

  const craftServices = [
    { id: 1, name: "EV Collision Center", category: "EV-Certified Body Shop", city: "Austin, TX", specialties: ["Tesla Certified", "Rivian Trained", "Aluminum Repair"], verified: true, image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", description: "Factory-certified collision repair for electric vehicles. Specialized equipment for high-voltage systems.", link: "/craft/ev-collision-center" },
    { id: 2, name: "Prestige Auto Body", category: "Luxury Body Shop", city: "Miami, FL", specialties: ["Porsche Certified", "Ferrari Approved", "Concours Finish"], verified: true, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", description: "OEM-certified repairs for European luxury brands. Show-quality paint and finishing.", link: "/craft/prestige-auto-body" },
    { id: 3, name: "Heritage Restoration", category: "Classic Restoration", city: "Scottsdale, AZ", specialties: ["Full Frame-Off", "Concours Prep", "Matching Numbers"], verified: true, image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80", description: "Award-winning classic car restoration. From barn finds to concours winners.", link: "/craft/heritage-restoration" },
  ];

  const categoryCards = [
    { title: "Electric Vehicles", subtitle: "Tesla · Rivian · Lucid · Porsche", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80", link: "/cars" },
    { title: "Premium Care", subtitle: "Detailing · Ceramic · PPF", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80", link: "/care" },
    { title: "Repair & Craft", subtitle: "Body Shops · Restoration", image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80", link: "/craft" },
    { title: "EV Blog", subtitle: "Guides · Reviews · News", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", link: "/blog" },
  ];

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="HOME" />

      {/* Hero Slider */}
      <section className="min-h-screen relative overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/95 via-[#0a0f1a]/70 to-transparent" />
            <div className="absolute inset-0 flex items-center pb-20">
              <div className={`w-full px-6 md:px-16 transition-all duration-1000 ${isLoaded && currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <div className="max-w-[800px]">
                  <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">{slide.category}</div>
                  <h1 className="text-[clamp(36px,5.5vw,60px)] font-extralight leading-[1.05] mb-4 tracking-tight">
                    {slide.title}<br />
                    <span className="italic text-[#4a90d9]">{slide.titleAccent}</span>
                  </h1>
                  <p className="text-[14px] text-[#6b7a94] leading-relaxed mb-8 max-w-[450px]">{slide.subtitle}</p>
                </div>
                <div className="max-w-[800px]">
                  <ServiceSearchBar />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-6 md:left-16 flex items-center gap-6">
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

        <div className="absolute bottom-10 right-6 md:right-16 flex gap-3">
          <button onClick={prevSlide} className="w-11 h-11 flex items-center justify-center border border-[rgba(232,237,245,0.25)] hover:bg-[rgba(232,237,245,0.1)] transition-all duration-300 text-lg">←</button>
          <button onClick={nextSlide} className="w-11 h-11 flex items-center justify-center border border-[rgba(232,237,245,0.25)] hover:bg-[rgba(232,237,245,0.1)] transition-all duration-300 text-lg">→</button>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="py-10 px-6 md:px-12 bg-[#0d1424] border-b border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "7", label: "Service Categories", href: "/services" },
            { value: "20+", label: "Cities Covered", href: "/car-detailing" },
            { value: "Free", label: "Business Listings", href: "/business" },
            { value: "100%", label: "Verified Providers", href: "/about" },
          ].map((stat) => (
            <Link key={stat.label} href={stat.href} className="group">
              <div className="text-[clamp(28px,3vw,36px)] font-extralight text-[#4a90d9] mb-1 group-hover:text-[#6ba8eb] transition-colors">{stat.value}</div>
              <div className="text-[12px] tracking-[0.1em] uppercase text-[#6b7a94] font-medium group-hover:text-[#e8edf5] transition-colors">{stat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Quick Nav */}
      <section className="py-24 px-6 md:px-12 bg-[#0d1424]">
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

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Services</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Automotive Service Directory</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Find verified specialists across every automotive service category.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1300px] mx-auto">
          {SERVICE_CATEGORIES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl p-6 border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                <svg className="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#e8edf5] mb-2 group-hover:text-[#4a90d9] transition-colors">{service.name}</h3>
              <p className="text-[13px] text-[#6b7a94] leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Services</Link>
        </div>
      </section>

      {/* Browse by Brand Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">EV Directory</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Browse by Brand</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Explore our complete directory of electric vehicles by manufacturer.</p>
        </div>
        
        <div className="max-w-[1300px] mx-auto">
          {/* Tesla - Featured Brand */}
          <Link href="/cars/tesla" className="block mb-8">
            <div className="bg-gradient-to-r from-[rgba(220,38,38,0.1)] to-[rgba(15,22,40,1)] rounded-2xl overflow-hidden border border-[rgba(220,38,38,0.2)] hover:border-[rgba(220,38,38,0.5)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_32px_64px_-16px_rgba(220,38,38,0.2)] group">
              <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                      <svg viewBox="0 0 278.7 36.3" className="w-full h-auto">
                        <path fill="#e82127" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6zM31.3 14.4v7h18.2v21h7.1v-21H89v-7H31.3zM174.4 14.4v21.9h40.1v-7h-33.1v-2.3h33.1v-12.6h-40.1zm7 7h26.1v2.3h-26.1v-2.3zM79.9 14.4v21.9H120v-7H87v-2.3h33V14.4H79.9zm7 7h26.1v2.3H86.9v-2.3zM0 14.4l17.8 21.9h8.9L9 14.4H0zm21.7 0l17.8 21.9h8.9L30.5 14.4h-8.8zM129.5 14.4v21.9h7V14.4h-7zM147.9 14.4v21.9h7v-21h25.6V7.1h-32.6v7.3z"/>
                        <path fill="#e82127" d="M139.3 0C115.4 0 95.5 4.4 89 7.1h100.6c-6.5-2.7-26.4-7.1-50.3-7.1z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">Tesla</h3>
                      <p className="text-[#6b7a94] text-sm">5 Models Available</p>
                    </div>
                  </div>
                  <p className="text-[#6b7a94] mb-4">The world's leading electric vehicle manufacturer. From the accessible Model 3 to the record-breaking Model S Plaid.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"].map((model) => (
                      <span key={model} className="text-[11px] tracking-[0.05em] px-3 py-1.5 bg-[rgba(220,38,38,0.1)] text-red-400 rounded-full border border-[rgba(220,38,38,0.2)]">
                        {model}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
                    <div><span className="text-white font-medium">$38,990</span> Starting</div>
                    <div><span className="text-white font-medium">402 mi</span> Max Range</div>
                    <div><span className="text-white font-medium">1.99s</span> Fastest 0-60</div>
                  </div>
                </div>
                <div className="relative h-[250px] rounded-xl overflow-hidden">
                  <Image 
                    src="/cars/tesla/model-s.png" 
                    alt="Tesla Model S"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="px-8 pb-6">
                <span className="inline-flex items-center text-red-400 text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Explore All Tesla Models
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Other Brands */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Rivian", models: "R1T · R1S", image: "/cars/rivian/r1s.png", href: "/cars/rivian", count: "2 Models", color: "amber" },
              { name: "BMW", models: "i4 · i7 · iX", image: "/cars/bmw/i4.png", href: "/cars/bmw", count: "3 Models", color: "blue" },
              { name: "Mercedes", models: "EQS · EQE · EQB", image: "/cars/mercedes/eqs.png", href: "/cars/mercedes", count: "3 Models", color: "slate" },
              { name: "Porsche", models: "Taycan · Macan EV", image: "/cars/porsche/taycan.png", href: "/cars/porsche", count: "2 Models", color: "red" },
            ].map((brand) => (
              <Link key={brand.name} href={brand.href} className="bg-[rgba(15,22,40,0.5)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] group block">
                <div className="h-[140px] relative overflow-hidden bg-gradient-to-b from-[rgba(74,144,217,0.05)] to-transparent">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-medium text-white group-hover:text-[#4a90d9] transition-colors">{brand.name}</h4>
                    <span className="text-[10px] tracking-[0.1em] uppercase text-[#4a90d9] font-medium">{brand.count}</span>
                  </div>
                  <p className="text-[12px] text-[#6b7a94] mb-3">{brand.models}</p>
                  <span className="inline-flex items-center text-[#4a90d9] text-[12px] font-medium group-hover:gap-2 gap-1 transition-all">
                    View Models
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/cars" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">View All Cars</Link>
        </div>
      </section>

      {/* CARE Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0d1424]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Care</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Premium Detailing & Protection</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Verified specialists in detailing, ceramic coating, and paint protection for discerning owners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {careServices.map((service) => (
            <Link key={service.id} href={service.link} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block">
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
                <span className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded block text-center">View Profile</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/care" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Care Services</Link>
        </div>
      </section>

      {/* CRAFT Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0f1a]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Craft</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Body Shops & Restoration</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Certified collision repair and master restoration craftsmen for every era.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {craftServices.map((service) => (
            <Link key={service.id} href={service.link} className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group block">
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
                <span className="w-full py-3 text-[11px] tracking-[0.1em] uppercase font-medium border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded block text-center">View Profile</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/craft" className="inline-block px-12 py-3.5 text-[13px] font-medium bg-transparent text-[#e8edf5] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9] transition-all duration-300">Browse All Craft Services</Link>
        </div>
      </section>

      {/* INSIGHTS Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0d1424]">
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">Insights</div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">Market Intelligence</h2>
          <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto leading-relaxed">Expert analysis, comparisons, and guides for the discerning automotive enthusiast.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1300px] mx-auto">
          {[
            { title: "US EVs vs Chinese EVs", category: "Comparison", description: "A deep dive into how American and Chinese electric vehicles stack up in range, tech, and value.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", link: "/insights/us-evs-vs-chinese-evs" },
            { title: "Best Ceramic Coatings 2024", category: "Guide", description: "We tested the top ceramic coating brands to find the best protection for your premium vehicle.", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", link: "/insights/best-ceramic-coatings-2024" },
            { title: "EV Maintenance Guide", category: "Guide", description: "Everything you need to know about maintaining your electric vehicle for peak performance.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", link: "/insights/ev-maintenance-guide" },
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

      <Footer />
    </div>
  );
}
