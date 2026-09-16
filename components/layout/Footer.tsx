import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Reveal from "@/components/shared/Reveal";
import {
  footerColumns,
  legalLinks,
  offices,
  socialLinks,
  trustNotes,
} from "./nav-data";

const headingClass =
  "text-sm font-bold uppercase leading-6 tracking-wide text-footer-accent";

const container = "mx-auto w-full max-w-360";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer px-4 font-sans sm:px-7">
      {/* Link columns */}
      <div className="border-b border-white/10 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div
            className={`${container} grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6`}
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className={`${headingClass} pb-6`}>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label} className="lg:min-h-14">
                      <Link
                        href={link.href}
                        className="inline-flex py-1.5 text-sm leading-6 text-white/70 transition-colors hover:text-white lg:py-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Offices & official channels */}
      <div className="border-b border-white/10 bg-black/20 px-6 py-16">
        <Reveal>
          <div className={`${container} grid grid-cols-1 gap-10 md:grid-cols-3`}>
            {offices.map((office) => (
              <div key={office.title}>
                <h3 className={`${headingClass} pb-4`}>{office.title}</h3>
                <p className="pb-4 text-base leading-6 text-white">
                  {office.lines.map((line, i) => (
                    <Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </p>
                <a
                  href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm leading-6 text-white/80 transition-colors hover:text-white"
                >
                  {office.phone}
                </a>
              </div>
            ))}

            <div>
              <h3 className={`${headingClass} pb-6`}>Official Channels</h3>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20"
                  >
                    <Image src={social.icon} alt="" width={20} height={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust notes */}
      <div className="border-b border-white/10 px-6 py-16">
        <Reveal>
          <div className={`${container} grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12`}>
            {trustNotes.map((note) => (
              <div key={note.title} className="rounded-xl bg-black/20 p-8">
                <h3 className="text-base font-bold leading-6 text-footer-accent">
                  {note.title}
                </h3>
                <p className="pt-4 text-sm leading-6 text-white/80">{note.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10 bg-black/30 px-6 py-12">
        <div className={`${container} flex flex-col gap-6`}>
          <p className="text-sm leading-6 text-white/70">
            ZoikoTax™ is a trading name of Zoiko Tech Inc., a Zoiko Group company.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {legalLinks.map((link, i) => (
              <Fragment key={link.label}>
                {i > 0 && (
                  <span aria-hidden className="hidden text-sm leading-6 text-white/30 lg:inline">
                    ·
                  </span>
                )}
                <Link
                  href={link.href}
                  className="py-2 text-sm leading-6 text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </Fragment>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm leading-6 text-white/60">
              © {year} ZoikoTax. All rights reserved. | Made with focus on global telecom
              fiscal compliance.
            </p>
            <button
              type="button"
              className="self-start whitespace-nowrap py-2 text-sm text-white/70 transition-colors hover:text-white sm:self-auto"
            >
              Manage Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
