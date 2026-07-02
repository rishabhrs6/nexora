"use client";

import { motion } from "framer-motion";

import AIAssistant from "./AIAssistant";
import LiveGraph from "./LiveGraph";
import BottomStats from "./BottomStats";

export default function NexoraOS() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[680px]"
    >
      {/* Glow */}

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Window */}

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08111F]/90 shadow-[0_25px_80px_rgba(0,255,255,.08)] backdrop-blur-3xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-8 md:py-6">

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-400">
              Nexora OS
            </p>

            <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
              AI Operating System
            </h2>
          </div>

          <div className="flex gap-2 md:gap-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

        </div>

        <div className="space-y-5 p-4 md:space-y-6 md:p-6">

          <AIAssistant />

          <LiveGraph />

          <BottomStats />

        </div>

      </div>
    </motion.div>
  );
}