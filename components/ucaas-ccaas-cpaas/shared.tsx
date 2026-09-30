import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Shield } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";
import type { Action } from "./ucaas-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem };

/**
 * Full-width section with the page's standard padding rhythm. `className`
 * sets the surface (white, purple-50 or a dark fill).
 */
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
    <section id={id} className={clsx("relative w-full overflow-hidden", className)}>
      <div className="relative mx-auto w-full max-w-[1440px] px-4 py-[45px] sm:px-8 lg:px-20">
        {children}
      </div>
    </section>
  );
}

/** Eyebrow + title + optional description — the page's section header. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      {eyebrow && (
        <span className={clsx("text-sm font-bold uppercase", dark ? "text-orange-300" : "text-[#D65A2C]")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-lg leading-7 sm:text-xl sm:leading-8",
            dark ? "text-zinc-300" : "text-[#78716C]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Red-tinted guardrail banner with the warning glyph used across the page. */
export function Guardrail({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 rounded-[10px] px-4 py-3.5 outline outline-1 -outline-offset-1",
        dark ? "bg-white/5 outline-white/10" : "bg-[#F7E9DF] outline-[#E9CABB]"
      )}
    >
      <Shield className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.8} aria-hidden="true" />
      <p className={clsx("text-xs font-semibold leading-5", dark ? "text-white" : "text-[#18141B]")}>{children}</p>
    </div>
  );
}

/** Rounded mono pill. `highlight` marks the accent state (red/orange text). */
export function MonoPill({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <div
      className={clsx(
        "flex items-center rounded-full px-3.5 py-2 outline outline-1 -outline-offset-1 outline-zinc-300",
        highlight ? "bg-[#FEF2F2]" : "bg-white"
      )}
    >
      <span
        className={clsx(
          "font-mono text-xs font-semibold uppercase",
          highlight ? "text-[#D65A2C]" : "text-[#18141B]"
        )}
      >
        {label}
      </span>
    </div>
  );
}

/** Small orange "Label →" text link used between sections and card footers. */
export function ArrowLink({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="text-sm font-bold text-[#D65A2C] transition-colors hover:text-[#DD7235]">
      {label}
    </Link>
  );
}

const BUTTON_VARIANTS: Record<Action["variant"], string> = {
  primary:
    "bg-[#BF6735] text-white outline outline-1 -outline-offset-1 outline-[#BF6735] shadow-[inset_0_3px_4px_0_rgba(255,223,211,0.5),inset_0_-2px_4px_0_rgba(253,207,190,0.5)] hover:bg-[#a95729] hover:shadow-md",
  secondary:
    "border border-zinc-300 bg-white font-semibold text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] hover:bg-zinc-50",
  light: "border border-zinc-300 bg-white text-[#18141B] hover:bg-zinc-50",
  ghost: "border border-zinc-300 bg-transparent text-[#18141B]",
};

export function Button({ action, className }: { action: Action; className?: string }) {
  return (
    <Link
      href={action.href}
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-all active:scale-95",
        BUTTON_VARIANTS[action.variant],
        className
      )}
    >
      {action.label}
    </Link>
  );
}

export function ActionButtons({ actions, className }: { actions: Action[]; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3", className)}>
      {actions.map((action) => (
        <Button key={action.label} action={action} />
      ))}
    </div>
  );
}

/** Numbered white card shell (01–05 rows) with hover lift, per the Figma. */
export function NumberCard({
  num,
  title,
  children,
  className,
  titleClassName,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col gap-3.5 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]",
        className
      )}
    >
      <span className="font-mono text-xs font-semibold text-[#D65A2C]">{num}</span>
      <h3 className={clsx("text-2xl font-bold leading-7 text-[#18141B]", titleClassName)}>{title}</h3>
      <div className="text-base leading-6 text-[#78716C]">{children}</div>
    </div>
  );
}

/** Wrap a grid's children in the shared scroll-stagger animation. */
export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <StaggerGroup className={clsx("grid grid-cols-1 gap-4", className)}>
      {children}
    </StaggerGroup>
  );
}
