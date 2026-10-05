import Image from "next/image";
import { InfoIcon, RotateIcon } from "./icons";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Inventory incumbent interfaces, responsibilities and finance owners.",
  },
  {
    num: "02",
    title: "Map",
    desc: "Confirm finance dimensions and approved mapping responsibility.",
  },
  {
    num: "03",
    title: (
      <>
        Connect non-<br />production
      </>
    ),
    desc: "Use supported non-production interfaces with approved synthetic data.",
  },
  {
    num: "04",
    title: (
      <>
        Compare where<br />approved
      </>
    ),
    desc: "Compare defined outcomes and investigate variance without production impact.",
  },
  {
    num: "05",
    title: "Reconcile",
    desc: "Trace defined source, fiscal and finance relationships and evidence.",
  },
  {
    num: "06",
    title: "Approve",
    desc: "Confirm customer readiness gates and the required governed approvals.",
  },
  {
    num: "07",
    title: "Cut over governed",
    desc: "Follow the approved cutover path; do not infer rollback or timing guarantees.",
  },
  {
    num: "08",
    title: "Operate",
    desc: "Keep controls, correlation and governed reconciliation in the operating workflow.",
  },
];

export default function CoexistenceMigrationSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden bg-[rgba(18,3,39,0.88)]">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/erp-general-ledger/32f1bde6793bb8bd3d20b9f53734606fd6bbd0db.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.88)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[rgba(244,162,97,1)] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            10 · COEXISTENCE &amp; MIGRATION
          </div>
          <h2 className="w-full text-white text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            Modernize the bridge. Keep enterprise control.
          </h2>
          <p className="w-full text-[rgba(217,208,223,1)] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Inventory and govern the interfaces you already operate. Coexistence does not require forced rip-and-replace,<br className="hidden lg:block" />
            and readiness depends on the approved enterprise scope.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="relative z-10 self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[rgba(36,16,61,1)] rounded-2xl border border-[rgba(90,61,113,1)] flex flex-col justify-start items-start gap-4 shadow-sm min-h-[220px]"
            >
              <div className="self-stretch flex justify-between items-start">
                <div className="text-[rgba(244,162,97,1)] text-xs font-bold font-['Inter',sans-serif]">
                  {step.num}
                </div>
                {step.num === "08" ? (
                  <RotateIcon className="size-4 text-[rgba(244,162,97,1)]" />
                ) : (
                  <span className="text-[rgba(244,162,97,1)] font-bold text-base leading-none">→</span>
                )}
              </div>
              <div className="self-stretch text-white text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {step.title}
              </div>
              <div className="self-stretch text-[rgba(217,208,223,1)] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Callout Notice */}
        <div className="relative z-10 self-stretch p-5 sm:p-6 bg-[rgba(36,16,61,1)] rounded-2xl border border-[rgba(90,61,113,1)] flex justify-start items-start gap-3.5 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[rgba(244,162,97,1)] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-white text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Shadow comparison must remain non-impacting until approval
            </div>
            <p className="self-stretch text-[rgba(217,208,223,1)] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block lg:whitespace-nowrap">
                Shadow Assurance, where approved and supported, must not change production outcomes before an approved cutover. Comparison agreement is not proof
              </span>
              <span className="block lg:whitespace-nowrap">
                of accounting or legal correctness. Investigate variance and preserve evidence before approving any consequential transition.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="relative z-10 self-stretch flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6">
          <div className="text-[rgba(244,162,97,1)] text-xs font-bold font-['Inter',sans-serif] leading-5 whitespace-nowrap">
            GOVERNED READINESS, NOT A GUARANTEE
          </div>
          <p className="flex-1 text-[rgba(217,208,223,1)] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-5">
            No zero-downtime, instant rollout or universal rollback promise is made. Use source-backed Shadow Assurance and integration guidance for the supported enterprise scope.
          </p>
        </div>
      </div>
    </section>
  );
}

