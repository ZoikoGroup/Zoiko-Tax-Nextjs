const states = [
  {
    title: "Conceptual guide",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Default: explain the architecture and</span>
        <span className="block xl:whitespace-nowrap">responsibility boundaries. Keep technical</span>
        <span className="block xl:whitespace-nowrap">routes and full text equivalents available beside</span>
        <span className="block xl:whitespace-nowrap">the graphics.</span>
      </>
    ),
    tag: "Illustrative default · not an active integration",
  },
  {
    title: "Source / mapping not published",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“Exact mapping is not published here.” Retain</span>
        <span className="block xl:whitespace-nowrap">conceptual categories and refer to approved</span>
        <span className="block xl:whitespace-nowrap">documentation and the mapping owner.</span>
      </>
    ),
    tag: "No invented fallback schema",
  },
  {
    title: "Unavailable route",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“This route is unavailable in the current scope.”</span>
        <span className="block xl:whitespace-nowrap">Keep the surrounding guidance and refer to</span>
        <span className="block xl:whitespace-nowrap">Integration Guides; do not promise access.</span>
      </>
    ),
    tag: "Availability must be source-confirmed",
  },
  {
    title: "Unknown period / correction",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“Instruction requires governed review.”</span>
        <span className="block xl:whitespace-nowrap">Preserve originating linkage and context; do</span>
        <span className="block xl:whitespace-nowrap">not infer a posting, period reopening or</span>
        <span className="block xl:whitespace-nowrap">statutory treatment.</span>
      </>
    ),
    tag: "Review before a consequential action",
  },
  {
    title: "Currentness unknown",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“Currentness cannot be confirmed.” Use</span>
        <span className="block xl:whitespace-nowrap">authoritative source context before relying on a</span>
        <span className="block xl:whitespace-nowrap">mapping, version or approval instruction.</span>
      </>
    ),
    tag: "Do not silently assume current",
  },
  {
    title: "Partial result",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“Result is partial; unresolved portions remain.”</span>
        <span className="block xl:whitespace-nowrap">Follow approved lookup and recovery guidance</span>
        <span className="block xl:whitespace-nowrap">rather than implying completion or posting</span>
        <span className="block xl:whitespace-nowrap">success.</span>
      </>
    ),
    tag: "Exact result meaning is contract-defined",
  },
  {
    title: "Ambiguous variance",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“Variance requires investigation.” Retain</span>
        <span className="block xl:whitespace-nowrap">defined references and historical evidence; do</span>
        <span className="block xl:whitespace-nowrap">not label an ambiguous comparison as correct.</span>
      </>
    ),
    tag: "No correctness inference",
  },
  {
    title: "Restricted detail",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">“Detail is restricted in this view.” Show only</span>
        <span className="block xl:whitespace-nowrap">approved safe context and an authoritative</span>
        <span className="block xl:whitespace-nowrap">review route, not sensitive finance data.</span>
      </>
    ),
    tag: "No customer amounts or account records",
  },
  {
    title: "Adjacent text fallback",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Keep each architecture relationship and</span>
        <span className="block xl:whitespace-nowrap">qualifier readable as adjacent text. The core</span>
        <span className="block xl:whitespace-nowrap">documentation remains understandable</span>
        <span className="block xl:whitespace-nowrap">without an interactive graphic.</span>
      </>
    ),
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
          <h2 className="w-full text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            When detail is absent, keep the guide useful.
          </h2>
          <p className="w-full text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Illustrative documentation patterns only—not live operational states or customer ledger data. Explicit text<br className="hidden lg:block" />
            carries the meaning; color, hover and motion are never the only signal.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 sm:gap-6">
          {states.map((state) => (
            <div
              key={state.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 min-h-[200px]"
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                  {state.title}
                </div>
                <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                  {state.desc}
                </div>
              </div>
              <div className="mt-auto text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {state.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Illustrative State Cards */}
        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 sm:gap-6">
          {/* Box 1: Keyboard Focus */}
          <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 min-h-[160px]">
            <div className="text-[#D65A2C] text-[11px] font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              KEYBOARD FOCUS · ILLUSTRATIVE
            </div>
            <div className="h-9 px-4 bg-white rounded-full border-2 border-[#18141B] flex justify-start items-center gap-1.5 cursor-pointer">
              <span className="text-[#18141B] text-xs font-bold font-['Inter',sans-serif]">Open API Reference</span>
              <span className="text-[#D65A2C] text-xs font-bold leading-none font-['Inter',sans-serif]">↗</span>
            </div>
            <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block xl:whitespace-nowrap">Visible focus boundary and a generous target. The</span>
              <span className="block xl:whitespace-nowrap">route label remains explicit.</span>
            </div>
          </div>

          {/* Box 2: Hover */}
          <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 min-h-[160px]">
            <div className="text-[#D65A2C] text-[11px] font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              HOVER · ILLUSTRATIVE
            </div>
            <div className="flex justify-start items-center">
              <span className="text-[#D65A2C] text-xs sm:text-sm font-semibold font-['Inter',sans-serif] underline underline-offset-4 cursor-pointer">
                Explore Integration Guides ↗
              </span>
            </div>
            <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block xl:whitespace-nowrap">Underline reinforces the route; no required information</span>
              <span className="block xl:whitespace-nowrap">appears only on hover.</span>
            </div>
          </div>

          {/* Box 3: Expanded Guidance */}
          <div className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 min-h-[160px]">
            <div className="text-[#D65A2C] text-[11px] font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              EXPANDED GUIDANCE · ILLUSTRATIVE
            </div>
            <div className="self-stretch flex justify-between items-center cursor-pointer">
              <span className="text-[#18141B] text-xs sm:text-sm font-bold font-['Inter',sans-serif]">
                Where is the exact contract?
              </span>
              <span className="text-[#D65A2C] text-base font-bold font-['Inter',sans-serif]">−</span>
            </div>
            <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block xl:whitespace-nowrap">API, Bulk &amp; Batch and Events documentation remain</span>
              <span className="block xl:whitespace-nowrap">authoritative. The answer is visible here.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

