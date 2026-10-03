import { ArrowLeftRightIcon, FileIcon, GlobeIcon, InfoIcon, WorkflowIcon } from "./icons";

const pillars = [
  {
    num: "01 · Business context",
    title: "Billing / ERP / source",
    desc: "Owns the invoice and business context. ZoikoTax does not replace the enterprise ERP or BSS.",
    dark: false,
    icon: <FileIcon className="size-5 text-orange-600" />,
  },
  {
    num: "02 · Integration boundary",
    title: "ZoikoTax adapter",
    desc: "Applies supported transformation, routing and integration logic under the exact approved adapter contract.",
    dark: true,
    icon: <WorkflowIcon className="size-5 text-orange-300" />,
  },
  {
    num: "03 · External outcome",
    title: "External network / authority",
    desc: "Owns regime-specific acceptance, validation, clearance, reporting or acknowledgement. These are not universal obligations.",
    dark: false,
    icon: <GlobeIcon className="size-5 text-orange-600" />,
  },
];

const flowBoxes = ["Source context", "Supported adapter logic", "External response"];

const downstream = [
  {
    num: "04 · Downstream finance / compliance",
    desc: "Consumes approved states and evidence within the enterprise workflow. Downstream use does not change the external authority’s decision.",
  },
  {
    num: "05 · Evidence / audit",
    desc: "Preserves supported request, response and version trace across the workflow for investigation and reconstruction.",
  },
];

export default function SystemBoundarySection() {
  return (
    <div className="self-stretch px-20 py-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">01 / System boundary &amp; responsibility</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">One workflow. Distinct responsibilities.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Keep business context, adapter behavior and external decisions separate—then connect approved states and evidence to the teams that need them.</p>
      </div>
      <div className="self-stretch p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className={`flex-1 p-6 rounded-2xl inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden ${
                pillar.dark ? "bg-violet-950" : "bg-violet-100"
              }`}
            >
              <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
                <div className={`justify-start text-xs font-bold font-['Inter'] uppercase ${pillar.dark ? "text-orange-300" : "text-orange-600"}`}>{pillar.num}</div>
                {pillar.icon}
              </div>
              <div className={`self-stretch justify-start text-2xl font-semibold font-['Inter'] leading-7 ${pillar.dark ? "text-white" : "text-zinc-900"}`}>{pillar.title}</div>
              <p className={`self-stretch justify-start text-base font-normal font-['Inter'] leading-6 ${pillar.dark ? "text-zinc-300" : "text-stone-500"}`}>{pillar.desc}</p>
            </div>
          ))}
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5 overflow-hidden">
          {flowBoxes.map((box, index) => (
            <div key={box} className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden">
              <div className="flex-1 min-h-24 p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-start gap-2 overflow-hidden">
                <div className="self-stretch text-center justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-5">{box}</div>
              </div>
              {index < flowBoxes.length - 1 && <ArrowLeftRightIcon className="size-4 text-orange-600 shrink-0" />}
            </div>
          ))}
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
          {downstream.map((card) => (
            <div key={card.num} className="flex-1 p-6 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">{card.num}</div>
              <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
            </div>
          ))}
        </div>
        <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Read the flow as: source context ↔ supported adapter logic ↔ external response; approved states continue to finance/compliance, while supported traces are preserved in evidence. Arrows show data/control flow, not guaranteed synchronous execution.</p>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Coverage and technical ownership are separate.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Coverage owns exact country, network, capability and environment support. The technical adapter owner governs formats, endpoint/schema, credentials, certificates, signatures, transport, external behavior, mappings, timing and retries. Architecture creates no universal legal obligation.</p>
        </div>
      </div>
    </div>
  );
}
