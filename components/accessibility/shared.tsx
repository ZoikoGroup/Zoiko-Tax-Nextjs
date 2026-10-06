import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import type { ReactNode } from "react";

export const IMAGE_BASE = "/accessibility";

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
    <section id={id} className={`relative w-full scroll-mt-20 overflow-hidden ${className}`}>
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
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-16 sm:gap-10 sm:px-8 lg:px-20 lg:py-24">
        {children}
      </div>
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
        className={`text-[28px] font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[49.28px] ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`max-w-[1060px] text-base leading-7 sm:text-lg lg:text-xl lg:leading-8 ${
          dark ? "text-zinc-300" : "text-stone-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export function NoticeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-orange-50 p-5 outline -outline-offset-1 outline-orange-200 sm:gap-4 sm:p-6">
      <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-700 sm:size-6" strokeWidth={1.8} />
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-base font-semibold text-zinc-900">{title}</p>
        <p className="text-sm leading-6 text-stone-500 sm:text-base">{children}</p>
      </div>
    </div>
  );
}

export function Card({
  title,
  children,
  eyebrow,
  className = "",
}: {
  title: string;
  children: ReactNode;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 self-stretch rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7 ${className}`}
    >
      {eyebrow ? <span className="text-xs font-bold text-amber-700">{eyebrow}</span> : null}
      <h3 className="text-lg font-semibold leading-7 text-zinc-900 sm:text-xl">{title}</h3>
      <p className="text-base leading-6 text-stone-500">{children}</p>
    </div>
  );
}

/** Label/value pair with a bottom rule, used for the "not supplied" anatomy grids. */
export function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 border-b border-zinc-300 py-4">
      <span className="text-sm font-semibold text-stone-500">{label}</span>
      <span className="text-base font-medium leading-6 text-zinc-900">{value}</span>
    </div>
  );
}

/** Title + body pair used in the right-hand requirement lists. */
export function Requirement({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg text-zinc-900 sm:text-xl">{title}</h3>
      <p className="text-base leading-7 text-stone-500">{children}</p>
    </div>
  );
}

const BUTTON_VARIANTS = {
  primary: "bg-amber-700 text-white outline-orange-500 hover:bg-amber-800",
  secondary: "bg-white text-zinc-900 outline-zinc-300 hover:bg-zinc-50",
  dark: "bg-violet-950 text-white outline-white/60 hover:bg-violet-900",
};

export function PillButton({
  label,
  href,
  variant = "primary",
}: {
  label: string;
  href: string;
  variant?: keyof typeof BUTTON_VARIANTS;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 max-w-full items-center gap-3 rounded-[999px] px-6 py-3.5 text-left text-sm font-semibold outline -outline-offset-1 transition-colors ${BUTTON_VARIANTS[variant]}`}
    >
      {label}
      <ArrowRight aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
    </a>
  );
}

/** Routes for related Trust pages. Only pages that exist get a real href. */
export const ROUTES = {
  trustCenter: "#",
  security: "/trust-center-security",
  privacy: "/privacy-data-protection",
};
