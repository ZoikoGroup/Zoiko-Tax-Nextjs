"use client";

import React from "react";
import clsx from "clsx";
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck2,
  Crosshair,
  CircleOff,
  Search,
  Lock,
  ChevronDown,
  ChevronRight,
  RotateCcw,
  LoaderCircle,
  SearchX,
  CircleHelp,
  ClockAlert,
  GitCompareArrows,
  Workflow,
  FlaskConical,
  ListChecks,
  TestTube2,
  BadgeCheck,
  UsersRound,
  PauseOctagon,
  Ban,
  TriangleAlert,
  Fingerprint,
  ScanText,
  BadgeHelp,
  BookOpenCheck,
  Clock3,
  Split,
  Braces,
  MessagesSquare,
  Inbox,
  Tags,
  GitBranch,
  Calculator,
  ClipboardCheck,
  Scale,
  History,
  Radar,
  FileDigit,
  Sparkles,
  Combine,
  Landmark,
  RadioTower,
  FileSearch,
  Minus,
  Plus,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  CircleSlash2,
  LockKeyhole,
} from "lucide-react";

export { default as Reveal } from "@/components/shared/Reveal";

export function renderLucideIcon(iconName: string, className?: string) {
  const props = { className: className || "w-4 h-4 shrink-0" };
  switch (iconName.toLowerCase()) {
    case "shield-alert":
      return <ShieldAlert {...props} />;
    case "shield-check":
      return <ShieldCheck {...props} />;
    case "file-check-2":
      return <FileCheck2 {...props} />;
    case "crosshair":
      return <Crosshair {...props} />;
    case "circle-off":
      return <CircleOff {...props} />;
    case "search":
      return <Search {...props} />;
    case "lock":
      return <Lock {...props} />;
    case "lock-keyhole":
      return <LockKeyhole {...props} />;
    case "chevron-down":
      return <ChevronDown {...props} />;
    case "chevron-right":
      return <ChevronRight {...props} />;
    case "rotate-ccw":
      return <RotateCcw {...props} />;
    case "loader-circle":
      return <LoaderCircle {...props} />;
    case "search-x":
      return <SearchX {...props} />;
    case "circle-help":
      return <CircleHelp {...props} />;
    case "clock-alert":
      return <ClockAlert {...props} />;
    case "git-compare-arrows":
      return <GitCompareArrows {...props} />;
    case "workflow":
      return <Workflow {...props} />;
    case "flask-conical":
      return <FlaskConical {...props} />;
    case "list-checks":
      return <ListChecks {...props} />;
    case "test-tube-2":
      return <TestTube2 {...props} />;
    case "badge-check":
      return <BadgeCheck {...props} />;
    case "users-round":
      return <UsersRound {...props} />;
    case "pause-octagon":
      return <PauseOctagon {...props} />;
    case "ban":
      return <Ban {...props} />;
    case "triangle-alert":
      return <TriangleAlert {...props} />;
    case "fingerprint":
      return <Fingerprint {...props} />;
    case "scan-text":
      return <ScanText {...props} />;
    case "badge-help":
      return <BadgeHelp {...props} />;
    case "book-open-check":
      return <BookOpenCheck {...props} />;
    case "clock-3":
      return <Clock3 {...props} />;
    case "split":
      return <Split {...props} />;
    case "braces":
      return <Braces {...props} />;
    case "messages-square":
      return <MessagesSquare {...props} />;
    case "inbox":
      return <Inbox {...props} />;
    case "tags":
      return <Tags {...props} />;
    case "git-branch":
      return <GitBranch {...props} />;
    case "calculator":
      return <Calculator {...props} />;
    case "clipboard-check":
      return <ClipboardCheck {...props} />;
    case "scale":
      return <Scale {...props} />;
    case "history":
      return <History {...props} />;
    case "radar":
      return <Radar {...props} />;
    case "file-digit":
      return <FileDigit {...props} />;
    case "sparkles":
      return <Sparkles {...props} />;
    case "combine":
      return <Combine {...props} />;
    case "landmark":
      return <Landmark {...props} />;
    case "radio-tower":
      return <RadioTower {...props} />;
    case "file-search":
      return <FileSearch {...props} />;
    case "minus":
      return <Minus {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "arrow-right":
      return <ArrowRight {...props} />;
    case "arrow-down":
      return <ArrowDown {...props} />;
    case "check-circle-2":
      return <CheckCircle2 {...props} />;
    case "circle-slash-2":
      return <CircleSlash2 {...props} />;
    default:
      return <CircleHelp {...props} />;
  }
}

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
    <section
      id={id}
      style={style}
      className={clsx("relative w-full py-16 sm:py-20 lg:py-24", className)}
    >
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center mx-auto max-w-4xl" : "w-full max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs sm:text-sm font-bold uppercase tracking-[0.08em]",
            dark ? "text-[#F4A261]" : "text-[#D65A2C]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight font-['Inter',sans-serif]",
          dark ? "text-white" : "text-[#18141B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5]",
            dark ? "text-[#D9D0DF]" : "text-[#665F69]"
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
  iconName = "shield-alert",
  dark = false,
  className,
}: {
  title: string;
  description: string;
  iconName?: string;
  dark?: boolean;
  className?: string;
}) {
  if (dark) {
    return (
      <div
        className={clsx(
          "rounded-2xl border border-[#6F4E90] bg-[#3E1C61] p-5 sm:p-6 shadow-sm flex items-start gap-4",
          className
        )}
      >
        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#533172] flex items-center justify-center text-white">
          {renderLucideIcon(iconName, "w-5 h-5 text-[#F4A261]")}
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-sm sm:text-base font-bold text-white font-['Inter',sans-serif]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#D9D0DF] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "rounded-2xl border border-[#F2C7B4] bg-[#FFF0E8] p-5 sm:p-6 shadow-sm flex items-start gap-4",
        className
      )}
    >
      <div className="shrink-0 w-10 h-10 rounded-xl bg-white shadow-2xs flex items-center justify-center text-[#D65A2C]">
        {renderLucideIcon(iconName, "w-5 h-5 text-[#D65A2C]")}
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-sm sm:text-base font-bold text-[#18141B] font-['Inter',sans-serif]">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#665F69] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function StatusTag({
  status,
  iconName,
  className,
}: {
  status: string;
  iconName?: string;
  className?: string;
}) {
  const s = status.toLowerCase();

  let bg = "bg-[#F7F1FA] text-[#665F69] border-[#DFD3E7]";
  let defaultIcon = "circle-help";

  if (s === "production" || s === "managed") {
    bg = "bg-[#E6FFFA] text-[#276749] border-[#A7F3D0]";
    defaultIcon = s === "production" ? "badge-check" : "users-round";
  } else if (s === "pilot") {
    bg = "bg-[#FEF3C7] text-[#9A5A11] border-[#FDE68A]";
    defaultIcon = "test-tube-2";
  } else if (s === "research" || s === "validation") {
    bg = "bg-[#EEE7F7] text-[#301153] border-[#D8CEDD]";
    defaultIcon = s === "research" ? "flask-conical" : "list-checks";
  } else if (s === "suspended" || s === "withdrawn" || s === "conflicting" || s === "conflicting records") {
    bg = "bg-[#FEE2E2] text-[#9B2C2C] border-[#FECACA]";
    defaultIcon = s.includes("suspend") ? "pause-octagon" : s.includes("withdraw") ? "ban" : "git-compare-arrows";
  } else if (s.includes("unavailable") || s.includes("stale")) {
    bg = "bg-[#F5F2F7] text-[#9A5A11] border-[#E5DEEC]";
    defaultIcon = s.includes("stale") ? "clock-alert" : "circle-help";
  } else if (s === "source current" || s === "loading" || s === "no matching result") {
    bg = "bg-[#F5F2F7] text-[#665F69] border-[#E5DEEC]";
    defaultIcon = s === "loading" ? "loader-circle" : s === "source current" ? "circle-help" : "search-x";
  }

  const iconToRender = iconName || defaultIcon;

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition-colors",
        bg,
        className
      )}
    >
      {renderLucideIcon(iconToRender, "w-3.5 h-3.5 shrink-0")}
      <span>{status}</span>
    </span>
  );
}

export function PrimaryButton({
  children,
  onClick,
  href,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <a href={href} className={clsx(baseClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  href,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-6 py-3.5 text-sm font-semibold text-[#18141B] shadow-2xs hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all duration-200 active:scale-[0.98] cursor-pointer";

  if (href) {
    return (
      <a href={href} className={clsx(baseClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)}>
      {children}
    </button>
  );
}
