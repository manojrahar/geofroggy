import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, Mail, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Geofroggy Media Hub - Assets to Amplify Geofroggy",
  description:
    "Official brand assets, logo downloads, typography guidelines, press kit materials, and approved photography.",
};

export default function MediaPage() {
  const brandAssets = [
    {
      title: "Logos (Full-color, dark/white, PNG + SVG)",
      icon: "/website-images/brand_asset_icon1.png",
    },
    {
      title: "Color Palette (Primary HEX + RGB values)",
      icon: "/website-images/brand_asset_icon2.png",
    },
    {
      title: "Typography (Web + print fonts)",
      icon: "/website-images/brand_asset_icon3.png",
    },
    {
      title: "Logo Usage Guidelines (Do's and Don'ts)",
      icon: "/website-images/brand_asset_icon4.png",
    },
  ];

  const pressMentions = [
    {
      title: '"Geofroggy Named Top Cultural Startup"',
      source: "Global Explorer Journal",
      image: "/website-images/news_card1.png",
    },
    {
      title: '"Storytelling that Unites Borders"',
      source: "The Culture Times",
      image: "/website-images/news_card2.png",
    },
    {
      title: '"Youth Voices Take Center Stage on Geofroggy"',
      source: "WorldEd News",
      image: "/website-images/news_card3.png",
    },
  ];

  const galleryImages = [
    "/website-images/gallery1.png",
    "/website-images/gallery2.png",
    "/website-images/gallery3.png",
    "/website-images/gallery4.png",
    "/website-images/gallery5.png",
    "/website-images/gallery6.png",
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/website-images/media_hero.png"
          alt="Traditional festival aerial view"
          fill
          className="object-cover object-center brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1 rounded-full uppercase tracking-wider mb-4 font-display">
            Geofroggy Media Hub
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight drop-shadow-md">
            Assets to Amplify Geofroggy.
          </h1>
        </div>
      </section>

      {/* 2. About Geofroggy Brief */}
      <section className="w-full py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1F1F1F] mb-3">
            About Geofroggy
          </h2>
          <div className="w-12 h-1 bg-[#8AC63C] mx-auto rounded-full mb-4" />
          <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
            Geofroggy is a global storytelling platform that brings geography to life through
            cultural experiences, personal stories, and human connection. We empower contributors
            from around the world to share insights that transcend borders, spark empathy, and
            celebrate the beauty of our shared humanity. From everyday voices to extraordinary
            journeys, Geofroggy is where culture becomes connection — one story at a time.
          </p>
        </div>
      </section>

      {/* 3. Official Brand Assets */}
      <section className="w-full py-16 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
                  🌐 Brand Assets
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mt-1 mb-2">
                  Official Brand Assets
                </h2>
                <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
                  Use our approved brand assets to accurately represent Geofroggy in media, press,
                  or collaboration.
                </p>
              </div>

              {/* 4 Asset Cards Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {brandAssets.map((asset, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-gray-100 p-4 shadow-xs flex items-center space-x-3.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EFF7E3] flex items-center justify-center shrink-0">
                      <Image
                        src={asset.icon}
                        alt="Asset icon"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-[#1F1F1F] leading-snug">
                      {asset.title}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="inline-flex items-center space-x-2 bg-gray-400 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg cursor-not-allowed shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download — Coming Soon</span>
              </button>
            </div>

            {/* Right Column: Laptop Mockup (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[420px] h-[280px]">
                <Image
                  src="/website-images/laptop_mockup.png"
                  alt="Geofroggy on laptop"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] text-gray-400 italic mt-2">
                Approved By Kyle Keenan
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Press Kit & Overview */}
      <section 
        className="w-full py-16 lg:py-24 bg-white relative"
        style={{
          backgroundImage: "url('/website-images/contributor-bgpattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: 3D Press Kit Mockup (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                <Image
                  src="/website-images/presskit_feature_image.png"
                  alt="Geofroggy Press Kit"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Press Materials Bullet Points (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
                📰 Press Kit
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F]">
                Press Kit & Overview
              </h2>
              <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
                Download our official press materials to include Geofroggy in articles, features,
                or event coverage.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4B4B4B] font-body pt-2">
                <li className="flex items-center space-x-2.5">
                  <FileText className="w-4 h-4 text-[#8AC63C]" />
                  <span>Company Overview PDF</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <FileText className="w-4 h-4 text-[#8AC63C]" />
                  <span>Founding Story + Mission</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <FileText className="w-4 h-4 text-[#8AC63C]" />
                  <span>Fast Facts & Stats (reach, users, stories)</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <FileText className="w-4 h-4 text-[#8AC63C]" />
                  <span>Notable Press Mentions</span>
                </li>
              </ul>

              <div className="pt-2 flex items-center space-x-2 text-xs text-gray-500 font-body">
                <Mail className="w-4 h-4 text-[#8AC63C]" />
                <span>Media Contact:</span>
                <a href="mailto:media@geofroggy.com" className="text-[#175883] font-semibold hover:underline">
                  media@geofroggy.com
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="bg-gray-400 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg cursor-not-allowed shadow-xs"
                >
                  Press Kit — Coming Soon
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. In the News: Recent Press & Mentions */}
      <section className="w-full py-16 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
              📰 In the News
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mt-1 mb-2">
              Recent Press & Mentions
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5E5E] font-body">
              See where Geofroggy is making headlines. We&apos;re proud to be featured by cultural and
              media voices around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressMentions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base font-display text-[#1F1F1F] mb-3 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="pt-3 border-t border-gray-50 flex items-center justify-between text-xs">
                    <span className="font-medium text-[#175883]">{item.source}</span>
                    <span className="w-7 h-7 rounded-full bg-[#EFF7E3] text-[#8AC63C] flex items-center justify-center">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Approved Imagery & Photography */}
      <section className="w-full py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-2">
              Approved Imagery & Photography
            </h2>
            <div className="w-12 h-1 bg-[#8AC63C] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                <Image
                  src={src}
                  alt={`Approved cultural media ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
