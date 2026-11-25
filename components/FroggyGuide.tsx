"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX, Sparkles, X, Compass, BookOpen } from "lucide-react";
import FroggyMascot from "./FroggyMascot";
import {
  isSoundEnabled,
  setSoundEnabled,
  playFrogRibbit,
  playSuccessChime,
} from "@/lib/soundEffects";

const culturalFacts = [
  "In Japan, 'Hanami' celebrates the fleeting beauty of cherry blossoms with picnics under blooming trees.",
  "Ethiopia follows a 13-month calendar, meaning it is several years behind the Gregorian calendar!",
  "In Mexico, Día de los Muertos honors loved ones with marigold petals, candles, and joyful music.",
  "India's Diwali, the Festival of Lights, illuminates millions of homes with clay oil lamps called diyas.",
  "In Norway, 'Friluftsliv' means open-air living — celebrating a deep connection with nature year-round.",
  "New Orleans' Mardi Gras blends French, Spanish, African, and Caribbean heritage into vibrant parades.",
];

function getPageTip(pathname: string): { title: string; tip: string; ctaLabel: string; ctaHref: string } {
  if (pathname.startsWith("/explore")) {
    return {
      title: "Ready to Explore?",
      tip: "Filter by continent or click any country card to discover authentic local traditions!",
      ctaLabel: "Share Your Story",
      ctaHref: "/submit-story",
    };
  }
  if (pathname.startsWith("/about")) {
    return {
      title: "Our Global Mission",
      tip: "GeoFroggy connects storytellers from 195+ countries. Want to represent your region?",
      ctaLabel: "Become an Ambassador",
      ctaHref: "/become-ambassador",
    };
  }
  if (pathname.startsWith("/donate") || pathname.startsWith("/partner")) {
    return {
      title: "Power Cultural Voices",
      tip: "Every contribution helps translate local stories and keep our global archive free for all.",
      ctaLabel: "Get Involved",
      ctaHref: "/get-involved",
    };
  }
  if (pathname.startsWith("/news")) {
    return {
      title: "Fresh Global Stories",
      tip: "Catch up on community milestones, upcoming festivals, and cultural spotlights!",
      ctaLabel: "Explore Cultures",
      ctaHref: "/explore",
    };
  }
  return {
    title: "Ribbit! Need a Guide?",
    tip: "I'm Froggy! Tap me anytime to hear a ribbit, discover a cultural fun fact, or jump to stories!",
    ctaLabel: "Explore Cultures",
    ctaHref: "/explore",
  };
}

export default function FroggyGuide() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [factIndex, setFactIndex] = useState(0);
  const [showFact, setShowFact] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const onToggle = (e: Event) => {
      const custom = e as CustomEvent<boolean>;
      setSoundOn(custom.detail);
    };
    window.addEventListener("geofroggy-sound-toggle", onToggle);
    return () => window.removeEventListener("geofroggy-sound-toggle", onToggle);
  }, []);

  if (pathname === "/signup" || pathname === "/login") {
    return null;
  }

  const pageTip = getPageTip(pathname);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
    if (next) {
      playSuccessChime();
    }
  };

  const handleNextFact = () => {
    playSuccessChime();
    setFactIndex((prev) => (prev + 1) % culturalFacts.length);
    setShowFact(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Interactive Helper Popover */}
      {open && (
        <div className="w-80 sm:w-88 rounded-2xl bg-white border-2 border-secondary shadow-[0_20px_50px_rgba(23,88,131,0.24)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-display font-semibold text-[15px]">
                {pageTip.title}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                data-no-sound="true"
                onClick={toggleSound}
                title={soundOn ? "Mute sound effects" : "Enable sound effects"}
                className="p-1.5 rounded-full hover:bg-white/15 transition-colors"
                aria-label="Toggle sound effects"
              >
                {soundOn ? (
                  <Volume2 className="w-4 h-4 text-secondary" />
                ) : (
                  <VolumeX className="w-4 h-4 text-white/70" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/15 transition-colors"
                aria-label="Close Froggy guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-gradient-to-b from-[#f4f9ee]/70 to-white">
            <p className="font-prose text-[13.5px] leading-relaxed text-[#383838]">
              {showFact ? culturalFacts[factIndex] : pageTip.tip}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                data-no-sound="true"
                onClick={handleNextFact}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-secondary/15 hover:bg-secondary/25 text-primary font-display font-semibold text-[12.5px] border border-secondary/40 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-secondary-dark" />
                {showFact ? "Another Fun Fact" : "Cultural Fun Fact"}
              </button>

              <Link
                href={pageTip.ctaHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary hover:bg-primary-dark text-white font-display font-semibold text-[12.5px] shadow-sm transition-all"
              >
                <Compass className="w-3.5 h-3.5" />
                {pageTip.ctaLabel}
              </Link>

              <Link
                href="/faqs"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#383838] font-display font-medium text-[12px] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                FAQs
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Sound Toggle Pill + Jumping Froggy */}
      <div className="flex items-end gap-2">
        <button
          type="button"
          data-no-sound="true"
          onClick={toggleSound}
          title={soundOn ? "Sound Effects: ON" : "Sound Effects: OFF"}
          aria-label="Toggle site audio"
          className="mb-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border-2 border-primary/20 shadow-md hover:border-secondary text-[12px] font-display font-semibold text-primary transition-all cursor-pointer"
        >
          {soundOn ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-secondary" />
              <span className="hidden sm:inline">Sound On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline text-gray-500">Muted</span>
            </>
          )}
        </button>

        <div className="relative">
          {!open && (
            <span className="pointer-events-none absolute -top-7 right-0 px-2.5 py-0.5 rounded-full bg-primary text-white font-display text-[11px] font-semibold shadow-md whitespace-nowrap animate-bounce">
              Ribbit! Tap me
            </span>
          )}
          <FroggyMascot
            size="md"
            onClick={() => {
              playFrogRibbit();
              setOpen((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
}
