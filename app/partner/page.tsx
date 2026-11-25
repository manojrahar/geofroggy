"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Handshake, Globe, Sparkles, Building2 } from "lucide-react";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    tier: "Regional Hub Sponsor",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const tiers = [
    {
      name: "Platform Partner",
      price: "$25,000 / yr",
      desc: "Global brand presence across our entire storytelling map and newsletter distribution.",
      features: [
        "Featured logo on interactive global map",
        "Co-branded monthly cultural feature story",
        "Dedicated corporate social responsibility report",
        "Executive roundtable access with regional ambassadors",
      ],
      popular: true,
    },
    {
      name: "Regional Hub Sponsor",
      price: "$10,000 / yr",
      desc: "Fund dedicated cultural coverage and storytelling circles in a specific continent or nation.",
      features: [
        "Sponsor badge across targeted regional hub pages",
        "Quarterly field storytelling impact reports",
        "Direct engagement with regional ambassadors",
        "Co-branded localized educational workshops",
      ],
      popular: false,
    },
    {
      name: "Cultural Grant Sponsor",
      price: "$5,000 / yr",
      desc: "Directly underwrite documentation grants for endangered languages and oral folklore.",
      features: [
        "Full attribution on funded documentary projects",
        "Permanent archive credits for sponsored traditions",
        "Direct messages from supported field contributors",
      ],
      popular: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Header */}
      <section className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden">
        <Image
          src="/website-images/involved_hero_image.png"
          alt="Partner with Geofroggy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[22px] sm:text-[26px] lg:text-[30px] px-12 py-1 leading-tight mb-2">
            Partnership & Sponsorship
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-tight">
            Help Us Put the World Within Reach
          </h1>
          <p className="text-white/90 font-prose text-[16px] sm:text-[18px] mt-3 max-w-2xl">
            Geofroggy is more than a digital map — it's a vibrant community exploring culture, geography, and global connection.
          </p>
        </div>
      </section>

      {/* 2. Why Partner With Geofroggy */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-display font-medium text-[22px] text-secondary">
              Strategic Value
            </span>
            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight mt-1">
              Why Sponsor Geofroggy?
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-5">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-brand-black mb-2">
                Authentic Global Audience
              </h3>
              <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed">
                Reach culturally curious, highly engaged readers across 74+ countries looking for meaningful human stories.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-5">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-brand-black mb-2">
                Brand Values Alignment
              </h3>
              <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed">
                Associate your institution with authentic education, cultural diversity, and ethical global preservation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-5">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-brand-black mb-2">
                Measurable Cultural Impact
              </h3>
              <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed">
                Every sponsorship dollar directly funds community storytellers, regional workshops, and multilingual translations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sponsorship Tiers */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838]">
              Partnership Packages
            </h2>
            <p className="font-prose text-[16px] text-gray-500 mt-2">
              Flexible sponsorship packages tailored to your organization's mission and outreach goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 border flex flex-col transition-all relative ${
                  tier.popular
                    ? "border-secondary shadow-lg scale-105 z-10"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-[22px] text-brand-black mb-2">
                  {tier.name}
                </h3>
                <div className="font-display font-bold text-[28px] text-primary mb-3">
                  {tier.price}
                </div>
                <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-prose text-gray-700">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#partner-form"
                  onClick={() => setFormData({ ...formData, tier: tier.name })}
                  className={`w-full py-2.5 rounded-lg text-center font-display font-medium text-[15px] transition-colors ${
                    tier.popular
                      ? "bg-secondary hover:bg-secondary-dark text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Inquire About Tier
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partner Inquiry Form */}
      <section id="partner-form" className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-medium text-[28px] sm:text-[34px] text-primary">
              Start a Conversation
            </h2>
            <p className="font-prose text-[15px] text-[#5E5E5E] mt-2">
              Our executive partnerships director will respond with a tailored proposal within 48 hours.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-md">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-[24px] font-semibold text-primary mb-2">
                  Inquiry Received!
                </h3>
                <p className="font-prose text-[16px] text-[#5E5E5E]">
                  Thank you, {formData.name}. We look forward to exploring a partnership with {formData.org || "your organization"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                      Organization / Brand Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="e.g. Cultural Heritage Foundation"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@foundation.org"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                    Preferred Partnership Tier
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full h-11 px-3 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                  >
                    <option value="Platform Partner">Platform Partner ($25,000 / yr)</option>
                    <option value="Regional Hub Sponsor">Regional Hub Sponsor ($10,000 / yr)</option>
                    <option value="Cultural Grant Sponsor">Cultural Grant Sponsor ($5,000 / yr)</option>
                    <option value="Custom Collaboration">Custom Institutional Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                    Partnership Goals & Scope
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you hope to achieve together..."
                    className="w-full p-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-display font-medium text-[16px] py-3 rounded-[6px] transition-colors shadow-sm"
                >
                  Submit Partnership Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
