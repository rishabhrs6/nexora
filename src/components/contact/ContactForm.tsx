"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await sendEmail(form);

      setLoading(false);

      if (result.success) {
        console.log("✅ SUCCESS:", result);

        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });

        window.open("https://calendly.com/", "_blank");
      } else {
        console.error("❌ EMAIL ERROR:", result);

        alert("Something went wrong.");
      }
    } catch (err) {
      setLoading(false);

      console.error("❌ CLIENT ERROR:", err);

      alert(String(err));
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl"
    >
      <h3 className="text-3xl font-black text-white">
        Tell Us About Your Business
      </h3>

      <p className="mt-3 text-gray-400">
        Fill in a few details and we'll prepare a personalized AI growth plan.
      </p>

      <div className="mt-8 space-y-5">
        <input
          required
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-cyan-500"
        />

        <input
          required
          type="email"
          placeholder="Business Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-cyan-500"
        />

        <input
          required
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-cyan-500"
        />

        <input
          required
          type="text"
          placeholder="Company Name"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-cyan-500"
        />

        <select
          required
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full rounded-2xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-cyan-500"
        >
          <option value="">Select Service</option>
          <option value="AI Automation">AI Automation</option>
          <option value="AI Receptionist">AI Receptionist</option>
          <option value="Website + Branding">Website + Branding</option>
          <option value="Lead Generation">Lead Generation</option>
          <option value="Custom AI Solution">Custom AI Solution</option>
        </select>

        <textarea
          required
          rows={5}
          placeholder="Tell us about your business..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-2xl border border-white/10 bg-[#08111F] px-5 py-4 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            Build My AI System
            <ArrowRight size={20} />
          </>
        )}
      </button>
    </motion.form>
  );
}