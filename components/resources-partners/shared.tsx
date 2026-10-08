"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Info } from "lucide-react";

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
    <section
      id={id}
      style={style}
      className={clsx("relative w-full py-16 sm:py-20 lg:py-[104px]", className)}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
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
          "text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight font-['Inter',sans-serif]",
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

export function PrimaryButton({
  children,
  onClick,
  href,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 shrink-0" />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 shrink-0" />
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  href,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 py-3.5 text-sm font-semibold text-[#18141B] shadow-2xs hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 shrink-0 text-[#18141B]" />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 shrink-0 text-[#18141B]" />
    </button>
  );
}

export function ContextualLink({
  label,
  href,
  className,
  dark = false,
}: {
  label: string;
  href: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group",
        dark
          ? "text-[#F4A261] hover:text-[#f8b884]"
          : "text-[#D65A2C] hover:text-[#a9441d]",
        className
      )}
    >
      <span className="group-hover:underline underline-offset-4">{label}</span>
      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function ScopeNotice({
  title,
  explanation,
  className,
  dark = false,
}: {
  title: string;
  explanation: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "rounded-[16px] border p-4 sm:p-5 flex items-start gap-3.5 transition-all",
        dark
          ? "bg-[#1D033B]/80 border-[#4E2A6E] text-white"
          : "bg-[#F4EDF8] border-[#DFD3E7] text-[#18141B]",
        className
      )}
    >
      <div
        className={clsx(
          "shrink-0 p-2 rounded-xl mt-0.5",
          dark ? "bg-[#301153] text-[#F4A261]" : "bg-white text-[#301153] shadow-2xs"
        )}
      >
        <Info className="w-5 h-5" />
      </div>
      <div className="space-y-1">
        <h4 className={clsx("text-sm sm:text-base font-bold", dark ? "text-white" : "text-[#18141B]")}>
          {title}
        </h4>
        <p className={clsx("text-xs sm:text-sm font-normal leading-relaxed", dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>
          {explanation}
        </p>
      </div>
    </div>
  );
}
