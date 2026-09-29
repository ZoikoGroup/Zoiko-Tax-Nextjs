import React from "react";
import { SectionContainer, SectionHeader, Notice, Reveal } from "./shared";
import { RECONCILIATION_DATA } from "./mvne-mvna-data";

export default function ReconciliationSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader title={RECONCILIATION_DATA.title} description={RECONCILIATION_DATA.description} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-xl border border-[#D8CEDD] bg-white p-5 sm:p-6">
          <Notice>{RECONCILIATION_DATA.notice}</Notice>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
