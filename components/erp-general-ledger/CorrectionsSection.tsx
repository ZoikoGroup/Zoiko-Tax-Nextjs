import { CalendarIcon, CopyIcon, FileTextIcon, InfoIcon, RotateIcon } from "./icons";

const corrections = [
  {
    icon: <FileTextIcon className="size-5 text-orange-600" />,
    title: "Source transaction corrected",
    desc: "Preserve the link to the original record and its source history. Use the supported source-to-fiscal correction path; do not infer an accounting adjustment.",
    tag: "Route: source documentation + Integration Guides",
  },
  {
    icon: <RotateIcon className="size-4 text-orange-600" />,
    title: "Fiscal outcome changes",
    desc: "Retain relevant outcome versions and evidence references. Follow the authoritative fiscal and interface documentation for supported downstream behavior.",
    tag: "Route: approved fiscal / interface documentation",
  },
  {
    icon: <FileTextIcon className="size-5 text-orange-600" />,
    title: "Invoice correction",
    desc: "Keep invoice and transaction relationships where defined. The customer’s accounting process determines treatment; this page does not prescribe entries.",
    tag: "Route: authoritative correction documentation",
  },
  {
    icon: <RotateIcon className="size-4 text-orange-600" />,
    title: "Journal reprocessing",
    desc: "Reprocess only when the approved interface and customer control process allow it. No automatic adjustment, replay behavior or ledger write is implied.",
    tag: "Boundary: only if explicitly approved",
  },
  {
    icon: <CalendarIcon className="size-5 text-orange-600" />,
    title: "Period closed",
    desc: "Do not infer a reopening rule or a permitted posting window. Retain the period context and refer the unresolved instruction to the customer’s accounting process.",
    tag: "Boundary: never prescribe reopening",
  },
  {
    icon: <CopyIcon className="size-5 text-orange-600" />,
    title: "Duplicate / replay",
    desc: "Follow contract-defined correlation and replay semantics. A repeated request does not imply universal protection against duplicate ledger posting.",
    tag: "Route: API Reference + supported recovery contract",
  },
];

export default function CorrectionsSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">06 · CORRECTIONS &amp; REPROCESSING</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Preserve the history. Govern the next action.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Changes must retain the originating record linkage and source version history. Correction guidance describes routing and control—not accounting or statutory treatment.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {corrections.map((correction) => (
          <div key={correction.title} className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
            {correction.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-7">{correction.title}</div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{correction.desc}</div>
            <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5">{correction.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Unresolved or unknown → governed review</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">When correction instructions, period context or supported reprocessing behavior are unknown, preserve lineage and route the question for governed review. Do not silently adjust, overwrite history, reopen a period or infer statutory treatment.</p>
        </div>
      </div>
    </div>
  );
}
