import { Info } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const MATRIX_ROWS = [
  {
    topic: "Review gate",
    requirement:
      "Approved roles, the decision being reviewed and when human confirmation is required.",
    boundary:
      "Suggestions are not automatically accepted. Human review applies only as defined by the source.",
  },
  {
    topic: "Ambiguity & escalation",
    requirement:
      "Applicable ambiguity or low-confidence conditions, escalation route and operator guidance.",
    boundary:
      "Do not infer thresholds, a review cadence or an escalation tool.",
  },
  {
    topic: "Reject, override & evidence",
    requirement:
      "Authorized decision rights and approved evidence-logging requirements.",
    boundary:
      "An override is governed action, not permission to overwrite evidence or bypass authority.",
  },
  {
    topic: "Fallback & disable states",
    requirement:
      "Verified manual fallback, supported disable states and applicable customer-side duties.",
    boundary:
      "No fallback, suspension control or continuity promise is made without source support.",
  },
];

export default function HumanOversightSection() {
  return (
    <SectionShell id="oversight" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="03 · HUMAN OVERSIGHT"
          title="Review rights must come from an approved source."
          description="This conceptual oversight matrix describes the disclosures needed to understand a use case. It does not assert an implemented review workflow, access model or fail-safe mechanism."
        />

        {/* Source requirements matrix table */}
        <div className="overflow-hidden rounded-2xl bg-white border border-[rgba(216,206,221,1)] shadow-sm">
          {/* Column labels header */}
          <div className="hidden md:grid md:grid-cols-12 gap-7 bg-[rgba(243,237,248,1)] px-7 py-4.5">
            <span className="col-span-3 text-[13px] font-bold text-[rgba(48,17,83,1)]">
              Control topic
            </span>
            <span className="col-span-5 text-[13px] font-bold text-[rgba(48,17,83,1)]">
              Source required
            </span>
            <span className="col-span-4 text-[13px] font-bold text-[rgba(48,17,83,1)]">
              Authority boundary
            </span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[rgba(216,206,221,1)]">
            {MATRIX_ROWS.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-7 p-7 items-start"
              >
                <div className="md:col-span-3">
                  <span className="text-base font-semibold text-[rgba(24,20,27,1)]">
                    {row.topic}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <span className="text-[13px] font-bold text-[rgba(48,17,83,1)] md:hidden block mb-1">
                    Source required:
                  </span>
                  <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                    {row.requirement}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <span className="text-[13px] font-bold text-[rgba(48,17,83,1)] md:hidden block mb-1">
                    Authority boundary:
                  </span>
                  <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                    {row.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Source notice */}
        <div className="w-full rounded-2xl bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)] p-6 flex items-start gap-4">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-[rgba(24,20,27,1)]">
              Unknown details route to the authorized source
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Consult the approved use-case or system record for review duties, escalation, operator instructions and customer responsibilities. A public page cannot substitute an invented procedure for a missing record.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-sm font-normal text-[rgba(102,95,105,1)]">
          Source requirements only · No operational Accept, Approve or Disable action is provided on this public page.
        </p>
      </div>
    </SectionShell>
  );
}
