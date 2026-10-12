"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export { default as Reveal } from "@/components/shared/Reveal";

export function SectionContainer({
  children,
  className,
  id,
  style,
  hasPattern = false,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  hasPattern?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      style={style}
      className={clsx(
        "relative w-full py-16 sm:py-20 lg:py-[104px] overflow-hidden",
        dark ? "bg-[#301153]" : "bg-[#FAF3FF]",
        className
      )}
    >
      {hasPattern && !dark && (
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-no-repeat bg-right-top"
          style={{ backgroundImage: "url('/media-kit/section-bg.png')" }}
          aria-hidden="true"
        />
      )}
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
        "flex flex-col gap-4 mb-10 sm:mb-12",
        align === "center" ? "items-center text-center mx-auto max-w-4xl" : "w-full",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs sm:text-sm font-bold uppercase tracking-[0.08em]",
            dark ? "text-[#F4A261]" : "text-[#A9421F]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight font-['Inter',sans-serif]",
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

export function AuthorityNotice({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mt-8 rounded-2xl bg-[#F3EEF7] p-6 flex flex-col sm:flex-row items-start gap-4 border border-[#D8CEDD]/50 transition-all",
        className
      )}
    >
      <div className="shrink-0 w-5 h-5 mt-0.5 relative">
        <Image
          src="/media-kit/icons/info.svg"
          alt="Notice info"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-base font-bold text-[#18141B] leading-snug">
          {title}
        </h4>
        <p className="text-sm leading-[1.6] text-[#665F69]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function StatusPill({
  text,
  className,
  dark = false,
}: {
  text: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono font-medium tracking-wide uppercase",
        dark
          ? "bg-white/[0.07] text-[#D9D0DF] border border-white/10"
          : "bg-[#FAF3FF] text-[#301153] border border-[#D8CEDD]",
        className
      )}
    >
      {text}
    </div>
  );
}

export function UnavailableButton({
  icon = "lock-keyhole",
  label = "Download unavailable",
  className,
}: {
  icon?: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      disabled
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-5 py-2.5 text-sm font-semibold text-[#665F69] cursor-not-allowed opacity-90 transition-opacity shadow-2xs",
        className
      )}
    >
      <Image
        src={`/media-kit/icons/${icon}.svg`}
        alt={label}
        width={16}
        height={16}
        className="w-4 h-4 opacity-70"
      />
      <span>{label}</span>
    </button>
  );
}

export function PrimaryButton({
  children,
  onClick,
  href,
  className,
  icon,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B55E30] px-6 py-3 text-sm sm:text-[15px] font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a04e24] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  const content = (
    <>
      {icon && (
        <Image
          src={`/media-kit/icons/${icon}.svg`}
          alt=""
          width={16}
          height={16}
          className="w-4 h-4"
        />
      )}
      <span>{children}</span>
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

export function SecondaryButton({
  children,
  onClick,
  href,
  className,
  icon,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm sm:text-[15px] font-semibold text-[#18141B] border border-[#D8CEDD] hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-2xs";

  const content = (
    <>
      {icon && (
        <Image
          src={`/media-kit/icons/${icon}.svg`}
          alt=""
          width={16}
          height={16}
          className="w-4 h-4"
        />
      )}
      <span>{children}</span>
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

export function DarkPillButton({
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
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-white/[0.06] px-6 py-3 text-sm sm:text-[15px] font-semibold text-white border border-[#D9D0DF] hover:bg-white/10 transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={clsx(baseClasses, className)}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      <span>{children}</span>
    </button>
  );
}
