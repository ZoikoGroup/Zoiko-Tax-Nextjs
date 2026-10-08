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
            13 / IMPLEMENTATION JOURNEY
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Move forward only when the next boundary is clear.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            A docs-first journey with safe handling for missing sources, unknown entitlement and unavailable routes.
          </p>
        </div>

        {/* Journey steps */}
        <div className="self-stretch bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start overflow-hidden">
          {journey.map((row) => (
            <div
              key={row.num}
              className={`self-stretch p-5 flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-6 ${
                row.num !== "01" ? "border-t border-[rgba(216,206,221,1)]" : ""
              }`}
            >
              <div className="w-12 shrink-0 text-[rgba(214,90,44,1)] text-base font-bold font-['Inter',sans-serif]">
                {row.num}
              </div>
              <div className="w-full sm:w-96 shrink-0 text-[rgba(24,20,27,1)] text-lg font-normal leading-6 font-['Inter',sans-serif]">
                {row.title}
              </div>
              <div className="flex-1 text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Specimens */}
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            CONCEPTUAL SPECIMENS · NOT LIVE CAPABILITY CONTROLS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="self-stretch p-6 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-4">
              <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
                DEFAULT
              </span>
              <div className="self-stretch text-[rgba(24,20,27,1)] text-xl font-normal font-['Inter',sans-serif]">
                Documentation first
              </div>
              <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                Use an approved public guide to understand the model.
              </p>
              <Link
                href="/integration-guides"
                className="h-[47px] px-5 bg-white hover:bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer mt-auto"
              >
                <span className="text-[rgba(24,20,27,1)] text-sm font-semibold font-['Inter',sans-serif]">
                  Integration Guides
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
            <div className="self-stretch p-6 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-4">
              <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
                VISIBLE FOCUS
              </span>
              <div className="self-stretch text-[rgba(24,20,27,1)] text-xl font-normal font-['Inter',sans-serif]">
                A clear next route
              </div>
              <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                Focus is visible without relying on motion or hover.
              </p>
              <Link
                href="/integration-guides"
                className="h-[47px] px-5 bg-white hover:bg-neutral-50 rounded-[999px] outline outline-2 outline-offset-[-2px] outline-[rgba(214,90,44,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer mt-auto"
              >
                <span className="text-[rgba(24,20,27,1)] text-sm font-semibold font-['Inter',sans-serif]">
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
            <div className="self-stretch p-6 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-4">
              <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
                EXPANDED
              </span>
              <div className="self-stretch text-[rgba(24,20,27,1)] text-xl font-normal font-['Inter',sans-serif]">
                Capability boundary −
              </div>
              <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Organization context, entitlement, Coverage,</span>
                <span className="block xl:whitespace-nowrap">environment and activation approval are distinct.</span>
                <span className="block xl:whitespace-nowrap">No grant is implied by this explanatory</span>
                <span className="block xl:whitespace-nowrap">disclosure.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Safe-state table */}
        <div className="self-stretch bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-5 bg-[rgba(238,229,245,1)] hidden lg:flex justify-start items-start gap-6">
            <div className="w-[280px] shrink-0 text-[rgba(48,17,83,1)] text-xs font-bold font-['Inter',sans-serif]">
              Illustrative safe state
            </div>
            <div className="w-[420px] shrink-0 text-[rgba(48,17,83,1)] text-xs font-bold font-['Inter',sans-serif]">
              Public explanation
            </div>
            <div className="flex-1 text-[rgba(48,17,83,1)] text-xs font-bold font-['Inter',sans-serif]">
              Documentation-first next step
            </div>
          </div>
          {safeStates.map((row) => (
            <div
              key={row.state}
              className="self-stretch p-5 border-t border-[rgba(216,206,221,1)] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6"
            >
              <div className="w-full lg:w-[280px] shrink-0 text-[rgba(24,20,27,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.state}
              </div>
              <div className="w-full lg:w-[420px] shrink-0 text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.explanation}
              </div>
              <div className="flex-1 text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.step}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">Safe states do not reveal private organization status</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">These are conceptual public explanations, not actual tenant states or operating controls. Meaning is written in text rather than color alone; diagrams include</span>
              <span className="block xl:whitespace-nowrap">text equivalents and no essential information depends on hover or motion.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
