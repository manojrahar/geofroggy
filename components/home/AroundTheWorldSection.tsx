import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

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

export default function AroundTheWorldSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
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

        {/* 3 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <Link
              key={e.id}
              href={e.destination_url}
              className="relative rounded-[10px] overflow-hidden group block bg-white transition-transform hover:-translate-y-1"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={e.feature_image}
                  alt={e.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-2 text-[12px] text-[#6E6E6E] font-prose">
                  <span className="uppercase tracking-wide font-medium text-secondary">
                    {e.region}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {e.event_date}
                  </span>
                </div>

                <h3 className="font-display font-medium text-[20px] text-[#1F1F1F] leading-snug mb-2 group-hover:text-secondary transition-colors">
                  {e.headline}
                </h3>

                <p className="font-prose text-[14px] text-[#4B4B4B] leading-[22px] line-clamp-3">
                  {e.summary}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-secondary font-display font-medium text-[13px]">
                  Read more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
