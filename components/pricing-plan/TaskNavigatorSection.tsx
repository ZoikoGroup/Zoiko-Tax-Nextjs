"use client";

import React from "react";
import Link from "next/link";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const topicRows = [
  [
    { num: "01", title: "Overview", desc: "Start with the model, drivers and source boundaries.", href: "#overview" },
    { num: "02", title: "Platform Subscription", desc: "Understand quote-governed platform access.", href: "#price-drivers" },
    { num: "03", title: "Usage & Volume", desc: "Separate approved measurement from telemetry.", href: "#price-drivers" },
  ],
  [
    { num: "04", title: "Tax Determination", desc: "Clarify commercial scope, not tax advice.", href: "#price-drivers" },
    { num: "05", title: "Filing & Compliance", desc: "Distinguish service scope from filing outcomes.", href: "#price-drivers" },
    { num: "06", title: "Regulatory Data", desc: "Confirm content and licensing scope.", href: "#price-drivers" },
  ],
  [
    { num: "07", title: "Developer & API", desc: "Separate entitlements from technical documentation.", href: "#price-drivers" },
    { num: "08", title: "Custom & Enterprise", desc: "Scope architecture, services and commercial terms.", href: "#price-drivers" },
    { num: "09", title: "Included Services", desc: "Check context-specific inclusions.", href: "#quote-components" },
  ],
  [
    { num: "10", title: "Add-ons", desc: "Review only a published active catalog.", href: "#quote-components" },
    { num: "11", title: "Implementation", desc: "Establish services scope before commitments.", href: "#quote-components" },
    { num: "12", title: "Support Plans", desc: "Confirm agreement-specific support terms.", href: "#quote-components" },
  ],
  [
    { num: "13", title: "Discounts & Commitments", desc: "Use only current approved policy.", href: "#commercial-terms" },
    { num: "14", title: "Regional & Currency", desc: "Separate commercial context from Coverage.", href: "#commercial-terms" },
    { num: "15", title: "Estimator", desc: "Build a non-sensitive summary, not a price.", href: "#estimator" },
  ],
  [
    { num: "16", title: "FAQs", desc: "Read direct answers without inferred promises.", href: "#faqs" },
    { num: "17", title: "Terms & Billing", desc: "Use applicable approved commercial documents.", href: "#commercial-terms" },
    { num: "18", title: "Nonprofit & Public Sector", desc: "Check whether public program sources exist.", href: "#special-programs" },
  ],
  [
    { num: "19", title: "Telecom Ecosystem", desc: "Clarify agreement-based ecosystem context.", href: "#special-programs" },
    { num: "20", title: "Legacy & Migration", desc: "Plan fair transition, expansion or downscope.", href: "#special-programs" },
    { num: "21", title: "Pricing for Startups", desc: "Do not assume startup credits or eligibility.", href: "#special-programs" },
  ],
];

export default function TaskNavigatorSection() {
  return (
    <SectionContainer id="task-navigator" className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow="Find your pricing question"
          title="Explore the model, one topic at a time."
          description="All 21 topics are covered below. This is a reading guide to this page; separate topic destinations are not established."
          className="mb-10 !max-w-none w-full"
          descriptionClassName="!max-w-none lg:whitespace-nowrap"
        />
      </Reveal>

      {/* 7 Topic Rows matching Figma #1484:16097 - #1484:16145 */}
      <div className="flex flex-col">
        {topicRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 gap-6 border-t border-[#D8CEDD] py-[22px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[36px]"
          >
            {row.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group flex flex-col gap-2 rounded-lg p-2 transition-all hover:translate-x-1"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#D65A2C]">
                    {item.num}
                  </span>
                  <h3 className="text-base font-bold text-[#301153] transition-colors group-hover:text-[#BF6735]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm font-normal leading-[1.5] text-[#665F69]">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
