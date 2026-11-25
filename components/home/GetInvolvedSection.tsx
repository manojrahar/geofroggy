import React from "react";
import Image from "next/image";
import Link from "next/link";

const pathways = [
  {
    title: "Share Your Story",
    description:
      "Share a personal memory or cultural insight that brings your corner of the world to life.",
    icon: "/website-images/green_globe.png",
    href: "/submit-story",
  },
  {
    title: "Become an Ambassador",
    description:
      "Help represent your region, welcome new voices, and grow our global community.",
    icon: "/website-images/globeicon.png",
    href: "/become-ambassador",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with Geofroggy on educational, cultural, or storytelling initiatives.",
    icon: "/website-images/Flags.png",
    href: "/partner",
  },
  {
    title: "Support the Mission",
    description:
      "Your contribution helps us keep the platform open, accessible, and community-driven.",
    icon: "/website-images/Chat.png",
    href: "/donate",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Right side celebratory graphic */}
        <div className="hidden lg:block absolute top-0 right-0 w-[436px] z-20 pointer-events-none">
          <Image
            src="/website-images/get-involved.png"
            alt="Get Involved with Geofroggy"
            width={436}
            height={420}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Left Side Content */}
        <div className="lg:max-w-[calc(100%-480px)]">
          <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
            Get Involved with Geofroggy
          </h2>

          <div className="mt-2 mb-6">
            <Image
              src="/website-images/moreimages/Vector-4.png"
              alt=""
              width={212}
              height={14}
            />
          </div>

          <p className="font-prose text-[16px] text-[#4B4B4B] leading-[23px] mb-5 max-w-[640px]">
            At Geofroggy, we believe that the stories of the world are best told by the people who live them. That's why we invite you to be more than just a reader — become a contributor, a connector, and a catalyst for global understanding.
          </p>

          <p className="font-prose text-[16px] text-[#4B4B4B] leading-[23px] mb-4">
            There are many ways to get involved:
          </p>

          <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3">
              <Image
                src="/website-images/green_globe.png"
                alt=""
                width={22}
                height={22}
                className="shrink-0 mt-1"
              />
              <span className="font-prose text-[16px] text-[#4B4B4B] leading-[23px]">
                Whether you have a powerful story from your village or a quiet reflection from your city...
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/website-images/green_globe.png"
                alt=""
                width={22}
                height={22}
                className="shrink-0 mt-1"
              />
              <span className="font-prose text-[16px] text-[#4B4B4B] leading-[23px]">
                Whether you want to uplift unheard voices or bring your community closer to the world...
              </span>
            </li>
          </ul>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4">
          {pathways.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group card-hover-effect bg-white rounded-[12px] px-4 py-5 flex flex-col items-center text-center overflow-hidden lg:w-[227px] lg:h-[235px] lg:shrink-0 border border-gray-100 hover:border-secondary/40 transition-all duration-300"
            >
              <div className="relative w-full h-16 mb-2 shrink-0 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt=""
                  width={46}
                  height={46}
                  className="object-contain group-hover:scale-115 transition-transform duration-300"
                />
              </div>

              <h3 className="font-display font-semibold text-[17px] text-[#383838] group-hover:text-primary transition-colors mb-1.5 whitespace-nowrap shrink-0">
                {card.title}
              </h3>

              <p className="font-prose text-[13px] text-[#5E5E5E] leading-[20px] line-clamp-3">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
