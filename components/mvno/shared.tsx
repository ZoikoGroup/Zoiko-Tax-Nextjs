import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { Action, BadgeTone, TitledCard } from "./mvno-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";
import { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

/**
 * Full-width section. Light sections take a faint pattern image as-is; dark
 * sections lay the photo over a deep-purple fill (set via `className`) at
 * `bgOpacity` so the white copy stays legible.
 */
export function SectionContainer({
  children,
  className,
  id,
  bgImage,
  bgOpacity,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
  bgOpacity?: string;
}) {
  return (
    <section id={id} className={clsx("relative w-full overflow-hidden py-16 sm:py-20", className)}>
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <Image src={bgImage} alt="" fill sizes="100vw" className={clsx("object-cover object-center", bgOpacity)} />
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
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <span className={clsx("text-sm font-bold uppercase", dark ? "text-[#F4A261]" : "text-[#D65A2C]")}>
        {eyebrow}
      </span>
      <h2
        className={clsx(
          "text-[28px] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("text-base leading-6 sm:text-lg", dark ? "text-[#D8CEDD]" : "text-[#665F69]")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className,
  dark = false,
  tinted = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  /** Lavender fill instead of white, for cards sitting on a white section. */
  tinted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "h-full rounded-2xl border transition-all duration-300 hover:-translate-y-1",
        dark
          ? "border-white/15 bg-[#2A0650]/85 hover:border-[#F4A261]/40 hover:shadow-[0_12px_24px_0_rgba(0,0,0,0.25)]"
          : [
              "border-[#D8CEDD] hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]",
              tinted ? "bg-[#F8F3FE]" : "bg-white",
            ],
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
  neutral: "border-[#8A8190] text-[#8A8190]",
};

/** Dark-surface tones are lifted so they keep contrast on deep purple. */
const BADGE_TONES_DARK: Record<BadgeTone, string> = {
  success: "border-[#3FB68B] text-[#3FB68B]",
  warning: "border-[#F4A261] text-[#F4A261]",
  info: "border-[#5B8DEF] text-[#5B8DEF]",
  neutral: "border-[#9C92A3] text-[#9C92A3]",
};

export function Badge({
  label,
  tone,
  dark = false,
  className,
}: {
  label: string;
  tone: BadgeTone;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold",
        dark ? BADGE_TONES_DARK[tone] : ["bg-white", BADGE_TONES[tone]],
        className
      )}
    >
      {label}
    </span>
  );
}

const BUTTON_VARIANTS: Record<Action["variant"], string> = {
  primary:
    "bg-[#D65A2C] text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1)] hover:bg-[#DD7235] hover:shadow-md",
  secondary:
    "border border-[#D8CEDD] bg-white text-[#18141B] hover:border-slate-400 hover:bg-slate-50",
  light: "border border-[#D8CEDD] bg-white text-[#11042D] hover:bg-[#F8F3FE]",
  ghost: "border border-[#D8CEDD] bg-transparent text-white hover:bg-white/10",
};

export function Button({ action, className }: { action: Action; className?: string }) {
  return (
    <Link
      href={action.href}
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-all active:scale-95",
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
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {actions.map((action) => (
        <Button key={action.label} action={action} />
      ))}
    </div>
  );
}

/** Right-aligned "Explore …" link that closes most feature sections. */
export function SectionAction({ action }: { action: Action }) {
  return (
    <div className="mt-8 flex sm:justify-end">
      <Button action={action} className="w-full sm:w-auto" />
    </div>
  );
}

/** Row of simple title/description cards. */
export function CardGrid({
  cards,
  gridClassName,
  cardClassName,
  dark = false,
  tinted = false,
}: {
  cards: TitledCard[];
  gridClassName: string;
  cardClassName?: string;
  dark?: boolean;
  tinted?: boolean;
}) {
  return (
    <StaggerGroup className={clsx("mt-8 grid grid-cols-1 gap-4 sm:gap-6", gridClassName)}>
      {cards.map((card) => (
        <StaggerItem key={card.title}>
          <Card dark={dark} tinted={tinted} className={clsx("flex flex-col gap-3 p-6", cardClassName)}>
            <h3 className={clsx("text-lg font-bold", dark ? "text-white" : "text-[#18141B]")}>{card.title}</h3>
            <p className={clsx("text-sm leading-5", dark ? "text-[#D8CEDD]" : "text-[#665F69]")}>
              {card.description}
            </p>
          </Card>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
