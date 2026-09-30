import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { Guardrail, SectionContainer, StaggerGrid, StaggerItem } from "./shared";
import { EVIDENCE_DATA, IMAGES } from "./ucaas-data";

export default function EvidenceSection() {
  const col1 = [
    "Source provenance",
    "Rule/content version",
    "Approval/workflow context",
    "Current-policy comparison",
  ];
  const col2 = [
    "Input facts",
    "Jurisdiction/responsibility context",
    "Historical replay",
    "Uncertainty",
  ];

  return (
    <SectionContainer className="bg-[#FAF3FF] py-[45px]">

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <StaggerGrid className="gap-6 lg:grid-cols-2">
          {/* Light evidence checklist panel */}
          <StaggerItem>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm border border-[#E8E4EC] sm:p-9">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold uppercase text-[#D65A2C]">{EVIDENCE_DATA.eyebrow}</span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
                  Preserve why<br />
                  the outcome was<br />
                  authoritative.
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
                <div className="flex flex-col gap-3">
                  {col1.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CircleCheck className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.8} aria-hidden="true" />
                      <span className="text-[14px] font-semibold text-[#18141B]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {col2.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CircleCheck className="size-4 shrink-0 text-[#D65A2C]" strokeWidth={1.8} aria-hidden="true" />
                      <span className="text-[14px] font-semibold text-[#18141B]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/evidence-auditability"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#210245] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#310464] hover:shadow-md active:scale-95"
                >
                  Explore Evidence & Replay <span className="text-base leading-none">↗</span>
                </Link>
              </div>
            </div>
          </StaggerItem>

          {/* Dark historical replay panel */}
          <StaggerItem>
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-[#210245] p-6 shadow-sm sm:p-10">
              <div className="relative z-10 flex flex-col gap-6">
                <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.25rem] lg:leading-[1.2]">
                  Do not just calculate the answer.<br />
                  Preserve why it was the answer.
                </h3>
                <p className="text-[15px] sm:text-base leading-6 text-[#D9D0DF] sm:leading-[1.6]">
                  Historical replay reconstructs a supported decision using its historical<br className="hidden lg:inline" />
                  inputs, effective-time context and approved versions. Current-policy<br className="hidden lg:inline" />
                  comparison is a separate, explicit operation.
                </p>

                <div className="flex flex-col gap-2.5">
                  {EVIDENCE_DATA.panel.rows.map((row) => (
                    <div
                      key={row.num}
                      className="flex items-center gap-3.5 rounded-xl bg-white/5 px-4 py-3 outline outline-1 -outline-offset-1 outline-white/10 transition-colors hover:bg-white/10"
                    >
                      <span className="shrink-0 font-mono text-xs font-bold text-[#F4A261]">{row.num}</span>
                      <span className="text-sm font-semibold text-white">{row.title}</span>
                    </div>
                  ))}
                </div>

                <Guardrail dark>{EVIDENCE_DATA.panel.guardrail}</Guardrail>
              </div>
            </div>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </SectionContainer>
  );
}
