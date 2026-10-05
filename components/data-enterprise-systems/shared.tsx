"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  Archive,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Braces,
  FileLock2,
  FileText,
  Files,
  Filter,
  Fingerprint,
  Info,
  Link2,
  Lock,
  type LucideIcon,
  MapPin,
  Package,
  Radio,
  RefreshCw,
  Repeat,
  ShieldCheck,
  SlidersHorizontal,
  User,
  Users,
  Workflow,
} from "lucide-react";

export {
  SectionContainer,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  Reveal,
} from "@/components/api-changelog/shared";

export const ICONS: Record<string, LucideIcon> = {
  sliders: SlidersHorizontal,
  users: Users,
  user: User,
  package: Package,
  workflow: Workflow,
  file: FileText,
  pin: MapPin,
  book: BookOpen,
  fingerprint: Fingerprint,
  badge: BadgeCheck,
  refresh: RefreshCw,
  link: Link2,
  braces: Braces,
  files: Files,
  radio: Radio,
  repeat: Repeat,
  filter: Filter,
  lock: Lock,
  shield: ShieldCheck,
  archive: Archive,
  fileLock: FileLock2,
};

export const patternBg = (url: string): React.CSSProperties => ({
  backgroundImage: `url('${url}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

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
        "group inline-flex items-center gap-1.5 text-base font-semibold hover:underline underline-offset-4",
        dark ? "text-[#F4A261]" : "text-[#B4561E]",
        className
      )}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function IconTile({ icon, dark = false }: { icon: string; dark?: boolean }) {
  const Icon = ICONS[icon];
  return (
    <span
      className={clsx(
        "inline-flex shrink-0 rounded-xl p-2.5",
        dark ? "bg-[#160427]" : "bg-[#EFE6F7]"
      )}
    >
      <Icon className={clsx("h-6 w-6", dark ? "text-[#F4A261]" : "text-[#301153]")} strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}

export function Notice({
  title,
  description,
  dark = false,
  className,
}: {
  title?: string;
  description: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full rounded-2xl p-5 sm:p-6 flex items-start gap-4",
        dark ? "bg-[#301153]" : "bg-[#FFF0E7]",
        className
      )}
    >
      <Info
        className={clsx("h-5 w-5 shrink-0 mt-0.5", dark ? "text-[#F4A261]" : "text-[#B4561E]")}
        strokeWidth={1.7}
        aria-hidden="true"
      />
      <div className="flex-1 flex flex-col gap-1.5">
        {title && <p className={clsx("text-base font-semibold", dark ? "text-white" : "text-[#18141B]")}>{title}</p>}
        <p className={clsx("text-sm leading-5", dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>{description}</p>
      </div>
    </div>
  );
}

/** Boxes joined by arrows: a row on desktop, a vertical stack on small screens. */
export function FlowRow({
  steps,
  variant = "light",
  className,
}: {
  steps: { title: string; description: string }[];
  variant?: "light" | "dark";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <ol className={clsx("w-full flex flex-col lg:flex-row lg:items-stretch gap-2.5", className)}>
      {steps.map((step, idx) => (
        <React.Fragment key={step.title}>
          <li
            className={clsx(
              "flex-1 min-w-0 lg:min-h-36 rounded-2xl border p-5 flex flex-col gap-3",
              dark ? "bg-[#301153] border-[#5C3979]" : "bg-white border-[#D8CEDD]"
            )}
          >
            <p className={clsx("text-lg font-semibold leading-6", dark ? "text-white" : "text-[#18141B]")}>{step.title}</p>
            <p className={clsx("text-sm leading-5", dark ? "text-[#D9D0DF]" : "text-[#665F69]")}>{step.description}</p>
          </li>
          {idx < steps.length - 1 && (
            <li aria-hidden="true" className="flex items-center justify-center shrink-0">
              <ArrowRight className={clsx("hidden lg:block h-5 w-5", dark ? "text-[#F4A261]" : "text-[#B4561E]")} />
              <ArrowDown className={clsx("lg:hidden h-5 w-5", dark ? "text-[#F4A261]" : "text-[#B4561E]")} />
            </li>
          )}
        </React.Fragment>
      ))}
    </ol>
  );
}

/** Table with a dark header on md+, stacked label/value cards below md. */
export function DataTable({
  headers,
  rows,
  columns = "md:grid-cols-[1fr_1.4fr_2fr]",
}: {
  headers: string[];
  rows: string[][];
  columns?: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white">
      <table className="hidden md:table w-full text-left">
        <thead className="bg-[#301153]">
          <tr className={clsx("grid gap-6 px-6 py-4", columns)}>
            {headers.map((h) => (
              <th key={h} scope="col" className="text-xs font-bold uppercase leading-5 text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row[0]}
              className={clsx("grid gap-6 px-6 py-5", columns, i < rows.length - 1 && "border-b border-[#D8CEDD]")}
            >
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="text-base font-semibold leading-6 text-[#18141B]">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="text-base leading-6 text-[#665F69]">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="md:hidden flex flex-col">
        {rows.map((row, i) => (
          <div key={row[0]} className={clsx("p-5 flex flex-col gap-3", i < rows.length - 1 && "border-b border-[#D8CEDD]")}>
            <p className="text-base font-semibold text-[#18141B]">{row[0]}</p>
            {row.slice(1).map((cell, c) => (
              <div key={c} className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase text-[#B4561E]">{headers[c + 1]}</span>
                <p className="text-sm leading-5 text-[#665F69]">{cell}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
