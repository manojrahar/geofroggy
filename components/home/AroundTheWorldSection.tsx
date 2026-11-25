import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const stories = [
  {
    image: "/website-images/hero/diwali_india.png",
    category: "Festival",
    date: "Nov 1, 2024",
    title: "Diwali Lights Up Jaipur",
    description:
      "Rangolis, marigolds, and firecrackers turn the Pink City into an all-night celebration of light over darkness.",
    link: "/explore",
  },
  {
    image: "/website-images/hero/timkat_ethiopia.png",
    category: "Culture",
    date: "Aug 15, 2024",
    title: "Rio Carnival Rehearsals Begin",
    description:
      "Samba schools take over the streets weeks before the main parade -- a first look at this year's themes and costumes.",
    link: "/explore",
  },
  {
    image: "/website-images/hero/chinese_new_year.png",
    category: "Tradition",
    date: "Nov 15, 2024",
    title: "Kyoto's Autumn Colors Peak",
    description:
      "Momiji season paints the temples red and gold; a photographer's guide to the best five spots outside the tourist crush.",
    link: "/explore",
  },
];

export default function AroundTheWorldSection() {
  return (
    <section className="w-full py-16 lg:py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker & Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center space-x-1.5 text-[#8AC63C] text-xs font-semibold uppercase tracking-wider mb-2">
            <Clock className="w-4 h-4" />
            <span>This Week</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F]">
            Around the World This Week
          </h2>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  {/* Category Pill & Date */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
                    <span className="font-semibold text-[#8AC63C] uppercase tracking-wide">
                      {story.category}
                    </span>
                    <span>{story.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg font-display text-[#1F1F1F] mb-2 leading-snug group-hover:text-[#175883] transition-colors">
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5E5E5E] font-body line-clamp-3 leading-relaxed mb-4">
                    {story.description}
                  </p>
                </div>

                {/* Read More Link */}
                <Link
                  href={story.link}
                  className="inline-flex items-center text-xs font-semibold text-[#8AC63C] group-hover:text-[#7ab52e] hover:underline transition-colors pt-2 border-t border-gray-50"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
