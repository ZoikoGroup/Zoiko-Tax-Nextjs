import Image from "next/image";
import { ArrowUpRight, Info } from "lucide-react";

export default function EvidenceTraceabilitySection() {
  return (
    <section className="relative isolate overflow-hidden font-sans px-6 py-20 lg:px-12 text-[#1C1917]">
      {/* Background Image */}
      <Image
        src="/integration/2.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-top opacity-100"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            EVIDENCE &amp; TRACEABILITY
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Preserve context across system boundaries.
          </h1>
          <p className="text-sm font-normal text-[#57534E] max-w-4xl">
            Reason about request, job, event and business-transaction
            traceability together. Exact identifier and error-field shapes
            remain Contract-defined.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Dark Card - Illustrative Example */}
          <div className="rounded-3xl bg-[#301153] p-8 text-white shadow-lg flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#A8A29E] mb-6">
                ILLUSTRATIVE EXAMPLE - EVIDENCE HANDOFF
              </p>

              {/* Step 1 */}
              <div className="rounded-2xl bg-[#120327] border border-white/10 p-5 mb-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center bg-[#D06236] text-white font-mono text-xs font-bold w-6 h-6 rounded-full shrink-0">
                    1
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    Source lineage
                  </h3>
                </div>
                <p className="text-xs text-[#D6D3D1] pl-9">
                  Retain where the business context originated.
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-2 text-[#D06236] font-bold text-sm">
                ↓
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-[#120327] border border-white/10 p-5 mb-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center bg-[#D06236] text-white font-mono text-xs font-bold w-6 h-6 rounded-full shrink-0">
                    2
                  </span>
                  <h3 className="text-sm font-bold text-white">Correlation</h3>
                </div>
                <p className="text-xs text-[#D6D3D1] pl-9">
                  Connect conceptual request/job/event and transaction context
                  across boundaries.
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-2 text-[#D06236] font-bold text-sm">
                ↓
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-[#120327] border border-white/10 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center bg-[#D06236] text-white font-mono text-xs font-bold w-6 h-6 rounded-full shrink-0">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    Decision context
                  </h3>
                </div>
                <p className="text-xs text-[#D6D3D1] pl-9">
                  Keep authority, interpretation and result context distinct.
                </p>
              </div>
            </div>

            {/* Footer text inside left card */}
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-[#A8A29E] leading-relaxed">
              Text equivalent: 1. Preserve source lineage → 2. Carry conceptual
              correlation → 3. Hand off decision context. This is not an
              evidence schema.
            </div>
          </div>

          {/* Right White Card - Authoritative Source List */}
          <div className="rounded-3xl bg-white border border-[#E7E5E4] p-8 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold tracking-tight text-[#111111] leading-snug">
                Take the question to its authoritative source.
              </h2>

              <div className="divide-y divide-[#F5F5F4]">
                {/* Item 1 */}
                <div className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                  <span className="text-xs text-[#57534E]">Exact errors</span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    API Reference <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-xs text-[#57534E]">
                    Changes / version context
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    API Changelog <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-xs text-[#57534E]">
                    Repeated delivery
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    Webhooks &amp; Events{" "}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Item 4 */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-xs text-[#57534E]">
                    Partial batch outcomes
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    Bulk &amp; Batch <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Item 5 */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-xs text-[#57534E]">
                    Safe non-production testing
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    Sandbox <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Item 6 */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-xs text-[#57534E]">Market support</span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    Coverage <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Item 7 */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-xs text-[#57534E]">
                    Security / privacy evidence
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-[#301153] hover:text-[#D06236] transition-colors"
                  >
                    Trust <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-5 shadow-sm text-[#111111]">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">
              Evidence concepts are not retention or service promises
            </p>
            <p className="mt-1 text-[#57534E] leading-relaxed">
              No real identifiers, logs, customer/subscriber details, tax
              payloads or private topology belong in public examples. Do not
              infer uniform fields, retention, replay guarantees or an SLA from
              this handoff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
