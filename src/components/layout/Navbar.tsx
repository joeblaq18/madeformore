"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "The Story", href: "#story" },
  { label: "Collection", href: "#collection" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* BRAND LOGO */}
        <a
          href="#home"
          className="relative flex items-center"
          aria-label="MADEFORMORE Home"
        >
          <Image
            src="/images/brand/madeformore-logo.png"
            alt="MADEFORMORE"
            width={260}
            height={120}
            priority
            className="h-auto max-h-16 w-[175px] object-contain md:w-[210px]"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-[#D99A2B]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#preorder"
            className="rounded-full border border-[#D99A2B] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#D99A2B] transition-all duration-300 hover:bg-[#D99A2B] hover:text-black"
          >
            Pre-Order
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#D99A2B] hover:text-[#D99A2B] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-5 text-sm font-medium uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-[#D99A2B]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#preorder"
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded-full bg-[#D99A2B] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-black"
          >
            Pre-Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}