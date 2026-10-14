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
    <section id={id} style={style} className={clsx("relative w-full", className)}>
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        {children}
      </div>
    </section>
  );
}

export function EyebrowTag({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={clsx(
        "text-[12.5px] font-bold tracking-[1.875px] uppercase leading-[21px] mb-2 sm:mb-3",
        light ? "text-[#B6A8CF]" : "text-[#D9743E]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={clsx(
        "text-3xl sm:text-[39.2px] font-extrabold leading-[1.1] sm:leading-[43.12px] tracking-[-0.784px] mb-3 sm:mb-4",
        light ? "text-white" : "text-[#1D1526]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={clsx(
        light
          ? "text-[16px] leading-[26px] text-[#B6A8CF]"
          : "text-[16px] sm:text-[17.92px] leading-[26px] sm:leading-[28.67px] text-[#5C5468]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function PillBadge({
  children,
  className,
  variant = "purple",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "purple" | "neutral" | "orange";
}) {
  const variantStyles = {
    purple: "bg-[#ECE5FB] text-[#5A3CC6]",
    neutral: "bg-[#F4F0F8] text-[#8A8198] border border-[#E7E0F1]",
    orange: "bg-[#ECE5FB] text-[#D97637]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center text-[11px] font-bold tracking-[0.66px] uppercase px-3 py-1 rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  const baseClasses = clsx(
    "inline-flex items-center justify-center font-semibold text-[15px] leading-none text-white",
    "bg-[#BF6735] border border-[#DD7235] rounded-full px-7 py-3.5",
    "transition-all duration-200 hover:bg-[#A8582A] active:scale-[0.98]",
    "cursor-pointer shadow-[inset_0_3px_4px_rgba(255,223,211,0.5),inset_0_-2px_4px_rgba(180,80,30,0.3)]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
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
  const baseClasses = clsx(
    "inline-flex items-center justify-center font-semibold text-[15px] leading-none text-[#1D1526]",
    "bg-white border border-[#E5E7EB] rounded-full px-8 py-3.5",
    "transition-all duration-200 hover:bg-gray-50 hover:border-[#D1D5DB] active:scale-[0.98]",
    "cursor-pointer shadow-sm",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
