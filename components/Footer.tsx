"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#175883] text-white relative overflow-hidden">
      {/* Background Skyline Silhouette Art */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-bottom bg-repeat-x"
        style={{
          backgroundImage: "url('/website-images/footer_background_art.png')",
          backgroundSize: "contain",
          backgroundPosition: "bottom center"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Logo, Description, Socials (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/website-images/footer-logo.png"
                alt="GeoFroggy Logo"
                width={190}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-body">
              Explore global stories, join meaningful conversations, and be part of a
              worldwide community where every place has a voice.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
              Let geography become your guide to understanding people, traditions, and perspectives.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com/geofroggy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#8AC63C] text-[#1F1F1F] flex items-center justify-center hover:bg-[#7ab52e] hover:scale-105 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://linkedin.com/company/geofroggy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#8AC63C] text-[#1F1F1F] flex items-center justify-center hover:bg-[#7ab52e] hover:scale-105 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/geofroggy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#8AC63C] text-[#1F1F1F] flex items-center justify-center hover:bg-[#7ab52e] hover:scale-105 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Geofroggy */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Explore Geofroggy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-body">
              <li>
                <Link href="/explore" className="hover:text-amber-200 transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="https://learningportal.geofroggy.com/" target="_blank" className="hover:text-amber-200 transition-colors">
                  Learn
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Community & Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-body">
              <li>
                <Link href="/about" className="hover:text-amber-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="hover:text-amber-200 transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-amber-200 transition-colors">
                  Help / FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-200 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Collaborate */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Collaborate
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-body">
              <li>
                <Link href="/become-ambassador" className="hover:text-amber-200 transition-colors">
                  Ambassadors
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-amber-200 transition-colors">
                  Volunteer or Partner
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-amber-200 transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Footer Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-body">
                <li>
                  <Link href="/terms" className="hover:text-amber-200 transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-amber-200 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compact Footer Newsletter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                Newsletter:
              </h4>
              <form onSubmit={handleSubmit} className="flex items-center max-w-xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email here"
                  required
                  className="w-full text-xs bg-white text-gray-800 px-3 py-1.5 rounded-l-md outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-[#8AC63C]"
                />
                <button
                  type="submit"
                  className="bg-[#8AC63C] hover:bg-[#7ab52e] text-[#1F1F1F] font-semibold text-xs px-3 py-1.5 rounded-r-md transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {submitted && (
                <p className="text-[11px] text-green-300 mt-1">Thank you for subscribing!</p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer Divider & Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 font-body space-y-2 sm:space-y-0">
          <div>© 2025 GeoFroggy</div>
          <div className="text-center font-medium text-white/90">
            Celebrating Cultures. Connecting People. One Story at a Time.
          </div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
