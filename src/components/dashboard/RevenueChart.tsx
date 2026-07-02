"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 120 },
  { month: "Feb", revenue: 180 },
  { month: "Mar", revenue: 220 },
  { month: "Apr", revenue: 260 },
  { month: "May", revenue: 340 },
  { month: "Jun", revenue: 480 },
];

export default function RevenueChart() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-sm text-cyan-400">
            Revenue Trend
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Last 6 Months
          </h3>

        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
          +32%
        </span>

      </div>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22d3ee"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "16px",
                color: "white",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22d3ee"
              strokeWidth={3}
              fill="url(#colorRevenue)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}