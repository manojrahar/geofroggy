"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParallaxAccentProps {
  children: React.ReactNode;
  speed?: number; // e.g. 0.08 or -0.08
  className?: string;
}

/**
 * Applies a smooth, lightweight scroll-linked parallax shift to decorative accents.
 */
export default function ParallaxAccent({
  children,
  speed = 0.08,
  className = "",
}: ParallaxAccentProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(centerOffset * speed);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${offset.toFixed(1)}px, 0)` }}
    >
      {children}
    </div>
  );
}
