"use client";

import React from "react";
import Image from "next/image";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

interface MetadataItem {
  field: string;
  meaning: string;
}

const METADATA_FIELDS: MetadataItem[] = [
  {
    field: "Status owner",
    meaning: "Accountable owner of the scoped status, as named in the source.",
  },
  {
    field: "Provenance",
    meaning: "The authoritative origin of the statement and its evidence.",
  },
  {
    field: "Source version",
    meaning: "The revision that governs the approved status statement.",
  },
  {
    field: "Publish/review date",
    meaning:
      "Source-backed publication and review controls, where applicable.",
  },
  {
    field: "Scope",
    meaning:
      "The exact applicability and boundaries of the approved capability.",
  },
  {
    field: "Last verification",
    meaning: "Source-backed confirmation that the statement is current.",
  },
];

export default function ProofCurrentnessSection() {
  return (
    <SectionContainer
      id="proof-currentness"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Dot Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/coverage-production/dot-pattern-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-10">
            {/* Section Heading */}
            <SectionHeader
              eyebrow="Proof & currentness"
              title="Authority comes from the source. Not the page."
              description="Public-safe metadata structure only. Actual record values have not been provided."
              className="mb-0"
            />

            {/* Evidence Review and Metadata Layout */}
            <div className="flex flex-col lg:flex-row items-stretch gap-8">
              {/* Left Image: Telecom evidence review */}
              <div className="w-full lg:w-[400px] flex-shrink-0 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[510px] rounded-[26px] overflow-hidden shadow-md">
                <picture>
                  <source
                    srcSet="/coverage-production/telecom-evidence-review.webp"
                    type="image/webp"
                  />
                  <Image
                    src="/coverage-production/telecom-evidence-review.png"
                    alt="Telecom evidence and compliance verification review"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </picture>
              </div>

              {/* Right: Source Metadata 2-column cards */}
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {METADATA_FIELDS.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2.5 rounded-2xl border border-[#D8CEDD] bg-white p-5.5 shadow-sm transition hover:shadow-md"
                    >
                      <h3 className="text-[17px] font-semibold text-[#301153] font-['Inter',sans-serif]">
                        {item.field}
                      </h3>
                      <p className="text-sm font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                        {item.meaning}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Evidence Access Note */}
                <p className="text-[13px] font-normal text-[#665F69] pt-2 font-['Inter',sans-serif]">
                  Evidence URLs are shown only when public access and the
                  associated claim are approved.
                </p>
              </div>
            </div>

            {/* Source Governance Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl bg-[#301153] p-7 text-white">
              <div className="flex flex-col gap-2 max-w-[400px]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261] font-['Inter',sans-serif]">
                  SOURCE BINDING
                </span>
                <h4 className="text-[19px] font-semibold text-white font-['Inter',sans-serif]">
                  Product Coverage Governance
                </h4>
              </div>

              <p className="text-base font-normal leading-relaxed text-[#D9D0DF] max-w-[800px] font-['Inter',sans-serif]">
                Editorial copy cannot create readiness. Missing currentness
                suppresses any Production assertion; an old or cached status
                must not look current.
              </p>
            </div>

            {/* Source Boundary */}
            <SourceBoundary text="If source, scope or verification cannot be confirmed, use Status not confirmed and return to current coverage discovery. Never substitute an optimistic badge." />
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
