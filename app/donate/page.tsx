"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [country, setCountry] = useState("United States");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const amounts = [10, 25, 50, 100];

  const waysToGive = [
    {
      title: "One Time Donation",
      description: "Make a quick impact with a single gift. Every dollar helps amplify real stories from around the globe.",
      icon: "/website-images/give_1.png",
    },
    {
      title: "Monthly Supporter",
      description: "Join our circle of monthly givers to globalize storytelling year-round. Your ongoing support keeps voices alive.",
      icon: "/website-images/give_2.png",
    },
    {
      title: "Sponsor a Country/Region",
      description: "Fund focused cultural coverage from a place that matters to you. Help bring regional stories to light.",
      icon: "/website-images/give_3.png",
    },
    {
      title: "Corporate Giving",
      description: "Partner with us to align your brand with global connection and empathy. Corporate gifts create lasting change.",
      icon: "/website-images/give_4.png",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/website-images/donate_hero.png"
          alt="Support Stories That Unite"
          fill
          className="object-cover object-center brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1 rounded-full uppercase tracking-wider mb-4 font-display">
            Geofroggy Donation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight drop-shadow-md">
            Support Stories That Unite
          </h1>
        </div>
      </section>

      {/* 2. Why Your Support Matters */}
      <section className="w-full py-16 lg:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-3">
            Why Your Support Matters
          </h2>
          <span className="block text-xs sm:text-sm font-semibold text-[#175883] mb-4">
            You&apos;re Not Just Donating — You&apos;re Amplifying Humanity
          </span>

          <p className="text-xs sm:text-sm text-[#4B4B4B] font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Geofroggy exists to unite people through personal stories, shared culture, and
            geographic curiosity. But we can&apos;t do it alone. With your support, we fund contributors
            in underserved regions, translate stories into local languages, and build the global
            archive that fosters empathy and education.
          </p>

          {/* Quote Box */}
          <div className="bg-[#DEECF5]/50 border-l-4 border-[#175883] rounded-r-xl p-6 text-left max-w-2xl mx-auto shadow-xs">
            <p className="font-quote text-sm sm:text-base text-[#175883] italic mb-2">
              &ldquo;When I shared my story, I didn&apos;t just write history — I felt seen.&rdquo;
            </p>
            <span className="font-script text-lg text-[#8AC63C]">
              A contributor from Sierra Leone
            </span>
          </div>
        </div>
      </section>

      {/* 3. How Would You Like to Give? */}
      <section className="w-full py-16 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-3">
              How Would You Like to Give?
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5E5E] font-body leading-relaxed">
              Every contribution helps us build a more connected world. Choose the way of giving that
              works best for you — one-time, monthly, or in honor of someone special.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToGive.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFF7E3] flex items-center justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-sm font-display text-[#1F1F1F] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5E5E5E] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Small Gifts. Big Ripples. */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[#8AC63C] text-xs font-semibold uppercase tracking-wider font-display">
                  Where Money Goes
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mt-1 mb-3">
                  Small Gifts. Big Ripples.
                </h2>
                <p className="text-xs sm:text-sm text-[#5E5E5E] font-body">Your support helps us:</p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#4B4B4B] font-body">
                <div className="flex items-start space-x-2.5">
                  <span className="text-base leading-none">🌍</span>
                  <div>
                    <strong>Enhance the Geofroggy experience</strong> — We&apos;re improving our design and
                    navigation to make exploring global stories more intuitive, accessible, and joyful for everyone.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <span className="text-base leading-none">📚</span>
                  <div>
                    <strong>Build age-appropriate learning journeys</strong> — From curious kids to lifelong
                    learners, we&apos;re designing culturally rich content and timelines tailored to different ages and stages.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <span className="text-base leading-none">🎮</span>
                  <div>
                    <strong>Spark engagement through interactivity</strong> — We&apos;re developing story-based
                    games, global scavenger hunts, and creative challenges that bring geography to life through play.
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-[#8AC63C] pl-3 py-1 text-xs text-[#5E5E5E] font-body italic">
                Every contribution helps us grow with integrity — and when we have more than we
                need, we give back. Our long-term goal is to fund cultural education, support young
                storytellers, and keep the world a little more connected.
              </div>

              <a
                href="#donate-form"
                className="inline-block bg-[#8AC63C] hover:bg-[#7ab52e] text-[#1F1F1F] font-bold text-xs sm:text-sm px-7 py-2.5 rounded-full transition-colors shadow-xs"
              >
                Donate Now
              </a>
            </div>

            {/* Right Graphic: Money Goes (5 cols) */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/website-images/money_goes.png"
                alt="Where your money goes"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Make Your Gift (Form) */}
      <section id="donate-form" className="w-full py-16 bg-gray-50/70 border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-display text-[#1F1F1F] mb-1">
              Make Your Gift
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Amount Presets */}
            <div>
              <label className="block text-xs font-semibold text-[#1F1F1F] mb-2.5">
                Donation Amount
              </label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className={`py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      selectedAmount === amt
                        ? "bg-[#175883] text-white shadow-xs"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("custom");
                }}
                className="w-full px-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8AC63C]"
              />
            </div>

            {/* Frequency & Payment Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1F1F1F] mb-1.5">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8AC63C]"
                >
                  <option value="one-time">One - Time</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1F1F] mb-1.5">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8AC63C]"
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
            </div>

            {/* Country & Receipt Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1F1F1F] mb-1.5">
                  Select Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8AC63C]"
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1F1F] mb-1.5">
                  Email (for receipt)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8AC63C]"
                />
              </div>
            </div>

            {/* Optional Note */}
            <div>
              <label className="block text-xs font-semibold text-[#1F1F1F] mb-1.5">
                Optional Note
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Add a message or dedication..."
                className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8AC63C]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#8AC63C] hover:bg-[#7ab52e] text-[#1F1F1F] font-bold text-sm rounded-xl transition-colors shadow-xs"
            >
              Make Your Gift (${selectedAmount === "custom" ? customAmount || "0" : selectedAmount})
            </button>

            {submitted && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-center text-xs text-green-700">
                <Check className="w-4 h-4 inline-block mr-1 text-green-600" />
                Thank you for your generous pledge! Donations are currently simulated while payment gateways finalize.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
