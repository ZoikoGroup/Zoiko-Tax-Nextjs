import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

export { default as Reveal } from "@/components/shared/Reveal";
export { StaggerGroup, StaggerItem } from "@/components/shared/Stagger";

export const buttonClasses = {
  primary:
    "inline-flex h-12 items-center justify-center rounded-full bg-copper px-5 text-sm text-white outline outline-1 -outline-offset-1 outline-copper-bright shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-colors hover:bg-copper-bright",
  secondary:
    "inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm text-ink outline outline-1 -outline-offset-1 outline-line shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] transition-colors hover:bg-menu-surface",
};

/** CSS background for decorative images that should never be in the a11y tree. */
export const bgImage = (src: string): CSSProperties => ({ backgroundImage: `url("${src}")` });

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx("mx-auto w-full max-w-360 px-5 sm:px-10 xl:px-20", className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Decorative background image, stretched to cover the section. */
  background?: string;
};

export function Section({ id, children, className, background }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx("relative py-16 lg:py-24", background && "bg-cover bg-center", className)}
      style={background ? bgImage(background) : undefined}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={clsx("text-sm font-bold uppercase text-menu-accent", className)}>{children}</p>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: SectionIntroProps) {
  const dark = tone === "dark";
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <Eyebrow className={dark ? "text-apricot" : undefined}>{eyebrow}</Eyebrow>
      <h2
        className={clsx(
          "text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[1.0]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-lg leading-8 sm:text-xl",
            dark ? "text-white/80" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

type NumberedCardProps = {
  index: number;
  title: string;
  description: string;
  className?: string;
  background?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  numberClassName?: string;
};

export function NumberedCard({
  index,
  title,
  description,
  className,
  background,
  titleClassName,
  descriptionClassName,
  numberClassName,
}: NumberedCardProps) {
  return (
    <div
      className={clsx(
        "flex h-full min-h-44 flex-col gap-3.5 rounded-2xl bg-[length:100%_100%] bg-no-repeat p-6",
        className,
      )}
      style={background ? bgImage(background) : undefined}
    >
      <span className={clsx("font-mono text-xs", numberClassName ?? "text-menu-accent")}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className={clsx("text-2xl leading-7", titleClassName ?? "text-ink")}>{title}</h3>
      <p className={clsx("text-sm leading-5", descriptionClassName ?? "text-ink-muted")}>
        {description}
      </p>
    </div>
  );
}
