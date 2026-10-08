import { ArrowRightIcon, FileCheckIcon, GitBranchIcon, InboxIcon, InfoIcon, SendIcon, ShieldCheckIcon } from "./icons";

const rowOne = [
  {
    icon: <img src="/e-invoicing-networks/icons/file-check-2.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Clearance-oriented",
    desc: "An external clearance decision may be part of the governed lifecycle. Do not infer universal pre-clearance, legal timing or an approval guarantee.",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/send.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Reporting-oriented",
    desc: "A reporting step conveys required information under the applicable contract. Reporting is not automatically clearance or acceptance.",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/scan-line.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Validation-oriented",
    desc: "Defined checks can produce a validation result. Passing technical validation does not independently establish legal correctness.",
  },
];

const rowTwo = [
  {
    icon: <img src="/e-invoicing-networks/icons/message-square.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Acknowledgement-oriented",
    desc: "An acknowledgement may confirm receipt or processing progress. It is not a final outcome unless the approved adapter explicitly defines it that way.",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/git-branch.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Hybrid / multi-step",
    desc: "Several external steps may coexist, with distinct acknowledgements and final states. Do not collapse them into one universal lifecycle or infer a country or regime.",
  },
];

const patternStates = ["Prepared context", "Submission context", "Awaiting source", "Defined outcome, if supplied"];

export default function DocumentLifecycleSection() {
  return (
    <div className="w-full flex justify-center py-20 bg-[#FAF3FF] overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">03 / Document lifecycle &amp; pattern variants</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Different patterns. Different meanings.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Clearance, reporting, validation and acknowledgement are distinct families. Their steps and effects must be read in the approved adapter’s regime-specific context.</p>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {rowOne.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {rowTwo.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="self-stretch p-7 bg-[#F0E6F7] rounded-3xl flex flex-col justify-start items-start gap-5 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Illustrative pattern — actual states adapter-defined</div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5 overflow-hidden">
          {patternStates.map((state, index) => (
            <div key={state} className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden">
              <div className="flex-1 min-h-24 p-4 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-center items-start gap-2 overflow-hidden">
                <div className="self-stretch text-center justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-5">{state}</div>
              </div>
              {index < patternStates.length - 1 && <ArrowRightIcon className="size-2.5 text-orange-600 shrink-0" />}
            </div>
          ))}
        </div>
        <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Read as conceptual state families, not a universal exact sequence: prepared and submitted context may lead to an awaiting-source state; an outcome exists only when the approved source defines and supplies one. Branches, intermediate steps and timing vary by adapter.</p>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">No regime is implied by a pattern.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">These families do not assert any country’s legal obligations, universal pre-clearance requirements or current production coverage. Validation must never be presented as proof of legal correctness.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
