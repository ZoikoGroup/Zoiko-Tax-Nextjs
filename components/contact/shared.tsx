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
    <section id={id} style={style} className={clsx("w-full py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center mx-auto" : "w-full",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#605C66] max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
