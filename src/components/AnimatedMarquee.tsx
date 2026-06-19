"use client";

import { motion } from "framer-motion";

interface MarqueeItem {
  text: string;
  icon?: string;
}

interface AnimatedMarqueeProps {
  items: MarqueeItem[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function AnimatedMarquee({
  items,
  speed = 20,
  reverse = false,
  className = "",
}: AnimatedMarqueeProps) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: reverse ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
          >
            {item.icon && <span>{item.icon}</span>}
            <span className="uppercase tracking-widest">{item.text}</span>
            <span className="text-primary/30">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
