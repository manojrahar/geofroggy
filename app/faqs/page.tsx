"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  icon: string;
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    icon: "🧭",
    title: "General Information",
    items: [
      {
        q: "What is Geofroggy?",
        a: "Geofroggy is a cultural media platform that brings geography to life through interactive storytelling. Users explore the world by engaging with timelines, trivia, community stories, and multimedia content—all centered around real places and human experiences.",
      },
      {
        q: "How do I get started?",
        a: "Sign up for a free account, complete your profile, and start exploring. You can follow countries that interest you, join community discussions, and submit your own stories or timelines.",
      },
    ],
  },
  {
    icon: "👤",
    title: "Account Management",
    items: [
      {
        q: "How do I create an account?",
        a: "Click “Sign Up” at the top of any page, enter your email and a password, then verify your email address to activate your account.",
      },
      {
        q: "How do I reset my password?",
        a: "On the login screen, click “Forgot password?” and follow the instructions sent to your registered email.",
      },
      {
        q: "How do I update my profile or email address?",
        a: "Go to Settings → Account from your profile menu. You can update your display name, email, profile photo, and other personal details there.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to Settings → Account and select “Delete account.” This action is permanent and will remove all your content and personal data.",
      },
    ],
  },
  {
    icon: "📝",
    title: "Content Guidelines",
    items: [
      {
        q: "What kind of content can I post?",
        a: "You can post stories, photos, videos, and timelines about places, cultures, and experiences. All content should respect our Community Guidelines.",
      },
      {
        q: "How do I reset my password?",
        a: "On the login screen, click “Forgot password?” and follow the instructions sent to your registered email.",
      },
      {
        q: "Are there restrictions on what I can post?",
        a: "Yes — content must follow our Community Guidelines. Hate speech, harassment, illegal content, or unauthorized personal information is not permitted.",
      },
      {
        q: "Can Geofroggy use my content?",
        a: "You retain ownership of everything you post. By submitting, you grant Geofroggy and GeoffMedia a non-exclusive license to display and promote it on the platform — see our Terms of Use for the full details.",
      },
    ],
  },
  {
    icon: "🔒",
    title: "Privacy & Security",
    items: [
      {
        q: "How is my personal information protected?",
        a: "We use industry-standard security measures to protect your data, and access is limited to authorized personnel under strict confidentiality obligations.",
      },
      {
        q: "Can I control who sees my content?",
        a: "Yes — most posts have privacy controls so you can share publicly, with friends, or keep things private. Defaults can be adjusted in Settings.",
      },
      {
        q: "Is Geofroggy COPPA/GDPR compliant?",
        a: "We follow applicable data-protection laws including COPPA (for users under 13) and GDPR (for users in the EU). See our Privacy Policy for full details.",
      },
    ],
  },
  {
    icon: "⚙️",
    title: "Technical Support",
    items: [
      {
        q: "What should I do if I encounter a technical issue?",
        a: "First, refresh the page or clear your browser cache. If the problem persists, email support@geofroggy.com with a description and any screenshots.",
      },
      {
        q: "How can I report a bug?",
        a: "Use the “Report a bug” option in your account menu, or email support@geofroggy.com with steps to reproduce the issue.",
      },
    ],
  },
  {
    icon: "💳",
    title: "Billing & Payments",
    items: [
      {
        q: "Is Geofroggy free to use?",
        a: "Yes — Geofroggy is free to join. Some premium features and educational tools may require a paid subscription.",
      },
      {
        q: "How do I manage or cancel a subscription?",
        a: "Go to Settings → Billing to view your plan, update your payment method, or cancel at any time.",
      },
    ],
  },
  {
    icon: "🌍",
    title: "Community & Contributions",
    items: [
      {
        q: "How do I submit a story or timeline idea?",
        a: "Use the “Submit a Story” button in the navigation, or visit your country page and add directly from there.",
      },
      {
        q: "What are Geofroggy scavenger hunts?",
        a: "Scavenger hunts are guided exploration challenges that let you discover places, facts, and stories around a specific theme — often with rewards for participation.",
      },
      {
        q: "What are timelines?",
        a: "Timelines are chronological collections of moments, events, or stories tied to a place or theme. Anyone in the community can contribute to them.",
      },
    ],
  },
  {
    icon: "🎓",
    title: "Ambassadors & Educators",
    items: [
      {
        q: "How do I become a Geofroggy Ambassador?",
        a: "Visit the Become an Ambassador page, fill out the application, and our team will review and follow up.",
      },
      {
        q: "Can educators use Geofroggy in the classroom?",
        a: "Yes — Geofroggy offers tools and curated content for educators. Reach out to support@geofroggy.com for more on classroom plans.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>("0-0");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories
    .map((cat) => {
      const filteredItems = cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, items: filteredItems };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <Image
        src="/website-images/abstractart2.png"
        alt=""
        width={184}
        height={186}
        className="pointer-events-none absolute -top-16 left-2 rotate-[-1.39deg]"
      />
      <Image
        src="/website-images/abstractart1.png"
        alt=""
        width={320}
        height={320}
        className="pointer-events-none absolute right-0 top-[30%] hidden lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-12">
          <div className="min-w-0">
            <h2 className="font-display text-[20px] font-semibold text-[#383838]">
              FAQs
            </h2>
            <p className="mt-4 font-prose text-[16px] leading-[26px] text-[#4B4B4B]">
              Welcome to the{" "}
              <span className="font-semibold text-[#383838]">Geofroggy</span>{" "}
              FAQ section! Here you&apos;ll find answers to common questions about
              how to use the platform, manage your account, share content, and
              connect with the community. If you don&apos;t see your question
              here, feel free to reach out to{" "}
              <a
                href="mailto:support@geofroggy.com"
                className="font-semibold text-primary underline underline-offset-2 hover:text-[#0f3d5c]"
              >
                support@geofroggy.com.
              </a>
            </p>

            <form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-[480px] items-stretch gap-2"
            >
              <label className="sr-only" htmlFor="faq-search">
                Search FAQs
              </label>
              <input
                id="faq-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Here for any FAQs"
                className="min-w-0 flex-1 rounded-[8px] bg-[#F1F1F1] px-5 py-3 font-prose text-[14px] text-[#383838] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-secondary/40"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex aspect-square items-center justify-center rounded-[8px] bg-secondary px-4 text-white transition-opacity hover:opacity-90"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-10 space-y-10">
              {filteredCategories.map((category, catIndex) => (
                <div key={category.title}>
                  <h3 className="flex items-center gap-2 font-display text-[20px] font-semibold text-[#383838]">
                    <span aria-hidden="true">{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {category.items.map((item, itemIndex) => {
                      const id = `${catIndex}-${itemIndex}`;
                      const isOpen = openId === id;
                      return (
                        <div
                          key={id}
                          className={`rounded-[8px] transition-colors ${
                            isOpen ? "bg-primary" : "bg-[#F1F1F1]"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenId((prev) => (prev === id ? null : id))
                            }
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                          >
                            <span
                              className={`font-display text-[15px] font-semibold ${
                                isOpen ? "text-white" : "text-[#383838]"
                              }`}
                            >
                              {item.q}
                            </span>
                            {isOpen ? (
                              <Minus className="h-5 w-5 shrink-0 text-white" />
                            ) : (
                              <Plus className="h-5 w-5 shrink-0 text-[#383838]" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5">
                              <p className="font-prose text-[14px] leading-[22px] text-white/90">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="sticky top-24">
              <Image
                src="/website-images/pana_faq.png"
                alt="FAQ illustration"
                width={680}
                height={520}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
