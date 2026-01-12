import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "US EVs vs Chinese EVs: A Complete Comparison Guide",
  description: "An in-depth comparison of American and Chinese electric vehicles. Compare Tesla, Rivian, and Lucid against BYD, NIO, and Xpeng on range, technology, price, and value.",
};

export default function USvsChineseEVs() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-[rgba(74,144,217,0.15)]">
        <a href="/" className="text-xl tracking-[0.3em] font-light">
          HEALVANNA <span className="text-[#4a90d9]">AUTO</span>
        </a>
        <div className="flex gap-10">
          {["Home", "Cars", "Care", "Craft", "Insights", "About"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-[13px] tracking-wider transition-colors duration-300 ${
                item === "Insights"
                  ? "text-[#e8edf5] border-b border-[#4a90d9] pb-1"
                  : "text-[#6b7a94] hover:text-[#e8edf5]"
              }`}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Article Header */}
      <header className="px-12 py-16 max-w-[900px] mx-auto">
        <div className="mb-6">
          <a href="/insights" className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase hover:text-[#6ba8eb]">
            ← Back to Insights
          </a>
        </div>
        <p className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase mb-4">
          Comparison Guide
        </p>
        <h1 className="text-5xl font-light mb-6 leading-tight">
          US EVs vs Chinese EVs: <span className="text-[#4a90d9] italic">Which Should You Choose?</span>
        </h1>
        <p className="text-[#6b7a94] text-sm mb-8">
          January 12, 2025 · 8 min read
        </p>
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80" 
          alt="Electric vehicles comparison"
          className="w-full h-[400px] object-cover rounded-sm"
        />
      </header>

      {/* Article Content */}
      <article className="px-12 pb-24 max-w-[900px] mx-auto">
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Introduction */}
          <p className="text-[#8a9bb5] text-lg leading-relaxed mb-8">
            The electric vehicle market has become a fascinating battleground between American innovation and Chinese manufacturing prowess. As we enter 2025, the choice between US and Chinese EVs has never been more compelling—or more complex. Let's break down everything you need to know.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-light text-[#e8edf5] mt-12 mb-6">The American Players</h2>
          <p className="text-[#8a9bb5] leading-relaxed mb-6">
            The United States EV market is dominated by established names that have become synonymous with electric innovation:
          </p>
          
          <div className="bg-[#0d1220] p-6 rounded-sm border border-[rgba(74,144,217,0.15)] mb-8">
            <h3 className="text-lg text-[#e8edf5] mb-4">Tesla</h3>
            <p className="text-[#8a9bb5] text-sm leading-relaxed mb-4">
              Still the benchmark for EVs worldwide. The Model S Plaid delivers 1,020 horsepower and a 396-mile range, while the Model 3 and Model Y offer exceptional value. Tesla's Supercharger network remains the gold standard for charging infrastructure.
            </p>
            <div className="flex gap-4 text-xs text-[#6b7a94]">
              <span>Range: 272-396 miles</span>
              <span>•</span>
              <span>Starting: $42,990</span>
            </div>
          </div>

          <div className="bg-[#0d1220] p-6 rounded-sm border border-[rgba(74,144,217,0.15)] mb-8">
            <h3 className="text-lg text-[#e8edf5] mb-4">Rivian</h3>
            <p className="text-[#8a9bb5] text-sm leading-relaxed mb-4">
              The adventure-focused EV brand has carved out a unique niche. The R1T pickup and R1S SUV combine rugged capability with luxury refinement. Their "tank turn" feature and gear tunnel storage showcase innovative thinking.
            </p>
            <div className="flex gap-4 text-xs text-[#6b7a94]">
              <span>Range: 260-400 miles</span>
              <span>•</span>
              <span>Starting: $69,900</span>
            </div>
          </div>

          <div className="bg-[#0d1220] p-6 rounded-sm border border-[rgba(74,144,217,0.15)] mb-8">
            <h3 className="text-lg text-[#e8edf5] mb-4">Lucid</h3>
            <p className="text-[#8a9bb5] text-sm leading-relaxed mb-4">
              The luxury EV brand pushing boundaries in efficiency. The Lucid Air Sapphire is the quickest sedan ever made (1.89s 0-60), while the Air Grand Touring delivers an EPA-rated 516 miles of range—the longest of any EV.
            </p>
            <div className="flex gap-4 text-xs text-[#6b7a94]">
              <span>Range: 410-516 miles</span>
              <span>•</span>
              <span>Starting: $69,900</span>
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl font-light text-[#e8edf5] mt-12 mb-6">The Chinese Contenders</h2>
          <p className="text-[#8a9bb5] leading-relaxed mb-6">
            Chinese automakers have rapidly evolved from budget alternatives to genuine competitors offering impressive technology and value:
          </p>

          <div className="bg-[#0d1220] p-6 rounded-sm border border-[rgba(74,144,217,0.15)] mb-8">
            <h3 className="text-lg text-[#e8edf5] mb-4">BYD (Build Your Dreams)</h3>
            <p className="text-[#8a9bb5] text-sm leading-relaxed mb-4">
              Now the world's largest EV manufacturer by volume. BYD's Blade Battery technology offers exceptional safety and longevity. The Seal sedan and Atto 3 SUV showcase sophisticated design rivaling European brands.
            </p>
            <div className="flex gap-4 text-xs text-[#6b7a94]">
              <span>Range: 250-420 miles</span>
              <span>•</span>
              <span>Starting: $25,000*</span>
            </div>
          </div>

          <div className="bg-[#0d1220] p-6 rounded-sm border border-[rgba(74,144,217,0.15)] mb-8">
            <h3 className="text-lg text-[#e8edf5] mb-4">NIO</h3>
            <p className="text-[#8a9bb5] text-sm leading-relaxed mb-4">
              The premium Chinese brand known for battery swapping technology. Their stations can swap a depleted battery for a full one in under 5 minutes. The ET7 sedan and ES8 SUV offer luxury features competitive with German brands.
            </p>
            <div className="flex gap-4 text-xs text-[#6b7a94]">
              <span>Range: 310-580 miles</span>
              <span>•</span>
              <span>Starting: $45,000*</span>
            </div>
          </div>

          <div className="bg-[#0d1220] p-6 rounded-sm border border-[rgba(74,144,217,0.15)] mb-8">
            <h3 className="text-lg text-[#e8edf5] mb-4">Xpeng</h3>
            <p className="text-[#8a9bb5] text-sm leading-relaxed mb-4">
              Focused heavily on autonomous driving technology. Their XNGP system rivals Tesla's Full Self-Driving in capability. The G9 SUV offers ultra-fast 480kW charging—adding 300km of range in just 5 minutes.
            </p>
            <div className="flex gap-4 text-xs text-[#6b7a94]">
              <span>Range: 280-440 miles</span>
              <span>•</span>
              <span>Starting: $35,000*</span>
            </div>
          </div>

          <p className="text-[#6b7a94] text-xs italic mb-8">
            *Chinese EV prices shown are approximate global market prices. US availability varies due to import restrictions and tariffs.
          </p>

          {/* Comparison Table */}
          <h2 className="text-2xl font-light text-[#e8edf5] mt-12 mb-6">Head-to-Head Comparison</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(74,144,217,0.3)]">
                  <th className="text-left py-4 text-[#4a90d9] font-medium">Category</th>
                  <th className="text-left py-4 text-[#4a90d9] font-medium">US EVs</th>
                  <th className="text-left py-4 text-[#4a90d9] font-medium">Chinese EVs</th>
                </tr>
              </thead>
              <tbody className="text-[#8a9bb5]">
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Range</td>
                  <td className="py-4">Excellent (300-516 mi)</td>
                  <td className="py-4">Very Good (250-580 mi)</td>
                </tr>
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Price</td>
                  <td className="py-4">Premium ($40K-$200K)</td>
                  <td className="py-4">Competitive ($25K-$80K)</td>
                </tr>
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Charging Network</td>
                  <td className="py-4">Superior (Supercharger)</td>
                  <td className="py-4">Growing (battery swap option)</td>
                </tr>
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Technology</td>
                  <td className="py-4">Industry-leading</td>
                  <td className="py-4">Rapidly advancing</td>
                </tr>
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Build Quality</td>
                  <td className="py-4">Good to Excellent</td>
                  <td className="py-4">Improving rapidly</td>
                </tr>
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Service Network</td>
                  <td className="py-4">Established</td>
                  <td className="py-4">Limited in US</td>
                </tr>
                <tr className="border-b border-[rgba(74,144,217,0.1)]">
                  <td className="py-4 text-[#e8edf5]">Resale Value</td>
                  <td className="py-4">Moderate to Good</td>
                  <td className="py-4">Unknown in US</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Takeaways */}
          <h2 className="text-2xl font-light text-[#e8edf5] mt-12 mb-6">Key Takeaways</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <span className="text-[#4a90d9] text-lg">→</span>
              <p className="text-[#8a9bb5] leading-relaxed">
                <strong className="text-[#e8edf5]">For US buyers today:</strong> American EVs remain the practical choice due to established service networks, charging infrastructure, and warranty support.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[#4a90d9] text-lg">→</span>
              <p className="text-[#8a9bb5] leading-relaxed">
                <strong className="text-[#e8edf5]">For value seekers:</strong> Chinese EVs offer remarkable technology at lower price points, but US availability remains limited due to tariffs and import restrictions.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[#4a90d9] text-lg">→</span>
              <p className="text-[#8a9bb5] leading-relaxed">
                <strong className="text-[#e8edf5]">For technology enthusiasts:</strong> Both markets are innovating rapidly. Battery swapping (NIO) and ultra-fast charging (Xpeng) represent exciting alternatives to traditional charging.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[#4a90d9] text-lg">→</span>
              <p className="text-[#8a9bb5] leading-relaxed">
                <strong className="text-[#e8edf5]">The future:</strong> As Chinese brands expand globally and US brands improve value propositions, competition will drive better EVs for everyone.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-light text-[#e8edf5] mt-12 mb-6">The Bottom Line</h2>
          <p className="text-[#8a9bb5] leading-relaxed mb-6">
            The EV landscape is evolving rapidly. American brands like Tesla, Rivian, and Lucid continue to lead in range, performance, and infrastructure. Chinese brands like BYD, NIO, and Xpeng are pushing boundaries in value, technology, and charging innovation.
          </p>
          <p className="text-[#8a9bb5] leading-relaxed mb-8">
            For most US buyers in 2025, American EVs remain the sensible choice. But keep your eyes on Chinese manufacturers—they're not just catching up, they're innovating in ways that will shape the future of electric mobility.
          </p>

          {/* CTA */}
          <div className="bg-[#0d1220] p-8 rounded-sm border border-[rgba(74,144,217,0.3)] text-center mt-12">
            <p className="text-[#e8edf5] text-lg mb-4">Ready to explore premium EVs?</p>
            <p className="text-[#6b7a94] text-sm mb-6">Browse our curated directory of luxury electric vehicles and find verified specialists to care for your car.</p>
            <a href="/" className="inline-block px-10 py-4 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300">
              Explore Directory
            </a>
          </div>

        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="flex justify-between items-center pt-8 max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna Auto. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact", "About"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
