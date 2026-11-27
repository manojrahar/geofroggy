"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import ParallaxAccent from "@/components/ParallaxAccent";

const stats = [
  { target: 74, suffix: "+", label: "Countries Represented" },
  { target: 12000, suffix: "+", label: "Stories Shared" },
  { target: 250, suffix: "+", label: "Cultural Traditions" },
  { target: 30, suffix: "+", label: "Languages Spoken" },
  { target: 400, suffix: "+", label: "Global Collaborations" },
];

const values = [
  {
    title: "Authentic Human Voice",
    desc: "Stories written directly by the people who live them, preserving honest lived perspectives.",
  },
  {
    title: "Borderless Empathy",
    desc: "Transforming abstract geographic borders into bridges of understanding and genuine connection.",
  },
  {
    title: "Living Cultural Preservation",
    desc: "Documenting festivals, rituals, dialects, and traditions for future generations worldwide.",
  },
];

function useSectionReveal(threshold = 0.14) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, revealed };
}

export default function AboutContent() {
  const phil = useSectionReveal(0.12);
  const explore = useSectionReveal(0.15);
  const vision = useSectionReveal(0.15);
  const why = useSectionReveal(0.15);
  const banner = useSectionReveal(0.2);

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [bannerGlow, setBannerGlow] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    if (!phil.revealed) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounts(stats.map((s) => Math.round(s.target * eased)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phil.revealed]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Header with dark radial readability vignette */}
      <section className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden group">
        <Image
          src="/website-images/Rectangle-86.jpg"
          alt="Geofroggy Community"
          fill
          priority
          className="object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 48%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.25) 65%, transparent 100%)",
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[24px] sm:text-[28px] lg:text-[32px] px-12 py-1 leading-tight mb-2">
            Behind the Frog
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            The Heart of Geofroggy
          </h1>
        </div>
      </section>

      {/* 2. Our Philosophy: Geography as Story (Clean white + Rectangle-19.png + Parallax frog legs) */}
      <section
        ref={phil.ref}
        className="relative bg-white overflow-hidden py-16 lg:py-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/website-images/Rectangle-19.png"
            alt=""
            fill
            className="object-cover opacity-85"
          />
        </div>

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              phil.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display font-medium text-[28px] text-secondary">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
              Geography as Story
            </h2>

            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>

            <div className="mt-6 font-prose text-[18px] text-[#4B4B4B] leading-8 max-w-250 mx-auto">
              <p>
                We look beyond coordinates on a map — geography is the living mosaic of everyday life, from spiced tea in Moroccan souks to lantern light across Finnish lakes. Every culture holds answers to how humans create beauty and solidarity.
              </p>
            </div>
          </div>

          {/* 4 Cultural Vignettes with 3D hover scale & flip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            {[
              { src: "/website-images/culture_about_1.png", title: "Folklore & Wisdom" },
              { src: "/website-images/culture_about_2.png", title: "Shared Celebrations" },
              { src: "/website-images/culture_about_3.png", title: "Culinary Heritage" },
              { src: "/website-images/culture_about_1.png", title: "Generational Crafts" },
            ].map((c, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-700 ease-out ${
                  phil.revealed
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#175883]/35 group-hover:border-[#8ac63c] shadow-[0_10px_24px_-4px_rgba(0,0,0,0.18)] mb-3 transition-all duration-500 transform group-hover:scale-108">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-112 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-display font-semibold text-[16px] text-[#383838] group-hover:text-primary transition-colors">
                  {c.title}
                </h4>
              </div>
            ))}
          </div>

          {/* 5 Animated Count-Up Stat Cards (Opaque White-to-Green Gradient & Chamfered Shape) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 pt-10 border-t border-gray-200/70 text-center">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-tl-[24px] rounded-br-[24px] rounded-tr-[8px] rounded-bl-[8px] border-2 border-[#175883]/45 hover:border-[#8ac63c] shadow-[0_10px_26px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_22px_38px_-6px_rgba(0,0,0,0.26)] hover:-translate-y-2 transition-all duration-500 ease-out ${
                  phil.revealed
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{
                  backgroundColor: "#ffffff",
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, #f4fae9 55%, #e1f3c6 100%)",
                  transitionDelay: `${idx * 90}ms`,
                }}
              >
                <div className="font-display font-bold text-[32px] sm:text-[38px] text-[#175883] leading-none">
                  {counts[idx].toLocaleString()}
                  <span className="text-[#8ac63c]">{s.suffix}</span>
                </div>
                <div className="font-prose text-[13px] text-[#4B4B4B] mt-2 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Explore the World Through Human Stories */}
      <section
        ref={explore.ref}
        className="py-16 lg:py-20 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`transition-all duration-700 ease-out ${
                explore.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/website-images/globeicon.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <span className="font-display font-medium text-[26px] text-secondary">
                  Explore
                </span>
              </div>

              <h2 className="font-display font-semibold text-[34px] sm:text-[40px] text-[#383838] leading-tight">
                Explore the World Through Human Stories
              </h2>

              <div className="mt-2 mb-6">
                <Image
                  src="/website-images/moreimages/Vector-4.png"
                  alt=""
                  width={212}
                  height={14}
                />
              </div>

              <p className="font-prose text-[16px] text-[#5E5E5E] leading-[27px] mb-4">
                Every tradition is a puzzle piece of our shared human story. From vibrant lion dances and lantern-lit streets to lively neighborhood parades and family celebrations, GeoFroggy brings the world&apos;s living cultures together in one place.
              </p>
              <p className="font-prose text-[16px] text-[#5E5E5E] leading-[27px] mb-8">
                Step inside everyday moments told by the people who live them — and discover how much we share across borders.
              </p>

              <Link
                href="/explore"
                className="btn-theme animate-btn-shake active:scale-95"
              >
                Start Exploring
              </Link>
            </div>

            <div
              className={`flex justify-center lg:justify-end group transition-all duration-700 delay-150 ease-out ${
                explore.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Image
                src="/website-images/about_explore.png"
                alt="Explore the world through human stories"
                width={580}
                height={520}
                className="w-full max-w-[540px] h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-[0_14px_30px_rgba(23,88,131,0.16)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Vision & Contributor Testimonial */}
      <section
        ref={vision.ref}
        className="relative py-16 lg:py-20 bg-[#f8fbff] overflow-hidden"
      >
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
            className={`text-center mb-10 transition-all duration-700 ease-out ${
              vision.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display font-medium text-[28px] text-secondary">
                Our Vision
              </span>
            </div>

            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
              A Connected World, One Story at a Time
            </h2>

            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>

            <div className="mt-6 font-prose text-[18px] text-[#5E5E5E] leading-8 max-w-250 mx-auto">
              <p>
                We dream of a world where borders don&apos;t divide — they inspire conversation. Where learning about another culture is just a scroll away. Our vision is a global tapestry stitched together with authentic voices from all walks of life.
              </p>
            </div>
          </div>

          {/* Featured Quote Card with Prominent Dark Border & Black Shadow */}
          <div
            className={`max-w-250 mx-auto mt-10 bg-white p-8 sm:p-10 rounded-tl-[28px] rounded-br-[28px] rounded-tr-[10px] rounded-bl-[10px] card-hover-effect flex items-start gap-4 transition-all duration-700 delay-150 ${
              vision.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span
              aria-hidden="true"
              className="font-display font-bold text-secondary text-[64px] leading-none select-none flex-shrink-0"
            >
              “
            </span>
            <div>
              <p className="font-prose font-medium italic text-[18px] text-[#383838] leading-8">
                “Geofroggy helped me rediscover the stories of my hometown — and connect with people who&apos;ve never even heard of it. It reminded me that every place has a voice, and every voice deserves to be heard.”
              </p>
              <p className="font-script text-[28px] text-primary mt-4">
                A Geofroggy Contributor from Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why We Exist: Group Photo & Core Values */}
      <section ref={why.ref} className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <ParallaxAccent
          speed={0.07}
          className="hidden lg:block absolute -bottom-12 left-4 pointer-events-none"
        >
          <Image
            src="/website-images/abstractart2.png"
            alt=""
            width={165}
            height={167}
            className="rotate-[-12deg] opacity-75"
          />
        </ParallaxAccent>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden card-hover-effect transition-all duration-700 ease-out ${
                why.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Image
                src="/website-images/Rectangle-86-1.jpg"
                alt="Our Global Community"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div
              className={`transition-all duration-700 delay-150 ease-out ${
                why.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-display font-semibold text-[32px] sm:text-[38px] text-[#383838] leading-tight mb-4">
                Why We Exist
              </h2>
              <p className="font-prose text-[16px] text-[#5E5E5E] leading-7 mb-8">
                In an era of hyper-connected algorithms that often isolate us in filter bubbles, Geofroggy offers an open window to authentic human culture. We celebrate nuance, local pride, and genuine human kinship.
              </p>

              <div className="space-y-5">
                {values.map((val, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#f4fae9]/60 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-secondary/25 group-hover:bg-secondary group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 text-secondary transition-all duration-300 group-hover:scale-110">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-[17px] text-[#1F1F1F] group-hover:text-primary transition-colors">
                        {val.title}
                      </h4>
                      <p className="font-prose text-[14px] text-[#6E6E6E] mt-0.5">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Movement Banner CTA with Sunlit Hover Glow & Blue Theme Button */}
      <section
        ref={banner.ref}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setBannerGlow({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
            active: true,
          });
        }}
        onMouseLeave={() => setBannerGlow((g) => ({ ...g, active: false }))}
        className="bg-[#8AC63C] py-16 px-4 text-center text-white relative overflow-hidden group"
      >
        <Image
          src="/website-images/bg_global_movement.png"
          alt=""
          fill
          className="object-cover opacity-25 pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: bannerGlow.active ? 1 : 0,
            background: `radial-gradient(circle 280px at ${bannerGlow.x}% ${bannerGlow.y}%, rgba(255, 255, 255, 0.22), transparent 70%)`,
          }}
        />
        <div
          className={`max-w-3xl mx-auto relative z-10 transition-all duration-700 ease-out ${
            banner.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display font-semibold text-[34px] sm:text-[42px] mb-3 leading-tight drop-shadow-sm">
            Join Our Global Movement
          </h2>
          <p className="font-prose text-[17px] text-white/95 mb-8 max-w-xl mx-auto leading-relaxed">
            Become a part of the world&apos;s most vibrant archive of living human culture.
          </p>
          <Link
            href="/signup"
            className="btn-theme-blue animate-btn-shake active:scale-95"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
}
