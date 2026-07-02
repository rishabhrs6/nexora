"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Bot,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business, goals, audience and competitors before writing a single line of code.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Development",
    description:
      "We design a premium user experience and build a fast, responsive website tailored for conversions.",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI Automation",
    description:
      "We integrate AI tools to automate customer interactions, bookings and repetitive business tasks.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "After launch, we optimize, monitor and improve your systems so your business keeps growing.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050816] px-6 py-28"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Our Process
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            From Idea
            <br />
            To Growth
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Every project follows a proven framework designed to deliver
            premium quality and measurable business results.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent lg:block" />

          <div className="space-y-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="relative flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 lg:flex-row lg:items-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <Icon size={34} />
                  </div>

                  <div className="flex-1">
                    <span className="text-sm font-bold tracking-[0.3em] text-cyan-400">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}