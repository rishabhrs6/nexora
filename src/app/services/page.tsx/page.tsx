import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Services | Nexora",
  description:
    "Explore Nexora's AI Automation services including AI Receptionists, AI Calling, WhatsApp Automation, Website Development and SEO for dental clinics and businesses.",
  keywords: [
    "Nexora Services",
    "AI Automation Services",
    "AI Receptionist",
    "AI Calling",
    "WhatsApp Automation",
    "Website Development",
    "SEO",
  ],
};

const services = [
  {
    title: "AI Receptionist",
    description:
      "24/7 AI receptionist that answers calls, books appointments and qualifies leads.",
    href: "/ai-receptionist",
  },
  {
    title: "Website Development",
    description:
      "Premium high-converting websites designed for modern businesses.",
    href: "/website-development",
  },
  {
    title: "SEO for Dental Clinics",
    description:
      "Rank higher on Google and generate consistent patient leads.",
    href: "/seo-for-dental-clinics",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automate conversations, reminders and follow-ups using WhatsApp.",
    href: "/whatsapp-automation",
  },
  {
    title: "AI Calling",
    description:
      "AI-powered voice agents that answer and qualify every incoming call.",
    href: "/ai-calling",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          Nexora Services
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-black">
          AI Automation
          <span className="text-cyan-400"> Services</span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-9">
          We help dental clinics and businesses automate operations,
          increase appointments, improve customer experience and grow
          using AI-powered systems.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-500 hover:bg-white/10"
            >
              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-400 leading-8">
                {service.description}
              </p>

              <div className="mt-8 text-cyan-400 font-semibold">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}