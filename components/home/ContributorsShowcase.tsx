import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contributors = [
  {
    name: "Adam Watts",
    country: "USA",
    image: "/website-images/contributor1.png",
    tag: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
  },
  {
    name: "Luca Romano",
    country: "Italy",
    image: "/website-images/contributor2.png",
    tag: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
  },
  {
    name: "Anaya Patel",
    country: "India",
    image: "/website-images/contributor3.png",
    tag: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
  },
  {
    name: "Diego Rojas",
    country: "Mexico",
    image: "/website-images/contributor4.png",
    tag: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
  },
];

export default function ContributorsShowcase() {
  return (
    <section className="py-16 relative overflow-hidden green-patch-bg border-b border-secondary/15">
      {/* Subtle frog pattern backdrop */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <Image
          src="/website-images/contributor-bgpattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display font-medium text-[28px] text-secondary">
                Top Contributors
              </span>
            </div>
            <h2 className="font-display font-semibold text-[36px] sm:text-[44px] text-[#383838] leading-tight">
              Celebrating Our Contributors
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

          <Link
            href="/contributors"
            className="animate-btn-shake shrink-0 bg-secondary hover:bg-secondary-dark text-white font-display font-semibold text-[15px] px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mt-2"
          >
            View All
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contributors.map((c, i) => (
            <div
              key={i}
              className="group card-hover-effect bg-white rounded-[16px] overflow-hidden flex flex-col border-2 border-[#175883]/18 hover:border-secondary"
            >
              <div className="p-2.5 pt-2.5">
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display font-semibold text-[17px] text-[#383838] truncate group-hover:text-primary transition-colors">
                    {c.name}
                  </span>
                  <span className="shrink-0 bg-[#E53935] text-white font-prose text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap shadow-2xs">
                    🔴 {c.tag}
                  </span>
                </div>

                <p className="font-prose text-[13px] text-[#5E5E5E] leading-5 mb-3 flex-1">
                  {c.bio}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-prose text-[13px] text-primary font-medium underline underline-offset-2 cursor-pointer">
                    {c.country}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary/20 group-hover:bg-secondary group-hover:text-white flex items-center justify-center text-secondary transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
