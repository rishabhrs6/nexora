"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI First Approach",
    description:
      "We don't just build websites. We create AI-powered systems that automate repetitive tasks and increase efficiency.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "Every project is built with one goal—generate more leads, appointments, and revenue for your business.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Modern design, fast performance, responsive layouts and clean code that reflects your brand professionally.",
  },
  {
    icon: Clock3,
    title: "Long-Term Partner",
    description:
      "From launch to scaling, we continue improving your systems so your business keeps growing month after month.",
  },
];

export default function WhyNexora() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28">

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Why Nexora
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Built For Businesses
            <br />
            That Want To Scale
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            We combine strategy, AI, design and automation into one
            complete growth system. No freelancers. No juggling multiple
            agencies. Just one partner focused on your success.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
