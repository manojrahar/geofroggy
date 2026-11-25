import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contributors = [
  {
    name: "Adam Watts",
    badge: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "USA",
    avatar: "/website-images/contributor1.png",
    link: "/contributors",
  },
  {
    name: "Luca Romano",
    badge: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "Italy",
    avatar: "/website-images/contributor2.png",
    link: "/contributors",
  },
  {
    name: "Anaya Patel",
    badge: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "India",
    avatar: "/website-images/contributor3.png",
    link: "/contributors",
  },
  {
    name: "Diego Rojas",
    badge: "Colors of Kano",
    bio: "Amina is a photographer and cultural archivist based in northern Nigeria.",
    country: "Chile",
    avatar: "/website-images/contributor4.png",
    link: "/contributors",
  },
];

export default function ContributorsShowcase() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Kicker & View All Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[#8AC63C] text-xs font-semibold uppercase tracking-wider mb-2">
              <Image
                src="/website-images/froggy-icon.png"
                alt="Froggy"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span>Top Contributors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F]">
              Celebrating Our Contributors
            </h2>
          </div>

          <Link
            href="/contributors"
            className="bg-[#8AC63C] hover:bg-[#7ab52e] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-5 py-2 rounded-full transition-colors shadow-xs"
          >
            View All
          </Link>
        </div>

        {/* 4 Contributor Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={c.avatar}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Name & Red Pill Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base font-display text-[#1F1F1F] truncate">
                    {c.name}
                  </h3>
                  <span className="bg-[#B02A39] text-white text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0">
                    {c.badge}
                  </span>
                </div>

                {/* Bio text */}
                <p className="text-xs text-[#5E5E5E] font-body line-clamp-2 leading-relaxed mb-4">
                  {c.bio}
                </p>
              </div>

              {/* Bottom Footer: Country & Arrow Button */}
              <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#175883] font-body">
                  {c.country}
                </span>

                <Link
                  href={c.link}
                  className="w-7 h-7 rounded-full bg-[#EFF7E3] text-[#8AC63C] group-hover:bg-[#8AC63C] group-hover:text-white flex items-center justify-center transition-colors"
                  aria-label={`View ${c.name}'s profile`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
