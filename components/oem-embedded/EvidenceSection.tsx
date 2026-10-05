import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";
import Link from "next/link";

function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.33594 8.00021H12.6703M8.00314 12.6674L12.6703 8.00021L8.00314 3.33301"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

const evidence = [
  {
    label: "Organization context",
    value: "Provisioning decision and authorized business scope.",
  },
  {
    label: "Entitlement source",
    value: "Grant authority, change source and effective scope.",
  },
  {
    label: "Activation readiness",
    value: "Approved gates and exact Coverage references.",
  },
  {
    label: "Actor attribution",
    value: "Delegated action only where supported and privacy-safe.",
  },
  {
    label: "Configuration version",
    value: "Source-defined configuration and version context.",
  },
  {
    label: "Usage reference",
    value: "Operational attribution only where approved.",
  },
  {
    label: "Historical review",
    value: "Evidence access and review according to policy.",
  },
];

export default function EvidenceSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-transparent overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/oem-embedded/Evidence audit and delegated actions.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            10 / EVIDENCE & ACCOUNTABILITY
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Keep the decision trail with the organization.
          </h2>
          <p className="text-[#D9D0DF] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Traceability supports accountability. It is not an unsupported assurance or certification claim.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-12">
          <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch text-white text-3xl font-normal leading-9 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Context → authority →</span>
              <span className="block xl:whitespace-nowrap">decision → review</span>
            </div>
            <p className="self-stretch text-[rgba(217,208,223,1)] text-base font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Connect provisioning, entitlement and activation</span>
              <span className="block xl:whitespace-nowrap">to their governing sources. Preserve approved</span>
              <span className="block xl:whitespace-nowrap">configuration and usage references so</span>
              <span className="block xl:whitespace-nowrap">consequential actions can be reviewed in context.</span>
            </p>
            <p className="self-stretch text-[rgba(217,208,223,1)] text-base font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Actor attribution is included only where the</span>
              <span className="block xl:whitespace-nowrap">supported model permits it. It does not establish</span>
              <span className="block xl:whitespace-nowrap">delegation, impersonation or cross-tenant access.</span>
            </p>
            <Link
              href="/evidence-auditability"
              className="px-5 py-3.5 bg-[rgba(255,255,255,0.04)] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] inline-flex justify-start items-center gap-3 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
                Evidence & Replay
              </span>
              <ArrowRight className="size-4 text-white" />
            </Link>
          </div>

          <div className="flex-1 p-6 sm:p-8 bg-[rgba(48,17,83,1)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-5">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              ILLUSTRATIVE EVIDENCE ANATOMY · NOT ACTUAL RECORDS
            </span>
            {evidence.map((row, idx) => (
              <div
                key={row.label}
                className={`self-stretch pb-4 ${idx !== evidence.length - 1 ? 'border-b border-[rgba(128,100,151,0.5)]' : ''} flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-5`}
              >
                <div className="w-full sm:w-48 shrink-0 text-white text-[15px] font-normal font-['Inter',sans-serif]">
                  {row.label}
                </div>
                <div className="flex-1 text-[rgba(217,208,223,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Notice
          dark
          className="!bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)]"
          title={<span className="text-white">References, not fabricated records</span>}
          body={
            <span className="text-[rgba(217,208,223,1)]">
              <span className="block xl:whitespace-nowrap">Text equivalent: organization context, entitlement source / effective scope, activation readiness / Coverage, supported actor attribution, configuration</span>
              <span className="block xl:whitespace-nowrap">version, approved usage reference and historical review form a conceptual evidence trail. No actual identifiers, timestamps, audit records or certificates are</span>
              <span className="block xl:whitespace-nowrap">shown.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
