import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Automation | Nexora",
  description:
    "Automate customer conversations, reminders, lead nurturing and follow-ups with Nexora's WhatsApp Automation.",
};

export default function WhatsAppAutomationPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-black">
          WhatsApp Automation
        </h1>

        <p className="mt-6 text-xl text-gray-300 leading-8">
          Nexora helps businesses automate WhatsApp conversations,
          appointment reminders, lead nurturing and customer support
          using intelligent AI workflows.
        </p>
      </div>
    </main>
  );
}