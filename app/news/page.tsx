import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Flame, MapPin, Share2 } from "lucide-react";

export const metadata = {
  title: "Geofroggy Newsroom - Geography Through Human Story",
  description:
    "Platform news, updates, community highlights, and cultural spotlights from around the world.",
};

export default function NewsPage() {
  const platformUpdates = [
    {
      title: "Global Story Map Now Live",
      description:
        "Explore stories across the globe using our new interactive map. Search by country, cultural tag, or contributor -- and watch the world come to life.",
      image: "/website-images/platform_1.png",
    },
    {
      title: "Audio Narration Launch",
      description:
        "You can now listen to stories in their original language or translated audio. Available in 20+ languages, with more coming soon.",
      image: "/website-images/platform_2.png",
    },
    {
      title: "Mobile Experience Improved",
      description:
        "We've made it easier to browse and submit stories on your phone. Faster loading, cleaner design, and offline-saving support now live.",
      image: "/website-images/platform_3.png",
    },
    {
      title: "Regional Hubs Expanded",
      description:
        "New dedicated pages launched for East Africa, Central Asia, and the Caribbean -- highlighting local ambassadors and regional stories.",
      image: "/website-images/platform_4.png",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/website-images/culture_about_1.png"
          alt="Outdoor dining and global connections"
          fill
          className="object-cover object-center brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1 rounded-full uppercase tracking-wider mb-4 font-display">
            Geofroggy Newsroom
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight drop-shadow-md">
            Geography Through Human Story
          </h1>
        </div>
      </section>

      {/* 2. Platform News & Updates */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-3">
              Platform News & Updates
            </h2>
            <div className="w-12 h-1 bg-[#8AC63C] mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
              Stay informed about what&apos;s happening at Geofroggy — from exciting new features and
              rollouts to community growth and platform milestones. We&apos;re always evolving to help
              you connect through culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformUpdates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base font-display text-[#1F1F1F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5E5E5E] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inside Geofroggy / What's Buzzing */}
      <section 
        className="w-full py-16 lg:py-24 bg-gray-50/60 relative"
        style={{
          backgroundImage: "url('/website-images/contributor-bgpattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
              🌐 Inside Geofroggy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mt-1 mb-3">
              What&apos;s Buzzing on Geofroggy
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
              Discover trending cultural moments, viral stories, and community reactions that are
              lighting up the Geofroggy platform right now.
            </p>
          </div>

          {/* Top 2 Large Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card 1: Most Viewed Story */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-full sm:w-44 h-48 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/website-images/buzzing_1.png"
                  alt="Street Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-rose-500">
                  <Flame className="w-4 h-4 fill-current" />
                  <span>Most Viewed Story This Week</span>
                </div>
                <h3 className="font-bold text-base font-display text-[#1F1F1F]">
                  Title: Street Art as Resistance in Myanmar
                </h3>
                <p className="text-xs text-[#5E5E5E] font-body leading-relaxed">
                  A contributor&apos;s photo essay from Yangon has become the most-read story of the week
                  — sparking discussions on youth culture, freedom, and creative protest.
                </p>
                <div className="text-[11px] text-gray-400 font-medium pt-1">
                  📈 12,400 views | 💬 130 comments
                </div>
              </div>
            </div>

            {/* Card 2: Global Top Tag */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-full sm:w-44 h-48 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/website-images/buzzing_2.png"
                  alt="Airport flight board"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-500">
                  <span>🏷️</span>
                  <span>Global Top Tag:</span>
                </div>
                <h3 className="font-bold text-base font-display text-[#1F1F1F]">
                  #MigrationDiaries
                </h3>
                <p className="text-xs text-[#5E5E5E] font-body leading-relaxed">
                  The tag #MigrationDiaries is trending globally as users share family migration
                  stories from Iran, Colombia, and Sudan.
                </p>
                <p className="text-xs italic text-[#175883] font-quote border-l-2 border-[#8AC63C] pl-2">
                  &ldquo;My grandfather hid maps under the lining of his coat. This is how we arrived.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Bottom 3 Highlights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Comment of the Week */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-semibold text-sky-600 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Comment of the Week</span>
              </div>
              <p className="text-xs text-[#4B4B4B] italic font-body mb-2">
                &ldquo;I didn&apos;t even know this festival existed. It made me proud of my roots again.&rdquo;
              </p>
              <span className="block text-[11px] font-semibold text-[#8AC63C]">— A reader from Morocco</span>
              <p className="text-[10px] text-gray-400 mt-2">Story: The Forgotten Fire Rituals of North Africa</p>
            </div>

            {/* Fastest Growing Country Hub */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Fastest Growing Country Hub</span>
              </div>
              <h4 className="font-bold text-sm text-[#1F1F1F] mb-1">🇺🇸 United States</h4>
              <p className="text-xs text-green-600 font-semibold mb-1">+380% story submissions</p>
              <p className="text-xs text-[#5E5E5E] font-body leading-relaxed">
                Thanks to new contributors and local outreach, the United States Hub has become one
                of the fastest-growing on the platform.
              </p>
            </div>

            {/* Most Shared Moment */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 mb-2">
                <Share2 className="w-4 h-4" />
                <span>Most Shared Moment</span>
              </div>
              <h4 className="font-bold text-xs font-display text-[#1F1F1F] mb-1">
                &ldquo;Tiny Village in Iceland Revives its Mythical Frog Festival&rdquo;
              </h4>
              <p className="text-xs text-emerald-600 font-semibold mb-1">🟢 2,100+ shares in 48 hours</p>
              <p className="text-xs text-[#5E5E5E] font-body leading-relaxed">
                A quirky, beautiful piece that brought people together across generations — and
                continents.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Cultural Spotlights & Deep Dives */}
      <section className="w-full py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
              🌐 Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mt-1">
              Cultural Spotlights & Deep Dives
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Big Feature Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  src="/website-images/story_belong_1.png"
                  alt="Lunar New Year Across Asia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl font-display text-[#1F1F1F] mb-2">
                  Lunar New Year Across Asia
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed mb-4">
                  While the Lunar New Year is celebrated in many Asian countries, the details — from
                  food and colors to rituals and meanings — vary tremendously.
                </p>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Stacked Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs p-4 flex gap-4 items-center">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/website-images/culture_about_2.png"
                    alt="Indigenous Language Revival"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display text-[#1F1F1F] mb-1">
                    The Indigenous Language Revival
                  </h4>
                  <p className="text-xs text-[#5E5E5E] font-body line-clamp-2 mb-2">
                    In classrooms and online platforms, people are reviving languages that were once
                    silenced.
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs p-4 flex gap-4 items-center">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/website-images/culture_about_3.png"
                    alt="Diaspora Dialogues"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display text-[#1F1F1F] mb-1">
                    Diaspora Dialogues
                  </h4>
                  <p className="text-xs text-[#5E5E5E] font-body line-clamp-2 mb-2">
                    For those living between worlds, culture isn&apos;t a location — it&apos;s a negotiation.
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ambassador Highlights */}
      <section className="w-full py-16 lg:py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
                🌐 Ambassador Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F]">
                Global Voices in Action
              </h2>
              <p className="text-xs sm:text-sm text-[#4B4B4B] font-body leading-relaxed">
                Geofroggy Ambassadors are the heart of our global platform — cultural connectors who
                bring local stories to the world. From organizing story circles to mentoring youth
                contributors, these passionate individuals help build a more connected, compassionate
                planet.
              </p>

              <div className="space-y-3 pt-3 text-xs sm:text-sm text-[#1F1F1F] font-body">
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">🌐</span>
                  <div>
                    <strong>58+ Countries Represented</strong>
                    <p className="text-xs text-[#5E5E5E]">Our ambassador network spans continents — from remote villages to urban hubs.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <span className="text-base">✍️</span>
                  <div>
                    <strong>1,200+ Stories Shared</strong>
                    <p className="text-xs text-[#5E5E5E]">Real voices and rich narratives that reflect life from the ground up.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <span className="text-base">🧒</span>
                  <div>
                    <strong>240+ Youth Ambassadors</strong>
                    <p className="text-xs text-[#5E5E5E]">Empowering the next generation to preserve and share their cultural identity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image (5 cols) */}
            <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/website-images/group-business-people-1.png"
                alt="Ambassadors holding world map cutouts"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
