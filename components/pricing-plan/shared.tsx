"use client";

import React, { type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

export function SectionContainer({
  children,
  className,
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      style={style}
      className={clsx("relative w-full py-16 sm:py-20 lg:py-[104px]", className)}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">
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
  titleClassName,
  eyebrowClassName,
  descriptionClassName,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 w-full",
        align === "center" ? "items-center text-center mx-auto max-w-4xl" : "",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-sm font-bold uppercase tracking-[0.04em]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight",
          dark ? "text-white" : "text-[#18141B]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5]",
            dark ? "text-[#D9D0DF]" : "text-[#665F69]",
            descriptionClassName
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
  href = "#",
  className,
  icon = true,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#BF6735] px-[22px] text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-all hover:bg-[#DD7235] hover:shadow-md active:scale-95",
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <Image
          src="/pricing-plan/icons/arrow-right.svg"
          alt=""
          width={16}
          height={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}

export function SecondaryButton({
  children,
  href = "#",
  className,
  icon = true,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-[22px] text-sm font-semibold text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.04)] transition-all hover:border-[#BF6735] hover:text-[#BF6735] active:scale-95",
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <Image
          src="/pricing-plan/icons/arrow-right-dark.svg"
          alt=""
          width={16}
          height={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
