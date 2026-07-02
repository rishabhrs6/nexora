"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <motion.div
      className="absolute inset-0 opacity-[0.06]"
      animate={{
        backgroundPosition: ["0px 0px", "70px 70px"],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }}
    />
  );
}