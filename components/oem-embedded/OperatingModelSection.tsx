import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";

const layers = [
  {
    layer: "Partner / OEM",
    role: "Wider proposition, interface and workflows",
    boundary: "Approved integration boundary",
    surface: "bg-white/5",
  },
  {
    layer: "Organization / tenant",
    role: "Authorized business context and responsibility",
    boundary: "Explicit organization boundary",
    surface: "bg-white/10",
  },
  {
    layer: "ZoikoTax",
    role: "Supported fiscal controls and evidence",
    boundary: "Approved capability boundary",
    surface: "bg-white/5",
  },
];

const rows = [
  {
    context: "Partner / OEM",
    responsibility:
      "Own the wider proposition, UI, workflows and approved integration.",
    boundary:
      "Partner identity and integration scope require approval; no tier or resale rights are implied.",
  },
  {
    context: "Organization / tenant",
    responsibility:
      "Maintain the authorized business context and accountable organization.",
    boundary:
      "Exact organization objects and relationships follow the approved platform contract.",
  },
  {
    context: "ZoikoTax",
    responsibility:
      "Provide supported fiscal controls and evidence for the approved capability.",
    boundary: "No universal production capability or global multi-tenancy claim.",
  },
  {
    context: "External architecture",
    responsibility:
      "Billing, ERP, identity, data or compliance systems only where supported.",
    boundary:
      "External-system ownership and integration support remain explicit; support is not automatic.",
  },
  {
    context: "Shared support / operations",
    responsibility: "Coordinate responsibility using the approved operating model.",
    boundary:
      "Contracts and governed support sources define boundaries, not this diagram.",
  },
];

export default function OperatingModelSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/oem-embedded/Operating model.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="01 / OPERATING MODEL"
          title="One embedded proposition. Explicit responsibilities."
          description="Embedding connects responsibilities; it does not merge their authority."
        />

        {/* Three-layer model */}
        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-4">
          <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
            THREE-LAYER MODEL · CONCEPTUAL, NOT A TENANT HIERARCHY
          </span>
          {layers.map((item) => (
            <div
              key={item.layer}
              className={`self-stretch p-6 ${item.surface} rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-500 flex flex-col lg:flex-row justify-start lg:items-center gap-3 lg:gap-8`}
            >
              <div className="w-full lg:w-64 shrink-0 text-white text-2xl font-normal font-['Inter',sans-serif]">
                {item.layer}
              </div>
              <div className="flex-1 text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {item.role}
              </div>
              <div className="w-full lg:w-64 shrink-0 text-orange-300 text-sm font-normal leading-5 font-['Inter',sans-serif]">
                {item.boundary}
              </div>
            </div>
          ))}
          <p className="self-stretch text-zinc-300 text-sm font-normal leading-6 font-['Inter',sans-serif]">
            Text equivalent: the partner owns its wider experience and approved
            integration; the organization remains the authorized business
            context; ZoikoTax provides supported fiscal controls and evidence
            within the approved scope.
          </p>
        </div>

        {/* Responsibility table */}
        <div className="self-stretch bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-5 bg-violet-100 hidden lg:flex justify-start items-start gap-6">
            <div className="w-64 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Context
            </div>
            <div className="w-96 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Primary responsibility
            </div>
            <div className="flex-1 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Boundary / source
            </div>
          </div>
          {rows.map((row) => (
            <div
              key={row.context}
              className="self-stretch p-5 border-t border-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6"
            >
              <div className="w-full lg:w-64 shrink-0 text-zinc-900 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.context}
              </div>
              <div className="w-full lg:w-96 shrink-0 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.responsibility}
              </div>
              <div className="flex-1 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.boundary}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Isolation is an approved concept, not a universal implementation"
          body="Confirm the exact organization separation, access and external-system contracts. The diagram does not define authentication, delegation, tenant hierarchy or cross-tenant visibility."
        />
      </Container>
    </section>
  );
}
