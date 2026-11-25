import React from "react";
import Image from "next/image";
import FroggyMascot from "@/components/FroggyMascot";

export default function StoriesBeyondBorders() {
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
            <FroggyMascot variant="traveller" size="lg" catchInsect={true} />
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

        {/* Exact 4-Panel Curved Cultural Photo Showcase */}
        <div className="relative w-full max-w-[1200px] mx-auto group">
          <Image
            src="/website-images/Mask-group.png"
            alt="Cultural celebrations from around the world"
            width={1200}
            height={450}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01] drop-shadow-[0_12px_28px_rgba(23,88,131,0.12)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
