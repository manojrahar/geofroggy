"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import FroggyMascot from "./FroggyMascot";
import {
  playFrogRibbit,
  playTongueStretch,
  playTongueSnap,
} from "@/lib/soundEffects";

export default function FroggyGuide() {
  const pathname = usePathname();
  const [tongueProgress, setTongueProgress] = useState(0);
  const [scrollSpeech, setScrollSpeech] = useState<string | null>(null);
  const lastStretchSoundRef = useRef(0);
  const lastSectionCaughtRef = useRef(-1);

  // Scroll-driven tongue stretch & fly-catching per section (~550px)
  useEffect(() => {
    const SECTION_STEP = 550;
    let retractTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 30) {
        setTongueProgress(0);
        return;
      }

      const sectionIdx = Math.floor(y / SECTION_STEP);
      const progress = (y % SECTION_STEP) / SECTION_STEP;

      const now = Date.now();
      if (progress > 0.08 && progress < 0.35 && now - lastStretchSoundRef.current > 1800) {
        lastStretchSoundRef.current = now;
        playTongueStretch();
      }

      if (progress >= 0.85 && lastSectionCaughtRef.current !== sectionIdx) {
        lastSectionCaughtRef.current = sectionIdx;
        setTongueProgress(1);
        setScrollSpeech("Gulp!");
        playTongueSnap();
        setTimeout(() => playFrogRibbit(), 200);
        setTimeout(() => setScrollSpeech(null), 900);
        if (retractTimer) clearTimeout(retractTimer);
        retractTimer = setTimeout(() => setTongueProgress(0), 420);
      } else if (progress < 0.85) {
        setTongueProgress(Math.min(0.9, progress * 1.05));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (retractTimer) clearTimeout(retractTimer);
    };
  }, []);

  if (pathname === "/signup" || pathname === "/login") {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <FroggyMascot
        size="xl"
        catchInsect={true}
        tongueProgress={tongueProgress}
        externalSpeech={scrollSpeech}
      />
    </div>
  );
}
