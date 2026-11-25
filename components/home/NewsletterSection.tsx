"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  const avatars = [
    "/website-images/faces1.png",
    "/website-images/faces2.png",
    "/website-images/faces3.png",
    "/website-images/faces4.png",
    "/website-images/faces5.png",
    "/website-images/faces6.png",
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 6 Face Avatars Grid + Vintage Map Book Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* 6 Face Avatars Grid */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4">
              {avatars.map((av, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-100 shadow-xs ring-1 ring-gray-100 transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={av}
                    alt="Community reader"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Vintage Map Book Illustration */}
            <div className="relative w-56 h-28 opacity-90 transition-transform duration-300 hover:scale-105">
              <Image
                src="/website-images/Group-11.png"
                alt="Vintage World Map"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Copedia Newsletter Form (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Copedia Kicker */}
            <div className="inline-flex items-center space-x-2">
              <div className="w-5 h-5 rounded-md bg-[#8AC63C] text-[#1F1F1F] flex items-center justify-center font-bold text-xs">
                C
              </div>
              <span className="text-[#8AC63C] font-semibold text-sm tracking-wide font-display">
                Copedia
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F]">
              Culture In Your Inbox
            </h2>

            {/* Copy */}
            <p className="text-xs sm:text-sm text-[#4B4B4B] font-body leading-relaxed">
              Get a fresh dose of global culture delivered straight to your inbox. From fun trivia
              and cultural traditions to inspiring stories and platform updates — Copedia keeps you
              connected to the heartbeat of the world.
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
              Whether you&apos;re curious about distant rituals or daily life across oceans, our weekly
              newsletter brings authentic global voices directly to you.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="pt-2">
              <label htmlFor="email-input" className="block text-xs font-semibold text-[#1F1F1F] mb-1.5">
                Email Address
              </label>
              <div className="flex max-w-md items-center">
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email here"
                  required
                  className="flex-grow px-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-l-full focus:outline-none focus:border-[#8AC63C] focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#8AC63C] hover:bg-[#7ab52e] text-[#1F1F1F] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-r-full transition-colors shrink-0 shadow-xs"
                >
                  {status === "loading" ? "..." : "Notify"}
                </button>
              </div>

              {/* Status Notice */}
              {status === "success" && (
                <p className="text-xs text-green-600 mt-2 font-medium">
                  Thanks — you&apos;re on the list. Watch your inbox for the next Geofroggy Weekly.
                </p>
              )}

              <p className="text-[11px] text-gray-400 mt-2">
                We respect your inbox — no spam, just great global content.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
