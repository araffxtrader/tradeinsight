"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[99] h-[400px] w-[400px] rounded-full opacity-[0.035] transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
      }}
    />
  );
}
