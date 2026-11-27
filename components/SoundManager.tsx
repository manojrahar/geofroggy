"use client";

import { useEffect } from "react";
import { playClickPop, unlockAudio } from "@/lib/soundEffects";

/**
 * Unlocks Web Audio on first user interaction and plays subtle click feedback
 * on buttons, links, and interactive cards across the entire website.
 */
export default function SoundManager() {
  useEffect(() => {
    const handleUnlock = () => {
      unlockAudio();
    };

    const handleClick = (e: MouseEvent) => {
      unlockAudio();
      const target = e.target as HTMLElement | null;
      if (!target) return;

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

    window.addEventListener("pointerdown", handleUnlock, { once: true, passive: true });
    window.addEventListener("touchstart", handleUnlock, { once: true, passive: true });
    window.addEventListener("keydown", handleUnlock, { once: true, passive: true });
    document.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handleUnlock);
      window.removeEventListener("touchstart", handleUnlock);
      window.removeEventListener("keydown", handleUnlock);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
