"use client";

import React from "react";
import Reveal from "@/components/shared/Reveal";

export default function SystemStatusActiveIncidents() {
  return (
    <section id="active-incidents" className="w-full bg-[#FAF3FF] border-b border-[#E5E7EB] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            Active incidents
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="pt-8 w-full max-w-[1216px]">
            <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Incident Header */}
              <div className="p-6 bg-[#F9FAFB] border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-[20px] font-bold leading-[28px] text-[#111827] font-['Inter',sans-serif]">
                    Elevated API Latency
                  </h3>
                  <p className="pt-1 text-[14px] font-medium leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                    Incident ID: INC-20261011-842 · Scope: North America API
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FEF3C7] rounded-md">
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                  <span className="text-[14px] font-bold leading-[20px] text-[#92400E] font-['Inter',sans-serif]">
                    Investigating
                  </span>
                </div>
              </div>

              {/* Incident Body */}
              <div className="p-6">
                <div>
                  <h4 className="text-[14px] font-bold leading-[20px] tracking-[0.05em] uppercase text-[#111827] font-['Inter',sans-serif]">
                    Impact Summary
                  </h4>
                  <p className="pt-2 text-[16px] font-normal leading-[24px] text-[#374151] max-w-[1166px] font-['Inter',sans-serif]">
                    API requests directed to North American endpoints are experiencing intermittent latency increases of up to 2 seconds. No data loss has been detected.
                  </p>
                </div>

                {/* Timeline */}
                <div className="pt-8 ml-3 pl-6 border-l-2 border-[#E5E7EB] flex flex-col gap-8 relative">
                  {/* Timeline Update 1 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#6B21A8] ring-4 ring-white" />
                    <p className="text-[14px] font-bold leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                      Oct 11, 2026, 22:15 IST
                    </p>
                    <p className="pt-1 text-[16px] font-normal leading-[24px] text-[#1F2937] max-w-[1128px] font-['Inter',sans-serif]">
                      Operations engineering has identified the cluster causing the latency and is currently shifting traffic to healthy fallback nodes. The next update will be provided within 30 minutes.
                    </p>
                  </div>

                  {/* Timeline Update 2 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#D1D5DB] ring-4 ring-white" />
                    <p className="text-[14px] font-bold leading-[20px] text-[#6B7280] font-['Inter',sans-serif]">
                      Oct 11, 2026, 21:40 IST
                    </p>
                    <p className="pt-1 text-[16px] font-normal leading-[24px] text-[#1F2937] max-w-[1128px] font-['Inter',sans-serif]">
                      We are investigating reports of elevated latency affecting API endpoints in the North America region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
