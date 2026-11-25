"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bookmark, Calendar } from "lucide-react";
import { playClickPop } from "@/lib/soundEffects";

const events = [
  {
    id: 1,
    headline: "Diwali Lights Up the Streets of Jaipur",
    summary:
      "Thousands gather across the Pink City with earthen oil lamps, creating an ocean of light celebrating the victory of good over evil.",
    feature_image: "/website-images/diwali.png",
    region: "INDIA",
    event_date: "Nov 12, 2026",
    destination_url: "/explore",
  },
  {
    id: 2,
    headline: "Rio Carnival Ignites the Sambadrome",
    summary:
      "Vibrant samba schools present months of elaborate craftsmanship, rhythm, and passion in the world's most electrifying street celebration.",
    feature_image: "/website-images/carnival.png",
    region: "BRAZIL",
    event_date: "Feb 17, 2026",
    destination_url: "/explore",
  },
  {
    id: 3,
    headline: "Kyoto Autumn Foliage Illumination",
    summary:
      "Ancient maple gardens surrounding historic wooden temples burst into crimson and gold under delicate night-time lantern glows.",
    feature_image: "/website-images/kyoto.png",
    region: "JAPAN",
    event_date: "Nov 25, 2026",
    destination_url: "/explore",
  },
];

const regions = ["ALL", "INDIA", "BRAZIL", "JAPAN"];

export default function AroundTheWorldSection() {
  const [selectedRegion, setSelectedRegion] = useState("ALL");
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const visibleEvents =
    selectedRegion === "ALL"
      ? events
      : events.filter((e) => e.region === selectedRegion);

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playClickPop();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-[#f8fbff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display font-medium text-[28px] text-secondary">
                This Week
              </span>
            </div>

            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
              Around the World This Week
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

          {/* Interactive Region Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setSelectedRegion(r)}
                className={`px-4 py-1.5 rounded-full font-display text-[13px] font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                  selectedRegion === r
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-white text-[#383838] border border-primary/20 hover:border-secondary hover:text-primary"
                }`}
              >
                {r === "ALL" ? "All Regions" : r}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleEvents.map((e) => {
            const isSaved = savedIds.includes(e.id);
            return (
              <Link
                key={e.id}
                href={e.destination_url}
                className="card-hover-effect card-interactive relative rounded-[16px] overflow-hidden group block bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={e.feature_image}
                    alt={e.headline}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <button
                    type="button"
                    onClick={(ev) => toggleSave(e.id, ev)}
                    aria-label="Bookmark event"
                    className={`absolute top-3 right-3 z-20 p-2 rounded-full shadow-md transition-all duration-200 active:scale-90 ${
                      isSaved
                        ? "bg-secondary text-white scale-110"
                        : "bg-white/90 text-primary hover:bg-white"
                    }`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${isSaved ? "fill-white" : ""}`}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2 text-[12px] text-[#6E6E6E] font-prose">
                    <span className="uppercase tracking-wide font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                      {e.region}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {e.event_date}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-[20px] text-[#1F1F1F] leading-snug mb-2 group-hover:text-primary transition-colors">
                    {e.headline}
                  </h3>

                  <p className="font-prose text-[14px] text-[#4B4B4B] leading-[22px] line-clamp-3">
                    {e.summary}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-secondary font-display font-semibold text-[13.5px] group-hover:text-primary transition-colors">
                    Read more{" "}
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
