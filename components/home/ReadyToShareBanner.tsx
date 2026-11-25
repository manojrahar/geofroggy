import React from "react";
import Link from "next/link";

export default function ReadyToShareBanner() {
  return (
    <section
      className="w-full py-14 sm:py-16 relative overflow-hidden bg-[#8AC63C]"
      style={{
        backgroundImage: "url('/website-images/reasy_to_share.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3 drop-shadow-sm">
          Ready to Share Your World?
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-white/95 font-body max-w-xl mx-auto mb-8 drop-shadow-xs">
          Every story helps build a more connected and compassionate planet.
        </p>

        <Link
          href="/submit-story"
          className="inline-block bg-[#175883] text-white hover:bg-[#144a6a] font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Share your experience
        </Link>
      </div>
    </section>
  );
}
