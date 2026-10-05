import Image from "next/image";
import { InfoIcon } from "./icons";

const steps = [
  { num: "01", title: "Discover", desc: <>Read the API contract, integration<br />guides and approved adapter<br />documentation.</>, owner: "Developer / API platform" },
  { num: "02", title: "Verify Coverage", desc: <>Confirm exact adapter, capability<br />and environment support in<br />current Coverage.</>, owner: "Coverage owner" },
  { num: "03", title: "Map", desc: <>Map the source document and<br />conceptual correlation to the<br />governed contract.</>, owner: "Source system + adapter owner" },
  { num: "04", title: "Configure", desc: <>Control routing and credentials<br />using approved technical<br />requirements.</>, owner: "Adapter owner + security" },
  { num: "05", title: "Test", desc: <>Use separately available non-<br />production tests and governed<br />negative cases.</>, owner: "Engineering + DX" },
  { num: "06", title: "Observe", desc: <>Inspect approved statuses,<br />recovery behavior and supported<br />evidence.</>, owner: "Operations + platform" },
  { num: "07", title: "Approve", desc: <>Complete technical, Coverage,<br />security and applicable regulatory<br />gates.</>, owner: "Accountable release owners" },
  { num: "08", title: "Operate", desc: <>Monitor, recover, reconcile and<br />preserve evidence under<br />approved contracts.</>, owner: "Enterprise operations" },
];

export default function ImplementationJourneySection() {
  return (
    <div className="relative w-full flex justify-center py-20 bg-[#FAF3FF] overflow-hidden">
      <Image
        src="/existing-tax-engines/0.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">12 / Implementation journey &amp; ownership</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Move from discovery to governed operation.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8 whitespace-nowrap">
          Discover → Verify Coverage → Map → Configure → Test → Observe → Approve → Operate. The numbered guidance is<br />the full text equivalent of the journey.
        </p>
      </div>
      <div className="relative self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 overflow-hidden">
        {steps.map((step, index) => (
          <div key={step.num} className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div className="justify-start items-center inline-flex gap-1.5 text-orange-600 text-xs font-bold font-['Inter']">
              {step.num}
              {index < 7 ? (
                <img src="/e-invoicing-networks/icons/arrow-right.svg" alt="" width={12} height={12} className="shrink-0" />
              ) : (
                <span className="text-orange-600">•</span>
              )}
            </div>
            <div className="self-stretch justify-start text-zinc-900 text-xl font-semibold font-['Inter']">{step.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{step.desc}</p>
            <div className="self-stretch justify-start text-violet-950 text-xs font-semibold font-['Inter'] leading-4">{step.owner}</div>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-6 bg-[#FFF0E6] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Approval is a gate, not a schedule.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
            This journey promises no onboarding, approval, authority response or activation time. Source-approved technical behavior, Coverage and security remain distinct responsibilities;<br />public content cannot originate those facts.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
