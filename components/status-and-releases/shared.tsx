"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionContainer({
  children,
  className,
  id,
  style,
  patternBg = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  patternBg?: boolean;
}) {
  return (
    <section
      id={id}
      style={style}
      className={clsx(
        "relative w-full py-16 sm:py-20 md:py-24 overflow-hidden",
        patternBg && "bg-[url('/status-and-releases/pattern-bg.png')] bg-cover bg-no-repeat",
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 xl:px-20">
        {children}
      </div>
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
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-4xl" : "w-full max-w-[1060px]",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs sm:text-sm font-bold uppercase tracking-[0.05em]",
            dark ? "text-[#FFF0E9]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5]",
            dark ? "text-[#D9D0DF]" : "text-[#665F69]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function StatusBadge({
  label,
  variant,
  className,
}: {
  label: string;
  variant?:
    | "research"
    | "validation"
    | "pilot"
    | "production"
    | "managed"
    | "suspended"
    | "withdrawn"
    | "unavailable"
    | "neutral"
    | "amber"
    | "dark"
    | "purple";
  className?: string;
}) {
  let badgeStyle = "bg-[#F7F3ED] text-[#665F69] border-[#665F69]";

  const upper = label.toUpperCase();

  if (upper.includes("SYNTHETIC DATA")) {
    badgeStyle = "bg-[#F7F3ED] text-[#665F69] border-[#D8CEDD]";
  } else if (
    upper.includes("PILOT") ||
    upper.includes("PUBLIC ROUTE") ||
    upper.includes("THIS SURFACE") ||
    variant === "pilot"
  ) {
    badgeStyle = "bg-[#EEE2F5] text-[#301153] border-[#301153]";
  } else if (
    upper.includes("SUSPENDED") ||
    upper.includes("WITHDRAWN") ||
    variant === "suspended"
  ) {
    badgeStyle = "bg-[#FBEAEA] text-[#9E3434] border-[#9E3434]";
  } else if (
    upper.includes("SCOPE CHANGED") ||
    upper.includes("RESEARCH") ||
    variant === "research"
  ) {
    badgeStyle = "bg-[#E8F1F8] text-[#315D82] border-[#315D82]";
  } else if (
    upper.includes("MANAGED") ||
    (upper.includes("PRODUCTION") && !upper.includes("SUSPENDED")) ||
    variant === "managed" ||
    variant === "production"
  ) {
    badgeStyle = "bg-[#E8F4EF] text-[#236C55] border-[#236C55]";
  } else if (
    upper.includes("HISTORICAL") ||
    upper === "VALIDATION" ||
    variant === "validation"
  ) {
    badgeStyle = "bg-[#FFF4D6] text-[#8A5A00] border-[#8A5A00]";
  } else if (
    upper.includes("SEPARATE") ||
    upper.includes("GOVERNED") ||
    upper.includes("SCOPED")
  ) {
    badgeStyle = "bg-[#EEE2F5] text-[#301153] border-[#301153]";
  } else {
    badgeStyle = "bg-[#F7F3ED] text-[#665F69] border-[#665F69]";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center px-[11px] py-[6px] text-[12px] font-bold tracking-tight rounded-full border leading-none uppercase",
        badgeStyle,
        className
      )}
    >
      {label}
    </span>
  );
}

export function DescriptiveLink({
  text,
  href,
  dark = false,
  className,
}: {
  text: string;
  href: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-[7px] text-[14px] font-semibold transition-colors group",
        dark
          ? "text-white hover:text-[#FFF0E9]"
          : "text-[#301153] hover:text-[#D65A2C]",
        className
      )}
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
