import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development for Dental Clinics | Nexora",
  description:
    "Premium website development for dental clinics and businesses. Fast, SEO-optimized, mobile-friendly websites that generate more leads and appointments.",
  keywords: [
    "Website Development",
    "Website Development Company",
    "Website Development Agency",
    "Dental Website Development",
    "Dental Website Design",
    "Business Website Development",
    "Professional Website Developer",
    "Nexora Website Development",
  ],
};

const features = [
  "Premium Modern UI/UX",
  "Mobile Responsive Design",
  "Lightning Fast Performance",
  "SEO Optimized",
  "Google Analytics Integration",
  "Lead Generation Forms",
  "WhatsApp Integration",
  "Google Maps Integration",
  "Appointment Booking",
  "High Conversion Landing Pages",
  "Secure Deployment",
  "Ongoing Support",
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          Website Development
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          Premium Website
          <br />
          Development
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          We build premium, modern, SEO-ready websites that help businesses
          attract more customers, build trust, and generate more leads.
          Every website is optimized for speed, mobile devices, and Google.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Link
            href="/#contact"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400"
          >
            Book Free Consultation
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-white/10 px-8 py-4 hover:bg-white/5"
          >
            View All Services
          </Link>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>

              <p className="mt-3 text-gray-400">
                Included in every Nexora website project.
              </p>
            </div>
          ))}
        </div>

        <section className="mt-28">
          <h2 className="text-4xl font-bold">
            Why Businesses Choose Nexora
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Built for Conversions
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                Every website is designed to convert visitors into customers
                through strategic layouts, strong calls-to-action, and optimized
                user experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Built for Google
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                We implement technical SEO, structured metadata, fast loading,
                mobile optimization, and clean code so your website is ready to
                compete in search results.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-28 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build Your Website?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Whether you're a dental clinic, startup, or growing business,
            Nexora builds premium websites that help you stand out and grow.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400"
          >
            Start Your Project
          </Link>
        </section>

      </section>
    </main>
  );
}