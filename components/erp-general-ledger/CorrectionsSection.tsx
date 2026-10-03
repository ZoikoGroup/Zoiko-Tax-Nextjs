import { CalendarIcon, CopyIcon, FileTextIcon, InfoIcon, RotateIcon } from "./icons";

const corrections = [
  {
    icon: <FileTextIcon className="size-5 text-[#D65A2C]" />,
    title: "Source transaction corrected",
    desc: "Preserve the link to the original record and its source history. Use the supported source-to-fiscal correction path; do not infer an accounting adjustment.",
    tag: "Route: source documentation + Integration Guides",
  },
  {
    icon: <RotateIcon className="size-4 text-[#D65A2C]" />,
    title: "Fiscal outcome changes",
    desc: "Retain relevant outcome versions and evidence references. Follow the authoritative fiscal and interface documentation for supported downstream behavior.",
    tag: "Route: approved fiscal / interface documentation",
  },
  {
    icon: <FileTextIcon className="size-5 text-[#D65A2C]" />,
    title: "Invoice correction",
    desc: "Keep invoice and transaction relationships where defined. The customer’s accounting process determines treatment; this page does not prescribe entries.",
    tag: "Route: authoritative correction documentation",
  },
  {
    icon: <RotateIcon className="size-4 text-[#D65A2C]" />,
    title: "Journal reprocessing",
    desc: "Reprocess only when the approved interface and customer control process allow it. No automatic adjustment, replay behavior or ledger write is implied.",
    tag: "Boundary: only if explicitly approved",
  },
  {
    icon: <CalendarIcon className="size-5 text-[#D65A2C]" />,
    title: "Period closed",
    desc: "Do not infer a reopening rule or a permitted posting window. Retain the period context and refer the unresolved instruction to the customer’s accounting process.",
    tag: "Boundary: never prescribe reopening",
  },
  {
    icon: <CopyIcon className="size-5 text-[#D65A2C]" />,
    title: "Duplicate / replay",
    desc: "Follow contract-defined correlation and replay semantics. A repeated request does not imply universal protection against duplicate ledger posting.",
    tag: "Route: API Reference + supported recovery contract",
  },
];

export default function CorrectionsSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            06 · CORRECTIONS &amp; REPROCESSING
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Preserve the history. Govern the next action.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Changes must retain the originating record linkage and source version history. Correction guidance describes routing and control—not accounting or statutory treatment.
          </p>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          {corrections.map((correction) => (
            <div
              key={correction.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-3.5 shadow-xs hover:shadow-md transition-shadow"
            >
              {correction.icon}
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {correction.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {correction.desc}
              </div>
              <div className="self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {correction.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Unresolved or unknown → governed review
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              When correction instructions, period context or supported reprocessing behavior are unknown, preserve lineage and route the question for governed review. Do not silently adjust, overwrite history, reopen a period or infer statutory treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
