import Image from "next/image";
import {
  Code2Icon,
  FlaskConicalIcon,
  GitCompareArrowsIcon,
  GlobeSvgIcon,
  InfoIcon,
  LayersIcon,
  RadioIcon,
  SquareIcon,
} from "./icons";

const tests = [
  {
    icon: <Code2Icon className="size-5 text-[#D65A2C]" />,
    title: "API request / response",
    desc: "Verify the exact supported request and response contract in the API Reference. Do not treat this architecture page as a schema.",
    tag: "API Reference · exact contract",
  },
  {
    icon: <LayersIcon className="size-5 text-[#D65A2C]" />,
    title: "Bulk asynchronous workflow",
    desc: "Test documented submission, status, result lookup and supported recovery behavior in the approved non-production scope.",
    tag: "Bulk & Batch · async contract",
  },
  {
    icon: <RadioIcon className="size-5 text-[#D65A2C]" />,
    title: "Event delivery",
    desc: "Verify approved notification meaning and delivery behavior. Do not assume a notification confirms finance posting.",
    tag: "Webhooks & Events · notification contract",
  },
  {
    icon: <FlaskConicalIcon className="size-5 text-[#D65A2C]" />,
    title: "Sandbox environment",
    desc: "Use Sandbox where available with approved synthetic mapping data. Availability and access remain separately governed.",
    tag: "Sandbox · non-production only",
  },
  {
    icon: <GitCompareArrowsIcon className="size-5 text-[#D65A2C]" />,
    title: "Reconciliation trace",
    desc: "Test defined relationships from originating records through fiscal outcomes, finance handoffs and historical evidence.",
    tag: "End-to-end · scoped references",
  },
  {
    icon: <GlobeSvgIcon className="size-5 text-[#D65A2C]" />,
    title: "Coverage verification",
    desc: "Check capability-specific support and readiness in Coverage. No country, currency or production availability is inferred here.",
    tag: "Coverage · separately authoritative",
  },
];

const checklist = [
  "Enterprise finance and interface owner identified",
  "Mapping responsibility and configuration approval confirmed",
  "Defined correlation across source, fiscal and finance handoffs",
  "Correction, retry and reconciliation behavior understood",
  "Evidence references and required approvals verified",
  "Production readiness and Coverage independently confirmed",
];

export default function SandboxReadinessSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            11 · SANDBOX &amp; READINESS
          </div>
          <h2 className="w-full text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            Test the trace, not just the request.
          </h2>
          <p className="w-full text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Use approved non-production routes where available. Test end-to-end reconciliation relationships with<br className="hidden lg:block" />
            approved synthetic mapping data, not real customer finance records.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 sm:gap-6">
          {tests.map((test) => (
            <div
              key={test.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-4 min-h-[240px]"
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                {test.icon}
                <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                  {test.title}
                </div>
                <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                  {test.desc}
                </div>
              </div>
              <div className="mt-auto text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {test.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Readiness Checklist Container */}
        <div className="relative z-10 self-stretch p-6 sm:p-8 bg-[rgba(255,255,255,1)] rounded-2xl sm:rounded-3xl border border-[#E7D6F0] grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] justify-start items-start gap-8 lg:gap-12 shadow-sm">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              BEFORE A CONSEQUENTIAL HANDOFF
            </div>
            <div className="self-stretch text-[#18141B] text-2xl sm:text-3xl font-bold font-['Inter',sans-serif] leading-tight">
              Readiness is a<br />governed review.
            </div>
            <p className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block xl:whitespace-nowrap">Illustrative review checklist—not completed</span>
              <span className="block xl:whitespace-nowrap">approvals or a live readiness assessment.</span>
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-3.5 w-full">
            {checklist.map((item) => (
              <div key={item} className="self-stretch flex justify-start items-center gap-3">
                <SquareIcon className="size-4 shrink-0 text-[#D65A2C]" />
                <div className="flex-1 text-[#18141B] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-5">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Notice Callout */}
        <div className="relative z-10 self-stretch p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex justify-start items-start gap-3.5 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              A sandbox test is not a production entitlement
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block lg:whitespace-nowrap">
                Successful non-production testing alone does not establish production access, supported coverage, accounting correctness or production readiness.
              </span>
              <span className="block lg:whitespace-nowrap">
                Confirm the approved enterprise scope and Coverage independently.
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 self-stretch flex flex-wrap justify-start items-start gap-3">
          <div className="h-10 px-5 bg-[#D65A2C] hover:bg-[#c04e22] rounded-full shadow-sm flex justify-start items-center gap-1.5 transition-all cursor-pointer">
            <span className="text-white text-xs sm:text-sm font-semibold font-['Inter',sans-serif]">Open Sandbox</span>
            <span className="text-white text-sm font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
          <div className="h-10 px-5 bg-white hover:bg-neutral-50 rounded-full border border-[#D8CEDD] flex justify-start items-center gap-1.5 transition-all cursor-pointer">
            <span className="text-[#18141B] text-xs sm:text-sm font-semibold font-['Inter',sans-serif]">Verify Coverage</span>
            <span className="text-[#D65A2C] text-sm font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

