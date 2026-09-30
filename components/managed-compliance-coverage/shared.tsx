"use client";

import React from "react";
import clsx from "clsx";
import {
  Box,
  ShieldCheck,
  CircleHelp,
  FlaskConical,
  BookOpen,
  Octagon,
  OctagonX,
  Info,
  BadgeCheck,
} from "lucide-react";

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
      className={clsx("relative w-full py-16 sm:py-20 lg:py-24", className)}
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
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
        "flex flex-col gap-3",
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
          "text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]",
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
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <a href={href} className={clsx(baseClasses, className)}>
        {children}
      </a>
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
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 py-3 text-sm font-semibold text-[#18141B] shadow-2xs hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <a href={href} className={clsx(baseClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
}

export function StatusBadge({
  status,
  size = "md",
  className,
}: {
  status: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const s = status.toLowerCase();

  let bg = "bg-[#F7F1FA] text-[#665F69] border-[#DFD3E7]";
  let Icon = Info;

  if (s.includes("production only")) {
    bg = "bg-[#F7F1FA] text-[#665F69] border-[#DFD3E7]";
    Icon = Info;
  } else if (s.includes("production")) {
    bg = "bg-[#E8F5ED] text-[#177245] border-[#B7E2CB]";
    Icon = Box;
  } else if (s.includes("managed")) {
    bg = "bg-[#EEE4F6] text-[#301153] border-[#D4C0E5]";
    Icon = ShieldCheck;
  } else if (s.includes("validation")) {
    bg = "bg-[#EAF3FA] text-[#275D8C] border-[#B7D7EE]";
    Icon = CircleHelp;
  } else if (s.includes("pilot")) {
    bg = "bg-[#FFF4D6] text-[#8A5B00] border-[#FCE19B]";
    Icon = FlaskConical;
  } else if (s.includes("research")) {
    bg = "bg-[#F7F1FA] text-[#665F69] border-[#DFD3E7]";
    Icon = BookOpen;
  } else if (s.includes("suspended")) {
    bg = "bg-[#FDECEC] text-[#9B2C2C] border-[#F8BEBE]";
    Icon = Octagon;
  } else if (s.includes("withdrawn")) {
    bg = "bg-[#FDECEC] text-[#9B2C2C] border-[#F8BEBE]";
    Icon = OctagonX;
  } else if (s.includes("unavailable")) {
    bg = "bg-[#FFF4D6] text-[#8A5B00] border-[#FCE19B]";
    Icon = CircleHelp;
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 font-bold rounded-lg border",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs sm:text-[13px]",
        bg,
        className
      )}
    >
      <Icon className={size === "sm" ? "w-3 h-3 shrink-0" : "w-3.5 h-3.5 shrink-0"} />
      <span>{status}</span>
    </span>
  );
}
