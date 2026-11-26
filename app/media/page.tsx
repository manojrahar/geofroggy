import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, ExternalLink, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Media & Press Kit - GeoFroggy",
  description:
    "Assets to Amplify Geofroggy: Official brand guidelines, logos, photography, and press inquiries.",
};

const brandAssets = [
  {
    title: "Primary Brand Logos",
    format: "PNG, SVG, WebP",
    desc: "Horizontal lockups, isolated frog icon, and monochrome versions for light and dark backgrounds.",
    icon: "/website-images/brand_asset_icon1.png",
  },
  {
    title: "Color Palette Guide",
    format: "HEX, RGB, CMYK",
    desc: "Primary Deep Blue (#175883), Emerald Green (#8AC63C), Golden Sun (#FFC107), and neutral shades.",
    icon: "/website-images/brand_asset_icon2.png",
  },
  {
    title: "Typography Standards",
    format: "OTF, TTF, WebFonts",
    desc: "Guidance on pairing Clash Display, Poppins, Roboto, and Yellowtail for editorial storytelling.",
    icon: "/website-images/brand_asset_icon3.png",
  },
  {
    title: "Brand Voice & Standards",
    format: "PDF Document (12 MB)",
    desc: "Our ethos, editorial guidelines, interview principles, and community storytelling values.",
    icon: "/website-images/brand_asset_icon4.png",
  },
];

const mediaCoverage = [
  {
    outlet: "Global Culture Weekly",
    date: "Oct 24, 2026",
    title: "How Geofroggy Is Turning Geographic Curiosity into Borderless Human Empathy",
    link: "#",
  },
  {
    outlet: "Storytellers Digest",
    date: "Sep 18, 2026",
    title: "The Digital Platform Archiving Oral Traditions Before They Fade",
    link: "#",
  },
  {
    outlet: "Tech & Society Review",
    date: "Aug 05, 2026",
    title: "Decentralized Storytelling: Geofroggy's Ambassador Network in Underserved Regions",
    link: "#",
  },
];

const galleryImages = [
  { src: "/website-images/gallery1.png", caption: "Cultural workshop in Nairobi" },
  { src: "/website-images/gallery2.png", caption: "Community storytelling circle" },
  { src: "/website-images/gallery3.png", caption: "Field recording in Rajasthan" },
  { src: "/website-images/gallery4.png", caption: "Youth folklore gathering" },
  { src: "/website-images/gallery5.png", caption: "Artisanal textile documentation" },
  { src: "/website-images/gallery6.png", caption: "Traditional harvest celebration" },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src="/website-images/media_hero.png"
          alt="Media & Brand Assets"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[22px] sm:text-[26px] lg:text-[30px] px-12 py-1 leading-tight mb-2">
            Press & Media
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[42px] lg:text-[50px] leading-tight">
            Assets to Amplify Geofroggy
          </h1>
          <p className="text-white/90 font-prose text-[16px] sm:text-[18px] mt-3 max-w-2xl">
            Use our approved brand assets to accurately represent Geofroggy in media, press, or collaboration.
          </p>
        </div>
      </section>

      {/* 2. Official Brand Assets (Split with Laptop Mockup) */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={249}
          height={250}
          className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg] opacity-60"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
              Official Brand Assets
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>
            <p className="font-prose text-[16px] text-[#5E5E5E] max-w-2xl mx-auto mt-4">
              Download high-resolution logos, brand guidelines, color palettes, and typography packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: 4 Assets download cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brandAssets.map((asset, i) => (
                <div
                  key={i}
                  className="card-hover-effect group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-secondary/40 flex flex-col hover:-translate-y-1.5 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <Image
                      src={asset.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-[17px] text-[#1F1F1F] group-hover:text-primary transition-colors mb-1">
                    {asset.title}
                  </h3>
                  <span className="text-[12px] font-semibold text-secondary mb-2">
                    {asset.format}
                  </span>
                  <p className="font-prose text-[13px] text-[#6E6E6E] leading-relaxed mb-4 flex-1">
                    {asset.desc}
                  </p>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors">
                    <Download className="w-3.5 h-3.5" /> Download Pack
                  </button>
                </div>
              ))}
            </div>

            {/* Right: Laptop Mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-[16/11]">
                <Image
                  src="/website-images/laptop_mockup.png"
                  alt="Geofroggy on laptop"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Press Kit Showcase & Inquiries */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/website-images/presskit_feature_image.png"
                alt="Geofroggy Press Kit"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-secondary font-display font-medium text-[16px] uppercase tracking-wider">
                Press Kit
              </span>
              <h2 className="font-display font-semibold text-[32px] sm:text-[40px] text-[#383838] leading-tight mt-2 mb-4">
                Everything You Need to Cover Geofroggy
              </h2>
              <p className="font-prose text-[16px] text-[#5E5E5E] leading-relaxed mb-6">
                Our press kit includes executive bios, founder photos, platform fact sheets, high-resolution product screenshots, and statistical growth milestones.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="animate-btn-shake bg-primary hover:bg-primary-dark text-white font-display font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-102 active:scale-95">
                  <Download className="w-4 h-4" /> Download Complete Press Kit (45 MB)
                </button>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-[15px] text-[#1F1F1F]">
                    Direct Media Inquiries
                  </h4>
                  <a
                    href="mailto:press@geofroggy.com"
                    className="font-prose text-[14px] text-primary hover:underline"
                  >
                    press@geofroggy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Recent Media Mentions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-semibold text-[32px] sm:text-[38px] text-[#383838]">
              Recent Press & Mentions
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
            {mediaCoverage.map((m, i) => (
              <a
                key={i}
                href={m.link}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-md hover:border-secondary transition-all group block"
              >
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3 font-prose">
                  <span className="font-semibold text-secondary">{m.outlet}</span>
                  <span>{m.date}</span>
                </div>
                <h3 className="font-display font-medium text-[18px] text-[#1F1F1F] group-hover:text-primary transition-colors leading-snug">
                  {m.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium">
                  Read article <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Approved Photography Gallery */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-[32px] sm:text-[38px] text-[#383838]">
              Approved Imagery & Photography
            </h2>
            <p className="font-prose text-[14px] text-gray-500 mt-2">
              High-resolution cultural photographs cleared for editorial and press usage with attribution to Geofroggy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-xs sm:text-sm font-prose">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
