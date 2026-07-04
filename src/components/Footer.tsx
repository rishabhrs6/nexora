"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/logo.png"
              alt="Nexora"
              width={180}
              height={50}
              className="h-12 w-auto"
            />

            <p className="mt-6 leading-8 text-gray-400">
              Nexora is an AI Automation company helping businesses grow using
              AI Receptionists, AI Calling, WhatsApp Automation, Premium
              Websites and SEO.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="/ai-receptionist" className="text-gray-400 hover:text-cyan-400">
                AI Receptionist
              </Link>

              <Link href="/website-development" className="text-gray-400 hover:text-cyan-400">
                Website Development
              </Link>

              <Link href="/seo-for-dental-clinics" className="text-gray-400 hover:text-cyan-400">
                Dental SEO
              </Link>

              <Link href="/whatsapp-automation" className="text-gray-400 hover:text-cyan-400">
                WhatsApp Automation
              </Link>

              <Link href="/ai-calling" className="text-gray-400 hover:text-cyan-400">
                AI Calling
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="/" className="text-gray-400 hover:text-cyan-400">
                Home
              </Link>

              <Link href="/services" className="text-gray-400 hover:text-cyan-400">
                Services
              </Link>

              <Link href="/privacy-policy" className="text-gray-400 hover:text-cyan-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="text-gray-400 hover:text-cyan-400">
                Terms & Conditions
              </Link>

              <a href="/#contact" className="text-gray-400 hover:text-cyan-400">
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-cyan-400" />
                <span>rishabhsharmx1@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-cyan-400" />
                <span>+91 8447410623</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400" />
                <span>Delhi, India</span>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/rishabhrs6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rishabh-sharma-17a05341b/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nexora. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}