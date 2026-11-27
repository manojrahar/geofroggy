"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  playFrogRibbit,
  playHappyJump,
  playTongueSnap,
  unlockAudio,
} from "@/lib/soundEffects";

export type FroggyVariant = "classic" | "traveller" | "umbrella";

interface FroggyMascotProps {
  variant?: FroggyVariant;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  label?: string;
  onClick?: () => void;
  autoJump?: boolean;
  catchInsect?: boolean;
  tongueProgress?: number; // 0 to 1 external scroll-driven stretch
  externalSpeech?: string | null;
}

const sizeMap = {
  sm: 72,
  md: 96,
  lg: 132,
  xl: 168,
  "2xl": 200,
};

export default function FroggyMascot({
  size = "md",
  className = "",
  label,
  onClick,
  autoJump = false,
  catchInsect = true,
  tongueProgress = 0,
  externalSpeech = null,
}: FroggyMascotProps) {
  const [hopping, setHopping] = useState(false);
  const [rollingPhase, setRollingPhase] = useState(0);
  const [speechText, setSpeechText] = useState<string | null>(null);
  const px = sizeMap[size];

  // Smooth unroll & snap-back tongue animation on tap
  useEffect(() => {
    if (!hopping) return;
    let frame: number;
    const start = performance.now();
    const duration = 560;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const val =
        t < 0.42
          ? t / 0.42
          : t < 0.56
          ? 1
          : Math.max(0, 1 - (t - 0.56) / 0.44);
      setRollingPhase(val);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setRollingPhase(0);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hopping]);

  const handleTap = () => {
    unlockAudio();
    setHopping(true);
    setSpeechText(catchInsect ? "Gulp! Ribbit!" : "Ribbit!");

    if (catchInsect) {
      playTongueSnap();
      setTimeout(() => playFrogRibbit(), 220);
    } else {
      playHappyJump();
      setTimeout(() => playFrogRibbit(), 150);
    }

    setTimeout(() => setHopping(false), 620);
    setTimeout(() => setSpeechText(null), 1200);

    onClick?.();
  };

  const activeProgress = Math.max(
    rollingPhase,
    Math.min(1, Math.max(0, tongueProgress))
  );

  // Exact mouth & bee target coordinates on the LEFT in 180x180 viewBox (frog flipped left)
  const mouthX = 58;
  const mouthY = 78;
  const beeX = 14;
  const beeY = 50;
  const tipX = mouthX + (beeX - mouthX) * activeProgress;
  const tipY = mouthY + (beeY - mouthY) * activeProgress;
  const ctrlX = mouthX + (beeX - mouthX) * activeProgress * 0.52;
  const ctrlY = mouthY + 8 * Math.sin(activeProgress * Math.PI);

  return (
    <button
      type="button"
      data-frog-sound="true"
      onClick={handleTap}
      aria-label={label || "GeoFroggy"}
      className={`group relative inline-flex flex-col items-center justify-center focus:outline-none select-none cursor-pointer ${
        hopping
          ? "animate-frog-super-hop"
          : autoJump
          ? "animate-frog-idle-hop"
          : ""
      } ${className}`}
    >
      {/* Floating Gulp / Ribbit reaction pill */}
      {(speechText || externalSpeech) && (
        <span className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-secondary text-white font-display text-[11.5px] font-bold shadow-md whitespace-nowrap z-20 animate-bounce">
          {speechText || externalSpeech}
        </span>
      )}

      <div
        className="relative transition-transform duration-300 group-hover:scale-105"
        style={{ width: px, height: px }}
      >
        <Image
          src="/website-images/cute-frog.png"
          alt="Cute green tree frog"
          width={px}
          height={px}
          className="w-full h-full object-contain scale-x-[-1] drop-shadow-[0_10px_18px_rgba(0,0,0,0.22)]"
          priority
        />

        {/* Overlay SVG for Smooth Tongue Landing Dead-Center on the Bee */}
        <svg
          viewBox="0 0 180 180"
          className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Smooth Elastic Pink Tongue */}
          {activeProgress > 0.03 && (
            <g>
              {/* Soft outer tongue */}
              <path
                d={`M${mouthX} ${mouthY}Q${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`}
                stroke="#F472B6"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
              {/* Inner glossy highlight */}
              <path
                d={`M${mouthX} ${mouthY}Q${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`}
                stroke="#FBCFE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.7"
              />
              {/* Sticky rounded tongue tip landing on the bee */}
              <circle
                cx={tipX}
                cy={tipY}
                r={4.2 + 2.2 * activeProgress}
                fill="#EC4899"
                stroke="#DB2777"
                strokeWidth="1"
              />
            </g>
          )}

          {/* Cute Striped Bee (outer g locks position on left; inner g buzzes without overriding translate) */}
          {catchInsect && activeProgress < 0.94 && (
            <g transform={`translate(${beeX}, ${beeY})`}>
              <g className={activeProgress <= 0.05 ? "animate-fly-buzz" : ""}>
              {/* Translucent wings */}
              <ellipse
                cx="-2.5"
                cy="-6"
                rx="4.8"
                ry="2.6"
                transform="rotate(-25 -2.5 -6)"
                fill="#E0F2FE"
                stroke="#38BDF8"
                strokeWidth="0.9"
              />
              <ellipse
                cx="3.5"
                cy="-6"
                rx="4.8"
                ry="2.6"
                transform="rotate(25 3.5 -6)"
                fill="#E0F2FE"
                stroke="#38BDF8"
                strokeWidth="0.9"
              />
              {/* Yellow bee body */}
              <ellipse cx="0" cy="0" rx="6.5" ry="4.5" fill="#FACC15" stroke="#854D0E" strokeWidth="1" />
              {/* Black bee stripes */}
              <path d="M-2 -4.2V4.2M2 -4.2V4.2" stroke="#1E293B" strokeWidth="1.8" />
              {/* Cute eye */}
              <circle cx="3.8" cy="-1" r="0.9" fill="#0F172A" />
              </g>
            </g>
          )}
        </svg>
      </div>

      {label && (
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-display font-semibold shadow-sm whitespace-nowrap">
          {label}
        </span>
      )}
    </button>
  );
}
