import Image from "next/image";
import type { ReactNode } from "react";

const ICON_BASE = "/trust-center-security/icons";

export function ArrowIcon({ white = false }: { white?: boolean }) {
  return (
    <Image
      src={white ? `${ICON_BASE}/arrow-right-white.svg` : `${ICON_BASE}/arrow-right.svg`}
      alt=""
      width={16}
      height={16}
      className="size-4 shrink-0"
    />
  );
}

export function CardIcon({ name, size = 24 }: { name: string; size?: 24 | 28 }) {
  return (
    <Image
      src={`${ICON_BASE}/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={size === 28 ? "size-7 shrink-0" : "size-6 shrink-0"}
    />
  );
}

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className={`text-xs font-bold ${dark ? "text-orange-300" : "text-orange-600"}`}>{eyebrow}</span>
      <h2 className={`text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[47.52px] ${dark ? "text-white" : "text-zinc-900"}`}>
        {title}
      </h2>
      <p className={`w-full max-w-[1060px] text-base sm:text-lg lg:text-xl lg:leading-8 ${dark ? "text-zinc-300" : "text-stone-500"}`}>
        {description}
      </p>
    </div>
  );
}

export function NoticeCard({
  title,
  description,
  dark = false,
  className = "",
}: {
  title: string;
  description: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg border-l-[3px] border-[rgba(214,90,44,1)] p-6 ${
        dark ? "bg-[rgba(48,17,83,1)]" : "bg-[rgba(242,234,248,1)]"
      } ${className}`}
    >
      <p className={`text-base font-bold ${dark ? "text-white" : "text-zinc-900"}`}>{title}</p>
      <div className={`text-sm sm:text-base leading-6 ${dark ? "text-zinc-300" : "text-[rgba(102,95,105,1)]"}`}>{description}</div>
    </div>
  );
}

export function ControlCard({
  title,
  description,
  footer,
  icon,
}: {
  title: string;
  description: ReactNode;
  footer: string;
  icon?: string;
}) {
  return (
    <div className="flex flex-col gap-3.5 self-stretch rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-zinc-300">
      {icon ? <CardIcon name={icon} /> : null}
      <h3 className="text-xl font-semibold leading-6 text-zinc-900">{title}</h3>
      <p className="text-base leading-6 text-stone-500">{description}</p>
      <div className="inline-flex items-start border-t border-zinc-300 pt-3">
        <p className="flex-1 text-xs font-semibold leading-5 text-violet-950">{footer}</p>
      </div>
    </div>
  );
}

export function StateCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="flex flex-col gap-3.5 self-stretch rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-zinc-300">
      <CardIcon name={icon} />
      <h3 className="text-lg text-zinc-900">{title}</h3>
      <p className="text-base leading-6 text-stone-500">{description}</p>
    </div>
  );
}

export function PillButton({
  label,
  variant = "primary",
  href = "#",
}: {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}) {
  const base =
    "inline-flex h-12 items-center justify-start gap-3 overflow-hidden rounded-[999px] px-6 text-base font-semibold";
  const variants: Record<string, string> = {
    primary:
      "bg-[rgba(191,103,53,1)] text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] border border-[rgba(221,114,53,1)]",
    secondary: "bg-white text-zinc-900 outline outline-1 outline-offset-[-1px] outline-zinc-300",
    ghost: "bg-white/5 text-white outline outline-1 outline-offset-[-1px] outline-zinc-400",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {label}
      <ArrowIcon white={variant !== "secondary"} />
    </a>
  );
}

export function LinkColumn({
  label,
  route,
  dark = false,
}: {
  label: ReactNode;
  route: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-1.5 py-3.5">
      <span className="text-base font-semibold leading-6 text-[rgba(214,90,44,1)]">
        {label}
      </span>
      <span className={`text-xs leading-5 ${dark ? "text-zinc-300" : "text-stone-500"}`}>{route}</span>
    </div>
  );
}
