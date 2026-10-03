import { InfoIcon } from "./icons";

const contextRows = [
  { label: "Legal entity", value: "[source-controlled entity context]" },
  { label: "Ledger / book", value: "[approved enterprise ledger context]" },
  { label: "Accounting period", value: "[source-controlled period context]" },
  { label: "Currency", value: "[defined currency context]" },
  { label: "Mapping version", value: "[approved mapping reference]" },
  { label: "Approval / currentness", value: "[source-confirmed control context]" },
];

export default function EnterpriseScopeSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">05 · ENTERPRISE SCOPE</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Keep context visible at the decision boundary.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Entity, ledger and period context belong beside consequential handoffs—not hidden behind an inferred default.</p>
      </div>
      <div className="self-stretch p-8 bg-slate-900 rounded-3xl grid grid-cols-1 lg:grid-cols-[384px_minmax(0,1fr)] justify-start items-start gap-8 overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">ILLUSTRATIVE CONTEXT · NOT A SCHEMA</div>
          <div className="self-stretch justify-start text-white text-3xl font-bold font-['Inter'] leading-9">Before preparation. Before transfer. Before review.</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Placeholders show the kinds of source-controlled context that may be needed. They do not describe a live ledger or imply posting authority, available currencies or period rules.</p>
        </div>
        <div className="p-6 bg-indigo-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-600 inline-flex flex-col justify-start items-start overflow-hidden">
          {contextRows.map((row) => (
            <div key={row.label} className="self-stretch py-3.5 border-b border-zinc-600 last:border-b-0 flex justify-start items-start gap-5 overflow-hidden">
              <div className="w-44 justify-start text-white text-sm font-semibold font-['Inter'] leading-5">{row.label}</div>
              <div className="flex-1 justify-start text-zinc-300 text-xs font-normal font-['JetBrains_Mono'] leading-4">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Unknown context requires governed review</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Do not guess a period, mapping version or approval state. Follow the authoritative interface documentation and the customer’s accounting process when context is absent or currentness cannot be confirmed.</p>
        </div>
      </div>
    </div>
  );
}
