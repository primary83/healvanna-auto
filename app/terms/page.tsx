"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <section className="px-12 pt-32 pb-24 max-w-[800px] mx-auto">
        <p className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase mb-6">
          Legal
        </p>
        <h1 className="text-5xl font-light mb-8 leading-tight">
          Terms of <span className="text-[#4a90d9]">Service</span>
        </h1>
        <p className="text-[#6b7a94] text-sm mb-12">
          Last updated: January 12, 2025
        </p>

        <div className="space-y-10 text-[#8a9bb5] leading-relaxed">
          
          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using Healvanna Auto (healvanna.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Description of Service</h2>
            <p>
              Healvanna Auto is a curated directory connecting automotive enthusiasts with premium vehicles and verified service providers including detailers, body shops, ceramic coating specialists, and other automotive care professionals.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Use of the Website</h2>
            <p className="mb-4">You agree to use our website only for lawful purposes. You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use automated systems to scrape or extract data without permission</li>
              <li>Transmit any malicious code or interfere with the website's functionality</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Post false, misleading, or defamatory content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Directory Listings</h2>
            <p className="mb-4">
              Our directory contains information about vehicles and service providers. Please note:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>We strive for accuracy but cannot guarantee all information is current or complete</li>
              <li>Listings are provided for informational purposes only</li>
              <li>We do not endorse any specific business or guarantee their services</li>
              <li>Users should conduct their own due diligence before engaging any service provider</li>
              <li>Vehicle specifications may vary and should be verified with manufacturers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Intellectual Property</h2>
            <p>
              All content on Healvanna Auto, including text, graphics, logos, images, and software, is the property of Healvanna Auto or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these external sites. Accessing third-party links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Disclaimer of Warranties</h2>
            <p>
              Healvanna Auto is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Healvanna Auto shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or reliance on any information provided, including interactions with listed service providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Healvanna Auto and its affiliates from any claims, damages, or expenses arising from your use of the website or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              <a href="mailto:legal@healvanna.com" className="text-[#4a90d9] hover:text-[#6ba8eb]">
                legal@healvanna.com
              </a>
            </p>
          </section>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
