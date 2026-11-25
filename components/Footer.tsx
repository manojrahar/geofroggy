"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Check, LoaderCircle } from "lucide-react";

// Social Icons matching the live site
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerLinks = {
  explore: [
    { href: "/explore", label: "Explore" },
    { href: "https://learningportal.geofroggy.com/", label: "Learn", external: true },
  ],
  community: [
    { href: "/about", label: "About" },
    { href: "/community-guidelines", label: "Community Guidelines" },
    { href: "/faqs", label: "Help / FAQs" },
    { href: "/contact", label: "Contact" },
  ],
  collaborate: [
    { href: "/become-ambassador", label: "Ambassadors" },
    { href: "/partner", label: "Volunteer or Partner" },
    { href: "/donate", label: "Donate" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Use" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com/geofroggy", icon: FacebookIcon, label: "Facebook" },
  { href: "https://linkedin.com/company/geofroggy", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://instagram.com/geofroggy", icon: InstagramIcon, label: "Instagram" },
];

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");

  if (pathname === "/signup" || pathname === "/login") {
    return null;
  }
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubscribe = async () => {
    if (!email) return;
    setStatus("loading");
    setErrorMsg(null);
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setErrorMsg("Please try again.");
    }
  };

  return (
    <footer className="relative text-white overflow-hidden bg-primary">
      {/* Background artwork */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <Image
          src="/website-images/footer_background_art.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #175883 0%, rgba(23, 88, 131, 0) 100%)",
        }}
      />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-10">
          
          {/* Top row: Big Logo + Newsletter Postcard box */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-10 lg:mb-14">
            <div className="shrink-0">
              <Image
                src="/website-images/footer-logo.png"
                alt="GeoFroggy — Got Culture"
                width={220}
                height={160}
                className="w-auto h-[140px] lg:h-[160px]"
                priority={false}
              />
            </div>
            <div className="relative w-full max-w-[504px] aspect-[504/138]">
              <Image
                src="/website-images/footer_newsletter_outline.png"
                alt=""
                fill
                className="object-contain"
              />
              <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 py-6">
                <h4 className="font-display font-semibold text-[20px] sm:text-[22px] text-white mb-2">
                  Newsletter:
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter Email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    className="flex-1 h-10 px-4 rounded-[6px] bg-white/95 text-[#383838] placeholder:text-[#9E9E9E] font-prose text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={status === "loading" || status === "success" || !email}
                    className="bg-secondary hover:bg-secondary-dark text-white font-display font-medium text-[14px] px-5 h-10 rounded-[6px] transition-colors disabled:opacity-50 shrink-0"
                  >
                    {status === "loading" ? (
                      <LoaderCircle className="w-4 h-4 animate-spin" />
                    ) : status === "success" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      "Notify"
                    )}
                  </button>
                </div>
                {errorMsg && (
                  <p className="mt-2 text-[12px] text-red-100 bg-red-900/40 rounded px-2 py-1">
                    {errorMsg}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 5 Columns Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr_1fr] gap-8 lg:gap-10">
            {/* Col 1: Mission and Socials */}
            <div className="lg:col-span-1">
              <p className="font-prose italic font-bold text-[16px] text-white leading-[24px] mb-3">
                Explore global stories, join meaningful conversations, and be part of a worldwide community where every place has a voice.
              </p>
              <p className="font-prose text-[16px] text-white leading-[24px] mb-5">
                Let geography become your guide to understanding people, traditions, and perspectives.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-secondary-dark transition-colors"
                      aria-label={s.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Explore */}
            <div>
              <h4 className="font-display font-semibold text-[17px] text-white mb-4">
                Explore Geofroggy
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.explore.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="font-prose text-[14px] text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Community */}
            <div>
              <h4 className="font-display font-semibold text-[17px] text-white mb-4">
                Community
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.community.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-prose text-[14px] text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Collaborate */}
            <div>
              <h4 className="font-display font-semibold text-[17px] text-white mb-4">
                Collaborate
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.collaborate.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-prose text-[14px] text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Legal */}
            <div>
              <h4 className="font-display font-semibold text-[17px] text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-prose text-[14px] text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/60 font-prose">
            <p>© {new Date().getFullYear()} Geofroggy. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span>Powered by KaiMa Foundry</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
