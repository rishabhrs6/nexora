"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const messages = [
  "Analyzing new leads...",
  "Lead qualified successfully.",
  "WhatsApp replied automatically.",
  "Appointment booked.",
  "Growth systems running smoothly.",
];

export default function AIAssistant() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const text = messages[current];

    let i = 0;

    setDisplayed("");

    const typing = setInterval(() => {
      i++;

      setDisplayed(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(typing);

        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % messages.length);
        }, 1800);
      }
    }, 45);

    return () => clearInterval(typing);
  }, [current]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:rounded-[28px] md:p-7 backdrop-blur-2xl"
    >
      {/* Header */}

      <div className="flex items-center gap-3 md:gap-4">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl" />

          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 md:h-14 md:w-14">

            <Bot
              size={24}
              className="text-cyan-400 md:h-7 md:w-7"
            />

          </div>

        </div>

        <div>

          <h3 className="text-lg font-bold text-white md:text-xl">
            Nexora AI
          </h3>

          <div className="mt-1 flex items-center gap-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <p className="text-xs text-green-400 md:text-sm">
              Online
            </p>

          </div>

        </div>

      </div>

      {/* Chat */}

      <div className="mt-6 rounded-2xl border border-white/5 bg-[#08111F] p-4 md:mt-8 md:p-5">

        <p className="min-h-[26px] text-sm leading-7 text-gray-300 md:text-[15px]">

          {displayed}

          <span className="ml-1 animate-pulse text-cyan-400">
            |
          </span>

        </p>

      </div>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between md:mt-6">

        <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 md:text-xs">
          AI PROCESSING
        </span>

        <div className="flex gap-1">

          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
            style={{ animationDelay: ".15s" }}
          />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
            style={{ animationDelay: ".3s" }}
          />

        </div>

      </div>

    </motion.div>
  );
}