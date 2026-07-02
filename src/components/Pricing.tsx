"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹29,999",
    description: "Perfect for local clinics starting online.",
    popular: false,
    features: [
      "Premium Landing Page",
      "Mobile Responsive",
      "WhatsApp Integration",
      "Contact Forms",
      "Basic SEO",
      "1 Month Support",
    ],
  },
  {
    name: "Growth",
    price: "₹59,999",
    description: "Most businesses choose this package.",
    popular: true,
    features: [
      "Premium Multi-page Website",
      "AI Chatbot",
      "Appointment Booking",
      "Advanced SEO",
      "Speed Optimization",
      "Google Analytics",
      "3 Months Support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Built for hospitals & growing brands.",
    popular: false,
    features: [
      "Everything in Growth",
      "Custom AI Automation",
      "CRM Integration",
      "Lead Dashboard",
      "Marketing Funnel",
      "Priority Support",
      "Dedicated Team",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050816] px-6 py-28"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Pricing
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Simple Pricing
            <br />
            Built To Grow
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Choose a plan that fits your business today and scale whenever you're
            ready.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[32px] border p-8 backdrop-blur-xl transition ${
                plan.popular
                  ? "border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white">
                  <Sparkles size={16} />
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-black text-white">{plan.name}</h3>

              <p className="mt-3 text-gray-400">{plan.description}</p>

              <div className="mt-8">
                <span className="text-5xl font-black text-white">
                  {plan.price}
                </span>
              </div>

              <a
                href="#contact"
                className={`mt-8 flex w-full items-center justify-center rounded-full py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105"
                    : "border border-white/10 bg-white/5 text-white hover:border-cyan-400"
                }`}
              >
                Get Started
              </a>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-cyan-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}