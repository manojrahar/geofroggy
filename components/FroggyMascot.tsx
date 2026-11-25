"use client";

import React, { useEffect, useState } from "react";
import { playFrogRibbit, playHappyJump, playTongueSnap } from "@/lib/soundEffects";

export type FroggyVariant = "classic" | "traveller" | "umbrella";

interface FroggyMascotProps {
  variant?: FroggyVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  onClick?: () => void;
  autoJump?: boolean;
  catchInsect?: boolean;
}

const sizeMap = {
  sm: 64,
  md: 86,
  lg: 112,
};

export default function FroggyMascot({
  variant = "traveller",
  size = "md",
  className = "",
  label,
  onClick,
  autoJump = true,
  catchInsect = true,
}: FroggyMascotProps) {
  const [hopping, setHopping] = useState(false);
  const [tongueOut, setTongueOut] = useState(false);
  const [speechText, setSpeechText] = useState<string | null>(null);
  const px = sizeMap[size];

  // Periodic visual insect-catch animation every ~6s
  useEffect(() => {
    if (!catchInsect) return;
    const interval = setInterval(() => {
      setTongueOut(true);
      setTimeout(() => setTongueOut(false), 550);
    }, 6000);
    return () => clearInterval(interval);
  }, [catchInsect]);

  const handleTap = () => {
    setHopping(true);
    setTongueOut(true);
    setSpeechText(catchInsect ? "Gulp! Ribbit!" : "Ribbit!");

    if (catchInsect) {
      playTongueSnap();
      setTimeout(() => playFrogRibbit(), 220);
    } else {
      playHappyJump();
      setTimeout(() => playFrogRibbit(), 150);
    }

    setTimeout(() => setTongueOut(false), 550);
    setTimeout(() => setHopping(false), 680);
    setTimeout(() => setSpeechText(null), 1300);

    onClick?.();
  };

  return (
    <button
      type="button"
      data-frog-sound="true"
      onClick={handleTap}
      aria-label={label || "Froggy mascot — tap to jump, catch insects & ribbit!"}
      title="Tap Froggy to jump, catch a fly & ribbit!"
      className={`group relative inline-flex flex-col items-center justify-center focus:outline-none select-none cursor-pointer ${
        hopping
          ? "animate-frog-super-hop"
          : autoJump
          ? "animate-frog-idle-hop"
          : ""
      } ${className}`}
    >
      {/* Floating Gulp / Ribbit reaction pill */}
      {speechText && (
        <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-secondary text-white font-display text-[11px] font-bold shadow-md whitespace-nowrap z-20 animate-bounce">
          {speechText}
        </span>
      )}

      <svg
        width={px}
        height={px}
        viewBox="0 0 150 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_6px_12px_rgba(23,88,131,0.22)] transition-transform duration-200 group-hover:scale-110 overflow-visible"
      >
        {/* Raindrops for Umbrella Frog */}
        {variant === "umbrella" && (
          <g>
            <path
              d="M22 18L20 26"
              stroke="#38BDF8"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-rain-drop"
            />
            <path
              d="M126 22L124 30"
              stroke="#38BDF8"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-rain-drop"
              style={{ animationDelay: "0.4s" }}
            />
            <path
              d="M35 6L33 14"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-rain-drop"
              style={{ animationDelay: "0.8s" }}
            />
          </g>
        )}

        {/* Ground Shadow */}
        <ellipse cx="75" cy="126" rx="38" ry="6.5" fill="#175883" fillOpacity="0.16" />

        {/* Traveller Frog Backpack (behind body) */}
        {variant === "traveller" && (
          <g>
            <rect
              x="28"
              y="70"
              width="26"
              height="36"
              rx="9"
              fill="#D97706"
              stroke="#92400E"
              strokeWidth="2"
            />
            <rect x="31" y="76" width="18" height="10" rx="4" fill="#F59E0B" />
            <circle cx="40" cy="81" r="2" fill="#92400E" />
          </g>
        )}

        {/* Back Feet */}
        <path
          d="M40 114C31 114 26 121 31 124C36 127 50 123 54 118"
          fill="#6BA824"
        />
        <path
          d="M110 114C119 114 124 121 119 124C114 127 100 123 96 118"
          fill="#6BA824"
        />

        {/* Frog Body */}
        <ellipse cx="75" cy="94" rx="34" ry="27" fill="#8AC63C" />
        {/* Belly */}
        <ellipse cx="75" cy="98" rx="22" ry="18" fill="#E6F5D0" />

        {/* Traveller Outfit (Explorer Vest + Straps) */}
        {variant === "traveller" && (
          <g>
            <path
              d="M47 80C47 75 54 72 60 74L64 113H49C45 103 44 90 47 80Z"
              fill="#0F4C75"
            />
            <path
              d="M103 80C103 75 96 72 90 74L86 113H101C105 103 106 90 103 80Z"
              fill="#0F4C75"
            />
            {/* Explorer Pocket & Compass Pin */}
            <rect x="90" y="90" width="10" height="9" rx="2" fill="#175883" stroke="#FBBF24" strokeWidth="1" />
            <circle cx="56" cy="86" r="3.5" fill="#FBBF24" />
          </g>
        )}

        {/* Umbrella Frog Outfit (Cozy Raincoat Collar) */}
        {variant === "umbrella" && (
          <g>
            <path
              d="M44 82C46 74 56 72 75 72C94 72 104 74 106 82L102 112H48L44 82Z"
              fill="#F59E0B"
              fillOpacity="0.92"
            />
            <path
              d="M54 74L75 84L96 74"
              stroke="#B45309"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="75" cy="93" r="2.2" fill="#B45309" />
            <circle cx="75" cy="103" r="2.2" fill="#B45309" />
          </g>
        )}

        {/* Front Arms / Legs */}
        <path
          d="M49 95C45 105 45 115 50 118C54 120 58 114 58 104"
          fill="#7AB52E"
        />
        <path
          d="M101 95C105 105 105 115 100 118C96 120 92 114 92 104"
          fill="#7AB52E"
        />

        {/* Frog Head */}
        <ellipse cx="75" cy="64" rx="32" ry="22" fill="#8AC63C" />

        {/* Classic Crown */}
        {variant === "classic" && (
          <path
            d="M62 42L66 31L73 38L75 29L77 38L84 31L88 42Z"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}

        {/* Eye Bumps */}
        <circle cx="57" cy="50" r="13" fill="#8AC63C" />
        <circle cx="93" cy="50" r="13" fill="#8AC63C" />

        {/* Eyes White */}
        <circle cx="57" cy="50" r="9.5" fill="#FFFFFF" />
        <circle cx="93" cy="50" r="9.5" fill="#FFFFFF" />

        {/* Pupils */}
        <circle cx="58.5" cy="50" r="5.5" fill="#175883" />
        <circle cx="94.5" cy="50" r="5.5" fill="#175883" />

        {/* Eye Sparkles */}
        <circle cx="60.5" cy="47.5" r="2" fill="#FFFFFF" />
        <circle cx="96.5" cy="47.5" r="2" fill="#FFFFFF" />

        {/* Traveller Sunglasses / Explorer Goggles + Cap */}
        {variant === "traveller" && (
          <g>
            {/* Cool Sunglasses / Goggles */}
            <rect
              x="44"
              y="42"
              width="25"
              height="16"
              rx="6"
              fill="#0F172A"
              fillOpacity="0.82"
              stroke="#FBBF24"
              strokeWidth="2.2"
            />
            <rect
              x="81"
              y="42"
              width="25"
              height="16"
              rx="6"
              fill="#0F172A"
              fillOpacity="0.82"
              stroke="#FBBF24"
              strokeWidth="2.2"
            />
            <line x1="69" y1="49" x2="81" y2="49" stroke="#FBBF24" strokeWidth="2.5" />
            {/* Lens shine */}
            <line x1="49" y1="46" x2="55" y2="52" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
            <line x1="86" y1="46" x2="92" y2="52" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />

            {/* Traveller Cap */}
            <path
              d="M49 38C50 24 62 18 75 18C88 18 100 24 101 38Z"
              fill="#175883"
            />
            <path
              d="M46 37C58 33 95 33 114 39C116 40 114 43 108 43C94 42 58 41 46 39Z"
              fill="#F59E0B"
            />
            <circle cx="75" cy="27" r="4" fill="#8AC63C" />
          </g>
        )}

        {/* Umbrella Held by Umbrella Frog */}
        {variant === "umbrella" && (
          <g>
            {/* Umbrella Handle & Shaft */}
            <path
              d="M106 102V32"
              stroke="#78350F"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M106 102C106 107 113 107 113 102"
              stroke="#78350F"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            {/* Colorful Umbrella Canopy */}
            <path
              d="M52 34C56 12 80 6 106 6C132 6 144 18 146 34C138 30 130 30 124 34C116 30 108 30 102 34C94 30 86 30 78 34C70 30 60 30 52 34Z"
              fill="#0EA5E9"
              stroke="#0369A1"
              strokeWidth="2"
            />
            {/* Umbrella Stripes */}
            <path
              d="M78 34C80 18 92 8 106 6C100 14 98 24 102 34Z"
              fill="#8AC63C"
            />
            <path
              d="M106 6C120 8 128 18 124 34C118 30 110 30 102 34C102 22 103 12 106 6Z"
              fill="#FBBF24"
            />
            <line x1="106" y1="2" x2="106" y2="6" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {/* Rosy Cheeks */}
        <ellipse cx="48" cy="65" rx="5.5" ry="3.2" fill="#FCA5A5" fillOpacity="0.65" />
        <ellipse cx="102" cy="65" rx="5.5" ry="3.2" fill="#FCA5A5" fillOpacity="0.65" />

        {/* Friendly Smile */}
        <path
          d="M59 68C64 76 86 76 91 68"
          stroke="#175883"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Animated Pink Tongue Shooting Out to Catch the Insect! */}
        {tongueOut && (
          <g>
            <path
              d="M84 70Q108 66 128 42"
              stroke="#F472B6"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="129" cy="41" r="5.5" fill="#EC4899" />
          </g>
        )}

        {/* Buzzing Little Insect / Firefly */}
        {catchInsect && !tongueOut && (
          <g className="animate-fly-buzz">
            {/* Wings */}
            <ellipse cx="127" cy="36" rx="4" ry="2.2" transform="rotate(-25 127 36)" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.8" />
            <ellipse cx="133" cy="36" rx="4" ry="2.2" transform="rotate(25 133 36)" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.8" />
            {/* Body */}
            <ellipse cx="130" cy="40" rx="3.5" ry="2.5" fill="#1E293B" />
            {/* Firefly glow */}
            <circle cx="132" cy="40" r="1.8" fill="#FDE047" />
          </g>
        )}
      </svg>

      {label && (
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-display font-semibold shadow-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </button>
  );
}
