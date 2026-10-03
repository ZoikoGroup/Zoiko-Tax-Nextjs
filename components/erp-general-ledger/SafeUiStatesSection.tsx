const states = [
  {
    title: "Conceptual guide",
    desc: "Default: explain the architecture and responsibility boundaries. Keep technical routes and full text equivalents available beside the graphics.",
    tag: "Illustrative default · not an active integration",
  },
  {
    title: "Source / mapping not published",
    desc: "“Exact mapping is not published here.” Retain conceptual categories and refer to approved documentation and the mapping owner.",
    tag: "No invented fallback schema",
  },
  {
    title: "Unavailable route",
    desc: "“This route is unavailable in the current scope.” Keep the surrounding guidance and refer to Integration Guides; do not promise access.",
    tag: "Availability must be source-confirmed",
  },
  {
    title: "Unknown period / correction",
    desc: "“Instruction requires governed review.” Preserve originating linkage and context; do not infer a posting, period reopening or statutory treatment.",
    tag: "Review before a consequential action",
  },
  {
    title: "Currentness unknown",
    desc: "“Currentness cannot be confirmed.” Use authoritative source context before relying on a mapping, version or approval instruction.",
    tag: "Do not silently assume current",
  },
  {
    title: "Partial result",
    desc: "“Result is partial; unresolved portions remain.” Follow approved lookup and recovery guidance rather than implying completion or posting success.",
    tag: "Exact result meaning is contract-defined",
  },
  {
    title: "Ambiguous variance",
    desc: "“Variance requires investigation.” Retain defined references and historical evidence; do not label an ambiguous comparison as correct.",
    tag: "No correctness inference",
  },
  {
    title: "Restricted detail",
    desc: "“Detail is restricted in this view.” Show only approved safe context and an authoritative review route, not sensitive finance data.",
    tag: "No customer amounts or account records",
  },
  {
    title: "Adjacent text fallback",
    desc: "Keep each architecture relationship and qualifier readable as adjacent text. The core documentation remains understandable without an interactive graphic.",
    tag: "No-JS reading pattern · illustrative",
  },
];

export default function SafeUiStatesSection() {
  return (
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">13 · SAFE UI STATES</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">When detail is absent, keep the guide useful.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Illustrative documentation patterns only—not live operational states or customer ledger data. Explicit text carries the meaning; color, hover and motion are never the only signal.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {states.map((state) => (
          <div key={state.title} className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-7">{state.title}</div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{state.desc}</div>
            <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5">{state.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        <div className="p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">KEYBOARD FOCUS · ILLUSTRATIVE</div>
          <div className="h-12 px-5 bg-white rounded-[999px] outline outline-[3px] outline-offset-[-3px] outline-violet-950 inline-flex justify-start items-center gap-3 overflow-hidden">
            <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Open API Reference</div>
            <div className="justify-start text-orange-600 text-lg font-normal font-['Inter']">↗</div>
          </div>
          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Visible focus boundary and a generous target. The route label remains explicit.</div>
        </div>
        <div className="p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">HOVER · ILLUSTRATIVE</div>
          <div className="self-stretch h-12 inline-flex justify-start items-center overflow-hidden">
            <div className="justify-start text-orange-600 text-base font-semibold font-['Inter'] underline">Explore Integration Guides ↗</div>
          </div>
          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Underline reinforces the route; no required information appears only on hover.</div>
        </div>
        <div className="p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">EXPANDED GUIDANCE · ILLUSTRATIVE</div>
          <div className="self-stretch h-12 flex justify-between items-center overflow-hidden">
            <div className="justify-start text-violet-950 text-base font-semibold font-['Inter']">Where is the exact contract?</div>
            <div className="justify-start text-orange-600 text-xl font-normal font-['Inter']">−</div>
          </div>
          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">API, Bulk &amp; Batch and Events documentation remain authoritative. The answer is visible here.</div>
        </div>
      </div>
    </div>
  );
}
