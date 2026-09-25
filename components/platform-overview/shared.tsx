import React, { type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

export const bgImage = (src: string): CSSProperties => ({
  backgroundImage: `url("${src}")`,
});

export function SectionContainer({
  children,
  className,
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section id={id} style={style} className={clsx("relative w-full py-16 sm:py-20 lg:py-24", className)}>
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
  titleClassName,
  eyebrowClassName,
  descriptionClassName,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
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
        <span
          className={clsx(
            "text-xs sm:text-sm font-bold uppercase tracking-[0.14em]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-tight",
          dark ? "text-white" : "text-[#18141B]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg leading-relaxed",
            dark ? "text-white/80" : "text-[#535055]",
            descriptionClassName
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
  href = "#",
  className,
}: {
  children: ReactNode;
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
  children: ReactNode;
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
