import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "For Business - Partner With Healvanna Auto",
  description: "Partner with Healvanna Auto to reach discerning automotive enthusiasts. Listing opportunities for detailers, body shops, dealerships, and automotive service providers.",
  keywords: ["automotive business listing", "car detailing business", "body shop listing", "dealership partner", "automotive marketing", "premium car services"],
};

const partnershipTiers = [
  {
    name: "Basic Listing",
    price: "Free",
    description: "Get discovered by premium car owners in your area",
    features: [
      "Business profile page",
      "Contact information display",
      "Service category listing",
      "Customer reviews",
      "Basic analytics"
    ],
    cta: "Create Free Listing",
    highlighted: false
  },
  {
    name: "Verified Partner",
    price: "$99/mo",
    description: "Stand out with verified status and premium placement",
    features: [
      "Everything in Basic",
      "✓ Verified badge",
      "Priority search placement",
      "Photo gallery (up to 20)",
      "Detailed service menu",
      "Response time tracking",
      "Monthly performance reports"
    ],
    cta: "Become Verified",
    highlighted: true
  },
  {
    name: "Premium Partner",
    price: "$249/mo",
    description: "Maximum visibility and lead generation tools",
    features: [
      "Everything in Verified",
      "Featured placement",
      "Homepage showcase rotation",
      "Lead notifications",
      "Booking integration",
      "Dedicated account manager",
      "Quarterly strategy review",
      "Social media features"
    ],
    cta: "Go Premium",
    highlighted: false
  }
];

const businessTypes = [
  {
    title: "Detailing Studios",
    description: "Auto detailing, paint correction, ceramic coating, and interior specialists",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Body Shops",
    description: "Collision repair, paint shops, and certified repair facilities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Restoration Shops",
    description: "Classic car restoration, custom builds, and specialty work",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Dealerships",
    description: "Luxury and electric vehicle dealerships",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "PPF Installers",
    description: "Paint protection film and window tint specialists",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Mobile Services",
    description: "On-site detailing, maintenance, and repair services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const stats = [
  { value: "50K+", label: "Monthly Visitors" },
  { value: "85%", label: "Premium Vehicle Owners" },
  { value: "4.8", label: "Average Partner Rating" },
  { value: "200+", label: "Verified Partners" }
];

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#4a90d9] tracking-[0.3em] text-sm mb-4">PARTNER WITH US</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-2">
            For <span className="italic text-[#4a90d9]">Business</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Connect with discerning automotive enthusiasts actively seeking premium services. 
            Join the Healvanna network and grow your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing"
              className="inline-block bg-[#4a90d9] text-white px-8 py-3 rounded-lg hover:bg-[#3a7bc8] transition-colors"
            >
              View Pricing
            </a>
            <Link 
              href="/contact"
              className="inline-block bg-white/5 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-extralight text-[#4a90d9] mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Partner Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extralight text-white text-center mb-4">
            Who Can <span className="italic text-[#4a90d9]">Partner</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We work with premium automotive service providers who share our commitment to excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((type) => (
              <div 
                key={type.title}
                className="bg-[#0d1420] rounded-xl p-6 border border-white/5 hover:border-[#4a90d9]/30 transition-all"
              >
                <div className="w-14 h-14 bg-[#4a90d9]/10 rounded-lg flex items-center justify-center text-[#4a90d9] mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="px-6 py-20 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extralight text-white text-center mb-12">
            Why Partner With <span className="italic text-[#4a90d9]">Healvanna</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a90d9]/10 rounded-full flex items-center justify-center text-[#4a90d9]">
                  1
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">Targeted Audience</h3>
                  <p className="text-gray-400 text-sm">Our visitors are premium vehicle owners actively seeking quality services — not tire-kickers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a90d9]/10 rounded-full flex items-center justify-center text-[#4a90d9]">
                  2
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">Trust & Credibility</h3>
                  <p className="text-gray-400 text-sm">Our verification process ensures only quality providers are listed, building trust with customers.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a90d9]/10 rounded-full flex items-center justify-center text-[#4a90d9]">
                  3
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">SEO Benefits</h3>
                  <p className="text-gray-400 text-sm">Your listing on our high-authority domain helps you rank better in local search results.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a90d9]/10 rounded-full flex items-center justify-center text-[#4a90d9]">
                  4
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">Lead Generation</h3>
                  <p className="text-gray-400 text-sm">Premium partners receive direct lead notifications and booking integration options.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a90d9]/10 rounded-full flex items-center justify-center text-[#4a90d9]">
                  5
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">Analytics & Insights</h3>
                  <p className="text-gray-400 text-sm">Track profile views, click-throughs, and customer engagement with detailed reports.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a90d9]/10 rounded-full flex items-center justify-center text-[#4a90d9]">
                  6
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">Community Exposure</h3>
                  <p className="text-gray-400 text-sm">Get featured in our newsletter, social media, and community content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extralight text-white text-center mb-4">
            Partnership <span className="italic text-[#4a90d9]">Tiers</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Choose the plan that fits your business goals. Start free and upgrade as you grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`rounded-xl p-6 md:p-8 border ${
                  tier.highlighted 
                    ? 'bg-[#4a90d9]/10 border-[#4a90d9]' 
                    : 'bg-[#0d1420] border-white/5'
                }`}
              >
                {tier.highlighted && (
                  <p className="text-[#4a90d9] text-xs tracking-wider mb-4">MOST POPULAR</p>
                )}
                <h3 className="text-2xl text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-light text-white mb-2">{tier.price}</p>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-[#4a90d9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-lg transition-colors text-center ${
                    tier.highlighted
                      ? 'bg-[#4a90d9] text-white hover:bg-[#3a7bc8]'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-20 bg-[#0d1420]">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-[#4a90d9]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl font-extralight text-white mb-6">
            &ldquo;Since joining Healvanna as a Verified Partner, we&apos;ve seen a 40% increase in premium vehicle inquiries. 
            The quality of leads is exceptional — these are serious owners who value quality work.&rdquo;
          </blockquote>
          <div>
            <p className="text-white">Michael Torres</p>
            <p className="text-gray-400 text-sm">Owner, Precision Auto Spa — Austin, TX</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extralight text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-400 mb-8">
            Join hundreds of premium automotive service providers already benefiting from the Healvanna network. 
            Get started with a free listing today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#4a90d9] text-white px-8 py-3 rounded-lg hover:bg-[#3a7bc8] transition-colors">
              Create Free Listing
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-white/5 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-[#0d1420]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extralight text-white text-center mb-12">
            Frequently Asked <span className="italic text-[#4a90d9]">Questions</span>
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg text-white mb-2">How does the verification process work?</h3>
              <p className="text-gray-400 text-sm">
                We verify your business license, insurance, and review customer feedback. The process typically takes 3-5 business days. 
                Once verified, you&apos;ll receive the trusted badge on your profile.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg text-white mb-2">Can I cancel my subscription anytime?</h3>
              <p className="text-gray-400 text-sm">
                Yes, you can cancel or downgrade your subscription at any time. There are no long-term contracts. 
                Your listing will revert to the free tier if you cancel a paid plan.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg text-white mb-2">How do I receive leads?</h3>
              <p className="text-gray-400 text-sm">
                Premium partners receive lead notifications via email and dashboard. You can also integrate with your 
                existing booking system through our API or use our built-in booking feature.
              </p>
            </div>
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg text-white mb-2">What markets do you cover?</h3>
              <p className="text-gray-400 text-sm">
                We currently focus on major US markets including Austin, Miami, Los Angeles, New York, Houston, and Phoenix. 
                We&apos;re expanding to additional markets and internationally soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
