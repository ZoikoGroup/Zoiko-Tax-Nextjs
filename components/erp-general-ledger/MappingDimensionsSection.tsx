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
        {/* Header */}
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            04 · MAPPING &amp; DIMENSIONS
          </div>
          <h2 className="text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            Finance dimensions are governed, not guessed.
          </h2>
          <p className="text-[#665F69] text-base sm:text-lg font-normal font-['Inter',sans-serif] leading-relaxed">
            <span className="block lg:whitespace-nowrap">
              Conceptual mapping categories — configuration and support remain governed. These categories are not a
            </span>
            <span className="block lg:whitespace-nowrap">
              production schema and contain no actual account or ledger values.
            </span>
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="relative z-10 self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-5 sm:gap-6">
          {dimensions.map((dimension) => (
            <div
              key={dimension.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 shadow-xs hover:shadow-md transition-shadow min-h-[220px]"
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                  {dimension.title}
                </div>
                <div className="self-stretch text-[#665F69] text-sm font-normal font-['Inter',sans-serif] leading-6">
                  {dimension.desc}
                </div>
              </div>
              <div className="mt-auto self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {dimension.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Ownership Callout */}
        <div className="relative z-10 self-stretch p-6 sm:p-8 bg-[rgba(242,234,248,1)] rounded-3xl grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] justify-start items-start gap-8 lg:gap-12">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              EXPLICIT OWNERSHIP
            </div>
            <div className="text-[rgba(48,17,83,1)] text-2xl sm:text-3xl font-bold font-['Inter',sans-serif] leading-tight">
              <span className="block sm:whitespace-nowrap">Your accounting context.</span>
              <span className="block sm:whitespace-nowrap">Approved mapping</span>
              <span className="block sm:whitespace-nowrap">responsibility.</span>
            </div>
          </div>
          <p className="text-[#665F69] text-sm sm:text-base font-normal leading-relaxed font-['Inter',sans-serif]">
            <span className="block lg:whitespace-nowrap">
              The customer or designated governed configuration process owns actual finance mappings and their
            </span>
            <span className="block lg:whitespace-nowrap">
              approval. ZoikoTax provides supported fiscal concepts and evidence within its scope. Interface
            </span>
            <span className="block lg:whitespace-nowrap">
              documentation defines what can be transferred; the enterprise ERP/GL owns how accounting records are
            </span>
            <span className="block lg:whitespace-nowrap">
              controlled. Resolve missing ownership before a consequential handoff.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
