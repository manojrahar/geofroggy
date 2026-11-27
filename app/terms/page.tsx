import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Geo Froggy",
  description: "Terms of Use and conditions for Geo Froggy.",
};

export default function TermsOfUsePage() {
  return (
<div className="overflow-hidden">
      <section className="relative">
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[320px] lg:h-[360px]">
          <Image src="/website-images/contact-hero-bg.png" alt="" fill className="object-cover" priority />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-display text-[36px] font-semibold leading-tight text-[#383838] sm:text-[44px] lg:text-[48px]">Terms Of Use</h1>
            <nav aria-label="Breadcrumb" className="mt-3 font-prose text-[14px] text-[#5E5E5E] sm:text-[15px]">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span className="mx-2">→</span>
              <span className="text-[#383838]">Terms of Use</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden green-patch-bg py-16 lg:py-20">
        <Image src="/website-images/abstractart2.png" alt="" width={184} height={186} className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg]" />
        <Image src="/website-images/abstractart1.png" alt="" width={320} height={320} className="pointer-events-none absolute right-0 top-[42%] hidden lg:block" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 card-hover-effect">
          <p className="font-display text-[18px] font-semibold text-[#383838]">
Welcome to Geofroggy –
 
            <span className="text-secondary">Our Window, Your World.</span>
          </p>
          <p className="mt-4 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Please read these Terms of Use carefully before using our site. By accessing or using 
            <span className="font-semibold">Geofroggy</span>
, you agree to be bound by these terms. If you do not agree, please do not use the site.
          </p>
          <div className="mt-10 space-y-10">
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">1. Intellectual Property</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Ownership</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
All content on this site—including text, graphics, logos, images, videos, and software—is the property of Geofroggy (a platform of GeoffMedia) or its content suppliers, and is protected by international copyright and intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Usage</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
You may not reproduce, distribute, modify, or use any content from the site without prior written permission.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">User-Generated Content</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
By posting or submitting any content (including but not limited to images, videos, blog posts, timelines, comments, or articles) on
 
                    <span className="font-semibold">Geofroggy</span>
, you retain ownership of your content. However, you grant
 
                    <span className="font-semibold">Geofroggy and</span>
 
                    <a href="https://geoffmedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#D63848] underline underline-offset-2 hover:text-[#B02A39]">GeoffMedia</a>
 
                    <span className="font-semibold">a perpetual, non-exclusive, royalty-free, worldwide license to use</span>
, reproduce, adapt, publish, translate, display, and distribute such content in any media, including promotional materials, publications, social media, or future platform features. This license allows us to showcase, promote, or preserve your contributions as part of the Geofroggy experience. You represent that you have the necessary rights and permissions to grant this license.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">2. User Conduct</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Prohibited Uses</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
You agree not to use Geofroggy for any unlawful, harmful, or abusive activities. This includes (but is not limited to):
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                    <li>
Posting content that is offensive, obscene, defamatory, threatening, or discriminatory
                    </li>
                    <li>Infringing on the intellectual property or privacy rights of others</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Site Integrity</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
You also agree not to interfere with the security or performance of the site. This includes attempting to hack, disable, or overload the platform, or introducing viruses, malware, or other malicious code.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">3. Liability Disclaimer</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">“As Is” Basis</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Geofroggy is provided on an “as is” and “as available” basis. We make no warranties—express or implied—regarding the reliability, availability, or accuracy of the content or services offered.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Limitations</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We are not liable for any damages resulting from the use or inability to use the site, including but not limited to errors, omissions, downtime, or technical issues.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Third-Party Content</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Geofroggy may include links or references to third-party websites or content. We do not endorse or take responsibility for that content and disclaim all liability related to it.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">4. Changes to These Terms</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Updates</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We may revise these Terms of Use at any time. Material changes will be posted on this page, and we may also notify users by email or within the platform when appropriate.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Ongoing Review</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
By continuing to use the site after changes are made, you accept the updated terms. We encourage users to review this page periodically.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">5. Governing Law &amp; Dispute Resolution</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Jurisdiction</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
These Terms are governed by and construed in accordance with the laws of [Insert Your Country or State].
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Disputes</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Any legal claims or disputes arising from your use of Geofroggy will be resolved exclusively in the courts of [Insert Your Country or State].
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">6. Termination</h2>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Termination Rights</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Geofroggy reserves the right to suspend or terminate your access to the platform at our sole discretion, without notice, for any reason—including violations of these Terms.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-[#383838]">Effect of Termination</h3>
                  <p className="mt-1 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Upon termination, your right to use the site ends immediately. Any sections of this agreement that are intended to survive termination (such as intellectual property provisions) will remain in effect
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-12 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
By using 
            <span className="font-semibold">Geofroggy</span>
, you acknowledge that you have read, understood, and
 
            <a href="#" className="font-semibold text-primary underline underline-offset-2 hover:text-[#0f3d5c]">agree to these Terms of Use.</a>
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}
