"use client";

import {
  PhoneCall,
  CalendarCheck2,
  MessageSquare,
  Bot,
  Clock3,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: PhoneCall,
    title: "24/7 AI Call Answering",
    description:
      "Never miss another patient call. Your AI receptionist answers instantly—even outside business hours.",
  },
  {
    icon: CalendarCheck2,
    title: "Automatic Appointment Booking",
    description:
      "Patients can book, reschedule, or cancel appointments without waiting for your staff.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Follow-ups",
    description:
      "Automatically send confirmations, reminders, and follow-up messages to reduce no-shows.",
  },
  {
    icon: Bot,
    title: "Lead Qualification",
    description:
      "Collect patient details and qualify leads before forwarding them to your clinic.",
  },
  {
    icon: Clock3,
    title: "Works 24×7",
    description:
      "Your clinic remains available even when your reception desk is closed.",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversion",
    description:
      "Respond instantly to inquiries and convert more callers into appointments.",
  },
];

export default function Features() {
  return (
    <>
      {/* Problem */}

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-400">
              The Problem
            </span>

            <h2 className="mt-8 text-4xl font-bold md:text-5xl">
              Every Missed Call
              <span className="text-red-400"> Costs You Patients.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Dental clinics lose potential patients every day because calls go
              unanswered, appointments aren't booked quickly enough, and
              reception teams are overwhelmed during busy hours.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              {[
                "Missed patient calls",
                "Long waiting times",
                "Reception overload",
                "Lost appointments",
                "Poor follow-ups",
                "Lower revenue",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-500/10 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-3">

                    <CheckCircle2 className="text-red-400" />

                    <span>{item}</span>

                  </div>
                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* Solution */}

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
              The Solution
            </span>

            <h2 className="mt-8 text-4xl font-bold md:text-5xl">
              Meet Your
              <span className="text-cyan-400"> AI Receptionist</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-300">
              Nexora's AI Receptionist answers calls, schedules appointments,
              qualifies leads, sends reminders, and provides patients with
              instant responses—24 hours a day.
            </p>

          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">

                    <Icon className="text-cyan-400" size={28} />

                  </div>

                  <h3 className="text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-300">
                    {feature.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-12">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              <div>

                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">
                  Benefits
                </span>

                <h2 className="mt-8 text-5xl font-bold leading-tight">
                  Let Your Staff Focus on Patients,
                  <span className="text-cyan-400">
                    {" "}
                    Not Phone Calls.
                  </span>
                </h2>

                <p className="mt-8 text-lg leading-9 text-gray-300">
                  Your reception team spends less time answering repetitive
                  questions and more time delivering an exceptional patient
                  experience.
                </p>

                <Link
                  href="/#contact"
                  className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Book Free Consultation
                  <ArrowRight size={20} />
                </Link>

              </div>

              <div className="space-y-5">

                {[
                  "Never miss another patient call",
                  "Book appointments automatically",
                  "Reduce receptionist workload",
                  "Increase patient satisfaction",
                  "Generate more revenue",
                  "Available 24/7",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <CheckCircle2
                      className="text-cyan-400"
                      size={26}
                    />

                    <span className="text-lg">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}