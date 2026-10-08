import { ArrowUpRightPngIcon, InfoIcon } from "./icons";

const anatomyRows = [
  { title: "Source record reference", desc: "Approved linkage to the enterprise source; no sensitive source record is shown." },
  { title: "Transformed representation / version", desc: "Supported transformation context and its pinned version." },
  { title: "Submission context", desc: "Supported request, adapter, timestamp and destination context." },
  { title: "External response", desc: "Approved response and its original adapter-specific meaning." },
  { title: "Supported state history", desc: "State transitions preserved with their historical interpretation." },
  { title: "Pinned versions", desc: "Adapter, content and rule versions used for that historical context." },
  { title: "Replay / investigation route", desc: "An approved route for reconstruction, subject to access and visibility." },
];

const chips = ["Source", "Adapter", "Response"];

export default function EvidenceReplaySection() {
  return (
    <div className="w-full flex justify-center py-20 bg-[#FAF3FF] overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">08 / Evidence, traceability &amp; replay</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px] whitespace-nowrap">A trace you can investigate. A context you can reconstruct.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">
          Preserve the supported chain from source context to external response without turning a public example into a real<br />invoice or a claim of legal proof.
        </p>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
        <div className="w-96 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="self-stretch p-8 bg-[#301153] rounded-3xl flex flex-col justify-start items-start gap-5 overflow-hidden">
            <img src="/e-invoicing-networks/icons/files.svg" alt="" width={36} height={36} className="shrink-0" />
            <div className="self-stretch justify-start text-white text-3xl font-semibold font-['Inter'] leading-9">Historical context stays attached.</div>
            <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Keep versions, response meaning and supported state history together. Do not silently reinterpret a historical outcome through a newer mapping.</p>
            <div className="self-stretch inline-flex justify-start items-start gap-2 overflow-hidden">
              {chips.map((chip) => (
                <div key={chip} className="px-3.5 py-3 bg-[#482267] rounded-lg flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-white text-xs font-semibold font-['Inter']">{chip}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Evidence supports investigation and reconstruction within approved boundaries. Access rights and supported replay behavior remain governed by the relevant platform and adapter sources.</p>
          <div className="min-h-11 inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer hover:underline">
            <div className="justify-start text-orange-600 text-sm font-semibold font-['Inter']">Evidence &amp; Replay · platform context</div>
            <ArrowUpRightPngIcon className="size-4" />
          </div>
        </div>
        <div className="flex-1 p-8 bg-[#FFFFFF] rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Illustrative anatomy · no actual invoice</div>
          {anatomyRows.map((row) => (
            <div key={row.title} className="self-stretch py-3.5 border-b border-zinc-300 inline-flex justify-start items-start gap-4 overflow-hidden">
              <img src="/e-invoicing-networks/icons/link-2.svg" alt="" width={16} height={16} className="shrink-0" />
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-[5px] overflow-hidden">
                <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">{row.title}</div>
                <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">{row.desc}</p>
              </div>
            </div>
          ))}
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
            No payloads, taxpayer/customer/tenant identifiers, authority references, secrets, tokens, certificates or private<br />environment data are shown.
          </p>
        </div>
      </div>
      <div className="self-stretch p-6 bg-[#FFF0E6] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Evidence is not independent proof of legal correctness.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">A supported trace can help reconstruct what happened. It does not independently prove correctly interpreted law or guarantee an authority outcome.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
