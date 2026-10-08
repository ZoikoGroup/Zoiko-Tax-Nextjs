import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const STATES = [
  { state: "APPROVED", meaning: "A current approved claim for the exact service, capability, environment and data domain. Not blanket regional support." },
  { state: "CONDITIONAL", meaning: "A claim subject to stated service, contract, environment or capability conditions. Conditions remain part of the claim." },
  { state: "PILOT / VALIDATION", meaning: "Validation scope only. Does not establish general production availability or a customer-selectable option." },
  { state: "NOT AVAILABLE", meaning: "Unavailable for the stated scope. Not a selectable deployment or residency option." },
  { state: "UNKNOWN / NOT PUBLISHED", meaning: "Missing or undisclosed approved information. No locality, support or customer choice may be inferred." },
  { state: "SUSPENDED", meaning: "A governed suspension for a stated scope only. Requires the relevant approved source and owner." }
];

export default function AvailabilityStateModelSection() {
  return (
    <SectionShell id="availability-state-model" className="bg-transparent" imageSrc="/about-us/Residency availability and state model (1).png">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-wider text-[rgba(244,162,97,1)]">
            RESIDENCY AVAILABILITY
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[47.52px] text-white">
            A state only means something with its scope.
          </h2>
          <p className="w-full text-base sm:text-lg lg:text-xl font-normal leading-8 text-[rgba(217,208,223,1)] max-w-[1060px]">
            Illustrative taxonomy below — not actual region states, supported locations or customer entitlements.
          </p>
        </div>

        <div className="flex flex-row gap-4.5 rounded-2xl bg-[rgba(29,3,59,1)] border border-[rgba(118,89,137,1)] p-6">
          <Info className="w-5.5 h-5.5 text-[rgba(244,162,97,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-bold text-white">
              Approved public location scope is not supplied in this view
            </h4>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
              No country, region, location default or hosting topology is established by the supplied sources. Missing, stale or conflicted data blocks a residency promise; it must not be presented as positive locality or support.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {STATES.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 py-5 border-b border-[rgba(118,89,137,1)]">
              <span className="text-[15px] font-bold text-[rgba(244,162,97,1)] md:w-[280px] shrink-0 uppercase tracking-wider">{item.state}</span>
              <p className="text-[17px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                {item.meaning}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-12 pt-4">
          <div className="flex flex-col gap-1.5">
            <Link
              href="/trust/"
              className="text-[15px] font-semibold text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
            >
              Trust Center <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-[12px] text-[rgba(217,208,223,1)]">/trust/</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Link
              href="/trust/evidence-auditability/"
              className="text-[15px] font-semibold text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
            >
              Evidence & Auditability <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-[12px] text-[rgba(217,208,223,1)]">/trust/evidence-auditability/</span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
