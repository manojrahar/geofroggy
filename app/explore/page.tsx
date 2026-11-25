"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "Africa", "Asia", "Europe", "Americas", "Oceania"];

  const countries = [
    {
      name: "Japan",
      region: "Asia",
      flag: "🇯🇵",
      tradition: "Hanami Cherry Blossom Festival",
      stories: 84,
      image: "/website-images/hero/chinese_new_year.png",
    },
    {
      name: "Kenya",
      region: "Africa",
      flag: "🇰🇪",
      tradition: "Maasai Rites of Passage",
      stories: 52,
      image: "/website-images/geo_1.png",
    },
    {
      name: "Mexico",
      region: "Americas",
      flag: "🇲🇽",
      tradition: "Día de los Muertos Altars",
      stories: 96,
      image: "/website-images/hero/dia_de_los_muertos_mexico.png",
    },
    {
      name: "India",
      region: "Asia",
      flag: "🇮🇳",
      tradition: "Diwali Festivals of Light",
      stories: 142,
      image: "/website-images/hero/diwali_india.png",
    },
    {
      name: "Italy",
      region: "Europe",
      flag: "🇮🇹",
      tradition: "Venetian Masked Carnivals",
      stories: 68,
      image: "/website-images/geo_3.png",
    },
    {
      name: "Brazil",
      region: "Americas",
      flag: "🇧🇷",
      tradition: "Samba & Street Pageantry",
      stories: 110,
      image: "/website-images/hero/mardi_gras.png",
    },
    {
      name: "Ethiopia",
      region: "Africa",
      flag: "🇪🇹",
      tradition: "Timkat Epiphany Processions",
      stories: 45,
      image: "/website-images/hero/timkat_ethiopia.png",
    },
    {
      name: "Morocco",
      region: "Africa",
      flag: "🇲🇦",
      tradition: "Medina Spice & Artisan Guilds",
      stories: 61,
      image: "/website-images/geo_4.png",
    },
    {
      name: "New Zealand",
      region: "Oceania",
      flag: "🇳🇿",
      tradition: "Māori Haka & Whānau Heritage",
      stories: 38,
      image: "/website-images/geo_2.png",
    },
  ];

  const filtered = countries.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.tradition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All" || c.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/website-images/culture.png"
          alt="World explorer taking selfie with family"
          fill
          className="object-cover object-center brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1 rounded-full uppercase tracking-wider mb-4 font-display">
            Global Explorer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight drop-shadow-md mb-3">
            Explore the World by Country
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-body max-w-2xl mx-auto">
            Every country has its own heartbeat — a blend of people, culture, landscapes, and
            traditions.
          </p>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="w-full py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm focus:outline-none focus:border-[#8AC63C] shadow-2xs"
              />
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedRegion === region
                      ? "bg-[#175883] text-white shadow-xs"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#8AC63C]"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Country Cards Grid */}
      <section className="w-full py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((country, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold shadow-xs">
                    {country.flag} {country.name}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#8AC63C] uppercase tracking-wider">
                      {country.region}
                    </span>
                    <h3 className="font-bold text-base font-display text-[#1F1F1F] mt-1 mb-2">
                      {country.tradition}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
                    <span>{country.stories} stories documented</span>
                    <Link
                      href="/submit-story"
                      className="font-semibold text-[#175883] hover:text-[#8AC63C] hover:underline transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400 font-body">
              No countries match your search. Try another region or keyword.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
