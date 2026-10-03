import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";

export default function FederatedArchitectureSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            02 · FEDERATED ARCHITECTURE
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight lg:whitespace-nowrap">
            Two evaluation paths. Explicit authority boundaries.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            <span className="lg:whitespace-nowrap">Preserve source ownership and separate production authority from diagnostic comparison. The incumbent’s role depends on the</span>
            <br className="hidden lg:inline" />
            <span>approved stage, not on vendor assumptions.</span>
          </p>
        </div>

        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="self-stretch flex flex-wrap justify-between items-center gap-4">
            <span className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              ILLUSTRATIVE ARCHITECTURE · NOT A CONNECTOR CONTRACT
            </span>
            <span className="px-3 py-1 bg-white rounded-full border border-[#D8CEDD] text-[#18141B] text-xs font-semibold font-['Inter',sans-serif]">
              Pre-cutover example
            </span>
          </div>

          {/* Source → adapter */}
          <div className="self-stretch flex flex-col lg:flex-row justify-start lg:items-center gap-4 lg:gap-6">
            <div className="w-full lg:w-96 p-5 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-2.5 shrink-0">
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-6">
                Source transaction / BSS
              </div>
              <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Source facts remain upstream-owned; only permitted facts enter evaluation.
              </div>
            </div>
            <div className="shrink-0 self-start lg:self-center flex justify-center items-center">
              <Image
                src="/existing-tax-engines/arrow-right.svg"
                alt="→"
                width={18}
                height={18}
                className="w-[18px] h-[18px] rotate-90 lg:rotate-0"
              />
            </div>
            <div className="w-full flex-1 p-5 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-6">
                Adapter / federation layer
              </div>
              <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif] lg:whitespace-nowrap">
                Inspectable mapping and routing governed by the approved technical contract. No named connector is implied.
              </div>
            </div>
          </div>

          {/* Production path */}
          <div className="self-stretch p-6 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col lg:flex-row justify-start lg:items-center gap-5 lg:gap-6">
            <div className="w-full lg:w-64 shrink-0 flex flex-col justify-start items-start gap-2.5">
              <span className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
                PRODUCTION PATH
              </span>
              <div className="text-[#18141B] text-base sm:text-lg font-bold font-['Inter',sans-serif]">
                Incumbent authoritative
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif]">
                Incumbent engine
              </div>
              <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Approved production outcomes remain with the incumbent in this pre-cutover example.
              </div>
            </div>
            <div className="w-full lg:w-64 shrink-0 flex flex-col justify-start items-start gap-1">
              <div className="text-[#18141B] text-base font-semibold font-['Inter',sans-serif] flex items-center gap-1.5">
                Outcome reference
                <Image
                  src="/existing-tax-engines/arrow-right.svg"
                  alt="→"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5"
                />
              </div>
              <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Policy-controlled, potentially confidential
              </div>
            </div>
          </div>

          {/* Shadow path */}
          <div className="self-stretch p-6 bg-[#241039] rounded-2xl flex flex-col lg:flex-row justify-start lg:items-center gap-5 lg:gap-6 shadow-sm">
            <div className="w-full lg:w-64 shrink-0 flex flex-col justify-start items-start gap-2.5">
              <span className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
                SHADOW PATH
              </span>
              <div className="text-white text-base sm:text-lg font-bold font-['Inter',sans-serif]">
                ZoikoTax non-authoritative
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="text-white text-lg sm:text-xl font-bold font-['Inter',sans-serif]">
                ZoikoTax Shadow evaluation
              </div>
              <div className="self-stretch text-zinc-300 text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Comparative output only; no production billing or filing change.
              </div>
            </div>
            <div className="w-full lg:w-64 shrink-0 flex flex-col justify-start items-start gap-1">
              <div className="text-white text-base font-semibold font-['Inter',sans-serif] flex items-center gap-1.5">
                Shadow trace
                <Image
                  src="/existing-tax-engines/arrow-right.svg"
                  alt="→"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5"
                />
              </div>
              <div className="self-stretch text-zinc-300 text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Retained with source and version context
              </div>
            </div>
          </div>

          {/* Comparison + evidence */}
          <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-6">
                Comparison / reconciliation
              </div>
              <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Compare approved, compatible concepts. Agreement is diagnostic—not independent proof.
              </div>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-6">
                Evidence
              </div>
              <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                Safe references, pinned context and governed resolution history; preserve prior evidence.
              </div>
            </div>
          </div>
        </div>

        <p className="self-stretch text-[#665F69] text-sm sm:text-base font-normal leading-relaxed font-['Inter',sans-serif]">
          <span className="lg:whitespace-nowrap">Text equivalent: Source transaction/BSS → governed adapter/federation layer → incumbent production path and permitted ZoikoTax Shadow path → policy-controlled</span>
          <br className="hidden lg:inline" />
          <span className="lg:whitespace-nowrap">outcome references → comparison/reconciliation → retained evidence. Production authority changes only through an approved stage; comparison itself never changes</span>
          <br className="hidden lg:inline" />
          <span>that authority.</span>
        </p>

        <Notice
          title="Engine-agnostic does not mean universally compatible."
          body="Exact mappings, source permissions and routes must be established in approved technical sources. Coverage is separately governed for the exact scope and capability."
        />
      </Container>
    </section>
  );
}
