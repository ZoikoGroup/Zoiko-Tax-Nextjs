import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";
import type { Action, EyebrowCard, TitledCard } from "./mvne-mvna-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem };

/**
 * Full-width section. Pattern images sit on white/lavender surfaces; the dark
 * sections use photos with transparency baked in, laid over a deep-purple fill
 * passed via `className`.
 */
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
    <div className={clsx("flex flex-col gap-3", className)}>
      {eyebrow && <span className="text-xs font-bold uppercase text-[#D65A2C]">{eyebrow}</span>}
      <h2
        className={clsx(
          "text-[28px] font-bold leading-tight tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("mt-1 text-base leading-6", dark ? "text-[#D8CEDD]" : "text-[#665F69]")}>{description}</p>
      )}
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

/** Small orange eyebrow over a large light-weight title — the page's main card style. */
export function EyebrowCardHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase text-[#D65A2C]">{eyebrow}</span>
      <h3 className="text-2xl font-normal leading-tight text-[#18141B] sm:text-[28px]">{title}</h3>
    </div>
  );
}

export function EyebrowCardGrid({ cards, gridClassName }: { cards: EyebrowCard[]; gridClassName: string }) {
  return (
    <StaggerGroup className={clsx("mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6", gridClassName)}>
      {cards.map((card) => (
        <StaggerItem key={card.title}>
          <Card className="flex flex-col gap-5 p-6 sm:p-8">
            <EyebrowCardHead eyebrow={card.eyebrow} title={card.title} />
            <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

/** Translucent card for the dark photo sections. */
export function GlassCardGrid({
  cards,
  bordered = false,
  className,
}: {
  cards: TitledCard[];
  bordered?: boolean;
  className?: string;
}) {
  return (
    <StaggerGroup className={clsx("grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3", className)}>
      {cards.map((card) => (
        <StaggerItem key={card.title}>
          <div
            className={clsx(
              "flex h-full flex-col gap-3 rounded-xl bg-white/5 p-6 backdrop-blur-[2px] transition-colors duration-300 hover:bg-white/10",
              bordered && "border border-white/10"
            )}
          >
            <h3 className="text-xl font-normal text-white">{card.title}</h3>
            <p className="text-xs leading-5 text-[#D8CEDD]">{card.description}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function Notice({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("flex items-start gap-2 text-sm font-medium text-[#18141B]", className)}>
      <span aria-hidden="true">⚠</span>
      <span>{children}</span>
    </p>
  );
}

const BUTTON_VARIANTS: Record<Action["variant"], string> = {
  primary:
    "bg-[#BF6735] text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] hover:bg-[#DD7235] hover:shadow-md",
  secondary:
    "border border-[#D8CEDD] bg-white text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] hover:border-slate-400 hover:bg-slate-50",
  light: "border border-[#D8CEDD] bg-white text-[#11042D] hover:bg-[#F8F3FE]",
  ghost: "border border-[#D8CEDD] bg-transparent",
};

export function Button({ action, dark = false, className }: { action: Action; dark?: boolean; className?: string }) {
  return (
    <Link
      href={action.href}
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-all active:scale-95",
        BUTTON_VARIANTS[action.variant],
        action.variant === "ghost" && (dark ? "text-white hover:bg-white/10" : "text-[#18141B] hover:bg-white/60"),
        className
      )}
    >
      {action.label}
    </Link>
  );
}

export function ActionButtons({
  actions,
  dark = false,
  className,
}: {
  actions: Action[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4", className)}>
      {actions.map((action) => (
        <Button key={action.label} action={action} dark={dark} />
      ))}
    </div>
  );
}
