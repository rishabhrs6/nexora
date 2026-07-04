"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "AI Receptionist", href: "/ai-receptionist" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 flex w-[94%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nexora"
              width={190}
              height={50}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-gray-300 transition hover:text-white"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105 lg:flex"
          >
            Book Free Call
            <ArrowUpRight size={18} />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#050816]"
          >
            <div className="space-y-10 text-center">

              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Nexora"
                  width={220}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-3xl font-bold text-white transition hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white"
              >
                Book Free Call
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}