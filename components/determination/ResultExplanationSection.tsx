import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

export default function ResultExplanationSection() {
  return (
    <SectionContainer className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow="EXPLAINABILITY INTERFACE"
          title="Determination Outcome Manifest"
          description="Real-time outcome simulator interface showing workflow status and execution logic—without fake currency amounts."
          className="max-w-3xl"
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: Execution Parameters */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-7 sm:p-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)]">
            <div>
              <h3 className="text-lg font-bold text-[#18141B]">
                Execution Parameters
              </h3>

              <div className="mt-6 flex flex-col divide-y divide-[#D8CEDD]/60">
                <div className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#665F69]">Transaction Status:</span>
                  <StatusBadge status="Verified" />
                </div>
                <div className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#665F69]">Assigned Category:</span>
                  <span className="font-semibold text-[#18141B] text-right">
                    Interstate VoIP Fee / Regulatory levy
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#665F69]">Rule-Set Version:</span>
                  <span className="font-mono text-xs font-semibold text-[#18141B]">
                    US-FED-VOIP-2026.1
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#665F69]">Execution Path:</span>
                  <span className="font-medium text-[#18141B]">
                    Deterministic Code (Branch 42)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: Explainability Log & Provenance */}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-7 sm:p-8 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)]">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-[#18141B]">
                Explainability Log & Provenance
              </h3>

              <div className="mt-2 flex flex-col gap-4 text-sm leading-relaxed text-[#535055]">
                <p>
                  <strong className="font-bold text-[#18141B]">Why Applied: </strong>
                  The incoming transaction was classified under VoIP service code with both
                  physical endpoints originating across distinct state borders, triggering
                  FCC interstate regulatory rules.
                </p>
                <p>
                  <strong className="font-bold text-[#18141B]">Audit Trail Reference: </strong>
                  Signed hash matches rule manifest{" "}
                  <code className="rounded bg-[#E9DDF1]/60 px-1.5 py-0.5 font-mono text-xs text-[#18141B]">
                    sha256:7f990932...
                  </code>{" "}
                  with temporal lock date active from Jan 1, 2026.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8CEDD]/60">
              <Link
                href="#replay"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#D65A2C] transition-colors hover:text-[#BF6735]"
              >
                <span>Replay full audit evidence</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
