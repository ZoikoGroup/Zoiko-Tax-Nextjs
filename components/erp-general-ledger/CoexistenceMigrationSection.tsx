import Image from "next/image";
import { LinkIcon, LinkMarkerIcon, RefreshCwIcon } from "./icons";

const steps = [
  { num: "01", title: "Discover", desc: "Inventory incumbent interfaces, responsibilities and finance owners." },
  { num: "02", title: "Map", desc: "Confirm finance dimensions and approved mapping responsibility." },
  { num: "03", title: "Connect non-production", desc: "Use supported non-production interfaces with approved synthetic data." },
  { num: "04", title: "Compare where approved", desc: "Compare defined outcomes and investigate variance without production impact." },
  { num: "05", title: "Reconcile", desc: "Trace defined source, fiscal and finance relationships and evidence." },
  { num: "06", title: "Approve", desc: "Confirm customer readiness gates and the required governed approvals." },
  { num: "07", title: "Cut over governed", desc: "Follow the approved cutover path; do not infer rollback or timing guarantees." },
  { num: "08", title: "Operate", desc: "Keep controls, correlation and governed reconciliation in the operating workflow." },
];

export default function CoexistenceMigrationSection() {
  return (
    <div className="relative self-stretch px-20 py-24 bg-slate-900/90 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Section background image */}
      <Image
        src="/erp-general-ledger/Coexistence shadow assurance and migration.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-900/90" />
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">10 · COEXISTENCE &amp; MIGRATION</div>
        <h2 className="w-full max-w-[1050px] justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Modernize the bridge. Keep enterprise control.</h2>
        <p className="w-full max-w-[1060px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Inventory and govern the interfaces you already operate. Coexistence does not require forced rip-and-replace, and readiness depends on the approved enterprise scope.</p>
      </div>
      <div className="relative self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 overflow-hidden">
        {steps.map((step) => (
          <div key={step.num} className="p-6 bg-indigo-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-600 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div className="self-stretch flex justify-between items-start overflow-hidden">
              <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">{step.num}</div>
              {step.num === "08" ? <RefreshCwIcon className="size-5" /> : <LinkMarkerIcon />}
            </div>
            <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-7">{step.title}</div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">{step.desc}</div>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-6 bg-indigo-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-600 flex justify-start items-start gap-4 overflow-hidden">
        <LinkIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-white text-base font-bold font-['Inter']">Shadow comparison must remain non-impacting until approval</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Shadow Assurance, where approved and supported, must not change production outcomes before an approved cutover. Comparison agreement is not proof of accounting or legal correctness. Investigate variance and preserve evidence before approving any consequential transition.</p>
        </div>
      </div>
      <div className="relative self-stretch flex flex-wrap justify-start items-center gap-6 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">GOVERNED READINESS, NOT A GUARANTEE</div>
        <p className="flex-1 justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">No zero-downtime, instant rollout or universal rollback promise is made. Use source-backed Shadow Assurance and integration guidance for the supported enterprise scope.</p>
      </div>
    </div>
  );
}
