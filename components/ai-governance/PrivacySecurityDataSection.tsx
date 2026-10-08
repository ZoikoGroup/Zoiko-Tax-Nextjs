import { Shield, Fingerprint, MapPin, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const CARDS = [
  {
    icon: Shield,
    tag: "EXACT CONTROLS & ACCESS",
    title: "Security",
    description:
      "Consult approved Security disclosures for actual access and protection controls. Do not infer encryption, permissions or an AI-specific security architecture.",
  },
  {
    icon: Fingerprint,
    tag: "PURPOSE, RETENTION & REUSE",
    title: "Privacy",
    description:
      "Consult Privacy and applicable DPA statements for processing, retention and training or reuse terms. No yes-or-no customer-training claim is supplied here.",
  },
  {
    icon: MapPin,
    tag: "DATA DOMAIN & LOCATION",
    title: "Data Processing & Residency",
    description:
      "Residency descriptions need an exact data domain and processing location from approved sources. A provider category or global product claim does not establish residency.",
  },
];

export default function PrivacySecurityDataSection() {
  return (
    <SectionShell id="privacy-data" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="10 · PRIVACY, SECURITY & DATA GOVERNANCE"
          title="Domain controls belong to their authoritative sources."
          description="AI processing should be described against necessary data and approved purposes. This page points to the relevant Trust destinations without duplicating unverified security, privacy, retention or residency claims."
        />

        {/* 3 Disclosure cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7"
            >
              <card.icon className="h-6.5 w-6.5 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
                {card.tag}
              </span>
              <h3 className="text-[22px] font-semibold text-[rgba(24,20,27,1)]">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Source notice */}
        <div className="w-full rounded-2xl bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)] p-6 flex items-start gap-4">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-[rgba(24,20,27,1)]">
              Public governance content is not a data specimen
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Public logs and analytics should use categorical governance metadata only. Prompts, outputs, customer or tenant data, secrets, incident details and evaluation-sensitive data do not belong in public analytics or examples. Training and reuse require approved wording.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
