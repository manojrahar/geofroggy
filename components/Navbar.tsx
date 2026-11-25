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

  return (
    <header className="w-full">
      {/* 1. White Top Bar */}
      <div className="bg-white w-full py-3">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between lg:justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/website-images/main-logo.png"
              alt="GeoFroggy"
              width={200}
              height={52}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 2. Deep Blue Bar (Desktop) */}
      <div className="bg-primary w-full hidden lg:block">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15">
            <nav className="flex items-center h-15">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <div key={link.href} className="relative h-15 flex items-center">
                    {isActive && (
                      <span className="absolute inset-0 bg-secondary rounded-b-[50px]" />
                    )}
                    <Link
                      href={link.href}
                      className="relative z-10 px-4 text-white font-display font-medium text-[16px] transition-colors hover:text-white/90 whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://learningportal.geofroggy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-display font-semibold text-[16px] underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap"
              >
                <GraduationCap className="w-4 h-4" strokeWidth={2.25} />
                Learn Portal
              </a>
              <Link
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary-dark text-white font-display font-medium text-[15px] px-6 py-1.5 rounded-[5px] transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden bg-primary border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
                className={`px-4 py-3 font-display font-medium text-[15px] text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${
                  isActive ? "text-white bg-white/10" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
            <a
              href="https://learningportal.geofroggy.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 text-amber-300 hover:text-amber-200 font-display font-semibold text-[15px] underline underline-offset-4 decoration-2 py-2 transition-colors"
            >
              <GraduationCap className="w-4 h-4" strokeWidth={2.25} />
              Learn Portal
            </a>
            <Link
              href="/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-display font-medium text-[15px] px-6 py-2.5 rounded-[5px] transition-colors"
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
