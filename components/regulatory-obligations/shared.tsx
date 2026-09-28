import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export { default as Reveal } from "@/components/shared/Reveal";

/**
 * Figma grid for the Regulatory Obligations page: desktop frame 1440px with 80px side padding
 * (1280px content), mobile frame 390px with 20px side padding (content x=20, width=350).
 * Typography on this page is Inter throughout (the app's default `font-sans`), with Roboto Mono
 * (`font-mono`) for numbered labels and specimen metadata.
 */
export const CONTAINER = "relative mx-auto w-full max-w-[1440px] px-5 lg:px-[80px]";

/**
 * Full-bleed light diamond line-art texture (Figma asset 6f3d71f3…). Desktop frames place the image
 * at 100% over the white page; mobile frames layer it at 12% opacity over rgba(250,243,255,0.9).
 */
export function PatternBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0", className)}>
      <div className="absolute inset-0 bg-[rgba(250,243,255,0.9)] lg:hidden" />
      {/* Served unoptimized: the lines are only a few grey levels deep and lossy re-encoding smears them. */}
      <Image
        alt=""
        src="/regulatory-obligations/bg-pattern-diamond.webp"
        fill
        unoptimized
        sizes="100vw"
        className="object-cover opacity-[0.12] lg:opacity-100"
      />
    </div>
  );
}

export function Section({
  children,
  className,
  innerClassName,
  id,
  background,
}: {
  children: React.ReactNode;
  /** Must include the section's vertical padding and background color. */
  className?: string;
  innerClassName?: string;
  id?: string;
  background?: React.ReactNode;
}) {
  return (
    <section id={id} className={clsx("relative w-full overflow-hidden", className)}>
      {background}
      <div className={clsx(CONTAINER, innerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-[12px] font-bold uppercase leading-[normal] text-[#d65a2c] lg:text-[14px]", className)}>
      {children}
    </p>
  );
}

/** Standard heading block: Inter Bold eyebrow (12/14) + Inter Bold title (28/36) + optional Inter Regular body. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  mobileTitle,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  descriptionLg = "lg:text-[16px] lg:leading-[normal]",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  mobileTitle?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  /** Extra classes only — must not re-declare base text color/size (no tailwind-merge in this repo). */
  titleClassName?: string;
  descriptionClassName?: string;
  /** Desktop size/leading for the description (replaces the default rather than competing with it). */
  descriptionLg?: string;
  /** White title / #d9d0df description for dark sections. */
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col gap-3 lg:gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <Eyebrow className={eyebrowClassName}>{eyebrow}</Eyebrow>}
      <h2
        className={clsx(
          "text-[28px] font-bold leading-[normal] lg:text-[36px]",
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
            "text-[15px] font-normal leading-[1.4]",
            dark ? "text-[#d9d0df]" : "text-[#535055]",
            descriptionLg,
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Figma Button-Primary: 48px pill, #bf6735 fill, #dd7235 border, inset glow, Inter SemiBold 14. */
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
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[999px] border border-[#dd7235] bg-[#bf6735] px-6 text-[14px] font-semibold leading-[normal] text-white shadow-[inset_0px_-2px_4px_0px_#fdcfbe,inset_0px_3px_4px_0px_#ffdfd3] transition-colors hover:bg-[#dd7235]",
        className
      )}
    >
      {children}
    </Link>
  );
}

/**
 * Figma Button-Secondary: 48px pill, #d8cedd border. Desktop: white, Inter Medium 14, soft 4% drop
 * shadow. Mobile: #fffafa, Inter SemiBold 14, no shadow.
 */
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
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[999px] border border-[#d8cedd] bg-[#fffafa] px-6 text-[14px] font-semibold leading-[normal] text-[#18141b] transition-colors hover:border-[#b4b2b5] lg:bg-white lg:font-medium lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {children}
    </Link>
  );
}

/** Decorative downloaded Figma icon rendered as a plain <img>. */
export function Icon({ src, className }: { src: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden className={clsx("shrink-0", className)} />;
}

export type PillTone = "red" | "orange" | "purple" | "blue" | "green" | "amber" | "grey";

const PILL_TONES: Record<PillTone, { text: string; border: string; bg: string }> = {
  red: { text: "text-[#b23b3b]", border: "border-[#b23b3b]", bg: "bg-[#fdf2f2]" },
  orange: { text: "text-[#d65a2c]", border: "border-[#d65a2c]", bg: "bg-[#fdf6f2]" },
  purple: { text: "text-[#5b2a86]", border: "border-[#5b2a86]", bg: "bg-[#f6eefd]" },
  blue: { text: "text-[#315b9a]", border: "border-[#315b9a]", bg: "bg-[#f2f6fd]" },
  green: { text: "text-[#26735b]", border: "border-[#26735b]", bg: "bg-[#f2fdf6]" },
  amber: { text: "text-[#9a5b12]", border: "border-[#9a5b12]", bg: "bg-[#fcf8f2]" },
  grey: { text: "text-[#665f69]", border: "border-[#665f69]", bg: "bg-[#fafbfd]" },
};

/** Figma status / coverage chip: 1px tone border, Inter SemiBold 11, 10×4 padding. */
export function Pill({
  tone,
  children,
  className,
  filled = true,
}: {
  tone: PillTone;
  children: React.ReactNode;
  className?: string;
  /** When false the tinted background is dropped (desktop registry coverage chips). */
  filled?: boolean;
}) {
  const t = PILL_TONES[tone];
  return (
    <span
      className={clsx(
        "inline-flex items-start whitespace-nowrap border px-[10px] py-1 text-[11px] font-semibold leading-[normal]",
        t.text,
        t.border,
        filled && t.bg,
        className
      )}
    >
      {children}
    </span>
  );
}
