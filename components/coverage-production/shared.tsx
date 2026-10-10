"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export { default as Reveal } from "@/components/shared/Reveal";

/**
 * Standard container constraint for Coverage — Production:
 * Desktop frame 1440px with 80px side padding (max 1280px content area).
 */
export function SectionContainer({
  children,
  className,
  id,
  style,
  noVerticalPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  noVerticalPadding?: boolean;
}) {
  return (
    <section
      id={id}
      style={style}
      className={clsx(
        "relative w-full",
        !noVerticalPadding && "py-16 sm:py-20 lg:py-[104px]",
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}

/**
 * Section Header matching exact Figma specifications:
 * - Eyebrow: 14px w700 uppercase tracking-[0.06em] (#D65A2C or #F4A261)
 * - Title: 44px w700 leading-[1.08] tracking-tight (#18141B or white)
 * - Description/Subhead: 20px w400 leading-[1.55] (#665F69 or #D9D0DF)
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
        align === "center"
          ? "items-center text-center mx-auto max-w-4xl"
          : "w-full max-w-4xl",
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
 * Source boundary callout box present across sections:
 * 1280px wide, bg #F5EFF8, border-radius 16px, padding 18px 22px, with info icon
 */
export function SourceBoundary({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-start sm:items-center gap-3 rounded-2xl bg-[#F5EFF8] px-5 sm:px-6 py-4.5 text-[#301153]",
        className
      )}
    >
      <div className="flex-shrink-0 mt-0.5 sm:mt-0">
        <Image
          src="/coverage-production/icons/info.svg"
          alt="Information"
          width={18}
          height={18}
          className="w-4.5 h-4.5"
        />
      </div>
      <p className="text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
        {text}
      </p>
    </div>
  );
}

/**
 * Primary Pill Action Button:
 * Height 48px, bg #BF6735, border #DD7235, rounded-full, text white 14px w600
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
    "inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#BF6735] border border-[#DD7235] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a95729] active:scale-[0.99] font-['Inter',sans-serif]";

  const content = (
    <>
      <span>{children}</span>
      <Image
        src="/coverage-production/icons/arrow-right.svg"
        alt=""
        width={16}
        height={16}
        className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("group", baseClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("group", baseClasses, className)}
    >
      {content}
    </button>
  );
}

/**
 * Secondary Pill Action Button:
 * Height 48px, bg white, border #D8CEDD, text #18141B 14px w600
 */
export function SecondaryButton({
  children,
  href,
  onClick,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  dark?: boolean;
}) {
  const baseClasses = clsx(
    "inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold shadow-sm transition active:scale-[0.99] font-['Inter',sans-serif]",
    dark
      ? "bg-transparent border border-[#62467B] text-white hover:bg-white/10"
      : "bg-white border border-[#D8CEDD] text-[#18141B] hover:bg-[#FAF8FA]"
  );

  const content = (
    <>
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("w-4 h-4 transition-transform group-hover:translate-x-0.5", dark ? "stroke-white" : "stroke-[#18141B]")}
      >
        <path
          d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx("group", baseClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("group", baseClasses, className)}
    >
      {content}
    </button>
  );
}
