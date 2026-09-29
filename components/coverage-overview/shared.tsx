"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { CoverageState } from "./coverage-data";

export { default as Reveal } from "@/components/shared/Reveal";

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
    <section id={id} style={style} className={clsx("relative w-full py-16 sm:py-20 md:py-24", className)}>
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">{children}</div>
    </section>
  );
}

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
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center mx-auto max-w-4xl" : "w-full max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs sm:text-sm font-bold uppercase tracking-[0.08em]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-[44px] font-bold leading-[1.08] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5]",
            dark ? "text-[#D9D0DF]" : "text-[#706876]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CoverageStateBadge({
  state,
  size = "md",
  className,
}: {
  state: CoverageState | string;
  size?: "sm" | "md";
  className?: string;
}) {
  let colorClasses = "bg-[#EEEDEF] text-[#5C5A5F] border-[#5C5A5F]";

  switch (state) {
    case "RESEARCH":
      colorClasses = "bg-[#F0EDF3] text-[#665B73] border-[#665B73]";
      break;
    case "VALIDATION":
      colorClasses = "bg-[#FFF3D8] text-[#8A5700] border-[#8A5700]";
      break;
    case "PILOT":
      colorClasses = "bg-[#EAF0FA] text-[#385A8F] border-[#385A8F]";
      break;
    case "PRODUCTION":
      colorClasses = "bg-[#E5F4EC] text-[#176B4D] border-[#176B4D]";
      break;
    case "MANAGED":
      colorClasses = "bg-[#EEE3F6] text-[#5A2388] border-[#5A2388]";
      break;
    case "SUSPENDED":
      colorClasses = "bg-[#FBE8EB] text-[#9B2C3B] border-[#9B2C3B]";
      break;
    case "WITHDRAWN":
      colorClasses = "bg-[#EFE8EA] text-[#573B43] border-[#573B43]";
      break;
    case "STATUS UNAVAILABLE":
    default:
      colorClasses = "bg-[#EEEDEF] text-[#5C5A5F] border-[#5C5A5F]";
      break;
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-bold tracking-tight whitespace-nowrap rounded-full border transition-colors",
        size === "sm" ? "px-2.5 py-1 text-[10px] uppercase tracking-wider" : "px-3 py-1.5 text-[11px] sm:text-xs uppercase",
        colorClasses,
        className
      )}
    >
      {state}
    </span>
  );
}

export function SyntheticBadge({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center text-[10px] font-bold text-[#D65A2C] uppercase tracking-wider",
        className
      )}
    >
      SYNTHETIC
    </span>
  );
}

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
    "inline-flex items-center justify-center rounded-full bg-[#BF6735] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] text-center cursor-pointer";

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
  const baseClasses = dark
    ? "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200 active:scale-[0.98] shadow-sm text-center cursor-pointer"
    : "inline-flex items-center justify-center rounded-full border border-[#DDD2E2] bg-white px-5 py-3 text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all duration-200 active:scale-[0.98] shadow-sm text-center cursor-pointer";

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
