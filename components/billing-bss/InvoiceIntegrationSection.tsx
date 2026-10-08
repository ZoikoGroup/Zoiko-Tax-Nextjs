"use client";

import React from "react";
import { Layers, GitBranch, FileText, Fingerprint, ArrowDown } from "lucide-react";
import { INVOICE_INTEGRATION_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, DocRef, AuthorityNotice, Reveal } from "./shared";

const ICONS = [Layers, GitBranch, FileText, Fingerprint];

export default function InvoiceIntegrationSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/billing-bss/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={INVOICE_INTEGRATION_DATA.eyebrow}
          title={INVOICE_INTEGRATION_DATA.title}
          description={INVOICE_INTEGRATION_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
        <Reveal delay={0.06}>
          <div className="rounded-[26px] bg-[#F1E8F8] p-6 sm:p-7 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-[#D65A2C]">{INVOICE_INTEGRATION_DATA.linkage.tag}</span>
            {INVOICE_INTEGRATION_DATA.linkage.steps.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-[22px] w-[22px] shrink-0 text-[#D65A2C]" aria-hidden="true" />
                    <p className="text-base font-semibold text-[#301153]">{step}</p>
                  </div>
                  {i < INVOICE_INTEGRATION_DATA.linkage.steps.length - 1 && (
                    <ArrowDown className="h-4 w-4 text-[#301153]/60" aria-hidden="true" />
                  )}
                </React.Fragment>
              );
            })}
            <p className="text-[13px] leading-[1.55] text-[#665F69] pt-1">
              {INVOICE_INTEGRATION_DATA.linkage.textEquivalent}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-5">
            {INVOICE_INTEGRATION_DATA.responsibilities.map((item) => (
              <div key={item.title} className="flex flex-col gap-1.5">
                <h3 className="text-xl text-[#18141B]">{item.title}</h3>
                <p className="text-[15px] leading-[1.55] text-[#665F69]">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.16} className="w-full mt-8">
        <AuthorityNotice title={INVOICE_INTEGRATION_DATA.notice.title} description={INVOICE_INTEGRATION_DATA.notice.description} />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {INVOICE_INTEGRATION_DATA.references.map((ref) => (
          <DocRef key={ref.label} label={ref.label} path={ref.path} />
        ))}
      </div>
    </SectionContainer>
  );
}
