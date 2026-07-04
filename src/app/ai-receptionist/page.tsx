import type { Metadata } from "next";

import Hero from "@/components/ai-receptionist/Hero";
import Features from "@/components/ai-receptionist/Features";
import FAQ from "@/components/ai-receptionist/FAQ";
import CTA from "@/components/ai-receptionist/CTA";

import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "AI Receptionist for Dental Clinics | Nexora",

  description:
    "AI Receptionist for dental clinics that answers calls 24/7, books appointments, qualifies patients, automates follow-ups and helps clinics convert more leads.",

  keywords: [
    "AI Receptionist",
    "Dental AI Receptionist",
    "AI Receptionist India",
    "Dental Automation",
    "AI Calling",
    "Dental Appointment Booking",
    "Dental Clinic AI",
    "AI Voice Agent",
    "Clinic Automation",
    "Nexora AI",
    "Nexora AI Receptionist",
  ],

  alternates: {
    canonical: "https://heynexora.in/ai-receptionist",
  },

  openGraph: {
    title: "AI Receptionist for Dental Clinics | Nexora",

    description:
      "Never miss another patient call. AI Receptionist that answers calls, books appointments and works 24/7.",

    url: "https://heynexora.in/ai-receptionist",

    siteName: "Nexora",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Receptionist by Nexora",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AI Receptionist | Nexora",

    description:
      "24/7 AI Receptionist for Dental Clinics.",

    images: ["/og-image.png"],
  },
};

const breadcrumbs = [
  {
    name: "Home",
    url: "https://heynexora.in",
  },
  {
    name: "AI Receptionist",
    url: "https://heynexora.in/ai-receptionist",
  },
];

const faqs = [
  {
    question: "What is an AI Receptionist?",
    answer:
      "An AI Receptionist answers calls, books appointments, qualifies patients, sends reminders and works 24 hours a day.",
  },
  {
    question: "Can it book appointments automatically?",
    answer:
      "Yes. Patients can book, reschedule and cancel appointments automatically without staff intervention.",
  },
  {
    question: "Does it work after clinic hours?",
    answer:
      "Yes. The AI Receptionist works 24/7 including weekends and holidays.",
  },
  {
    question: "Can it integrate with my CRM?",
    answer:
      "Yes. Nexora can integrate the AI Receptionist with CRM systems, calendars and business workflows.",
  },
];

export default function AIReceptionistPage() {
  return (
    <main className="overflow-x-hidden bg-[#050816] text-white">

      <ServiceSchema
        name="AI Receptionist"
        description="24/7 AI Receptionist for Dental Clinics that answers calls, books appointments and automates patient communication."
        url="https://heynexora.in/ai-receptionist"
      />

      <BreadcrumbSchema
        items={breadcrumbs}
      />

      <FAQSchema
        faqs={faqs}
      />

      <Hero />

      <Features />

      <FAQ />

      <CTA />

    </main>
  );
}