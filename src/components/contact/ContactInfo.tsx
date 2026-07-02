"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Bot,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "AI Opportunity Audit",
    description: "Discover which tasks AI can automate in your business.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Learn how AI can increase leads, sales and efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Custom Roadmap",
    description: "Receive a personalized implementation plan.",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl"
    >
      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
        Free Strategy Session
      </span>

      <h3 className="mt-6 text-3xl font-black text-white">
        What You'll Get
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        Every strategy session is focused on identifying opportunities where AI
        can save time, reduce costs, and help your business scale faster.
      </p>

      <div className="mt-10 space-y-5">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#08111F]/60 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                <Icon className="text-cyan-400" size={22} />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
        <div className="flex items-center gap-3">
          <Clock3 className="text-cyan-400" size={22} />

          <h4 className="font-semibold text-white">
            Average Response Time
          </h4>
        </div>

        <p className="mt-4 text-3xl font-black text-white">
          &lt; 2 Hours
        </p>

        <p className="mt-2 text-gray-400">
          We usually respond within a couple of hours during business days.
        </p>
      </div>

      <a
        href="#contact"
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-[1.02]"
      >
        Book Free Strategy Call
        <ArrowRight size={18} />
      </a>
    </motion.div>
  );
}