"use client";

import React from "react";
import {
  Shield,
  Workflow,
  ReceiptText,
  ScanLine,
  Layers,
  Landmark,
  ClipboardCheck,
  Scale,
  CodeXml,
  Network,
  ListChecks,
  FileText,
  FileChartColumn,
  BookOpen,
} from "lucide-react";
import { TOPIC_ARCHITECTURE_DATA as T } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

const CLUSTER_ICONS = [Scale, ClipboardCheck, Landmark, Layers, ScanLine, ReceiptText, Workflow, Shield];
const TYPE_ICONS = [BookOpen, FileChartColumn, FileText, ListChecks, Network, CodeXml];

export default function TopicArchitectureSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/guides-reports/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#A64B22]">{T.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{T.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{T.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {T.clusters.map((cluster, i) => {
            const Icon = CLUSTER_ICONS[i];
            return (
              <Reveal key={cluster.title} delay={0.02 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5">
                  <Icon className="h-6 w-6 text-[#A64B22]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] text-[#18141B]">{cluster.title}</h3>
                  <span className="text-xs font-semibold text-[#A64B22]">{cluster.tag}</span>
                  <p className="text-sm leading-[1.65] text-[#665F69]">{cluster.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[26px] bg-[#301153] p-7 sm:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#F4A261]">{T.formatStandards.eyebrow}</span>
              <h3 className="text-2xl sm:text-[32px] text-white">{T.formatStandards.title}</h3>
              <p className="text-base leading-[1.65] text-[#D9D0DF]">{T.formatStandards.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-7">
              {T.formatStandards.types.map((type, i) => {
                const Icon = TYPE_ICONS[i];
                return (
                  <div key={type.title} className="border-t border-white/15 pt-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
                      <span className="text-lg sm:text-xl font-semibold text-white">{type.title}</span>
                    </div>
                    <p className="text-base leading-[1.65] text-[#D9D0DF]">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
