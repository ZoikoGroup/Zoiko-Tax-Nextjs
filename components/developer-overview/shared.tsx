"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Database,
  FileCheck,
  FileCode2,
  Fingerprint,
  FlaskConical,
  GitBranch,
  GitCompareArrows,
  Globe,
  KeyRound,
  Landmark,
  Layers,
  Library,
  Lock,
  type LucideIcon,
  Map as MapIcon,
  Network,
  ReceiptText,
  Route,
  ScanLine,
  ShieldCheck,
  Waypoints,
  Webhook,
} from "lucide-react";
import type { ResourceCard } from "./developer-overview-data";

export {
  SectionContainer,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  Reveal,
} from "@/components/api-changelog/shared";

export const ICONS: Record<string, LucideIcon> = {
  fileCode: FileCode2,
  library: Library,
  webhook: Webhook,
  layers: Layers,
  route: Route,
  flask: FlaskConical,
  compare: GitCompareArrows,
  receipt: ReceiptText,
  landmark: Landmark,
  branch: GitBranch,
  network: Network,
  database: Database,
  blocks: Blocks,
  scan: ScanLine,
  globe: Globe,
  lock: Lock,
  map: MapIcon,
  shield: ShieldCheck,
  fingerprint: Fingerprint,
  key: KeyRound,
  waypoints: Waypoints,
  fileCheck: FileCheck,
};

export function IconTile({ icon, className }: { icon: string; className?: string }) {
  const Icon = ICONS[icon];
  return (
    <span className={clsx("size-12 shrink-0 rounded-xl bg-[#FFF0E7] inline-flex items-center justify-center", className)}>
      <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.7} aria-hidden="true" />
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex min-h-8 items-center gap-2 text-sm font-bold hover:underline underline-offset-4",
        dark ? "text-[#F4A261]" : "text-[#D65A2C]"
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

export function ResourceCardView({ card }: { card: ResourceCard }) {
  return (
    <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-[0px_4px_18px_0px_rgba(48,17,83,0.04)] flex flex-col gap-4">
      <IconTile icon={card.icon} />
      <h3 className="text-xl sm:text-2xl font-bold leading-7 text-[#18141B]">{card.title}</h3>
      <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
      <div className="mt-auto pt-2 flex flex-col gap-[5px]">
        <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
        <span className="text-xs leading-4 text-[#665F69] break-words">{card.path}</span>
      </div>
    </div>
  );
}
