"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CalendarDays,
  Users,
  Activity,
} from "lucide-react";

const stats = [
  {
    icon: Bot,
    value: "247",
    label: "AI Conversations",
    color: "text-cyan-400",
  },
  {
    icon: CalendarDays,
    value: "31",
    label: "Bookings Today",
    color: "text-blue-400",
  },
  {
    icon: Users,
    value: "184",
    label: "Patients",
    color: "text-violet-400",
  },
  {
    icon: Activity,
    value: "99.9%",
    label: "System Uptime",
    color: "text-green-400",
  },
];

export default function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">

      {stats.map((stat, index) => {

        const Icon = stat.icon;

        return (

          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >

            <Icon
              size={28}
              className={stat.color}
            />

            <h3 className="mt-5 text-3xl font-black text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {stat.label}
            </p>

          </motion.div>

        );

      })}

    </div>
  );
}