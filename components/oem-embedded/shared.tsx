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
          "text-xs font-bold leading-5 font-['Inter',sans-serif]",
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

/* ---------- Info icon (currentColor) ---------- */

export function InfoIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      className={clsx("shrink-0 mt-0.5", className)}
      aria-hidden="true"
    >
      <path
        d="M11.0033 14.6669V10.9999M11.0033 7.33296H11.0125M20.1707 10.9999C20.1707 16.0629 16.0664 20.1673 11.0033 20.1673C5.94032 20.1673 1.83594 16.0629 1.83594 10.9999C1.83594 5.9369 5.94032 1.83252 11.0033 1.83252C16.0664 1.83252 20.1707 5.9369 20.1707 10.9999Z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Notice callout (orange-50 / violet-950 variants) ---------- */

export function Notice({
  title,
  body,
  dark = false,
  className,
}: {
  title: ReactNode;
  body: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full rounded-2xl p-6 flex flex-col sm:flex-row justify-start items-start gap-4",
        dark ? "bg-violet-950" : "bg-[rgba(255,240,231,1)]",
        className
      )}
    >
      <InfoIcon
        className={clsx("size-5", dark ? "text-orange-300" : "text-orange-600")}
      />
      <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
        <div
          className={clsx(
            "self-stretch text-base font-bold font-['Inter',sans-serif]",
            dark ? "text-white" : "text-zinc-900"
          )}
        >
          {title}
        </div>
        <p
          className={clsx(
            "self-stretch text-base font-normal leading-6 font-['Inter',sans-serif]",
            dark ? "text-zinc-300" : "text-stone-500"
          )}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

/* ---------- Buttons / pill links ---------- */

const primaryClasses =
  "px-5 py-3.5 bg-amber-700 hover:bg-[#9a4708] rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex justify-start items-center gap-3 overflow-hidden transition-all cursor-pointer";

const secondaryClasses =
  "px-5 py-3.5 bg-white hover:bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-start items-center gap-3 overflow-hidden transition-all cursor-pointer";

const ghostDarkClasses =
  "px-5 py-3.5 bg-white/5 hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center gap-3 overflow-hidden transition-all cursor-pointer";

function ArrowRightWhite({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.33594 8.00021H12.6703M8.00314 12.6674L12.6703 8.00021L8.00314 3.33301"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

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
      <ArrowRightWhite className="size-4 text-white" />
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
      <Image
        src="/oem-embedded/arrow-right.svg"
        alt=""
        width={16}
        height={16}
        className="size-4"
      />
    </Link>
  );
}

export function GhostDarkButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={clsx(ghostDarkClasses, className)}>
      <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
        {children}
      </span>
      <ArrowRightWhite className="size-4 text-white" />
    </Link>
  );
}
