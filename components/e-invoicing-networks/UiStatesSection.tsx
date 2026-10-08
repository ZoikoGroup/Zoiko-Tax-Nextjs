import { ArrowRightIcon, ArrowRightPngIcon, BookOpenIcon, CircleHelpIcon, CircleSlashIcon, FileQuestionIcon, ListOrderedIcon, MinusIcon, RefreshCwIcon, SearchXIcon, XCircleIcon } from "./icons";

const uiStates = [
  {
    icon: <img src="/e-invoicing-networks/icons/book-open.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Default documentation",
    label: "Conceptual guidance",
    desc: <>Patterns explain boundaries; they do not confirm<br />current support.</>,
    link: "Read approved adapter docs",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/map.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "No published Coverage",
    label: "Support not confirmed",
    desc: <>No approved entry is available here. Do not infer<br />production availability.</>,
    link: "Check current Coverage",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/circle-slash.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Unavailable adapter",
    label: "Path unavailable",
    desc: <>Do not route through an unavailable path or substitute<br />an unapproved one.</>,
    link: "Review approved support source",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/file-question.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Missing source",
    label: "Source not supplied",
    desc: <>Mapping or contract context is missing. Keep the<br />unknown visible.</>,
    link: "Consult the technical owner",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/unplug.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Network / transport uncertainty",
    label: "Outcome unresolved",
    desc: <>No response is not rejection or success. Investigate<br />approved state first.</>,
    link: "Review supported state and trace",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/lock-keyhole.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Restricted detail",
    label: "Detail access-controlled",
    desc: <>Public diagnostics remain sanitized; credentials and<br />private payloads stay hidden.</>,
    link: "Use the approved access route",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/circle-help.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Unknown status",
    label: "Unknown / awaiting-source",
    desc: <>No approved final meaning is supplied. Never render an<br />unknown as accepted.</>,
    link: "Consult approved status mapping",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/history.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Stale mapping",
    label: "Currentness unconfirmed",
    desc: <>Do not publish an outdated interpretation as current.<br />Preserve historical context.</>,
    link: "Verify mapping source and version",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/list-ordered.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Textual diagram fallback",
    label: "Core guidance without JS",
    desc: <>1 Source owns context; 2 Adapter applies supported<br />logic; 3 External party owns its outcome; 4 Teams<br />consume states; 5 Evidence keeps trace.</>,
    link: "Read the numbered text equivalent",
  },
];

export default function UiStatesSection() {
  return (
    <div className="w-full flex justify-center py-20 bg-[#FAF3FF] overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">13 / UI states &amp; safe recovery</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Unknown stays unknown. Guidance stays useful.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">
          Illustrative documentation specimens—not live service records. Status is stated in text, and essential guidance does<br />not depend on color, hover or animation.
        </p>
      </div>
      <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {uiStates.map((state) => (
          <div key={state.title} className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
              {state.icon}
              <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">{state.title}</div>
            </div>
            <div className="self-stretch justify-start text-violet-950 text-xs font-semibold font-['Inter'] leading-5">{state.label}</div>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">{state.desc}</p>
            <div className="self-stretch justify-start items-center inline-flex gap-1.5">
              <div className="text-[#D65A2C] text-xs font-semibold font-['Inter'] leading-5">{state.link}</div>
              <img src="/e-invoicing-networks/icons/arrow-right.svg" alt="" width={12} height={12} className="shrink-0" />
            </div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-7 bg-[#F0E6F7] rounded-3xl inline-flex justify-start items-start gap-10 overflow-hidden">
        <div className="w-[660px] max-w-full inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Documentation action affordances</div>
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">Default</div>
              <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                <div className="justify-start text-white text-sm font-semibold font-['Inter']">API Reference</div>
                <ArrowRightIcon className="size-4 text-white" />
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">Hover</div>
              <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                <div className="justify-start text-white text-sm font-semibold font-['Inter']">API Reference</div>
                <ArrowRightIcon className="size-4 text-white" />
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">Focus</div>
              <div className="h-12 px-5 bg-white rounded-[999px] outline outline-[3px] outline-offset-[-3px] outline-orange-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">API Reference</div>
                <ArrowRightPngIcon className="size-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="self-stretch inline-flex justify-between items-start overflow-hidden">
            <div className="justify-start text-violet-950 text-base font-semibold font-['Inter']">Recovery guidance · expanded</div>
            <MinusIcon className="size-4 text-violet-950" />
          </div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
            Investigate current approved state before retrying. The required recovery<br />guidance remains visible; no private incident or credential detail is disclosed.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
