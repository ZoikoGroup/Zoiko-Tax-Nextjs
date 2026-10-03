import Image from "next/image";
import { BellIcon, BracesIcon, CheckIcon, FlaskIcon, GlobeIcon, InfoIcon, LinkSvgIcon, PackageIcon } from "./icons";

const tests = [
  {
    icon: <BracesIcon className="size-5 text-[#D65A2C]" />,
    title: "API request / response",
    desc: "Verify the exact supported request and response contract in the API Reference. Do not treat this architecture page as a schema.",
    tag: "API Reference · exact contract",
  },
  {
    icon: <PackageIcon className="size-5 text-[#D65A2C]" />,
    title: "Bulk asynchronous workflow",
    desc: "Test documented submission, status, result lookup and supported recovery behavior in the approved non-production scope.",
    tag: "Bulk & Batch · async contract",
  },
  {
    icon: <BellIcon className="size-5 text-[#D65A2C]" />,
    title: "Event delivery",
    desc: "Verify approved notification meaning and delivery behavior. Do not assume a notification confirms finance posting.",
    tag: "Webhooks & Events · notification contract",
  },
  {
    icon: <FlaskIcon className="size-5 text-[#D65A2C]" />,
    title: "Sandbox environment",
    desc: "Use Sandbox where available with approved synthetic mapping data. Availability and access remain separately governed.",
    tag: "Sandbox · non-production only",
  },
  {
    icon: <LinkSvgIcon className="size-5 text-[#D65A2C]" />,
    title: "Reconciliation trace",
    desc: "Test defined relationships from originating records through fiscal outcomes, finance handoffs and historical evidence.",
    tag: "End-to-end · scoped references",
  },
  {
    icon: <GlobeIcon className="size-5 text-[#D65A2C]" />,
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

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            11 · SANDBOX &amp; READINESS
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Test the trace, not just the request.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Use approved non-production routes where available. Test end-to-end reconciliation relationships with approved synthetic mapping data, not real customer finance records.
          </p>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          {tests.map((test) => (
            <div
              key={test.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-3.5 shadow-xs hover:shadow-md transition-shadow"
            >
              {test.icon}
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {test.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {test.desc}
              </div>
              <div className="self-stretch text-[#D65A2C] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {test.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 self-stretch p-6 sm:p-8 bg-[#F4EEF9] rounded-3xl border border-[#E7D6F0] grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] justify-start items-start gap-8 lg:gap-12 shadow-sm">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              BEFORE A CONSEQUENTIAL HANDOFF
            </div>
            <div className="self-stretch text-[#18141B] text-2xl sm:text-3xl font-bold font-['Inter',sans-serif] leading-9">
              Readiness is a governed review.
            </div>
            <p className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
              Illustrative review checklist—not completed approvals or a live readiness assessment.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-4 w-full">
            {checklist.map((item) => (
              <div key={item} className="self-stretch flex justify-start items-center gap-3.5">
                <CheckIcon className="size-4 text-[#D65A2C] shrink-0" />
                <div className="flex-1 text-[#18141B] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              A sandbox test is not a production entitlement
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              Successful non-production testing alone does not establish production access, supported coverage, accounting correctness or production readiness. Confirm the approved enterprise scope and Coverage independently.
            </p>
          </div>
        </div>

        <div className="relative z-10 self-stretch flex flex-wrap justify-start items-start gap-3">
          <div className="h-12 px-6 bg-[#BF6735] hover:bg-[#a85527] rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-start items-center gap-2.5 transition-all cursor-pointer">
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Open Sandbox</span>
            <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
          <div className="h-12 px-6 bg-white hover:bg-neutral-50 rounded-full outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex justify-start items-center gap-2.5 transition-all cursor-pointer">
            <span className="text-[#18141B] text-sm font-semibold font-['Inter',sans-serif]">Verify Coverage</span>
            <span className="text-[#D65A2C] text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
