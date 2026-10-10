"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export { default as Reveal } from "@/components/shared/Reveal";

/**
 * Standard container constraint for Country & Regulatory Packs:
 * Desktop frame 1440px with 80px side padding (max 1280px content area).
 */
export function SectionContainer({
  children,
  className,
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} style={style} className={clsx("relative w-full py-16 sm:py-20 lg:py-[104px]", className)}>
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">{children}</div>
    </section>
  );
}

/**
 * Section Header matching exact Figma style_7835d853 (eyebrow), style_f1876c6d (H2), style_21396dd1 (subhead)
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12",
        align === "center" ? "items-center text-center mx-auto max-w-4xl" : "w-full max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs sm:text-sm font-bold uppercase tracking-[0.06em] font-['Inter',sans-serif]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.55] font-['Inter',sans-serif]",
            dark ? "text-[#D9D0DF]" : "text-[#665F69]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Diamond line-art pattern background (Figma asset 6f3d71f3...)
 */
export function PatternBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={clsx("pointer-events-none absolute inset-0 z-0", className)}>
      <Image
        src="/country-regulatorypacks/section-pattern-bg.png"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="object-cover opacity-100"
      />
    </div>
  );
}

/**
 * Status Chip with exact pill styling and font: Inter Bold 13px
 */
export function StatusChip({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-bold leading-normal transition-colors",
        className || "bg-[#F3EDF7] text-[#665F69]"
      )}
    >
      {label}
    </span>
  );
}

/**
 * Primary Pill Action Button: 48px height, bg #D65A2C, font Inter SemiBold 14px
 */
export function PrimaryButton({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const baseClasses =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D65A2C] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c04d22] active:scale-[0.99] font-['Inter',sans-serif]";

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
}

/**
 * Secondary Pill Action Button: 48px height, border #D8CEDD, text #301153
 */
export function SecondaryButton({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const baseClasses =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#301153] shadow-sm transition hover:bg-[#FAF8FA] active:scale-[0.99] font-['Inter',sans-serif]";

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
}
