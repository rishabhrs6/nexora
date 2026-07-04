"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an AI Receptionist?",
    answer:
      "An AI Receptionist is a virtual assistant that answers calls, books appointments, qualifies leads, answers common patient questions, and works 24/7 without breaks.",
  },
  {
    question: "Can it book appointments automatically?",
    answer:
      "Yes. The AI can schedule, reschedule, and cancel appointments while collecting patient details.",
  },
  {
    question: "Does it work after clinic hours?",
    answer:
      "Absolutely. Your AI Receptionist answers every call, even during nights, weekends, and holidays.",
  },
  {
    question: "Can it integrate with our CRM?",
    answer:
      "Yes. Nexora can integrate AI Receptionists with CRMs, calendars, and other business tools.",
  },
  {
    question: "Is it only for dental clinics?",
    answer:
      "No. We also build AI systems for clinics, hospitals, salons, gyms, restaurants, and many other businesses.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="mb-16 text-center text-gray-400">
          Everything you need to know before getting started.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-300 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}