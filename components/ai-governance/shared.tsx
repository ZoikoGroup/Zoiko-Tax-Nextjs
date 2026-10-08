import Image from "next/image";
import type { ReactNode } from "react";

export function SectionShell({
  children,
  className = "",
  id,
  imageSrc,
  imageClassName = "",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  imageSrc?: string;
  imageClassName?: string;
}) {
  return (
    <section id={id} className={`w-full relative overflow-hidden ${className}`}>
      {imageSrc && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={imageSrc}
            alt=""
            fill
            className={`object-cover ${imageClassName}`}
          />
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className = "",
  descriptionClassName = "max-w-[1060px]",
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  dark?: boolean;
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <span className={`text-sm font-bold uppercase tracking-wider ${
        dark ? "text-[rgba(244,162,97,1)]" : "text-[rgba(214,90,44,1)]"
      }`}>
        {eyebrow}
      </span>
      <h2
        className={`text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[47.52px] ${
          dark ? "text-white" : "text-[rgba(24,20,27,1)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`w-full text-base sm:text-lg lg:text-xl font-normal leading-8 ${
          dark ? "text-[rgba(217,208,223,1)]" : "text-[rgba(102,95,105,1)]"
        } ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}

export function ScopeNotice({
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
      className={`rounded-2xl p-6 border flex flex-col gap-2 ${
        dark
          ? "bg-[rgba(48,17,83,0.5)] border-white/20 text-white"
          : "bg-[rgba(245,238,249,1)] border-[rgba(216,206,221,1)] text-[rgba(24,20,27,1)]"
      } ${className}`}
    >
      <h4 className={`text-sm font-bold ${dark ? "text-white" : "text-[rgba(24,20,27,1)]"}`}>
        {title}
      </h4>
      <p
        className={`text-sm font-normal leading-relaxed ${
          dark ? "text-[rgba(217,208,223,1)]" : "text-[rgba(102,95,105,1)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
