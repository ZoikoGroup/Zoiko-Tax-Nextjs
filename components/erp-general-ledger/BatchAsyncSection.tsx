import Image from "next/image";
import { BellIcon, BracesIcon, DownloadIcon, FlowDirectionIcon, InfoIcon, LinkSvgIcon, PackageIcon } from "./icons";

const flowSteps = ["High-volume finance handoff", "Asynchronous processing", "Governed status / result", "Reconciliation"];

const cards = [
  {
    icon: <BracesIcon className="size-5 text-[#D65A2C]" />,
    title: "Idempotency",
    desc: "Treat repeat handling as a conceptual control. Exact keys, scope and semantics are API-defined—not a universal duplicate-posting guarantee.",
    tag: "API-defined semantics",
  },
  {
    icon: <DownloadIcon className="size-5 text-[#D65A2C]" />,
    title: "Retry",
    desc: "Retry only as the contract allows. This guide does not define schedules, counts, timing or a promise of eventual posting.",
    tag: "Contract-defined behavior",
  },
  {
    icon: <PackageIcon className="size-5 text-[#D65A2C]" />,
    title: "Partial failures",
    desc: "Use approved result lookup and recovery paths. Keep unresolved portions visible; do not collapse a partial result into “complete”.",
    tag: "Approved lookup / recovery",
  },
  {
    icon: <BracesIcon className="size-5 text-[#D65A2C]" />,
    title: "Validation errors",
    desc: "Read exact validation codes and their handling in the API documentation. Do not derive account treatment from a validation response.",
    tag: "API Reference is authoritative",
  },
  {
    icon: <LinkSvgIcon className="size-5 text-[#D65A2C]" />,
    title: "Safe correlation",
    desc: "Preserve approved references across submission, result and reconciliation. Avoid exposing sensitive finance details in diagnostics.",
    tag: "Defined reference relationships",
  },
  {
    icon: <BellIcon className="size-5 text-[#D65A2C]" />,
    title: "Replay / re-run",
    desc: "Use only explicitly supported behavior and approved customer controls. No automatic ledger adjustment or general replay permission is implied.",
    tag: "Supported behavior only",
  },
];

export default function BatchAsyncSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-white py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/erp-general-ledger/tech-pattern.png"
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
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            A finance handoff is not a posting receipt.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            For high-volume interfaces, Bulk &amp; Batch owns the exact asynchronous contract. Submission, status and result semantics must be read in their documented scope.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-[1320px] p-6 sm:p-8 bg-[#F4EEF9] rounded-3xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            CONCEPTUAL ASYNC HANDOFF · EXACT CONTRACT IN BULK &amp; BATCH
          </div>
          <div className="self-stretch flex flex-wrap lg:flex-nowrap justify-between items-center gap-3">
            {flowSteps.map((step, index) => (
              <div key={step} className="flex-1 min-w-[200px] flex justify-start items-center gap-2">
                <div className="flex-1 min-h-[96px] p-4 bg-white rounded-2xl border border-[#E7D6F0]/60 flex flex-col justify-between items-start shadow-xs">
                  <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="self-stretch text-[#18141B] text-sm sm:text-base font-semibold font-['Inter',sans-serif] leading-tight">
                    {step}
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:flex shrink-0 items-center justify-center text-[#D65A2C]">
                    <FlowDirectionIcon className="w-[15px] h-[13px] text-[#D65A2C]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-3.5 shadow-xs hover:shadow-md transition-shadow"
            >
              {card.icon}
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {card.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {card.desc}
              </div>
              <div className="self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {card.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Acceptance ≠ completed ledger posting
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              An accepted submission or transfer signal does not establish that ERP/GL processing or posting completed. Exact status meaning, result retrieval and recovery belong to the approved contract.
            </p>
          </div>
        </div>

        <div className="relative z-10 self-stretch flex flex-wrap justify-start items-start gap-3">
          <div className="h-12 px-6 bg-[#BF6735] hover:bg-[#a85527] rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-start items-center gap-2.5 transition-all cursor-pointer">
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Open Bulk &amp; Batch</span>
            <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
          <div className="h-12 px-6 bg-white hover:bg-neutral-50 rounded-full outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex justify-start items-center gap-2.5 transition-all cursor-pointer">
            <span className="text-[#18141B] text-sm font-semibold font-['Inter',sans-serif]">Open API Reference</span>
            <span className="text-[#D65A2C] text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
