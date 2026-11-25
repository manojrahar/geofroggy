import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToShareBanner() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background vector pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/website-images/partner_bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-display font-semibold text-[36px] lg:text-[40px] text-white leading-tight">
          Ready to Share Your World?
        </h2>

        <div className="mt-2 mb-6 flex justify-center">
          <Image
            src="/website-images/moreimages/Vector-4.png"
            alt=""
            width={212}
            height={14}
            className="brightness-0 invert"
          />
        </div>

        <p className="font-prose text-[16px] text-white leading-[23px] mb-8 max-w-2xl mx-auto">
          Every story helps build a more connected and compassionate planet.
        </p>

        <Link
          href="/submit-story"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-display font-medium text-[16px] px-8 py-3 rounded-[5px] transition-colors shadow-md"
        >
          Share your experience
        </Link>
      </div>
    </section>
  );
}
