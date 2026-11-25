"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const regions = ["All", "Africa", "Asia", "Europe", "Americas", "Oceania"];
const climates = ["All", "Tropical", "Desert", "Temperate", "Mediterranean", "Polar", "Mountain"];

const populationOptions = [
  { value: "all", label: "Any size", test: () => true },
  { value: "under1m", label: "Under 1M", test: (p: number) => p < 1000000 },
  { value: "1m-10m", label: "1M – 10M", test: (p: number) => p >= 1000000 && p < 10000000 },
  { value: "10m-100m", label: "10M – 100M", test: (p: number) => p >= 10000000 && p < 100000000 },
  { value: "over100m", label: "Over 100M", test: (p: number) => p >= 100000000 },
];

function TwemojiFlag({ code, size = 24 }: { code: string; size?: number }) {
  const n = code?.toUpperCase();
  if (!n || n.length !== 2) return null;
  const i = (127462 + n.charCodeAt(0) - 65).toString(16);
  const l = (127462 + n.charCodeAt(1) - 65).toString(16);
  const s = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${i}-${l}.png`;
  return (
    <img
      src={s}
      alt={n}
      width={size}
      height={size}
      className="rounded-sm inline-block"
      loading="lazy"
    />
  );
}

// Initial country database
const initialCountries = [
  {
    code: "NG",
    name: "Nigeria",
    region: "Africa",
    description: "Vibrant home to Nollywood, Afrobeat rhythms, Kano dye pits, and over 250 diverse ethnic traditions.",
    posts_count: 24,
    languages: ["English", "Yoruba", "Hausa", "Igbo"],
    population: 218541000,
    climate: "Tropical",
    image: "/website-images/contributor1.png",
  },
  {
    code: "JP",
    name: "Japan",
    region: "Asia",
    description: "Harmonious balance of ancient Shinto shrines, Zen gardens, tea ceremonies, and futuristic innovation.",
    posts_count: 38,
    languages: ["Japanese"],
    population: 125120000,
    climate: "Temperate",
    image: "/website-images/kyoto.png",
  },
  {
    code: "BR",
    name: "Brazil",
    region: "Americas",
    description: "Land of samba, Amazonian biodiversity, world-famous Rio Carnival, and rich regional culinary heritage.",
    posts_count: 31,
    languages: ["Portuguese"],
    population: 214300000,
    climate: "Tropical",
    image: "/website-images/carnival.png",
  },
  {
    code: "IN",
    name: "India",
    region: "Asia",
    description: "Subcontinent of ancient philosophical roots, dazzling festivals like Diwali, and vibrant cultural diversity.",
    posts_count: 52,
    languages: ["Hindi", "English", "Bengali"],
    population: 1417000000,
    climate: "Tropical",
    image: "/website-images/diwali.png",
  },
  {
    code: "IT",
    name: "Italy",
    region: "Europe",
    description: "Cradle of Renaissance art, timeless Roman ruins, coastal culinary traditions, and passionate local heritage.",
    posts_count: 27,
    languages: ["Italian"],
    population: 58850000,
    climate: "Mediterranean",
    image: "/website-images/contributor2.png",
  },
  {
    code: "KE",
    name: "Kenya",
    region: "Africa",
    description: "Majestic Great Rift Valley, Swahili coastal poetry, Maasai beadwork, and world-class athletic heritage.",
    posts_count: 19,
    languages: ["Swahili", "English"],
    population: 54030000,
    climate: "Tropical",
    image: "/website-images/geo_1.png",
  },
  {
    code: "MX",
    name: "Mexico",
    region: "Americas",
    description: "Color-drenched Día de los Muertos, ancient Mayan pyramids, artisanal textiles, and UNESCO gastronomy.",
    posts_count: 29,
    languages: ["Spanish", "Nahuatl"],
    population: 128500000,
    climate: "Tropical",
    image: "/website-images/hero/dia_de_los_muertos_mexico.png",
  },
  {
    code: "FI",
    name: "Finland",
    region: "Europe",
    description: "Lapland aurora borealis, sauna culture, serene thousand lakes, and innovative sustainable Nordic living.",
    posts_count: 14,
    languages: ["Finnish", "Swedish"],
    population: 5541000,
    climate: "Polar",
    image: "/website-images/geo_2.png",
  },
  {
    code: "MA",
    name: "Morocco",
    region: "Africa",
    description: "Intricate mosaic zellige tilework, bustling historic medinas, aromatic tagines, and Atlas mountain valleys.",
    posts_count: 22,
    languages: ["Arabic", "Berber", "French"],
    population: 37460000,
    climate: "Mediterranean",
    image: "/website-images/geo_3.png",
  },
  {
    code: "ET",
    name: "Ethiopia",
    region: "Africa",
    description: "Birthplace of coffee, rock-hewn churches of Lalibela, vibrant Timkat celebrations, and ancient script.",
    posts_count: 16,
    languages: ["Amharic", "Oromo"],
    population: 123400000,
    climate: "Mountain",
    image: "/website-images/hero/timkat_ethiopia.png",
  },
  {
    code: "AU",
    name: "Australia",
    region: "Oceania",
    description: "65,000 years of Indigenous First Nations songlines, red desert outback, and the Great Barrier Reef.",
    posts_count: 18,
    languages: ["English"],
    population: 26000000,
    climate: "Temperate",
    image: "/website-images/geo_4.png",
  },
  {
    code: "PE",
    name: "Peru",
    region: "Americas",
    description: "Ancient Incan citadel of Machu Picchu, vibrant Andean weaving, ceviche gastronomy, and Amazon rainforest.",
    posts_count: 21,
    languages: ["Spanish", "Quechua", "Aymara"],
    population: 34000000,
    climate: "Mountain",
    image: "/website-images/Rectangle-86.jpg",
  },
];

export default function ExplorePage() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedPopulation, setSelectedPopulation] = useState("all");
  const [selectedClimate, setSelectedClimate] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  // Derive unique languages
  const allLanguages = useMemo(() => {
    const set = new Set<string>();
    initialCountries.forEach((c) => c.languages.forEach((l) => set.add(l)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const popTest = populationOptions.find((p) => p.value === selectedPopulation)?.test || (() => true);

  // Filter countries
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return initialCountries.filter((c) => {
      const matchRegion = selectedRegion === "All" || c.region === selectedRegion;
      const matchSearch = !q || c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      const matchLanguage = selectedLanguage === "All" || c.languages.includes(selectedLanguage);
      const matchPop = popTest(c.population);
      const matchClimate = selectedClimate === "All" || c.climate === selectedClimate;
      return matchRegion && matchSearch && matchLanguage && matchPop && matchClimate;
    });
  }, [selectedRegion, searchQuery, selectedLanguage, selectedPopulation, selectedClimate, popTest]);

  const displayed = filteredCountries.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedRegion("All");
    setSelectedLanguage("All");
    setSelectedPopulation("all");
    setSelectedClimate("All");
    setSearchQuery("");
    setVisibleCount(12);
  };

  const hasActiveFilters =
    selectedRegion !== "All" ||
    selectedLanguage !== "All" ||
    selectedPopulation !== "all" ||
    selectedClimate !== "All" ||
    Boolean(searchQuery);

  return (
    <div className="overflow-hidden min-h-screen bg-gray-50">
      {/* 1. Hero Header */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
        <Image
          src="/website-images/slide3-20260213.jpg"
          alt="Explore the World"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <p className="text-secondary font-medium text-sm mb-2">
              Global Explorer
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-display">
              Explore the World by Country
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-prose">
              Every country has its own heartbeat — a blend of people, culture, landscapes, and traditions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Region Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setSelectedRegion(r);
                    setVisibleCount(12);
                  }}
                  className={`px-5 py-2 rounded-full text-[14px] font-display font-semibold transition-all shadow-2xs transform active:scale-95 ${
                    selectedRegion === r
                      ? "bg-primary text-white shadow-md scale-102"
                      : "bg-white text-gray-700 border border-gray-200/80 hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Filter Selects */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-end mt-4">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-xs uppercase tracking-wide text-gray-500">Language</span>
              <select
                value={selectedLanguage}
                onChange={(e) => {
                  setSelectedLanguage(e.target.value);
                  setVisibleCount(12);
                }}
                className="h-9 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {allLanguages.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-xs uppercase tracking-wide text-gray-500">Population</span>
              <select
                value={selectedPopulation}
                onChange={(e) => {
                  setSelectedPopulation(e.target.value);
                  setVisibleCount(12);
                }}
                className="h-9 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {populationOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-xs uppercase tracking-wide text-gray-500">Climate</span>
              <select
                value={selectedClimate}
                onChange={(e) => {
                  setSelectedClimate(e.target.value);
                  setVisibleCount(12);
                }}
                className="h-9 rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {climates.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-sm text-primary hover:underline font-medium ml-2"
              >
                Reset filters
              </button>
            )}
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            Showing {displayed.length} of {filteredCountries.length} countries
          </p>
        </div>
      </section>

      {/* 3. Country Cards Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayed.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No countries match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayed.map((country) => (
                <div
                  key={country.code}
                  className="group card-hover-effect bg-white rounded-2xl overflow-hidden border border-gray-100/90 hover:border-secondary/40 flex flex-col hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 z-10 border border-gray-100">
                      <TwemojiFlag code={country.code} size={16} />
                      <span className="text-[11px] font-bold text-gray-700">{country.code}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TwemojiFlag code={country.code} size={22} />
                        <h3 className="font-display font-semibold text-[18px] text-[#1F1F1F] group-hover:text-primary transition-colors">
                          {country.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-secondary uppercase bg-secondary/10 px-2.5 py-0.5 rounded-full">
                        {country.region}
                      </span>
                    </div>

                    <p className="font-prose text-[13px] text-[#5E5E5E] leading-relaxed mb-4 flex-1 line-clamp-3">
                      {country.description}
                    </p>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="font-prose">{country.posts_count} stories shared</span>
                      <span className="text-primary font-semibold group-hover:text-secondary group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                        Explore stories →
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
