"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { playClickPop } from "@/lib/soundEffects";

const contributors = [
  {
    name: "Adam Watts",
    country: "USA",
    image: "/website-images/contributor1.png",
    tag: "Street Jazz",
    bio: "Capturing vibrant neighborhood music traditions and oral histories across New Orleans.",
    initialLikes: 42,
  },
  {
    name: "Luca Romano",
    country: "Italy",
    image: "/website-images/contributor2.png",
    tag: "Artisan Craft",
    bio: "Documenting family-run ceramic workshops and coastal culinary rituals in southern Italy.",
    initialLikes: 58,
  },
  {
    name: "Anaya Patel",
    country: "India",
    image: "/website-images/contributor3.png",
    tag: "Festival Lights",
    bio: "Visual storyteller preserving regional folk dances, textiles, and Diwali traditions.",
    initialLikes: 74,
  },
  {
    name: "Diego Rojas",
    country: "Mexico",
    image: "/website-images/contributor4.png",
    tag: "Heritage Art",
    bio: "Photographer celebrating Indigenous markets, marigold altars, and community murals.",
    initialLikes: 63,
  },
];

export default function ContributorsShowcase() {
  const [likes, setLikes] = useState<number[]>(contributors.map((c) => c.initialLikes));
  const [liked, setLiked] = useState<boolean[]>(contributors.map(() => false));

  const toggleLike = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playClickPop();
    setLiked((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
    setLikes((prev) => {
      const next = [...prev];
      next[idx] = liked[idx] ? next[idx] - 1 : next[idx] + 1;
      return next;
    });
  };

  return (
    <section className="py-16 relative overflow-hidden green-patch-bg border-b border-secondary/15">
      {/* Subtle frog pattern backdrop */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <Image
          src="/website-images/contributor-bgpattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="animate-btn-shake shrink-0 bg-secondary hover:bg-secondary-dark text-white font-display font-semibold text-[15px] px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mt-2"
          >
            View All
          </Link>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contributors.map((c, i) => (
            <div
              key={i}
              className="group card-hover-effect card-interactive bg-white rounded-[16px] overflow-hidden flex flex-col"
            >
              <div className="p-2.5 pt-2.5">
                <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  {/* Interactive Applaud / Like Pill */}
                  <button
                    type="button"
                    onClick={(e) => toggleLike(i, e)}
                    aria-label={`Applaud ${c.name}`}
                    className={`absolute top-2.5 right-2.5 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-display font-semibold shadow-md transition-all duration-200 active:scale-90 ${
                      liked[i]
                        ? "bg-rose-500 text-white scale-105"
                        : "bg-white/90 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-transform ${
                        liked[i] ? "fill-white scale-110" : "text-rose-500"
                      }`}
                    />
                    {likes[i]}
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display font-semibold text-[17px] text-[#383838] truncate group-hover:text-primary transition-colors">
                    {c.name}
                  </span>
                  <span className="shrink-0 bg-primary/10 text-primary font-prose text-[11px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {c.tag}
                  </span>
                </div>

                <p className="font-prose text-[13px] text-[#5E5E5E] leading-5 mb-3 flex-1">
                  {c.bio}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <Link
                    href="/contributors"
                    className="font-prose text-[13px] text-primary font-semibold hover:underline underline-offset-2"
                  >
                    {c.country}
                  </Link>
                  <Link
                    href="/contributors"
                    aria-label={`View ${c.name}`}
                    className="w-8 h-8 rounded-full bg-secondary/20 group-hover:bg-secondary group-hover:text-white flex items-center justify-center text-secondary transition-all duration-300 transform group-hover:rotate-45"
                  >
                    <ArrowUpRight className="w-4 h-4" />
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
