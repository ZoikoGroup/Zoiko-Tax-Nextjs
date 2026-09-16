"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { primaryNav } from "./nav-data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="section-container flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-orange"
          >
            Sign In
          </Link>
          <Link
            href="#book-a-demo"
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-orange-light hover:shadow-md"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-navy/5 hover:text-brand-orange"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-black/5 pt-4">
                <Link
                  href="/sign-in"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-brand-navy/80"
                >
                  Sign In
                </Link>
                <Link
                  href="#book-a-demo"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-brand-orange px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
