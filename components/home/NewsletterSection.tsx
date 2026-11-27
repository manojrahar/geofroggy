"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, LoaderCircle } from "lucide-react";
import { playSuccessChime } from "@/lib/soundEffects";
import ParallaxAccent from "@/components/ParallaxAccent";

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
      playSuccessChime();
      setEmail("");
      setTimeout(() => setStatus("idle"), 4500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Parallax peeking frog legs in top left */}
      <ParallaxAccent
        speed={-0.07}
        className="hidden lg:block absolute -top-14 left-4 pointer-events-none"
      >
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={165}
          height={167}
          className="rotate-[-8deg] opacity-75"
        />
      </ParallaxAccent>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Animated Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="animate-float-gentle">
              <Image
                src="/website-images/culture.png"
                alt="Culture in Your Inbox"
                width={600}
                height={500}
                className="w-full max-w-[540px] h-auto object-contain drop-shadow-[0_14px_28px_rgba(23,88,131,0.12)]"
              />
            </div>
          </div>

          {/* Right: Clean Newsletter Copy & Form */}
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

            <div className="mt-2 mb-5">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>

            <p className="font-prose text-[16px] text-[#5E5E5E] leading-[26px] mb-7">
              Every week, receive hand-picked cultural stories, local traditions, and festival spotlights from communities around the world.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="flex-1 h-12 px-4 rounded-[8px] border-2 border-gray-300 bg-white text-[#383838] placeholder:text-[#9E9E9E] font-prose text-[15px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-theme animate-btn-shake h-12 shrink-0 flex items-center justify-center gap-2 disabled:opacity-60 active:scale-95"
              >
                {status === "loading" ? (
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <>
                    <Check className="w-5 h-5" /> Subscribed!
                  </>
                ) : (
                  "Notify Me"
                )}
              </button>
            </form>

            <p className="mt-3 font-prose text-[12.5px] text-[#6E6E6E]">
              We respect your inbox — zero spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
