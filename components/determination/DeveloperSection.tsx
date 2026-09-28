import React from "react";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

export default function DeveloperSection() {
  return (
    <SectionContainer id="developer" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow="DEVELOPER PORTAL"
          title="Engineered for governed developer integration"
          description="Connect tax calculation into active workflows using tracing IDs and idempotent, secure protocols."
          className="max-w-3xl"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-12 rounded-[26px] bg-[#100031] p-6 sm:p-10 text-white shadow-xl">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              API Specifications Protocol
            </h3>
            <StatusBadge status="SANDBOX v2.4-STABLE" />
          </div>

          {/* Main Content: Specs + Code Box */}
          <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Specs List */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm leading-relaxed text-[#D9D0DF] lg:col-span-6">
              <div className="flex items-start gap-2.5">
                <span className="text-[#D65A2C] font-bold text-base">•</span>
                <p>
                  <strong className="font-semibold text-white">Idempotency Contracts: </strong>
                  All POST requests use client-provided keys to guarantee identical outcomes and prevent duplicated ledger entries.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#D65A2C] font-bold text-base">•</span>
                <p>
                  <strong className="font-semibold text-white">Signed Webhooks: </strong>
                  Finalized determination events are pushed via SHA-256 cryptographically signed webhook signatures.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#D65A2C] font-bold text-base">•</span>
                <p>
                  <strong className="font-semibold text-white">Correlation IDs: </strong>
                  Trace every request back from the ERP general ledger to billing transaction line items.
                </p>
              </div>
            </div>

            {/* Right Code Box */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl bg-[#14091F] p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed border border-white/5 shadow-inner">
                <div className="text-[#D65A2C] font-semibold">
                  {"// CALCULATE COMPLIANCE TRANSACTION"}
                </div>
                <pre className="mt-3 text-[#E9DDF1] overflow-x-auto">
{`POST /v2/determine
Headers:
  X-Idempotency-Key: "ide_key_8841"
  X-Tenant-Signature: "sha256:55..."
Payload:
  {
    "transaction_id": "tx_993a-88",
    "facts": "facts_manifest_hash"
  }`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
