import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./shared";
import { CONVERSION_DATA } from "./ucaas-data";

export default function ConversionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src="/UCaaS, CCaaS & CPaaS/ii.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1280px] flex-col items-center justify-center gap-6 px-6 py-[45px] text-center sm:px-8 lg:px-0">
        <Reveal>
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#F4A261]">
            {CONVERSION_DATA.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto max-w-[850px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
            See how ZoikoTax can fit your cloud<br className="hidden lg:inline" />
            communications fiscal architecture.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-[800px] text-[15px] leading-[1.6] text-[#D9D0DF] sm:text-lg lg:text-[1.125rem] lg:leading-[1.75rem]">
            Discuss your service and bundle context, current authority boundaries and capability-specific<br className="hidden lg:inline" />
            readiness—without assuming a generic deployment path.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {CONVERSION_DATA.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`inline-flex h-[42px] items-center justify-center gap-2 rounded-full px-6 text-[13px] font-bold shadow-sm transition-all active:scale-95 ${
                  action.variant === "primary"
                    ? "bg-[#D65A2C] text-white hover:bg-[#C15822]"
                    : "bg-white text-[#18141B] hover:bg-zinc-50"
                }`}
              >
                {action.label} <span className="text-[15px] leading-none">↗</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
