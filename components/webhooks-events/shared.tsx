"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Bell,
  Boxes,
  FileCheck2,
  Layers,
  type LucideIcon,
  Send,
  ShieldCheck,
} from "lucide-react";

export {
  SectionContainer,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  Reveal,
} from "@/components/api-changelog/shared";

export const LAVENDER = "bg-[#FAF3FF]";

export const ICONS: Record<string, LucideIcon> = {
  contract: FileCheck2,
  send: Send,
  verify: ShieldCheck,
  consumer: Boxes,
  bell: Bell,
  readwrite: ArrowLeftRight,
  layers: Layers,
};

/** Underlined text link with a trailing ↗, used for documentation routes. */
export function ArrowLink({
  href,
  children,
  dark = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex min-h-11 items-center gap-2 text-base font-semibold",
        dark ? "text-[#F4A261]" : "text-[#D65A2C]",
        className
      )}
    >
      <span className="underline underline-offset-4">{children}</span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function NoticeBox({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={clsx("w-full rounded-2xl border border-[#F6CDB3] bg-[#FFF0E7] p-5 sm:p-6 flex flex-col gap-2", className)}>
      <p className="text-base font-bold text-[#18141B]">{title}</p>
      <p className="text-[15px] sm:text-base leading-6 text-[#665F69]">{description}</p>
    </div>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5", className)}>
      {children}
    </div>
  );
}

/**
 * Two-column "label → guidance" table. Columns sit side by side from md up;
 * on phones each row stacks and the column headers are dropped.
 */
export function GuideTable({
  headers,
  rows,
  className,
}: {
  headers: [string, string];
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div className={clsx("w-full rounded-2xl border border-[#D8CEDD] bg-white px-5 sm:px-6", className)}>
      <div className="hidden md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[288px_1fr] gap-6 lg:gap-8 border-b border-[#D8CEDD] py-4">
        {headers.map((h) => (
          <span key={h} className="text-xs font-bold uppercase text-[#D65A2C]">
            {h}
          </span>
        ))}
      </div>
      <dl>
        {rows.map((row, idx) => (
          <div
            key={row.label}
            className={clsx(
              "grid gap-1.5 md:grid-cols-[200px_1fr] lg:grid-cols-[288px_1fr] md:gap-6 lg:gap-8 py-5",
              idx < rows.length - 1 && "border-b border-[#D8CEDD]"
            )}
          >
            <dt className="text-base font-semibold leading-6 text-[#18141B]">{row.label}</dt>
            <dd className="text-[15px] sm:text-base leading-6 text-[#665F69]">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function patternBg(url: string): React.CSSProperties {
  return { backgroundImage: `url('${url}')`, backgroundSize: "cover", backgroundPosition: "center" };
}
