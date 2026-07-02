"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most websites are completed within 2–4 weeks depending on the project scope.",
  },
  {
    question: "Do you provide AI automation?",
    answer:
      "Yes. We build AI chatbots, appointment systems, WhatsApp automation and custom AI workflows.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Absolutely. We can redesign your existing website while improving speed, SEO and conversions.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every package includes support and maintenance. We also offer monthly growth plans.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#050816] px-6 py-28">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >

                    <p className="px-6 pb-6 leading-8 text-gray-400">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}