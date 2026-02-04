"use client";

import { useState } from "react";
import Link from "next/link";
import { cities, getCityBySlug } from "../../../lib/guidesData";

export default function FortLauderdaleEvChargingGuide() {
  const city = getCityBySlug("fort-lauderdale");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!city) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/guides" className="hover:text-[#4a90d9] transition-colors">
              Guides
            </Link>
            <span>/</span>
            <Link href="/guides/home-ev-charging" className="hover:text-[#4a90d9] transition-colors">
              Home EV Charging
            </Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{city.name}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">📍</span>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
                Local Guide
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#10b981]/10 text-[#10b981]">
                Florida
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6">
            Home EV Charging in{" "}
            <span className="text-[#4a90d9]">{city.name}</span>
          </h1>
          
          <p className="text-lg text-[#6b7a94] mb-6 max-w-2xl">
            {city.description} Here&apos;s everything you need to know about setting up 
            home EV charging in {city.name}.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>📖 8 min read</span>
            <span>📅 Updated January 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 bg-[#0d1424]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">{city.electricityRate}</div>
              <div className="text-sm text-[#6b7a94]">Avg. Electricity Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">{city.chargingNetworks.length}+</div>
              <div className="text-sm text-[#6b7a94]">Charging Networks</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">FPL</div>
              <div className="text-sm text-[#6b7a94]">Main Utility</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">$500-$2K</div>
              <div className="text-sm text-[#6b7a94]">Typical Install Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Local Incentives */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              {city.name} EV Incentives &amp; Rebates
            </h2>
            <div className="space-y-3">
              {city.evIncentives.map((incentive, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"
                >
                  <span className="text-[#4a90d9] mt-1">✓</span>
                  <span className="text-[#b8c4d9]">{incentive}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Electricity Costs */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Electricity Costs in {city.name}
            </h2>
            <div className="p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10">
              <p className="text-[#b8c4d9] mb-4">
                The average residential electricity rate in {city.name} is <strong className="text-[#e8edf5]">{city.electricityRate}</strong> per kWh. 
                This means charging a typical EV (with a 60 kWh battery) from 20% to 80% costs approximately <strong className="text-[#e8edf5]">$4.30 - $5.50</strong>.
              </p>
              
              <div className="mt-6 p-4 rounded-lg bg-[#4a90d9]/10 border border-[#4a90d9]/20">
                <h4 className="font-medium text-[#e8edf5] mb-2">💡 Pro Tip: FPL EV Programs</h4>
                <p className="text-sm text-[#b8c4d9]">
                  Florida Power &amp; Light offers EV charging programs and time-of-use rates 
                  that can help reduce your charging costs by 20-30% when charging overnight.
                </p>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-[#e8edf5] mb-3">Monthly Cost Comparison</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#0a0f1a]">
                    <div className="text-sm text-[#6b7a94] mb-1">EV (1,000 miles/month)</div>
                    <div className="text-2xl font-medium text-[#10b981]">~$36-46</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#0a0f1a]">
                    <div className="text-sm text-[#6b7a94] mb-1">Gas Car (1,000 miles @ $3.50/gal)</div>
                    <div className="text-2xl font-medium text-[#ef4444]">~$117</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              {city.name}-Specific Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {city.localTips.map((tip, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"
                >
                  <span className="text-[#b8c4d9]">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular EVs */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Popular EVs in {city.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {city.popularEvs.map((ev, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5]"
                >
                  {ev}
                </span>
              ))}
            </div>
          </div>

          {/* Charging Networks */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Public Charging Networks in {city.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {city.chargingNetworks.map((network, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 text-center"
                >
                  <span className="text-[#e8edf5] font-medium">{network}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link to Main Guide */}
          <div className="mb-12 p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
              Want the Full Guide?
            </h3>
            <p className="text-[#6b7a94] mb-4">
              Read our complete guide covering charger types, installation costs, and more.
            </p>
            <Link
              href="/guides/home-ev-charging"
              className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            >
              Read the Full Home EV Charging Guide →
            </Link>
          </div>

          {/* Other Cities */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Guides for Other Florida Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cities.filter(c => c.slug !== city.slug).map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/guides/home-ev-charging/${otherCity.slug}`}
                  className="p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-colors text-center"
                >
                  <span className="text-[#e8edf5] font-medium">{otherCity.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Email Signup */}
          <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
            <p className="text-[#6b7a94] mb-6">Get notified about {city.name} EV news and guides.</p>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-[#4a90d9]">
                <span>✓</span>
                <span>Thanks! You&apos;re subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0a0f1a] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </section>

          {/* CTA */}
          <section className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
              Find EV Charger Installers in {city.name}
            </h3>
            <p className="text-[#6b7a94] mb-6">
              Browse verified electricians and EV specialists in the {city.name} area.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            >
              Find {city.name} Installers
              <span>→</span>
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
