const dimensions = [
  {
    title: "Legal entity / company",
    desc: "Identify the enterprise scope for an approved handoff. Entity treatment is not automatically universal.",
    tag: "Governed enterprise context",
  },
  {
    title: "Ledger / book",
    desc: "Identify the applicable accounting context under the enterprise’s own ledger authority.",
    tag: "ERP / GL-owned context",
  },
  {
    title: "Account / chart of accounts",
    desc: "Use the customer’s approved chart-of-accounts mapping. No account numbers or default mappings are provided.",
    tag: "Customer / governed configuration",
  },
  {
    title: "Cost center / business unit",
    desc: "Include this optional dimension only when approved and supported for the interface.",
    tag: "Optional · support-dependent",
  },
  {
    title: "Tax / fee category",
    desc: "Map supported fiscal concepts using approved category definitions, not inferred accounting treatment.",
    tag: "Supported concepts only",
  },
  {
    title: "Currency",
    desc: "Carry defined currency context. Neither support nor currency accounting treatment is implied.",
    tag: "Interface-specific context",
  },
  {
    title: "Period",
    desc: "Carry approved period context without inventing posting windows, close rules or reopening behavior.",
    tag: "Customer accounting process",
  },
  {
    title: "External correlation",
    desc: "Preserve safe, defined reference relationships across source, fiscal and finance handoffs.",
    tag: "Contract-defined relationships",
  },
];

export default function MappingDimensionsSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            04 · MAPPING &amp; DIMENSIONS
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Finance dimensions are governed, not guessed.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Conceptual mapping categories — configuration and support remain governed. These categories are not a production schema and contain no actual account or ledger values.
          </p>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4">
          {dimensions.map((dimension) => (
            <div
              key={dimension.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-3.5 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {dimension.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {dimension.desc}
              </div>
              <div className="self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {dimension.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 self-stretch p-6 sm:p-8 bg-[#F4EEF9] rounded-3xl border border-[#E7D6F0] grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] justify-start items-start gap-8 lg:gap-10 shadow-sm">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              EXPLICIT OWNERSHIP
            </div>
            <div className="text-[#3B125B] text-xl sm:text-2xl font-bold font-['Inter',sans-serif] leading-8">
              Your accounting context. Approved mapping responsibility.
            </div>
          </div>
          <p className="text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
            The customer or designated governed configuration process owns actual finance mappings and their approval. ZoikoTax provides supported fiscal concepts and evidence within its scope. Interface documentation defines what can be transferred; the enterprise ERP/GL owns how accounting records are controlled. Resolve missing ownership before a consequential handoff.
          </p>
        </div>
      </div>
    </section>
  );
}
