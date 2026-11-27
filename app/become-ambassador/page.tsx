"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Check, Globe, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";

export default function BecomeAmbassadorPage() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    optionalLinks: "",
    briefIntroduction: "",
    whyAmbassador: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Zanele, South Africa",
      quote:
        "Being a Geofroggy Ambassador helped me share my country’s hidden gems and indigenous traditions with a global audience who truly cares.",
      rating: 5,
      avatar: "/website-images/contributor1.png",
    },
    {
      name: "Mateo, Colombia",
      quote:
        "Connecting coffee-growing families in the Andes to readers across Europe made me realize the immense power of personal storytelling.",
      rating: 5,
      avatar: "/website-images/contributor4.png",
    },
    {
      name: "Amina, Nigeria",
      quote:
        "Our Kano dye-pit photo series gained recognition and support from cultural researchers around the world through Geofroggy.",
      rating: 5,
      avatar: "/website-images/contributor3.png",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.country && formData.agreed) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Header */}
      <section className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden">
        <Image
          src="/website-images/ambassador_hero_bg.png"
          alt="Geofroggy Ambassadors"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <span className="bg-linear-to-r from-secondary/0 via-secondary to-secondary/0 text-white font-display font-semibold text-[22px] sm:text-[26px] lg:text-[30px] px-12 py-1 leading-tight mb-2">
            Ambassador Network
          </span>
          <h1 className="text-white font-display font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-tight">
            Represent Your Region on the Global Stage
          </h1>
          <p className="text-white/90 font-prose text-[16px] sm:text-[18px] mt-3 max-w-2xl">
            Lead local storytelling circles, mentor emerging writers, and ensure your heritage is celebrated with pride.
          </p>
        </div>
      </section>

      {/* 2. Why Become an Ambassador */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-display font-medium text-[22px] text-secondary">
              Your Impact
            </span>
            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight mt-1">
              Why Join the Ambassador Community?
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
            <div className="card-hover-effect card-interactive p-8 rounded-2xl bg-white flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 group-hover:bg-secondary/30 group-hover:scale-110 flex items-center justify-center mb-5 transition-all duration-300">
                <Image src="/website-images/amabassador_do_icon1.png" alt="" width={36} height={36} className="object-contain" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-brand-black mb-2 group-hover:text-primary transition-colors">
                Represent Your Nation
              </h3>
              <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed">
                Be the verified voice and regional focal point for stories, festivals, and cultural preservation in your country.
              </p>
            </div>

            <div className="card-hover-effect card-interactive p-8 rounded-2xl bg-white flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 group-hover:bg-secondary/30 group-hover:scale-110 flex items-center justify-center mb-5 transition-all duration-300">
                <Image src="/website-images/amabassador_do_icon2.png" alt="" width={36} height={36} className="object-contain" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-brand-black mb-2 group-hover:text-primary transition-colors">
                Host Storytelling Circles
              </h3>
              <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed">
                Organize community gatherings, guide youth contributors, and document oral histories that risk being forgotten.
              </p>
            </div>

            <div className="card-hover-effect card-interactive p-8 rounded-2xl bg-white flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 group-hover:bg-secondary/30 group-hover:scale-110 flex items-center justify-center mb-5 transition-all duration-300">
                <Image src="/website-images/amabassador_do_icon3.png" alt="" width={36} height={36} className="object-contain" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-brand-black mb-2 group-hover:text-primary transition-colors">
                Grants & Recognition
              </h3>
              <p className="font-prose text-[14px] text-[#5E5E5E] leading-relaxed">
                Access micro-grants for local cultural documentation, editorial mentorship, and official verified badges.
              </p>
            </div>
          </div>

          {/* Ambassador Curiosity & Community Photo Strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="group card-hover-effect card-interactive relative aspect-[4/3] rounded-2xl overflow-hidden bg-white"
              >
                <Image
                  src={`/website-images/ambassador_curiosity${num}.png`}
                  alt={`Ambassador community highlight ${num}`}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials Carousel */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-display font-medium text-[22px] text-secondary">
              Testimonials
            </span>
            <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-[#383838] leading-tight mt-1">
              What Our Ambassadors Are Saying
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl card-hover-effect card-interactive text-center relative">
            <div className="flex justify-center gap-1 mb-4 text-[#FFC107]">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <blockquote className="font-prose italic text-[18px] sm:text-[20px] text-brand-black leading-relaxed mb-6">
              {testimonials[activeTestimonial].quote}
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                <Image
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-display font-semibold text-[16px] text-brand-black">
                  {testimonials[activeTestimonial].name}
                </h4>
                <span className="text-xs text-secondary font-medium">Verified Ambassador</span>
              </div>
            </div>

            {/* Carousel navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === i ? "bg-primary w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Application Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-medium text-[28px] sm:text-[34px] text-primary">
              Become a Geofroggy Ambassador
            </h2>
            <p className="font-prose text-[15px] text-[#5E5E5E] mt-2">
              Fill out this quick form and our regional selection committee will be in touch within 5 business days.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl card-hover-effect">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-[24px] font-semibold text-primary mb-2">
                  Application Received!
                </h3>
                <p className="font-prose text-[16px] text-[#5E5E5E]">
                  Thank you for your interest in becoming a Geofroggy Ambassador. We will review your application and email you shortly at {formData.email}.
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
                    placeholder="e.g. Amina Diallo"
                    className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                      Country of Representation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Senegal"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="amina@example.com"
                      className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                    Social Profile or Portfolio Links (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.optionalLinks}
                    onChange={(e) => setFormData({ ...formData, optionalLinks: e.target.value })}
                    placeholder="Instagram, LinkedIn, portfolio link"
                    className="w-full h-11 px-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                    Brief Introduction & Community Background *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.briefIntroduction}
                    onChange={(e) => setFormData({ ...formData, briefIntroduction: e.target.value })}
                    placeholder="Tell us about yourself and your relationship to your local culture..."
                    className="w-full p-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 font-prose">
                    Why You Want to Be an Ambassador *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.whyAmbassador}
                    onChange={(e) => setFormData({ ...formData, whyAmbassador: e.target.value })}
                    placeholder="What cultural stories in your region deserve more global attention?"
                    className="w-full p-3.5 rounded-lg border border-gray-300 font-prose text-[14px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="agreed"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="agreed" className="text-xs text-gray-600 font-prose">
                    I agree to the Geofroggy Ambassador Code of Conduct and commit to upholding respectful, inclusive cultural storytelling.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-theme animate-btn-shake w-full !py-4 active:scale-95"
                >
                  Submit Ambassador Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
