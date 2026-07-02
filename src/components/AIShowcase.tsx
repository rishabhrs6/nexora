"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  CalendarCheck2,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export default function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28">

      {/* Glow */}

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex-1"
        >

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            AI Automation
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Your Business.
            <br />
            Running 24/7.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Imagine an AI assistant that books appointments,
            follows up with customers, answers FAQs and never
            takes a day off.
          </p>

          <div className="mt-10 space-y-5">

            <Feature
              icon={<Bot size={22} />}
              title="24/7 AI Receptionist"
            />

            <Feature
              icon={<CalendarCheck2 size={22} />}
              title="Automatic Appointment Booking"
            />

            <Feature
              icon={<MessageSquare size={22} />}
              title="Instant Customer Replies"
            />

            <Feature
              icon={<BrainCircuit size={22} />}
              title="Smart Lead Qualification"
            />

          </div>

          <button className="mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105">
            Explore AI Systems

            <ArrowUpRight size={20} />
          </button>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .9 }}
          className="w-full max-w-xl"
        >

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-cyan-400">
                  Nexora AI
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  Live Automation
                </h3>

              </div>

              <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
                ACTIVE
              </div>

            </div>

            <div className="space-y-5">

              <Chat
                title="Customer"
                message="I'd like to book an appointment."
              />

              <Chat
                title="AI Assistant"
                message="Sure! Tuesday at 4:30 PM is available."
              />

              <Chat
                title="Customer"
                message="Perfect. Book it."
              />

              <Chat
                title="AI Assistant"
                message="Done! Appointment confirmed ✅"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">

      <div className="text-cyan-400">
        {icon}
      </div>

      <p className="font-medium text-white">
        {title}
      </p>

    </div>
  );
}

function Chat({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="rounded-2xl bg-black/20 p-4">

      <p className="mb-2 text-sm font-semibold text-cyan-400">
        {title}
      </p>

      <p className="text-gray-300">
        {message}
      </p>

    </div>
  );
}