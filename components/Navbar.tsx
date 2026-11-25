"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Explore", href: "/explore" },
    { name: "Media", href: "/media" },
    { name: "Donate", href: "/donate" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full relative z-50">
      {/* 1. White Top Bar with Centered Logo */}
      <div className="w-full bg-white py-3.5 px-4 flex justify-center items-center border-b border-gray-100">
        <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
          <Image
            src="/website-images/main-logo.png"
            alt="GeoFroggy Logo"
            width={180}
            height={52}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* 2. Deep Blue Navigation Bar */}
      <nav className="w-full bg-[#175883] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Left: Green Home Pill + Desktop Links */}
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
              <Link
                href="/"
                className="bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full hover:bg-[#7ab52e] transition-colors shadow-sm flex items-center justify-center"
              >
                Home
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-2.5 py-1 text-white/90 hover:text-amber-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Learn Portal + Sign Up + Mobile Hamburger */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Learn Portal Link */}
              <Link
                href="https://learningportal.geofroggy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs sm:text-sm text-[#FFC107] hover:text-amber-300 font-medium transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Learn Portal</span>
              </Link>

              {/* Sign Up Button */}
              <Link
                href="/signup"
                className="bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full hover:bg-[#7ab52e] transition-colors shadow-sm"
              >
                Sign Up
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-md text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0f3d5c] border-t border-white/10 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-white/10 hover:text-amber-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://learningportal.geofroggy.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-[#FFC107] hover:bg-white/10"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Learn Portal</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
