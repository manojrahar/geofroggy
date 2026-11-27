import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Geo Froggy",
  description: "Privacy Policy and data protection terms for Geo Froggy.",
};

export default function PrivacyPolicyPage() {
  return (
<div className="overflow-hidden">
      <section className="relative">
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[320px] lg:h-[360px]">
          <Image src="/website-images/contact-hero-bg.png" alt="" fill className="object-cover" priority />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-display text-[36px] font-semibold leading-tight text-[#383838] sm:text-[44px] lg:text-[48px]">Privacy Policy</h1>
            <nav aria-label="Breadcrumb" className="mt-3 font-prose text-[14px] text-[#5E5E5E] sm:text-[15px]">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span className="mx-2">→</span>
              <span className="text-[#383838]">Privacy Policy</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden green-patch-bg py-16 lg:py-20">
        <Image src="/website-images/abstractart2.png" alt="" width={184} height={186} className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg]" />
        <Image src="/website-images/abstractart1.png" alt="" width={320} height={320} className="pointer-events-none absolute right-0 top-[28%] hidden lg:block" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 card-hover-effect">
          <p className="font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
            <span className="font-semibold text-[#383838]">Last Updated:</span>
 
07/06/2025
          </p>
          <p className="mt-4 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
            <span className="font-semibold text-[#383838]">Geofroggy</span>
, operated by
 
            <a href="https://geoffmedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#D63848] underline underline-offset-2 hover:text-[#B02A39]">GeoffMedia</a>
, is committed to protecting your privacy and ensuring your personal data is handled with care, transparency, and responsibility. This Privacy Policy explains what information we collect, how we use it, and the steps we take to safeguard it.
          </p>
          <div className="mt-10 space-y-10">
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">1. Information We Collect and How We Use It</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Information You Provide Directly</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">When you create an account or interact with the platform, we may collect:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                    <li>Name</li>
                    <li>Age or birthdate</li>
                    <li>Email address</li>
                    <li>Location (optional)</li>
                    <li>Profile picture (optional)</li>
                    <li>Social media links (optional)</li>
                    <li>Any other details you choose to provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Information Collected Automatically</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
As you use
 
                    <span className="font-semibold text-[#383838]">Geofroggy</span>
, we may collect:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                    <li>IP address, browser type, device data, and geolocation</li>
                    <li>Pages visited, actions taken, and content interactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">How We Use This Information</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">We use the information we collect to:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                    <li>Provide and improve platform features and services</li>
                    <li>Personalize your experience, including customizing content based on age group</li>
                    <li>
Communicate with you (e.g., newsletters, updates, and optional promotional content)
                    </li>
                    <li>Ensure platform security and prevent misuse</li>
                    <li>Conduct analytics, research, and service enhancements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">2. Cookies and Tracking Technologies</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                <span className="font-semibold text-[#383838]">Geofroggy</span>
 
uses cookies and similar technologies to analyze traffic, improve functionality, and personalize content. You can manage your cookie preferences through your browser settings.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">3. Legal Grounds for Processing Data</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Where applicable (
                <span className="font-semibold text-[#383838]">e.g., EU, California</span>
), we process data based on the following legal grounds:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                <li>Legitimate Interest – Improving services, user safety, and analytics</li>
                <li>
Consent – For sending promotional content or personalized experiences (with opt-out available)
                </li>
                <li>Contractual Necessity – To provide services tied to your account or usage</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">4. Sharing of Information</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We do not sell or share personal data with third parties for marketing purposes without your consent. We may share data only:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                <li>
With trusted service providers who support our operations under confidentiality agreements
                </li>
                <li>When required by law, regulation, or legal process</li>
              </ul>
              <p className="mt-2 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">To enforce our policies or protect our users, team, or platform integrity</p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">5. Third-Party Links</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Geofroggy may link to third-party websites or services. These external sites have their own privacy practices, and we are not responsible for their content or handling of personal information. We recommend reviewing their policies before engaging.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">6. Data Security</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We implement industry-standard measures to secure your personal information. Access is limited to authorized personnel under strict confidentiality obligations. However, no system is completely secure, and we cannot guarantee absolute protection.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">7. Data Retention</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or to meet legal obligations. When no longer needed, your data will be securely deleted or anonymized
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">8. Children's Privacy</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Geofroggy is not intended for use by children
 
                <span className="font-semibold text-[#383838]">under 13</span>
. We do not knowingly collect personal data from anyone under this age. If we become aware that a user under 13 has provided personal information, we will delete it promptly.
              </p>
              <p className="mt-2 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We collect age data to verify eligibility and customize age-appropriate content.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">9. Your Rights</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">You have the right to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections or updates to your data</li>
                <li>Request deletion of your account or personal data</li>
                <li>Withdraw consent for communications (where applicable)</li>
              </ul>
              <p className="mt-2 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">To exercise these rights, contact us using the information below.</p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">10. Changes to This Policy</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We may update this Privacy Policy periodically. Any material changes will be posted on this page, and you may receive additional notice (such as an email alert). Please check back regularly to stay informed
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">11. Contact Us</h2>
              <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
If you have questions about this Privacy Policy or how your data is handled, contact us at:
              </p>
              <p className="mt-2 flex items-center gap-2">
                <span aria-hidden="true">📧</span>
                <a href="mailto:privacy@geofroggy.com" className="font-display text-[16px] font-semibold text-secondary underline underline-offset-2 hover:text-[#5f8a1c]">privacy@geofroggy.com</a>
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
