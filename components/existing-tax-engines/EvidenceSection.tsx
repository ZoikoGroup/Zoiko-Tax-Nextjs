import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

const references = [
  {
    label: "Source provenance",
    value: "Safe source reference placeholder",
  },
  {
    label: "Production outcome",
    value: "Policy-controlled incumbent outcome reference",
  },
  {
    label: "Shadow outcome",
    value: "Comparative outcome trace placeholder",
  },
  {
    label: "Mapping / adapter context",
    value: "Historical mapping / adapter version reference",
  },
  {
    label: "Rule / content context",
    value: "Historical rule / content version reference",
  },
  {
    label: "Discrepancy history",
    value: "Category, owner and resolution references",
  },
  {
    label: "Authority approval",
    value: "Governed approval principle; record remains outside this public page",
  },
];

export default function EvidenceSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden bg-neutral-950">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/Evidence replay and migration audit trail.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.35)]" />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            10 · EVIDENCE, REPLAY &amp; MIGRATION AUDIT TRAIL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-white leading-tight tracking-tight">
            Pin the context. Retain the trail.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Migration evidence must explain what was observed, under which historical context and how owners resolved it. A ‘perfect match’ is not marketing proof.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-12">
          {/* Left info column */}
          <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-6">
            <Image
              src="/existing-tax-engines/pin.svg"
              alt=""
              width={40}
              height={40}
              className="size-10"
            />
            <div className="self-stretch text-white text-3xl font-bold leading-9 font-['Inter',sans-serif]">
              History stays history.
            </div>
            <p className="self-stretch text-zinc-300 text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
              Preserve source data context, versions, prior comparisons and
              resolution evidence. Later investigation or re-runs must not
              overwrite the earlier trail.
            </p>
            <p className="self-stretch text-zinc-300 text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
              Replay uses the approved source and evidence model where supported.
              A pinned context reference does not imply universal replay
              capability or legal completeness.
            </p>
            <Link
              href="/evidence-auditability"
              className="inline-flex items-center gap-1.5 text-[#D65A2C] text-sm sm:text-base font-semibold font-['Inter',sans-serif] hover:underline"
            >
              <span>Explore Evidence &amp; Replay</span>
              <Image
                src="/existing-tax-engines/arrow-up-right.svg"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
            </Link>
          </div>

          {/* Right specimen table card */}
          <div className="flex-1 w-full p-6 sm:p-8 bg-[rgba(36,16,57,1)] rounded-3xl border border-white/10 flex flex-col justify-start items-stretch shadow-sm">
            <span className="self-stretch text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-wider mb-2">
              ILLUSTRATIVE REFERENCES · NO RECORD IDS OR ACTUAL VERSIONS
            </span>
            {references.map((row, idx) => (
              <div
                key={row.label}
                className={`py-3.5 ${
                  idx === references.length - 1 ? "" : "border-b border-white/10"
                } flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-6`}
              >
                <div className="w-full sm:w-56 shrink-0 text-white text-sm sm:text-base font-semibold leading-6 font-['Inter',sans-serif]">
                  {row.label}
                </div>
                <div className="flex-1 text-zinc-300 text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(36,16,57,1)] rounded-2xl border border-white/10 border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2 shadow-sm">
          <div className="text-white text-base font-bold leading-6 font-['Inter',sans-serif]">
            Safe evidence, not copied confidential outputs.
          </div>
          <p className="text-zinc-300 text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Reference access, logging, storage and retention remain policy-controlled. Historical context and prior evidence are retained; no private identifiers, actual tax values or confidential engine results belong in this public specimen.
          </p>
        </div>
      </Container>
    </section>
  );
}
