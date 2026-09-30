import React from "react";
import Link from "next/link";
import { SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { ICONS, INTEGRATIONS_DATA } from "./ucaas-data";

export default function IntegrationsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] py-[45px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="flex w-full flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{INTEGRATIONS_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              Fit governed fiscal control into the<br className="hidden lg:inline" />
              telecom financial architecture.
            </h2>
            <p className="w-full text-base leading-6 text-[#78716C] sm:text-lg sm:leading-7 lg:text-[1.125rem] lg:leading-[1.75rem]">
              {INTEGRATIONS_DATA.description}
            </p>
          </div>
        </Reveal>

        {/* Six integration tiles */}
        <StaggerGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {ICONS.integrationCards.map((card) => (
            <StaggerItem key={card.label}>
              <div className="flex h-full min-h-[140px] flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm border border-[#E8E4EC] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <card.icon className="size-6 shrink-0 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-bold leading-[1.3] text-[#18141B]">{card.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Developer signals panel */}
        <Reveal delay={0.06}>
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 rounded-[32px] bg-[#210245] p-6 sm:p-10 lg:flex-row lg:items-start lg:justify-between lg:py-[50px] lg:px-[60px]">
            <div className="flex flex-1 flex-col gap-6 lg:pr-10">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                {INTEGRATIONS_DATA.panel.eyebrow}
              </span>
              <h3 className="text-2xl font-bold leading-[1.2] text-white sm:text-[2rem] lg:whitespace-nowrap">
                Controlled integration, built for<br />
                consequential writes.
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#D9D0DF] lg:whitespace-nowrap">
                Canonical contracts, explicit versions and operational correlation help<br />
                preserve the boundary between advisory analysis and authoritative action.
              </p>
              <div className="pt-2 lg:pt-4">
                <Link
                  href="/developers"
                  className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] font-bold text-[#18141B] shadow-sm transition-all hover:bg-zinc-50 active:scale-95"
                >
                  Explore Developers <span className="text-sm leading-none">↗</span>
                </Link>
              </div>
            </div>

            <div className="flex w-full flex-wrap content-start gap-x-3 gap-y-3 rounded-2xl bg-[#15042A] p-7 lg:w-[600px]">
              {INTEGRATIONS_DATA.panel.pills.slice(0, 7).map((pill) => (
                <div
                  key={pill}
                  className="flex items-center rounded-full bg-white/5 px-4 py-2.5 outline outline-1 -outline-offset-1 outline-white/10"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                    {pill === "REST APIS" ? "REST APIs" : pill}
                  </span>
                </div>
              ))}
              <div className="flex w-full items-start gap-4">
                <div className="flex shrink-0 items-center rounded-full bg-white/5 px-4 py-2.5 outline outline-1 -outline-offset-1 outline-white/10 mt-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                    {INTEGRATIONS_DATA.panel.pills[7]}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-white/60 pt-2">
                  {INTEGRATIONS_DATA.panel.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
