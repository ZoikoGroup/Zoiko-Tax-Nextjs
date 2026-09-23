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
    <section id={id} className={clsx("w-full py-16 sm:py-20 lg:py-24", className)}>
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
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#D65A2C]">
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-tight",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg leading-relaxed",
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
  status: "Verified" | "Proposed" | "Production" | "Pilot" | "Research" | "SIMULATION ONLY" | "VERIFIED IMMUTABLE" | "SANDBOX v2.4-STABLE" | "STRUCTURAL";
  className?: string;
}) {
  const styles = {
    Verified: "bg-[#EEFDF6] text-[#26735B] border-[#26735B]/20",
    "VERIFIED IMMUTABLE": "bg-[#EEFDF6] text-[#26735B] border-[#26735B]/20",
    Production: "bg-[#EEFDF6] text-[#26735B] border-[#26735B]/20",
    Proposed: "bg-[#FDF6EE] text-[#9A5B12] border-[#9A5B12]/20",
    Research: "bg-[#FDF6EE] text-[#9A5B12] border-[#9A5B12]/20",
    "SIMULATION ONLY": "bg-[#FDF6EE] text-[#9A5B12] border-[#9A5B12]/30",
    Pilot: "bg-[#EEF4FD] text-[#315B9A] border-[#315B9A]/20",
    "SANDBOX v2.4-STABLE": "bg-white/10 text-[#D65A2C] border-[#D65A2C]/30",
    STRUCTURAL: "bg-[#FDF6EE] text-[#9A5B12] border-[#9A5B12]/20",
  }[status] || "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        styles,
        className
      )}
    >
      {status}
    </span>
  );
}

export function PrimaryButton({
  children,
  href = "#",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#BF6735] px-6 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-all hover:bg-[#DD7235] hover:shadow-md active:scale-95",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  children,
  href = "#",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95",
        className
      )}
    >
      {children}
    </Link>
  );
}
