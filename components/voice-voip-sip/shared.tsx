import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";
import type { Action, ListCard, SectionIntro, TitledCard } from "./voice-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem };

/**
 * Full-width section. `className` sets the surface; `bgImage` adds a faint
 * pattern (light sections) or a photo layered at `bgOpacity` (dark sections).
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
    <section id={id} className={clsx("relative w-full overflow-hidden py-16 sm:py-24", className)}>
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <Image src={bgImage} alt="" fill sizes="100vw" className={clsx("object-cover object-center", bgOpacity)} />
        </div>
      )}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-20">{children}</div>
    </section>
  );
}

export function SectionHeader({ data, dark = false }: { data: Partial<SectionIntro> & { title: string }; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {data.eyebrow && (
        <span className={clsx("text-sm font-bold uppercase", dark ? "text-[#F4A261]" : "text-[#D65A2C]")}>
          {data.eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-[30px] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.03]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {data.title}
      </h2>
      {data.description && (
        <p className={clsx("text-base leading-7 sm:text-lg", dark ? "text-[#D8CEDD]" : "text-[#6E6772]")}>
          {data.description}
        </p>
      )}
    </div>
  );
}

type CardVariant = "outline" | "shadow" | "glass" | "solid";

const CARD_VARIANTS: Record<CardVariant, string> = {
  outline: "border border-[#D8CEDD] bg-white hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]",
  shadow: "bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.1)]",
  glass: "border border-white/10 bg-white/5 backdrop-blur-[2px] hover:bg-white/10",
  solid: "border border-[#FAF3FF] bg-white hover:shadow-[0_12px_24px_0_rgba(0,0,0,0.25)]",
};

/**
 * Title/description cards with an optional mono index label ("01",
 * "FACTOR 01", "MODEL 01"). Covers every plain card row on the page.
 */
export function CardGrid({
  cards,
  gridClassName,
  variant = "outline",
  indexLabel,
  compact = false,
}: {
  cards: TitledCard[];
  gridClassName: string;
  variant?: CardVariant;
  indexLabel?: (idx: number) => string;
  compact?: boolean;
}) {
  const dark = variant === "glass";
  return (
    <StaggerGroup className={clsx("mt-10 grid grid-cols-1 gap-4", gridClassName)}>
      {cards.map((card, idx) => (
        <StaggerItem key={card.title}>
          <div
            className={clsx(
              "flex h-full flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1",
              compact ? "gap-2.5 p-5" : "gap-3 p-6",
              CARD_VARIANTS[variant]
            )}
          >
            {indexLabel && (
              <span
                className={clsx(
                  "font-mono font-bold",
                  compact ? "text-xs" : "text-sm",
                  dark ? "text-[#F4A261]" : "text-[#D65A2C]"
                )}
              >
                {indexLabel(idx)}
              </span>
            )}
            <h3
              className={clsx(
                "font-bold",
                compact ? "text-base" : "text-lg sm:text-xl",
                dark ? "text-white" : "text-[#18141B]"
              )}
            >
              {card.title}
            </h3>
            <p
              className={clsx(
                "leading-5",
                compact ? "text-xs" : "text-sm",
                dark ? "text-[#D8CEDD]" : variant === "solid" ? "text-[#18141B]" : "text-[#5F5862]"
              )}
            >
              {card.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

/** Bulleted list card, used by the Classification and AI comparisons. */
export function ListPanel({ card, className, dark = false }: { card: ListCard; className: string; dark?: boolean }) {
  return (
    <div className={clsx("flex h-full flex-col gap-3 rounded-2xl p-6", className)}>
      <h3 className={clsx("text-lg font-bold", dark ? "text-white" : "text-[#18141B]")}>{card.title}</h3>
      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li key={item} className={clsx("text-sm", dark ? "text-white" : "text-[#5F5862]")}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const BUTTON_VARIANTS: Record<Action["variant"], string> = {
  primary:
    "bg-[#BF6735] font-bold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] hover:bg-[#DD7235] hover:shadow-md",
  secondary:
    "border border-[#D8CEDD] bg-white font-semibold text-[#18141B] shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] hover:bg-[#F8F3FE]",
  glass: "border border-white/30 bg-white/10 font-semibold text-white hover:bg-white/20",
};

export function ActionButtons({ actions, className }: { actions: Action[]; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className={clsx(
            "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-5 text-sm transition-all active:scale-95",
            BUTTON_VARIANTS[action.variant]
          )}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
