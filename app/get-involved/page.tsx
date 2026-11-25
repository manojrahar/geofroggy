import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Get Involved - GeoFroggy",
  description:
    "Become a contributor, an ambassador, a volunteer, or a donor. Help put the world within reach.",
};

const sections = [
  {
    tag: "Connect with Community",
    heading: "Share Your Story",
    description:
      "Your personal experience can become part of a growing global archive. Whether it's a childhood memory, a local tradition, or a powerful moment that shaped your identity — your story offers a window into your culture. Submitting is easy, meaningful, and can inspire readers across continents.",
    buttonText: "Submit Your Story",
    buttonHref: "/submit-story",
    image: "/website-images/involve_submit.png",
    imageAlt: "Person writing in a notebook outdoors",
    imageOrder: "lg:order-2",
    contentOrder: "lg:order-1",
  },
  {
    tag: "Become an Ambassador",
    heading: "Represent Your Region",
    description:
      "Geofroggy Ambassadors are cultural connectors who bring their communities into the global conversation. From organizing story circles to mentoring new voices, you'll help ensure your region is seen, respected, and celebrated. It's more than a title — it's a chance to lead with pride and purpose.",
    buttonText: "Join the Ambassador Network",
    buttonHref: "/become-ambassador",
    image: "/website-images/involve_ambassador_2.png",
    imageAlt: "Ambassadors joining hands over a world map",
    imageOrder: "lg:order-1",
    contentOrder: "lg:order-2",
  },
  {
    tag: "Volunteer or Partner",
    heading: "Collaborate With Us",
    description:
      "Bring your expertise to something meaningful. Volunteers and partners support everything from design and outreach to translation and cultural research. Whether you're an individual or an organization, there's a place for your passion at Geofroggy — and together we can create something lasting.",
    buttonText: "Volunteer or Partner",
    buttonHref: "/partner",
    image: "/website-images/involve_volunteer_2.png",
    imageAlt: "Volunteer in a Volunteer-branded shirt smiling",
    imageOrder: "lg:order-2",
    contentOrder: "lg:order-1",
  },
  {
    tag: "Donate",
    heading: "Support Global Storytelling",
    description:
      "Your contribution empowers diverse voices, funds platform development, and expands our cultural reach. Donations help us translate stories, support underrepresented contributors, and grow a space where global understanding thrives. You're not just giving — you're building bridges between people and cultures.",
    buttonText: "Make a Donation",
    buttonHref: "/donate",
    image: "/website-images/involve_donate.png",
    imageAlt: "Hands holding a globe",
    imageOrder: "lg:order-1",
    contentOrder: "lg:order-2",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="overflow-hidden min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative">
        <div className="relative h-[359px] w-full overflow-hidden">
          <Image
            src="/website-images/involved_hero_image.png"
            alt="Get Involved with Geofroggy"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 px-12 py-1 font-display text-[28px] font-semibold leading-tight text-white sm:text-[36px] mb-2">
              Get Involved with Geofroggy
            </span>
            <h1 className="font-display text-[32px] sm:text-[44px] font-semibold text-white leading-tight">
              Our Window, Your World
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Alternating Pathway Sections */}
      {sections.map((sec, idx) => (
        <section
          key={idx}
          className={`relative overflow-hidden bg-white ${
            idx === 0
              ? "pt-20 lg:pt-28 pb-10 lg:pb-14"
              : idx === sections.length - 1
              ? "pt-10 lg:pt-14 pb-20 lg:pb-28"
              : "pt-10 lg:pt-14 pb-10 lg:pb-14"
          }`}
        >
          {idx === 0 && (
            <Image
              src="/website-images/abstractart2.png"
              alt=""
              width={184}
              height={186}
              className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg] select-none"
            />
          )}

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[172px]">
              {/* Content Column */}
              <div className={sec.contentOrder}>
                <div className="mb-2 flex items-center gap-2">
                  <Image
                    src="/website-images/globeicon.png"
                    alt=""
                    width={29}
                    height={30}
                    className="shrink-0"
                  />
                  <span className="font-display text-[22px] font-medium leading-tight text-secondary">
                    {sec.tag}
                  </span>
                </div>

                <h2 className="font-display text-[36px] font-semibold leading-tight text-[#383838] lg:text-[40px]">
                  {sec.heading}
                </h2>

                <div className="mt-2 mb-4">
                  <Image
                    src="/website-images/moreimages/Vector-4.png"
                    alt=""
                    width={212}
                    height={14}
                  />
                </div>

                <p className="font-prose text-[16px] leading-[26px] text-[#5E5E5E]">
                  {sec.description}
                </p>

                <Link
                  href={sec.buttonHref}
                  className="animate-btn-shake mt-6 inline-block rounded-full bg-secondary hover:bg-secondary-dark px-8 py-3.5 font-display text-[15px] font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                >
                  {sec.buttonText}
                </Link>
              </div>

              {/* Image Column */}
              <div className={sec.imageOrder}>
                <div className="group card-hover-effect relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100">
                  <Image
                    src={sec.image}
                    alt={sec.imageAlt}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
