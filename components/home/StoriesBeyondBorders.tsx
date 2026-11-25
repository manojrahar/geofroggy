import React from "react";
import Image from "next/image";
import FroggyMascot from "@/components/FroggyMascot";

export default function StoriesBeyondBorders() {
  const photos = [
    { src: "/website-images/geo_1.png", alt: "Cultural celebration 1" },
    { src: "/website-images/geo_2.png", alt: "Cultural celebration 2" },
    { src: "/website-images/geo_3.png", alt: "Cultural celebration 3" },
    { src: "/website-images/geo_4.png", alt: "Cultural celebration 4" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden relative">
      {/* Abstract art in top left corner */}
      <Image
        src="/website-images/abstractart2.png"
        alt=""
        width={184}
        height={186}
        className="absolute -top-16 left-2 pointer-events-none rotate-[-1.39deg]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="relative inline-flex items-center gap-3 mb-1">
            <FroggyMascot size="sm" />
            <span className="font-display font-semibold text-[36px] sm:text-[44px] text-secondary leading-tight">
              Geofroggy
            </span>
          </div>
          <h2 className="font-display font-semibold text-[36px] sm:text-[44px] text-brand-text leading-tight">
            Stories Beyond Borders
          </h2>
          <div className="flex justify-center mt-2 mb-8">
            <Image
              src="/website-images/moreimages/Vector-1.svg"
              alt=""
              width={220}
              height={10}
            />
          </div>
        </div>

        {/* Narrative Prose */}
        <div className="max-w-250 mx-auto text-center mb-10">
          <p className="font-prose text-[18px] text-[#4B4B4B] leading-8">
            At Geofroggy, we believe that geography is more than coordinates on a map — it's the heartbeat of human connection. Every village, city, mountain, and street carries a story. Every tradition, festival, and encounter becomes part of a much larger tapestry that binds us together across cultures.
          </p>
          <p className="font-prose text-[18px] text-[#4B4B4B] leading-8 mt-4">
            Our platform is built to bring those stories to life. Whether you're sharing childhood memories from a rural town or exploring the vibrancy of a bustling metropolis, your voice contributes to a global archive of human experience. By weaving your narratives into our shared landscape, we create a deeper, richer understanding of the world we live in.
          </p>
        </div>

        {/* Highlighted Quote Box */}
        <div className="max-w-197.25 mx-auto border border-dashed border-secondary/60 rounded-[12px] bg-[#DEECF5]/90 relative overflow-hidden mb-14 card-shadow hover:shadow-md transition-shadow">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary rounded-l-[12px]" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
            <Image
              src="/website-images/Frog.png"
              alt=""
              width={64}
              height={64}
            />
          </div>
          <blockquote className="px-8 py-6 pl-10 pr-24 font-quote font-bold text-[18px] text-primary leading-7.25">
            To unite people by celebrating the diversity of our planet — through personal stories, cultural insight, and a shared sense of belonging.
          </blockquote>
        </div>

        {/* 4 Cultural Photo Cards with Arched Tops */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="card-hover-effect relative aspect-[3/4] rounded-t-[100px] rounded-b-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
