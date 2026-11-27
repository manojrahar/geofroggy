"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import ParallaxAccent from "@/components/ParallaxAccent";

const events = [
  {
    id: 1,
    headline: "Lanterns & Lion Dances Light Up Lunar Festivities",
    summary:
      "Ornate traditional opera performers and vibrant lion dancers gather beside glowing altar candles to celebrate heritage, luck, and community.",
    feature_image: "/website-images/around-the-world-1.jpg",
    region: "CHINA",
    event_date: "Nov 12, 2026",
    destination_url: "/explore",
  },
  {
    id: 2,
    headline: "Rio Carnival Ignites the Sambadrome",
    summary:
      "Vibrant samba schools present months of elaborate craftsmanship, rhythm, and confetti-filled joy in the world's most electrifying street celebration.",
    feature_image: "/website-images/around-the-world-2.jpg",
    region: "BRAZIL",
    event_date: "Feb 17, 2026",
    destination_url: "/explore",
  },
  {
    id: 3,
    headline: "Coastal Table Traditions Across the Mediterranean",
    summary:
      "Friends and neighbors gather on sunlit terraces to share homemade dishes, warm conversation, and timeless hospitality by the sea.",
    feature_image: "/website-images/around-the-world-3.jpg",
    region: "ITALY",
    event_date: "Nov 25, 2026",
    destination_url: "/explore",
  },
];

interface TiltState {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
  active: boolean;
}

const defaultTilt: TiltState = {
  rotateX: 0,
  rotateY: 0,
  glowX: 50,
  glowY: 50,
  active: false,
};

export default function AroundTheWorldSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [tilts, setTilts] = useState<Record<number, TiltState>>({});

  // Smooth scroll-reveal animation when section enters viewport
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

  const handleMouseMove = (id: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 9;
    const rotateX = (0.5 - y) * 9;

    setTilts((prev) => ({
      ...prev,
      [id]: {
        rotateX,
        rotateY,
        glowX: x * 100,
        glowY: y * 100,
        active: true,
      },
    }));
  };

  const handleMouseLeave = (id: number) => {
    setTilts((prev) => ({
      ...prev,
      [id]: defaultTilt,
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 bg-[#f8fbff] relative overflow-hidden"
    >
      {/* Parallax peeking frog legs in top right */}
      <ParallaxAccent
        speed={-0.07}
        className="hidden lg:block absolute -top-12 right-6 pointer-events-none"
      >
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={175}
          height={177}
          className="rotate-[18deg] scale-x-[-1] opacity-80"
        />
      </ParallaxAccent>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`mb-10 transition-all duration-700 ease-out ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/website-images/globeicon.png"
              alt=""
              width={22}
              height={22}
            />
            <span className="font-display font-medium text-[28px] text-secondary">
              This Week
            </span>
          </div>

          <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
            Around the World This Week
          </h2>

          <div className="mt-2">
            <Image
              src="/website-images/moreimages/Vector-4.png"
              alt=""
              width={212}
              height={14}
            />
          </div>
        </div>

        {/* 3 Scroll-Revealed, Pointer-Tracking Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((e, idx) => {
            const t = tilts[e.id] || defaultTilt;
            return (
              <div
                key={e.id}
                className={`transition-all duration-700 ease-out ${
                  revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${idx * 140}ms`,
                  perspective: "1000px",
                }}
              >
                <Link
                  href={e.destination_url}
                  onMouseMove={(ev) => handleMouseMove(e.id, ev)}
                  onMouseLeave={() => handleMouseLeave(e.id)}
                  className="relative rounded-[18px] overflow-hidden group block bg-white border-2 border-[#175883]/55 hover:border-[#8ac63c] transition-all duration-200 ease-out shadow-[0_10px_28px_-4px_rgba(0,0,0,0.16)] hover:shadow-[0_26px_46px_-8px_rgba(0,0,0,0.3)]"
                  style={{
                    transform: t.active
                      ? `rotateX(${t.rotateX.toFixed(2)}deg) rotateY(${t.rotateY.toFixed(2)}deg) translateY(-6px)`
                      : "rotateX(0deg) rotateY(0deg) translateY(0px)",
                  }}
                >
                  {/* Soft pointer-following ambient glow */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                    style={{
                      opacity: t.active ? 1 : 0,
                      background: `radial-gradient(circle 220px at ${t.glowX}% ${t.glowY}%, rgba(138, 198, 60, 0.16), transparent 70%)`,
                    }}
                  />

                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-[#175883]/20">
                    <Image
                      src={e.feature_image}
                      alt={e.headline}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="p-5 relative z-10">
                    <div className="flex items-center gap-3 mb-2 text-[12px] text-[#6E6E6E] font-prose">
                      <span className="uppercase tracking-wide font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                        {e.region}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {e.event_date}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-[20px] text-[#1F1F1F] leading-snug mb-2 group-hover:text-primary transition-colors">
                      {e.headline}
                    </h3>

                    <p className="font-prose text-[14px] text-[#4B4B4B] leading-[22px] line-clamp-3">
                      {e.summary}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-secondary font-display font-semibold text-[13.5px] group-hover:text-primary transition-colors">
                      Read more{" "}
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
