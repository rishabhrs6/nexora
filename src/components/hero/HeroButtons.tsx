"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      {/* Primary CTA */}

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition"
      >
        Book Free Strategy Call
        <ArrowRight size={20} />
      </motion.a>

      {/* Secondary CTA */}

      <motion.a
        href="#case-studies"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
      >
        View Case Studies
      </motion.a>

    </div>
  );
}