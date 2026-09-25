"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

export { default as Reveal } from "@/components/shared/Reveal";

export function SectionContainer({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("w-full py-14 sm:py-18 md:py-24", className)}>
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">{children}</div>
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
        align === "center" ? "items-center text-center mx-auto max-w-5xl" : "w-full max-w-none",
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
          "text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold leading-[1.12] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-[#FFF8F5]" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] max-w-4xl",
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
    case "Pass":
    case "PASS":
    case "Accepted & Cleared":
    case "Production":
    case "Active":
      style = "bg-white text-[#26735B] border-[#26735B]";
      break;
    case "Pass with Warnings":
    case "WARN":
    case "Revision Required":
    case "Validation":
    case "Pending Validation":
    case "Reported":
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
