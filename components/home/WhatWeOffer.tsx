"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ParallaxAccent from "@/components/ParallaxAccent";

const offers = [
  {
    icon: "/website-images/Frame-20.png",
    hasCircle: true,
    title: "Connect Across Cultures",
    description:
      "Engage with a vibrant global community, exchanging stories and perspectives that help foster understanding and unity.",
  },
  {
    icon: "/website-images/Simplification.png",
    hasCircle: false,
    title: "Discover New Perspectives",
    description:
      "Browse personal narratives, images, and videos that explore the beauty and complexity of our world's cultures.",
  },
  {
    icon: "/website-images/Simplification-1.png",
    hasCircle: false,
    title: "Share Your Story",
    description:
      "Whether it's a travel tale, local tradition, or personal milestone — your story helps us all see the world a little more clearly.",
  },
];

export default function WhatWeOffer() {
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
    <section ref={sectionRef} className="bg-white pb-16 lg:pb-20 pt-12 relative overflow-hidden">
      {/* Geometric star art in top left */}
      <Image
        src="/website-images/abstractart1.png"
        alt=""
        width={194}
        height={182}
        className="absolute -top-6 left-10 pointer-events-none rotate-[-55.39deg]"
      />
      {/* Parallax peeking frog legs in bottom right */}
      <ParallaxAccent
        speed={0.07}
        className="hidden lg:block absolute -bottom-12 right-4 pointer-events-none"
      >
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={165}
          height={167}
          className="rotate-[165deg] opacity-75"
        />
      </ParallaxAccent>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
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
            A home for the stories, voices, and traditions that don&apos;t make the headlines. Follow the cultures that move you, share what your corner of the world looks like, and discover places through the people who actually live there.
          </p>
        </div>

        {/* 3 Staggered Scroll-Revealed Leaf-Bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-out ${
                revealed
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-[0.96]"
              }`}
              style={{ transitionDelay: `${idx * 130}ms` }}
            >
              <div
                className="group relative h-full text-center px-8 py-12 flex flex-col items-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2.5 drop-shadow-[0_8px_18px_rgba(0,0,0,0.14)] hover:drop-shadow-[0_24px_38px_rgba(0,0,0,0.28)]"
                style={{
                  backgroundImage: "url('/website-images/Rectangle-14.svg')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className={`w-18.5 h-18.5 mx-auto mb-5 rounded-full flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-115 group-hover:[transform:rotateY(360deg)_scale(1.15)] ${
                    offer.hasCircle ? "" : "bg-[#8ac63c]/25"
                  }`}
                >
                  <Image
                    src={offer.icon}
                    alt={offer.title}
                    width={offer.hasCircle ? 74 : 36}
                    height={offer.hasCircle ? 74 : 36}
                    className="object-contain transition-transform duration-500 group-hover:rotate-12"
                  />
                </div>

                <h3 className="font-display font-medium text-[22px] text-[#383838] group-hover:text-primary transition-colors mb-3">
                  {offer.title}
                </h3>

                <p className="font-prose text-[16px] text-[#5E5E5E] leading-6.25 text-center">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
