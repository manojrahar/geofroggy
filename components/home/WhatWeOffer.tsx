import React from "react";
import Image from "next/image";

export default function WhatWeOffer() {
  const pillars = [
    {
      title: "Connect Across Cultures",
      description:
        "Engage with a vibrant global community, exchanging stories and perspectives that help foster understanding and unity.",
      icon: "/website-images/globeicon.png",
      alt: "Connect icon",
    },
    {
      title: "Discover New Perspectives",
      description:
        "Browse personal narratives, images, and videos that explore the beauty and complexity of our world's cultures.",
      icon: "/website-images/green_globe.png",
      alt: "Discover icon",
    },
    {
      title: "Share Your Story",
      description:
        "Whether it's a travel tale, local tradition, or personal milestone — your story helps us all see the world a little more clearly.",
      icon: "/website-images/froggy-icon.png",
      alt: "Share story icon",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-gray-50/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-3">
          What We Offer
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed mb-12">
          A home for the stories, voices, and traditions that don&apos;t make the headlines. Follow
          the cultures that move you, share what your corner of the world looks like, and discover
          places through the people who actually live there.
        </p>

        {/* 3 Organic Leaf-bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="leaf-border-card p-8 flex flex-col items-center text-center group"
            >
              {/* Circular Soft Green Icon Emblem */}
              <div className="w-16 h-16 rounded-full bg-[#EFF7E3] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={pillar.icon}
                  alt={pillar.alt}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-[#1F1F1F] mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4B4B4B] font-body leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
