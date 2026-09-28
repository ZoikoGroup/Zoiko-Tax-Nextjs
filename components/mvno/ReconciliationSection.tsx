import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, SectionAction, Reveal } from "./shared";
import { IMAGES, RECONCILIATION_DATA } from "./mvno-data";

export default function ReconciliationSection() {
  const { panel } = RECONCILIATION_DATA;

  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.reconciliation}>
      <Reveal>
        <SectionHeader
          eyebrow={RECONCILIATION_DATA.eyebrow}
          title={RECONCILIATION_DATA.title}
          description={RECONCILIATION_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl border border-[#EDEAEF] bg-[#F7F7F7] p-5 shadow-[0_8px_16px_0_rgba(0,0,0,0.08)] sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-[#D8CEDD] pb-3">
            <h3 className="text-sm font-bold text-[#18141B]">{panel.title}</h3>
            <span className="text-xs text-[#665F69]">{panel.caption}</span>
          </div>
          <ul className="flex flex-col">
            {panel.rows.map((row) => (
              <li
                key={row.name}
                className="grid grid-cols-2 gap-x-4 gap-y-1 py-3 text-sm lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-center"
              >
                <span className="col-span-2 text-[#18141B] lg:col-span-1">{row.name}</span>
                <span className="text-[#665F69] lg:text-center">Billed: {row.billed}</span>
                <span className="text-right text-[#665F69] lg:text-center">Ledger: {row.ledger}</span>
                <span
                  className={clsx(
                    "col-span-2 font-semibold lg:col-span-1 lg:text-right",
                    row.match ? "text-[#26735B]" : "text-[#9A5B12]"
                  )}
                >
                  {row.delta} ({row.match ? "Match" : "Variance"})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={0.14}>
        <SectionAction action={RECONCILIATION_DATA.action} />
      </Reveal>
    </SectionContainer>
  );
}
