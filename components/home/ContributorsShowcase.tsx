"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contributors = [
  {
    name: "Adam Watts",
    country: "USA",
    image: "/website-images/contributor1.png",
    tag: "Colors of Kano",
    bio: "Adam is a documentary photographer and cultural archivist focusing on West African craft traditions.",
  },
  {
    name: "Luca Romano",
    country: "Italy",
    image: "/website-images/contributor2.png",
    tag: "Mediterranean Roots",
    bio: "Culinary anthropologist exploring ancestral recipes and seasonal food traditions across coastal Italy.",
  },
  {
    name: "Anaya Patel",
    country: "India",
    image: "/website-images/contributor3.png",
    tag: "Diwali Jaipur",
    bio: "Cultural journalist capturing living folk traditions, indigenous craft communities, and festival rituals.",
  },
  {
    name: "Diego Rojas",
    country: "Mexico",
    image: "/website-images/contributor4.png",
    tag: "Oaxaca Weavers",
    bio: "Writer and educator documenting indigenous Zapotec and Mixtec textile collectives in southern Mexico.",
  },
];

export default function ContributorsShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

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

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-white">
      {/* Exact Rectangle-19.png frog pattern backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/website-images/Rectangle-19.png"
          alt=""
          fill
          className="object-cover opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display font-medium text-[28px] text-secondary">
                Top Contributors
              </span>
            </div>
            <h2 className="font-display font-semibold text-[36px] sm:text-[44px] text-[#383838] leading-tight">
              Celebrating Our Contributors
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

          <Link
            href="/contributors"
            className="btn-theme animate-btn-shake shrink-0 font-display mt-2"
          >
            View All
          </Link>
        </div>

        {/* 4 Staggered Scroll-Revealed Shaped Cards with Subtle Frog Watermark */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contributors.map((c, i) => (
            <div
              key={i}
              className={`group card-hover-effect card-interactive bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-[10px] rounded-bl-[10px] overflow-hidden flex flex-col relative transition-all duration-700 ease-out ${
                revealed
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-[0.96]"
              }`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {/* Minimal half-peeking frog silhouette shadow (no features) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-[0.12] group-hover:opacity-[0.22] group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <svg width="56" height="32" viewBox="0 0 80 46" fill="none" className="text-[#175883]">
                  <path
                    d="M40 12C49 12 56 17 59 24C67 27 72 35 70 46H10C8 35 13 27 21 24C24 17 31 12 40 12Z"
                    fill="currentColor"
                  />
                  <circle cx="26" cy="14" r="9" fill="currentColor" />
                  <circle cx="54" cy="14" r="9" fill="currentColor" />
                </svg>
              </div>

              <div className="p-2.5 pt-2.5">
                <div className="relative aspect-[4/3] rounded-tl-[22px] rounded-br-[18px] rounded-tr-[8px] rounded-bl-[8px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 relative z-10">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display font-semibold text-[17px] text-[#383838] truncate group-hover:text-primary transition-colors">
                    {c.name}
                  </span>
                  <span className="shrink-0 bg-[#E53935] text-white font-prose text-[10px] px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {c.tag}
                  </span>
                </div>

                <p className="font-prose text-[13px] text-[#5E5E5E] leading-5 mb-4 flex-1">
                  {c.bio}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <Link
                    href="/contributors"
                    className="font-prose text-[13px] text-primary font-semibold underline underline-offset-2 hover:text-primary-dark"
                  >
                    {c.country}
                  </Link>
                  <Link
                    href="/contributors"
                    aria-label={`View ${c.name}`}
                    className="w-8 h-8 rounded-full bg-[#8ac63c]/20 text-[#8ac63c] group-hover:bg-[#8ac63c] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-2xs"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.25]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
