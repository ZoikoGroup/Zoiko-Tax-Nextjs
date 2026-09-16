"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";
import MegaMenuPanel from "./MegaMenuPanel";
import { megaMenus } from "./menu-data";

const demoButtonClass =
  "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-copper px-5 font-dm-sans text-xs font-semibold text-white outline outline-1 -outline-offset-1 outline-copper-bright shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-colors hover:bg-copper-bright";

const menuId = (label: string) => `mega-menu-${label.toLowerCase()}`;

// Grace period so the pointer can travel from a trigger down into its panel.
const CLOSE_DELAY_MS = 150;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  };

  const closeAll = () => {
    cancelClose();
    setOpenMenu(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      document.getElementById(`${menuId(openMenu)}-trigger`)?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

  useEffect(() => cancelClose, []);

  const activeMenu = megaMenus.find((menu) => menu.label === openMenu);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/5 bg-header-bg">
      <div className="mx-auto flex h-20 w-full max-w-360 items-center justify-between px-4 sm:px-8 xl:px-20">
        <Logo />

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 xl:flex 2xl:gap-4"
          onMouseLeave={scheduleClose}
        >
          {megaMenus.map(({ label }) => {
            const isOpen = openMenu === label;
            return (
              <button
                key={label}
                id={`${menuId(label)}-trigger`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId(label)}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(label);
                }}
                onClick={() => {
                  cancelClose();
                  setOpenMenu(label);
                }}
                className={`flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 font-dm-sans text-xs font-medium transition-colors ${
                  isOpen ? "bg-menu-accent/10 text-menu-accent" : "text-black hover:text-menu-accent"
                }`}
              >
                {label}
                <ChevronDown
                  className={`size-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-menu-accent" : "text-ink"}`}
                  strokeWidth={2.5}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <button
            type="button"
            aria-label="Search"
            className="rounded-md p-1.5 text-ink transition-colors hover:text-menu-accent"
          >
            <Search className="size-4" strokeWidth={2.5} />
          </button>
          <Link
            href="/sign-in"
            className="whitespace-nowrap font-dm-sans text-xs font-semibold text-ink transition-colors hover:text-menu-accent"
          >
            Sign In
          </Link>
          <Link href="#book-a-demo" className={demoButtonClass}>
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key="mega-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden px-6 pt-2 xl:block"
          >
            <div className="mx-auto max-w-360">
              <MegaMenuPanel
                menu={activeMenu}
                id={menuId(activeMenu.label)}
                onNavigate={closeAll}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-black/5 bg-header-bg xl:hidden"
          >
            <nav aria-label="Main" className="flex flex-col px-4 py-4 sm:px-8">
              {megaMenus.map((menu) => {
                const isOpen = openMobileMenu === menu.label;
                return (
                  <div key={menu.label} className="border-b border-menu-line">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMobileMenu(isOpen ? null : menu.label)}
                      className={`flex w-full items-center justify-between px-2 py-3 font-dm-sans text-sm font-medium ${
                        isOpen ? "text-menu-accent" : "text-black"
                      }`}
                    >
                      {menu.label}
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-5 px-2 pb-4">
                            {menu.sections.map((section) => (
                              <div key={section.title}>
                                <p className="mb-2 font-sora text-xs font-bold uppercase tracking-wide text-menu-title">
                                  {section.title}
                                </p>
                                <ul className="flex flex-col">
                                  {section.items.map((entry) => (
                                    <li key={entry.label}>
                                      <Link
                                        href={entry.href}
                                        onClick={closeAll}
                                        className="flex items-center gap-2 py-2 font-dm-sans text-xs text-menu-text hover:text-menu-accent"
                                      >
                                        <entry.icon className="size-4 text-menu-accent" />
                                        {entry.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="mt-4 flex flex-col gap-3">
                <Link href="/sign-in" onClick={closeAll} className="px-2 font-dm-sans text-sm font-semibold text-ink">
                  Sign In
                </Link>
                <Link href="#book-a-demo" onClick={closeAll} className={demoButtonClass}>
                  Book a Demo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
