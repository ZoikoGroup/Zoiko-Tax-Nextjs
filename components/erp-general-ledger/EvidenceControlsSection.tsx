import { CheckIcon, DownloadIcon, FileIcon, InfoIcon, LinkSvgIcon, RotateIcon } from "./icons";

const controls = [
  {
    icon: <FileIcon className="size-4 text-orange-600" />,
    title: "Source provenance",
    desc: "Preserve originating record lineage and source history for investigation.",
  },
  {
    icon: <RotateIcon className="size-4 text-orange-600" />,
    title: "Relevant versions",
    desc: "Retain relevant rule, content and interface versions; pin context where the approved workflow defines it.",
  },
  {
    icon: <CheckIcon className="size-4 text-orange-600" />,
    title: "Approval / control concepts",
    desc: "Use approved control requirements without inventing roles, permissions or an approval hierarchy.",
  },
  {
    icon: <LinkSvgIcon className="size-4 text-orange-600" />,
    title: "Correlation links",
    desc: "Connect defined references across source, fiscal outcome, finance transfer and reconciliation.",
  },
  {
    icon: <RotateIcon className="size-4 text-orange-600" />,
    title: "Historical replay route",
    desc: "Use Evidence & Replay where supported to revisit historical context through an authoritative route.",
  },
  {
    icon: <DownloadIcon className="size-4 text-orange-600" />,
    title: "Audit export",
    desc: "Use an export only if a real, approved audit artifact exists. Do not infer an export format or certification.",
  },
];

const traceRows = ["Source provenance", "Fiscal outcome + context", "Finance transfer references", "Reconciliation + history"];
const traceMarks = ["↓", "↓", "↓", "↶"];

const footnotes = [
  "Versions → relevant and source-confirmed",
  "Approval context → where defined and approved",
  "Replay / audit artifact → supported routes only",
];

export default function EvidenceControlsSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">09 · EVIDENCE &amp; APPROVAL CONTROLS</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Keep the context that makes review possible.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Evidence is a core finance-control capability, not a decorative trust statement. Lineage and pinned context support investigation without implying a compliance certification.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_480px] justify-start items-start gap-10 overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start overflow-hidden">
          {controls.map((control) => (
            <div key={control.title} className="self-stretch py-4 border-b border-zinc-300 flex justify-start items-start gap-4 overflow-hidden">
              {control.icon}
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter']">{control.title}</div>
                <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{control.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-8 bg-violet-950 rounded-3xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">ILLUSTRATIVE EVIDENCE · NO CUSTOMER DATA</div>
          <div className="self-stretch justify-start text-white text-3xl font-bold font-['Inter'] leading-9">A trace you can investigate.</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Conceptual categories only. No amounts, account IDs, journals, tax records, subscriber data or credentials are shown.</p>
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            {traceRows.map((row, index) => (
              <div key={row} className="self-stretch p-4 bg-indigo-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-600 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="justify-start text-orange-300 text-sm font-bold font-['Inter']">{traceMarks[index]}</div>
                <div className="flex-1 justify-start text-white text-base font-medium font-['Inter'] leading-6">{row}</div>
              </div>
            ))}
          </div>
          <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            {footnotes.map((footnote) => (
              <div key={footnote} className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">{footnote}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Traceability is not a certification</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Historical evidence and correlation can support investigation and audit. They do not, by themselves, establish legal correctness, accounting correctness or compliance certification. Trust remains separately authoritative for assurances.</p>
        </div>
      </div>
    </div>
  );
}
