import Image from "next/image";
import type { ReactNode } from "react";

export const IMAGE_BASE = "/privacy-data-protection";

export function ArrowRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M3.33 8h9.34M8.67 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M4.67 11.33l6.66-6.66M5.33 4.67h6v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6 shrink-0 text-violet-950">
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SectionShell({
  children,
  className = "",
  id,
  bgImage,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
}) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`}>
      {bgImage ? (
        <Image
          src={`${IMAGE_BASE}/${bgImage}`}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : null}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className={`text-xs font-bold ${dark ? "text-orange-300" : "text-amber-700"}`}>{eyebrow}</span>
      <h2
        className={`text-[28px] font-bold leading-tight sm:text-4xl sm:leading-10 ${dark ? "text-white" : "text-zinc-900"}`}
      >
        {title}
      </h2>
      <p className={`text-sm leading-6 sm:text-base ${dark ? "text-zinc-300" : "text-stone-500"}`}>{description}</p>
    </div>
  );
}

export function NoticeCard({
  title,
  description,
  dark = false,
}: {
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2.5 rounded-xl border border-l-[3px] p-5 sm:p-6 ${
        dark ? "border-white/20 bg-white/5" : "border-orange-200 bg-orange-50"
      }`}
    >
      <p className={`text-base font-bold ${dark ? "text-white" : "text-zinc-900"}`}>{title}</p>
      <p className={`text-sm leading-6 ${dark ? "text-zinc-300" : "text-stone-500"}`}>{description}</p>
    </div>
  );
}

export function Badge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex w-fit items-start rounded-[999px] px-3 py-1.5 text-xs font-semibold outline outline-1 outline-offset-[-1px] ${
        dark ? "bg-white/10 text-white outline-white/30" : "bg-purple-100 text-violet-950 outline-zinc-300"
      }`}
    >
      {children}
    </span>
  );
}

export function InfoCard({ title, description, badge }: { title: string; description: string; badge?: string }) {
  return (
    <div className="flex flex-col items-start gap-3.5 self-stretch rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-zinc-300 sm:p-6">
      <h3 className="text-lg leading-7 text-zinc-900 sm:text-xl">{title}</h3>
      <p className="text-base leading-6 text-stone-500">{description}</p>
      {badge ? <Badge>{badge}</Badge> : null}
    </div>
  );
}

export function PrimaryButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex max-w-full items-center gap-3 rounded-[999px] bg-amber-700 px-5 py-3.5 text-left text-sm sm:py-4 font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00),inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 transition-colors hover:bg-amber-800"
    >
      {label}
      <ArrowRightIcon />
    </a>
  );
}

export function RouteLink({
  label,
  route,
  href,
  dark = false,
  accent = false,
}: {
  label: string;
  route: string;
  href: string;
  dark?: boolean;
  /** Use the orange link color for the label instead of the plain heading color. */
  accent?: boolean;
}) {
  const labelColor = accent ? "text-amber-700" : dark ? "text-white" : "text-zinc-900";
  return (
    <a href={href} className="group flex w-full items-start justify-between gap-4">
      <span className="flex flex-col gap-1.5">
        <span className={`text-base font-semibold group-hover:underline ${labelColor}`}>{label}</span>
        <span className={`text-xs ${dark ? "text-zinc-300" : "text-stone-500"}`}>{route}</span>
      </span>
      <ArrowUpRightIcon className={`mt-1 size-4 ${dark ? "text-orange-300" : "text-amber-700"}`} />
    </a>
  );
}

/** Canonical Trust routes used across this page. Only pages that exist get a real href. */
export const TRUST_ROUTES = {
  residency: { label: "Data Processing & Residency", route: "/trust/data-processing-residency/", href: "#" },
  security: { label: "Security", route: "/trust/security/", href: "/trust-center-security" },
  evidence: { label: "Evidence & Auditability", route: "/trust/evidence-auditability/", href: "/evidence-auditability" },
  trustCenter: { label: "Trust Center", route: "/trust/", href: "#" },
};
