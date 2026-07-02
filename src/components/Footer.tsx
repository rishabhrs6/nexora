"use client";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>
            <Image
              src="/logo.png"
              alt="Nexora"
              width={180}
              height={50}
              className="h-12 w-auto"
            />

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Nexora helps businesses grow through premium websites,
              AI automation, SEO and digital growth systems built for
              modern brands.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#services"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Services
              </a>

              <a
                href="#process"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Process
              </a>

              <a
                href="#pricing"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Pricing
              </a>

              <a
                href="#faq"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="text-cyan-400" size={18} />
                <span>rishabhsharmx1@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-cyan-400" size={18} />
                <span>Delhi, India</span>
              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/rishabhrs6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-3 text-xl text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rishabh-sharma-17a05341b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-3 text-xl text-white transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Nexora. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}