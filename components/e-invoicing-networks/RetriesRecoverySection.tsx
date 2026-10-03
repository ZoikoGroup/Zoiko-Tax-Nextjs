import { ArrowRightIcon, CircleHelpIcon, ClockIcon, CopyIcon, FileXIcon, InfoIcon, RepeatIcon, RotateCwIcon } from "./icons";

const flowBoxes = ["Investigate current approved state", "Check adapter contract and evidence", "Confirm permitted recovery action", "Record the governed decision"];

const cardsRowOne = [
  {
    icon: <RotateCwIcon className="size-5 text-orange-600" />,
    title: "Submission retry",
    desc: "Use approved retry semantics only. Counts, backoff and timing are not prescribed here; consult the exact API and adapter contract.",
  },
  {
    icon: <CopyIcon className="size-5 text-orange-600" />,
    title: "Duplicate risk",
    desc: "Use documented idempotency and correlation behavior. Do not infer a universal duplicate-prevention guarantee.",
  },
  {
    icon: <CircleHelpIcon className="size-5 text-orange-600" />,
    title: "Transport uncertainty",
    desc: "No response is not confirmed acceptance or rejection. Investigate source state before any further submission.",
  },
];

const cardsRowTwo = [
  {
    icon: <FileXIcon className="size-5 text-orange-600" />,
    title: "Validation rejection",
    desc: "Interpret rejection through exact API/adapter documentation. Correct only the governed issue; no sample response code is implied.",
  },
  {
    icon: <ClockIcon className="size-5 text-orange-600" />,
    title: "Partial processing",
    desc: "Use an approved status query or recovery route only where supported. Preserve intermediate and external context.",
  },
  {
    icon: <RepeatIcon className="size-5 text-orange-600" />,
    title: "Resubmission",
    desc: "Lifecycle and legally permitted resubmission remain source-controlled. Do not infer automatic legal compensation or reversal.",
  },
];

export default function RetriesRecoverySection() {
  return (
    <div className="self-stretch px-20 py-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">06 / Retries, duplicate prevention &amp; recovery</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Investigate before you retry.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Recovery is a contract-specific decision. Confirm the current approved state before choosing a permitted next action; never assume blind retry or automatic resubmission is safe.</p>
      </div>
      <div className="self-stretch p-7 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-5 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">Safe decision flow</div>
        <div className="self-stretch inline-flex justify-start items-center gap-2.5 overflow-hidden">
          {flowBoxes.map((box, index) => (
            <div key={box} className="flex-1 flex justify-start items-center gap-2.5 overflow-hidden">
              <div className="flex-1 min-h-24 p-4 bg-violet-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-600 inline-flex flex-col justify-center items-start gap-2 overflow-hidden">
                <div className="self-stretch text-center justify-start text-white text-base font-semibold font-['Inter'] leading-5">{box}</div>
              </div>
              {index < flowBoxes.length - 1 && <ArrowRightIcon className="size-2.5 text-orange-300 shrink-0" />}
            </div>
          ))}
        </div>
        <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">First investigate the approved state, then consult the exact contract and evidence. Proceed only with a supported, legally permitted recovery action. If state or source is unknown, keep the uncertainty explicit and investigate rather than submit again.</p>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {cardsRowOne.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {cardsRowTwo.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-zinc-900 text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Idempotency is adapter-defined, not a blanket promise.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Duplicate handling, retries and resubmission must defer to exact adapter contracts and legally permitted behavior. A general integration pattern never establishes permission to submit a document again.</p>
        </div>
      </div>
    </div>
  );
}
