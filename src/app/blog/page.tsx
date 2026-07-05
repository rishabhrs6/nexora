import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexora Blog",
  description:
    "Read the latest AI Automation, SEO, Website Development and Digital Marketing insights from Nexora.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-black">
          Nexora Blog
        </h1>

        <p className="mt-6 text-xl text-gray-300 leading-8">
          We're working on valuable articles about AI Automation,
          Websites, SEO and Business Growth.
          New content is coming soon.
        </p>
      </div>
    </main>
  );
}
