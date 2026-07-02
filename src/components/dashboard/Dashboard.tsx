"use client";

import { motion } from "framer-motion";

import RevenueCard from "./RevenueCard";
import StatsGrid from "./StatsGrid";
import RevenueChart from "./RevenueChart";
import AIActivity from "./AIActivity";
import Schedule from "./Schedule";
import Notification from "./Notification";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
      }}
      className="relative w-full max-w-3xl"
    >
      {/* Glow */}

      <div className="absolute -inset-8 rounded-[50px] bg-cyan-500/10 blur-3xl" />

      {/* Window */}

      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0B1120]/90 shadow-2xl backdrop-blur-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              Nexora OS
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              AI Growth Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

          </div>

        </div>

        {/* Body */}

        <div className="space-y-6 p-6">

          <RevenueCard />

          <StatsGrid />

          <RevenueChart />

          <div className="grid gap-6 lg:grid-cols-2">

            <AIActivity />

            <Schedule />

          </div>

          <Notification />

        </div>

      </div>
    </motion.div>
  );
}