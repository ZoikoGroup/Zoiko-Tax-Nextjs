export default function DirectAnswerSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-12 lg:py-16 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
          <div className="justify-start text-[#D65A2C] text-xs font-bold uppercase tracking-[0.08em] font-['Inter',sans-serif] leading-5">
            DIRECT ANSWER
          </div>
          <h2 className="self-stretch justify-start text-[#18141B] text-3xl sm:text-4xl lg:text-[36px] font-bold font-['Inter',sans-serif] leading-[1.15] tracking-tight">
            <span className="lg:whitespace-nowrap">What is an ERP &amp; GL</span>
            <br className="hidden sm:inline" />
            <span>integration?</span>
          </h2>
        </div>
        <div className="flex-1 max-w-[880px] inline-flex flex-col justify-start items-start gap-3.5 lg:gap-4 overflow-hidden">
          <p className="self-stretch justify-start text-[#18141B] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-[1.6]">
            <span className="lg:whitespace-nowrap">A governed fiscal-to-finance accounting bridge connects supported ZoikoTax outcomes and</span>
            <br className="hidden lg:inline" />
            <span className="lg:whitespace-nowrap">evidence to enterprise finance interfaces, then connects related records for reconciliation and</span>
            <br className="hidden lg:inline" />
            <span>investigation.</span>
          </p>
          <p className="self-stretch justify-start text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
            <span className="lg:whitespace-nowrap">It is not an ERP or ledger replacement, a universal journal schema, or accounting advice. A fiscal result is not</span>
            <br className="hidden lg:inline" />
            <span>automatically a posting; your enterprise ERP/GL retains accounting authority and posting controls.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
