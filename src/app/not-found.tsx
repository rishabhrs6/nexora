import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6">

      <div className="text-center">

        <Image
          src="/logo.png"
          alt="Nexora"
          width={220}
          height={60}
          className="mx-auto mb-10 h-14 w-auto"
          priority
        />

        <h1 className="text-7xl font-black text-white">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          ← Back to Home
        </Link>

      </div>

    </main>
  );
}