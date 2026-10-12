"use client";

import React from "react";
import Image from "next/image";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

interface PrerequisiteCard {
  icon: string;
  title: string;
  description: string;
}

const PREREQUISITES: PrerequisiteCard[] = [
  {
    icon: "/coverage-production/icons/prereq-account.svg",
    title: "Approved pack",
    description:
      "Verify the pack applicable to the scoped capability. An existing pack does not enable every capability.",
  },
  {
    icon: "/coverage-production/icons/prereq-credentials.svg",
    title: "Relevant capability configuration",
    description:
      "Confirm the configuration permitted for the capability and service context in the source.",
  },
  {
    icon: "/coverage-production/icons/prereq-network.svg",
    title: "Enterprise integration",
    description:
      "Check source-approved integration dependencies against the architecture you intend to operate.",
  },
  {
    icon: "/coverage-production/icons/prereq-document.svg",
    title: "Commercial entitlement",
    description:
      "Confirm applicable contractual access separately. A coverage designation is not a purchase or access right.",
  },
  {
    icon: "/coverage-production/icons/prereq-audit.svg",
    title: "Validation gates",
    description:
      "Where required by the record, confirm that the relevant validation and approval gates are satisfied.",
  },
  {
    icon: "/coverage-production/icons/prereq-boundary.svg",
    title: "Managed operation requirements",
    description:
      "Where applicable, verify the separately approved managed service layer. Production software does not grant managed operations.",
  },
];

export default function PreconditionsBoundariesSection() {
  return (
    <SectionContainer id="preconditions" className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Conditions of use"
            title="Availability is not purchase or activation."
            description="Possible source-controlled prerequisites — verify the record"
            className="mb-0"
          />

          {/* 6 Prerequisites Grid matching exact Figma cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PREREQUISITES.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 rounded-2xl border border-[#D8CEDD] bg-white p-7 min-h-[238px] shadow-sm transition hover:shadow-md"
              >
                {/* 24x24 SVG Icon */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 text-[#301153]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-semibold text-[#18141B] leading-[1.2] font-['Inter',sans-serif]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] font-normal leading-[1.55] text-[#665F69] font-['Inter',sans-serif]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Source Boundary */}
          <SourceBoundary text="These are conditional checks, not universal required product facts. Production does not promise access, automatic activation, a trial, managed service or legal compliance." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
