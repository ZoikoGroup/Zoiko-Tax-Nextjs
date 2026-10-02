"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
    <section id={id} style={style} className={clsx("w-full py-14 sm:py-18 md:py-24", className)}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">{children}</div>
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
        "flex flex-col gap-3.5",
        align === "center" ? "items-center text-center mx-auto w-full" : "w-full",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs sm:text-[14px] font-bold uppercase tracking-[0.14em]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight md:tracking-[-1.5px] font-['Inter',sans-serif]",
          dark ? "text-[#FFF8F5]" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg font-normal leading-7 w-full",
            dark ? "text-[#D8CEDD]" : "text-[#665F69]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function AuthorityNotice({
  title,
  description,
  dark = false,
  className,
}: {
  title: string;
  description: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full rounded-lg border-l-[3px] px-5 py-4 sm:px-6 sm:py-5",
        dark ? "bg-[#241039] border-[#5C3979]" : "bg-[#F1E8F8] border-[#D8CEDD]",
        className
      )}
    >
      <p className={clsx("text-[15px] font-bold", dark ? "text-white" : "text-[#301153]")}>{title}</p>
      <p className={clsx("mt-2 text-sm leading-[1.55]", dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>
        {description}
      </p>
    </div>
  );
}

export function SequenceStage({
  step,
  title,
  description,
  showArrow = true,
  dark = false,
}: {
  step: string;
  title: string;
  description: string;
  showArrow?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex-1 min-w-[150px] rounded-2xl border p-5 flex flex-col gap-3",
        dark ? "bg-[#241039] border-[#5C3979]" : "bg-white border-[#D8CEDD]"
      )}
    >
      <div className="flex items-center justify-between">
        <span className={clsx("text-xs font-bold", dark ? "text-[#F4A261]" : "text-[#D65A2C]")}>{step}</span>
        {showArrow && (
          <ArrowRight className={clsx("h-4 w-4", dark ? "text-white/70" : "text-[#D65A2C]")} aria-hidden="true" />
        )}
      </div>
      <p className={clsx("text-lg", dark ? "text-white" : "text-[#18141B]")}>{title}</p>
      <p className={clsx("text-sm leading-[1.55]", dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>{description}</p>
    </div>
  );
}

export function DocRef({
  label,
  path,
  dark = false,
}: {
  label: string;
  path?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 py-2">
      <div className="flex items-center justify-between gap-2">
        <span className={clsx("text-[15px] font-semibold", dark ? "text-[#F4A261]" : "text-[#D65A2C]")}>
          {label}
        </span>
        <ArrowUpRight className={clsx("h-4 w-4 shrink-0", dark ? "text-[#F4A261]" : "text-[#D65A2C]")} aria-hidden="true" />
      </div>
      {path && <span className={clsx("text-xs", dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>{path}</span>}
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
    case "Pass":
    case "PASS":
    case "Accepted & Cleared":
    case "Production":
    case "Active":
    case "Explained":
      style = "bg-white text-[#26735B] border-[#26735B]";
      break;
    case "Pass with Warnings":
    case "WARN":
    case "Revision Required":
    case "Validation":
    case "Pending Validation":
    case "Reported":
    case "Investigating":
    case "Critical":
      style = "bg-white text-[#D65A2C] border-[#D65A2C]";
      break;
    case "Blocked":
    case "Rejected":
      style = "bg-white text-[#D65A2C] border-[#D65A2C]";
      break;
    case "Pilot":
      style = "bg-white text-[#D65A2C] border-[#D8CEDD]";
      break;
    default:
      style = "bg-white text-[#665F69] border-[#D8CEDD]";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold tracking-wide whitespace-nowrap shadow-2xs",
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
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-5 py-3 text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all duration-200 active:scale-[0.98] shadow-sm text-center cursor-pointer";

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
