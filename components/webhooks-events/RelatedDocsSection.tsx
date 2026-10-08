"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RELATED_DOCS_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, LAVENDER } from "./shared";

export default function RelatedDocsSection() {
  return (
    <SectionContainer id="related-docs" className={clsx(LAVENDER, "scroll-mt-24")}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow={RELATED_DOCS_DATA.eyebrow}
            title={RELATED_DOCS_DATA.title}
            description={RELATED_DOCS_DATA.description}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_DOCS_DATA.items.map((item, idx) => (
            <Reveal key={item.title} delay={0.03 * (idx % 3)} className="h-full">
              <Link
                href={item.href}
                className="group h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3 transition-all hover:border-[#BF6735]/50 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl text-[#18141B]">{item.title}</h3>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 mt-1 text-[#D65A2C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base leading-6 text-[#665F69]">{item.description}</p>
                <span className="mt-auto text-xs text-[#D65A2C] break-all">{item.path}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
