import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

const stages = [
  {
    title: "Pre-cutover",
    tag: "Incumbent authoritative",
    body: "ZoikoTax remains Shadow / non-authoritative unless an approved stage differs.",
  },
  {
    title: "Approved cutover",
    tag: "Authority change approved",
    body: "Apply only approved changes through governed release and operations processes.",
    dark: true,
  },
  {
    title: "Post-cutover",
    tag: "Approved production authority",
    body: "Monitor and reconcile in the approved authoritative state; retain evidence context.",
  },
  {
    title: "Extended coexistence",
    tag: "Authority remains explicit",
    body: "Continue coexistence where supported. Keeping the incumbent is a valid outcome.",
  },
];

const recoveryCards = [
  {
    icon: "/existing-tax-engines/corner-up-left.svg",
    title: "Before cutover",
    body: "Record approved recovery intent, recovery authority and source references. Incumbent production authority remains explicit in the pre-cutover stage.",
  },
  {
    icon: "/existing-tax-engines/route.svg",
    title: "During / after approved cutover",
    body: "Use the approved release and operations process. State which production authority applies and what approved fallback or recovery intent is available.",
  },
  {
    icon: "/existing-tax-engines/life-buoy.svg",
    title: "Unresolved incident / recovery",
    body: "Route unresolved incidents through governed operations and the appropriate approved Support reference. Keep authority and evidence explicit throughout recovery.",
  },
];

export default function CutoverRecoverySection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/Why coexistence before cutover.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-16">
        {/* 08 · Approval-driven cutover */}
        <div className="self-stretch flex flex-col gap-10">
          <div className="flex flex-col gap-3.5">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              08 · APPROVAL-DRIVEN CUTOVER
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
              Change authority through governance, not a switch.
            </h2>
            <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
              Readiness review informs the decision. It does not execute it. This public page has no Promote or Activate control for Shadow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className={`self-stretch p-6 rounded-2xl flex flex-col justify-start items-start gap-3 ${
                  stage.dark
                    ? "bg-[#241039] text-white shadow-sm"
                    : "bg-[#FAF3FF] border border-[#E7D6F0]"
                }`}
              >
                <div
                  className={`self-stretch text-xl font-normal font-['Inter',sans-serif] ${
                    stage.dark ? "text-white" : "text-[#18141B]"
                  }`}
                >
                  {stage.title}
                </div>
                <div className="self-stretch text-xs sm:text-sm font-normal text-[#D65A2C] font-['Inter',sans-serif]">
                  {stage.tag}
                </div>
                <div
                  className={`self-stretch text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif] ${
                    stage.dark ? "text-zinc-300" : "text-[#665F69]"
                  }`}
                >
                  {stage.body}
                </div>
              </div>
            ))}
          </div>

          <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Text equivalent: Pre-cutover incumbent authority with ZoikoTax Shadow
            → explicit governed cutover approval and release/operations change →
            approved post-cutover authority with monitoring and reconciliation.
            Extended coexistence may remain the approved path. No comparison
            result guarantees or automatically triggers a transition.
          </p>
        </div>

        {/* 09 · Rollback, fallback & recovery */}
        <div className="self-stretch pt-12 border-t border-[#D8CEDD] flex flex-col gap-10">
          <div className="flex flex-col gap-3.5">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              09 · ROLLBACK, FALLBACK &amp; RECOVERY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
              Plan recovery intent. Keep ownership explicit.
            </h2>
            <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
              An approved recovery path is an operational decision—not a promise of automatic rollback, reversed financial side effects or zero impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recoveryCards.map((card) => (
              <div
                key={card.title}
                className="self-stretch p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-4 shadow-sm"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <div className="self-stretch text-[#18141B] text-xl font-bold leading-7 font-['Inter',sans-serif]">
                  {card.title}
                </div>
                <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {card.body}
                </div>
              </div>
            ))}
          </div>

          {/* Notice callout */}
          <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
            <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
              Recovery is approved intent, not universal reversal.
            </div>
            <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
              There is no automatic-reversal, zero-risk or zero-downtime guarantee. Approved sources and accountable owners determine the recovery path; preserve incident and prior comparison evidence under policy.
            </p>
          </div>

          {/* Bottom text link */}
          <Link
            href="/integration-guides"
            className="inline-flex items-center gap-1.5 text-[#D65A2C] text-sm sm:text-base font-semibold font-['Inter',sans-serif] hover:underline"
          >
            <span>Use approved Integration Guides and Support references</span>
            <Image
              src="/existing-tax-engines/arrow-up-right.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
