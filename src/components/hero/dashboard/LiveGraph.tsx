"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { value: 18 },
  { value: 24 },
  { value: 32 },
  { value: 40 },
  { value: 52 },
  { value: 66 },
  { value: 82 },
  { value: 98 },
];

export default function LiveGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mt-5 rounded-[24px] border border-cyan-500/20 bg-gradient-to-br from-[#0b1220] to-[#0d1628] p-4 md:mt-6 md:rounded-3xl md:p-6"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-cyan-400 md:text-sm">
            AI Growth Engine
          </p>

          <h2 className="mt-1 text-xl font-black text-white md:mt-2 md:text-3xl">
            Revenue Growth
          </h2>

        </div>

        <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400 md:px-4 md:py-2 md:text-sm">
          +247%
        </div>

      </div>

      {/* Chart */}

      <div className="mt-6 h-48 md:mt-8 md:h-72">

        <ResponsiveContainer>

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <Tooltip
              contentStyle={{
                background: "#07111f",
                border: "none",
                borderRadius: "14px",
                color: "white",
              }}
            />

            <Area
              isAnimationActive
              animationDuration={2200}
              type="monotone"
              dataKey="value"
              stroke="#22d3ee"
              strokeWidth={3}
              fill="url(#gradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">

        <div>

          <p className="text-[11px] text-gray-400 md:text-sm">
            Revenue
          </p>

          <h3 className="mt-1 text-lg font-bold text-white md:text-2xl">
            ₹12.4L
          </h3>

        </div>

        <div>

          <p className="text-[11px] text-gray-400 md:text-sm">
            AI Leads
          </p>

          <h3 className="mt-1 text-lg font-bold text-white md:text-2xl">
            2,846
          </h3>

        </div>

        <div>

          <p className="text-[11px] text-gray-400 md:text-sm">
            Automation
          </p>

          <h3 className="mt-1 text-lg font-bold text-white md:text-2xl">
            99.9%
          </h3>

        </div>

      </div>

    </motion.div>
  );
}