import Image from "next/image";
import { Info } from "lucide-react";

export default function AuthorityTableSection() {
  return (
    <section className="relative isolate overflow-hidden font-sans px-6 py-20 lg:px-12">
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
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            AUTHORITY &amp; RESPONSIBILITY
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Integration convenience is not authority.
          </h1>
          <p className="text-sm font-normal text-[#57534E] max-w-4xl">
            Implementation convenience cannot erase source/customer, ZoikoTax,
            incumbent or external authority boundaries.
          </p>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-[#E7E5E4] bg-white shadow-sm overflow-hidden mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#301153] px-6 py-4 text-white text-[11px] font-bold uppercase tracking-wider">
            <div className="lg:col-span-3">ACTOR / RESPONSIBILITY</div>
            <div className="lg:col-span-4">GUIDE MAY DESCRIBE</div>
            <div className="lg:col-span-5">MUST NOT IMPLY</div>
          </div>

          {/* Row 1 (Odd) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 px-6 py-5 border-b border-[#F5F5F4] items-center gap-4 bg-white transition-colors">
            <div className="lg:col-span-3 text-xs font-bold text-[#111111]">
              Customer / source system
            </div>
            <div className="lg:col-span-4 text-xs text-[#57534E]">
              Source-owned facts, context and initiating business workflow.
            </div>
            <div className="lg:col-span-5 text-xs text-[#57534E]">
              No upstream data-quality guarantee or transfer of customer
              responsibility.
            </div>
          </div>

          {/* Row 2 (Even) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 px-6 py-5 border-b border-[#F5F5F4] items-center gap-4 bg-[#F3EBF8] transition-colors">
            <div className="lg:col-span-3 text-xs font-bold text-[#111111]">
              ZoikoTax integration layer
            </div>
            <div className="lg:col-span-4 text-xs text-[#57534E]">
              Conceptual interpretation and handoff at a governed surface.
            </div>
            <div className="lg:col-span-5 text-xs text-[#57534E]">
              No disclosure or invention of a private protocol, topology or
              credential.
            </div>
          </div>

          {/* Row 3 (Odd) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 px-6 py-5 border-b border-[#F5F5F4] items-center gap-4 bg-white transition-colors">
            <div className="lg:col-span-3 text-xs font-bold text-[#111111]">
              ZoikoTax authoritative workflow
            </div>
            <div className="lg:col-span-4 text-xs text-[#57534E]">
              Supported deterministic authority within governed scope.
            </div>
            <div className="lg:col-span-5 text-xs text-[#57534E]">
              No universal fiscal/accounting control or automatic entitlement.
            </div>
          </div>

          {/* Row 4 (Even) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 px-6 py-5 border-b border-[#F5F5F4] items-center gap-4 bg-[#F3EBF8] transition-colors">
            <div className="lg:col-span-3 text-xs font-bold text-[#111111]">
              Incumbent / existing engine
            </div>
            <div className="lg:col-span-4 text-xs text-[#57534E]">
              Coexistence, comparison and independently owned outputs.
            </div>
            <div className="lg:col-span-5 text-xs text-[#57534E]">
              No automatic truth, silent cutover or authority granted by
              comparison.
            </div>
          </div>

          {/* Row 5 (Odd) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 px-6 py-5 border-b border-[#F5F5F4] items-center gap-4 bg-white transition-colors">
            <div className="lg:col-span-3 text-xs font-bold text-[#111111]">
              External network / authority
            </div>
            <div className="lg:col-span-4 text-xs text-[#57534E]">
              A transport or external-status boundary where applicable.
            </div>
            <div className="lg:col-span-5 text-xs text-[#57534E]">
              No universal regulator clearance or network acceptance guarantee.
            </div>
          </div>

          {/* Row 6 (Even) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 px-6 py-5 items-center gap-4 bg-[#F3EBF8] transition-colors">
            <div className="lg:col-span-3 text-xs font-bold text-[#111111]">
              Evidence / audit layer
            </div>
            <div className="lg:col-span-4 text-xs text-[#57534E]">
              Conceptual lineage, correlation and decision-context handoff.
            </div>
            <div className="lg:col-span-5 text-xs text-[#57534E]">
              No uniform evidence fields, retention period or audit assurance.
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-5 shadow-sm text-[#111111] mb-8">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">
              Keep authority visible in every operating context
            </p>
            <p className="mt-1 text-[#57534E] leading-relaxed">
              Native, coexistence, Shadow and federated roles must remain
              distinguishable. Validate who decides, who compares, who
              transports and who keeps evidence before assessing availability.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-xs text-[#78716C] leading-relaxed">
          Recommended reading pattern: actor → described responsibility →
          explicit limit. Resolve each role with the responsible owner;
          comparison, transport and evidence are not substitutes for
          authoritative decisions.
        </div>
      </div>
    </section>
  );
}
