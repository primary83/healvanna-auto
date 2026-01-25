"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CarePage() {
  const [location, setLocation] = useState("");
  const [detectedCity, setDetectedCity] = useState("");
  const [isDetecting, setIsDetecting] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const serviceCards = [
    {
      id: "auto_detailing",
      title: "Auto Detailing",
      icon: "✨",
      description: "Professional detailing & ceramic coating",
      searchTerm: "car detailing"
    },
    {
      id: "vehicle_wraps",
      title: "PPF & Wraps",
      icon: "🛡️",
      description: "Paint protection & vinyl wraps",
      searchTerm: "paint protection film"
    },
    {
      id: "paint_restoration",
      title: "Paint & Restoration",
      icon: "🎨",
      description: "Custom paint & classic restoration",
      searchTerm: "auto paint restoration"
    },
    {
      id: "body_shops",
      title: "Body Shops",
      icon: "🔧",
      description: "Collision repair & bodywork",
      searchTerm: "auto body shop"
    },
    {
      id: "auto_repair",
      title: "Auto Repair",
      icon: "🔩",
      description: "Mechanical repair & maintenance",
      searchTerm: "auto repair"
    },
    {
      id: "evcharging",
      title: "EV Charging",
      icon: "⚡",
      description: "Electric vehicle charging stations",
      searchTerm: "EV charging stations"
    },
  ];

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city) {
          const locationString = `${data.city}, ${data.region}`;
          setLocation(locationString);
          setDetectedCity(data.city);
          setSearchInput(locationString);
        }
      } catch (error) {
        console.log('Could not detect location');
        setLocation("Orlando, FL");
        setDetectedCity("Orlando");
      } finally {
        setIsDetecting(false);
      }
    };
    detectLocation();
  }, []);

  const handleServiceClick = (searchTerm: string) => {
    if (!location) {
      alert('Please enter your location to search');
      return;
    }
    const query = encodeURIComponent(`${searchTerm} near ${location}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const handleManualSearch = () => {
    if (!searchInput.trim()) {
      alert('Please enter a location to search');
      return;
    }
    setLocation(searchInput);
    setDetectedCity(searchInput.split(',')[0].trim());
  };

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CARS", href: "/cars" },
    { name: "SERVICES", href: "/care" },
    { name: "SHOP", href: "/shop" },
    { name: "INSIGHTS", href: "/insights" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                item.name === "SERVICES"
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <section className="pt-32 pb-16 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4a90d9]/10 border border-[#4a90d9]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#4a90d9] rounded-full animate-pulse"></span>
              <span className="text-[12px] tracking-wide text-[#4a90d9]">Trusted by car enthusiasts</span>
            </div>
            
            <h1 className="text-[clamp(36px,5vw,56px)] font-light leading-[1.1] mb-6">
              Find Auto Services
              <span className="text-[#4a90d9] italic"> Near You</span>
            </h1>
            
            <p className="text-[16px] text-[#6b7a94] leading-relaxed mb-8 max-w-[600px] mx-auto">
              Discover top-rated detailing specialists, PPF installers, body shops, and more in your area.
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#4a90d9]/20 rounded-full flex items-center justify-center">
                <span className="text-[#4a90d9]">📍</span>
              </div>
              <div className="text-left">
                <p className="text-[12px] text-[#6b7a94] uppercase tracking-wide">Your Location</p>
                {isDetecting ? (
                  <p className="text-[15px] text-[#e8edf5]">Detecting...</p>
                ) : (
                  <p className="text-[15px] text-[#e8edf5]">{location || "Enter your location"}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 max-w-[500px] mx-auto">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter city, state or zip code..."
                className="flex-1 bg-[#0d1424] border border-[rgba(74,144,217,0.3)] rounded-lg px-5 py-4 text-[14px] text-[#e8edf5] placeholder-[#3d4a61] focus:border-[#4a90d9] focus:outline-none transition-colors"
              />
              <button
                onClick={handleManualSearch}
                className="bg-[#4a90d9] hover:bg-[#5ba0e9] text-[#0a0f1a] font-medium px-8 py-4 rounded-lg transition-all duration-300"
              >
                Update
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceCards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleServiceClick(card.searchTerm)}
                className="group relative bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-2xl p-6 text-left hover:border-[#4a90d9]/50 hover:bg-[#0d1424]/80 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-[18px] font-medium text-[#e8edf5] mb-1">{card.title}</h3>
                <p className="text-[13px] text-[#4a90d9] mb-2">
                  {isDetecting ? "Detecting..." : `Near ${detectedCity || "you"}`}
                </p>
                <p className="text-[12px] text-[#6b7a94]">{card.description}</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#4a90d9] text-xl">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-12 bg-[#0d1424]/50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[24px] font-light mb-8 text-center">
            Popular Services {detectedCity && <span className="text-[#4a90d9]">in {detectedCity}</span>}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Car Detailing", term: "car detailing" },
              { label: "Ceramic Coating", term: "ceramic coating" },
              { label: "Paint Protection Film", term: "PPF paint protection film" },
              { label: "Vinyl Wraps", term: "vinyl car wrap" },
              { label: "Auto Body Repair", term: "auto body repair" },
              { label: "Dent Removal", term: "paintless dent removal" },
              { label: "Window Tinting", term: "car window tinting" },
              { label: "EV Chargers", term: "electric vehicle charging" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleServiceClick(item.term)}
                className="bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[13px] text-[#6b7a94] hover:text-[#e8edf5] hover:border-[#4a90d9]/50 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[28px] font-light mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "We Detect Your Location", desc: "Automatically find services near you based on your location" },
              { step: "2", title: "Choose a Service", desc: "Select from detailing, PPF, body shops, repair, and more" },
              { step: "3", title: "Find Top Providers", desc: "See the best-rated providers in your area instantly" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#4a90d9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#4a90d9] font-medium">{item.step}</span>
                </div>
                <h3 className="text-[16px] font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6b7a94]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#080c14] py-16 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {[
              { title: "Services", links: [
                { name: "Auto Detailing", href: "/care" },
                { name: "PPF & Wraps", href: "/care" },
                { name: "Body Shops", href: "/care" },
                { name: "Auto Repair", href: "/care" }
              ]},
              { title: "Directory", links: [
                { name: "Browse Cars", href: "/cars" },
                { name: "Find Services", href: "/care" },
                { name: "Shop Accessories", href: "/shop" },
                { name: "Read Insights", href: "/insights" }
              ]},
              { title: "Company", links: [
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ]},
              { title: "Legal", links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" }
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
          <div className="flex justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)]">
            <div className="text-[11px] text-[#3d4a61]">© 2026 Healvanna. All rights reserved.</div>
            <div className="flex gap-6">
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
              ].map((link) => <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
