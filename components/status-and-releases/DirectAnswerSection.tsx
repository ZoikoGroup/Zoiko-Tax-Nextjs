"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { SectionContainer, SectionHeader } from "./shared";
import { directAnswerComparison } from "./status-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Direct answer"
          title="What is ZoikoTax Status & Releases?"
          description="It is the public chronology for governed Coverage changes. It records what changed, where, for which capability and scope, then hands readers to Coverage Overview to verify what is current."
        />

        <div className="flex flex-col gap-3">
          {directAnswerComparison.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch rounded-2xl border border-[#EAE2ED] bg-white shadow-sm overflow-hidden"
            >
              {/* "It is" Column */}
              <div className="flex-1 flex items-start gap-3.5 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#236C55] mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#236C55]">
                    It is
                  </span>
                  <span className="text-base font-semibold leading-snug text-[#18141B]">
                    {item.is}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] bg-[#EAE2ED] shrink-0" />
              <div className="block md:hidden h-[1px] w-full bg-[#EAE2ED]" />

              {/* "It is not" Column */}
              <div className="flex-1 flex items-start gap-3.5 p-5 bg-[#F7F3ED]">
                <XCircle className="h-5 w-5 shrink-0 text-[#9E3434] mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E3434]">
                    It is not
                  </span>
                  <span className="text-base font-normal leading-snug text-[#665F69]">
                    {item.isNot}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
