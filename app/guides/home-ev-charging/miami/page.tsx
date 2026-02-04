"use client";

import { useState } from "react";
import Link from "next/link";
import { guides, cities, getGuideBySlug, getCityBySlug } from "../../../lib/guidesData";

export default function MiamiEvChargingGuide() {
  const guide = getGuideBySlug("home-ev-charging");
  const city = getCityBySlug("miami");
  const [openFaq, setOpenFaq] = useState&lt;number | null&gt;(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!guide || !city) return null;

  const handleSubscribe = (e: React.FormEvent) =&gt; {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    &lt;main className="min-h-screen bg-[#0a0f1a]"&gt;
      {/* Hero Section */}
      &lt;section className="relative pt-32 pb-16 px-6"&gt;
        &lt;div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" /&gt;
        &lt;div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" /&gt;
        
        &lt;div className="relative max-w-4xl mx-auto"&gt;
          {/* Breadcrumb */}
          &lt;nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"&gt;
            &lt;Link href="/guides" className="hover:text-[#4a90d9] transition-colors"&gt;
              Guides
            &lt;/Link&gt;
            &lt;span&gt;/&lt;/span&gt;
            &lt;Link href="/guides/home-ev-charging" className="hover:text-[#4a90d9] transition-colors"&gt;
              Home EV Charging
            &lt;/Link&gt;
            &lt;span&gt;/&lt;/span&gt;
            &lt;span className="text-[#e8edf5]"&gt;{city.name}&lt;/span&gt;
          &lt;/nav&gt;
          
          &lt;div className="flex items-center gap-4 mb-6"&gt;
            &lt;span className="text-5xl"&gt;📍&lt;/span&gt;
            &lt;div className="flex items-center gap-3"&gt;
              &lt;span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]"&gt;
                Local Guide
              &lt;/span&gt;
              &lt;span className="px-3 py-1 rounded-full text-xs font-medium bg-[#10b981]/10 text-[#10b981]"&gt;
                Florida
              &lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          
          &lt;h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6"&gt;
            Home EV Charging in{" "}
            &lt;span className="text-[#4a90d9]"&gt;{city.name}&lt;/span&gt;
          &lt;/h1&gt;
          
          &lt;p className="text-lg text-[#6b7a94] mb-6 max-w-2xl"&gt;
            {city.description} Here's everything you need to know about setting up 
            home EV charging in {city.name}.
          &lt;/p&gt;
          
          &lt;div className="flex items-center gap-6 text-sm text-[#6b7a94]"&gt;
            &lt;span&gt;📖 8 min read&lt;/span&gt;
            &lt;span&gt;📅 Updated January 2026&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Quick Stats */}
      &lt;section className="py-8 px-6 bg-[#0d1424]/50"&gt;
        &lt;div className="max-w-4xl mx-auto"&gt;
          &lt;div className="grid grid-cols-2 md:grid-cols-4 gap-4"&gt;
            &lt;div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10"&gt;
              &lt;div className="text-2xl font-medium text-[#4a90d9]"&gt;{city.electricityRate}&lt;/div&gt;
              &lt;div className="text-sm text-[#6b7a94]"&gt;Avg. Electricity Rate&lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10"&gt;
              &lt;div className="text-2xl font-medium text-[#4a90d9]"&gt;{city.chargingNetworks.length}+&lt;/div&gt;
              &lt;div className="text-sm text-[#6b7a94]"&gt;Charging Networks&lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10"&gt;
              &lt;div className="text-2xl font-medium text-[#4a90d9]"&gt;FPL&lt;/div&gt;
              &lt;div className="text-sm text-[#6b7a94]"&gt;Main Utility&lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10"&gt;
              &lt;div className="text-2xl font-medium text-[#4a90d9]"&gt;$500-$2K&lt;/div&gt;
              &lt;div className="text-sm text-[#6b7a94]"&gt;Typical Install Cost&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Main Content */}
      &lt;section className="py-12 px-6"&gt;
        &lt;div className="max-w-4xl mx-auto"&gt;
          
          {/* Local Incentives */}
          &lt;div className="mb-12"&gt;
            &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
              {city.name} EV Incentives &amp; Rebates
            &lt;/h2&gt;
            &lt;div className="space-y-3"&gt;
              {city.evIncentives.map((incentive, idx) =&gt; (
                &lt;div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"
                &gt;
                  &lt;span className="text-[#4a90d9] mt-1"&gt;✓&lt;/span&gt;
                  &lt;span className="text-[#b8c4d9]"&gt;{incentive}&lt;/span&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Electricity & Charging Costs */}
          &lt;div className="mb-12"&gt;
            &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
              Electricity Costs in {city.name}
            &lt;/h2&gt;
            &lt;div className="p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"&gt;
              &lt;p className="text-[#b8c4d9] mb-4"&gt;
                The average residential electricity rate in {city.name} is &lt;strong className="text-[#e8edf5]"&gt;{city.electricityRate}&lt;/strong&gt; per kWh. 
                This means charging a typical EV (with a 60 kWh battery) from 20% to 80% costs approximately &lt;strong className="text-[#e8edf5]"&gt;$4.30 - $5.40&lt;/strong&gt;.
              &lt;/p&gt;
              
              &lt;div className="mt-6 p-4 rounded-lg bg-[#4a90d9]/10 border border-[#4a90d9]/20"&gt;
                &lt;h4 className="font-medium text-[#e8edf5] mb-2"&gt;💡 Pro Tip: FPL Off-Peak Rates&lt;/h4&gt;
                &lt;p className="text-sm text-[#b8c4d9]"&gt;
                  Florida Power &amp; Light (FPL) offers time-of-use rates. Charging between 11 PM - 6 AM 
                  can save you 20-30% on electricity costs. Most smart chargers let you schedule 
                  charging automatically during these hours.
                &lt;/p&gt;
              &lt;/div&gt;
              
              &lt;div className="mt-4"&gt;
                &lt;h4 className="font-medium text-[#e8edf5] mb-3"&gt;Monthly Cost Comparison&lt;/h4&gt;
                &lt;div className="grid md:grid-cols-2 gap-4"&gt;
                  &lt;div className="p-4 rounded-lg bg-[#0a0f1a]"&gt;
                    &lt;div className="text-sm text-[#6b7a94] mb-1"&gt;EV (1,000 miles/month)&lt;/div&gt;
                    &lt;div className="text-2xl font-medium text-[#10b981]"&gt;~$36-45&lt;/div&gt;
                  &lt;/div&gt;
                  &lt;div className="p-4 rounded-lg bg-[#0a0f1a]"&gt;
                    &lt;div className="text-sm text-[#6b7a94] mb-1"&gt;Gas Car (1,000 miles @ $3.50/gal)&lt;/div&gt;
                    &lt;div className="text-2xl font-medium text-[#ef4444]"&gt;~$117&lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Local Tips */}
          &lt;div className="mb-12"&gt;
            &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
              {city.name}-Specific Tips
            &lt;/h2&gt;
            &lt;div className="grid md:grid-cols-2 gap-4"&gt;
              {city.localTips.map((tip, idx) =&gt; (
                &lt;div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"
                &gt;
                  &lt;span className="text-[#b8c4d9]"&gt;{tip}&lt;/span&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Popular EVs in Miami */}
          &lt;div className="mb-12"&gt;
            &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
              Popular EVs in {city.name}
            &lt;/h2&gt;
            &lt;div className="flex flex-wrap gap-3"&gt;
              {city.popularEvs.map((ev, idx) =&gt; (
                &lt;span 
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5]"
                &gt;
                  {ev}
                &lt;/span&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Public Charging Networks */}
          &lt;div className="mb-12"&gt;
            &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
              Public Charging Networks in {city.name}
            &lt;/h2&gt;
            &lt;p className="text-[#6b7a94] mb-4"&gt;
              While home charging handles most of your needs, here are the public networks 
              available in {city.name} for longer trips:
            &lt;/p&gt;
            &lt;div className="grid grid-cols-2 md:grid-cols-4 gap-4"&gt;
              {city.chargingNetworks.map((network, idx) =&gt; (
                &lt;div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 text-center"
                &gt;
                  &lt;span className="text-[#e8edf5] font-medium"&gt;{network}&lt;/span&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Link to Main Guide */}
          &lt;div className="mb-12 p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10"&gt;
            &lt;h3 className="text-xl font-medium text-[#e8edf5] mb-2"&gt;
              Want the Full Guide?
            &lt;/h3&gt;
            &lt;p className="text-[#6b7a94] mb-4"&gt;
              Read our complete guide covering charger types, installation costs, electrical 
              requirements, and common mistakes to avoid.
            &lt;/p&gt;
            &lt;Link
              href="/guides/home-ev-charging"
              className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            &gt;
              Read the Full Home EV Charging Guide →
            &lt;/Link&gt;
          &lt;/div&gt;

          {/* Other Cities */}
          &lt;div className="mb-12"&gt;
            &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
              Guides for Other Florida Cities
            &lt;/h2&gt;
            &lt;div className="grid grid-cols-2 md:grid-cols-4 gap-4"&gt;
              {cities.filter(c =&gt; c.slug !== city.slug).map((otherCity) =&gt; (
                &lt;Link
                  key={otherCity.slug}
                  href={`/guides/home-ev-charging/${otherCity.slug}`}
                  className="p-4 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-colors text-center"
                &gt;
                  &lt;span className="text-[#e8edf5] font-medium"&gt;{otherCity.name}&lt;/span&gt;
                &lt;/Link&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Email Signup */}
          &lt;section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20"&gt;
            &lt;h3 className="text-xl font-medium text-[#e8edf5] mb-2"&gt;
              Stay Updated
            &lt;/h3&gt;
            &lt;p className="text-[#6b7a94] mb-6"&gt;
              Get notified about {city.name} EV news, incentives, and new guides.
            &lt;/p&gt;
            
            {subscribed ? (
              &lt;div className="flex items-center gap-3 text-[#4a90d9]"&gt;
                &lt;span&gt;✓&lt;/span&gt;
                &lt;span&gt;Thanks! You're subscribed.&lt;/span&gt;
              &lt;/div&gt;
            ) : (
              &lt;form onSubmit={handleSubscribe} className="flex gap-3"&gt;
                &lt;input
                  type="email"
                  value={email}
                  onChange={(e) =&gt; setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0a0f1a] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50"
                /&gt;
                &lt;button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                &gt;
                  Subscribe
                &lt;/button&gt;
              &lt;/form&gt;
            )}
          &lt;/section&gt;

          {/* CTA - Find Service Providers */}
          &lt;section className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"&gt;
            &lt;h3 className="text-xl font-medium text-[#e8edf5] mb-2"&gt;
              Find EV Charger Installers in {city.name}
            &lt;/h3&gt;
            &lt;p className="text-[#6b7a94] mb-6"&gt;
              Browse verified electricians and EV specialists in the {city.name} area.
            &lt;/p&gt;
            &lt;Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            &gt;
              Find {city.name} Installers
              &lt;span&gt;→&lt;/span&gt;
            &lt;/Link&gt;
          &lt;/section&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  );
}
