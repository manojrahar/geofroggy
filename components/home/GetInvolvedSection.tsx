"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    title: "Share Your Story",
    description:
      "Share a personal memory or cultural insight that brings your corner of the world to life.",
    icon: "/website-images/involve_stories.png",
    href: "/submit-story",
  },
  {
    title: "Become an Ambassador",
    description:
      "Help represent your region, welcome new voices, and grow our global community.",
    icon: "/website-images/involve_ambassador.png",
    href: "/become-ambassador",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with Geofroggy on educational, cultural, or storytelling initiatives.",
    icon: "/website-images/involve_volunteer.png",
    href: "/partner",
  },
  {
    title: "Support the Mission",
    description:
      "Your contribution helps us keep the platform open, accessible, and community-driven.",
    icon: "/website-images/involve_donante.png",
    href: "/donate",
  },
];

interface CardTilt {
  rx: number;
  ry: number;
  active: boolean;
}

export default function GetInvolvedSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [tilts, setTilts] = useState<Record<number, CardTilt>>({});

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (idx: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilts((prev) => ({
      ...prev,
      [idx]: { rx: (0.5 - y) * 10, ry: (x - 0.5) * 10, active: true },
    }));
  };

  const handleMouseLeave = (idx: number) => {
    setTilts((prev) => ({
      ...prev,
      [idx]: { rx: 0, ry: 0, active: false },
    }));
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden bg-white">
      {/* Exact Rectangle-19.png frog pattern backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/website-images/Rectangle-19.png"
          alt=""
          fill
          className="object-cover opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Right side celebratory graphic with gentle floating movement */}
        <div className="hidden lg:block absolute top-0 right-0 w-[420px] z-10 pointer-events-none animate-float-gentle">
          <Image
            src="/website-images/get-involved.png"
            alt="Get Involved with Geofroggy"
            width={420}
            height={405}
            className="w-full h-auto object-contain drop-shadow-[0_14px_28px_rgba(23,88,131,0.18)]"
          />
        </div>

        {/* Left Side Content */}
        <div className="lg:max-w-[calc(100%-450px)] relative z-20">
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
            At Geofroggy, we believe that the stories of the world are best told by the people who live them. That&apos;s why we invite you to be more than just a reader — become a contributor, a connector, and a catalyst for global understanding.
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

        {/* 4 Interactive Pathway Cards with Thematic Photo Backgrounds */}
        <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4">
          {pathways.map((card, idx) => {
            const t = tilts[idx] || { rx: 0, ry: 0, active: false };
            return (
              <div
                key={idx}
                className={`transition-all duration-700 ease-out ${
                  revealed
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-[0.96]"
                }`}
                style={{
                  transitionDelay: `${idx * 110}ms`,
                  perspective: "900px",
                }}
              >
                <Link
                  href={card.href}
                  onMouseMove={(e) => handleMouseMove(idx, e)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  className="group relative bg-white rounded-tl-[28px] rounded-br-[28px] rounded-tr-[8px] rounded-bl-[8px] px-4 py-5 flex flex-col items-center text-center overflow-hidden lg:w-[222px] lg:min-h-[258px] lg:shrink-0 border-2 border-[#175883]/45 hover:border-[#8ac63c] shadow-[0_10px_26px_-4px_rgba(0,0,0,0.16)] hover:shadow-[0_24px_42px_-8px_rgba(0,0,0,0.28)] transition-all duration-200 ease-out active:scale-95"
                  style={{
                    backgroundColor: "#ffffff",
                    backgroundImage: t.active
                      ? "linear-gradient(135deg, #ffffff 0%, #eef8dd 55%, #d5eeaf 100%)"
                      : "linear-gradient(135deg, #ffffff 0%, #f4fae9 55%, #e1f3c6 100%)",
                    transform: t.active
                      ? `rotateX(${t.rx.toFixed(2)}deg) rotateY(${t.ry.toFixed(2)}deg) translateY(-6px)`
                      : "rotateX(0deg) rotateY(0deg) translateY(0px)",
                  }}
                >
                  <div className="relative z-10 w-full h-16 mb-2 shrink-0 flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={54}
                      height={54}
                      className="object-contain group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="relative z-10 font-display font-semibold text-[17px] text-[#383838] group-hover:text-primary transition-colors mb-1.5 whitespace-nowrap shrink-0">
                    {card.title}
                  </h3>

                  <p className="relative z-10 font-prose text-[13px] text-[#4B4B4B] leading-[20px] flex-1">
                    {card.description}
                  </p>

                  <span className="relative z-10 mt-3 inline-flex items-center gap-1 font-display text-[12px] font-semibold text-primary opacity-75 group-hover:opacity-100 group-hover:text-[#5B8E14] transition-all">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
