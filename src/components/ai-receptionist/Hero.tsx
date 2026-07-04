"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-40 pb-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              AI Receptionist for Dental Clinics
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Never Miss
              <br />
              Another
              <span className="text-cyan-400"> Patient Call.</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
              Nexora's AI Receptionist answers calls 24/7, books
              appointments, qualifies new patients, follows up automatically,
              and integrates with your clinic—without hiring another receptionist.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/#contact"
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                Book Free Demo
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/10 px-7 py-4 font-semibold hover:bg-white/5"
              >
                View Website
              </Link>

            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" />
                <span className="text-gray-300">
                  24/7 AI Call Answering
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" />
                <span className="text-gray-300">
                  Instant Appointment Booking
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" />
                <span className="text-gray-300">
                  Lead Qualification
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" />
                <span className="text-gray-300">
                  WhatsApp Follow-ups
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right Dashboard */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-xl font-semibold">
                  AI Reception Dashboard
                </h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Online
                </span>

              </div>

              <div className="space-y-5">

                <div className="rounded-2xl bg-[#0d1427] p-5">

                  <div className="flex items-center gap-3">

                    <PhoneCall className="text-cyan-400" />

                    <div>

                      <p className="font-semibold">
                        Incoming Patient Call
                      </p>

                      <p className="text-sm text-gray-400">
                        AI answered in 2 seconds
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-[#0d1427] p-5">

                  <div className="flex items-center gap-3">

                    <CalendarDays className="text-cyan-400" />

                    <div>

                      <p className="font-semibold">
                        Appointment Booked
                      </p>

                      <p className="text-sm text-gray-400">
                        Tomorrow • 11:30 AM
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-[#0d1427] p-5">

                  <div className="mb-3 flex justify-between">
                    <span>Total Calls</span>
                    <span className="font-bold text-cyan-400">127</span>
                  </div>

                  <div className="mb-3 flex justify-between">
                    <span>Appointments</span>
                    <span className="font-bold text-cyan-400">64</span>
                  </div>

                  <div className="mb-3 flex justify-between">
                    <span>Conversion Rate</span>
                    <span className="font-bold text-cyan-400">83%</span>
                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

                    <div className="h-full w-[83%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}