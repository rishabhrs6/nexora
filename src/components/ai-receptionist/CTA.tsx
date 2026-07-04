"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-14 text-center">

          <h2 className="text-5xl font-bold">
            Ready to Automate
            <span className="text-cyan-400">
              {" "}Your Clinic?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Stop losing patients because of missed calls.
            Let Nexora build your AI Receptionist and automate
            your front desk.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/#contact"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Book Free Strategy Call
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5"
            >
              Learn About Nexora
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}