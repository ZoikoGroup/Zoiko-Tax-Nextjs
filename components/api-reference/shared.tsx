"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  Copy,
  Eye,
  FileCheck,
  FlaskConical,
  GitCompareArrows,
  Globe,
  History,
  Info,
  Layers,
  Lock,
  type LucideIcon,
  Package,
  Route,
  ScanEye,
  ShieldCheck,
  Webhook,
} from "lucide-react";

export {
  SectionContainer,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  Reveal,
} from "@/components/api-changelog/shared";

export const ICONS: Record<string, LucideIcon> = {
  eye: Eye,
  preview: ScanEye,
  shield: ShieldCheck,
  fileCheck: FileCheck,
  copy: Copy,
  book: BookOpen,
  flask: FlaskConical,
  lock: Lock,
  package: Package,
  webhook: Webhook,
  layers: Layers,
  route: Route,
  history: History,
  compass: Compass,
  globe: Globe,
  compare: GitCompareArrows,
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

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-lg bg-[#F1E8F8] px-3 py-1.5 text-xs font-semibold text-[#301153]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function InfoNotice({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={clsx("w-full rounded-lg bg-[#FFF0E7] p-5 flex items-start gap-4", className)}>
      <Info className="h-5 w-5 shrink-0 text-[#D65A2C] mt-0.5" strokeWidth={1.6} aria-hidden="true" />
      <div className="flex-1 flex flex-col gap-1.5">
        <p className="text-base text-[#18141B]">{title}</p>
        <p className="text-sm leading-6 text-[#665F69]">{description}</p>
      </div>
    </div>
  );
}
