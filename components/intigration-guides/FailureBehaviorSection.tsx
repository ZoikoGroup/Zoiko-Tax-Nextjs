import {
  HelpCircle,
  GitCommit,
  Database,
  ListFilter,
  Radio,
  FlaskConical,
  Globe,
  ShieldAlert,
  Info,
} from "lucide-react";

export default function FailureBehaviorSection() {
  return (
    <section className="bg-[#FAF3FF] px-6 py-20 lg:px-12 font-sans text-[#1C1917]">
      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            FAILURE / DEGRADED BEHAVIOR
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Unknown does not mean safe to proceed.
          </h1>
          <p className="text-sm font-normal text-[#57534E] max-w-4xl">
            Failure guidance identifies the responsible owner and next route. It
            does not prescribe invented recovery mechanics.
          </p>
        </div>

        {/* 2x4 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <HelpCircle className="h-4 w-4 text-[#D06236]" />
                Prerequisite unresolved
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Stop the assumption. Resolve the requirement with the source or
                contract owner.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Source / contract owner
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <GitCommit className="h-4 w-4 text-[#D06236]" />
                Contract/version mismatch
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Check exact syntax and governed changes before choosing the
                implementation contract.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → API Reference / Changelog
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <Database className="h-4 w-4 text-[#D06236]" />
                Source system unavailable
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Pause, defer or use only a source-supported fallback. Do not
                invent a substitute outcome.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Source-supported behavior only
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <ListFilter className="h-4 w-4 text-[#D06236]" />
                Async partial failure
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Diagnose partial outcomes at item level using the exact
                documented behavior.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Bulk &amp; Batch
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <Radio className="h-4 w-4 text-[#D06236]" />
                Event delivery issue
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Use the governed delivery documentation. Exact retry and
                ordering are Contract-defined.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Webhooks &amp; Events
            </div>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <FlaskConical className="h-4 w-4 text-[#D06236]" />
                Sandbox restricted / unavailable
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Use documentation or controlled engagement. Never bypass into
                production.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Sandbox / controlled engagement
            </div>
          </div>

          {/* Card 7 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <Globe className="h-4 w-4 text-[#D06236]" />
                Coverage unknown
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Keep support unconfirmed until the independent Coverage source
                establishes scope.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Coverage
            </div>
          </div>

          {/* Card 8 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-[#111111]">
                <ShieldAlert className="h-4 w-4 text-[#D06236]" />
                Trust evidence unavailable
              </div>
              <p className="text-base text-[#57534E] sm:ml-6 leading-relaxed">
                Seek authoritative evidence. Do not invent assurance or infer
                certification from a guide.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-semibold text-[#301153]">
              Route → Trust
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-5 shadow-sm text-[#111111]">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">No-assumption fallback</p>
            <p className="mt-1 text-[#57534E] leading-relaxed">
              Keep unresolved state explicit. Do not silently substitute another
              guide, manufacture a tax result or erase an authority boundary.
              Retry cadence, ordering, recovery limits and service commitments
              remain Contract-defined—not guaranteed by public guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
