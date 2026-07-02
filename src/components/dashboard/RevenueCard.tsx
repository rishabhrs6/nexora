"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function RevenueCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 to-blue-600/10 p-6 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-cyan-300">
            Monthly Revenue
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            ₹4.8L
          </h2>

        </div>

        <div className="rounded-2xl bg-cyan-500/20 p-4">

          <TrendingUp
            className="text-cyan-400"
            size={28}
          />

        </div>

      </div>

      <div className="mt-8 flex items-center gap-3">

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-bold text-green-400">
          +32%
        </span>

        <p className="text-gray-400">
          compared to last month
        </p>

      </div>

    </motion.div>
  );
}