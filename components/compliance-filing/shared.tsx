import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export { default as Reveal } from "@/components/shared/Reveal";

/**
 * Figma grid: desktop frame 1440px with 80px side padding (1280px content),
 * mobile frame 390px with 16px side padding.
 */
export const CONTAINER = "relative mx-auto w-full max-w-[1440px] px-4 lg:px-[80px]";

/** Subtle light-gray diamond line-art texture used full-bleed on white sections (Figma asset 6f3d71f3...). */
export function PatternBackground({ className }: { className?: string }) {
  return (
    // Served unoptimized: the lines are only ~8 grey levels deep and lossy re-encoding smears them.
    <Image
      alt=""
      aria-hidden
      src="/compliance-filing/bg-pattern-diamond.webp"
      fill
      unoptimized
      sizes="100vw"
      className={clsx("pointer-events-none object-cover", className)}
    />
  );
}

export function SectionContainer({
  children,
  className,
  innerClassName,
  id,
  background,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  /** Rendered full-bleed behind the content (absolute layers). */
  background?: React.ReactNode;
}) {
  return (
    <section id={id} className={clsx("relative w-full overflow-hidden py-12 lg:py-[88px]", className)}>
      {background}
      <div className={clsx(CONTAINER, innerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("font-manrope text-[12px] font-bold uppercase leading-[normal] text-[#bf6735] lg:text-[14px]", className)}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  mobileTitle,
  align = "left",
  className,
  dark = false,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow?: string;
  title: string;
  /** Optional shorter heading copy used by the mobile Figma frame. */
  mobileTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col gap-3 lg:gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={clsx(dark && "text-[#d97637]", eyebrowClassName)}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={clsx(
          "font-sora text-[24px] font-extrabold leading-[normal] lg:text-[36px]",
          dark ? "text-white" : "text-[#18141b]",
          titleClassName
        )}
      >
        {mobileTitle ? (
          <>
            <span className="lg:hidden">{mobileTitle}</span>
            <span className="hidden lg:inline">{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={clsx(
            "font-manrope text-[14px] font-normal leading-[1.5] lg:text-[16px] lg:leading-[1.6]",
            dark ? "text-[#d8cedd]" : "text-[#665f69]",
            descriptionClassName
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
  status: string;
  className?: string;
}) {
  let style = "bg-[#faf8fa] text-[#665f69] border-[#d8cedd]";

  switch (status) {
    case "Accepted":
    case "Acknowledged":
    case "Traceable":
    case "EVIDENCE SEALED":
    case "Ready to Submit":
      style = "bg-[#eefdf6] text-[#26735b] border-[#26735b]/20";
      break;
    case "Submitting":
    case "Submitted":
    case "Awaiting review":
      style = "bg-[#fdf6ee] text-[#9a5b12] border-[#9a5b12]/20";
      break;
    case "Needs amendment":
    case "Rejected":
      style = "bg-[#fef2f2] text-[#bf3535] border-[#bf3535]/20";
      break;
    default:
      style = "bg-[#faf8fa] text-[#665f69] border-[#d8cedd]";
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-manrope text-xs font-semibold tracking-wide",
        style,
        className
      )}
    >
      {status}
    </span>
  );
}

/** Figma ButtonPrimary: 48px pill, #bf6735 fill, #dd7235 border, inset glow, Manrope Bold 14. */
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
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[999px] border border-[#dd7235] bg-[#bf6735] px-[22px] font-manrope text-[14px] font-bold text-white shadow-[inset_0px_-2px_4px_0px_#fdcfbe,inset_0px_3px_4px_0px_#ffdfd3] transition-colors hover:bg-[#dd7235]",
        className
      )}
    >
      {children}
    </Link>
  );
}

/** Figma ButtonSecondary: 48px white pill, #d8cedd border, soft drop shadow, Manrope SemiBold 14. */
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
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[999px] border border-[#d8cedd] bg-white px-[22px] font-manrope text-[14px] font-semibold text-[#18141b] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)] transition-colors hover:border-[#b4b2b5]",
        className
      )}
    >
      {children}
    </Link>
  );
}
