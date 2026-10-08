import Image from "next/image";
import { Container } from "./shared";

const gates = [
  {
    gate: "Coverage",
    condition: "Approved evidence for the exact scope and capability required.",
    role: "Accountable role: Tax-product owner",
  },
  {
    gate: "Mapping",
    condition:
      "Reviewed source-to-result translation, including unsupported facts.",
    role: "Accountable role: Integration / API owner",
  },
  {
    gate: "Representative comparison",
    condition:
      "Comparison evidence for the source-defined representative conditions.",
    role: "Accountable role: Migration owner",
  },
  {
    gate: "Material discrepancy review",
    condition:
      "Governed review and resolution context for material discrepancies.",
    role: "Accountable role: Discrepancy owner",
  },
  {
    gate: "Operational ownership",
    condition: "Defined monitoring, support and operational responsibilities.",
    role: "Accountable role: Operations owner",
  },
  {
    gate: "Evidence",
    condition:
      "Retained source, mapping, rule/version and resolution references.",
    role: "Accountable role: Evidence owner",
  },
  {
    gate: "Recovery intent / authority",
    condition:
      "Approved recovery intent and accountable operational authority.",
    role: "Accountable role: Recovery authority",
  },
  {
    gate: "Explicit approval",
    condition:
      "Recorded readiness and authority-change approval through the governed process.",
    role: "Accountable role: Designated approvers",
  },
];

export default function ReadinessGatesSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            07 · MIGRATION READINESS GATES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            Readiness is evidenced. Authority is approved.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Use source-defined conditions, evidence and owners—not public-page thresholds, elapsed days, transaction counts or variance targets.
          </p>
        </div>

        <div className="self-stretch bg-white rounded-3xl border border-[#D8CEDD] overflow-hidden shadow-sm">
          {/* Checklist banner */}
          <div className="p-5 sm:p-6 bg-[#241039] flex justify-start items-center gap-3.5">
            <Image
              src="/existing-tax-engines/clipboard-list.svg"
              alt=""
              width={22}
              height={22}
              className="size-5.5 shrink-0"
            />
            <div className="flex-1 text-white text-xs sm:text-sm font-semibold font-['Inter',sans-serif]">
              ILLUSTRATIVE CHECKLIST · All gates require evidence. No readiness
              is established by this public example.
            </div>
          </div>

          {/* Column headings */}
          <div className="px-5 sm:px-8 py-3.5 bg-[#FAF3FF] border-b border-[#D8CEDD] hidden lg:flex justify-start items-start gap-6">
            <div className="w-56 shrink-0 text-[#241039] text-xs font-bold uppercase tracking-wider font-['Inter',sans-serif]">
              GATE
            </div>
            <div className="flex-1 text-[#241039] text-xs font-bold uppercase tracking-wider font-['Inter',sans-serif]">
              SOURCE-DEFINED EVIDENCE CONDITION
            </div>
            <div className="w-60 shrink-0 text-[#241039] text-xs font-bold uppercase tracking-wider font-['Inter',sans-serif]">
              PUBLIC EXAMPLE STATE
            </div>
          </div>

          {/* Rows */}
          {gates.map((row, idx) => (
            <div
              key={row.gate}
              className={`px-5 sm:px-8 py-4.5 ${
                idx === gates.length - 1 ? "" : "border-b border-[#E5DFE8]"
              } flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-6`}
            >
              <div className="w-full lg:w-56 shrink-0 flex justify-start items-center gap-3">
                <Image
                  src="/existing-tax-engines/square.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 shrink-0 text-[#665F69]"
                />
                <div className="flex-1 text-[#18141B] text-sm sm:text-base font-normal font-['Inter',sans-serif]">
                  {row.gate}
                </div>
              </div>
              <div className="flex-1 w-full flex flex-col justify-start items-start gap-1">
                <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {row.condition}
                </div>
                <div className="self-stretch text-[#241039] text-xs font-normal font-['Inter',sans-serif]">
                  {row.role}
                </div>
              </div>
              <div className="w-full lg:w-60 shrink-0 flex flex-col justify-start items-start gap-1">
                <div className="text-[#D65A2C] text-sm font-normal font-['Inter',sans-serif]">
                  Evidence required
                </div>
                <div className="self-stretch text-[#665F69] text-xs font-normal leading-5 font-['Inter',sans-serif]">
                  Not established in public example
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
          <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
            No green-check shortcut to production.
          </div>
          <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            These are evidence conditions, not passed gates or current deployment status. Approved technical and operational sources define the actual conditions, owners and approval requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
