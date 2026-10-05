import Image from "next/image";
import { Container, Notice } from "./shared";

const layers = [
  {
    layer: "Partner / OEM",
    role: "Wider proposition, interface and workflows",
    boundary: "Approved integration boundary",
    surface: "bg-[rgba(255,255,255,0.04)]",
  },
  {
    layer: "Organization / tenant",
    role: "Authorized business context and responsibility",
    boundary: "Explicit organization boundary",
    surface: "bg-[rgba(255,255,255,0.04)]",
  },
  {
    layer: "ZoikoTax",
    role: "Supported fiscal controls and evidence",
    boundary: "Approved capability boundary",
    surface: "bg-[rgba(255,255,255,0.04)]",
  },
];

export default function OperatingModelSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-white overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-50">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            01 / OPERATING MODEL
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            One embedded proposition. Explicit responsibilities.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
            Embedding connects responsibilities; it does not merge their authority.
          </p>
        </div>

        {/* Three-layer model */}
        <div className="self-stretch p-6 sm:p-8 bg-[rgba(48,17,83,1)] rounded-3xl flex flex-col justify-start items-start gap-4">
          <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            THREE-LAYER MODEL · CONCEPTUAL, NOT A TENANT HIERARCHY
          </span>
          {layers.map((item) => (
            <div
              key={item.layer}
              className={`self-stretch p-6 ${item.surface} rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col lg:flex-row justify-start lg:items-center gap-3 lg:gap-8`}
            >
              <div className="w-full lg:w-64 shrink-0 text-white text-2xl font-normal font-['Inter',sans-serif]">
                {item.layer}
              </div>
              <div className="flex-1 text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {item.role}
              </div>
              <div className="w-full lg:w-64 shrink-0 text-[rgba(244,162,97,1)] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                {item.boundary}
              </div>
            </div>
          ))}
          <p className="self-stretch text-[#D9D0DF] text-sm font-normal leading-6 font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Text equivalent: the partner owns its wider experience and approved integration; the organization remains the authorized business context; ZoikoTax provides supported fiscal controls</span>
            <span className="block xl:whitespace-nowrap">and evidence within the approved scope.</span>
          </p>
        </div>

        {/* Responsibility table */}
        <div className="self-stretch bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-5 bg-[rgba(242,234,248,1)] hidden lg:flex justify-start items-start gap-6">
            <div className="w-64 shrink-0 text-[rgba(36,16,61,1)] text-xs font-bold font-['Inter',sans-serif]">
              Context
            </div>
            <div className="w-[450px] shrink-0 text-[rgba(36,16,61,1)] text-xs font-bold font-['Inter',sans-serif]">
              Primary responsibility
            </div>
            <div className="flex-1 text-[rgba(36,16,61,1)] text-xs font-bold font-['Inter',sans-serif]">
              Boundary / source
            </div>
          </div>
          
          {/* Row 1 */}
          <div className="self-stretch p-5 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6">
            <div className="w-full lg:w-64 shrink-0 text-[rgba(24,20,27,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              Partner / OEM
            </div>
            <div className="w-full lg:w-[450px] shrink-0 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Own the wider proposition, UI, workflows and approved</span>
              <span className="block xl:whitespace-nowrap">integration.</span>
            </div>
            <div className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Partner identity and integration scope require approval; no tier or resale</span>
              <span className="block xl:whitespace-nowrap">rights are implied.</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="self-stretch p-5 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6">
            <div className="w-full lg:w-64 shrink-0 text-[rgba(24,20,27,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              Organization / tenant
            </div>
            <div className="w-full lg:w-[450px] shrink-0 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Maintain the authorized business context and accountable</span>
              <span className="block xl:whitespace-nowrap">organization.</span>
            </div>
            <div className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Exact organization objects and relationships follow the approved</span>
              <span className="block xl:whitespace-nowrap">platform contract.</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="self-stretch p-5 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6">
            <div className="w-full lg:w-64 shrink-0 text-[rgba(24,20,27,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              ZoikoTax
            </div>
            <div className="w-full lg:w-[450px] shrink-0 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Provide supported fiscal controls and evidence for the</span>
              <span className="block xl:whitespace-nowrap">approved capability.</span>
            </div>
            <div className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">No universal production capability or global multi-tenancy claim.</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="self-stretch p-5 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6">
            <div className="w-full lg:w-64 shrink-0 text-[rgba(24,20,27,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              External architecture
            </div>
            <div className="w-full lg:w-[450px] shrink-0 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Billing, ERP, identity, data or compliance systems only</span>
              <span className="block xl:whitespace-nowrap">where supported.</span>
            </div>
            <div className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">External-system ownership and integration support remain explicit;</span>
              <span className="block xl:whitespace-nowrap">support is not automatic.</span>
            </div>
          </div>

          {/* Row 5 */}
          <div className="self-stretch p-5 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6">
            <div className="w-full lg:w-64 shrink-0 text-[rgba(24,20,27,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              Shared support / operations
            </div>
            <div className="w-full lg:w-[450px] shrink-0 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Coordinate responsibility using the approved operating</span>
              <span className="block xl:whitespace-nowrap">model.</span>
            </div>
            <div className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Contracts and governed support sources define boundaries, not this</span>
              <span className="block xl:whitespace-nowrap">diagram.</span>
            </div>
          </div>
        </div>

        <Notice
          className="!bg-[rgba(255,240,231,1)]"
          title="Isolation is an approved concept, not a universal implementation"
          body={
            <>
              <span className="block xl:whitespace-nowrap">Confirm the exact organization separation, access and external-system contracts. The diagram does not define authentication, delegation, tenant hierarchy</span>
              <span className="block xl:whitespace-nowrap">or cross-tenant visibility.</span>
            </>
          }
        />
      </Container>
    </section>
  );
}
