import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { ActionButtons, Reveal } from "./shared";
import { IMAGES, TRUST_DATA } from "./ucaas-data";

export default function TrustSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.trust}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 to-slate-900/90" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-9 px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-orange-300">{TRUST_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {TRUST_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-zinc-300 sm:text-xl sm:leading-8">{TRUST_DATA.description}</p>
          </div>
        </Reveal>

        {/* Trust cards + AI banner tile */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_DATA.cards.map((card) => (
              <div
                key={card}
                className="flex min-h-28 flex-col gap-3 rounded-[10px] bg-white/5 p-4 outline outline-1 -outline-offset-1 outline-white/10 transition-colors hover:bg-white/10"
              >
                <ShieldCheck className="size-5 shrink-0 text-orange-300" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="text-base font-bold leading-5 text-white">{card}</h3>
              </div>
            ))}
            <div className="flex min-h-28 flex-col justify-center gap-2.5 rounded-[10px] bg-[#8A4B1F] p-4 shadow-lg">
              <p className="text-base font-extrabold leading-5 text-white">{TRUST_DATA.banner}</p>
            </div>
          </div>
        </Reveal>

        {/* Authority boundary row */}
        <Reveal delay={0.08}>
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-slate-950/90 p-6 outline outline-1 -outline-offset-1 outline-white/10 sm:flex-row sm:items-center sm:gap-6">
            <span className="w-40 shrink-0 font-mono text-xs font-bold uppercase text-orange-300">
              {TRUST_DATA.authorityLabel}
            </span>
            <p className="flex-1 text-sm leading-5 text-zinc-200">{TRUST_DATA.authority}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ActionButtons actions={TRUST_DATA.actions} />
        </Reveal>
      </div>
    </section>
  );
}
