"use client";

import React from "react";
import clsx from "clsx";
export { default as Reveal } from "@/components/shared/Reveal";

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
    <section id={id} style={style} className={clsx("w-full py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}
