"use client";

import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export { default as Reveal } from "@/components/shared/Reveal";

/*
 * Bulk & Batch design tokens (from the Figma file)
 *  zinc-900   #18141B  ink
 *  stone-500  #665F69  muted body
 *  zinc-300   #D8CEDD  hairlines
 *  orange-600 #D65A2C  accent
 *  orange-300 #F4A261  accent on dark
 *  orange-400 #D97637  footer/eyebrow accent
 *  amber-700  #BF6735  primary button
 *  orange-500 #DD7235  primary button ring
 *  purple-50  #FAF3FF  page band
 *  orange-50  #FFF0E7  notice band
 *  red-300    #E3B69E  notice border
 *  violet-950 #301153  dark card
 *  purple-900 #493057  dark card ring
 *  purple-100 #F1E7F7  table head
 *  gray-500   #593576  dark notice border
 *  zinc-700   #71528C  specimen row rule
 *  slate-900  #120327  dark section base
 */

export const T = {
  ink: "#18141B",
  muted: "#665F69",
  line: "#D8CEDD",
  orange: "#D65A2C",
  apricot: "#F4A261",
  copper: "#BF6735",
  copperBright: "#DD7235",
  purple50: "#FAF3FF",
  orange50: "#FFF0E7",
  red300: "#E3B69E",
  violet950: "#301153",
  purple900: "#493057",
  purple100: "#F1E7F7",
  gray500: "#593576",
  slate900: "#120327",
  zinc700: "#71528C",
  footerAccent: "#D97637",
};

export function SectionContainer({
  children,
  className,
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} style={style} className={clsx("relative w-full overflow-hidden", className)}>
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20 lg:py-20">
        {children}
      </div>
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
    <div className={clsx("flex flex-col gap-3.5", className)}>
      {eyebrow && (
        <span
          className={clsx(
            "text-xs font-bold uppercase tracking-[0.08em] font-['Inter',sans-serif]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-[40px] lg:leading-10 font-bold font-['Inter',sans-serif]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-lg lg:leading-7 font-normal",
            dark ? "text-[#D8CEDD]" : "text-[#665F69]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function BoundaryNotice({
  title,
  description,
  dark = false,
  className,
}: {
  title: string;
  description: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 rounded-2xl p-6 outline outline-1 -outline-offset-1",
        dark ? "bg-[#301153] outline-[#593576]" : "bg-[#FFF0E7] outline-[#E3B69E]",
        className
      )}
    >
      <h3 className={clsx("text-base font-bold font-['Inter',sans-serif]", dark ? "text-white" : "text-[#18141B]")}>
        {title}
      </h3>
      <p className={clsx("text-sm leading-6", dark ? "text-[#D8CEDD]" : "text-[#665F69]")}>{description}</p>
    </div>
  );
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full bg-[#BF6735] px-5 py-3.5 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer";
  const content = (
    <>
      <span className="font-['Inter',sans-serif]">{children}</span>
      <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
    </>
  );
  if (href) {
    return (
      <a href={href} className={clsx(base, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={clsx(base, className)}>
      {content}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#18141B] outline outline-1 -outline-offset-1 outline-[#D8CEDD] hover:border-[#BF6735] hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98] cursor-pointer";
  const content = (
    <>
      <span className="font-['Inter',sans-serif]">{children}</span>
      <ArrowRight className="w-4 h-4 shrink-0 text-[#D65A2C]" strokeWidth={2} />
    </>
  );
  if (href) {
    return (
      <a href={href} className={clsx(base, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={clsx(base, className)}>
      {content}
    </button>
  );
}

export function DarkGhostButton({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full bg-[#301153] px-5 py-3.5 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#593576] hover:bg-[#3d1968] transition-all duration-200 active:scale-[0.98] cursor-pointer";
  const content = (
    <>
      <span className="font-['Inter',sans-serif]">{children}</span>
      <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
    </>
  );
  if (href) {
    return (
      <a href={href} className={clsx(base, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={clsx(base, className)}>
      {content}
    </button>
  );
}

/**
 * Full-bleed background artwork exported from the Figma file.
 * Rendered behind the section content with an object-cover fit.
 */
export function SectionArtwork({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      <Image src={src} alt={alt} fill priority={priority} className={clsx("object-cover", className)} />
    </div>
  );
}

/**
 * Exported Figma icon artwork (public/bulk-batch/*.png).
 */
export function IconArtwork({
  src,
  size,
  className,
}: {
  src: string;
  size: number;
  className?: string;
}) {
  return (
    <span
      className={clsx("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt="" width={size} height={size} className="h-full w-full object-contain" />
    </span>
  );
}

export interface TableColumn {
  label: string;
  /** Fixed column width on desktop (px), matches the Figma frame. */
  width?: number;
}

export interface TableRowCells {
  key: string;
  cells: string[];
}

export function DataTable({
  columns,
  rows,
  gap = 24,
  className,
}: {
  columns: TableColumn[];
  rows: TableRowCells[];
  /** Column gap in px (Figma uses 24, specimen table uses 32). */
  gap?: number;
  className?: string;
}) {
  return (
    <div className={clsx("w-full overflow-x-auto rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD]", className)}>
      <div className="min-w-[760px]">
        <div className="flex items-start bg-[#F1E7F7] px-6 py-4" style={{ gap }}>
          {columns.map((col) => (
            <div
              key={col.label}
              className="text-xs font-bold text-[#301153] font-['Inter',sans-serif]"
              style={col.width ? { width: col.width, flexShrink: 0 } : { flex: 1 }}
            >
              {col.label}
            </div>
          ))}
        </div>
        {rows.map((row, idx) => (
          <div
            key={row.key}
            className={clsx("flex items-start px-6 py-4", idx < rows.length - 1 && "border-b border-[#D8CEDD]")}
            style={{ gap }}
          >
            {row.cells.map((cell, cIdx) => {
              const col = columns[cIdx];
              return cIdx === 0 ? (
                <div
                  key={cIdx}
                  className="text-base font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]"
                  style={col?.width ? { width: col.width, flexShrink: 0 } : undefined}
                >
                  {cell}
                </div>
              ) : (
                <div key={cIdx} className="text-base leading-6 text-[#665F69] font-['Inter',sans-serif]" style={{ flex: 1 }}>
                  {cell}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
