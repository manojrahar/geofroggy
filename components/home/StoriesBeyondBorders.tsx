import React from "react";
import Image from "next/image";

export default function StoriesBeyondBorders() {
  const galleryImages = [
    {
      src: "/website-images/geo_1.png",
      alt: "Traditional costume dancer celebration",
      caption: "Indigenous festival attire",
    },
    {
      src: "/website-images/geo_2.png",
      alt: "Dia de los Muertos celebration in Mexico",
      caption: "Cultural memory & traditions",
    },
    {
      src: "/website-images/geo_3.png",
      alt: "Rio carnival rehearsal dancers",
      caption: "Rhythm & celebration",
    },
    {
      src: "/website-images/geo_4.png",
      alt: "Travelers celebrating outdoors",
      caption: "Cross-cultural friendship",
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background Froggy Watermark Graphic */}
      <div className="absolute -left-10 top-6 w-48 h-48 opacity-10 pointer-events-none">
        <Image
          src="/website-images/froggy-icon.png"
          alt="Watermark"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Kicker Tag */}
        <div className="inline-flex items-center space-x-2 mb-2">
          <Image
            src="/website-images/froggy-icon.png"
            alt="Froggy"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span className="text-[#8AC63C] text-sm font-semibold tracking-wider uppercase font-display">
            Geofroggy
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#1F1F1F] mb-6">
          Stories Beyond Borders
        </h2>

        {/* Narrative Paragraphs */}
        <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-[#4B4B4B] font-body leading-relaxed mb-10 text-justify sm:text-center">
          <p>
            At Geofroggy, we believe that geography is more than coordinates on a map — it&apos;s
            the heartbeat of human connection. Every village, city, mountain, and street carries a
            story. Every tradition, festival, and encounter becomes part of a much larger tapestry
            that binds us together across cultures.
          </p>
          <p>
            Our platform is built to bring those stories to life. Whether you&apos;re sharing childhood
            memories from a rural town or exploring the vibrancy of a bustling metropolis, your
            voice contributes to a global archive of human experience. By weaving your narratives
            into our shared landscape, we create a deeper, richer understanding of the world we live in.
          </p>
        </div>

        {/* Highlight Quote Box */}
        <div className="max-w-3xl mx-auto bg-[#DEECF5]/50 border-l-4 border-[#175883] rounded-r-xl p-5 sm:p-6 mb-14 text-left shadow-xs">
          <div className="flex items-start space-x-3">
            <span className="text-4xl font-quote text-[#175883] leading-none select-none">
              &ldquo;
            </span>
            <p className="text-sm sm:text-base font-quote font-medium text-[#175883] italic pt-1 leading-snug">
              To unite people by celebrating the diversity of our planet — through personal
              stories, cultural insight, and a shared sense of belonging.
            </p>
          </div>
        </div>

        {/* 4 Cultural Photo Gallery Cards with Distinct Arched Tops */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-72 sm:h-84 rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-white font-medium drop-shadow">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
