"use client";

import React from "react";
import { DOCUMENT_EXTRACTION_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DocumentExtractionSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/intelligence-fabric/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={DOCUMENT_EXTRACTION_DATA.eyebrow}
          title={DOCUMENT_EXTRACTION_DATA.title}
          description={DOCUMENT_EXTRACTION_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 space-y-4">
            <h3 className="text-[15px] sm:text-base font-bold text-[#18141B]">
              {DOCUMENT_EXTRACTION_DATA.source.fileName}
            </h3>
            <div className="rounded-lg bg-[#F7F3ED] p-4 sm:p-5">
              <p className="text-[13px] leading-[1.6] text-[#535055]">{DOCUMENT_EXTRACTION_DATA.source.heading}</p>
              <p className="mt-1 text-[13px] leading-[1.6] text-[#535055]">{DOCUMENT_EXTRACTION_DATA.source.body}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 space-y-3">
            <h3 className="text-[15px] sm:text-base font-bold text-[#D65A2C]">
              {DOCUMENT_EXTRACTION_DATA.extracted.title}
            </h3>
            <div className="space-y-2.5">
              {DOCUMENT_EXTRACTION_DATA.extracted.fields.map((field) => (
                <p key={field} className="font-mono text-[13px] text-[#18141B]">
                  {field}
                </p>
              ))}
            </div>
            <div className="border-t border-[#D8CEDD] pt-3">
              <p className="text-xs text-[#665F69]">{DOCUMENT_EXTRACTION_DATA.extracted.metadata}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
