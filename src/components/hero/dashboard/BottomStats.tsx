"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Bot,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "₹12.4L",
    label: "Revenue",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    value: "ONLINE",
    label: "AI Status",
    color: "text-green-400",
  },
  {
    icon: Users,
    value: "2,846",
    label: "Qualified Leads",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    value: "0.4s",
    label: "Response Time",
    color: "text-violet-400",
  },
];

export default function BottomStats() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:gap-4">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:bg-cyan-500/5 md:rounded-3xl md:p-5"
          >

            <div className="flex items-center justify-between">

              <Icon
                size={22}
                className={`${item.color} transition-transform duration-300 group-hover:scale-110 md:h-6 md:w-6`}
              />

              <div className="h-2 w-2 rounded-full bg-cyan-400 opacity-70" />

            </div>

            <h3 className="mt-4 text-xl font-black text-white md:mt-6 md:text-3xl">
              {item.value}
            </h3>

            <p className="mt-1 text-xs text-gray-400 md:mt-2 md:text-sm">
              {item.label}
            </p>

          </motion.div>

        );

      })}

    </div>
  );
}