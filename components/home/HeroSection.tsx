"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/website-images/hero/chinese_new_year.png",
    alt: "Chinese New Year celebration",
  },
  {
    id: 2,
    image: "/website-images/hero/diwali_india.png",
    alt: "Diwali celebration in India",
  },
  {
    id: 3,
    image: "/website-images/hero/dia_de_los_muertos_mexico.png",
    alt: "Día de los Muertos in Mexico",
  },
  {
    id: 4,
    image: "/website-images/hero/india2.png",
    alt: "Festival in India",
  },
  {
    id: 5,
    image: "/website-images/hero/mardi_gras.png",
    alt: "Mardi Gras parade",
  },
  {
    id: 6,
    image: "/website-images/hero/timkat_ethiopia.png",
    alt: "Timkat festival in Ethiopia",
  },
];

const content = {
  title: "Our Window, Your World",
  subtitle: "Engage! Share! Cultivate",
  description:
    "Welcome to Geofroggy—a unique platform where the power of geography unites people from every corner of the world. Here, we believe that every place has a story to tell.",
};

const floatingBubbles = [
  { src: "/website-images/contributor1.png", size: 80, top: "12%", left: "6%" },
  { src: "/website-images/contributor2.png", size: 60, top: "60%", left: "3%" },
  { src: "/website-images/contributor3.png", size: 90, top: "25%", left: "18%" },
  { src: "/website-images/contributor4.png", size: 70, top: "70%", left: "14%" },
  { src: "/website-images/contributor1.png", size: 55, top: "45%", left: "28%" },
  { src: "/website-images/contributor2.png", size: 75, top: "10%", right: "22%" },
  { src: "/website-images/contributor3.png", size: 65, top: "55%", right: "18%" },
  { src: "/website-images/contributor4.png", size: 85, top: "20%", right: "6%" },
  { src: "/website-images/contributor1.png", size: 60, top: "72%", right: "8%" },
  { src: "/website-images/contributor2.png", size: 50, top: "38%", right: "30%" },
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[740px] overflow-hidden flex items-start">
      {/* Background carousel slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Stronger readable overlay across all slide images */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      {/* Floating Contributor Avatars */}
      <div
        className={`absolute inset-0 pointer-events-none hidden lg:block transition-opacity duration-500 ${
          currentSlide === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        {floatingBubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full overflow-hidden border-2 border-white/60 opacity-80"
            style={{
              width: bubble.size,
              height: bubble.size,
              top: bubble.top,
              left: "left" in bubble ? bubble.left : undefined,
              right: "right" in bubble ? bubble.right : undefined,
            }}
          >
            <Image src={bubble.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-16 pb-20">
        <div className="flex items-center justify-center mb-3">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[28px] sm:text-[36px] px-12 py-1 leading-tight">
            {content.title}
          </span>
        </div>

        <h1 className="text-white font-display font-semibold text-[38px] sm:text-[55px] leading-tight mb-8 max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
          {content.subtitle}
        </h1>

        <p className="text-white font-prose text-[16px] sm:text-[18px] leading-[26px] max-w-[791px] mx-auto mb-10 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          {content.description}
        </p>

        {/* CTA Button and Avatars */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
          <Link
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-btn-shake bg-secondary hover:bg-secondary-dark text-white font-display font-semibold text-[18px] px-9 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
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
            className={`rounded-full transition-all duration-300 border border-white ${
              idx === currentSlide
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
