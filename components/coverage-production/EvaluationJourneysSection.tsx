"use client";

import React from "react";
import Image from "next/image";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  SecondaryButton,
  Reveal,
} from "./shared";

interface JourneyCard {
  icon: string;
  title: string;
  intent: string;
  steps: string[];
  destinationNote: string;
  actionText?: string;
  actionHref?: string;
}

const JOURNEYS: JourneyCard[] = [
  {
    icon: "/coverage-production/icons/journey-architect.svg",
    title: "Buyer",
    intent: "Evaluate a scoped capability, not a platform-wide promise.",
    steps: [
      "Understand the status",
      "Current coverage record",
      "Capability detail",
      "Approved evidence / Trust",
      "Book a Demo",
    ],
    destinationNote: "Evidence and Trust destinations · Information pending",
    actionText: "Book a Demo",
    actionHref: "#demo",
  },
  {
    icon: "/coverage-production/icons/journey-compliance.svg",
    title: "Developer",
    intent:
      "Check applicability before assessing implementation feasibility.",
    steps: [
      "Understand the status",
      "Integration applicability",
      "Approved APIs / documentation",
      "Feasibility dialogue",
    ],
    destinationNote: "Developer and API destinations · Information pending",
    actionText: "Book a Demo",
    actionHref: "#demo",
  },
  {
    icon: "/coverage-production/icons/journey-commercial.svg",
    title: "Existing customer",
    intent:
      "Verify your current contracted scope in an authorized customer surface.",
    steps: [
      "Use your authorized customer surface",
      "Confirm current contracted scope",
      "Review applicable conditions with your authorized contact",
    ],
    destinationNote:
      "Public coverage does not expose tenant entitlements or account details.",
  },
];

export default function EvaluationJourneysSection() {
  return (
    <SectionContainer id="evaluation-journeys" className="bg-[#FFFAFA]">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Your next step"
            title="Three paths. The same source of truth."
            description="Evaluation journeys—not guarantees of endpoint readiness, access or activation."
            className="mb-0"
          />

          {/* 3 Audience Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOURNEYS.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-7 min-h-[499px] shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-5.5">
                  {/* Icon directly inside card */}
                  <div className="w-[26px] h-[26px] flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={26}
                      height={26}
                      className="w-[26px] h-[26px] text-[#301153]"
                    />
                  </div>

                  {/* Title & Intent */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                      {card.title}
                    </h3>
                    <p className="text-[15px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                      {card.intent}
                    </p>
                  </div>

                  {/* Steps List */}
                  <div className="flex flex-col gap-3.5 pt-1">
                    {card.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#F5EFF8] text-xs font-semibold text-[#301153] font-['Inter',sans-serif]">
                          {sIdx + 1}
                        </span>
                        <span className="text-sm font-normal text-[#18141B] pt-0.5 font-['Inter',sans-serif]">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and CTA */}
                <div className="flex flex-col gap-4 pt-6 border-t border-[#D8CEDD] mt-6">
                  <p className="text-xs font-normal text-[#665F69] font-['Inter',sans-serif]">
                    {card.destinationNote}
                  </p>
                  {card.actionText && card.actionHref ? (
                    <div>
                      <SecondaryButton href={card.actionHref}>
                        {card.actionText}
                      </SecondaryButton>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Source Boundary */}
          <SourceBoundary text="Only /coverage/ and /demo/ are confirmed public destinations here. Capability, developer and Trust links must be approved before they become navigable." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
