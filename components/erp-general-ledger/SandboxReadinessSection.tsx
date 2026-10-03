import { BellIcon, BracesIcon, CheckIcon, FlaskIcon, GlobeIcon, InfoIcon, LinkSvgIcon, PackageIcon } from "./icons";

const tests = [
  {
    icon: <BracesIcon className="size-5 text-orange-600" />,
    title: "API request / response",
    desc: "Verify the exact supported request and response contract in the API Reference. Do not treat this architecture page as a schema.",
    tag: "API Reference · exact contract",
  },
  {
    icon: <PackageIcon className="size-5 text-orange-600" />,
    title: "Bulk asynchronous workflow",
    desc: "Test documented submission, status, result lookup and supported recovery behavior in the approved non-production scope.",
    tag: "Bulk & Batch · async contract",
  },
  {
    icon: <BellIcon className="size-5 text-orange-600" />,
    title: "Event delivery",
    desc: "Verify approved notification meaning and delivery behavior. Do not assume a notification confirms finance posting.",
    tag: "Webhooks & Events · notification contract",
  },
  {
    icon: <FlaskIcon className="size-5 text-orange-600" />,
    title: "Sandbox environment",
    desc: "Use Sandbox where available with approved synthetic mapping data. Availability and access remain separately governed.",
    tag: "Sandbox · non-production only",
  },
  {
    icon: <LinkSvgIcon className="size-5 text-orange-600" />,
    title: "Reconciliation trace",
    desc: "Test defined relationships from originating records through fiscal outcomes, finance handoffs and historical evidence.",
    tag: "End-to-end · scoped references",
  },
  {
    icon: <GlobeIcon className="size-5 text-orange-600" />,
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
    <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">11 · SANDBOX &amp; READINESS</div>
        <h2 className="w-full max-w-[1050px] justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Test the trace, not just the request.</h2>
        <p className="w-full max-w-[1060px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Use approved non-production routes where available. Test end-to-end reconciliation relationships with approved synthetic mapping data, not real customer finance records.</p>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {tests.map((test) => (
          <div key={test.title} className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
            {test.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-7">{test.title}</div>
            <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{test.desc}</div>
            <div className="self-stretch justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-5">{test.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] justify-start items-start gap-12 overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">BEFORE A CONSEQUENTIAL HANDOFF</div>
          <div className="self-stretch justify-start text-zinc-900 text-3xl font-bold font-['Inter'] leading-9">Readiness is a governed review.</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Illustrative review checklist—not completed approvals or a live readiness assessment.</p>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          {checklist.map((item) => (
            <div key={item} className="self-stretch flex justify-start items-center gap-3.5 overflow-hidden">
              <CheckIcon className="size-4 text-orange-600 shrink-0" />
              <div className="flex-1 justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-6">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">A sandbox test is not a production entitlement</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Successful non-production testing alone does not establish production access, supported coverage, accounting correctness or production readiness. Confirm the approved enterprise scope and Coverage independently.</p>
        </div>
      </div>
      <div className="self-stretch flex flex-wrap justify-start items-start gap-3 overflow-hidden">
        <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
          <div className="justify-start text-white text-sm font-semibold font-['Inter']">Open Sandbox</div>
          <div className="justify-start text-white text-lg font-normal font-['Inter']">↗</div>
        </div>
        <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Verify Coverage</div>
          <div className="justify-start text-orange-600 text-lg font-normal font-['Inter']">↗</div>
        </div>
      </div>
    </div>
  );
}
