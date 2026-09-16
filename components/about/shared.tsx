import type { ReactNode } from "react";
import clsx from "clsx";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

type SectionShellProps = {
  id?: string;
  className?: string;
  tone?: "light" | "dark" | "muted";
  children: ReactNode;
};

const toneClasses: Record<NonNullable<SectionShellProps["tone"]>, string> = {
  light: "bg-white text-brand-navy",
  muted: "bg-slate-50 text-brand-navy",
  dark: "bg-brand-navy text-white",
};

export function SectionShell({
  id,
  className,
  tone = "light",
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={clsx(toneClasses[tone], className)}>
      <div className="section-container py-16 sm:py-20">{children}</div>
    </section>
  );
}

type EyebrowProps = {
  children: ReactNode;
  tone?: "orange" | "navy";
};

export function Eyebrow({ children, tone = "orange" }: EyebrowProps) {
  return (
    <p
      className={clsx(
        "text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "orange" ? "text-brand-orange" : "text-brand-navy/60"
      )}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={clsx(
          "mt-3 text-2xl font-bold leading-tight sm:text-3xl",
          tone === "dark" ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-brand-navy/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DarkCard({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/40 hover:bg-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
