"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 w-full max-w-2xl text-center lg:order-1 lg:text-left"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 sm:px-5 sm:text-sm">
        <Sparkles size={16} />
        AI Powered Growth Systems
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:mt-8 lg:text-7xl">
        Get More
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}
          Patients.
        </span>

        <br />

        Automate
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}
          Your Clinic.
        </span>

        <br />

        Grow Faster.
      </h1>

      {/* Paragraph */}

      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0 lg:mt-8">
        Nexora helps modern dental clinics generate more appointments through
        premium websites, AI automation and digital growth systems that work
        24/7.
      </p>

      {/* Buttons */}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-12">

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 sm:w-auto"
        >
          Book Free Strategy Call
          <ArrowRight size={20} />
        </motion.a>

        <motion.a
          href="#case-studies"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 sm:w-auto"
        >
          View Our Work
        </motion.a>

      </div>

      {/* Trust */}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm lg:mt-12 lg:justify-start">

        <div className="flex items-center gap-2 text-gray-300">
          <ShieldCheck className="text-cyan-400" size={18} />
          AI Automation
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <ShieldCheck className="text-cyan-400" size={18} />
          SEO Ready
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <ShieldCheck className="text-cyan-400" size={18} />
          Conversion Focused
        </div>

      </div>

    </motion.div>
  );
}