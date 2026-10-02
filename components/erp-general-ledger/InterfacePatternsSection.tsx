import { BellIcon, BookIcon, BracesIcon, DownloadIcon, InfoIcon, PackageIcon, FileIcon } from "./icons";

const patterns = [
  {
    icon: <BookIcon className="size-5 text-orange-600" />,
    title: "Journal interface",
    desc: "Connect supported fiscal concepts to an approved finance journal interface. The ERP/GL retains responsibility for the accounting record and posting controls.",
    tag: "Boundary: approved journal contract only",
  },
  {
    icon: <FileIcon className="size-5 text-orange-600" />,
    title: "Accounting export",
    desc: "Prepare supported outcomes for a governed accounting handoff where an export is approved. No file format, entry structure or ERP permission is implied.",
    tag: "Boundary: approved export documentation",
  },
  {
    icon: <BracesIcon className="size-5 text-orange-600" />,
    title: "API integration",
    desc: "Use documented interfaces for the supported finance workflow. Exact fields, requests, responses, authentication and versions belong in the API Reference.",
    tag: "API Reference → /developers/api/",
  },
  {
    icon: <PackageIcon className="size-5 text-orange-600" />,
    title: "Bulk / batch",
    desc: "Route high-volume finance handoffs through Bulk & Batch where supported. Exact asynchronous submission, results and recovery are defined by that contract.",
    tag: "Bulk & Batch → /developers/bulk-batch/",
  },
  {
    icon: <BellIcon className="size-5 text-orange-600" />,
    title: "Event-driven continuation",
    desc: "Continue a workflow from an approved notification where supported. Notification meaning, delivery and continuation behavior are not inferred here.",
    tag: "Webhooks & Events → /developers/webhooks-events/",
  },
  {
    icon: <DownloadIcon className="size-5 text-orange-600" />,
    title: "Reconciliation import",
    desc: "Bring defined finance-side references or outcomes into a scoped reconciliation interface where approved. Imported records do not become accounting or legal proof.",
    tag: "Boundary: approved reconciliation contract",
  },
];

export default function InterfacePatternsSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">03 · INTERFACE PATTERNS</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Choose the route your controls can govern.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">These are conceptual uses, not a connector catalog or a promise of production availability. Publication and support remain governed for every route.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {patterns.map((pattern) => (
          <div key={pattern.title} className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
            {pattern.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-7">{pattern.title}</div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{pattern.desc}</div>
            <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5">{pattern.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">No accounting inference</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Do not infer a journal schema, debit/credit treatment, account mapping, ledger write permission or posting behavior from a fiscal outcome or interface pattern. Actual accounting treatment follows approved documentation and the customer’s accounting process.</p>
        </div>
      </div>
    </div>
  );
}
