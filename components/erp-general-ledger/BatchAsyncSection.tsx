import Image from "next/image";
import { FlowDirectionIcon, InfoIcon } from "./icons";

const flowSteps = ["High-volume finance handoff", "Asynchronous processing", "Governed status / result", "Reconciliation"];

const cards = [
  {
    title: "Idempotency",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Treat repeat handling as a conceptual control.</span>
        <span className="block xl:whitespace-nowrap">Exact keys, scope and semantics are API-</span>
        <span className="block xl:whitespace-nowrap">defined—not a universal duplicate-posting</span>
        <span className="block xl:whitespace-nowrap">guarantee.</span>
      </>
    ),
    tag: "API-defined semantics",
  },
  {
    title: "Retry",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Retry only as the contract allows. This guide</span>
        <span className="block xl:whitespace-nowrap">does not define schedules, counts, timing or a</span>
        <span className="block xl:whitespace-nowrap">promise of eventual posting.</span>
      </>
    ),
    tag: "Contract-defined behavior",
  },
  {
    title: "Partial failures",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Use approved result lookup and recovery</span>
        <span className="block xl:whitespace-nowrap">paths. Keep unresolved portions visible; do not</span>
        <span className="block xl:whitespace-nowrap">collapse a partial result into “complete”.</span>
      </>
    ),
    tag: "Approved lookup / recovery",
  },
  {
    title: "Validation errors",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Read exact validation codes and their handling</span>
        <span className="block xl:whitespace-nowrap">in the API documentation. Do not derive</span>
        <span className="block xl:whitespace-nowrap">account treatment from a validation response.</span>
      </>
    ),
    tag: "API Reference is authoritative",
  },
  {
    title: "Safe correlation",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Preserve approved references across</span>
        <span className="block xl:whitespace-nowrap">submission, result and reconciliation. Avoid</span>
        <span className="block xl:whitespace-nowrap">exposing sensitive finance details in</span>
        <span className="block xl:whitespace-nowrap">diagnostics.</span>
      </>
    ),
    tag: "Defined reference relationships",
  },
  {
    title: "Replay / re-run",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Use only explicitly supported behavior and</span>
        <span className="block xl:whitespace-nowrap">approved customer controls. No automatic</span>
        <span className="block xl:whitespace-nowrap">ledger adjustment or general replay permission</span>
        <span className="block xl:whitespace-nowrap">is implied.</span>
      </>
    ),
    tag: "Supported behavior only",
  },
];

export default function BatchAsyncSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            08 · BATCH, ASYNC &amp; RECOVERY
          </div>
          <h2 className="w-full text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            A finance handoff is not a posting receipt.
          </h2>
          <p className="w-full text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            For high-volume interfaces, Bulk &amp; Batch owns the exact asynchronous contract. Submission, status and result<br className="hidden lg:block" />
            semantics must be read in their documented scope.
          </p>
        </div>

        {/* Async Handoff Flow Container */}
        <div className="relative z-10 self-stretch p-6 sm:p-8 bg-[#F4EEF9] rounded-2xl sm:rounded-3xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            CONCEPTUAL ASYNC HANDOFF · EXACT CONTRACT IN BULK &amp; BATCH
          </div>
          <div className="self-stretch flex flex-wrap lg:flex-nowrap justify-between items-center gap-3 sm:gap-4">
            {flowSteps.map((step, index) => (
              <div key={step} className="flex-1 min-w-[200px] flex justify-start items-center gap-3 sm:gap-4">
                <div className="flex-1 min-h-[96px] p-4 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-between items-start">
                  <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="self-stretch text-[#18141B] text-sm sm:text-base font-semibold font-['Inter',sans-serif] leading-tight whitespace-nowrap">
                    {step}
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:flex shrink-0 items-center justify-center">
                    <FlowDirectionIcon className="w-[15px] h-[13px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 min-h-[200px]"
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                  {card.title}
                </div>
                <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                  {card.desc}
                </div>
              </div>
              <div className="mt-auto text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {card.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice Callout */}
        <div className="relative z-10 self-stretch p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex justify-start items-start gap-3.5 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Acceptance ≠ completed ledger posting
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block lg:whitespace-nowrap">
                An accepted submission or transfer signal does not establish that ERP/GL processing or posting completed. Exact status meaning, result retrieval and
              </span>
              <span className="block lg:whitespace-nowrap">
                recovery belong to the approved contract.
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 self-stretch flex flex-wrap justify-start items-start gap-3">
          <div className="h-10 px-5 bg-[rgba(191,103,53,1)] hover:bg-[#a85527] rounded-full border border-[rgba(221,114,53,1)] shadow-sm flex justify-start items-center gap-1.5 transition-all cursor-pointer">
            <span className="text-white text-xs sm:text-sm font-semibold font-['Inter',sans-serif]">Open Bulk &amp; Batch</span>
            <span className="text-white text-sm font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
          <div className="h-10 px-5 bg-white hover:bg-neutral-50 rounded-full border border-[#D8CEDD] flex justify-start items-center gap-1.5 transition-all cursor-pointer">
            <span className="text-[#18141B] text-xs sm:text-sm font-semibold font-['Inter',sans-serif]">Open API Reference</span>
            <span className="text-[#D65A2C] text-sm font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}


