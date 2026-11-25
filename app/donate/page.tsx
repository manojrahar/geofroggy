"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check, Heart, ShieldCheck, Globe, Sparkles } from "lucide-react";

const amounts = [10, 25, 50, 100];
const frequencies = ["One - Time", "Monthly", "Quarterly", "Annually"];
const paymentMethods = ["Credit/Debit Card", "PayPal", "Bank Transfer"];
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Nigeria",
  "South Africa",
  "Brazil",
  "Other",
];

const waysToGive = [
  {
    title: "One Time Donation",
    description: "Make a quick impact with a single gift. Every dollar helps amplify real stories from around the globe.",
    icon: "/website-images/Price-tag.png",
  },
  {
    title: "Monthly Supporter",
    description: "Join our circle of monthly givers to globalize storytelling year-round. Your ongoing support keeps voices alive.",
    icon: "/website-images/globeicon.png",
  },
  {
    title: "Sponsor a Country/Region",
    description: "Fund focused cultural coverage from a place that matters to you. Help bring regional stories to light.",
    icon: "/website-images/Flags.png",
  },
  {
    title: "Corporate Giving",
    description: "Partner with us to align your brand with global connection and empathy. Corporate gifts create lasting change.",
    icon: "/website-images/Chat.png",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("One - Time");
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");
  const [country, setCountry] = useState("United States");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = selectedAmount !== null ? selectedAmount : Number(customAmount) || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount > 0 && email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Banner */}
      <section className="relative w-full h-[280px] sm:h-[320px] lg:h-[350px] overflow-hidden">
        <Image
          src="/website-images/Rectangle-86.jpg"
          alt="Support Geofroggy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[22px] sm:text-[26px] lg:text-[30px] px-12 py-1 leading-tight mb-2">
            Support Stories That Unite
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-tight">
            Keep Cultural Storytelling Alive
          </h1>
        </div>
      </section>

      {/* 2. Why Your Support Matters */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <Image
          src="/website-images/abstractart2.png"
          alt=""
          width={184}
          height={186}
          className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg] select-none"
        />
        <Image
          src="/website-images/Group-11.png"
          alt=""
          width={196}
          height={184}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none opacity-40"
        />

        <div className="relative mx-auto max-w-215 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-[38px] font-semibold leading-tight text-brand-black sm:text-[44px]">
            Why Your Support Matters
          </h2>
          <div className="mt-2 flex justify-center">
            <Image
              src="/website-images/moreimages/Vector-1.svg"
              alt=""
              width={260}
              height={9}
            />
          </div>

          <p className="mt-7 font-display text-[17px] font-semibold text-primary underline sm:text-[19px]">
            You're Not Just Donating — You're Amplifying Humanity
          </p>

          <p className="mt-4 font-prose text-[16px] leading-8 text-[#4B4B4B]">
            Geofroggy exists to unite people through personal stories, shared culture, and geographic curiosity. But we can't do it alone. With your support, we fund contributors in underserved regions, translate stories into local languages, and build the global archive that fosters empathy and education.
          </p>

          {/* Sierra Leone Quote Box */}
          <div className="relative mt-10 overflow-hidden rounded-sm border border-dashed border-primary/30 bg-blue-50 py-7 pl-8 pr-14 text-left">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-primary" />
            <p className="font-quote text-[20px] font-bold leading-7.25 text-brand-black">
              “When I shared my story, I didn't just write history — I felt seen.”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-primary/20 relative">
                <Image
                  src="/website-images/contributor1.png"
                  alt="Contributor"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-script text-[18px] text-primary">
                A contributor from Sierra Leone
              </span>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 right-5 font-display text-[80px] font-bold leading-none text-secondary/40 select-none"
            >
              ”
            </span>
          </div>
        </div>
      </section>

      {/* 3. How Would You Like to Give (4 Cards with Rectangle-14.svg) */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-[38px] font-semibold leading-tight text-brand-black sm:text-[44px]">
              How Would You Like to Give?
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {waysToGive.map((card, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center px-6 py-10 transition-transform hover:-translate-y-1"
                style={{
                  backgroundImage: "url('/website-images/Rectangle-14.svg')",
                  backgroundSize: "100% 100%",
                  borderRadius: "10px",
                }}
              >
                <div className="relative z-10 mb-5 h-14 w-14 rounded-full bg-secondary/30 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="relative z-10 mb-3 text-center font-display text-[17px] font-semibold text-brand-black">
                  {card.title}
                </h3>
                <p className="relative z-10 text-center font-prose text-[14px] leading-6 text-[#4B4B4B]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Small Gifts, Big Ripples & Budget Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-semibold text-[32px] sm:text-[38px] text-[#383838]">
              Where Your Donation Goes
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-4.png"
                alt=""
                width={212}
                height={14}
              />
            </div>
            <p className="font-prose text-[15px] text-[#5E5E5E] max-w-xl mx-auto mt-3">
              We operate with radical financial transparency. 85% of all funds directly sponsor community storytellers and cultural archive translation.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[680px] aspect-[16/9]">
              <Image
                src="/website-images/money_goes.png"
                alt="Budget allocation breakdown"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive "Make Your Gift" Form */}
      <section id="donate-form" className="relative overflow-hidden py-16 lg:py-20 bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-[38px] font-semibold leading-tight text-brand-black sm:text-[44px]">
              Make Your Gift
            </h2>
            <div className="mt-2 flex justify-center">
              <Image
                src="/website-images/moreimages/Vector-1.svg"
                alt=""
                width={260}
                height={9}
              />
            </div>
          </div>

          <div className="mx-auto max-w-[814px] rounded-2xl bg-white px-8 py-10 shadow-sm sm:px-10 border border-gray-100">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 text-secondary">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-[24px] font-semibold text-brand-black mb-2">
                  Thank You for Your Generosity!
                </h3>
                <p className="font-prose text-[15px] text-[#4B4B4B] max-w-md mx-auto">
                  Your pledge of ${finalAmount} ({frequency}) helps preserve living cultural voices around the globe. A receipt has been sent to {email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-primary font-semibold hover:underline"
                >
                  Make another contribution
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Frequency Selector */}
                <div>
                  <label className="block font-display text-[15px] font-semibold text-brand-black mb-2">
                    Giving Frequency
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {frequencies.map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          frequency === freq
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Selector */}
                <div>
                  <label className="block font-display text-[15px] font-semibold text-brand-black mb-2">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-3 rounded-lg text-base font-semibold transition-all ${
                          selectedAmount === amt
                            ? "bg-secondary text-white shadow-sm"
                            : "border border-gray-300 text-gray-700 hover:border-secondary"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block font-display text-[15px] font-semibold text-brand-black mb-2">
                    Payment Method
                  </label>
                  <div className="relative">
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full appearance-none rounded-md border border-[#D1D5DB] bg-white py-2.5 pl-3 pr-9 font-prose text-[14px] text-brand-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {paymentMethods.map((pm) => (
                        <option key={pm} value={pm}>
                          {pm}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] w-4 h-4" />
                  </div>
                </div>

                {/* Country Selection */}
                <div>
                  <label className="block font-display text-[15px] font-semibold text-brand-black mb-2">
                    Country of Residence
                  </label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full appearance-none rounded-md border border-[#D1D5DB] bg-white py-2.5 pl-3 pr-9 font-prose text-[14px] text-brand-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] w-4 h-4" />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-display text-[15px] font-semibold text-brand-black mb-2">
                    Email Address (for tax receipt)
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-md border border-[#D1D5DB] bg-white py-2.5 px-3 font-prose text-[14px] text-brand-black placeholder:text-[#9CA3AF] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Dedication Note */}
                <div>
                  <label className="block font-display text-[15px] font-semibold text-brand-black mb-2">
                    Dedication Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="In honor of someone, or a message to our community..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full rounded-md border border-[#D1D5DB] bg-white py-2.5 px-3 font-prose text-[14px] text-brand-black placeholder:text-[#9CA3AF] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={finalAmount <= 0 || !email}
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-display font-medium text-[17px] py-3.5 rounded-[6px] transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  Give ${finalAmount} {frequency === "One - Time" ? "Now" : `(${frequency})`}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
