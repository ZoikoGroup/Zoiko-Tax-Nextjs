import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";
import type { Action, TitledCard } from "./ucaas-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem };

/** Full-width section; `className` sets the surface, `bgImage` adds a faint pattern or photo. */
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
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-extrabold uppercase text-[#D65A2C]">{eyebrow}</span>
      <h2
        className={clsx(
          "text-[28px] font-bold leading-tight tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("mt-1 text-base leading-6", dark ? "text-[#D8CEDD]" : "text-[#5F5862]")}>{description}</p>
      )}
    </div>
  );
}

/** Title/description cards on either a light (warm off-white) or dark (deep purple) surface. */
export function CardGrid({
  cards,
  gridClassName,
  dark = false,
  className,
}: {
  cards: TitledCard[];
  gridClassName: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <StaggerGroup className={clsx("mt-8 grid grid-cols-1 gap-4", gridClassName, className)}>
      {cards.map((card) => (
        <StaggerItem key={card.title}>
          <div
            className={clsx(
              "flex h-full flex-col gap-3 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1",
              dark
                ? "border-white/10 bg-[#2E1453] hover:border-[#D65A2C]/40 hover:shadow-[0_12px_24px_0_rgba(0,0,0,0.25)]"
                : "border-[#D8CEDD] bg-[#FDF9F8] hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]"
            )}
          >
            <h3 className={clsx("text-lg font-bold sm:text-xl", dark ? "text-white" : "text-[#18141B]")}>
              {card.title}
            </h3>
            <p className={clsx("text-sm leading-5", dark ? "text-[#D8CEDD]" : "text-[#5F5862]")}>
              {card.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

const BUTTON_VARIANTS: Record<Action["variant"], string> = {
  primary:
    "bg-[#D65A2C] font-bold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] hover:bg-[#DD7235] hover:shadow-md",
  secondary:
    "border border-[#D8CEDD] bg-[#FDF9F8] font-semibold text-[#18141B] shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] hover:bg-white",
};

export function ActionButtons({ actions, className }: { actions: Action[]; className?: string }) {
  return (
    <div className={clsx("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4", className)}>
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
