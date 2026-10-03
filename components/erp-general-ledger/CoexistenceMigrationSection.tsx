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
    <section className="relative w-full flex justify-center items-start bg-[#181424] py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/erp-general-ledger/Coexistence shadow assurance and migration.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#181424]/90" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            10 · COEXISTENCE &amp; MIGRATION
          </div>
          <h2 className="w-full max-w-[1050px] text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Modernize the bridge. Keep enterprise control.
          </h2>
          <p className="w-full max-w-[1060px] text-zinc-300 text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Inventory and govern the interfaces you already operate. Coexistence does not require forced rip-and-replace, and readiness depends on the approved enterprise scope.
          </p>
        </div>

        <div className="relative z-10 self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[#241D35] rounded-2xl border border-[#3E3259] flex flex-col justify-start items-start gap-4 shadow-sm"
            >
              <div className="self-stretch flex justify-between items-start">
                <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif]">
                  {step.num}
                </div>
                {step.num === "08" ? <RefreshCwIcon className="size-5 text-[#FFA776]" /> : <LinkMarkerIcon className="text-[#FFA776]" />}
              </div>
              <div className="self-stretch text-white text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {step.title}
              </div>
              <div className="self-stretch text-zinc-300 text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1280px] p-5 sm:p-6 bg-[#241D35] rounded-2xl border border-[#3E3259] flex justify-start items-start gap-4 shadow-sm">
          <LinkIcon className="size-5 shrink-0 text-[#FFA776] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-white text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Shadow comparison must remain non-impacting until approval
            </div>
            <p className="self-stretch text-zinc-300 text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              Shadow Assurance, where approved and supported, must not change production outcomes before an approved cutover. Comparison agreement is not proof of accounting or legal correctness. Investigate variance and preserve evidence before approving any consequential transition.
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] flex flex-wrap justify-start items-center gap-6">
          <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] leading-5">
            GOVERNED READINESS, NOT A GUARANTEE
          </div>
          <p className="flex-1 text-zinc-300 text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-5">
            No zero-downtime, instant rollout or universal rollback promise is made. Use source-backed Shadow Assurance and integration guidance for the supported enterprise scope.
          </p>
        </div>
      </div>
    </section>
  );
}
