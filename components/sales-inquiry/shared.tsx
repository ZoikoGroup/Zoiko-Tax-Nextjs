import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export const IMAGE_BASE = "/sales-inquiry";


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
          // Served as-is: re-compression washes out the faint pattern backgrounds.
          unoptimized
          sizes="100vw"
          // On white sections the image is a near-white pattern: double its line strength (white stays white).
          className={`object-cover object-center ${
            className.includes("bg-white") ? "[filter:invert(1)_brightness(2)_invert(1)]" : ""
          }`}
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
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className={`text-sm font-bold uppercase ${dark ? "text-orange-300" : "text-orange-600"}`}>{eyebrow}</span>
      <h2
        className={`text-[28px] font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[47.52px] ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-base leading-7 sm:text-lg lg:text-xl lg:leading-8 ${
            dark ? "text-zinc-300" : "text-stone-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const PILL = "inline-flex min-h-12 items-center gap-2.5 rounded-[999px] px-5 py-3.5 text-sm font-semibold";

const BUTTON_VARIANTS = {
  primary:
    "bg-amber-700 text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00),inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline-orange-500 hover:bg-amber-800",
  secondary: "bg-white text-zinc-900 outline-zinc-300 hover:bg-zinc-50",
  ghost: "bg-white/5 text-white outline-white/50 hover:bg-white/10",
};

export function PillButton({
  label,
  href,
  variant = "primary",
  arrow = true,
}: {
  label: string;
  href: string;
  variant?: keyof typeof BUTTON_VARIANTS;
  arrow?: boolean;
}) {
  return (
    <a href={href} className={`${PILL} outline -outline-offset-1 transition-colors ${BUTTON_VARIANTS[variant]}`}>
      {label}
      {arrow ? <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.8} /> : null}
    </a>
  );
}

export const ROUTES = {
  demo: "#book-a-demo",
  intake: "#commercial-inquiry",
  support: "/customer-support",
  documentation: "/documentation",
  contact: "/contact",
  developers: "/developer-overview",
  packs: "/country-regulatorypacks",
  releases: "/status-and-releases",
  partners: "/oem-embedded",
};

/** Underlined "↗" link used for routes to other destinations. */
export function RouteLink({ label, href, dark = false }: { label: string; href: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1 text-sm font-semibold leading-5 underline underline-offset-2 hover:no-underline ${
        dark ? "text-orange-300" : "text-orange-600"
      }`}
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={2} />
    </a>
  );
}

/** Grey note for a destination that is not yet approved. */
export function PendingNote({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`text-sm font-semibold leading-5 ${dark ? "text-zinc-300" : "text-stone-500"}`}>{children}</p>;
}
