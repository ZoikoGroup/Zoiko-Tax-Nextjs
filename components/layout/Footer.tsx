import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { footerColumns, legalLinks } from "./nav-data";
import { LinkedInIcon, YouTubeIcon, XIcon, InstagramIcon } from "./SocialIcons";

const officialChannels = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

const trustNotes = [
  {
    title: "Coverage Truth",
    body: "ZoikoTax's coverage is continually expanding, but availability is only claimed through governed country and regulatory packs. Current availability is listed in the Coverage list.",
  },
  {
    title: "Professional Advice",
    body: "ZoikoTax is not a substitute for legal, accounting or regulatory advice. Consult qualified professionals for your specific jurisdiction. All determinations are subject to review and approval.",
  },
  {
    title: "AI Authority",
    body: "AI assists with research, annotation, and exploration. Final decisions are determined by governed rules, not autonomous AI. Accountability and responsibility remain with you.",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/70">
      <div className="section-container py-14">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
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

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Global Headquarters
              </h4>
              <p className="mt-3 text-sm text-white/70">
                Sacramento, California
                <br />
                United States
              </p>
              <p className="mt-2 text-sm text-white/70">+1 (800) 555-0142</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                European Headquarters
              </h4>
              <p className="mt-3 text-sm text-white/70">
                London W1F 9RP
                <br />
                United Kingdom
              </p>
              <p className="mt-2 text-sm text-white/70">+44 20 7946 0958</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Official Channels
              </h4>
              <div className="mt-3 flex gap-3">
                {officialChannels.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:text-brand-orange"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <h5 className="text-sm font-semibold text-white">{note.title}</h5>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>ZoikoTax is a trading name of Zoiko Tech Inc., a Zoiko Group company.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="section-container flex flex-col gap-2 border-t border-white/5 py-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} ZoikoTax. All rights reserved. Made with a focus on global fiscal
            compliance.
          </p>
          <Link href="#" className="hover:text-white/70">
            Manage Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
