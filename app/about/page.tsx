import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Users, BookOpen, Languages, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us - The Heart of Geofroggy",
  description:
    "Explore the world through human stories. Learn about Geofroggy's mission, philosophy, and global community of cultural storytellers.",
};

export default function AboutPage() {
  const stats = [
    { value: "74+", label: "Active Countries", icon: Globe },
    { value: "12,000+", label: "Stories Shared Worldwide", icon: BookOpen },
    { value: "250+", label: "Cultural Tags", icon: Sparkles },
    { value: "30+", label: "Languages Represented", icon: Languages },
    { value: "400+", label: "Community Collaborations", icon: Users },
  ];

  const galleryImages = [
    { src: "/website-images/geo_1.png", alt: "Traditional dancer" },
    { src: "/website-images/geo_2.png", alt: "Cultural celebration" },
    { src: "/website-images/geo_3.png", alt: "Carnival performers" },
    { src: "/website-images/geo_4.png", alt: "Travelers connecting" },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[380px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/website-images/Rectangle-19.png"
          alt="Carnival celebration"
          fill
          className="object-cover object-center brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#8AC63C] text-[#1F1F1F] font-semibold text-xs sm:text-sm px-4 py-1 rounded-full uppercase tracking-wider mb-4 font-display">
            Behind the Frog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight drop-shadow-md">
            The Heart of Geofroggy
          </h1>
        </div>
      </section>

      {/* 2. Explore the World Through Human Stories */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Puzzle Mosaic Graphic (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="inline-block bg-white text-[#8AC63C] font-bold text-xs px-3.5 py-1 rounded-full border border-gray-100 shadow-sm mb-3">
                5000+ People Connected
              </div>
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/website-images/about_explore.png"
                  alt="Explore stories mosaic"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Text & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] leading-tight">
                Explore the World Through Human Stories
              </h2>
              <div className="w-16 h-1 bg-[#8AC63C] rounded-full" />

              <p className="text-sm sm:text-base text-[#4B4B4B] font-body leading-relaxed">
                Welcome to Geofroggy — where the map comes alive through the stories of real
                people. We believe geography isn&apos;t just about borders and cities; it&apos;s about the
                laughter, challenges, traditions, and triumphs of everyday life around the world.
                Whether you&apos;re from a bustling capital or a quiet countryside, your story helps paint
                the full picture of our planet.
              </p>

              <p className="text-sm sm:text-base text-[#5E5E5E] font-body leading-relaxed">
                Join a movement where culture isn&apos;t just consumed — it&apos;s shared, celebrated, and made
                personal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Philosophy & Geography as Story */}
      <section 
        className="w-full py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden"
        style={{
          backgroundImage: "url('/website-images/contributor-bgpattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-1.5 text-[#8AC63C] text-xs font-semibold uppercase tracking-wider mb-2">
            <Globe className="w-4 h-4" />
            <span>Our Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-6">
            Geography as Story
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-base text-[#4B4B4B] font-body leading-relaxed mb-12">
            <p>
              We look beyond the coordinates. To us, geography is made up of the stories that unfold
              in each corner of the world — from sunlit markets in Morocco to snow-covered towns in
              Finland.
            </p>
            <p>
              Geofroggy is a space where people don&apos;t just mark locations; they bring them to life
              through memories, voices, and lived experiences. This philosophy shapes everything we
              do — and it&apos;s what makes our global archive unlike any other.
            </p>
          </div>

          {/* 4 Circular Cultural Vignettes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden shadow-md border-4 border-white transition-transform hover:scale-105 duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={180}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* 5 Stats Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-6 border-t border-gray-200/70">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#8AC63C]">
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm text-[#5E5E5E] font-body mt-1 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Our Mission & Why We Exist */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-[#8AC63C] text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Our Mission</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F]">
                Why We Exist
              </h2>

              <p className="text-sm sm:text-base text-[#4B4B4B] font-body leading-relaxed">
                <strong>Geofroggy</strong> was created to bridge the distance between cultures by
                empowering people to tell their stories. Our goal is to cultivate empathy,
                curiosity, and shared humanity - one voice at a time. Through the lens of
                storytelling, we foster respect for diversity, challenge cultural stereotypes, and
                amplify the perspectives that make the world richer and more connected.
              </p>

              <p className="text-sm sm:text-base text-[#5E5E5E] font-body leading-relaxed">
                This isn&apos;t just a platform — it&apos;s a global movement for cultural literacy and human
                connection.
              </p>
            </div>

            {/* Right Photo (5 cols) */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/website-images/our_mission_image.png"
                alt="Diverse group of global contributors"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Vision & Contributor Quote */}
      <section className="w-full py-16 lg:py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="inline-flex items-center space-x-1.5 text-[#8AC63C] text-xs font-semibold uppercase tracking-wider mb-2">
            <Globe className="w-4 h-4" />
            <span>Our Vision</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1F1F1F] mb-6">
            A Connected World, One Story at a Time
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#4B4B4B] font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            <p>
              We dream of a world where borders don&apos;t divide — they inspire conversation. Where
              learning about another culture is just a scroll away. Our vision is a global tapestry
              stitched together with authentic voices from all walks of life — people sharing
              festivals, family meals, traditions, migrations, milestones, and everything in between.
            </p>
            <p>
              No matter where you&apos;re from, your story has a place here — and it might just change
              someone&apos;s view of the world.
            </p>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-xs text-left max-w-2xl mx-auto">
            <p className="font-quote italic text-sm sm:text-base text-[#175883] leading-relaxed mb-4">
              &ldquo;Geofroggy helped me rediscover the stories of my hometown — and connect with
              people who&apos;ve never even heard of it. It reminded me that every place has a voice, and
              every voice deserves to be heard.&rdquo;
            </p>
            <span className="block font-script text-xl sm:text-2xl text-[#8AC63C]">
              A Geofroggy Contributor from Kenya
            </span>
          </div>

        </div>
      </section>

      {/* 6. Join Our Global Movement Banner */}
      <section
        className="w-full py-16 lg:py-20 relative overflow-hidden bg-[#175883] text-white"
        style={{
          backgroundImage: "url('/website-images/bg_global_movement.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
            Join Our Global Movement
          </h2>
          <p className="text-sm sm:text-base text-gray-200 font-body max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether it&apos;s a childhood tradition, a local custom, or a moment that changed your view
            of the world — your story matters. Join our community of global storytellers and help us
            build a more empathetic, culturally rich tomorrow.
          </p>
          <Link
            href="/submit-story"
            className="inline-block bg-[#8AC63C] text-[#1F1F1F] font-bold text-sm sm:text-base px-8 py-3 rounded-full hover:bg-[#7ab52e] transition-all shadow-md hover:-translate-y-0.5"
          >
            Become a Contributor
          </Link>
        </div>
      </section>
    </div>
  );
}
