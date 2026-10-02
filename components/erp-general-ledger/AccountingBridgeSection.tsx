import { FlowDirectionIcon, InfoIcon } from "./icons";

const flowSteps = ["Fiscal outcome", "Mapping", "Journal / export preparation", "Transfer", "Ledger processing", "Reconciliation"];

const stages = [
  {
    num: "01",
    title: "Fiscal outcome",
    desc: "Identify eligible, supported fiscal output and its evidence context. Eligibility for an interface does not make the fiscal result an accounting posting.",
  },
  {
    num: "02",
    title: "Mapping",
    desc: "Apply customer-owned or governed mapping configuration. Chart-of-accounts and finance-dimension treatment must be approved for the enterprise context.",
  },
  {
    num: "03",
    title: "Journal / export preparation",
    desc: "Prepare only the approved finance interface. This page does not define entries, debits, credits, fields or an accounting treatment.",
  },
  {
    num: "04",
    title: "Transfer",
    desc: "Use the source-controlled API, batch, file or event route only where documented and supported. Transport, authentication and versions are contract-specific.",
  },
  {
    num: "05",
    title: "Ledger processing",
    desc: "The enterprise ERP/GL applies its own processing and posting controls. A transfer or acceptance signal is not evidence that ledger posting completed.",
  },
  {
    num: "06",
    title: "Reconciliation",
    desc: "Connect defined references and investigate governed variances. Status and variance semantics remain source-controlled; do not infer correctness from a match.",
  },
];

export default function AccountingBridgeSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">02 · ACCOUNTING BRIDGE</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Prepare the handoff. Preserve the controls.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Each stage has a purpose and a publication boundary. Exact interfaces come from approved technical documentation, not from the diagram.</p>
      </div>
      <div className="self-stretch p-7 bg-gray-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">CONCEPTUAL FLOW · NOT A RUNTIME CONTRACT</div>
        <div className="self-stretch flex flex-wrap justify-start items-center gap-2 overflow-hidden">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex-1 min-w-40 flex justify-start items-center gap-2 overflow-hidden">
              <div className="flex-1 min-h-28 p-4 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="justify-start text-orange-600 text-xs font-bold font-['Inter']">{String(index + 1).padStart(2, "0")}</div>
                <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-5">{step}</div>
              </div>
              {index < flowSteps.length - 1 && <FlowDirectionIcon className="shrink-0" />}
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
        {stages.map((stage) => (
          <div key={stage.num} className="self-stretch py-5 border-b border-zinc-300 flex justify-start items-start gap-6 overflow-hidden">
            <div className="w-9 justify-start text-orange-600 text-sm font-bold font-['Inter']">{stage.num}</div>
            <div className="w-64 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-7">{stage.title}</div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
              <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{stage.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Context travels with the handoff</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Keep approved entity, ledger, period, currency, mapping and currentness context visible at consequential handoffs. Do not assume that context or support is universal.</p>
        </div>
      </div>
    </div>
  );
}
