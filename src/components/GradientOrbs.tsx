"use client";

import { motion } from "framer-motion";

export default function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 20, -40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[100px]"
      />
    </div>
  );
}
