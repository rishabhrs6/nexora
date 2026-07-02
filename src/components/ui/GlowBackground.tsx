"use client";

import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Blue Glow */}

      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-60, 80, -60],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          x: [100, -120, 100],
          y: [80, -50, 80],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]"
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]"
      />

    </div>
  );
}