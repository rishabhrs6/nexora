"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            Let's Build Together
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Build Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              AI Workforce
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Tell us about your business and we'll show you exactly how AI can
            automate repetitive work, generate more revenue, and help you scale
            faster.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">

          <ContactForm />

          <ContactInfo />

        </div>

      </div>
    </section>
  );
}