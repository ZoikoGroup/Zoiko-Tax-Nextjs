"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { BG, FAQ_DATA } from "./data-enterprise-systems-data";
import { Reveal, SectionContainer, SectionHeader, patternBg } from "./shared";

export default function FAQSection() {
  // All answers start open so the content stays readable without interaction.
  const [open, setOpen] = useState<Set<number>>(() => new Set(FAQ_DATA.items.map((_, i) => i)));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <SectionContainer className="bg-[#FAF8FA]" style={patternBg(BG.faq)}>
      <Reveal>
        <SectionHeader eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} description={FAQ_DATA.description} />
      </Reveal>

      <div className="mt-10 sm:mt-14 flex flex-col">
        {FAQ_DATA.items.map((item, idx) => {
          const isOpen = open.has(idx);
          const panelId = `des-faq-${idx}`;
          return (
            <Reveal key={item.question} delay={0.02 * idx}>
              <div className="border-b border-[#D8CEDD] py-6">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-semibold text-[#18141B]">{item.question}</span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 mt-1 text-[#301153]" aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 mt-1 text-[#301153]" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                <div id={panelId} hidden={!isOpen} className="pt-3">
                  <p className="text-base leading-[26px] text-[#665F69]">{item.answer}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
