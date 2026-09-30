"use client";

import React from "react";
import { History } from "lucide-react";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

const SEMANTICS = [
  {
    status: "Research",
    cue: "State cue",
    meaning: "Exploratory content is being investigated.",
    productionUse: "Not allowed.",
    productionAllowed: false,
    pageBehavior: "Show research state; never infer managed availability.",
  },
  {
    status: "Validation",
    cue: "State cue",
    meaning: "Content or operation is under governed review.",
    productionUse: "Not allowed.",
    productionAllowed: false,
    pageBehavior: "Show validation and its explicit qualifier.",
  },
  {
    status: "Pilot",
    cue: "State cue",
    meaning: "Controlled limited evaluation under explicit terms.",
    productionUse: "Not generally allowed.",
    productionAllowed: false,
    pageBehavior:
      "Show pilot only with governed qualifier; never present as MANAGED.",
  },
  {
    status: "Production",
    cue: "State cue",
    meaning: "Underlying software capability is production-ready.",
    productionUse: "Allowed for that software capability only.",
    productionAllowed: true,
    pageBehavior:
      "Keep operational readiness separate. Production alone never creates Managed Compliance.",
  },
  {
    status: "Managed",
    cue: "Shield cue",
    meaning:
      "Production capability and managed operations are approved for the exact scope.",
    productionUse: "Allowed only within that exact managed scope.",
    productionAllowed: true,
    pageBehavior: "Show scope, currentness and evidence links together.",
  },
  {
    status: "Suspended",
    cue: "State cue",
    meaning: "Current availability is paused by a governed decision.",
    productionUse: "Not allowed while suspended.",
    productionAllowed: false,
    pageBehavior:
      "Suppress prior positive states and show the current suspension.",
  },
  {
    status: "Withdrawn",
    cue: "Stop cue",
    meaning: "The governed capability or operation is no longer available.",
    productionUse: "Not allowed.",
    productionAllowed: false,
    pageBehavior:
      "Show withdrawn as the current state; retain historical evidence only as subordinate context.",
  },
  {
    status: "Status unavailable",
    cue: "? cue",
    meaning: "Current governed truth cannot be reliably presented.",
    productionUse: "Not allowed from this page.",
    productionAllowed: false,
    pageBehavior:
      "Display unavailable explicitly; never substitute a prior state, guess or free-text match.",
  },
];

export default function StatusSemanticsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#E5D9EB]">
      <Reveal>
        <div className="space-y-8 sm:space-y-10">
          <SectionHeader
            eyebrow="Status Semantics"
            title="Every state carries a public rule—not just a color."
            description="Text, icon and shape carry meaning. Managed applies only when production capability and managed operations are both ready in the exact scope."
          />

          {/* State Precedence Rule Banner (Dark Box from Figma) */}
          <div className="flex items-start sm:items-center gap-4 rounded-[14px] bg-[#1D033B] p-5 sm:p-5.5 shadow-md border border-[#3A0F6D]">
            <div className="shrink-0 p-2 rounded-xl bg-white/10 text-[#F4A261]">
              <History className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-sm sm:text-[15px] font-semibold leading-relaxed text-white">
              Historical Production never overrides current Suspended, Withdrawn or Status unavailable. The current governed state always controls page behavior.
            </p>
          </div>

          {/* Semantics Grid (8 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEMANTICS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[16px] border border-[#E5D9EB] bg-white p-5 sm:p-6 shadow-2xs hover:border-[#BF6735] transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#F0E8F5]">
                  <StatusBadge status={item.status} />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A818E]">
                    {item.cue}
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-[13px]">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-[#D65A2C] block text-[11px] mb-1">
                      Public meaning
                    </span>
                    <p className="text-[#18141B] leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-[#8A818E] block text-[11px] mb-1">
                      Authoritative production use
                    </span>
                    <p
                      className={`font-semibold ${
                        item.productionAllowed
                          ? "text-[#177245]"
                          : "text-[#9B2C2C]"
                      }`}
                    >
                      {item.productionUse}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold uppercase tracking-wider text-[#8A818E] block text-[11px] mb-1">
                      Page behavior
                    </span>
                    <p className="text-[#665F69] leading-relaxed">
                      {item.pageBehavior}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
