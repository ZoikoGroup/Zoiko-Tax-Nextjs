"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

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
          "text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[18px] font-normal leading-[1.5]",
            dark ? "text-[#D8CEDD]" : "text-[#665F69]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  let style = "bg-white text-gray-700 border-gray-300";

  switch (status) {
    case "Aligned":
    case "Pass":
    case "PASS":
    case "Fully Aligned":
    case "Zero":
    case "Confirmed":
    case "All Notices Mapped":
    case "Audit-Ready":
    case "12,482 Mandates Approved":
    case "Resolved":
    case "Matched":
    case "Within Policy":
    case "Within policy":
    case "Supported Configuration":
    case "Active":
      style = "bg-white text-[#26735B] border-[#26735B]";
      break;

    case "Variance Triggered":
    case "0.04% Deviation":
    case "Timing Window Diff":
    case "Material Mismatch":
    case "Unmapped Tax Code":
    case "Review Required":
    case "Review required":
    case "Blocked":
    case "Rejected":
      style = "bg-[#FFF8F5] text-[#D65A2C] border-[#D65A2C]";
      break;

    case "Pending":
    case "Awaiting Pre-Run":
    case "Awaiting Remittance":
    case "Draft Positions Locked":
    case "Prior-Period Adjust":
    case "Post-Close Amendment":
    case "Accepted Exception":
    case "Pilot Support":
    case "Selective Pilot":
      style = "bg-white text-[#315B9A] border-[#315B9A]";
      break;

    default:
      style = "bg-white text-[#665F69] border-[#D8CEDD]";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide whitespace-nowrap shadow-2xs",
        style,
        className
      )}
    >
      {status}
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
    : "inline-flex items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-5 py-3 text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all duration-200 active:scale-[0.98] shadow-sm text-center cursor-pointer";

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
