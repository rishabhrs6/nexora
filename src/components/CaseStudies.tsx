"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CalendarCheck,
  Bot,
  ArrowUpRight,
} from "lucide-react";

const cases = [
  {
    company: "Smile Dental Clinic",
    title: "43% More Patient Appointments",
    description:
      "Built a premium website, Google SEO and AI booking system that increased appointments within 60 days.",
    metrics: [
      "+43% Appointments",
      "+127% Website Traffic",
      "+81 Qualified Leads",
    ],
    icon: CalendarCheck,
  },
  {
    company: "Elite Cosmetic Studio",
    title: "AI Receptionist Saved 18 Hours/Week",
    description:
      "Implemented AI chat automation, WhatsApp booking and follow-up system for faster response times.",
    metrics: [
      "18 Hours Saved",
      "312 Conversations",
      "96% Response Rate",
    ],
    icon: Bot,
  },
  {
    company: "Future Healthcare",
    title: "3.8× Business Growth",
    description:
      "Combined premium branding, conversion optimization and marketing automation to scale enquiries.",
    metrics: [
      "3.8× More Leads",
      "+62% Revenue",
      "ROI in 45 Days",
    ],
    icon: TrendingUp,
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#050816] px-6 py-28"
    >
      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Case Studies
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Real Results.
            <br />
            Real Growth.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every business has different goals. Our systems are designed to
            generate measurable results—not just beautiful websites.
          </p>
        </motion.div>

        <div className="mt-20 space-y-8">
          {cases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      <Icon size={30} />
                    </div>

                    <p className="text-cyan-400">{item.company}</p>

                    <h3 className="mt-3 text-3xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {item.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-2xl bg-black/20 p-6 text-center"
                      >
                        <p className="text-xl font-bold text-cyan-400">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-10 flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View Full Case Study
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