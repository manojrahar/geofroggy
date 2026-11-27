"use client";

import React from "react";

/**
 * Subtle, non-intrusive frog silhouette shadows and webbed footprint trails
 * rendered softly across page edges to reinforce the GeoFroggy theme without visual clutter.
 */
export default function FrogThemeAccents() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Top-right subtle webbed frog footprints */}
      <svg
        width="180"
        height="220"
        viewBox="0 0 180 220"
        fill="none"
        className="absolute top-28 right-4 opacity-[0.06] text-[#175883]"
      >
        {/* Footprint 1 */}
        <g transform="translate(90, 150) rotate(-18)">
          <circle cx="0" cy="0" r="6" fill="currentColor" />
          <path d="M-2 0L-14 -14M0 0L0 -18M2 0L14 -14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="-14" cy="-15" r="2.8" fill="currentColor" />
          <circle cx="0" cy="-19" r="2.8" fill="currentColor" />
          <circle cx="14" cy="-15" r="2.8" fill="currentColor" />
        </g>
        {/* Footprint 2 */}
        <g transform="translate(125, 95) rotate(-10)">
          <circle cx="0" cy="0" r="6" fill="#8AC63C" />
          <path d="M-2 0L-14 -14M0 0L0 -18M2 0L14 -14" stroke="#8AC63C" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="-14" cy="-15" r="2.8" fill="#8AC63C" />
          <circle cx="0" cy="-19" r="2.8" fill="#8AC63C" />
          <circle cx="14" cy="-15" r="2.8" fill="#8AC63C" />
        </g>
        {/* Footprint 3 */}
        <g transform="translate(105, 40) rotate(-22)">
          <circle cx="0" cy="0" r="5.5" fill="currentColor" />
          <path d="M-2 0L-13 -13M0 0L0 -16M2 0L13 -13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="-13" cy="-14" r="2.5" fill="currentColor" />
          <circle cx="0" cy="-17" r="2.5" fill="currentColor" />
          <circle cx="13" cy="-14" r="2.5" fill="currentColor" />
        </g>
      </svg>

      {/* Mid-left subtle frog silhouette shadow */}
      <svg
        width="160"
        height="140"
        viewBox="0 0 160 140"
        fill="none"
        className="hidden md:block absolute top-[46%] -left-6 opacity-[0.045] text-[#175883] rotate-[16deg]"
      >
        <path
          d="M80 28C96 28 108 38 112 52C126 58 134 74 128 92C136 98 140 108 134 114C126 120 112 112 106 106C98 112 90 114 80 114C70 114 62 112 54 106C48 112 34 120 26 114C20 108 24 98 32 92C26 74 34 58 48 52C52 38 64 28 80 28Z"
          fill="currentColor"
        />
        <circle cx="63" cy="36" r="10" fill="currentColor" />
        <circle cx="97" cy="36" r="10" fill="currentColor" />
      </svg>

      {/* Bottom-right subtle webbed footprints & lily-pad shadow */}
      <svg
        width="200"
        height="180"
        viewBox="0 0 200 180"
        fill="none"
        className="hidden lg:block absolute bottom-16 right-8 opacity-[0.055] text-[#8AC63C]"
      >
        <path
          d="M140 110C162 110 180 124 180 142C180 160 162 174 140 174C118 174 100 160 100 142C100 130 108 120 120 114L140 136L134 111C136 110 138 110 140 110Z"
          fill="currentColor"
        />
        <g transform="translate(70, 125) rotate(24)">
          <circle cx="0" cy="0" r="5" fill="#175883" />
          <path d="M-2 0L-12 -12M0 0L0 -15M2 0L12 -12" stroke="#175883" strokeWidth="2.8" strokeLinecap="round" />
        </g>
        <g transform="translate(45, 85) rotate(14)">
          <circle cx="0" cy="0" r="5" fill="currentColor" />
          <path d="M-2 0L-12 -12M0 0L0 -15M2 0L12 -12" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
