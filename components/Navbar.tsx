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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: GeoFroggy Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/website-images/main-logo.png"
            alt="GeoFroggy"
            width={220}
            height={52}
            className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
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
                    ? "font-bold text-white bg-secondary shadow-sm"
                    : "font-medium text-[#2d3748] hover:text-primary hover:bg-gray-100/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Learn Portal & Sign Up Button */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://learningportal.geofroggy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-display font-semibold text-[14px] px-3.5 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 transition-colors shadow-2xs"
          >
            <GraduationCap className="w-4 h-4 text-amber-600 group-hover:rotate-12 transition-transform" strokeWidth={2.25} />
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
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
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
                    : "text-[#2d3748] hover:bg-gray-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
            <a
              href="https://learningportal.geofroggy.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 text-amber-700 font-display font-semibold text-[15px] py-2.5 bg-amber-50 rounded-lg border border-amber-200/60 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-amber-600" strokeWidth={2.25} />
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
