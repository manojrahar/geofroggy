"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, LoaderCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Graphic */}
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/website-images/culture.png"
              alt="Culture in Your Inbox"
              width={600}
              height={500}
              className="w-full max-w-[560px] h-auto object-contain"
            />
          </div>

          {/* Right: Newsletter Copy & Form */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/website-images/globeicon.png"
                alt=""
                width={22}
                height={22}
              />
              <span className="font-display font-medium text-[28px] text-secondary">
                Copedia
              </span>
            </div>

            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight">
              Culture in Your Inbox
            </h2>

            <div className="mt-2 mb-6">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>

            <p className="font-prose text-[16px] text-[#5E5E5E] leading-[26px] mb-8">
              Subscribe to our weekly Copedia newsletter for hand-curated cultural stories, untold regional traditions, festival calendars, and community reflections from every corner of the world.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="flex-1 h-12 px-4 rounded-[6px] border border-gray-300 bg-white text-[#383838] placeholder:text-[#9E9E9E] font-prose text-[15px] focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="animate-btn-shake bg-secondary hover:bg-secondary-dark text-white font-display font-semibold text-[15px] px-8 h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 shrink-0 flex items-center justify-center gap-2 transform hover:scale-102 active:scale-95"
              >
                {status === "loading" ? (
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <>
                    <Check className="w-5 h-5" /> Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
