"use client";

import { motion } from "framer-motion";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function ShimmerButton({ children, className = "", href }: ShimmerButtonProps) {
  const Component = href ? "a" : "button";
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      {...props}
      className={`group relative overflow-hidden rounded-xl ${className}`}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
