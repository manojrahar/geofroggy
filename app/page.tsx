import HeroSection from "@/components/home/HeroSection";
import StoriesBeyondBorders from "@/components/home/StoriesBeyondBorders";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import ContributorsShowcase from "@/components/home/ContributorsShowcase";
import AroundTheWorldSection from "@/components/home/AroundTheWorldSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ReadyToShareBanner from "@/components/home/ReadyToShareBanner";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Full-bleed Hero with carousel & floating avatars */}
      <HeroSection />

      {/* 2. Stories Beyond Borders narrative & photo gallery */}
      <StoriesBeyondBorders />

      {/* 3. What We Offer 3 leaf-bordered cards */}
      <WhatWeOffer />

      {/* 4. Celebrating Our Contributors showcase */}
      <ContributorsShowcase />

      {/* 5. Around the World This Week 3 event cards */}
      <AroundTheWorldSection />

      {/* 6. Get Involved with Geofroggy 4 pathways & celebration photo */}
      <GetInvolvedSection />

      {/* 7. Culture In Your Inbox (Copedia Newsletter) */}
      <NewsletterSection />

      {/* 8. Ready to Share Your World CTA banner */}
      <ReadyToShareBanner />
    </div>
  );
}
