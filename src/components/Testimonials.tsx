"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Dental Clinic Owner",
    review:
      "Nexora completely transformed our online presence. Within 3 months, our appointments increased by over 40%.",
    growth: "+42%",
  },
  {
    name: "Dr. Michael Lee",
    role: "Orthodontist",
    review:
      "The AI booking system alone saves our staff hours every week. The website looks incredible too.",
    growth: "+58%",
  },
  {
    name: "Emily Carter",
    role: "Medical Practice Manager",
    review:
      "Professional, responsive and results-driven. We finally have a system that brings patients consistently.",
    growth: "+37%",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28">

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[180px]" />

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
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Businesses Love
            <br />
            Working With Us
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Real businesses. Real growth. Real results.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <Quote
                className="text-cyan-400"
                size={38}
              />

              <div className="mt-6 flex">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="#22d3ee"
                    className="text-cyan-400"
                  />

                ))}

              </div>

              <p className="mt-6 leading-8 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-10 flex items-center justify-between">

                <div>

                  <h4 className="font-bold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>

                </div>

                <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-400">
                  {item.growth}
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}