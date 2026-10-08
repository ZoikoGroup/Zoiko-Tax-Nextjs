import Image from "next/image";
import { Copy, Info } from "lucide-react";

export default function AnatomySection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#110B1E] font-sans text-white px-6 py-20 lg:px-12">
      {/* Background Image */}
      <Image
        src="/integration/4.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-30"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            ILLUSTRATIVE EXAMPLE
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[40px] leading-tight">
            Learn the anatomy. Do not copy a contract.
          </h1>
          <p className="text-sm font-normal text-[#D6D3D1] max-w-4xl">
            Illustrative example — conceptual anatomy, not production syntax.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl bg-[#190B2B] border border-[#604272] p-6 lg:p-8 shadow-xl backdrop-blur-md mb-6">
          {/* Top Bar inside Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8A29E]">
              NEUTRAL ACTORS · EXPLICIT PLACEHOLDERS
            </span>
            <button className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors w-fit">
              <Copy className="h-3.5 w-3.5 text-[#A8A29E]" />
              Copy conceptual anatomy
            </button>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-4 border-b border-white/5 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Pattern
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Billing/BSS decision handoff — conceptual]
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-4 border-b border-white/5 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Actors
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Customer/source system] · [ZoikoTax integration] · [Downstream
                system]
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-4 border-b border-white/5 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Trigger
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Source-owned business action]
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-4 border-b border-white/5 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Contract
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Current governed contract — consult API Reference]
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-4 border-b border-white/5 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Authority
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Source owner] / [Supported ZoikoTax authority] / [Downstream
                owner]
              </div>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-4 border-b border-white/5 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Failure path
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Unresolved state] → [Responsible owner] → [Source-supported or
                contract-defined response]
              </div>
            </div>

            {/* Row 7 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center pb-2 gap-2">
              <div className="md:col-span-2 text-xs font-bold text-[#D06236]">
                Evidence
              </div>
              <div className="md:col-span-10 text-xs font-mono text-[#D6D3D1]">
                [Source lineage] + [Correlation context] + [Decision context]
              </div>
            </div>
          </div>

          {/* Footer note inside card */}
          <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-[#A8A29E] leading-relaxed">
            Safe conceptual text only. No endpoint, method, schema, hostname,
            credential, version, package, queue, event name, limit or retry
            cadence is specified.
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#301153] p-5 shadow-lg backdrop-blur-md text-white">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">Public guide / production contract</p>
            <p className="mt-1 text-[#D6D3D1] leading-relaxed">
              Exact implementation is governed by current API/SDK/Event/Bulk
              contracts. This illustrative anatomy is non-executable and creates
              no production entitlement, security assurance or live Coverage
              claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
