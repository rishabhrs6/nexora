import Link from "next/link";

export const metadata = {
  title: "About Nexora | AI Automation Company",
  description:
    "Learn about Nexora, our mission, and how we help dental clinics and businesses grow using AI Automation, premium websites, and intelligent systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-10">
          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            About Nexora
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Building the Future of
            <span className="text-cyan-400"> AI Automation</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-8">
            Nexora is an AI Automation company focused on helping businesses
            automate operations, generate more leads, and improve customer
            experiences through intelligent software solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>

            <p className="text-gray-300 leading-8">
              We believe every business should have access to enterprise-grade
              AI systems. Our mission is to simplify automation so clinics and
              businesses can save time, increase revenue, and deliver better
              customer experiences.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>

            <ul className="space-y-3 text-gray-300">
              <li>✓ AI Receptionists</li>
              <li>✓ AI Voice Agents</li>
              <li>✓ WhatsApp Automation</li>
              <li>✓ CRM Automation</li>
              <li>✓ Lead Qualification</li>
              <li>✓ Appointment Booking</li>
              <li>✓ Premium Websites</li>
              <li>✓ SEO & Digital Growth</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-10">
          <h2 className="text-3xl font-bold mb-4">
            Why Businesses Choose Nexora
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <div>
              <h3 className="font-semibold text-xl mb-2">
                AI First Approach
              </h3>

              <p className="text-gray-300">
                We build automation systems that reduce manual work and improve
                efficiency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                Premium Experiences
              </h3>

              <p className="text-gray-300">
                Every website and automation workflow is designed to build trust
                and convert visitors into customers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                Long-Term Growth
              </h3>

              <p className="text-gray-300">
                We focus on scalable systems that help businesses grow over
                time, not one-time projects.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-4 text-lg text-white/90">
            Let's build AI systems that save time, improve operations, and
            generate more revenue.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}