import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Layout ---------- */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <span
        className={clsx(
          "text-xs font-bold uppercase tracking-[0.08em] leading-5 font-['Inter',sans-serif]",
          dark ? "text-orange-300" : "text-orange-600"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] lg:leading-[47.52px] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-white" : "text-zinc-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]",
            dark ? "text-zinc-300" : "text-stone-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------- Notice callout (orange-50 / indigo-950 variants) ---------- */

export function Notice({
  title,
  body,
  dark = false,
  className,
}: {
  title?: string;
  body: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full rounded-lg border-l-[3px] border-amber-700 p-6 flex flex-col justify-start items-start gap-2",
        dark ? "bg-indigo-950" : "bg-orange-50",
        className
      )}
    >
      {title && (
        <div
          className={clsx(
            "text-lg font-semibold leading-6 font-['Inter',sans-serif]",
            dark ? "text-white" : "text-zinc-900"
          )}
        >
          {title}
        </div>
      )}
      <p
        className={clsx(
          "text-sm font-normal leading-5 font-['Inter',sans-serif]",
          dark ? "text-zinc-300" : "text-stone-500"
        )}
      >
        {body}
      </p>
    </div>
  );
}

/* ---------- Icons ---------- */

export function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M11.3297 11.3326V4.66699H4.66406M11.3297 4.66699L4.66406 11.3326"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Buttons / links ---------- */

const primaryClasses =
  "h-12 px-5 bg-amber-700 hover:bg-[#9a4708] rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex justify-start items-center gap-3 overflow-hidden transition-all cursor-pointer";

const secondaryClasses =
  "h-12 px-5 bg-white hover:bg-neutral-50 rounded-[999px] inline-flex justify-start items-center gap-3 overflow-hidden transition-all cursor-pointer";

export function PrimaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={clsx(primaryClasses, className)}>
      <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
        {children}
      </span>
      <Image
        src="/existing-tax-engines/arrow-up-right (1).svg"
        alt=""
        width={16}
        height={16}
        className="size-4"
      />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={clsx(secondaryClasses, className)}>
      <span className="text-zinc-900 text-sm font-semibold font-['Inter',sans-serif]">
        {children}
      </span>
      <ArrowUpRight className="size-4 text-orange-600" />
    </Link>
  );
}

export function TextLink({
  href,
  children,
  dark = false,
  className,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "min-h-11 inline-flex justify-start items-center gap-2.5 group",
        className
      )}
    >
      <span
        className={clsx(
          "text-base font-semibold font-['Inter',sans-serif] group-hover:underline",
          dark ? "text-orange-300" : "text-orange-600"
        )}
      >
        {children}
      </span>
      {dark ? (
        <Image
          src="/existing-tax-engines/arrow-up-right.svg"
          alt=""
          width={16}
          height={16}
          className="size-4"
        />
      ) : (
        <ArrowUpRight className="size-4 text-orange-600" />
      )}
    </Link>
  );
}

/* ---------- Section shells ---------- */

export function LightSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden"
    >
      <Container className={clsx("relative z-10 flex flex-col gap-10", className)}>
        {children}
      </Container>
    </section>
  );
}
