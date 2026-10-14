"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";

const quoteComponents = [
  {
    title: "Included Services",
    icon: "/pricing-plan/icons/list.svg",
    body: "Inclusions vary by the applicable commercial context. No approved universal set is established. A source-proven inclusion must identify the scope to which it applies.",
    note: "Check the applicable quote, Product and Services sources.",
  },
  {
    title: "Add-ons",
    icon: "/pricing-plan/icons/puzzle-add-on.svg",
    body: "An active approved catalog is required before optional components can be offered. No public add-on catalog is established, and nothing is preselected or purchasable here.",
    note: "Confirm current catalog status before adding scope.",
  },
  {
    title: "Implementation",
    icon: "/pricing-plan/icons/workflow.svg",
    body: "Implementation may be included, optional, custom or separately scoped only where the Services Registry supports it. Fees, duration, staffing and go-live timing are not established.",
    note: "Agree responsibilities and service scope before commitment.",
  },
  {
    title: "Support Plans",
    icon: "/pricing-plan/icons/headphones.svg",
    body: "Support plans and eligibility require the applicable agreement and Support sources. No approved public plans, hours, channels, targets, prices or entitlements are established.",
    note: "Confirm agreement-specific terms, not a universal SLA.",
  },
];

export default function QuoteComponentsSection() {
  return (
    <SectionContainer id="quote-components" className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow="Inclusions, add-ons, implementation & support"
          title="Common quote components. Not an “all included” promise."
          description="A useful evaluation separates the component you need from the entitlement that an approved source actually supports."
          className="mb-10"
        />
      </Reveal>

      <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {quoteComponents.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-[16px] border border-[#D8CEDD] bg-white p-7 sm:p-8 shadow-sm transition-all hover:border-[#BF6735]/40 hover:shadow-md">
              <div className="flex flex-col gap-3.5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                  PUBLIC DETAIL NOT ESTABLISHED
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#18141B]">
                  {item.title}
                </h3>

                <div className="h-6 w-6">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </div>

                <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
                  {item.body}
                </p>
              </div>

              <p className="text-sm font-medium text-[#301153]">
                {item.note}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
