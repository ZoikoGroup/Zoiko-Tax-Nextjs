"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { IconCircleHelp, IconArrowUpRight } from "./Icons";

export { default as Reveal } from "@/components/shared/Reveal";
export * from "./Icons";

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
    <section id={id} style={style} className={clsx("w-full", className)}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px]">
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
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-sm font-bold uppercase",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-[44px] font-bold leading-[1.08] tracking-tight",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5em]",
            dark ? "text-[#D9D0DF]" : "text-[#665F69]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function StatusUnavailableBadge({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full bg-[#EEE8F1] px-3 py-2 shrink-0",
        className
      )}
    >
      <IconCircleHelp className="w-3.5 h-3.5 shrink-0" />
      <span className="text-[13px] font-semibold text-[#51435D] leading-none whitespace-nowrap">
        Status unavailable
      </span>
    </div>
  );
}

export function PrimaryPillButton({
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
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-[rgba(191,103,53,1)] px-[22px] py-[14px] text-sm font-semibold text-white border border-[rgba(221,114,53,1)] hover:bg-[#a9572b] transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]";

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

export function SecondaryWhitePillButton({
  children,
  href,
  onClick,
  showIcon = false,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full border border-[#D8CEDD] bg-white px-[22px] py-[14px] text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]";

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <span className="text-[#18141B]">
          <IconArrowUpRight className="w-4 h-4 shrink-0 text-[#18141B] stroke-[#18141B]" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {content}
    </button>
  );
}

export function DarkPillButton({
  children,
  href,
  onClick,
  showIcon = false,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full border border-white/33 bg-white/5 px-[22px] py-[14px] text-sm font-semibold text-white hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]";

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <IconArrowUpRight className="w-4 h-4 shrink-0 text-white stroke-white" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {content}
    </button>
  );
}
