"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Premium Websites",
    description:
      "Modern websites designed to build trust, generate leads and convert visitors into paying customers.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate bookings, follow-ups, WhatsApp replies and customer support with intelligent AI systems.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "SEO, Google Ads and digital marketing strategies focused on sustainable business growth.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050816] py-28 px-6"
    >
      {/* Background Glow */}

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
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Everything You Need
            <br />
            To Grow Faster
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            We combine premium design, AI automation and marketing
            systems to help businesses attract more customers and scale.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-10 flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-4 hover:text-cyan-300"
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}