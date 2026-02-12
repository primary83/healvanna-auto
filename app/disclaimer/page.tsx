"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function DisclaimerPage() {
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
          <span className="text-[#4a90d9]">Disclaimer</span>
        </h1>
        <p className="text-[#6b7a94] text-sm mb-12">
          Last updated: February 9, 2026
        </p>

        <div className="space-y-10 text-[#8a9bb5] leading-relaxed">

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">General Disclaimer</h2>
            <p>
              The information provided on Healvanna Auto (healvanna.com) is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">No Professional Advice</h2>
            <p>
              The site cannot and does not contain professional automotive repair or maintenance advice. The automotive information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional automotive advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Directory Listings &amp; Service Providers</h2>
            <p className="mb-4">
              Healvanna Auto provides a directory of automotive service providers for informational purposes. Please be aware of the following:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Listings do not constitute an endorsement, recommendation, or guarantee of any service provider</li>
              <li>We do not verify the credentials, licensing, insurance, or quality of work of any listed business</li>
              <li>Prices, availability, and services offered may change without notice</li>
              <li>Users are solely responsible for evaluating and selecting service providers</li>
              <li>We are not responsible for any transactions, disputes, or issues between users and service providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Vehicle Information</h2>
            <p>
              Vehicle specifications, pricing, features, and images displayed on Healvanna Auto are provided for informational purposes only. This information may not reflect the most current data and should be verified directly with the vehicle manufacturer or authorized dealer. We are not responsible for any errors or omissions in vehicle information.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">External Links</h2>
            <p>
              The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Affiliate &amp; Advertising Disclosure</h2>
            <p>
              Healvanna Auto may contain affiliate links or sponsored content. This means we may earn a commission if you click on a link and make a purchase. This does not affect our editorial integrity or the information presented on the site. Any sponsored content will be clearly identified.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Errors and Omissions</h2>
            <p>
              While we have made every attempt to ensure that the information contained on this site is accurate, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on this site is provided "as is," with no guarantee of completeness, accuracy, or timeliness, and without warranty of any kind, express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Healvanna Auto or its owners, operators, or affiliates be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use of, or inability to access or use, the site, whether based on warranty, contract, tort (including negligence), or any other legal theory.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Changes to This Disclaimer</h2>
            <p>
              We reserve the right to make changes to this disclaimer at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this disclaimer. Any changes or modifications will be effective immediately upon posting the updated disclaimer on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-[#e8edf5] font-medium mb-4">Contact</h2>
            <p>
              If you have questions about this disclaimer, please contact us at:
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
