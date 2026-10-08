import Image from "next/image";
import { BellIcon, BookIcon, BracesIcon, DownloadIcon, InfoIcon, PackageIcon, FileIcon } from "./icons";

const patterns = [
  {
    icon: <BookIcon className="size-5 text-[#D65A2C]" />,
    title: "Journal interface",
    desc: "Connect supported fiscal concepts to an approved finance journal interface. The ERP/GL retains responsibility for the accounting record and posting controls.",
    tag: "Boundary: approved journal contract only",
  },
  {
    icon: <FileIcon className="size-5 text-[#D65A2C]" />,
    title: "Accounting export",
    desc: "Prepare supported outcomes for a governed accounting handoff where an export is approved. No file format, entry structure or ERP permission is implied.",
    tag: "Boundary: approved export documentation",
  },
  {
    icon: <BracesIcon className="size-5 text-[#D65A2C]" />,
    title: "API integration",
    desc: "Use documented interfaces for the supported finance workflow. Exact fields, requests, responses, authentication and versions belong in the API Reference.",
    tag: "API Reference → /developers/api/",
  },
  {
    icon: <PackageIcon className="size-5 text-[#D65A2C]" />,
    title: "Bulk / batch",
    desc: "Route high-volume finance handoffs through Bulk & Batch where supported. Exact asynchronous submission, results and recovery are defined by that contract.",
    tag: "Bulk & Batch → /developers/bulk-batch/",
  },
  {
    icon: <BellIcon className="size-5 text-[#D65A2C]" />,
    title: "Event-driven continuation",
    desc: "Continue a workflow from an approved notification where supported. Notification meaning, delivery and continuation behavior are not inferred here.",
    tag: "Webhooks & Events → /developers/webhooks-events/",
  },
  {
    icon: <DownloadIcon className="size-5 text-[#D65A2C]" />,
    title: "Reconciliation import",
    desc: "Bring defined finance-side references or outcomes into a scoped reconciliation interface where approved. Imported records do not become accounting or legal proof.",
    tag: "Boundary: approved reconciliation contract",
  },
];

export default function InterfacePatternsSection() {
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
            03 · INTERFACE PATTERNS
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Choose the route your controls can govern.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            These are conceptual uses, not a connector catalog or a promise of production availability. Publication and support remain governed for every route.
          </p>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          {patterns.map((pattern) => (
            <div
              key={pattern.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-3.5 hover:shadow-md transition-shadow"
            >
              {pattern.icon}
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {pattern.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {pattern.desc}
              </div>
              <div className="self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {pattern.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              No accounting inference
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              Do not infer a journal schema, debit/credit treatment, account mapping, ledger write permission or posting behavior from a fiscal outcome or interface pattern. Actual accounting treatment follows approved documentation and the customer’s accounting process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
