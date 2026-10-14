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
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">{children}</div>
    </section>
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
    "inline-flex items-center justify-center font-bold text-base leading-6 text-white",
    "bg-[#BF6735] border border-[#DD7235] rounded-full px-7 py-3.5",
    "transition-all duration-200 hover:bg-[#A8582A] active:scale-[0.98]",
    "cursor-pointer shadow-[inset_0_3px_4px_rgba(255,223,211,1),inset_0_-2px_4px_rgba(253,207,190,1)]",
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
    "inline-flex items-center justify-center font-bold text-base leading-6 text-[#2E1065]",
    "bg-white border-2 border-[#E5E7EB] rounded-full px-7 py-3.5",
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
