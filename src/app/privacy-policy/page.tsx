import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexora",
  description:
    "Read Nexora's Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-32">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>

        <p className="mt-8 leading-8 text-gray-300">
          Nexora respects your privacy. We only collect information submitted
          through our contact forms or provided directly by you. Your
          information is never sold to third parties and is used solely to
          communicate with you about our services.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Information We Collect
        </h2>

        <p className="mt-4 leading-8 text-gray-400">
          Name, email address, phone number, business information, and any
          details voluntarily shared through our website.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Contact
        </h2>

        <p className="mt-4 text-gray-400">
          Email: rishabhsharmx1@gmail.com
        </p>
      </section>
    </main>
  );
}