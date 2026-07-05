import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling | Nexora",
  description:
    "AI Calling by Nexora automates inbound and outbound business calls using intelligent AI voice agents.",
};

export default function AICallingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-black">
          AI Calling
        </h1>

        <p className="mt-6 text-xl text-gray-300 leading-8">
          This page is currently under development.
          Nexora's AI Calling solution helps businesses answer,
          qualify and convert calls using intelligent AI voice agents.
        </p>
      </div>
    </main>
  );
}