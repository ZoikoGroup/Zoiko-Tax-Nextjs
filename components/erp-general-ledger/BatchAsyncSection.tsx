import { BellIcon, BracesIcon, DownloadIcon, FlowDirectionIcon, InfoIcon, LinkSvgIcon, PackageIcon } from "./icons";

const flowSteps = ["High-volume finance handoff", "Asynchronous processing", "Governed status / result", "Reconciliation"];

const cards = [
  {
    icon: <BracesIcon className="size-5 text-orange-600" />,
    title: "Idempotency",
    desc: "Treat repeat handling as a conceptual control. Exact keys, scope and semantics are API-defined—not a universal duplicate-posting guarantee.",
    tag: "API-defined semantics",
  },
  {
    icon: <DownloadIcon className="size-5 text-orange-600" />,
    title: "Retry",
    desc: "Retry only as the contract allows. This guide does not define schedules, counts, timing or a promise of eventual posting.",
    tag: "Contract-defined behavior",
  },
  {
    icon: <PackageIcon className="size-5 text-orange-600" />,
    title: "Partial failures",
    desc: "Use approved result lookup and recovery paths. Keep unresolved portions visible; do not collapse a partial result into “complete”.",
    tag: "Approved lookup / recovery",
  },
  {
    icon: <BracesIcon className="size-5 text-orange-600" />,
    title: "Validation errors",
    desc: "Read exact validation codes and their handling in the API documentation. Do not derive account treatment from a validation response.",
    tag: "API Reference is authoritative",
  },
  {
    icon: <LinkSvgIcon className="size-5 text-orange-600" />,
    title: "Safe correlation",
    desc: "Preserve approved references across submission, result and reconciliation. Avoid exposing sensitive finance details in diagnostics.",
    tag: "Defined reference relationships",
  },
  {
    icon: <BellIcon className="size-5 text-orange-600" />,
    title: "Replay / re-run",
    desc: "Use only explicitly supported behavior and approved customer controls. No automatic ledger adjustment or general replay permission is implied.",
    tag: "Supported behavior only",
  },
];

export default function BatchAsyncSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">08 · BATCH, ASYNC &amp; RECOVERY</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">A finance handoff is not a posting receipt.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">For high-volume interfaces, Bulk &amp; Batch owns the exact asynchronous contract. Submission, status and result semantics must be read in their documented scope.</p>
      </div>
      <div className="self-stretch p-7 bg-purple-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">CONCEPTUAL ASYNC HANDOFF · EXACT CONTRACT IN BULK &amp; BATCH</div>
        <div className="self-stretch flex flex-wrap justify-start items-center gap-2 overflow-hidden">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex-1 min-w-48 flex justify-start items-center gap-2 overflow-hidden">
              <div className="flex-1 min-h-28 p-4 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="justify-start text-orange-600 text-xs font-bold font-['Inter']">{String(index + 1).padStart(2, "0")}</div>
                <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-5">{step}</div>
              </div>
              {index < flowSteps.length - 1 && <FlowDirectionIcon className="shrink-0" />}
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {cards.map((card) => (
          <div key={card.title} className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
            {card.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-7">{card.title}</div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</div>
            <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5">{card.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Acceptance ≠ completed ledger posting</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">An accepted submission or transfer signal does not establish that ERP/GL processing or posting completed. Exact status meaning, result retrieval and recovery belong to the approved contract.</p>
        </div>
      </div>
      <div className="self-stretch flex flex-wrap justify-start items-start gap-3 overflow-hidden">
        <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
          <div className="justify-start text-white text-sm font-semibold font-['Inter']">Open Bulk &amp; Batch</div>
          <div className="justify-start text-white text-lg font-normal font-['Inter']">↗</div>
        </div>
        <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Open API Reference</div>
          <div className="justify-start text-orange-600 text-lg font-normal font-['Inter']">↗</div>
        </div>
      </div>
    </div>
  );
}
