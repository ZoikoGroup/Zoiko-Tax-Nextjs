import { InfoIcon, LinkSvgIcon } from "./icons";

const controls = [
  {
    title: "Source provenance",
    desc: (
      <>
        Preserve originating record lineage and source history for investigation.
      </>
    ),
  },
  {
    title: "Relevant versions",
    desc: (
      <>
        Retain relevant rule, content and interface versions; pin context where the approved workflow<br className="hidden xl:block" />
        defines it.
      </>
    ),
  },
  {
    title: "Approval / control concepts",
    desc: (
      <>
        Use approved control requirements without inventing roles, permissions or an approval<br className="hidden xl:block" />
        hierarchy.
      </>
    ),
  },
  {
    title: "Correlation links",
    desc: (
      <>
        Connect defined references across source, fiscal outcome, finance transfer and reconciliation.
      </>
    ),
  },
  {
    title: "Historical replay route",
    desc: (
      <>
        Use Evidence &amp; Replay where supported to revisit historical context through an authoritative<br className="hidden xl:block" />
        route.
      </>
    ),
  },
  {
    title: "Audit export",
    desc: (
      <>
        Use an export only if a real, approved audit artifact exists. Do not infer an export format or<br className="hidden xl:block" />
        certification.
      </>
    ),
  },
];

const traceRows = [
  "Source provenance",
  "Fiscal outcome + context",
  "Finance transfer references",
  "Reconciliation + history",
];
const traceMarks = ["↓", "↓", "↓", "↶"];

const footnotes = [
  "Versions → relevant and source-confirmed",
  "Approval context → where defined and approved",
  "Replay / audit artifact → supported routes only",
];

export default function EvidenceControlsSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            09 · EVIDENCE &amp; APPROVAL CONTROLS
          </div>
          <h2 className="w-full text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            Keep the context that makes review possible.
          </h2>
          <p className="w-full text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Evidence is a core finance-control capability, not a decorative trust statement. Lineage and pinned context<br className="hidden lg:block" />
            support investigation without implying a compliance certification.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_480px] justify-start items-start gap-10 lg:gap-12">
          {/* Left Column: Controls List */}
          <div className="flex flex-col justify-start items-start w-full">
            {controls.map((control) => (
              <div
                key={control.title}
                className="self-stretch py-5 border-b border-[#D8CEDD] flex justify-start items-start gap-4"
              >
                <LinkSvgIcon className="size-5 text-[#D65A2C] shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch text-[#18141B] text-base sm:text-lg font-bold font-['Inter',sans-serif]">
                    {control.title}
                  </div>
                  <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                    {control.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Illustrative Evidence Card */}
          <div className="w-full p-6 sm:p-8 bg-[rgba(48,17,83,1)] rounded-3xl border border-[rgba(90,61,113,1)] flex flex-col justify-start items-start gap-6 shadow-sm">
            <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              ILLUSTRATIVE EVIDENCE · NO CUSTOMER DATA
            </div>
            <div className="self-stretch text-white text-2xl sm:text-3xl font-bold font-['Inter',sans-serif] leading-tight">
              A trace you can investigate.
            </div>
            <p className="self-stretch text-[rgba(217,208,223,1)] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block xl:whitespace-nowrap">Conceptual categories only. No amounts, account IDs,</span>
              <span className="block xl:whitespace-nowrap">journals, tax records, subscriber data or credentials</span>
              <span className="block xl:whitespace-nowrap">are shown.</span>
            </p>
            <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
              {traceRows.map((row, index) => (
                <div
                  key={row}
                  className="self-stretch p-4 bg-[rgba(36,16,61,1)] rounded-2xl border border-[rgba(90,61,113,1)] flex justify-start items-center gap-3.5"
                >
                  <div className="text-[#FFA776] text-sm font-bold font-['Inter',sans-serif]">
                    {traceMarks[index]}
                  </div>
                  <div className="flex-1 text-white text-sm sm:text-base font-medium font-['Inter',sans-serif]">
                    {row}
                  </div>
                </div>
              ))}
            </div>
            <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-2">
              {footnotes.map((footnote) => (
                <div key={footnote} className="self-stretch text-[rgba(217,208,223,1)] text-xs font-normal font-['Inter',sans-serif] leading-5">
                  {footnote}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Notice Callout */}
        <div className="relative z-10 self-stretch p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex justify-start items-start gap-3.5 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Traceability is not a certification
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block lg:whitespace-nowrap">
                Historical evidence and correlation can support investigation and audit. They do not, by themselves, establish legal correctness, accounting correctness or
              </span>
              <span className="block lg:whitespace-nowrap">
                compliance certification. Trust remains separately authoritative for assurances.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

