"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
        <div className="flex items-center justify-between gap-4 bg-surface-container/90 backdrop-blur-md border border-outline/10 rounded-full px-3 py-2 shadow-lg shadow-black/10">
          {/* Logo */}
          <Link
            className="flex items-center justify-center w-10 h-10 bg-inverse-surface rounded-2xl text-inverse-on-surface hover:opacity-90 transition-opacity shrink-0"
            href="#"
          >
            <span className="material-symbols-outlined">Folder</span>
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                className={
                  index === 0
                    ? "text-on-surface text-sm font-medium"
                    : "text-on-surface-variant/80 hover:text-on-surface text-sm font-medium transition-colors duration-200"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              className="inline-flex items-center gap-2 bg-primary text-on-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors shrink-0"
              href="mailto:danishraimi77@gmail.com"
            >
              danishraimi77@gmail.com
            </a>
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              className="text-on-surface p-2"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl md:hidden">
          <div className="bg-surface-container/95 backdrop-blur-md border border-outline/10 rounded-3xl p-4 flex flex-col gap-3 shadow-lg shadow-black/10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                className={
                  index === 0
                    ? "text-on-surface font-medium px-2 py-1"
                    : "text-on-surface-variant/80 hover:text-on-surface font-medium px-2 py-1 transition-colors duration-200"
                }
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors mt-2"
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
