import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { BadgeTone, TableColumn, TableRow } from "./iot-m2m-satellite-data";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

export function SectionContainer({
  children,
  className,
  id,
  bgImage,
  bgImageClassName,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
  bgImageClassName?: string;
}) {
  return (
    <section id={id} className={clsx("relative w-full overflow-hidden py-16 sm:py-20", className)}>
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            className={clsx("object-cover object-center", bgImageClassName)}
          />
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
      <span className="text-sm font-bold uppercase text-[#D65A2C]">{eyebrow}</span>
      <h2
        className={clsx(
          "text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] tracking-tight",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={clsx("text-base sm:text-lg leading-7", dark ? "text-[#E5E1EA]" : "text-[#665F69]")}>
          {description}
        </p>
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

const BADGE_TONES: Record<BadgeTone, string> = {
  neutral: "bg-[#F7F3ED] text-[#18141B] border-[#D8CEDD]",
  warning: "bg-[#FFF6EC] text-[#9A5B12] border-[#9A5B12]",
  success: "bg-[#E6F7EE] text-[#26735B] border-[#26735B]",
};

export function Badge({ label, tone }: { label: string; tone: BadgeTone }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold",
        BADGE_TONES[tone]
      )}
    >
      {label}
    </span>
  );
}

/**
 * Four-column registry table used by several sections. From `lg` up it is a
 * grid table (`gridClassName` sets the column template); below that each row
 * collapses into a stacked card with inline column labels.
 */
export function DataTable({
  columns,
  rows,
  gridClassName,
  thirdColumnClassName = "text-sm font-medium text-[#3B1260]",
  className,
}: {
  columns: TableColumn[];
  rows: TableRow[];
  gridClassName: string;
  thirdColumnClassName?: string;
  className?: string;
}) {
  const status = (row: TableRow) =>
    row.badge ? (
      <Badge label={row.badge.label} tone={row.badge.tone} />
    ) : (
      <span className="text-sm font-semibold text-[#D65A2C]">{row.accent}</span>
    );

  const mobileLabel = "text-[11px] font-bold uppercase tracking-wide text-[#8A838D] lg:hidden";

  return (
    <div className={clsx("overflow-hidden rounded-2xl border border-[#D8CEDD]", className)}>
      <div
        className={clsx(
          "hidden gap-x-4 border-b border-[#D8CEDD] bg-[#F7F3ED] p-4 lg:grid",
          gridClassName
        )}
      >
        {columns.map((col) => (
          <div key={col.label} className="text-sm font-bold text-[#18141B]">
            {col.label}
          </div>
        ))}
      </div>
      {rows.map((row, rowIdx) => (
        <div
          key={row.cells[0]}
          className={clsx(
            "flex flex-col gap-3 p-5 transition-colors hover:bg-[#FAF3FF]/60 lg:grid lg:items-center lg:gap-x-4 lg:gap-y-0 lg:p-4",
            gridClassName,
            rowIdx < rows.length - 1 && "border-b border-[#D8CEDD]"
          )}
        >
          <div className="flex items-start justify-between gap-3 lg:contents">
            <div className="text-base font-semibold text-[#18141B]">{row.cells[0]}</div>
            <div className="shrink-0 lg:hidden">{status(row)}</div>
          </div>
          <div className="flex flex-col gap-1">
            <span className={mobileLabel}>{columns[1].label}</span>
            <span className="text-sm text-[#665F69]">{row.cells[1]}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={mobileLabel}>{columns[2].label}</span>
            <span className={thirdColumnClassName}>{row.cells[2]}</span>
          </div>
          <div className="hidden lg:block">{status(row)}</div>
        </div>
      ))}
    </div>
  );
}

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
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-95",
        className
      )}
    >
      {children}
    </Link>
  );
}
