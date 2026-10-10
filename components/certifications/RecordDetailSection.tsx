"use client";

import React from "react";
import { RECORD_DETAIL_DATA as R } from "./certifications-data";
import { SectionContainer, Reveal } from "./shared";

export default function RecordDetailSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/certifications/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{R.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-7">
            <div className="flex flex-col gap-2.5">
              <p className="text-sm font-bold text-[#301153]">{R.panelCaption.title}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.panelCaption.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {R.subdivisions.map((sub) => (
                <div key={sub.title} className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-[#301153]">{sub.title}</h3>
                  {sub.fields.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <h4 className="text-[15px] font-semibold text-[#18141B]">{f.label}</h4>
                      <p className="text-sm leading-[1.6] text-[#665F69]">{f.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-[#EEE5F4] p-5">
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.scopeNote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
