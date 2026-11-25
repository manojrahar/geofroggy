import React from "react";
import Image from "next/image";

export default function KaiMaBadge() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 76,
        zIndex: 40,
        pointerEvents: "none",
      }}
      aria-hidden="false"
    >
      <a
        href="https://kaimafoundry.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Powered by KaiMa Foundry"
        title="Powered by KaiMa Foundry"
        style={{
          pointerEvents: "auto",
          display: "inline-flex",
          alignItems: "center",
          height: 44,
          padding: "0 12px",
          borderRadius: 9999,
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(229, 231, 235, 0.8)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          textDecoration: "none",
        }}
      >
        <Image
          src="/kaima-foundry-logo.jpeg"
          alt="Powered by KaiMa Foundry"
          width={180}
          height={32}
          style={{
            height: 32,
            width: "auto",
            maxWidth: 180,
            objectFit: "contain",
            display: "block",
          }}
          priority
        />
      </a>
    </div>
  );
}
