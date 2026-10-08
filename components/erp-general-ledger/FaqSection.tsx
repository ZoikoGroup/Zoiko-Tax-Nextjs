import Image from "next/image";

const faqs = [
  {
    question: (
      <>
        Does ZoikoTax replace my<br className="hidden lg:block" />
        ERP/GL?
      </>
    ),
    answer: (
      <>
        <span className="block xl:whitespace-nowrap">No. ZoikoTax provides supported, governed fiscal outcomes and evidence. Your enterprise ERP or general ledger</span>
        <span className="block xl:whitespace-nowrap">remains the accounting system of record and owns posting controls. The integration is a bridge—not a</span>
        <span className="block xl:whitespace-nowrap">replacement ledger or accounting advice.</span>
      </>
    ),
  },
  {
    question: (
      <>
        How do fiscal outcomes<br className="hidden lg:block" />
        connect to accounting?
      </>
    ),
    answer: (
      <>
        <span className="block xl:whitespace-nowrap">Through supported concepts, governed mapping and an approved finance interface. Preparation and transfer</span>
        <span className="block xl:whitespace-nowrap">remain distinct from enterprise ledger processing. A fiscal result is not automatically a posting; exact structures</span>
        <span className="block xl:whitespace-nowrap">and behavior belong in approved technical documentation.</span>
      </>
    ),
  },
  {
    question: (
      <>
        How are journal mappings<br className="hidden lg:block" />
        controlled?
      </>
    ),
    answer: (
      <>
        <span className="block xl:whitespace-nowrap">Actual chart-of-accounts and finance-dimension mapping is customer-owned or governed configuration, with</span>
        <span className="block xl:whitespace-nowrap">explicit responsibility and approval. This guide shows conceptual categories, not account numbers, default</span>
        <span className="block xl:whitespace-nowrap">mappings or a universal journal schema.</span>
      </>
    ),
  },
  {
    question: (
      <>
        How does reconciliation<br className="hidden lg:block" />
        work?
      </>
    ),
    answer: (
      <>
        <span className="block xl:whitespace-nowrap">Defined identities and reference relationships connect transaction, fiscal outcome and invoice, and connect fiscal</span>
        <span className="block xl:whitespace-nowrap">outcome, accounting bridge and ledger outcome. Governed variance categories, investigation routes and</span>
        <span className="block xl:whitespace-nowrap">historical evidence support review. A match is not legal or accounting proof.</span>
      </>
    ),
  },
  {
    question: (
      <>
        How are corrections handled?
      </>
    ),
    answer: (
      <>
        <span className="block xl:whitespace-nowrap">Preserve originating record linkage and source version history, then follow authoritative correction</span>
        <span className="block xl:whitespace-nowrap">documentation and the customer’s accounting process. Reprocessing is permitted only where approved.</span>
        <span className="block xl:whitespace-nowrap">Unknown instructions require governed review—not inferred entries, automatic adjustments or period reopening.</span>
      </>
    ),
  },
  {
    question: (
      <>
        Can integration use batch<br className="hidden lg:block" />
        processing?
      </>
    ),
    answer: (
      <>
        <span className="block xl:whitespace-nowrap">Where supported and approved, high-volume finance handoffs can use Bulk &amp; Batch. Its documentation owns the</span>
        <span className="block xl:whitespace-nowrap">exact asynchronous contract, status, results and recovery behavior. Submission acceptance is not completed</span>
        <span className="block xl:whitespace-nowrap">ledger posting, and availability must be independently confirmed.</span>
      </>
    ),
  },
];


export default function FaqSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            14 · FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="w-full text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            Direct answers. Controlled finance boundaries.
          </h2>
          <p className="w-full text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            The architecture stays useful without inventing the contracts it points to. All answers are shown for a clear,<br className="hidden lg:block" />
            continuous reading path.
          </p>
        </div>

        {/* FAQ List */}
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="self-stretch py-7 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-14"
            >
              <div className="w-full lg:w-[320px] shrink-0 text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-snug">
                {faq.question}
              </div>
              <div className="flex-1 text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

