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
    <section id={id} className={clsx("w-full py-12 sm:py-16 md:py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
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
        "flex flex-col gap-2.5 sm:gap-3",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.15] tracking-tight font-['Tiro_Gurmukhi',serif] break-words",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-sm sm:text-base md:text-lg leading-relaxed break-words",
            dark ? "text-white/80" : "text-[#535055]"
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
  let style = "bg-gray-100 text-gray-700 border-gray-200";

  switch (status) {
    case "Ready for Use":
    case "Production":
    case "Active":
      style = "bg-[#EEFDF6] text-[#26735B] border-[#A3F3D3]";
      break;
    case "Needs Review":
    case "Pending":
    case "Managed Pilot":
      style = "bg-[#FDF6EE] text-[#9A5B12] border-[#FDE3C8]";
      break;
    case "Expired":
    case "Archived":
      style = "bg-[#FEF2F2] text-[#BF3535] border-[#FCA5A5]";
      break;
    case "In Research":
      style = "bg-[#EFF6FF] text-[#315B9A] border-[#BFDBFE]";
      break;
    case "Status Unavailable":
    case "ILLUSTRATIVE STATUS ONLY":
    case "REPRESENTATIVE INTERFACE":
      style = "bg-[#FAF8FA] text-[#665F69] border-[#D8CEDD]";
      break;
    default:
      style = "bg-[#FAF8FA] text-[#665F69] border-[#D8CEDD]";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide whitespace-nowrap",
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
    "inline-flex items-center justify-center rounded-full bg-[#BF6735] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] text-center";

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
    "inline-flex items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-5 py-3 text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all duration-200 active:scale-[0.98] shadow-sm text-center";

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
