import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

const lifecycle = [
  {
    label: "Input mapping",
    desc: "Identify permitted source facts and their contract-defined meanings.",
  },
  {
    label: "Normalization",
    desc: "Translate only defined concepts; do not silently default invalid or unmapped facts.",
  },
  {
    label: "Routing",
    desc: "Use approved routes and authority intent; the public model defines no routing mechanics.",
  },
  {
    label: "Result mapping",
    desc: "Keep comparative and authoritative results distinct; preserve source-defined meaning.",
  },
  {
    label: "Versioning",
    desc: "Pin mapping/adapter context and retain historical versions with the evidence.",
  },
  {
    label: "Validation",
    desc: "Inspect mappings and unsupported facts through the approved validation process.",
  },
  {
    label: "Observability",
    desc: "Use safe, policy-controlled logs and traces without confidential outputs or secrets.",
  },
];

export default function AdapterPatternSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-white py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/erp-general-ledger/tech-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            04 · ADAPTER PATTERN &amp; LIFECYCLE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            A governed translation layer. Not a one-click migration.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Make the translation inspectable. Exact fields, versions, source semantics and routes belong to the approved integration contract—not this conceptual public model.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-12">
          {/* Conceptual flow */}
          <div className="w-full lg:w-[380px] shrink-0 p-6 sm:p-8 bg-[#FAF3FF] rounded-3xl border border-[#E7D6F0] flex flex-col justify-start items-stretch gap-6">
            <span className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-wider">
              CONCEPTUAL · NOT A PRODUCTION SCHEMA
            </span>
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch p-5 bg-white rounded-2xl border border-[#D8CEDD] text-center text-[#18141B] text-xl font-normal leading-6 font-['Inter',sans-serif]">
                Permitted source concepts
              </div>
              <Image
                src="/existing-tax-engines/arrow-down.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch p-5 bg-[#241039] rounded-2xl text-center text-white text-xl font-normal leading-6 font-['Inter',sans-serif]">
                Inspectable translation
              </div>
              <Image
                src="/existing-tax-engines/arrow-down.svg"
                alt=""
                width={20}
                height={20}
                className="size-5"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch p-5 bg-white rounded-2xl border border-[#D8CEDD] text-center text-[#18141B] text-xl font-normal leading-6 font-['Inter',sans-serif]">
                Approved output concepts
              </div>
            </div>
            <p className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
              Text equivalent: permitted source concepts → governed translation →
              approved output concepts, with validation and retained version
              context.
            </p>
          </div>

          {/* Lifecycle list */}
          <div className="flex-1 flex flex-col justify-start items-stretch">
            {lifecycle.map((row) => (
              <div
                key={row.label}
                className="self-stretch py-4 border-b border-[#E5DFE8] flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-6"
              >
                <div className="w-full sm:w-44 shrink-0 text-[#18141B] text-base sm:text-lg font-bold font-['Inter',sans-serif]">
                  {row.label}
                </div>
                <div className="flex-1 text-[#665F69] text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {row.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
          <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
            Invalid or unmapped facts do not silently become defaults.
          </div>
          <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Keep unsupported and missing-source conditions visible for governed review. This pattern does not imply a plug-in, package, protocol, adapter marketplace or named-engine compatibility.
          </p>
        </div>

        {/* Action Link */}
        <Link
          href="/integration-guides"
          className="inline-flex items-center gap-1.5 text-[#D65A2C] text-sm sm:text-base font-semibold font-['Inter',sans-serif] hover:underline"
        >
          <span>Inspect mappings in Integration Guides</span>
          <Image
            src="/existing-tax-engines/arrow-up-right.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </Link>
      </Container>
    </section>
  );
}
