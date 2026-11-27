import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, TrendingUp, Flame, Calendar, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "News & Community Dispatches - GeoFroggy",
  description:
    "Platform news, cultural spotlights, viral stories, and community highlights from across the globe.",
};

const platformNews = [
  {
    title: "Global Story Map Now Live",
    description:
      "Explore stories across the globe using our new interactive map. Search by country, cultural tag, or contributor — and watch the world come to life.",
    tag: "FEATURE",
    date: "Nov 20, 2026",
    image: "/website-images/news_card1.png",
  },
  {
    title: "Audio Narration Launch",
    description:
      "You can now listen to stories in their original language or translated audio. Available in 20+ languages, with more coming soon.",
    tag: "AUDIO",
    date: "Nov 15, 2026",
    image: "/website-images/news_card2.png",
  },
  {
    title: "Cultural Documentation Grants",
    description:
      "Announcing micro-grants for local cultural storytellers documenting endangered indigenous traditions in South America and West Africa.",
    tag: "GRANTS",
    date: "Nov 08, 2026",
    image: "/website-images/news_card3.png",
  },
  {
    title: "Community Milestone: 12,000 Stories",
    description:
      "Over 12,000 stories across 74 countries are now archived on Geofroggy, celebrating our shared human heritage.",
    tag: "MILESTONE",
    date: "Nov 01, 2026",
    image: "/website-images/platform_4.png",
  },
];

const spotlights = [
  {
    title: "Lunar New Year Across the Global Diaspora",
    excerpt:
      "From San Francisco's Chinatown to Singapore's River Hongbao, discover how generational families keep ancient reunion dinners alive.",
    image: "/website-images/hero/chinese_new_year.png",
    region: "EAST ASIA & DIASPORA",
    readTime: "6 min read",
  },
  {
    title: "Indigenous Language Revival in the High Andes",
    excerpt:
      "How youth in Peru and Bolivia are pairing modern hip-hop with Quechua and Aymara dialects to inspire language preservation.",
    image: "/website-images/hero/dia_de_los_muertos_mexico.png",
    region: "SOUTH AMERICA",
    readTime: "8 min read",
  },
  {
    title: "Diaspora Dialogues: Memory, Food, and Home",
    excerpt:
      "Third-generation culinary storytellers reconstruct ancestral recipes that traveled across oceans during major migration waves.",
    image: "/website-images/hero/timkat_ethiopia.png",
    region: "GLOBAL VOICES",
    readTime: "5 min read",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Banner */}
      <section className="relative w-full h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
        <Image
          src="/website-images/Rectangle-86.jpg"
          alt="News & Dispatches"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[22px] sm:text-[26px] lg:text-[30px] px-12 py-1 leading-tight mb-2">
            Geography Through Human Story
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">
            News & Platform Dispatches
          </h1>
        </div>
      </section>

      {/* 2. Platform News & Updates (4 Cards) */}
      <section className="relative overflow-hidden green-patch-bg py-16 lg:py-20 border-b border-secondary/15">
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={184}
          height={186}
          className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg] select-none"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center lg:mb-12">
            <h2 className="font-display text-[36px] font-semibold leading-tight text-[#383838] lg:text-[40px]">
              Platform News & Updates
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>
            <p className="mx-auto mt-6 max-w-[924px] font-prose text-[16px] leading-[30px] text-[#5E5E5E]">
              Stay informed about what’s happening at Geofroggy — from exciting new features and rollouts to community growth and platform milestones. We’re always evolving to help you connect through culture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformNews.map((news, i) => (
              <article
                key={i}
                className="group card-hover-effect flex flex-col overflow-hidden rounded-[12px] bg-white border border-gray-100 hover:border-secondary/40"
              >
                <div className="px-[10px] pt-3">
                  <div className="relative aspect-[16/9] rounded-[8px] overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-[15px] pt-4 pb-5">
                  <div className="flex items-center justify-between mb-2 text-[11px] font-prose text-[#8A8A8A]">
                    <span className="font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">{news.tag}</span>
                    <span>{news.date}</span>
                  </div>
                  <h3 className="mb-2 font-display text-[18px] font-semibold leading-tight text-[#383838] group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="font-prose text-[13px] leading-[20px] text-[#5E5E5E]">
                    {news.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inside Geofroggy: What’s Buzzing (Split Layout) */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display text-[28px] font-medium text-secondary">
                Inside Geofroggy
              </span>
            </div>
            <h2 className="mt-2 font-display text-[36px] font-semibold leading-tight text-[#383838] lg:text-[40px]">
              What’s Buzzing on Geofroggy
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>
            <p className="mx-auto mt-6 max-w-[924px] font-prose text-[16px] leading-[30px] text-[#5E5E5E]">
              Discover trending cultural moments, viral stories, and community reactions that are lighting up the Geofroggy platform right now.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Buzz 1: Yangon Street Art */}
            <article
              className="group card-hover-effect flex flex-col sm:flex-row overflow-hidden rounded-[14px] bg-white border border-gray-100 hover:border-secondary/40"
            >
              <div className="relative aspect-[248/329] sm:w-[248px] sm:flex-shrink-0 sm:m-[7px] sm:rounded-[10px] sm:overflow-hidden">
                <Image
                  src="/website-images/buzzing_1.png"
                  alt="Street Art as Resistance in Myanmar"
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:py-6 sm:pr-6 sm:pl-4">
                <div className="mb-3 flex items-center gap-2">
                  <Image
                    src="/website-images/3d-fire.png"
                    alt=""
                    width={26}
                    height={26}
                  />
                  <span className="font-display text-[18px] font-medium leading-tight text-[#383838]">
                    Most Viewed Story This Week
                  </span>
                </div>
                <h3 className="mb-3 font-display text-[18px] font-semibold leading-tight text-[#383838] group-hover:text-primary transition-colors">
                  Street Art as Resistance in Myanmar
                </h3>
                <p className="mb-4 font-prose text-[13px] leading-[20px] text-[#5E5E5E]">
                  A contributor’s photo essay from Yangon has become the most-read story of the week — sparking global discussions on youth expression, resilience, and creative cultural protest.
                </p>
                <p className="mt-auto font-prose text-[12px] text-[#8A8A8A]">
                  📈 12,400 views &nbsp;|&nbsp; 💬 130 comments
                </p>
              </div>
            </article>

            {/* Buzz 2: Migration Diaries */}
            <article
              className="group card-hover-effect flex flex-col sm:flex-row overflow-hidden rounded-[14px] bg-white border border-gray-100 hover:border-secondary/40"
            >
              <div className="relative aspect-[248/329] sm:w-[248px] sm:flex-shrink-0 sm:m-[7px] sm:rounded-[10px] sm:overflow-hidden">
                <Image
                  src="/website-images/buzzing_2.png"
                  alt="#MigrationDiaries Series"
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:py-6 sm:pr-6 sm:pl-4">
                <div className="mb-3 flex items-center gap-2">
                  <Image
                    src="/website-images/3d-fire.png"
                    alt=""
                    width={26}
                    height={26}
                  />
                  <span className="font-display text-[18px] font-medium leading-tight text-[#383838]">
                    Community Movement
                  </span>
                </div>
                <h3 className="mb-3 font-display text-[18px] font-semibold leading-tight text-[#383838] group-hover:text-primary transition-colors">
                  #MigrationDiaries Series Goes Global
                </h3>
                <p className="mb-4 font-prose text-[13px] leading-[20px] text-[#5E5E5E]">
                  Over 40 contributors from 18 nations contributed personal letters documenting generational family migrations, tracing the paths that shaped modern cultural crossroads.
                </p>
                <p className="mt-auto font-prose text-[12px] text-[#8A8A8A]">
                  📈 9,800 views &nbsp;|&nbsp; 💬 94 comments
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Cultural Spotlights & Deep Dives (3 Cards) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-[36px] font-semibold leading-tight text-[#383838] lg:text-[40px]">
              Cultural Spotlights & Deep Dives
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spotlights.map((spot, idx) => (
              <div
                key={idx}
                className="group card-hover-effect bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-secondary mb-2">
                    <span className="bg-secondary/10 px-2.5 py-0.5 rounded-full">{spot.region}</span>
                    <span className="text-gray-400 font-normal">{spot.readTime}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[20px] text-[#1F1F1F] leading-snug mb-2 group-hover:text-primary transition-colors">
                    {spot.title}
                  </h3>
                  <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed mb-4 flex-1">
                    {spot.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-secondary font-display font-medium text-[14px] group-hover:text-primary transition-colors">
                    Read story <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ambassador Highlights */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-display font-medium text-[16px] uppercase tracking-wider">
                Global Voices in Action
              </span>
              <h2 className="font-display font-semibold text-[32px] sm:text-[40px] text-[#383838] leading-tight mt-2 mb-4">
                Empowering Regional Ambassadors
              </h2>
              <p className="font-prose text-[16px] text-[#5E5E5E] leading-relaxed mb-6">
                Our ambassadors bridge local communities with the global stage. They host regional storytelling workshops, translate oral folklore, and ensure that indigenous perspectives are heard with dignity.
              </p>
              <Link
                href="/become-ambassador"
                className="btn-theme animate-btn-shake active:scale-95"
              >
                Become an Ambassador
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-hover-effect">
              <Image
                src="/website-images/group-business-people-1.png"
                alt="Ambassadors in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
