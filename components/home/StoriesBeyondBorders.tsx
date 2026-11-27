"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ParallaxAccent from "@/components/ParallaxAccent";

const statsData = [
  { target: 195, suffix: "+", label: "Countries & Regions" },
  { target: 5000, suffix: "+", label: "Global Voices" },
  { target: 12000, suffix: "+", label: "Cultural Stories" },
];

export default function StoriesBeyondBorders() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth count-up animation once revealed
  useEffect(() => {
    if (!revealed) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(statsData.map((s) => Math.round(s.target * eased)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [revealed]);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 bg-white overflow-hidden relative"
    >
      {/* Parallax peeking frog legs in top left corner */}
      <ParallaxAccent
        speed={-0.08}
        className="absolute -top-16 left-2 pointer-events-none"
      >
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={184}
          height={186}
          className="rotate-[-1.39deg]"
        />
      </ParallaxAccent>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-4 pt-4 transition-all duration-700 ease-out ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative inline-block mb-1">
            <Image
              src="/website-images/froggy-icon.png"
              alt=""
              width={56}
              height={56}
              className="pointer-events-none absolute -top-6 -left-6 sm:-top-7 sm:-left-7 w-11 h-11 sm:w-14 sm:h-14 object-contain"
            />
            <span className="font-display font-semibold text-[42px] sm:text-[52px] text-secondary leading-tight">
              Geofroggy
            </span>
          </div>
          <h2 className="font-display font-semibold text-[36px] sm:text-[44px] text-brand-text leading-tight">
            Stories Beyond Borders
          </h2>
          <div className="flex justify-center mt-2 mb-8">
            <Image
              src="/website-images/moreimages/Vector-1.svg"
              alt=""
              width={220}
              height={10}
            />
          </div>
        </div>

        {/* Concise Single-Paragraph Narrative */}
        <div
          className={`max-w-250 mx-auto text-center mb-10 transition-all duration-700 delay-100 ease-out ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-prose text-[18px] text-[#4B4B4B] leading-8">
            At Geofroggy, geography is more than coordinates on a map — it&apos;s the heartbeat of human connection. Every village, city, festival, and personal memory weaves into a living global archive that brings cultures closer together.
          </p>
        </div>

        {/* Highlighted Quote Box (matched to full 1200px width) */}
        <div
          className={`max-w-[1200px] mx-auto border border-dashed border-secondary/60 rounded-[14px] bg-[#DEECF5]/90 relative overflow-hidden mb-8 card-shadow hover:shadow-md transition-all duration-700 delay-150 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary rounded-l-[14px]" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
            <Image
              src="/website-images/Frog.png"
              alt=""
              width={64}
              height={64}
            />
          </div>
          <blockquote className="px-8 py-6 pl-10 pr-24 font-quote font-bold text-[18px] sm:text-[19px] text-primary leading-7.25">
            To unite people by celebrating the diversity of our planet — through personal stories, cultural insight, and a shared sense of belonging.
          </blockquote>
        </div>

        {/* Animated Count-Up Cultural Stats Strip (1200px wide with curved bottom nesting above Mask-group) */}
        <div
          className={`max-w-[1200px] mx-auto grid grid-cols-3 gap-4 sm:gap-8 mb-6 pt-6 pb-9 px-6 sm:px-12 rounded-t-2xl rounded-b-[50%_36px] bg-[#f8fbff] border-2 border-[#175883]/20 shadow-[0_8px_24px_-6px_rgba(23,88,131,0.12)] transition-all duration-700 delay-200 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {statsData.map((s, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display font-bold text-[26px] sm:text-[34px] text-[#175883] leading-none">
                {counts[idx].toLocaleString()}
                <span className="text-[#8ac63c]">{s.suffix}</span>
              </div>
              <div className="font-prose text-[12px] sm:text-[13.5px] text-[#5E5E5E] mt-1.5 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Exact 4-Panel Curved Cultural Photo Showcase */}
        <div
          className={`relative w-full max-w-[1200px] mx-auto group transition-all duration-700 delay-300 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/website-images/Mask-group.png"
            alt="Cultural celebrations from around the world"
            width={1200}
            height={450}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01] drop-shadow-[0_12px_28px_rgba(23,88,131,0.12)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
