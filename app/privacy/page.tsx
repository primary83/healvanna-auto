export default function PrivacyPage() {
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

      {/* Content */}
      <section className="px-12 py-24 max-w-[800px] mx-auto">
        <p className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase mb-6">
          Legal
        </p>
        <h1 className="text-5xl font-light mb-8 leading-tight">
          Privacy <span className="text-[#4a90d9]">Policy</span>
        </h1>
        <p className="text-[#6b7a94] text-sm mb-12">
          Last updated: January 12, 2025
        </p>

        <div className="space-y-10 text-[#8a9bb5] leading-relaxed">
          
          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Introduction</h2>
            <p>
              Healvanna Auto ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website healvanna.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-[#e8edf5]">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.</li>
              <li><strong className="text-[#e8edf5]">Device Information:</strong> Browser type, operating system, and device identifiers.</li>
              <li><strong className="text-[#e8edf5]">Contact Information:</strong> If you contact us directly, we may receive your name, email address, and message content.</li>
              <li><strong className="text-[#e8edf5]">Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and maintain our website</li>
              <li>Improve user experience and website functionality</li>
              <li>Analyze usage patterns and trends</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send relevant updates (only if you opt in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Types of cookies we use:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-[#e8edf5]">Essential Cookies:</strong> Required for basic website functionality.</li>
              <li><strong className="text-[#e8edf5]">Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
              <li><strong className="text-[#e8edf5]">Preference Cookies:</strong> Remember your settings and preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services for analytics (such as Google Analytics) and hosting (Vercel). These services have their own privacy policies governing their use of your data. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="mt-4">
              <a href="mailto:privacy@healvanna.com" className="text-[#4a90d9] hover:text-[#6ba8eb]">
                privacy@healvanna.com
              </a>
            </p>
          </section>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="flex justify-between items-center pt-8 max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna Auto. All rights reserved.</div>
          <div className="flex gap-6">
            {["Terms", "Contact", "About"].map((link) => (
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
