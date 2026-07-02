"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-28">

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Let's Work Together
          </p>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Ready To Scale
            <br />
            Your Business With AI?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Stop wasting time on repetitive work. Let Nexora automate your business,
            generate more leads, and help you grow faster than ever.
          </p>

          <a
            href="#contact"
            className="mx-auto mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 font-semibold text-white transition hover:scale-105"
          >
            <CalendarDays size={20} />
            Book Free Strategy Call
            <ArrowRight size={20} />
          </a>

        </motion.div>

      </div>

    </section>
  );
}