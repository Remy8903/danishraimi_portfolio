"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="flex items-center justify-between gap-4 bg-[#0a0f1d]/90 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 shadow-lg shadow-black/20">
          {/* Logo */}
          <Link
            className="flex items-center justify-center w-10 h-10 bg-white rounded-2xl text-[#0a0f1d] hover:opacity-90 transition-opacity shrink-0"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                className={
                  index === 0
                    ? "text-white text-sm font-medium"
                    : "text-on-surface-variant/80 hover:text-white text-sm font-medium transition-colors duration-200"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Email CTA */}
          <a
            className="hidden md:inline-flex items-center gap-2 bg-white text-[#0a0f1d] text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors shrink-0"
            href="mailto:danishraimi77@gmail.com"
          >
            danishraimi77@gmail.com
          </a>

          {/* Mobile menu button */}
          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl md:hidden">
          <div className="bg-[#0a0f1d]/95 backdrop-blur-md border border-white/10 rounded-3xl p-4 flex flex-col gap-3 shadow-lg shadow-black/20">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                className={
                  index === 0
                    ? "text-white font-medium px-2 py-1"
                    : "text-on-surface-variant/80 hover:text-white font-medium px-2 py-1 transition-colors duration-200"
                }
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0f1d] text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors mt-2"
              href="mailto:danishraimi77@gmail.com"
              onClick={() => setMobileOpen(false)}
            >
              danishraimi77@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
