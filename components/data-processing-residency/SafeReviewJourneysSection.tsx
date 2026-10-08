import { ArrowDownRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const MEANINGS = [
  {
    term: "Approved · Conditional · Pilot",
    definition: "Exact approved claim · Stated conditions remain binding · Validation is not general production"
  },
  {
    term: "Unavailable · Unknown · Suspended",
    definition: "Not selectable · No supported claim can be inferred · Governed suspension only"
  },
  {
    term: "Stale · Conflict · Controlled evidence",
    definition: "Withhold a current promise · Owner review required · Disclosure conditional on approved process"
  }
];

const REVIEWER_STEPS = [
  {
    title: "Identify the domain",
    desc: "Separate application, evidence, support, recovery and third parties."
  },
  {
    title: "Choose the dimension",
    desc: "Storage, processing, copies and access are distinct questions."
  },
  {
    title: "Verify scope & source",
    desc: "Service, capability, environment, owner and currentness must match."
  },
  {
    title: "Read evidence visibility",
    desc: "Public, controlled, customer-specific and unavailable remain distinct."
  },
  {
    title: "Route legal & security questions",
    desc: "Privacy governs transfers; Security governs controls."
  }
];

const SCOPE_DATA = [
  { label: "Domain / dimension", value: "Customer application / deployment choice" },
  { label: "Service / capability / environment", value: "Exact scope not supplied" },
  { label: "Source / owner / currentness", value: "Not supplied — approved source required" },
  { label: "State / option", value: "Unknown / Not published; no choice established" }
];

export default function SafeReviewJourneysSection() {
  return (
    <SectionShell id="safe-review-journeys" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="SAFE REVIEW JOURNEYS"
          title="When evidence is unknown, stop the inference."
          description={<span className="block whitespace-nowrap">Illustrative review meanings, not actual residency options. Read the scope and source in text — never status color alone.</span>}
        />

        <div className="p-7 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-5">
          {MEANINGS.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8">
              <div className="md:w-96 shrink-0 text-base font-normal text-[rgba(48,17,83,1)] leading-6">
                {item.term}
              </div>
              <div className="flex-1 text-base font-normal text-[rgba(102,95,105,1)] leading-6">
                {item.definition}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-3xl font-normal text-[rgba(24,20,27,1)] mb-1">
              For a procurement reviewer
            </h3>
            {REVIEWER_STEPS.map((step, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-[rgba(216,206,221,1)] flex flex-row gap-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowDownRight className="w-5 h-5 text-[rgba(214,90,44,1)]" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-base font-normal text-[rgba(24,20,27,1)]">{step.title}</h4>
                  <p className="text-sm font-normal text-[rgba(102,95,105,1)] leading-5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="xl:w-[450px] shrink-0 p-8 bg-[rgba(48,17,83,1)] rounded-3xl flex flex-col gap-5">
            <span className="text-xs font-bold text-[rgba(244,162,97,1)] tracking-wider">
              STACKED SCOPE CARD · ILLUSTRATIVE
            </span>
            <h3 className="text-3xl font-normal text-white leading-8">
              Can I choose a deployment<br/>region?
            </h3>
            
            <div className="flex flex-col gap-4 mt-2">
              {SCOPE_DATA.map((item, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-[rgba(244,162,97,1)]">
                    {item.label}
                  </span>
                  <span className="text-base font-normal text-[rgba(216,206,221,1)] leading-6">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm font-normal text-[rgba(216,206,221,1)] leading-6 mt-1 whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              Customer option question → verify eligibility<br/>separately. Unknown data → no geographic<br/>guess. This stacked alternative preserves<br/>dimension, scope, currentness and qualifiers<br/>without a region picker or location<br/>personalization.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
