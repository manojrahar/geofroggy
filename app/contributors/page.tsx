"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";

const initialContributors = [
  {
    id: "1",
    name: "Adam Watts",
    country: "USA",
    tag: "Colors of Kano",
    bio: "Adam is a documentary photographer and cultural archivist focusing on West African craft traditions.",
    avatar: "/website-images/contributor1.png",
    storiesCount: 18,
  },
  {
    id: "2",
    name: "Luca Romano",
    country: "Italy",
    tag: "Mediterranean Roots",
    bio: "Culinary anthropologist exploring ancestral recipes and seasonal food traditions across coastal Italy.",
    avatar: "/website-images/contributor2.png",
    storiesCount: 24,
  },
  {
    id: "3",
    name: "Anaya Patel",
    country: "India",
    tag: "Diwali Jaipur",
    bio: "Cultural journalist capturing living folk traditions, indigenous craft communities, and festival rituals.",
    avatar: "/website-images/contributor3.png",
    storiesCount: 31,
  },
  {
    id: "4",
    name: "Diego Rojas",
    country: "Mexico",
    tag: "Oaxaca Weavers",
    bio: "Writer and educator documenting indigenous Zapotec and Mixtec textile collectives in southern Mexico.",
    avatar: "/website-images/contributor4.png",
    storiesCount: 15,
  },
  {
    id: "5",
    name: "Zanele Khoza",
    country: "South Africa",
    tag: "Zulu Beadwork",
    bio: "Community archivist and regional ambassador curating oral history recordings in KwaZulu-Natal.",
    avatar: "/website-images/contributor1.png",
    storiesCount: 12,
  },
  {
    id: "6",
    name: "Kenji Sato",
    country: "Japan",
    tag: "Kyoto Temple Heritage",
    bio: "Preserving timber joinery and sacred temple festival chronologies through high-resolution photography.",
    avatar: "/website-images/contributor2.png",
    storiesCount: 22,
  },
  {
    id: "7",
    name: "Elena Rostova",
    country: "Finland",
    tag: "Sami Reindeer Culture",
    bio: "Folklore student chronicling Arctic indigenous resilience and seasonal winter migration ceremonies.",
    avatar: "/website-images/contributor3.png",
    storiesCount: 14,
  },
  {
    id: "8",
    name: "Amina Diallo",
    country: "Nigeria",
    tag: "Kano Dyeing",
    bio: "Documentary filmmaker capturing centuries-old indigo dye pit craftsmanship in northern Nigeria.",
    avatar: "/website-images/contributor4.png",
    storiesCount: 27,
  },
];

export default function ContributorsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContributors = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return initialContributors;
    return initialContributors.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Header */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[380px] overflow-hidden">
        <Image
          src="/website-images/slide3-20260213.jpg"
          alt="Geofroggy Contributors"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <p className="text-secondary font-medium text-sm mb-2">
              Meet the Contributors
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-display">
              Geofroggy Contributors
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-prose">
              Ambassadors, staff editors, and community contributors bringing culture to life from every corner of the world.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, country, or bio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-prose"
            />
          </div>
        </div>
      </section>

      {/* 3. Contributor Cards Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredContributors.length === 0 ? (
            <div className="text-center py-16 text-gray-500 font-prose">
              No contributors match your search.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredContributors.map((c) => (
                <div
                  key={c.id}
                  className="group card-hover-effect bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-100 hover:border-secondary/40 cursor-pointer"
                >
                  <div className="p-3 pt-3">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={c.avatar}
                        alt={c.name}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  <div className="p-5 pt-2 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-[17px] text-[#222222] truncate group-hover:text-primary transition-colors">
                        {c.name}
                      </h3>
                      <span className="shrink-0 bg-[#E53935] text-white font-prose text-[10px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap shadow-2xs">
                        🔴 {c.tag}
                      </span>
                    </div>

                    <p className="font-prose text-[13px] text-[#5E5E5E] leading-relaxed mb-4 flex-1 line-clamp-3">
                      {c.bio}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="font-prose text-[13px] font-medium text-primary underline underline-offset-2">
                        {c.country}
                      </span>
                      <span className="font-prose text-[12px] font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                        {c.storiesCount} stories
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
