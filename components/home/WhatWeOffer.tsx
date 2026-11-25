import React from "react";
import Image from "next/image";

const offers = [
  {
    icon: "/website-images/globeicon.png",
    title: "Connect Across Cultures",
    description:
      "Engage with a vibrant global community, exchanging stories and perspectives that help foster understanding and unity.",
  },
  {
    icon: "/website-images/Flags.png",
    title: "Discover New Perspectives",
    description:
      "Browse personal narratives, images, and videos that explore the beauty and complexity of our world's cultures.",
  },
  {
    icon: "/website-images/Chat.png",
    title: "Share Your Story",
    description:
      "Whether it's a travel tale, local tradition, or personal milestone — your story helps us all see the world a little more clearly.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="green-patch-bg pb-16 lg:pb-20 pt-12 relative overflow-hidden border-y border-secondary/15">
      {/* Subtle green globe watermark */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/website-images/green-splotch.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Abstract art in top left */}
      <Image
        src="/website-images/abstractart1.png"
        alt=""
        width={194}
        height={182}
        className="absolute -top-6 left-10 pointer-events-none rotate-[-55.39deg]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="font-display font-semibold text-[36px] sm:text-[44px] text-[#383838]">
            What We Offer
          </h2>
          <div className="flex justify-center mt-2 mb-4">
            <Image
              src="/website-images/moreimages/Vector-2.png"
              alt=""
              width={160}
              height={12}
            />
          </div>
          <p className="font-prose text-[16px] text-[#5E5E5E] max-w-179.5 mx-auto leading-6.25">
            A home for the stories, voices, and traditions that don't make the headlines. Follow the cultures that move you, share what your corner of the world looks like, and discover places through the people who actually live there.
          </p>
        </div>

        {/* 3 Leaf Border Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="group card-hover-effect relative text-center px-8 py-10 flex flex-col items-center rounded-[16px] bg-white border-2 border-[#175883]/18 hover:border-secondary cursor-default"
              style={{
                backgroundImage: "url('/website-images/Rectangle-14.svg')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="w-18.5 h-18.5 mx-auto mb-5 rounded-full bg-secondary/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/60">
                <Image
                  src={offer.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="object-contain transition-transform duration-300 group-hover:rotate-6"
                />
              </div>

              <h3 className="font-display font-medium text-[22px] text-[#383838] group-hover:text-primary transition-colors mb-3">
                {offer.title}
              </h3>

              <p className="font-prose text-[16px] text-[#5E5E5E] leading-6.25 text-center">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
