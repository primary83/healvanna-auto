export default function ContactPage() {
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
              className="text-[13px] tracking-wider text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-12 py-24 max-w-[800px] mx-auto">
        <p className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase mb-6">
          Get In Touch
        </p>
        <h1 className="text-5xl font-light mb-8 leading-tight">
          Contact <span className="text-[#4a90d9]">Us</span>
        </h1>
        <p className="text-[#8a9bb5] text-lg leading-relaxed">
          Have questions about our directory? Want to list your business? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Options */}
      <section className="px-12 py-16 bg-[#0d1220]">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* General Inquiries */}
          <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
            <div className="text-[#4a90d9] text-2xl mb-4">📧</div>
            <h3 className="text-lg font-medium mb-3">General Inquiries</h3>
            <p className="text-[#6b7a94] text-sm leading-relaxed mb-4">
              Questions about our directory, partnerships, or just want to say hello?
            </p>
            <a 
              href="mailto:hello@healvanna.com"
              className="text-[#4a90d9] text-sm hover:text-[#6ba8eb] transition-colors"
            >
              hello@healvanna.com
            </a>
          </div>

          {/* Business Listings */}
          <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
            <div className="text-[#4a90d9] text-2xl mb-4">🏢</div>
            <h3 className="text-lg font-medium mb-3">List Your Business</h3>
            <p className="text-[#6b7a94] text-sm leading-relaxed mb-4">
              Are you a premium auto service provider? Join our curated directory.
            </p>
            <a 
              href="mailto:partners@healvanna.com"
              className="text-[#4a90d9] text-sm hover:text-[#6ba8eb] transition-colors"
            >
              partners@healvanna.com
            </a>
          </div>

          {/* Press */}
          <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
            <div className="text-[#4a90d9] text-2xl mb-4">📰</div>
            <h3 className="text-lg font-medium mb-3">Press & Media</h3>
            <p className="text-[#6b7a94] text-sm leading-relaxed mb-4">
              Media inquiries, interviews, and press kit requests.
            </p>
            <a 
              href="mailto:press@healvanna.com"
              className="text-[#4a90d9] text-sm hover:text-[#6ba8eb] transition-colors"
            >
              press@healvanna.com
            </a>
          </div>

          {/* Support */}
          <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
            <div className="text-[#4a90d9] text-2xl mb-4">💬</div>
            <h3 className="text-lg font-medium mb-3">Support</h3>
            <p className="text-[#6b7a94] text-sm leading-relaxed mb-4">
              Technical issues or feedback about the website.
            </p>
            <a 
              href="mailto:support@healvanna.com"
              className="text-[#4a90d9] text-sm hover:text-[#6ba8eb] transition-colors"
            >
              support@healvanna.com
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="px-12 py-24 max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl font-light mb-8">Follow Us</h2>
        <div className="flex justify-center gap-8">
          {[
            { name: "Instagram", handle: "@healvanna", url: "https://instagram.com/healvanna" },
            { name: "Twitter/X", handle: "@healvanna", url: "https://x.com/healvanna" },
            { name: "LinkedIn", handle: "Healvanna Auto", url: "https://linkedin.com/company/healvanna" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group"
            >
              <p className="text-[#e8edf5] text-sm mb-1 group-hover:text-[#4a90d9] transition-colors">
                {social.name}
              </p>
              <p className="text-[#6b7a94] text-xs">{social.handle}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Response Time */}
      <section className="px-12 py-16 bg-[#0d1220]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase mb-4">
            Response Time
          </p>
          <p className="text-[#8a9bb5] leading-relaxed">
            We typically respond within 24-48 hours during business days. For urgent matters regarding listed businesses, please include "URGENT" in your subject line.
          </p>
        </div>
      </section>

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
