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
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 shrink-0",
        dark ? "bg-white/10 text-white border border-white/20" : "bg-[#F2EDF4] text-[#18141B]",
        className
      )}
    >
      <IconCircleHelp className={clsx("w-4 h-4 shrink-0", dark ? "text-[#D9D0DF]" : "text-[#18141B]")} />
      <span className="text-[13px] font-semibold leading-none whitespace-nowrap">
        Status unavailable
      </span>
    </div>
  );
}

export function PrimaryPillButton({
  children,
  href,
  onClick,
  showIcon = true,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#BF6735] px-[22px] py-[15px] text-sm font-semibold text-white border border-[#DD7235] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] hover:bg-[#a9572b] transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]";

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <IconArrowUpRight className="w-4 h-4 shrink-0 text-white" />}
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

export function SecondaryWhitePillButton({
  children,
  href,
  onClick,
  showIcon = true,
  iconClassName,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  iconClassName?: string;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full border border-[#D8CEDD] bg-white px-[22px] py-[15px] text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]";

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <IconArrowUpRight
          className={clsx("w-4 h-4 shrink-0 text-[#D65A2C] stroke-[#D65A2C]", iconClassName)}
        />
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

export function SecondaryDarkPillButton({
  children,
  href,
  onClick,
  showIcon = true,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/5 px-[22px] py-[15px] text-sm font-semibold text-white hover:bg-white/10 hover:border-white/60 transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]";

  const content = (
    <>
      <span>{children}</span>
      {showIcon && <IconArrowUpRight className="w-4 h-4 shrink-0 text-white" />}
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

