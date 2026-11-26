"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { playSuccessChime } from "@/lib/soundEffects";

const offers = [
  {
    icon: "/website-images/globeicon.png",
    title: "Connect Across Cultures",
    description:
      "Engage with a vibrant global community, exchanging stories and perspectives that help foster understanding and unity.",
    actionLabel: "Meet Contributors",
    actionHref: "/contributors",
    tag: "Community",
  },
  {
    icon: "/website-images/Flags.png",
    title: "Discover New Perspectives",
    description:
      "Browse personal narratives, images, and videos that explore the beauty and complexity of our world's cultures.",
    actionLabel: "Explore Countries",
    actionHref: "/explore",
    tag: "195+ Cultures",
  },
  {
    icon: "/website-images/Chat.png",
    title: "Share Your Story",
    description:
      "Whether it's a travel tale, local tradition, or personal milestone — your story helps us all see the world a little more clearly.",
    actionLabel: "Submit a Story",
    actionHref: "/submit-story",
    tag: "Your Voice",
  },
];

export default function WhatWeOffer() {
  const [activeIdx, setActiveIdx] = useState<number>(1);

  return (
    <section className="green-patch-bg pb-16 lg:pb-20 pt-12 relative overflow-hidden border-y border-secondary/15">
      {/* Subtle green globe watermark */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/website-images/green-splotch.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Abstract art in top left */}
      <Image
        src="/website-images/abstractart1.png"
        alt=""
        width={194}
        height={182}
        className="absolute -top-6 left-10 pointer-events-none rotate-[-55.39deg]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="font-display font-semibold text-[36px] sm:text-[44px] text-[#383838]">
            What We Offer
          </h2>
          <div className="flex justify-center mt-2 mb-4">
            <Image
              src="/website-images/moreimages/Vector-2.svg"
              alt=""
              width={160}
              height={12}
            />
          </div>
          <p className="font-prose text-[16px] text-[#5E5E5E] max-w-179.5 mx-auto leading-6.25">
            A home for the stories, voices, and traditions that don&apos;t make the headlines. Click any card below to preview and jump right in.
          </p>
        </div>

        {/* 3 Interactive Leaf Border Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActiveIdx(idx);
                  playSuccessChime();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(idx);
                    playSuccessChime();
                  }
                }}
                className={`group card-hover-effect card-interactive relative text-center px-8 py-10 flex flex-col items-center rounded-[18px] bg-white cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "ring-4 ring-secondary/35 -translate-y-1.5"
                    : ""
                }`}
                style={{
                  backgroundImage: "url('/website-images/Rectangle-14.svg')",
                  backgroundSize: "100% 100%",
                }}
              >
                <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-primary/10 text-primary font-display text-[11px] font-semibold mb-4">
                  <Sparkles className="w-3 h-3 text-secondary" />
                  {offer.tag}
                </span>

                <div className="w-18.5 h-18.5 mx-auto mb-5 rounded-full bg-secondary/40 flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:bg-secondary/65 group-hover:rotate-6">
                  <Image
                    src={offer.icon}
                    alt=""
                    width={34}
                    height={34}
                    className="object-contain transition-transform duration-300"
                  />
                </div>

                <h3 className="font-display font-semibold text-[22px] text-[#383838] group-hover:text-primary transition-colors mb-3">
                  {offer.title}
                </h3>

                <p className="font-prose text-[15.5px] text-[#5E5E5E] leading-6.25 text-center mb-5 flex-1">
                  {offer.description}
                </p>

                <Link
                  href={offer.actionHref}
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-display text-[13.5px] font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-secondary text-white shadow-md scale-105"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  {offer.actionLabel}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
