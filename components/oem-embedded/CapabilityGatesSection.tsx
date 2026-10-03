import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";

const gates = [
  {
    num: "01 →",
    title: "Provisioned context",
    body: "An approved organization context exists under the actual model.",
  },
  {
    num: "02 →",
    title: "Entitlement approved",
    body: "The commercial / product grant source authorizes the specific scope.",
  },
  {
    num: "03 →",
    title: "Coverage / environment / security validated",
    body: "Review capability-specific country, pack, network and environment gates.",
  },
  {
    num: "04 •",
    title: "Production activation approval",
    body: "A separately controlled approval establishes the permitted production scope.",
  },
];

const cards = [
  {
    icon: "/oem-embedded/file-check.svg",
    title: "Grant authority",
    body: "Confirm the commercial / product entitlement source and effective scope; never infer a grant from creation or configuration.",
  },
  {
    icon: "/oem-embedded/globe.svg",
    title: "Exact Coverage",
    body: "Validate each capability against its country, pack and network Coverage. A broad market label is not sufficient.",
  },
  {
    icon: "/oem-embedded/shield-check.svg",
    title: "Independent environment",
    body: "Test permission is not production entitlement. Security and production activation approval remain separate gates.",
  },
];

export default function CapabilityGatesSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/oem-embedded/Capability entitlement and activation.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          dark
          eyebrow="04 / CAPABILITY GATES"
          title="A provisioned context is not permission to run."
          description="Approve the exact capability, Coverage and environment independently before production activation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {gates.map((gate) => (
            <div
              key={gate.num}
              className="self-stretch p-5 bg-violet-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-3.5"
            >
              <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
                {gate.num}
              </span>
              <div className="self-stretch text-white text-lg font-semibold leading-6 font-['Inter',sans-serif]">
                {gate.title}
              </div>
              <div className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {gate.body}
              </div>
            </div>
          ))}
        </div>

        {/* Catalog authority band */}
        <div className="self-stretch p-7 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-500 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8">
          <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-3">
            <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              CATALOG AUTHORITY
            </span>
            <div className="self-stretch text-white text-2xl font-normal leading-8 font-['Inter',sans-serif]">
              Partner-eligible capability details require approved source
            </div>
          </div>
          <p className="flex-1 text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
            Only the approved partner-eligible catalog can establish eligibility.
            Exact states, effective changes and revocation behavior follow
            formally governed sources. Public navigation is not a catalog grant
            and does not make capabilities available automatically to every
            partner or tenant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="self-stretch p-7 bg-violet-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-600 flex flex-col justify-start items-start gap-3.5"
            >
              <Image
                src={card.icon}
                alt=""
                width={28}
                height={28}
                className="size-7"
              />
              <div className="flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch text-white text-xl font-semibold leading-7 font-['Inter',sans-serif]">
                  {card.title}
                </div>
                <div className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {card.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Notice
          dark
          title="No inherited entitlement"
          body="Text equivalent: provisioned context → entitlement approved → Coverage / environment / security validated → production activation approval. Navigation, partner context and sandbox access do not bypass any gate."
        />
      </Container>
    </section>
  );
}
