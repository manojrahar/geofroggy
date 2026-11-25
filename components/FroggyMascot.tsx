"use client";

import React, { useState } from "react";
import { playFrogRibbit } from "@/lib/soundEffects";

interface FroggyMascotProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  onClick?: () => void;
  autoJump?: boolean;
}

const sizeMap = {
  sm: 52,
  md: 72,
  lg: 96,
};

export default function FroggyMascot({
  size = "md",
  className = "",
  label,
  onClick,
  autoJump = true,
}: FroggyMascotProps) {
  const [hopping, setHopping] = useState(false);
  const px = sizeMap[size];

  const handleTap = () => {
    playFrogRibbit();
    setHopping(true);
    setTimeout(() => setHopping(false), 650);
    onClick?.();
  };

  return (
    <button
      type="button"
      data-frog-sound="true"
      onClick={handleTap}
      aria-label={label || "Froggy mascot — click to hear a ribbit!"}
      title="Click Froggy to hop & ribbit!"
      className={`group relative inline-flex flex-col items-center justify-center focus:outline-none select-none cursor-pointer ${
        hopping
          ? "animate-frog-super-hop"
          : autoJump
          ? "animate-frog-idle-hop"
          : ""
      } ${className}`}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_6px_10px_rgba(23,88,131,0.22)] transition-transform duration-200 group-hover:scale-110"
      >
        {/* Soft shadow */}
        <ellipse cx="60" cy="108" rx="34" ry="6" fill="#175883" fillOpacity="0.16" />

        {/* Back feet */}
        <path
          d="M28 96C20 96 15 102 20 105C25 108 38 104 42 100"
          fill="#6BA824"
        />
        <path
          d="M92 96C100 96 105 102 100 105C95 108 82 104 78 100"
          fill="#6BA824"
        />

        {/* Body */}
        <ellipse cx="60" cy="76" rx="34" ry="28" fill="#8AC63C" />
        {/* Belly */}
        <ellipse cx="60" cy="80" rx="22" ry="19" fill="#E6F5D0" />

        {/* Front legs */}
        <path
          d="M36 78C32 88 32 98 37 101C41 103 45 97 45 87"
          fill="#7AB52E"
        />
        <path
          d="M84 78C88 88 88 98 83 101C79 103 75 97 75 87"
          fill="#7AB52E"
        />

        {/* Head */}
        <ellipse cx="60" cy="48" rx="32" ry="22" fill="#8AC63C" />

        {/* Tiny golden crown */}
        <path
          d="M47 26L51 15L58 22L60 13L62 22L69 15L73 26Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Eye bumps */}
        <circle cx="42" cy="34" r="13" fill="#8AC63C" />
        <circle cx="78" cy="34" r="13" fill="#8AC63C" />

        {/* Eyes white */}
        <circle cx="42" cy="34" r="9.5" fill="#FFFFFF" />
        <circle cx="78" cy="34" r="9.5" fill="#FFFFFF" />

        {/* Pupils */}
        <circle cx="43.5" cy="34" r="5.5" fill="#175883" />
        <circle cx="79.5" cy="34" r="5.5" fill="#175883" />

        {/* Eye sparkles */}
        <circle cx="45.5" cy="31.5" r="2" fill="#FFFFFF" />
        <circle cx="81.5" cy="31.5" r="2" fill="#FFFFFF" />

        {/* Rosy cheeks */}
        <ellipse cx="33" cy="49" rx="5.5" ry="3.2" fill="#FCA5A5" fillOpacity="0.65" />
        <ellipse cx="87" cy="49" rx="5.5" ry="3.2" fill="#FCA5A5" fillOpacity="0.65" />

        {/* Friendly smile */}
        <path
          d="M44 52C49 60 71 60 76 52"
          stroke="#175883"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Little scarf / globe badge on chest */}
        <circle cx="60" cy="76" r="8" fill="#175883" />
        <ellipse cx="60" cy="76" rx="4" ry="7.5" stroke="#8AC63C" strokeWidth="1.2" />
        <line x1="52.5" y1="76" x2="67.5" y2="76" stroke="#8AC63C" strokeWidth="1.2" />
      </svg>

      {label && (
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-display font-semibold shadow-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </button>
  );
}
