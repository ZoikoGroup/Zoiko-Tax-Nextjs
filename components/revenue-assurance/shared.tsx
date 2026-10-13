import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export const IMAGE_BASE = "/revenue-assurance";

/** Routes for related pages. Only pages that exist get a real href. */
export const ROUTES = {
  demo: "#book-a-demo",
  shadowAssurance: "/shadow-assurance",
  reconciliation: "/reconciliation",
  evidence: "/evidence-auditability",
  coverage: "/coverage-overview",
  trustCenter: "/trust-center",
  platform: "/platform-overview",
  taxRegulatory: "/tax-regulatory-compliance",
  cfoFinance: "/cfo-finance",
};

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
    <div className="flex max-w-[1120px] flex-col gap-4">
      <span className={`text-sm font-bold uppercase ${dark ? "text-orange-300" : "text-orange-600"}`}>{eyebrow}</span>
      <h2
        className={`text-[28px] font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[48.40px] ${
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

export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-purple-100">
      <Icon aria-hidden="true" className="size-4 text-orange-600" strokeWidth={1.5} />
    </span>
  );
}

/** White card with an icon tile, bold title and small body copy. */
export function IconCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="flex flex-col items-start gap-3.5 rounded-2xl bg-white p-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline -outline-offset-1 outline-zinc-300 lg:min-h-44">
      <IconTile icon={icon} />
      <h3 className="text-lg font-bold leading-7 text-zinc-900 sm:text-xl">{title}</h3>
      <p className="text-sm leading-5 text-stone-500">{description}</p>
    </div>
  );
}

const STEP_VARIANTS = {
  light: {
    card: "bg-white outline-zinc-300",
    label: "text-orange-600",
    title: "text-zinc-900",
    body: "text-stone-500",
  },
  highlight: {
    card: "bg-purple-100 outline-orange-600",
    label: "text-orange-600",
    title: "text-zinc-900",
    body: "text-stone-500",
  },
  solid: {
    card: "bg-[#301153] outline-[#301153]",
    label: "text-orange-300",
    title: "text-white",
    body: "text-zinc-300",
  },
  glass: {
    card: "bg-white/5 outline-white/20 backdrop-blur-[2px]",
    label: "text-orange-300",
    title: "text-white",
    body: "text-zinc-300",
  },
};

/** Small numbered/labelled card used for stage, layer and position rows. */
export function StepCard({
  label,
  title,
  description,
  variant = "light",
  className = "",
}: {
  label: string;
  title: string;
  description: string;
  variant?: keyof typeof STEP_VARIANTS;
  className?: string;
}) {
  const v = STEP_VARIANTS[variant];
  return (
    <li className={`flex flex-col gap-3 rounded-2xl p-5 outline -outline-offset-1 ${v.card} ${className}`}>
      <span className={`text-xs font-bold ${v.label}`}>{label}</span>
      <h3 className={`text-base font-bold leading-6 sm:text-lg ${v.title}`}>{title}</h3>
      <p className={`text-xs leading-5 ${v.body}`}>{description}</p>
    </li>
  );
}

const BUTTON_VARIANTS = {
  primary: "bg-amber-700 text-white outline-orange-500 hover:bg-amber-800",
  secondary: "bg-white text-zinc-900 outline-zinc-300 hover:bg-zinc-50",
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
      className={`inline-flex h-12 items-center justify-center rounded-[999px] px-5 text-sm font-semibold outline -outline-offset-1 transition-colors ${BUTTON_VARIANTS[variant]}`}
    >
      {label}
    </a>
  );
}
