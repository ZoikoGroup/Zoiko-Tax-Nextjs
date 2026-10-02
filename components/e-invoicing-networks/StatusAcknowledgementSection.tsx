import { ArrowRightIcon, InfoIcon } from "./icons";

const flowBoxes = ["Source-controlled external response", "Approved mapping", "Governed normalized status", "Downstream consumption"];

const contexts = [
  {
    label: "Delivery context",
    title: "Receipt",
    desc: "Indicates receipt only to the extent the exact adapter defines it. Receipt must not be rendered as acceptance or clearance.",
  },
  {
    label: "Intermediate context",
    title: "Processing acknowledgement",
    desc: "May describe progress or a processing step. It is distinct from a final decision and retains its adapter-specific meaning.",
  },
  {
    label: "Defined decision",
    title: "Final outcome",
    desc: "Consume only the meaning approved for the exact external response and mapping. There is no universal status taxonomy.",
  },
];

const meanings = [
  { title: "Cleared", desc: "A clearance outcome only when defined by the approved adapter." },
  { title: "Reported", desc: "A reporting outcome only when defined by the approved adapter." },
  { title: "Accepted", desc: "An acceptance outcome only when defined by the approved adapter." },
  { title: "Rejected", desc: "A rejection outcome only when defined by the approved adapter." },
];

export default function StatusAcknowledgementSection() {
  return (
    <div className="self-stretch px-20 py-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">04 / Status &amp; acknowledgement model</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Receipt is not the final outcome.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">External response → approved mapping → governed normalized status → downstream consumption. Keep the original adapter context accessible throughout.</p>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-2.5 overflow-hidden">
        {flowBoxes.map((box, index) => (
          <div key={box} className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden">
            <div className="flex-1 min-h-24 p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-start gap-2 overflow-hidden">
              <div className="self-stretch text-center justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-5">{box}</div>
            </div>
            {index < flowBoxes.length - 1 && <ArrowRightIcon className="size-2.5 text-orange-600 shrink-0" />}
          </div>
        ))}
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {contexts.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">{card.label}</div>
            <div className="self-stretch justify-start text-zinc-900 text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Conditional illustrative meanings · not current records</div>
        <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
          {meanings.map((meaning) => (
            <div key={meaning.title} className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-violet-950 text-lg font-semibold font-['Inter']">{meaning.title}</div>
              <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">{meaning.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Unknown / awaiting-source is an explicit safe state.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">No response is neither rejection nor success. Do not fabricate codes, response times or currentness. Publish an exact-source timestamp only when supplied and approved; otherwise currentness is not published.</p>
        </div>
      </div>
    </div>
  );
}
