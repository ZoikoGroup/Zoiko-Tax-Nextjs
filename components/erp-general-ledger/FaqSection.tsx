const faqs = [
  {
    question: "Does ZoikoTax replace my ERP/GL?",
    answer: "No. ZoikoTax provides supported, governed fiscal outcomes and evidence. Your enterprise ERP or general ledger remains the accounting system of record and owns posting controls. The integration is a bridge—not a replacement ledger or accounting advice.",
  },
  {
    question: "How do fiscal outcomes connect to accounting?",
    answer: "Through supported concepts, governed mapping and an approved finance interface. Preparation and transfer remain distinct from enterprise ledger processing. A fiscal result is not automatically a posting; exact structures and behavior belong in approved technical documentation.",
  },
  {
    question: "How are journal mappings controlled?",
    answer: "Actual chart-of-accounts and finance-dimension mapping is customer-owned or governed configuration, with explicit responsibility and approval. This guide shows conceptual categories, not account numbers, default mappings or a universal journal schema.",
  },
  {
    question: "How does reconciliation work?",
    answer: "Defined identities and reference relationships connect transaction, fiscal outcome and invoice, and connect fiscal outcome, accounting bridge and ledger outcome. Governed variance categories, investigation routes and historical evidence support review. A match is not legal or accounting proof.",
  },
  {
    question: "How are corrections handled?",
    answer: "Preserve originating record linkage and source version history, then follow authoritative correction documentation and the customer’s accounting process. Reprocessing is permitted only where approved. Unknown instructions require governed review—not inferred entries, automatic adjustments or period reopening.",
  },
  {
    question: "Can integration use batch processing?",
    answer: "Where supported and approved, high-volume finance handoffs can use Bulk & Batch. Its documentation owns the exact asynchronous contract, status, results and recovery behavior. Submission acceptance is not completed ledger posting, and availability must be independently confirmed.",
  },
];

export default function FaqSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">14 · FREQUENTLY ASKED QUESTIONS</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Direct answers. Controlled finance boundaries.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">The architecture stays useful without inventing the contracts it points to. All answers are shown for a clear, continuous reading path.</p>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
        {faqs.map((faq) => (
          <div key={faq.question} className="self-stretch py-7 border-t border-zinc-300 flex justify-start items-start gap-14 overflow-hidden">
            <div className="w-96 shrink-0 justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-8">{faq.question}</div>
            <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
