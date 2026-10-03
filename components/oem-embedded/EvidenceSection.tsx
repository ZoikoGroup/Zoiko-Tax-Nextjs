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
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/oem-embedded/Evidence audit and delegated actions.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          dark
          eyebrow="10 / EVIDENCE & ACCOUNTABILITY"
          title="Keep the decision trail with the organization."
          description="Traceability supports accountability. It is not an unsupported assurance or certification claim."
        />

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-12">
          <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch text-white text-3xl font-normal leading-9 font-['Inter',sans-serif]">
              Context → authority → decision → review
            </div>
            <p className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Connect provisioning, entitlement and activation to their
              governing sources. Preserve approved configuration and usage
              references so consequential actions can be reviewed in context.
            </p>
            <p className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Actor attribution is included only where the supported model
              permits it. It does not establish delegation, impersonation or
              cross-tenant access.
            </p>
            <Link
              href="/evidence-auditability"
              className="px-5 py-3.5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center gap-3 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
                Evidence & Replay
              </span>
              <ArrowRight className="size-4 text-white" />
            </Link>
          </div>

          <div className="flex-1 p-6 sm:p-7 bg-violet-950 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-500 flex flex-col justify-start items-start gap-5">
            <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              ILLUSTRATIVE EVIDENCE ANATOMY · NOT ACTUAL RECORDS
            </span>
            {evidence.map((row) => (
              <div
                key={row.label}
                className="self-stretch pb-4 border-b border-gray-500 flex flex-col sm:flex-row justify-start items-start gap-2 sm:gap-5"
              >
                <div className="w-full sm:w-48 shrink-0 text-white text-base font-normal font-['Inter',sans-serif]">
                  {row.label}
                </div>
                <div className="flex-1 text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Notice
          dark
          title="References, not fabricated records"
          body="Text equivalent: organization context, entitlement source / effective scope, activation readiness / Coverage, supported actor attribution, configuration version, approved usage reference and historical review form a conceptual evidence trail. No actual identifiers, timestamps, audit records or certificates are shown."
        />
      </Container>
    </section>
  );
}
