import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nexora",
  description:
    "Terms and Conditions for using Nexora's website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-32">
        <h1 className="text-5xl font-bold">
          Terms & Conditions
        </h1>

        <p className="mt-8 leading-8 text-gray-300">
          By using Nexora's website and services, you agree to these terms.
          All content, branding and intellectual property belong to Nexora.
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          We reserve the right to modify our services, pricing and policies
          without prior notice.
        </p>
      </section>
    </main>
  );
}