import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines - Geo Froggy",
  description: "Community Guidelines and standards for Geo Froggy.",
};

export default function CommunityGuidelinesPage() {
  return (
<div className="overflow-hidden">
      <section className="relative">
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[320px] lg:h-[360px]">
          <Image src="/website-images/contact-hero-bg.png" alt="" fill className="object-cover" priority />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-display text-[36px] font-semibold leading-tight text-[#383838] sm:text-[44px] lg:text-[48px]">Community Guidelines</h1>
            <nav aria-label="Breadcrumb" className="mt-3 font-prose text-[14px] text-[#5E5E5E] sm:text-[15px]">
              <Link href="/" className="transition-colors hover:text-primary">Home</Link>
              <span className="mx-2">→</span>
              <span className="text-[#383838]">Community Guidelines</span>
            </nav>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <Image src="/website-images/abstractart2.png" alt="" width={184} height={186} className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg]" />
        <Image src="/website-images/abstractart1.png" alt="" width={320} height={320} className="pointer-events-none absolute right-0 top-[38%] hidden lg:block" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-[18px] font-semibold text-[#383838]">
Welcome to Geofroggy, a platform by
 
            <a href="https://geoffmedia.com" target="_blank" rel="noopener noreferrer" className="text-[#D63848] underline underline-offset-2 hover:text-[#B02A39]">GeoffMedia!</a>
          </p>
          <p className="mt-4 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
We're dedicated to building a respectful, inclusive, and engaging community where global stories can thrive. Please review and follow these guidelines to help us create a positive space for everyone.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">1. Respect One Another</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Treat all members with dignity, regardless of background, beliefs, or experiences. Hate speech, harassment, bullying, personal attacks, or threats will not be tolerated.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">2. Stay On Topic</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Keep conversations relevant to the discussion or platform area. Avoid spam, off-topic content, or unsolicited self-promotion.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">3. Share Authentically</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">Contribute original, honest content.</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                <li>Share your own experiences and perspectives</li>
                <li>Avoid plagiarism</li>
                <li>Verify facts when sharing information</li>
                <li>Aim for thoughtful, meaningful contributions</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">4. Protect Privacy</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Never share anyone's personal information (including names, addresses, or contact details) without their explicit consent.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">5. Be Civil</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Disagree respectfully.
We welcome diverse opinions—but inflammatory, aggressive, or intentionally divisive comments are not permitted.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">6. Follow the Law</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Illegal content, copyright violations, or any posts that infringe on others' rights are strictly prohibited.
Always provide attribution for shared materials where required.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">7. Report Responsibly</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
If you see content that violates these guidelines, please report it to our moderation team so we can take action.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">8. Use Clear Language</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Please post in the platform's primary language to ensure accessibility and understanding for all users.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">9. Moderation</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Our moderation team is here to uphold community standards. Actions may include warnings, temporary restrictions, or permanent removal based on the nature of the violation.
Moderation decisions are final and made in the interest of maintaining a safe and welcoming environment.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[18px] font-semibold text-[#383838]">10. Consequences</h2>
              <p className="mt-3 whitespace-pre-line font-prose text-[16px] leading-[26px] text-[#4B4B4B]">Violating these guidelines may result in:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
                <li>A warning</li>
                <li>Temporary suspension</li>
                <li>Permanent removal from the community</li>
              </ul>
              <p className="mt-2 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">Severity and frequency will determine the response.</p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="font-display text-[18px] font-semibold text-[#383838]">Rights &amp; Discretion</h2>
            <p className="mt-3 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
              <span className="font-semibold">Geofroggy</span>
 reserves the right to remove any content or restrict any user access at our sole discretion, without prior notice, if we believe it is necessary to protect the safety, integrity, or mission of the community.
            </p>
            <p className="mt-2 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
This includes—but is not limited to—violations of these guidelines, disruptive behavior, or actions that compromise the experience for others.
            </p>
          </div>
          <div className="mt-10">
            <p className="font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
By participating in the
 
              <span className="font-semibold">Geofroggy community</span>
, you agree to uphold these standards and help us create a space where meaningful, respectful global conversation can flourish.
            </p>
            <p className="mt-2 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
Thank you for being part of
 
              <span className="font-semibold">Geofroggy</span>
, proudly brought to you by
 
              <a href="https://geoffmedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#D63848] underline underline-offset-2 hover:text-[#B02A39]">GeoffMedia.</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
