"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "/website-images/hero/chinese_new_year.png",
    subtitle: "Our Window, Your World",
    title: "Engage! Share! Cultivate",
    description:
      "Welcome to Geofroggy -- a unique platform where the power of geography unites people from every corner of the world. Here, we believe that every place has a story to tell.",
  },
  {
    image: "/website-images/hero/diwali_india.png",
    subtitle: "Global Festivities & Heritage",
    title: "Celebrate Every Culture",
    description:
      "From glowing lanterns to vibrant festivals, experience the richness of human tradition through genuine eyewitness stories and regional lenses.",
  },
  {
    image: "/website-images/hero/timkat_ethiopia.png",
    subtitle: "Sacred Encounters & Ancient Rhythms",
    title: "Voices from the Source",
    description:
      "Discover the sacred melodies and living traditions of ancient highlands, told firsthand by the keepers of regional heritage.",
  },
  {
    image: "/website-images/hero/mardi_gras.png",
    subtitle: "Carnival & Cultural Tapestries",
    title: "Colors Beyond Borders",
    description:
      "Witness how music, dance, and creative pageantry unite communities across continents in joyous expression.",
  },
  {
    image: "/website-images/hero/dia_de_los_muertos_mexico.png",
    subtitle: "Remembrance & Life Celebrations",
    title: "Stories Passed Down",
    description:
      "Explore age-old celebrations of ancestral memory, colorful altars, and deep familial bonds that shape communities.",
  },
];

// Floating member faces positioned across hero (as seen in reference)
const floatingMembers = [
  { src: "/website-images/faces1.png", top: "18%", left: "6%", size: 48 },
  { src: "/website-images/faces2.png", top: "25%", left: "19%", size: 56 },
  { src: "/website-images/faces3.png", top: "18%", right: "26%", size: 52 },
  { src: "/website-images/faces4.png", top: "22%", right: "9%", size: 54 },
  { src: "/website-images/faces5.png", bottom: "28%", left: "28%", size: 44 },
  { src: "/website-images/faces6.png", bottom: "22%", right: "21%", size: 46 },
  { src: "/website-images/contributor1.png", bottom: "26%", left: "4%", size: 50 },
  { src: "/website-images/contributor2.png", bottom: "22%", right: "12%", size: 48 },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 1. Background Slider Images */}
      {slides.map((s, index) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transition: "opacity 1s ease-in-out, transform 8s ease-out" }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover object-center brightness-75"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Vignette Overlay for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 pointer-events-none" />

      {/* Floating Member Face Bubbles (Hidden on small screens) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
        {floatingMembers.map((member, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white/80 shadow-lg overflow-hidden transition-all duration-700 hover:scale-110"
            style={{
              top: member.top,
              bottom: member.bottom,
              left: member.left,
              right: member.right,
              width: member.size,
              height: member.size,
              animation: `float ${(i % 3) + 4}s ease-in-out infinite alternate`,
            }}
          >
            <Image
              src={member.src}
              alt="Community Member"
              width={member.size}
              height={member.size}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* 2. Hero Typography & Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20 flex flex-col items-center">
        {/* Subtitle with pill / text accent */}
        <span className="inline-block text-[#8AC63C] text-sm sm:text-base font-semibold tracking-wide uppercase mb-3 font-display">
          {slide.subtitle}
        </span>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-tight drop-shadow-md">
          {slide.title}
        </h1>

        {/* Sub-paragraph */}
        <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-gray-200 font-body leading-relaxed mb-8 drop-shadow">
          {slide.description}
        </p>

        {/* CTA Button + Social Proof Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          <Link
            href="/signup"
            className="bg-[#8AC63C] text-[#1F1F1F] font-bold text-sm sm:text-base px-8 py-3 rounded-full hover:bg-[#7ab52e] hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Join Now
          </Link>

          {/* Overlapping Avatar Stack + 5k+ Badge */}
          <div className="flex items-center">
            <div className="flex -space-x-3 overflow-hidden p-0.5">
              {[
                "/website-images/contributor1.png",
                "/website-images/contributor2.png",
                "/website-images/contributor3.png",
                "/website-images/contributor4.png",
              ].map((avatar, idx) => (
                <div
                  key={idx}
                  className="inline-block w-9 h-9 rounded-full ring-2 ring-white overflow-hidden bg-gray-200"
                >
                  <Image
                    src={avatar}
                    alt="Member"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* 5k+ Blue Pill Badge */}
            <div className="ml-2.5 bg-[#175883] text-white text-xs font-bold px-2.5 py-1.5 rounded-full ring-2 ring-white shadow-sm">
              5k+
            </div>
          </div>
        </div>
      </div>

      {/* 3. Slider Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentSlide(dotIndex)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              dotIndex === currentSlide
                ? "bg-white w-7"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
