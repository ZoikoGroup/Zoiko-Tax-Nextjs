import { ArrowRightPngIcon, ClipboardListIcon, InfoIcon } from "./icons";

const checklist = [
  { title: "Approved adapter & Coverage", desc: "Verify the exact country/network/capability/environment combination." },
  { title: "Verified test availability", desc: "Confirm separately available non-production testing and its scope." },
  { title: "Governed credential requirements", desc: "Use the exact approved requirements through controlled configuration." },
  { title: "Identifiers & correlation mapped", desc: "Link source, request, document, external response and evidence." },
  { title: "Status & recovery handling", desc: "Preserve response meaning; implement permitted recovery behavior." },
  { title: "Evidence & operational ownership", desc: "Confirm traceability, access and accountable operating teams." },
  { title: "Required release approval", desc: "Complete the applicable technical, Coverage and security gates." },
];

export default function SandboxReadinessSection() {
  return (
    <div className="self-stretch px-20 py-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">10 / Sandbox, testing &amp; readiness</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Test the contract. Verify readiness separately.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Start with approved documentation, then use a non-production Sandbox only where separately available. Test with synthetic or approved data—not public invoice payloads.</p>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-10 overflow-hidden">
        <div className="w-96 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="self-stretch p-8 bg-violet-100 rounded-3xl flex flex-col justify-start items-start gap-5 overflow-hidden">
            <ClipboardListIcon className="size-8 text-orange-600" />
            <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Non-production route</div>
            <div className="self-stretch justify-start text-zinc-900 text-3xl font-semibold font-['Inter'] leading-8">Use the supported test path.</div>
            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Review the API contract and adapter guide. Verify Sandbox availability, exercise approved async behavior, and use governed negative tests with synthetic or approved data.</p>
            <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-start items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Explore Sandbox</div>
              <ArrowRightPngIcon className="size-4" />
            </div>
          </div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Check current Coverage again before production. Test availability, credentials, delivery and recovery semantics must come from their approved sources; none is established by this page.</p>
          <div className="self-stretch justify-start text-violet-950 text-lg font-semibold font-['Inter'] leading-6">No live test console. No implied activation.</div>
        </div>
        <div className="flex-1 p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Readiness checklist · not completed records</div>
          {checklist.map((item) => (
            <div key={item.title} className="self-stretch py-3 border-b border-zinc-300 inline-flex justify-start items-start gap-4 overflow-hidden">
              <div className="size-4 rounded-sm border-[1.50px] border-zinc-300 shrink-0" />
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">{item.title}</div>
                <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Sandbox completion is not production readiness.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">A completed test does not prove entitlement, live Coverage or authority acceptance. Verify approved support and obtain the required release approvals before production use.</p>
        </div>
      </div>
    </div>
  );
}
