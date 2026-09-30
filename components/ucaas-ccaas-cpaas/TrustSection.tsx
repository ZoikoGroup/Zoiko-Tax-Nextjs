import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ActionButtons, Reveal } from "./shared";
import { IMAGES, TRUST_DATA } from "./ucaas-data";

export default function TrustSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D013D]">
      {/* Server room background image */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image 
          src="/UCaaS, CCaaS & CPaaS/op.jpg" 
          alt="" 
          fill 
          sizes="100vw"
          className="object-cover object-center opacity-60 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#210245]/70 to-[#180036]/90" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-[92px] sm:px-8 lg:px-0">
        <Reveal>
          <div className="flex w-full flex-col gap-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
              {TRUST_DATA.eyebrow}
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              {TRUST_DATA.title}
            </h2>
            <p className="text-base leading-[1.6] text-[#D9D0DF] sm:text-lg lg:text-[1.125rem] lg:leading-[1.75rem]">
              {TRUST_DATA.description}
            </p>
          </div>
        </Reveal>

        {/* Trust cards + AI banner tile */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5">
            {TRUST_DATA.cards.map((card) => (
              <div
                key={card.title}
                className="flex w-full lg:w-[306px] lg:h-[120px] flex-col justify-center gap-4 rounded-2xl bg-[rgba(255,255,255,0.05)] p-6 outline outline-1 -outline-offset-1 outline-[rgba(255,255,255,0.13)] transition-all hover:bg-[rgba(255,255,255,0.08)] hover:outline-[rgba(255,255,255,0.2)]"
              >
                <card.icon className="size-6 shrink-0 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-[14px] font-bold leading-[1.4] text-white">{card.title}</h3>
              </div>
            ))}
            <div className="flex w-full lg:w-[306px] lg:h-[120px] flex-col justify-center rounded-2xl bg-[#C15822] p-6 shadow-lg">
              <p className="text-[15px] font-extrabold leading-[1.4] text-white whitespace-pre-line">
                {TRUST_DATA.banner}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Authority boundary row */}
        <Reveal delay={0.08}>
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-[rgba(13,2,28,0.85)] p-6 outline outline-1 -outline-offset-1 outline-[rgba(13,2,28,0.85)] sm:flex-row sm:items-center sm:gap-6 lg:p-8">
            <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-[#D65A2C] lg:w-44">
              {TRUST_DATA.authorityLabel}
            </span>
            <p className="flex-1 text-[13px] leading-[1.6] text-[#D9D0DF]">
              AI may assist research, comparison and review; it cannot be fiscal authority, a source of law, legal or tax advice, an evidence replacement or a guaranteed<br className="hidden lg:inline" />
              outcome.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-4">
            {TRUST_DATA.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] font-bold text-[#18141B] shadow-sm transition-all hover:bg-zinc-50 active:scale-95"
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
