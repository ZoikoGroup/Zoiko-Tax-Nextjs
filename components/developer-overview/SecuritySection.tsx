"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { BG, SECURITY_DATA } from "./developer-overview-data";
import { ArrowLink, Reveal, SectionContainer } from "./shared";

export default function SecuritySection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.security}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Reveal>
        <div className="w-full rounded-3xl bg-[#301153] p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-[420px] shrink-0 flex flex-col gap-4">
            <ShieldCheck className="h-7 w-7 text-[#F4A261]" strokeWidth={1.6} aria-hidden="true" />
            <span className="text-xs font-bold uppercase text-[#F4A261]">{SECURITY_DATA.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] text-white">
              {SECURITY_DATA.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="pt-2 flex flex-col gap-[5px]">
              <ArrowLink dark href={SECURITY_DATA.link.href}>
                {SECURITY_DATA.link.label}
              </ArrowLink>
              <span className="text-xs leading-4 text-[#D9D0DF]">{SECURITY_DATA.path}</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {SECURITY_DATA.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-[#D9D0DF]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
