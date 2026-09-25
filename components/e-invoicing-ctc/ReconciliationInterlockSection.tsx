"use client";

import React from "react";
import { RECONCILIATION_CARDS } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, PrimaryButton, Reveal } from "./shared";

export default function ReconciliationInterlockSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Ledger Accuracy"
        title="The Reconciliation Interlock"
        description="Detect gaps between transaction records, calculated liabilities, structured e-invoices, and ultimate general ledger balances."
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {RECONCILIATION_CARDS.map((card, idx) => (
          <Reveal key={card.title} delay={0.06 * idx}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#D65A2C]/50 transition-all duration-200">
              <div>
                <h3 className="text-lg font-bold text-[#18141B] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  {card.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div>
          <PrimaryButton href="#reconciliation">Explore Reconciliation</PrimaryButton>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
