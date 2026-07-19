"use client";

import Link from "next/link";

const stats = [
  { value: "200+", label: "Vehicles Covered", description: "Comprehensive guides for EVs and luxury vehicles" },
  { value: "150+", label: "Verified Providers", description: "Vetted detailers, body shops, and specialists" },
  { value: "12", label: "Major Markets", description: "Coverage across top US metropolitan areas" },
  { value: "50K+", label: "Monthly Readers", description: "Trusted by automotive enthusiasts nationwide" },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Rigorous Vetting",
    description: "Every provider in our directory undergoes thorough verification. We check certifications, review customer feedback, and validate business credentials.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "EV Expertise",
    description: "As EVs transform the automotive landscape, we focus on providers who understand the unique needs of electric vehicles — from specialized detailing to certified collision repair.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Quality First",
    description: "We don't list everyone — we list the best. Our curated approach means you'll find only top-tier vehicles and exceptional service providers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community Driven",
    description: "Real reviews from real owners. Our community of automotive enthusiasts helps maintain the integrity of every listing and recommendation.",
  },
];

const team = [
  {
    name: "Marcus Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Former Tesla service manager with 15 years in the automotive industry. Founded Healvanna to solve the problem of finding quality care for premium vehicles.",
  },
  {
    name: "Sarah Williams",
    role: "Head of Provider Relations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "10+ years experience in automotive B2B partnerships. Leads our provider vetting process and maintains relationships with 150+ verified specialists.",
  },
  {
    name: "David Park",
    role: "Content Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Automotive journalist and EV enthusiast. Previously wrote for Motor Trend and Car & Driver. Ensures all our guides are accurate and comprehensive.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Product leader with experience at Carvana and Autotrader. Focused on building the best discovery experience for automotive enthusiasts.",
  },
];

const partners = [
  "Tesla Certified",
  "Rivian Trained",
  "Ceramic Pro Elite",
  "XPEL Platinum",
  "I-CAR Gold",
  "IDA Member",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex gap-10">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars" },
            { name: "CARE", href: "/care" },
            { name: "CRAFT", href: "/craft" },
            { name: "INSIGHTS", href: "/insights" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">About Healvanna</div>
          <h1 className="text-[clamp(36px,6vw,64px)] font-extralight tracking-tight mb-6 leading-tight">
            Your Car&apos;s <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Wellness Guide</span>
          </h1>
          <p className="text-lg text-[#6b7a94] leading-relaxed max-w-[700px] mx-auto">
            Healvanna connects automotive enthusiasts with premium vehicles and verified service providers. We believe every vehicle deserves exceptional care — and every owner deserves peace of mind.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-extralight text-[#4a90d9] mb-2">{stat.value}</div>
                <div className="text-sm font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-[#6b7a94]">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Our Story</div>
              <h2 className="text-3xl font-light mb-6">Born from Frustration,<br />Built for Excellence</h2>
              <div className="space-y-4 text-[#6b7a94] leading-relaxed">
                <p>
                  In 2019, our founder Marcus Chen bought his first Tesla. Finding a detailer who understood EV paint systems was nearly impossible. Finding a certified body shop after a minor fender bender? Even harder.
                </p>
                <p>
                  That frustration sparked an idea: what if there was a trusted resource that connected premium vehicle owners with verified specialists who truly understood their cars?
                </p>
                <p>
                  Today, Healvanna is that resource. We&apos;ve built a curated directory of the best detailers, body shops, and automotive specialists in the country — each one vetted for quality, expertise, and customer satisfaction.
                </p>
                <p>
                  Whether you drive a Tesla, a classic Porsche, or a new Rivian, Healvanna helps you find the care your vehicle deserves.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80"
                  alt="Premium vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0a0f1a] border border-[rgba(74,144,217,0.3)] rounded-lg p-6">
                <div className="text-3xl font-extralight text-[#4a90d9] mb-1">2019</div>
                <div className="text-sm text-[#6b7a94]">Founded in Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-20 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Our Values</div>
            <h2 className="text-3xl font-light">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.1)] rounded-lg p-8">
                <div className="text-[#4a90d9] mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-[#6b7a94] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Our Team</div>
            <h2 className="text-3xl font-light mb-4">The People Behind Healvanna</h2>
            <p className="text-[#6b7a94] max-w-[600px] mx-auto">
              A team of automotive enthusiasts, industry veterans, and product experts dedicated to transforming how you care for your vehicle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[rgba(74,144,217,0.3)]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <div className="text-[#4a90d9] text-sm mb-3">{member.role}</div>
                <p className="text-[13px] text-[#6b7a94] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 md:px-12 py-16 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Trusted Partners</div>
            <h2 className="text-2xl font-light">We Work With Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#6b7a94]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Ready to Experience Premium Auto Care?</h2>
          <p className="text-[#6b7a94] mb-8">
            Join thousands of automotive enthusiasts who trust Healvanna for their vehicle care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cars"
              className="px-8 py-4 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors"
            >
              Explore Vehicles
            </Link>
            <Link
              href="/care"
              className="px-8 py-4 border border-[rgba(74,144,217,0.3)] text-[#e8edf5] font-medium rounded hover:border-[#4a90d9] hover:text-[#4a90d9] transition-colors"
            >
              Find a Provider
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6 text-center">
              <div className="text-[#4a90d9] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <a href="mailto:hello@healvanna.com" className="text-[#4a90d9] hover:underline">hello@healvanna.com</a>
            </div>
            <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6 text-center">
              <div className="text-[#4a90d9] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Headquarters</h3>
              <p className="text-[#6b7a94]">Austin, Texas<br />United States</p>
            </div>
            <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6 text-center">
              <div className="text-[#4a90d9] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <a href="https://twitter.com/healvanna" target="_blank" rel="noopener noreferrer" className="text-[#6b7a94] hover:text-[#4a90d9]">Twitter</a>
                <a href="https://instagram.com/healvanna" target="_blank" rel="noopener noreferrer" className="text-[#6b7a94] hover:text-[#4a90d9]">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: ["Electric Vehicles", "Luxury Sedans", "SUVs", "All Brands"] },
            { title: "Care", links: ["Detailing", "Ceramic Coating", "PPF", "Interior"] },
            { title: "Craft", links: ["EV Body Shops", "Luxury Collision", "Restoration"] },
            { title: "Insights", links: ["Comparisons", "Buying Guides", "Maintenance"] },
            { title: "Company", links: ["About", "For Business", "Contact"] },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto gap-4">
          <div className="text-[11px] text-[#3d4a61]">© 2024 Healvanna Auto. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <span key={link} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
