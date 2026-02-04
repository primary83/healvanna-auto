"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { guides, cities } from "../lib/guidesData";

export default function GuidesHub() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#4a90d9]/10 text-[#4a90d9] border border-[#4a90d9]/20 mb-6">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#e8edf5] mb-6">
            EV &amp; Auto Care{" "}
            <span className="text-[#4a90d9]">Guides</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6b7a94] max-w-2xl mx-auto">
            Plain-English guides to help you make smart decisions about your electric vehicle 
            and car care. No jargon, no fluff—just practical advice.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Featured Guides</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guides.filter(g => g.featured).map((guide) => (
              <Link 
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1a] border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[#4a90d9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{guide.icon}</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
                        {guide.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium text-[#e8edf5] mb-3 group-hover:text-[#4a90d9] transition-colors">
                      {guide.shortTitle}
                    </h3>
                    
                    <p className="text-[#6b7a94] mb-4 line-clamp-2">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#4a90d9]">{guide.readTime}</span>
                      <span className="text-[#4a90d9] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Guides Section */}
      <section className="py-16 px-6 bg-[#0d1424]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#e8edf5] mb-4">
              Local Guides by City
            </h2>
            <p className="text-[#6b7a94] max-w-xl mx-auto">
              Get location-specific information including local electricity rates, 
              utility incentives, and tips for your area.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/guides/home-ev-charging/${city.slug}`}
                className="group p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 hover:bg-[#0d1424] transition-all duration-300 text-center"
              >
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                  {city.name}
                </h3>
                <p className="text-xs text-[#6b7a94]">{city.state}</p>
              </Link>
            ))}
          </div>
          
          <p className="text-center text-sm text-[#6b7a94] mt-8">
            More cities coming soon! <span className="text-[#4a90d9]">Request your city →</span>
          </p>
        </div>
      </section>

      {/* All Guides List */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">All Guides</h2>
          
          <div className="space-y-4">
            {guides.map((guide) => (
              <Link 
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block"
              >
                <div className="flex items-center gap-6 p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-all duration-300">
                  <span className="text-3xl">{guide.icon}</span>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-[#6b7a94] mt-1">{guide.description}</p>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
                      {guide.category}
                    </span>
                    <span className="text-sm text-[#6b7a94]">{guide.readTime}</span>
                    <span className="text-[#4a90d9] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
            <h2 className="text-2xl md:text-3xl font-light text-[#e8edf5] mb-4">
              Need Professional Help?
            </h2>
            <p className="text-[#6b7a94] mb-8 max-w-lg mx-auto">
              Our verified specialists can help with EV charger installation, ceramic coating, 
              PPF, and more. Find trusted providers in your area.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            >
              Find Service Providers
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
