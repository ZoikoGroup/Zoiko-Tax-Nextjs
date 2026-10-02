const lanes = [
  {
    owner: "Source transaction / billing",
    role: "SOURCE AUTHORITY",
    handoff: "Originating transaction",
    dark: false,
    desc: "The source system owns the originating transaction or invoice. Preserve its identity, version and record history when connecting downstream fiscal and finance records.",
    arrow: true,
  },
  {
    owner: "ZoikoTax",
    role: "FISCAL AUTHORITY",
    handoff: "Fiscal outcome + evidence",
    dark: false,
    desc: "ZoikoTax produces supported, governed fiscal outcomes and associated evidence. A fiscal outcome establishes fiscal context within its supported scope; it does not authorize an accounting posting.",
    arrow: true,
  },
  {
    owner: "Accounting bridge",
    role: "INTERFACE BOUNDARY",
    handoff: "Governed mapping + interface",
    dark: false,
    desc: "The bridge maps supported fiscal concepts to approved finance interfaces. Actual mapping is customer-owned or governed configuration, not a universal accounting schema.",
    arrow: true,
  },
  {
    owner: "Enterprise ERP / GL",
    role: "ACCOUNTING AUTHORITY",
    handoff: "Accounting record + controls",
    dark: true,
    desc: "The enterprise ERP or general ledger remains the accounting system of record. It owns ledger processing, record authority and posting controls under the customer’s accounting process.",
    arrow: true,
  },
  {
    owner: "Reconciliation / evidence",
    role: "SCOPED RELATIONSHIPS",
    handoff: "Investigation + audit links",
    dark: false,
    desc: "Defined record relationships connect source, fiscal and finance outcomes for investigation and audit. Evidence preserves context; a match does not establish legal or accounting correctness.",
    arrow: false,
  },
];

export default function SystemBoundariesSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">01 · SYSTEM BOUNDARIES</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">One connected workflow. Distinct responsibilities.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Keep fiscal authority and accounting authority separate—even when the interfaces connect them.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 justify-start items-stretch gap-4 overflow-hidden">
        <div className="p-6 bg-purple-100 rounded-2xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">ZOIKOTAX · FISCAL SCOPE</div>
          <div className="justify-start text-violet-950 text-xl font-bold font-['Inter']">Supported outcomes and governed evidence</div>
        </div>
        <div className="p-6 bg-slate-900 rounded-2xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">ENTERPRISE ERP / GL · FINANCE SCOPE</div>
          <div className="justify-start text-white text-xl font-bold font-['Inter']">Accounting system of record and posting controls</div>
        </div>
      </div>
      <div className="self-stretch p-7 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch pb-4 flex justify-start items-start gap-6 overflow-hidden">
          <div className="w-56 justify-start text-stone-500 text-xs font-bold font-['Inter']">RESPONSIBILITY OWNER</div>
          <div className="w-64 justify-start text-stone-500 text-xs font-bold font-['Inter']">CONCEPTUAL HANDOFF ↓</div>
          <div className="flex-1 justify-start text-stone-500 text-xs font-bold font-['Inter']">BOUNDARY &amp; TEXT EQUIVALENT</div>
        </div>
        {lanes.map((lane) => (
          <div key={lane.owner} className="self-stretch pt-5 pb-7 border-t border-zinc-300 flex justify-start items-center gap-6 overflow-hidden">
            <div className="w-56 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter'] leading-6">{lane.owner}</div>
              <div className="self-stretch justify-start text-orange-600 text-[10px] font-bold font-['Inter']">{lane.role}</div>
            </div>
            <div className={`w-64 p-4 rounded-2xl inline-flex flex-col justify-start items-start overflow-hidden ${lane.dark ? "bg-slate-900" : "bg-purple-100"}`}>
              <div className={`self-stretch justify-start text-base font-semibold font-['Inter'] leading-6 ${lane.dark ? "text-white" : "text-violet-950"}`}>{lane.handoff}</div>
            </div>
            <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{lane.desc}</div>
            {lane.arrow && <div className="shrink-0 text-center justify-start text-orange-600 text-lg font-normal font-['Inter']">↓</div>}
          </div>
        ))}
        <div className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">Conceptual swimlanes only. Handoff arrows describe flow and responsibility—not a guarantee of synchronous behavior, processing order or posting success.</div>
      </div>
    </div>
  );
}
