import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart, Globe, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "About Us - GeoFroggy",
  description:
    "Behind the Frog: The Heart of Geofroggy. Celebrating cultures, connecting people, one story at a time.",
};

const stats = [
  { value: "74+", label: "Countries Represented" },
  { value: "12,000+", label: "Stories Shared" },
  { value: "250+", label: "Cultural Traditions" },
  { value: "30+", label: "Languages Spoken" },
  { value: "400+", label: "Global Collaborations" },
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Header */}
      <section className="relative w-full h-[280px] sm:h-[320px] lg:h-[351px] overflow-hidden">
        <Image
          src="/website-images/Rectangle-86.jpg"
          alt="Geofroggy Community"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[24px] sm:text-[28px] lg:text-[32px] px-12 py-1 leading-tight mb-2">
            Behind the Frog
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">
            The Heart of Geofroggy
          </h1>
        </div>
      </section>

      {/* 2. Our Philosophy: Geography as Story */}
      <section className="relative bg-white overflow-hidden py-16 lg:py-20">
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={184}
          height={186}
          className="absolute -top-16 left-2 pointer-events-none rotate-[-1.39deg]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
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

            <div className="mt-6 font-prose text-[18px] text-[#5E5E5E] leading-8 max-w-250 mx-auto space-y-4">
              <p>
                We look beyond coordinates on a map. To us, geography is the living mosaic of everyday life — from the aroma of spiced tea in Moroccan souks to midwinter lantern light across Finnish lakes.
              </p>
              <p>
                Every culture holds answers to how humans create beauty, build solidarity, and endure adversity. When we share our stories, we make the globe smaller, kinder, and infinitely more fascinating.
              </p>
            </div>
          </div>

          {/* 4 Cultural Vignettes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            {[
              { src: "/website-images/culture_about_1.png", title: "Folklore & Wisdom" },
              { src: "/website-images/culture_about_2.png", title: "Shared Celebrations" },
              { src: "/website-images/culture_about_3.png", title: "Culinary Heritage" },
              { src: "/website-images/culture_about_1.png", title: "Generational Crafts" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-secondary/40 card-shadow mb-3 group-hover:border-secondary transition-all duration-300 transform group-hover:scale-105">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-display font-semibold text-[16px] text-[#383838] group-hover:text-primary transition-colors">
                  {c.title}
                </h4>
              </div>
            ))}
          </div>

          {/* 5 Live Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 border-t border-gray-100 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-gray-100 card-hover-effect">
                <div className="font-display font-bold text-[32px] sm:text-[40px] text-primary">
                  {s.value}
                </div>
                <div className="font-prose text-[13px] text-[#6E6E6E] mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Contributor Testimonial */}
      <section className="relative py-16 lg:py-20 bg-[#F9FAFB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
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

            <div className="mt-6 font-prose text-[18px] text-[#5E5E5E] leading-8 max-w-250 mx-auto space-y-4">
              <p>
                We dream of a world where borders don't divide — they inspire conversation. Where learning about another culture is just a scroll away. Our vision is a global tapestry stitched together with authentic voices from all walks of life.
              </p>
            </div>
          </div>

          {/* Featured Quote with Big Quotation Mark */}
          <div className="max-w-250 mx-auto mt-10 bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 card-hover-effect flex items-start gap-4">
            <span
              aria-hidden="true"
              className="font-display font-bold text-secondary text-[64px] leading-none select-none flex-shrink-0"
            >
              “
            </span>
            <div>
              <p className="font-prose font-medium italic text-[18px] text-[#383838] leading-8">
                “Geofroggy helped me rediscover the stories of my hometown — and connect with people who've never even heard of it. It reminded me that every place has a voice, and every voice deserves to be heard.”
              </p>
              <p className="font-script text-[28px] text-primary mt-4">
                A Geofroggy Contributor from Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why We Exist: Group Photo & Core Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-hover-effect">
              <Image
                src="/website-images/Rectangle-86-1.jpg"
                alt="Our Global Community"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display font-semibold text-[32px] sm:text-[38px] text-[#383838] leading-tight mb-4">
                Why We Exist
              </h2>
              <p className="font-prose text-[16px] text-[#5E5E5E] leading-7 mb-8">
                In an era of hyper-connected algorithms that often isolate us in filter bubbles, Geofroggy offers an open window to authentic human culture. We celebrate nuance, local pride, and genuine human kinship.
              </p>

              <div className="space-y-5">
                {values.map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1 text-secondary">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-[17px] text-[#1F1F1F]">
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

      {/* 5. Movement Banner CTA */}
      <section className="bg-secondary py-18 px-4 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display font-semibold text-[34px] sm:text-[42px] mb-3 leading-tight drop-shadow-sm">
            Join Our Global Movement
          </h2>
          <p className="font-prose text-[17px] text-white/95 mb-8 max-w-xl mx-auto leading-relaxed">
            Become a part of the world's most vibrant archive of living human culture.
          </p>
          <Link
            href="/signup"
            className="animate-btn-shake inline-block bg-primary hover:bg-primary-dark text-white font-display font-semibold text-[16px] px-10 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
}
