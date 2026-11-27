"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Volume2, VolumeX } from "lucide-react";
import { isSoundEnabled, setSoundEnabled, playSuccessChime } from "@/lib/soundEffects";

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
  const [soundOn, setSoundOn] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const onToggle = (e: Event) => {
      const custom = e as CustomEvent<boolean>;
      setSoundOn(custom.detail);
    };
    window.addEventListener("geofroggy-sound-toggle", onToggle);
    return () => window.removeEventListener("geofroggy-sound-toggle", onToggle);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
    if (next) playSuccessChime();
  };

  if (pathname === "/signup" || pathname === "/login") {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#175883] shadow-[0_2px_12px_rgba(15,61,92,0.22)] transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between gap-4">
        {/* Extreme Left: GeoFroggy Brand Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 group bg-white px-3 py-1 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
        >
          <Image
            src="/website-images/main-logo.png"
            alt="GeoFroggy"
            width={165}
            height={40}
            className="h-7 sm:h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Closer Navigation Links with hanging oval active tab */}
        <nav className="hidden lg:flex items-center justify-center h-[60px] gap-0.5">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`h-[60px] flex items-center justify-center font-body text-[16px] tracking-[0.01em] leading-none whitespace-nowrap transition-colors outline-none focus:outline-none border-0 ${
                  isActive
                    ? "px-4 font-bold text-white rounded-b-[50px]"
                    : "px-3 xl:px-3.5 font-semibold text-white/95 hover:text-white"
                }`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(180deg, #8AC63C 0%, #6FA523 55%, #4B7B09 100%)",
                      }
                    : undefined
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Sound Icon Toggle, Learn Portal & Sign Up Button */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            type="button"
            data-no-sound="true"
            onClick={toggleSound}
            aria-label={soundOn ? "Mute sound effects" : "Unmute sound effects"}
            className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            {soundOn ? (
              <Volume2 className="w-5 h-5 text-[#8ac63c]" />
            ) : (
              <VolumeX className="w-5 h-5 text-white/60" />
            )}
          </button>
          <a
            href="https://learningportal.geofroggy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-body font-semibold text-[16.5px] underline underline-offset-4 decoration-2 whitespace-nowrap transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" strokeWidth={2.25} />
            <span>Learn Portal</span>
          </a>
          <Link
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-theme animate-btn-shake font-body whitespace-nowrap active:scale-95 !py-2 !px-5 !text-[14.5px]"
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
              className="btn-theme animate-btn-shake w-full !py-2.5 !text-[15px]"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
    <div className="h-[60px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}
