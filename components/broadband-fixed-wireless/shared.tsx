import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { BadgeTone } from "./broadband-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

export function SectionContainer({
  children,
  className,
  id,
  bgImage,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
}) {
  return (
    <section id={id} className={clsx("relative w-full overflow-hidden py-16 sm:py-20", className)}>
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <Image src={bgImage} alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
      )}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-20">{children}</div>
    </section>
  );
}

/** Eyebrow + bold title, with an optional description set further apart as in the Figma. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col", description ? "gap-5 sm:gap-8" : "gap-4", className)}>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold uppercase text-[#D65A2C]">{eyebrow}</span>
        <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl">{title}</h2>
      </div>
      {description && <p className="text-base leading-6 text-[#665F69]">{description}</p>}
    </div>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "h-full rounded-2xl border border-[#D8CEDD] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}

const BADGE_TONES: Record<BadgeTone, string> = {
  success: "border-[#26735B] text-[#26735B]",
  warning: "border-[#9A5B12] text-[#9A5B12]",
  info: "border-[#1E4FA0] text-[#1E4FA0]",
  purple: "border-[#5B1F86] text-[#5B1F86]",
};

export function Badge({ label, tone, className }: { label: string; tone: BadgeTone; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-full border bg-white px-3 py-1 text-xs font-semibold",
        BADGE_TONES[tone],
        className
      )}
    >
      {label}
    </span>
  );
}

export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={clsx("flex flex-col", className ?? "gap-3")}>
      {items.map((item) => (
        <li key={item} className="text-sm text-[#665F69]">
          • {item}
        </li>
      ))}
    </ul>
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
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#BF6735] px-5 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-all hover:bg-[#DD7235] hover:shadow-md active:scale-95",
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
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-5 text-sm font-semibold text-[#18141B] shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-95",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function ActionButtons({
  actions,
  className,
}: {
  actions: { label: string; href: string; variant: "primary" | "secondary" }[];
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {actions.map((action) =>
        action.variant === "primary" ? (
          <PrimaryButton key={action.label} href={action.href}>
            {action.label}
          </PrimaryButton>
        ) : (
          <SecondaryButton key={action.label} href={action.href}>
            {action.label}
          </SecondaryButton>
        )
      )}
    </div>
  );
}
