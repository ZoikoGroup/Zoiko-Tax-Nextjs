import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";
import type { Action, Card, SectionIntro, Tone } from "./tech-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem };

/** Full-width section. `className` sets the surface; `bgImage` adds a pattern (light) or photo (dark). */
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

export function SectionHeader({ data, dark = false }: { data: SectionIntro; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <span className={clsx("text-sm font-bold uppercase", dark ? "text-[#F4A261]" : "text-[#D65A2C]")}>
        {data.eyebrow}
      </span>
      <h2
        className={clsx(
          "text-[28px] font-bold leading-tight tracking-tight sm:text-4xl sm:leading-10",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {data.title}
      </h2>
      {data.description && (
        <p className={clsx("text-base leading-7 sm:text-lg", dark ? "text-[#D8CEDD]" : "text-[#5F5862]")}>
          {data.description}
        </p>
      )}
    </div>
  );
}

const BADGE_TONES: Record<Tone, string> = {
  success: "border-[#26735B] text-[#26735B]",
  warning: "border-[#9A5B12] text-[#9A5B12]",
  accent: "border-[#DD7235] text-[#F4A261]",
};

export function Badge({ text, tone }: { text: string; tone: Tone }) {
  return (
    <span
      className={clsx(
        "inline-flex self-start whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold uppercase",
        BADGE_TONES[tone]
      )}
    >
      {text}
    </span>
  );
}

/**
 * Card row used by most sections. Handles an optional mono label, orange
 * title, status badge or link row, on light or dark surfaces.
 */
export function CardGrid({
  cards,
  gridClassName,
  dark = false,
  accentTitle = false,
  transparent = false,
  compact = false,
}: {
  cards: Card[];
  gridClassName: string;
  dark?: boolean;
  /** Orange titles (Residency, Exceptional States). */
  accentTitle?: boolean;
  /** Outline-only card that shows the section surface through (lavender sections). */
  transparent?: boolean;
  /** Smaller body text and padding for dense grids. */
  compact?: boolean;
}) {
  return (
    <StaggerGroup className={clsx("mt-10 grid grid-cols-1 gap-4", gridClassName)}>
      {cards.map((card) => (
        <StaggerItem key={card.label ?? card.title}>
          <div
            className={clsx(
              "flex h-full flex-col gap-3 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
              compact ? "p-5 sm:p-6" : "p-6 sm:p-7",
              dark
                ? "border-white/10 bg-[#1D033B] hover:border-[#F4A261]/40"
                : [
                    "border-[#D8CEDD] hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]",
                    transparent ? "bg-transparent" : "bg-white",
                  ]
            )}
          >
            {card.label && (
              <span className={clsx("font-mono text-xs font-bold", dark ? "text-[#F4A261]" : "text-[#D65A2C]")}>
                {card.label}
              </span>
            )}
            {card.title && (
              <h3
                className={clsx(
                  "font-bold",
                  compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
                  accentTitle ? (dark ? "text-[#F4A261]" : "text-[#D65A2C]") : dark ? "text-white" : "text-[#18141B]"
                )}
              >
                {card.title}
              </h3>
            )}
            {card.link && (
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-[#F4A261] hover:underline"
              >
                {card.link}
                <ChevronRight className="size-3" strokeWidth={3} aria-hidden="true" />
              </Link>
            )}
            {card.description && (
              <p
                className={clsx(
                  "leading-5",
                  compact ? "text-xs sm:text-sm" : "text-sm",
                  dark ? "text-[#D8CEDD]" : "text-[#5F5862]"
                )}
              >
                {card.description}
              </p>
            )}
            {card.badge && <Badge {...card.badge} />}
            {card.footer && (
              <span className="mt-auto pl-2 pt-1 text-xs font-semibold uppercase text-[#18141B]">{card.footer}</span>
            )}
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

/** Orange-tick list, used by the Direct Answer, AI, Evidence and Observability sections. */
export function CheckList({
  items,
  dark = false,
  className,
}: {
  items: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <ul className={clsx("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className={clsx("flex items-start gap-2 text-sm leading-5", dark ? "text-white" : "text-[#18141B]")}>
          <Check className="mt-0.5 size-3.5 shrink-0 text-[#DD7235]" strokeWidth={2.5} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const BUTTON_VARIANTS: Record<Action["variant"], string> = {
  primary:
    "bg-[#BF6735] text-white outline outline-1 -outline-offset-1 outline-[#DD7235] hover:bg-[#DD7235] hover:shadow-md",
  secondary: "border border-[#D8CEDD] bg-white text-[#18141B] hover:bg-[#F8F3FE]",
};

export function ActionButtons({ actions, className }: { actions: Action[]; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className={clsx(
            "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-all active:scale-95",
            BUTTON_VARIANTS[action.variant]
          )}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
