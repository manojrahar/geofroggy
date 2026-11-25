"use client";

import { useEffect } from "react";
import { playClickPop } from "@/lib/soundEffects";

/**
 * Listens for clicks on buttons, links, and interactive cards across the app
 * to provide subtle, responsive audio feedback.
 */
export default function SoundManager() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Skip if element or ancestor opts out or handles its own frog sound
      if (target.closest("[data-no-sound]") || target.closest("[data-frog-sound]")) {
        return;
      }

      const interactive = target.closest(
        "button, a, [role='button'], .card-hover-effect"
      );
      if (interactive) {
        playClickPop();
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
