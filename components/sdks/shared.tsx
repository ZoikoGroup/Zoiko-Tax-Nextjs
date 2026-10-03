"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  Box,
  FileCode2,
  FileWarning,
  GitBranch,
  GitPullRequestArrow,
  Globe,
  History,
  KeyRound,
  Layers,
  type LucideIcon,
  Package,
  PackageCheck,
  RefreshCw,
  Route,
  Webhook,
} from "lucide-react";
import { ILLUSTRATIVE_LABEL } from "./sdks-data";

export {
  SectionContainer,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  Reveal,
} from "@/components/api-changelog/shared";

export const ICONS: Record<string, LucideIcon> = {
  package: Package,
  branch: GitBranch,
  history: History,
  error: FileWarning,
  retry: RefreshCw,
  write: GitPullRequestArrow,
  provenance: PackageCheck,
  key: KeyRound,
  globe: Globe,
  file: FileCode2,
  route: Route,
  webhook: Webhook,
  layers: Layers,
  box: Box,
};

export function TextLink({
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
        "text-sm font-semibold leading-5 hover:underline underline-offset-4",
        dark ? "text-[#F4A261]" : "text-[#D65A2C]",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function IllustrativeBanner({ className }: { className?: string }) {
  return (
    <div className={clsx("w-full rounded-lg bg-[#FFF0E7] px-4 py-3", className)}>
      <p className="text-xs font-bold leading-5 text-[#9A421E]">{ILLUSTRATIVE_LABEL}</p>
    </div>
  );
}

export function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="w-full border-b border-[#D8CEDD] py-3.5 flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-[#665F69]">{label}</span>
      <span className="text-base leading-6 text-[#18141B] break-words">{value}</span>
    </div>
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
    <div className={clsx("w-full rounded-xl border border-[#F6CDB3] bg-[#FFF0E7] p-5 flex flex-col gap-2", className)}>
      <p className="text-base font-semibold text-[#18141B]">{title}</p>
      <p className="text-sm leading-5 text-[#665F69]">{description}</p>
    </div>
  );
}
