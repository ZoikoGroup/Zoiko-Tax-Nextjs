import Image from "next/image";

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
    <section className="relative w-full flex justify-center items-start bg-white py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/erp-general-ledger/tech-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            14 · FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Direct answers. Controlled finance boundaries.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            The architecture stays useful without inventing the contracts it points to. All answers are shown for a clear, continuous reading path.
          </p>
        </div>

        <div className="relative z-10 self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="self-stretch py-7 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-14"
            >
              <div className="w-full lg:w-96 shrink-0 text-[#18141B] text-xl sm:text-2xl font-bold font-['Inter',sans-serif] leading-8">
                {faq.question}
              </div>
              <div className="flex-1 text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
