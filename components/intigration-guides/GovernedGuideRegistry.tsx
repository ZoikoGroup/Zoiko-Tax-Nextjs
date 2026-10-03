import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  CreditCard,
  FileText,
  Layers,
  Network,
  Database,
  Cpu,
} from "lucide-react";

export default function GovernedGuideRegistry() {
  return (
    <section className="relative isolate overflow-hidden font-sans">
      {/* Background Image */}
      <Image
        src="/integration/2.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-top opacity-100"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        {/* Header Content */}
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            FIND YOUR ARCHITECTURE CONTEXT
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Start with the problem. Then choose a pattern.
          </h2>
          <p className="text-sm font-normal text-[#57534E]">
            Browse by system family, implementation surface and intent—not by an
            assumed production capability.
          </p>
        </div>

        {/* Search & Filter Box */}
        <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Search Input */}
            <div className="lg:col-span-8 flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#1C1917]">
                Search integration guides
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#78716C]" />
                <input
                  type="text"
                  placeholder="Search controlled public title, purpose, family or aliases"
                  className="w-full rounded-xl border border-[#D6D3D1] bg-white py-2.5 pl-10 pr-12 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#D06236] focus:outline-none focus:ring-1 focus:ring-[#D06236]"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded bg-[#F5F5F4] px-1.5 py-0.5 text-[10px] font-medium text-[#78716C] border border-[#E7E5E4]">
                  /esc
                </span>
              </div>
            </div>

            {/* Sort Results */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#1C1917]">
                Sort results
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-[#D6D3D1] bg-white py-2.5 pl-3.5 pr-10 text-sm text-[#1C1917] focus:border-[#D06236] focus:outline-none focus:ring-1 focus:ring-[#D06236]">
                  <option>Title</option>
                  <option>Family</option>
                  <option>Surface</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#78716C] pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#78716C] truncate">
                Aliases: governed, guarantee
              </p>
            </div>
          </div>

          {/* Filter Dropdowns Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#F5F5F4]">
            {/* Filter 1 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                Integration family
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-[#D6D3D1] bg-white py-2 pl-3 pr-8 text-xs text-[#1C1917] focus:border-[#D06236] focus:outline-none">
                  <option>All families - selected</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#78716C] pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#78716C] line-clamp-1">
                Billing/BSS, ERP/GL, Existing Tax Engines, E-Invoicing Networks,
                Data &amp; Enterprise Systems, OEM/Embedded
              </p>
            </div>

            {/* Filter 2 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                Implementation surface
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-[#D6D3D1] bg-white py-2 pl-3 pr-8 text-xs text-[#1C1917] focus:border-[#D06236] focus:outline-none">
                  <option>All surfaces - selected</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#78716C] pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#78716C] line-clamp-1">
                API, SDK, Webhook/Event, Bulk/Batch, Sandbox oriented
              </p>
            </div>

            {/* Filter 3 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
                Problem intent
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-[#D6D3D1] bg-white py-2 pl-3 pr-8 text-xs text-[#1C1917] focus:border-[#D06236] focus:outline-none">
                  <option>All intents - selected</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#78716C] pointer-events-none" />
              </div>
              <p className="text-[11px] text-[#78716C] line-clamp-1">
                Synchronous decision - high-volume ingestion/export,
                event-driven update - migration/coexistence - accounting /
                reconciliation - emulation /OEM
              </p>
            </div>
          </div>

          {/* Subtext and Clear Filters */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
            <p className="text-[11px] text-[#78716C]">
              Recommended / illustrative taxonomy—not registry-verified. Share
              any controlled public search values; never raw private IDs.
            </p>
            <button
              type="button"
              className="text-xs font-semibold text-[#D06236] hover:underline text-left sm:text-right shrink-0"
            >
              Clear filters
            </button>
          </div>
        </div>

        {/* Section Header: Governed guide registry */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#111111]">
            Governed guide registry
          </h3>
          <p className="text-xs text-[#78716C]">
            6 illustrative specimens - all families shown
          </p>
        </div>

        {/* Warning Banner */}
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-[#E7C5D2] bg-[#FDF2F4] p-4 text-[#8C1D40]">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-[#D03855]" />
          <div className="text-xs">
            <p className="font-semibold">
              Approved guide metadata is not supplied in this view
            </p>
            <p className="mt-0.5 text-[#5C1425]">
              These specimens demonstrate a recommended registry pattern, not
              published guide availability. A registry cannot invent
              compatibility, prerequisites, contracts, entitlements, Coverage or
              Trust claims.
            </p>
          </div>
        </div>

        {/* Grid of 6 Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D06236]">
                <CreditCard className="h-4 w-4" />
                Billing/BSS
              </div>
              <h4 className="text-lg font-bold text-[#111111]">
                Billing/BSS decision handoff
              </h4>
              <p className="text-xs text-[#57534E]">
                Understand a synchronous decision boundary before a billing
                handoff.
              </p>
              <div className="rounded-lg bg-[#FAF8FC] p-3 border border-[#E7E5E4]">
                <p className="text-[11px] font-medium text-[#78716C]">
                  Illustrative guide pattern - not a published technical
                  contract
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-[#57534E]">
                <p>
                  <strong className="text-[#1C1917]">
                    Recommended surface:
                  </strong>{" "}
                  API • Sandbox oriented
                </p>
                <p>
                  <strong className="text-[#1C1917]">Currentness:</strong>{" "}
                  approved metadata not supplied
                </p>
                <p>
                  <strong className="text-[#1C1917]">Prerequisites:</strong>{" "}
                  Customer-specific / contract-defined
                </p>
                <p>
                  <strong className="text-[#1C1917]">Compatibility:</strong> API
                  Reference / ChargeLog
                </p>
                <p>
                  <strong className="text-[#1C1917]">Related docs:</strong> AI
                  Reference • Sandbox
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5F5F4] flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D06236] hover:underline"
              >
                Open guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[10px] text-[#A8A29E]">
                Conceptual demonstration only
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D06236]">
                <FileText className="h-4 w-4" />
                ERP/GL
              </div>
              <h4 className="text-lg font-bold text-[#111111]">
                Accounting reconciliation context
              </h4>
              <p className="text-xs text-[#57534E]">
                Plan the handoff between fiscal outcomes and accounting
                reconciliation.
              </p>
              <div className="rounded-lg bg-[#FAF8FC] p-3 border border-[#E7E5E4]">
                <p className="text-[11px] font-medium text-[#78716C]">
                  Illustrative guide pattern - not a published technical
                  contract
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-[#57534E]">
                <p>
                  <strong className="text-[#1C1917]">
                    Recommended surface:
                  </strong>{" "}
                  Bulk/Batch • API
                </p>
                <p>
                  <strong className="text-[#1C1917]">Currentness:</strong>{" "}
                  approved metadata not supplied
                </p>
                <p>
                  <strong className="text-[#1C1917]">Prerequisites:</strong>{" "}
                  Customer-specific / contract-defined
                </p>
                <p>
                  <strong className="text-[#1C1917]">Compatibility:</strong> API
                  Reference / ChargeLog
                </p>
                <p>
                  <strong className="text-[#1C1917]">Related docs:</strong> Bulk
                  &amp; Batch • API Reference
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5F5F4] flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D06236] hover:underline"
              >
                Open guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[10px] text-[#A8A29E]">
                Conceptual demonstration only
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D06236]">
                <Layers className="h-4 w-4" />
                Existing Tax Engines
              </div>
              <h4 className="text-lg font-bold text-[#111111]">
                Coexistence and comparison
              </h4>
              <p className="text-xs text-[#57534E]">
                Separate incumbent outputs from governed authority during
                migration.
              </p>
              <div className="rounded-lg bg-[#FAF8FC] p-3 border border-[#E7E5E4]">
                <p className="text-[11px] font-medium text-[#78716C]">
                  Illustrative guide pattern - not a published technical
                  contract
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-[#57534E]">
                <p>
                  <strong className="text-[#1C1917]">
                    Recommended surface:
                  </strong>{" "}
                  API • SDK
                </p>
                <p>
                  <strong className="text-[#1C1917]">Currentness:</strong>{" "}
                  approved metadata not supplied
                </p>
                <p>
                  <strong className="text-[#1C1917]">Prerequisites:</strong>{" "}
                  Customer-specific / contract-defined
                </p>
                <p>
                  <strong className="text-[#1C1917]">Compatibility:</strong> API
                  Reference / ChargeLog
                </p>
                <p>
                  <strong className="text-[#1C1917]">Related docs:</strong> API
                  Reference • SDKs
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5F5F4] flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D06236] hover:underline"
              >
                Open guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[10px] text-[#A8A29E]">
                Conceptual demonstration only
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D06236]">
                <Network className="h-4 w-4" />
                E-Invoicing Networks
              </div>
              <h4 className="text-lg font-bold text-[#111111]">
                External network handoff
              </h4>
              <p className="text-xs text-[#57534E]">
                Distinguish transport, network status and external authority.
              </p>
              <div className="rounded-lg bg-[#FAF8FC] p-3 border border-[#E7E5E4]">
                <p className="text-[11px] font-medium text-[#78716C]">
                  Illustrative guide pattern - not a published technical
                  contract
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-[#57534E]">
                <p>
                  <strong className="text-[#1C1917]">
                    Recommended surface:
                  </strong>{" "}
                  Webhook/Event • API
                </p>
                <p>
                  <strong className="text-[#1C1917]">Currentness:</strong>{" "}
                  approved metadata not supplied
                </p>
                <p>
                  <strong className="text-[#1C1917]">Prerequisites:</strong>{" "}
                  Customer-specific / contract-defined
                </p>
                <p>
                  <strong className="text-[#1C1917]">Compatibility:</strong> API
                  Reference / ChargeLog
                </p>
                <p>
                  <strong className="text-[#1C1917]">Related docs:</strong>{" "}
                  Webhooks &amp; Events • API Reference
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5F5F4] flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D06236] hover:underline"
              >
                Open guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[10px] text-[#A8A29E]">
                Conceptual demonstration only
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D06236]">
                <Database className="h-4 w-4" />
                Data &amp; Enterprise Systems
              </div>
              <h4 className="text-lg font-bold text-[#111111]">
                Enterprise data exchange
              </h4>
              <p className="text-xs text-[#57534E]">
                Plan high-volume ingestion/export and partial-outcome diagnosis.
              </p>
              <div className="rounded-lg bg-[#FAF8FC] p-3 border border-[#E7E5E4]">
                <p className="text-[11px] font-medium text-[#78716C]">
                  Illustrative guide pattern - not a published technical
                  contract
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-[#57534E]">
                <p>
                  <strong className="text-[#1C1917]">
                    Recommended surface:
                  </strong>{" "}
                  Bulk/Batch • Webhook/Event
                </p>
                <p>
                  <strong className="text-[#1C1917]">Currentness:</strong>{" "}
                  approved metadata not supplied
                </p>
                <p>
                  <strong className="text-[#1C1917]">Prerequisites:</strong>{" "}
                  Customer-specific / contract-defined
                </p>
                <p>
                  <strong className="text-[#1C1917]">Compatibility:</strong> API
                  Reference / ChargeLog
                </p>
                <p>
                  <strong className="text-[#1C1917]">Related docs:</strong> Bulk
                  &amp; Batch • Webhooks &amp; Events
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5F5F4] flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D06236] hover:underline"
              >
                Open guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[10px] text-[#A8A29E]">
                Conceptual demonstration only
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D06236]">
                <Cpu className="h-4 w-4" />
                OEM/Embedded
              </div>
              <h4 className="text-lg font-bold text-[#111111]">
                Embedded responsibility boundary
              </h4>
              <p className="text-xs text-[#57534E]">
                Define embedded roles without assuming customer entitlement.
              </p>
              <div className="rounded-lg bg-[#FAF8FC] p-3 border border-[#E7E5E4]">
                <p className="text-[11px] font-medium text-[#78716C]">
                  Illustrative guide pattern - not a published technical
                  contract
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-[#57534E]">
                <p>
                  <strong className="text-[#1C1917]">
                    Recommended surface:
                  </strong>{" "}
                  SDK • API
                </p>
                <p>
                  <strong className="text-[#1C1917]">Currentness:</strong>{" "}
                  approved metadata not supplied
                </p>
                <p>
                  <strong className="text-[#1C1917]">Prerequisites:</strong>{" "}
                  Customer-specific / contract-defined
                </p>
                <p>
                  <strong className="text-[#1C1917]">Compatibility:</strong> SDK
                  • API Reference
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F5F5F4] flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D06236] hover:underline"
              >
                Open guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-[10px] text-[#A8A29E]">
                Conceptual demonstration only
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-xs text-[#78716C] leading-relaxed">
          Recommended publication ownership: technical owner with production
          engineering approval. Controlled contracts supersede prose; stale or
          unsafe guidance is suppressed with an authoritative documentation
          fallback.
        </div>
      </div>
    </section>
  );
}
