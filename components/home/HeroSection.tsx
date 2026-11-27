"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/website-images/hero/chinese_new_year.png",
    alt: "Chinese New Year celebration",
    location: "Chinese New Year • China",
  },
  {
    id: 2,
    image: "/website-images/hero/diwali_india.png",
    alt: "Diwali celebration in India",
    location: "Diwali • India",
  },
  {
    id: 3,
    image: "/website-images/hero/dia_de_los_muertos_mexico.png",
    alt: "Día de los Muertos in Mexico",
    location: "Día de los Muertos • Mexico",
  },
  {
    id: 4,
    image: "/website-images/hero/india2.png",
    alt: "Festival in India",
    location: "Holi & Folk Arts • India",
  },
  {
    id: 5,
    image: "/website-images/hero/mardi_gras.png",
    alt: "Mardi Gras parade",
    location: "Mardi Gras • New Orleans, USA",
  },
  {
    id: 6,
    image: "/website-images/hero/timkat_ethiopia.png",
    alt: "Timkat festival in Ethiopia",
    location: "Timkat Festival • Ethiopia",
  },
];

const content = {
  title: "Our Window, Your World",
  subtitle: "Engage! Share! Cultivate",
  description:
    "Welcome to Geofroggy—a unique platform where the power of geography unites people from every corner of the world. Here, we believe that every place has a story to tell.",
};

const floatingBubbles = [
  { src: "/website-images/contributor1.png", size: 80, top: "12%", left: "6%", name: "Adam Watts", country: "USA", delay: "0s", duration: "4.2s" },
  { src: "/website-images/contributor2.png", size: 60, top: "60%", left: "4%", name: "Luca Romano", country: "Italy", delay: "0.7s", duration: "3.6s" },
  { src: "/website-images/contributor3.png", size: 88, top: "24%", left: "17%", name: "Anaya Patel", country: "India", delay: "1.2s", duration: "4.8s" },
  { src: "/website-images/contributor4.png", size: 68, top: "70%", left: "14%", name: "Diego Rojas", country: "Mexico", delay: "0.3s", duration: "4.0s" },
  { src: "/website-images/contributor1.png", size: 55, top: "45%", left: "26%", name: "Zanele Khoza", country: "South Africa", delay: "1.6s", duration: "3.9s" },
  { src: "/website-images/contributor2.png", size: 75, top: "11%", right: "21%", name: "Kenji Sato", country: "Japan", delay: "0.5s", duration: "4.4s" },
  { src: "/website-images/contributor3.png", size: 65, top: "56%", right: "17%", name: "Elena Rostova", country: "Finland", delay: "1.1s", duration: "3.7s" },
  { src: "/website-images/contributor4.png", size: 84, top: "20%", right: "6%", name: "Amina Diallo", country: "Nigeria", delay: "0.9s", duration: "4.6s" },
  { src: "/website-images/contributor1.png", size: 60, top: "72%", right: "8%", name: "Mateo Silva", country: "Brazil", delay: "1.4s", duration: "4.1s" },
  { src: "/website-images/contributor2.png", size: 52, top: "38%", right: "28%", name: "Sara Lind", country: "Norway", delay: "0.2s", duration: "3.8s" },
];

const avatars = [
  "/website-images/contributor1.png",
  "/website-images/contributor2.png",
  "/website-images/contributor3.png",
  "/website-images/contributor4.png",
  "/website-images/contributor1.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) prevSlide();
      else nextSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[740px] overflow-hidden flex items-start"
    >
      {/* Background carousel slides with Ken Burns slow zoom */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 overflow-hidden ${isActive ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform duration-[2600ms] ease-out ${isActive ? "scale-[1.07]" : "scale-100"
                }`}
              priority={idx === 0}
            />
          </div>
        );
      })}

      {/* Stronger readable overlay + centered dark radial vignette behind hero text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.32) 60%, transparent 100%)",
        }}
      />

      {/* Live Floating Contributor Avatars across ALL slides with hover tooltips */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
        {floatingBubbles.map((bubble, i) => (
          <div
            key={i}
            className="group pointer-events-auto absolute animate-float-gentle cursor-pointer"
            style={{
              width: bubble.size,
              height: bubble.size,
              top: bubble.top,
              left: "left" in bubble ? bubble.left : undefined,
              right: "right" in bubble ? bubble.right : undefined,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/75 opacity-85 group-hover:opacity-100 group-hover:scale-115 group-hover:border-[#8ac63c] transition-all duration-300 shadow-lg">
              <Image src={bubble.src} alt={bubble.name} fill className="object-cover" />
            </div>
            <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#175883]/95 text-white text-[11px] font-display font-medium whitespace-nowrap shadow-md">
              {bubble.name} • {bubble.country}
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-16 pb-20">
        <div className="flex items-center justify-center mb-3">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[28px] sm:text-[36px] px-12 py-1 leading-tight">
            {content.title}
          </span>
        </div>

        <h1 className="text-white font-display font-semibold text-[38px] sm:text-[55px] leading-tight mb-8 max-w-2xl drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
          {content.subtitle}
        </h1>

        <p className="text-white font-prose text-[16px] sm:text-[18px] leading-[26px] max-w-[791px] mx-auto mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          {content.description}
        </p>

        {/* CTA Button and Avatars */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
          <Link
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-theme animate-btn-shake !text-[18px] !px-9 !py-3 active:scale-95"
          >
            Join Now
          </Link>

          <div className="flex items-center">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-full border-2 border-white overflow-hidden relative bg-gray-300"
                  style={{ zIndex: avatars.length - i }}
                >
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border-2 border-white -ml-3 z-10">
              <span className="text-white font-display font-medium text-[18px] leading-none">
                5k+
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 border border-white ${idx === currentSlide
              ? "w-8 h-2.5 bg-white"
              : "w-2.5 h-2.5 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
