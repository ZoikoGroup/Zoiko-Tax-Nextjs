"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";

const dimensions = [
  {
    title: "Platform access",
    icon: "/pricing-plan/icons/layers.svg",
    description:
      "A fixed or scoped access dimension may apply only when the commercial source defines it. No recurring cadence or blanket capability access is established.",
  },
  {
    title: "Scoped capabilities",
    icon: "/pricing-plan/icons/sliders-horizontal.svg",
    description:
      "Required capability and licensing scope may shape a quote. Capability scope is not a promise of availability or correctness.",
  },
  {
    title: "Approved usage",
    icon: "/pricing-plan/icons/activity.svg",
    description:
      "A usage dimension may apply where an approved registry defines the unit and measurement. Telemetry alone does not establish a billable unit.",
  },
  {
    title: "Services & support",
    icon: "/pricing-plan/icons/handshake.svg",
    description:
      "Implementation and support may be separately scoped, included or optional only under applicable approved sources.",
  },
  {
    title: "Optional components",
    icon: "/pricing-plan/icons/puzzle.svg",
    description:
      "Additional components may apply only when an active, approved catalog supports them. No purchasable add-on set is published here.",
  },
  {
    title: "Commercial terms",
    icon: "/pricing-plan/icons/file-text.svg",
    description:
      "A term-based dimension may apply when the quote and approved policy govern commitments, currency and contractual conditions.",
  },
];

export default function PricingModelGlanceSection() {
  return (
    <SectionContainer
      id="model-at-a-glance"
      className="bg-[#FAF3FF] bg-cover bg-center"
      style={{ backgroundImage: `url('/pricing-plan/Menu-Background-Image.png')` }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="Pricing model at a glance"
            title="One operating scope. Several commercial dimensions."
            description="These are potential quote dimensions—not published plans, universal inclusions or a formula for calculating a price."
          />
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {dimensions.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex h-full flex-col gap-4 rounded-[16px] border border-[#D8CEDD] bg-white p-7 transition-all hover:border-[#BF6735]/40 hover:shadow-md">
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
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Bottom disclaimer matching Figma node #1484:16090 */}
        <Reveal delay={0.1}>
          <p className="text-sm font-normal leading-[1.5] text-[#665F69]">
            Fixed, scoped, usage, service and term dimensions are shown only as concepts. The applicable commercial source determines which, if any, apply to your scope.
          </p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

