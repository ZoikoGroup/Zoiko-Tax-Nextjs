import { MinusIcon } from "./icons";

const faqs = [
  {
    question: "How does ZoikoTax connect to networks and authorities?",
    answer: "Approved adapters connect governed invoice-related workflows through supported transformation, routing, submission and response handling. Source systems retain business context; external networks or authorities own their defined outcomes. The exact contract governs implementation.",
  },
  {
    question: "Does it support every country and network?",
    answer: "No universal support is implied. Verify the exact country/jurisdiction, approved network/authority adapter, capability, environment and effective date in current Coverage. A public architecture pattern does not establish production availability.",
  },
  {
    question: "How are statuses and acknowledgements handled?",
    answer: "Source-controlled external responses pass through approved mappings to governed normalized statuses, with original adapter context retained. Receipt, processing acknowledgement and final outcome remain distinct. Unknown or awaiting-source must not be rendered as success or rejection.",
  },
  {
    question: "How should retry and duplicate submissions be managed?",
    answer: "Investigate current approved state and evidence before retry. Use only documented idempotency, correlation, recovery and legally permitted resubmission behavior. Retry counts, timing, duplicate guarantees and automatic legal compensation cannot be inferred from this page.",
  },
  {
    question: "Where can I test an adapter?",
    answer: "Start with the API contract and integration guides. Use a non-production Sandbox only where separately available, with synthetic or approved data and governed negative tests. Consult Webhooks & Events for exact async semantics. There is no live test or activation claim here.",
  },
  {
    question: "How do I verify production readiness?",
    answer: "Verify approved adapter Coverage and test availability; map identifiers; confirm governed credentials, status/recovery handling, evidence and operational ownership; then obtain required technical, Coverage and security approvals. Sandbox completion alone proves neither entitlement nor authority acceptance.",
  },
];

export default function FaqSection() {
  return (
    <div className="self-stretch px-20 py-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">14 / Frequently asked questions</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Direct answers. No inferred coverage.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Implementation guidance stays tied to approved technical and Coverage sources.</p>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
        {faqs.map((faq) => (
          <div key={faq.question} className="self-stretch py-7 border-b border-zinc-300 flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="self-stretch inline-flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 justify-start text-zinc-900 text-xl font-semibold font-['Inter'] leading-7">{faq.question}</div>
              <MinusIcon className="size-5 text-orange-600 shrink-0" />
            </div>
            <p className="w-full max-w-[1150px] justify-start text-stone-500 text-base font-normal font-['Inter'] leading-7">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
