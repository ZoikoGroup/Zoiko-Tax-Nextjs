import { ArrowRightIcon, GlobeIcon, InfoIcon } from "./icons";

const metadataRows = [
  { label: "Country / jurisdiction", value: "Not published here · check Coverage" },
  { label: "Network / authority adapter", value: "Not published here · approved identity required" },
  { label: "E-invoicing / CTC capability", value: "Unknown here · verify the exact capability" },
  { label: "Environment state", value: "Unknown here · verify separately" },
  { label: "Managed service scope", value: "Not inferred · approved source required" },
  { label: "Governed effective date", value: "Not published · exact-source date only" },
];

const scopes = [
  { title: "Production", desc: "Only if expressly approved in Coverage." },
  { title: "Pilot", desc: "A distinct, governed evaluation scope." },
  { title: "Validation", desc: "Defined validation activity, not live entitlement." },
  { title: "Research", desc: "Exploration, not a support commitment." },
];

export default function CoverageSection() {
  return (
    <div className="self-stretch px-20 py-20 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">09 / Coverage, network &amp; authority availability</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Architecture does not mean availability.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Coverage is the first-class gate for exact country, network, capability and environment support. No approved registry is supplied on this architecture page.</p>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
        <div className="w-96 p-8 bg-violet-950 rounded-3xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <GlobeIcon className="size-8 text-orange-300" />
          <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">Verify before production</div>
          <div className="self-stretch justify-start text-white text-3xl font-semibold font-['Inter'] leading-9">Check the exact supported combination.</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Country/jurisdiction + approved network/authority adapter + specific e-invoicing/CTC capability + environment + governed effective date.</p>
          <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 inline-flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
            <div className="justify-start text-white text-sm font-semibold font-['Inter']">View Current Coverage</div>
            <ArrowRightIcon className="size-4 text-white" />
          </div>
          <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">A managed service, production entitlement or authority acceptance must not be inferred from a pattern, pilot or test result.</p>
        </div>
        <div className="flex-1 p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Source-bound metadata · no live availability assertion</div>
          {metadataRows.map((row) => (
            <div key={row.label} className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-6 overflow-hidden">
              <div className="w-60 justify-start text-zinc-900 text-base font-semibold font-['Inter'] leading-6">{row.label}</div>
              <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {scopes.map((scope) => (
          <div key={scope.title} className="flex-1 h-28 p-5 bg-violet-100 rounded-2xl inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="justify-start text-violet-950 text-lg font-semibold font-['Inter']">{scope.title}</div>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">{scope.desc}</p>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-orange-50 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Missing, stale or unavailable source? Keep support unconfirmed.</div>
          <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">No published Coverage or no matching coverage means support is not confirmed. An unavailable adapter, missing source or stale mapping must remain explicit; consult current Coverage and approved technical sources rather than filling the gap with an availability claim.</p>
        </div>
      </div>
    </div>
  );
}
