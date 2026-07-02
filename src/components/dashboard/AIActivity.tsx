"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  MessageSquare,
  Star,
} from "lucide-react";

const activities = [
  {
    icon: CalendarCheck,
    title: "Appointment Confirmed",
    description: "Dr. Sharma • Today 4:30 PM",
    color: "text-green-400",
  },
  {
    icon: MessageSquare,
    title: "AI Replied on WhatsApp",
    description: "Patient enquiry answered instantly",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "Lead Qualified",
    description: "New patient marked as high priority",
    color: "text-blue-400",
  },
  {
    icon: Star,
    title: "Review Request Sent",
    description: "Google review request delivered",
    color: "text-yellow-400",
  },
];

export default function AIActivity() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-cyan-400">
            AI Activity
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Live Feed
          </h3>

        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
          LIVE
        </span>

      </div>

      <div className="mt-8 space-y-5">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                x: 6,
              }}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${item.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">

                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  {item.description}
                </p>

              </div>

              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}