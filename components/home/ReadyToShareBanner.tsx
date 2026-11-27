"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToShareBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
      className="relative overflow-hidden bg-[#8AC63C] group"
    >
      {/* Exact reasy_to_share.png mandala & dreamcatcher background at full clarity */}
      <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        <Image
          src="/website-images/reasy_to_share.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Interactive pointer-following sunlit glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(circle 280px at ${glow.x}% ${glow.y}%, rgba(255, 255, 255, 0.22), transparent 70%)`,
        }}
      />

      <div
        className={`relative z-10 py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display font-semibold text-[34px] lg:text-[42px] text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
          Ready to Share Your World?
        </h2>

        <div className="mt-2 mb-5 flex justify-center">
          <Image
            src="/website-images/moreimages/Vector-4.png"
            alt=""
            width={212}
            height={14}
          />
        </div>

        <p className="font-prose text-[16px] text-white leading-[24px] mb-7 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)]">
          Every story helps build a more connected and compassionate planet.
        </p>

        <Link
          href="/submit-story"
          className="btn-theme-blue animate-btn-shake active:scale-95"
        >
          Share your experience
        </Link>
      </div>
    </section>
  );
}
