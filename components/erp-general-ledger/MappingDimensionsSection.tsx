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
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">04 · MAPPING &amp; DIMENSIONS</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Finance dimensions are governed, not guessed.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Conceptual mapping categories — configuration and support remain governed. These categories are not a production schema and contain no actual account or ledger values.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 overflow-hidden">
        {dimensions.map((dimension) => (
          <div key={dimension.title} className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-7">{dimension.title}</div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{dimension.desc}</div>
            <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5">{dimension.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-7 bg-purple-100 rounded-3xl grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] justify-start items-start gap-10 overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">EXPLICIT OWNERSHIP</div>
          <div className="self-stretch justify-start text-violet-950 text-2xl font-bold font-['Inter'] leading-8">Your accounting context. Approved mapping responsibility.</div>
        </div>
        <p className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">The customer or designated governed configuration process owns actual finance mappings and their approval. ZoikoTax provides supported fiscal concepts and evidence within its scope. Interface documentation defines what can be transferred; the enterprise ERP/GL owns how accounting records are controlled. Resolve missing ownership before a consequential handoff.</p>
      </div>
    </div>
  );
}
