"use client";

import Link from "next/link";
import { guides, cities } from "../lib/guidesData";

export default function GuidesHub() {
  return (
    &lt;main className="min-h-screen bg-[#0a0f1a]"&gt;
      {/* Hero Section */}
      &lt;section className="relative pt-32 pb-20 px-6"&gt;
        {/* Background gradient */}
        &lt;div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" /&gt;
        &lt;div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" /&gt;
        
        &lt;div className="relative max-w-6xl mx-auto text-center"&gt;
          &lt;span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#4a90d9]/10 text-[#4a90d9] border border-[#4a90d9]/20 mb-6"&gt;
            Knowledge Hub
          &lt;/span&gt;
          &lt;h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#e8edf5] mb-6"&gt;
            EV &amp; Auto Care{" "}
            &lt;span className="text-[#4a90d9]"&gt;Guides&lt;/span&gt;
          &lt;/h1&gt;
          &lt;p className="text-lg md:text-xl text-[#6b7a94] max-w-2xl mx-auto"&gt;
            Plain-English guides to help you make smart decisions about your electric vehicle 
            and car care. No jargon, no fluff—just practical advice.
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Featured Guides */}
      &lt;section className="py-16 px-6"&gt;
        &lt;div className="max-w-6xl mx-auto"&gt;
          &lt;h2 className="text-2xl font-light text-[#e8edf5] mb-8"&gt;Featured Guides&lt;/h2&gt;
          
          &lt;div className="grid md:grid-cols-2 gap-6"&gt;
            {guides.filter(g =&gt; g.featured).map((guide) =&gt; (
              &lt;Link 
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block"
              &gt;
                &lt;div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0d1424] to-[#0a0f1a] border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-all duration-300"&gt;
                  {/* Glow effect on hover */}
                  &lt;div className="absolute inset-0 rounded-2xl bg-[#4a90d9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /&gt;
                  
                  &lt;div className="relative"&gt;
                    &lt;div className="flex items-start justify-between mb-4"&gt;
                      &lt;span className="text-4xl"&gt;{guide.icon}&lt;/span&gt;
                      &lt;span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]"&gt;
                        {guide.category}
                      &lt;/span&gt;
                    &lt;/div&gt;
                    
                    &lt;h3 className="text-xl font-medium text-[#e8edf5] mb-3 group-hover:text-[#4a90d9] transition-colors"&gt;
                      {guide.shortTitle}
                    &lt;/h3&gt;
                    
                    &lt;p className="text-[#6b7a94] mb-4 line-clamp-2"&gt;
                      {guide.description}
                    &lt;/p&gt;
                    
                    &lt;div className="flex items-center justify-between"&gt;
                      &lt;span className="text-sm text-[#4a90d9]"&gt;{guide.readTime}&lt;/span&gt;
                      &lt;span className="text-[#4a90d9] group-hover:translate-x-1 transition-transform"&gt;
                        →
                      &lt;/span&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/Link&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Local Guides Section */}
      &lt;section className="py-16 px-6 bg-[#0d1424]/50"&gt;
        &lt;div className="max-w-6xl mx-auto"&gt;
          &lt;div className="text-center mb-12"&gt;
            &lt;h2 className="text-2xl md:text-3xl font-light text-[#e8edf5] mb-4"&gt;
              Local Guides by City
            &lt;/h2&gt;
            &lt;p className="text-[#6b7a94] max-w-xl mx-auto"&gt;
              Get location-specific information including local electricity rates, 
              utility incentives, and tips for your area.
            &lt;/p&gt;
          &lt;/div&gt;
          
          &lt;div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"&gt;
            {cities.map((city) =&gt; (
              &lt;Link
                key={city.slug}
                href={`/guides/home-ev-charging/${city.slug}`}
                className="group p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 hover:bg-[#0d1424] transition-all duration-300 text-center"
              &gt;
                &lt;div className="text-2xl mb-2"&gt;📍&lt;/div&gt;
                &lt;h3 className="font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors"&gt;
                  {city.name}
                &lt;/h3&gt;
                &lt;p className="text-xs text-[#6b7a94]"&gt;{city.state}&lt;/p&gt;
              &lt;/Link&gt;
            ))}
          &lt;/div&gt;
          
          &lt;p className="text-center text-sm text-[#6b7a94] mt-8"&gt;
            More cities coming soon! &lt;span className="text-[#4a90d9]"&gt;Request your city →&lt;/span&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* All Guides List */}
      &lt;section className="py-16 px-6"&gt;
        &lt;div className="max-w-6xl mx-auto"&gt;
          &lt;h2 className="text-2xl font-light text-[#e8edf5] mb-8"&gt;All Guides&lt;/h2&gt;
          
          &lt;div className="space-y-4"&gt;
            {guides.map((guide) =&gt; (
              &lt;Link 
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block"
              &gt;
                &lt;div className="flex items-center gap-6 p-6 rounded-xl bg-[#0d1424]/50 border border-[#4a90d9]/10 hover:border-[#4a90d9]/30 transition-all duration-300"&gt;
                  &lt;span className="text-3xl"&gt;{guide.icon}&lt;/span&gt;
                  
                  &lt;div className="flex-1"&gt;
                    &lt;h3 className="text-lg font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors"&gt;
                      {guide.title}
                    &lt;/h3&gt;
                    &lt;p className="text-sm text-[#6b7a94] mt-1"&gt;{guide.description}&lt;/p&gt;
                  &lt;/div&gt;
                  
                  &lt;div className="hidden md:flex items-center gap-4"&gt;
                    &lt;span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]"&gt;
                      {guide.category}
                    &lt;/span&gt;
                    &lt;span className="text-sm text-[#6b7a94]"&gt;{guide.readTime}&lt;/span&gt;
                    &lt;span className="text-[#4a90d9] group-hover:translate-x-1 transition-transform"&gt;
                      →
                    &lt;/span&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/Link&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* CTA Section */}
      &lt;section className="py-20 px-6"&gt;
        &lt;div className="max-w-4xl mx-auto text-center"&gt;
          &lt;div className="p-10 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20"&gt;
            &lt;h2 className="text-2xl md:text-3xl font-light text-[#e8edf5] mb-4"&gt;
              Need Professional Help?
            &lt;/h2&gt;
            &lt;p className="text-[#6b7a94] mb-8 max-w-lg mx-auto"&gt;
              Our verified specialists can help with EV charger installation, ceramic coating, 
              PPF, and more. Find trusted providers in your area.
            &lt;/p&gt;
            &lt;Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            &gt;
              Find Service Providers
              &lt;span&gt;→&lt;/span&gt;
            &lt;/Link&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  );
}
