import React from "react";
import { Button, SectionContainer, Reveal, StaggerGrid, StaggerItem } from "./shared";
import { ICONS, INTEGRATIONS_DATA } from "./ucaas-data";

export default function IntegrationsSection() {
  return (
    <SectionContainer className="bg-white lg:py-24">
      <div className="flex flex-col gap-9">
        <Reveal>
          <div className="flex max-w-[980px] flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{INTEGRATIONS_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {INTEGRATIONS_DATA.title}
            </h2>
            <p className="text-lg leading-7 text-[#78716C] sm:text-xl sm:leading-8">
              {INTEGRATIONS_DATA.description}
            </p>
          </div>
        </Reveal>

        {/* Six integration tiles with Figma icon exports */}
        <StaggerGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {ICONS.integrationCards.map((card) => (
            <StaggerItem key={card.label}>
              <div className="flex h-full min-h-32 flex-col gap-3.5 rounded-2xl bg-white p-4 outline outline-1 -outline-offset-1 outline-zinc-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_0_rgba(29,3,59,0.06)]">
                <card.icon className="size-5 shrink-0 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-bold leading-5 text-[#18141B]">{card.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Developer signals panel */}
        <Reveal delay={0.06}>
          <div className="flex flex-col gap-11 rounded-3xl bg-violet-950 p-6 sm:p-9 lg:flex-row lg:items-start">
            <div className="flex flex-1 flex-col gap-4">
              <span className="font-mono text-xs font-bold uppercase text-orange-300">
                {INTEGRATIONS_DATA.panel.eyebrow}
              </span>
              <h3 className="text-2xl font-bold leading-9 text-white sm:text-3xl">{INTEGRATIONS_DATA.panel.title}</h3>
              <p className="text-base leading-6 text-zinc-300">{INTEGRATIONS_DATA.panel.description}</p>
              <div className="pt-1">
                <Button action={INTEGRATIONS_DATA.panel.action} />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2.5 rounded-2xl bg-zinc-900 p-6 lg:w-[600px] lg:flex-row lg:flex-wrap lg:items-start lg:content-start">
              {INTEGRATIONS_DATA.panel.pills.map((pill) => (
                <div
                  key={pill}
                  className="flex rounded-full bg-white/5 px-3.5 py-2 outline outline-1 -outline-offset-1 outline-white/20"
                >
                  <span className="font-mono text-xs font-semibold uppercase text-white">{pill}</span>
                </div>
              ))}
              <p className="flex-1 text-xs leading-4 text-zinc-400">{INTEGRATIONS_DATA.panel.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
