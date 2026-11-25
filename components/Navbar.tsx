"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/explore", label: "Explore" },
  { href: "/media", label: "Media" },
  { href: "/donate", label: "Donate" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/signup" || pathname === "/login") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-primary border-b border-white/15 shadow-[0_4px_18px_rgba(23,88,131,0.28)] transition-all">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: GeoFroggy Brand Logo inside crisp white pill on bluish navbar */}
        <Link
          href="/"
          className="flex items-center shrink-0 group bg-white/95 hover:bg-white px-4 py-1.5 rounded-full shadow-md transition-all duration-200"
        >
          <Image
            src="/website-images/main-logo.png"
            alt="GeoFroggy"
            width={200}
            height={48}
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
            priority
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 font-display text-[15px] transition-all rounded-full ${
                  isActive
                    ? "font-bold text-white bg-secondary shadow-md"
                    : "font-medium text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Learn Portal & Sign Up Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://learningportal.geofroggy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-display font-semibold text-[14px] px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-amber-300/40 transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" strokeWidth={2.25} />
            <span>Learn Portal</span>
          </a>
          <Link
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-btn-shake bg-secondary hover:bg-secondary-dark text-white font-display font-semibold text-[15px] px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/15 text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden bg-primary border-t border-white/15 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[520px] opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 font-display font-medium text-[15px] rounded-lg transition-colors ${
                  isActive
                    ? "font-bold text-white bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-white/15 space-y-2">
            <a
              href="https://learningportal.geofroggy.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 text-amber-300 font-display font-semibold text-[15px] py-2.5 bg-white/10 rounded-lg border border-amber-300/40 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" strokeWidth={2.25} />
              Learn Portal
            </a>
            <Link
              href="/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-btn-shake block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-display font-semibold text-[15px] px-6 py-3 rounded-lg shadow-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
