import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO for Dental Clinics | Nexora",
  description:
    "Grow your dental clinic with SEO. Rank higher on Google, attract more local patients, increase appointments and build long-term organic growth with Nexora.",
  keywords: [
    "SEO for Dental Clinics",
    "Dental SEO",
    "Local SEO for Dentists",
    "Dental Marketing",
    "Google Ranking",
    "Dental Clinic SEO",
    "Dental Website SEO",
    "Nexora SEO",
  ],
};

const benefits = [
  "Higher Google Rankings",
  "More Patient Appointments",
  "Google Business Profile Optimization",
  "Local SEO",
  "Technical SEO",
  "Keyword Research",
  "On-Page SEO",
  "Monthly Reporting",
  "SEO Content Strategy",
];

export default function DentalSEOPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          Dental SEO
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          SEO for
          <br />
          Dental Clinics
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          Get your dental clinic discovered by patients searching on Google.
          We optimize your website, Google Business Profile and local presence
          to help you generate consistent organic leads.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Link
            href="/#contact"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400"
          >
            Book Free SEO Audit
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-white/10 px-8 py-4 hover:bg-white/5"
          >
            View Services
          </Link>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{item}</h3>

              <p className="mt-3 text-gray-400">
                Included in every SEO growth plan.
              </p>
            </div>
          ))}
        </div>

        <section className="mt-28">
          <h2 className="text-4xl font-bold">
            What We Optimize
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Website SEO
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                We improve page speed, technical SEO, structured data,
                content quality, mobile performance and internal linking.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Google Business Profile
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                We optimize your Google Business Profile to increase local
                visibility, map rankings and patient calls.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-28 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Rank Higher?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Let Nexora help your dental clinic attract more patients through
            long-term SEO strategies that actually generate results.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400"
          >
            Start SEO Today
          </Link>

        </section>

      </section>
    </main>
  );
}