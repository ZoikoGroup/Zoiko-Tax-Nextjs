import Image from "next/image";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export const IMAGE_BASE = "/cfo-finance";

/** Routes for related pages. */
export const ROUTES = {
  demo: "#book-a-demo",
  platform: "/platform-overview",
  coverage: "/coverage-overview",
  reconciliation: "/reconciliation",
  evidence: "/evidence-auditability",
  trustCenter: "/trust-center",
  developers: "/developer-overview",
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
  title: ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className={`text-sm font-bold uppercase ${dark ? "text-orange-300" : "text-orange-600"}`}>{eyebrow}</span>
      <h2
        className={`text-[28px] font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[49.28px] ${
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

/** Line break that only applies on large screens, so headings wrap naturally on phones. */
export function DesktopBreak() {
  return <br className="hidden lg:inline" />;
}

export function IconTile({ icon: Icon, size = "md" }: { icon: LucideIcon; size?: "md" | "lg" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-orange-50 ${
        size === "lg" ? "size-12 rounded-2xl" : "size-9 rounded-[10px]"
      }`}
    >
      <Icon aria-hidden="true" className={`text-orange-600 ${size === "lg" ? "size-6" : "size-4"}`} strokeWidth={2} />
    </span>
  );
}

export function IconCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="flex flex-col items-start gap-3.5 rounded-2xl bg-white p-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline -outline-offset-1 outline-zinc-300">
      <IconTile icon={icon} />
      <h3 className="text-lg font-bold leading-6 text-zinc-900">{title}</h3>
      <p className="text-sm leading-5 text-stone-500">{description}</p>
    </div>
  );
}

export function DemoButton() {
  return (
    <a
      href={ROUTES.demo}
      className="inline-flex items-center gap-2.5 rounded-[999px] bg-amber-700 px-6 py-3.5 text-sm font-bold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] outline -outline-offset-1 outline-amber-700 transition-colors hover:bg-amber-800"
    >
      Book a Demo
      <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2.5} />
    </a>
  );
}
