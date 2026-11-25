import React from "react";
import Image from "next/image";
import Link from "next/link";

const pathways = [
  {
    title: "Share Your Story",
    description: "Share a personal memory or cultural insight that brings your corner of the world to life.",
    icon: "/website-images/involve_stories.png",
    link: "/submit-story",
  },
  {
    title: "Become an Ambassador",
    description: "Help represent your region, welcome new voices, and grow our global community.",
    icon: "/website-images/involve_ambassador.png",
    link: "/become-ambassador",
  },
  {
    title: "Volunteer or Partner",
    description: "Use your skills or collaborate with us to power outreach, content, or events.",
    icon: "/website-images/involve_volunteer.png",
    link: "/partner",
  },
  {
    title: "Support Geofroggy",
    description: "Help fund the platform, the storytellers, and the regional outreach that keeps the community growing.",
    icon: "/website-images/involve_donante.png",
    link: "/donate",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, intro text, bullet points, 4 cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-3">
                Get Involved with Geofroggy
              </h2>
              <p className="text-xs sm:text-sm text-[#4B4B4B] font-body leading-relaxed mb-4">
                At Geofroggy, we believe that the stories of the world are best told by the people
                who live them. That&apos;s why we invite you to be more than just a reader — become a
                contributor, a connector, and a catalyst for global understanding.
              </p>
              
              <div className="space-y-2 text-xs sm:text-sm text-[#5E5E5E] font-body">
                <p className="font-semibold text-[#1F1F1F]">There are many ways to get involved:</p>
                <div className="flex items-start space-x-2">
                  <span className="text-[#8AC63C] text-base leading-none">🐸</span>
                  <p>Whether you have a powerful story from your village or a quiet reflection from your city...</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-[#8AC63C] text-base leading-none">🐸</span>
                  <p>Whether you want to uplift unheard voices or bring your community closer to the world...</p>
                </div>
              </div>
            </div>

            {/* 4 Action Cards Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pathways.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="bg-white rounded-xl border border-gray-100 p-4 shadow-xs hover:shadow-md hover:border-[#8AC63C]/60 transition-all duration-200 group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EFF7E3] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-sm font-display text-[#1F1F1F] mb-1 group-hover:text-[#175883] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#5E5E5E] font-body leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Large Rounded Celebration Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[490px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/website-images/get-involved.png"
              alt="Geofroggy community members celebrating"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
