import { Container } from "./shared";

const dimensions = [
  {
    label: "Classification",
    desc: "Compare approved classification concepts.",
  },
  {
    label: "Jurisdiction / situs",
    desc: "Review compatible location and jurisdiction context.",
  },
  {
    label: "Tax / fee outcome",
    desc: "Compare only source-defined outcome concepts.",
  },
  {
    label: "Exemption / certificate treatment",
    desc: "Inspect approved exemption and certificate context.",
  },
  {
    label: "Rounding / calculation",
    desc: "Review compatible calculation conventions.",
  },
  {
    label: "Source data / mapping",
    desc: "Trace permitted facts and their translations.",
  },
  {
    label: "Version / effective context",
    desc: "Pin the rule, mapping and effective context.",
  },
];

const specimenRows = [
  { label: "Source / correlation", value: "Safe source reference placeholder" },
  {
    label: "Dimension / definition",
    value: "Approved definition reference placeholder",
  },
  {
    label: "Mapping / rule context",
    value: "Pinned context reference placeholders",
  },
  {
    label: "Observed comparison",
    value: "Unknown — source evidence not supplied",
  },
  {
    label: "Owner / resolution",
    value: "Governed owner and history placeholders",
  },
];

export default function ComparisonModelSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            05 · COMPARISON &amp; DISCREPANCY MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            Agreement is an observation. Not a legal verdict.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Compare only compatible, source-defined concepts across approved dimensions. Diagnostic categories are conditional on the actual integration contract; neither side is legally correct by default.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
          {/* Approved comparison dimensions */}
          <div className="w-full lg:w-[360px] shrink-0 flex flex-col justify-start items-start gap-4">
            <div className="text-[#18141B] text-xl sm:text-2xl font-normal font-['Inter',sans-serif]">
              Approved comparison dimensions
            </div>
            {dimensions.map((item) => (
              <div
                key={item.label}
                className="self-stretch pb-3.5 border-b border-[#D8CEDD] flex flex-col justify-start items-start gap-1"
              >
                <div className="self-stretch text-[#18141B] text-base font-normal font-['Inter',sans-serif]">
                  {item.label}
                </div>
                <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Anatomy of comparison */}
          <div className="flex-1 w-full p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-6 shadow-sm">
            <span className="self-stretch text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-wider">
              ILLUSTRATIVE ONLY · NO OPERATIONAL RESULTS
            </span>
            <div className="self-stretch text-[#18141B] text-2xl sm:text-3xl font-bold leading-8 font-['Inter',sans-serif]">
              An anatomy of comparison
            </div>
            <p className="self-stretch text-[#665F69] text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
              A reference-only specimen. No tax amounts, percentages, real
              records, engine configurations or confidential outputs are shown.
            </p>

            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF3FF] rounded-2xl border border-[#E7D6F0] flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch text-[#18141B] text-lg font-normal font-['Inter',sans-serif]">
                  Production reference
                </div>
                <span className="px-3 py-1 bg-white rounded-full border border-[#D8CEDD] text-[#18141B] text-xs font-semibold font-['Inter',sans-serif]">
                  Incumbent authoritative
                </span>
                <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                  Outcome reference withheld under policy.
                </div>
              </div>

              <div className="p-5 bg-[#241039] rounded-2xl flex flex-col justify-start items-start gap-2.5 shadow-sm">
                <div className="self-stretch text-white text-lg font-normal font-['Inter',sans-serif]">
                  Shadow reference
                </div>
                <span className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-white text-xs font-semibold font-['Inter',sans-serif]">
                  Non-authoritative
                </span>
                <div className="self-stretch text-zinc-300 text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                  Comparative outcome trace placeholder.
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-stretch">
              {specimenRows.map((row) => (
                <div
                  key={row.label}
                  className="self-stretch py-3 border-b border-[#E5DFE8] flex flex-col sm:flex-row justify-start items-start gap-1 sm:gap-6"
                >
                  <div className="w-full sm:w-48 shrink-0 text-[#18141B] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                    {row.label}
                  </div>
                  <div className="flex-1 text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
              Restricted or unavailable evidence is not agreement. Preserve
              unknown and missing-source states rather than inferring a match.
            </p>
          </div>
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
          <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
            Matching outcomes show agreement under observed conditions—not independent proof of correctness, completeness or future equivalence.
          </div>
          <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Comparison informs investigation and readiness review. It does not certify legal treatment or authorize production cutover.
          </p>
        </div>
      </Container>
    </section>
  );
}
