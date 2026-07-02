"use client";

import { motion } from "framer-motion";
import {
  Bell,
  CalendarCheck,
  MessageCircle,
  CreditCard,
  Star,
} from "lucide-react";

const notifications = [
  {
    icon: CalendarCheck,
    title: "New Appointment Booked",
    subtitle: "Rahul Sharma • 2 min ago",
    color: "text-green-400",
  },
  {
    icon: MessageCircle,
    title: "AI Replied on WhatsApp",
    subtitle: "Automatically handled enquiry",
    color: "text-cyan-400",
  },
  {
    icon: CreditCard,
    title: "Payment Received",
    subtitle: "₹8,500 Consultation",
    color: "text-blue-400",
  },
  {
    icon: Star,
    title: "New 5★ Review",
    subtitle: "Google Business Profile",
    color: "text-yellow-400",
  },
];

export default function Notification() {
  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-cyan-400">
            Notifications
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Live Updates
          </h3>

        </div>

        <div className="rounded-2xl bg-cyan-500/15 p-3">

          <Bell
            size={24}
            className="text-cyan-400"
          />

        </div>

      </div>

      {/* Notifications */}

      <div className="mt-8 space-y-4">

        {notifications.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
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
                  {item.subtitle}
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