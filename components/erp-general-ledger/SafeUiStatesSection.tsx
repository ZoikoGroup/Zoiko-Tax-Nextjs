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
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            13 · SAFE UI STATES
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            When detail is absent, keep the guide useful.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Illustrative documentation patterns only—not live operational states or customer ledger data. Explicit text carries the meaning; color, hover and motion are never the only signal.
          </p>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          {states.map((state) => (
            <div
              key={state.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-3.5 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {state.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {state.desc}
              </div>
              <div className="self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {state.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          <div className="p-6 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-4 shadow-xs">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              KEYBOARD FOCUS · ILLUSTRATIVE
            </div>
            <div className="h-12 px-5 bg-white rounded-full border-2 border-[#3B125B] flex justify-start items-center gap-3">
              <span className="text-[#18141B] text-sm font-semibold font-['Inter',sans-serif]">Open API Reference</span>
              <span className="text-[#D65A2C] text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
            </div>
            <div className="self-stretch text-[#665F69] text-sm font-normal font-['Inter',sans-serif] leading-5">
              Visible focus boundary and a generous target. The route label remains explicit.
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-4 shadow-xs">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              HOVER · ILLUSTRATIVE
            </div>
            <div className="self-stretch h-12 flex justify-start items-center">
              <span className="text-[#D65A2C] text-base font-semibold font-['Inter',sans-serif] underline cursor-pointer">
                Explore Integration Guides ↗
              </span>
            </div>
            <div className="self-stretch text-[#665F69] text-sm font-normal font-['Inter',sans-serif] leading-5">
              Underline reinforces the route; no required information appears only on hover.
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-4 shadow-xs">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              EXPANDED GUIDANCE · ILLUSTRATIVE
            </div>
            <div className="self-stretch h-12 flex justify-between items-center border-b border-[#E7D6F0]">
              <span className="text-[#3B125B] text-base font-semibold font-['Inter',sans-serif]">
                Where is the exact contract?
              </span>
              <span className="text-[#D65A2C] text-xl font-normal font-['Inter',sans-serif]">−</span>
            </div>
            <div className="self-stretch text-[#665F69] text-sm font-normal font-['Inter',sans-serif] leading-5">
              API, Bulk &amp; Batch and Events documentation remain authoritative. The answer is visible here.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
