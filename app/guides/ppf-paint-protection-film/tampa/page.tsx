"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  slug: "tampa",
  state: "FL",
  description: "Tampa Bay's coastal environment, bridge crossings, and Florida sunshine create unique challenges that make PPF a wise investment for local drivers.",
  avgFullFront: "$1,500 - $3,300",
  avgFullBody: "$4,800 - $7,500",
  climate: "Coastal, humid, hot",
  mainConcerns: ["Bridge debris (Howard Frankland, Gandy)", "Salt air from Tampa Bay", "Intense sun exposure", "Construction zone gravel"],
  topInstallerTips: [
    "Tampa has several highly-rated shops - compare at least 3 quotes",
    "Ask about salt air resistance for coastal driving",
    "Check if they offer warranty coverage for yellowing (important in FL sun)",
    "Many Tampa shops do excellent work on trucks/SUVs - popular vehicles here"
  ],
  localConsiderations: [
    "Bridge crossings (Howard Frankland, Gandy, Courtney Campbell) kick up significant debris",
    "Salt air from Tampa Bay accelerates paint damage without protection",
    "Tampa's car culture means plenty of experienced installers to choose from",
    "I-275 and I-4 interchange is notorious for rock chips",
    "Competitive market = better prices than Miami, same quality available"
  ],
  popularPackages: [
    { name: "Full Front", price: "$1,500 - $3,300", popular: true },
    { name: "Full Front + Rockers", price: "$2,400 - $4,200", popular: true },
    { name: "Full Body", price: "$4,800 - $7,500", popular: false }
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function TampaPPFGuide() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      
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
            <Link href="/guides/ppf-paint-protection-film" className="hover:text-[#4a90d9] transition-colors">
              Paint Protection Film
            </Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{cityData.name}</span>
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
            PPF in{" "}
            <span className="text-[#4a90d9]">{cityData.name}</span>
          </h1>
          
          <p className="text-lg text-[#6b7a94] mb-6 max-w-2xl">
            {cityData.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>📖 6 min read</span>
            <span>📅 Updated January 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 bg-[#0d1424]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">{cityData.avgFullFront}</div>
              <div className="text-sm text-[#6b7a94]">Full Front Cost</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">{cityData.avgFullBody}</div>
              <div className="text-sm text-[#6b7a94]">Full Body Cost</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">{cityData.climate}</div>
              <div className="text-sm text-[#6b7a94]">Climate</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">High</div>
              <div className="text-sm text-[#6b7a94]">PPF Demand</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Why PPF in This City */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Why PPF is Essential in {cityData.name}
            </h2>
            <div className="space-y-3">
              {cityData.localConsiderations.map((consideration, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"
                >
                  <span className="text-[#4a90d9] mt-1">✓</span>
                  <span className="text-[#b8c4d9]">{consideration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Concerns */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Top Paint Threats in {cityData.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cityData.mainConcerns.map((concern, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 text-center"
                >
                  <span className="text-[#e8edf5] font-medium">{concern}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Packages */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Popular PPF Packages in {cityData.name}
            </h2>
            <div className="space-y-4">
              {cityData.popularPackages.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center justify-between p-5 rounded-xl border ${pkg.popular ? 'bg-[#4a90d9]/10 border-[#4a90d9]/30' : 'bg-[#0d1424]/50 border-[#4a90d9]/10'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#e8edf5] font-medium">{pkg.name}</span>
                    {pkg.popular && (
                      <span className="px-2 py-0.5 rounded text-xs bg-[#4a90d9] text-white">Popular</span>
                    )}
                  </div>
                  <span className="text-[#4a90d9] font-medium">{pkg.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for Finding Installer */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              {cityData.name} Installer Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cityData.topInstallerTips.map((tip, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"
                >
                  <span className="text-[#b8c4d9]">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link to Main Guide */}
          <div className="mb-12 p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
              Want the Full PPF Guide?
            </h3>
            <p className="text-[#6b7a94] mb-4">
              Learn about PPF brands, coverage options, costs, and how to choose an installer.
            </p>
            <Link
              href="/guides/ppf-paint-protection-film"
              className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            >
              Read the Complete PPF Guide →
            </Link>
          </div>

          {/* Other Cities */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              PPF Guides for Other Florida Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/guides/ppf-paint-protection-film/${city.slug}`}
                  className="p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-colors text-center"
                >
                  <span className="text-[#e8edf5] font-medium">{city.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Email Signup */}
          <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
            <p className="text-[#6b7a94] mb-6">Get notified about {cityData.name} car care tips and deals.</p>
            
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
              Find PPF Installers in {cityData.name}
            </h3>
            <p className="text-[#6b7a94] mb-6">
              Browse verified PPF specialists in the {cityData.name} area.
            </p>
            <Link
              href="/car-wrapping/ppf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            >
              Find {cityData.name} PPF Installers
              <span>→</span>
            </Link>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
