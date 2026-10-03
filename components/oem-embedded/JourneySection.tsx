import Image from "next/image";
import Link from "next/link";
import { Container, Notice, SectionHeader, SecondaryButton } from "./shared";

const journey = [
  {
    num: "01",
    title: "Discover the model",
    desc: "Read Integration Guides and the public architecture.",
  },
  {
    num: "02",
    title: "Confirm technical / commercial scope",
    desc: "Validate the integration separately from approved rights.",
  },
  {
    num: "03",
    title: "Map identity",
    desc: "Confirm partner, organization, environment and attribution.",
  },
  {
    num: "04",
    title: "Verify entitlement / Coverage",
    desc: "Use exact capability, grant and Coverage sources.",
  },
  {
    num: "05",
    title: "Test a separately enabled environment",
    desc: "Verify supported test availability without production assumptions.",
  },
  {
    num: "06",
    title: "Review operational / evidence / security ownership",
    desc: "Agree source-defined responsibilities and traceability.",
  },
  {
    num: "07",
    title: "Approve activation",
    desc: "Obtain independent production activation approval.",
  },
  {
    num: "08",
    title: "Operate / offboard",
    desc: "Follow the governed operational and lifecycle model.",
  },
];

const safeStates = [
  {
    state: "Pending / setup",
    explanation: "Setup does not imply capability permission.",
    step: "Review the approved provisioning source.",
  },
  {
    state: "Validation",
    explanation: "Readiness is not yet established by a test alone.",
    step: "Confirm the exact applicable gates.",
  },
  {
    state: "Restricted",
    explanation: "Do not infer which operations remain permitted.",
    step: "Use the approved restriction policy and owner.",
  },
  {
    state: "Suspended",
    explanation: "Do not infer triggers, notice or restoration.",
    step: "Follow the governed operational source.",
  },
  {
    state: "Offboarded",
    explanation: "Do not infer retention or historical access.",
    step: "Review the approved lifecycle / data policy.",
  },
  {
    state: "Missing source",
    explanation: "The exact mechanism is unspecified.",
    step: "Preserve the docs route; request the governing source.",
  },
  {
    state: "Unavailable route",
    explanation: "No unsupported destination is offered.",
    step: "Keep known public documentation useful.",
  },
  {
    state: "Unknown entitlement",
    explanation: "Do not assume access or disclose private organization existence.",
    step: "Confirm authority without revealing private scope.",
  },
  {
    state: "No JavaScript / print",
    explanation: "Core explanations and route labels remain readable.",
    step: "Use visible documentation references and text equivalents.",
  },
];

export default function JourneySection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/oem-embedded/Docs first conversion.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="13 / IMPLEMENTATION JOURNEY"
          title="Move forward only when the next boundary is clear."
          description="A docs-first journey with safe handling for missing sources, unknown entitlement and unavailable routes."
        />

        {/* Journey steps */}
        <div className="self-stretch bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
          {journey.map((row) => (
            <div
              key={row.num}
              className={`self-stretch p-5 flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-6 ${
                row.num !== "01" ? "border-t border-zinc-300" : ""
              }`}
            >
              <div className="w-12 shrink-0 text-orange-600 text-base font-bold font-['Inter',sans-serif]">
                {row.num}
              </div>
              <div className="w-full sm:w-96 shrink-0 text-zinc-900 text-lg font-normal leading-6 font-['Inter',sans-serif]">
                {row.title}
              </div>
              <div className="flex-1 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Specimens */}
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
            CONCEPTUAL SPECIMENS · NOT LIVE CAPABILITY CONTROLS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
                DEFAULT
              </span>
              <div className="self-stretch text-zinc-900 text-xl font-normal font-['Inter',sans-serif]">
                Documentation first
              </div>
              <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                Use an approved public guide to understand the model.
              </p>
              <SecondaryButton href="/integration-guides">
                Integration Guides
              </SecondaryButton>
            </div>
            <div className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
                VISIBLE FOCUS
              </span>
              <div className="self-stretch text-zinc-900 text-xl font-normal font-['Inter',sans-serif]">
                A clear next route
              </div>
              <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                Focus is visible without relying on motion or hover.
              </p>
              <Link
                href="/integration-guides"
                className="px-5 py-3.5 bg-white rounded-[999px] outline outline-[3px] outline-offset-[-3px] outline-orange-600 inline-flex justify-start items-center gap-3 hover:bg-neutral-50 transition-all cursor-pointer"
              >
                <span className="text-zinc-900 text-sm font-semibold font-['Inter',sans-serif]">
                  Open API Reference
                </span>
                <Image
                  src="/oem-embedded/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4"
                />
              </Link>
            </div>
            <div className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
                EXPANDED
              </span>
              <div className="self-stretch text-zinc-900 text-xl font-normal font-['Inter',sans-serif]">
                Capability boundary −
              </div>
              <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                Organization context, entitlement, Coverage, environment and
                activation approval are distinct. No grant is implied by this
                explanatory disclosure.
              </p>
            </div>
          </div>
        </div>

        {/* Safe-state table */}
        <div className="self-stretch bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-5 bg-violet-100 hidden lg:flex justify-start items-start gap-6">
            <div className="w-64 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Illustrative safe state
            </div>
            <div className="w-96 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Public explanation
            </div>
            <div className="flex-1 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Documentation-first next step
            </div>
          </div>
          {safeStates.map((row) => (
            <div
              key={row.state}
              className="self-stretch p-5 border-t border-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6"
            >
              <div className="w-full lg:w-64 shrink-0 text-zinc-900 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.state}
              </div>
              <div className="w-full lg:w-96 shrink-0 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.explanation}
              </div>
              <div className="flex-1 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.step}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Safe states do not reveal private organization status"
          body="These are conceptual public explanations, not actual tenant states or operating controls. Meaning is written in text rather than color alone; diagrams include text equivalents and no essential information depends on hover or motion."
        />
      </Container>
    </section>
  );
}
