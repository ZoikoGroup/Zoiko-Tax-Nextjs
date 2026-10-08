import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "./shared";

export default function ConditionalRequestSection() {
  return (
    <SectionShell className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
            CONDITIONAL EVIDENCE REQUEST
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-zinc-900 lg:leading-[47.52px]">
            A request is not an access grant.
          </h2>
          <p className="w-full max-w-[1060px] text-base sm:text-lg lg:text-xl font-normal leading-8 text-[rgba(102,95,105,1)]">
            An approved request process has not been supplied. This page does not collect information, submit requests or<br className="hidden md:block" />
            promise documents.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Policy requirements column */}
          <div className="flex flex-col gap-8 w-full lg:max-w-[380px]">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-[rgba(24,20,27,1)] leading-tight">
                Source required before any<br className="hidden lg:block" />
                request can be enabled.
              </h3>
              <p className="text-base font-normal leading-7 text-[rgba(102,95,105,1)]">
                Eligibility, identity checks, sharing conditions and<br className="hidden lg:block" />
                any NDA requirement must follow the actual<br className="hidden lg:block" />
                approved policy. Controlled access is not a<br className="hidden lg:block" />
                universal entitlement.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-normal text-[rgba(102,95,105,1)]">Approved request process</span>
                <span className="text-sm font-bold text-[rgba(24,20,27,1)]">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-normal text-[rgba(102,95,105,1)]">Eligibility / evidence inventory</span>
                <span className="text-sm font-bold text-[rgba(24,20,27,1)]">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-normal text-[rgba(102,95,105,1)]">Legal-approved confidentiality terms</span>
                <span className="text-sm font-bold text-[rgba(24,20,27,1)]">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-normal text-[rgba(102,95,105,1)]">Request owner / response expectations</span>
                <span className="text-sm font-bold text-[rgba(24,20,27,1)]">Not supplied</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/trust-center/evidence-auditability"
                className="flex items-center justify-between w-full group"
              >
                <span className="text-base font-normal text-[rgba(164,70,34,1)] group-hover:opacity-80">
                  Review evidence source pathways
                </span>
                <ArrowUpRight
                  className="w-[18px] h-[18px] text-[rgba(214,90,44,1)] group-hover:opacity-80 transition-opacity shrink-0"
                  strokeWidth={2}
                />
              </Link>
              <div className="text-xs text-[rgba(102,95,105,1)]">/trust/evidence-auditability/</div>
            </div>

            <p className="text-xs leading-5 text-[rgba(102,95,105,1)]">
              No request, download or portal URL is supplied. No<br className="hidden lg:block" />
              response SLA or automatic access grant is implied.
            </p>
          </div>

          {/* Illustrative request anatomy card */}
          <div className="w-full lg:w-[840px] lg:h-[836px] flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 border border-[rgba(216,206,221,1)] shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
                ILLUSTRATIVE · INACTIVE
              </span>
              <h4 className="text-2xl font-bold text-zinc-900 leading-snug">
                Illustrative request anatomy — not an active evidence portal
              </h4>
              <p className="text-sm text-[rgba(102,95,105,1)] leading-relaxed">
                Potential fields only. Nothing is entered or collected; requirements and choices need policy approval.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-sm font-bold text-zinc-900">Name · work email · organization</div>
              <p className="text-xs text-[rgba(102,95,105,1)] leading-relaxed">
                Minimum identity fields only if the approved policy requires them. No personal data is populated here.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-900">Requester role</span>
                <div className="rounded-xl border border-[rgba(216,206,221,1)] bg-[rgba(245,238,249,1)] px-4 py-3 text-xs text-[rgba(102,95,105,1)]">
                  Source required — choices not supplied
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-900">Review scope</span>
                <div className="rounded-xl border border-[rgba(216,206,221,1)] bg-[rgba(245,238,249,1)] px-4 py-3 text-xs text-[rgba(102,95,105,1)]">
                  Source required — choices not supplied
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-900">Evidence category</span>
                <div className="rounded-xl border border-[rgba(216,206,221,1)] bg-[rgba(245,238,249,1)] px-4 py-3 text-xs text-[rgba(102,95,105,1)]">
                  No approved categories or inventory supplied
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-900">Purpose</span>
                <div className="rounded-xl border border-[rgba(216,206,221,1)] bg-[rgba(245,238,249,1)] px-4 py-3 text-xs text-[rgba(102,95,105,1)]">
                  Policy-controlled choice — not free text
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[rgba(216,206,221,1)] bg-[rgba(245,238,249,1)] p-4 flex flex-col gap-1.5">
              <span className="text-sm font-bold text-zinc-900">No assumed confidentiality agreement</span>
              <p className="text-xs text-[rgba(102,95,105,1)] leading-relaxed">
                Any confidentiality acknowledgment needs Legal-approved terms. No blanket NDA checkbox, private security<br className="hidden sm:block" />
                questions, vulnerability details or file upload is shown.
              </p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-[rgba(235,227,239,1)] px-5 py-3 text-xs font-semibold text-[rgba(102,95,105,1)]">
                Submit unavailable · Source required
              </div>
            </div>

            <div className="rounded-xl border border-[rgba(255,224,204,1)] bg-[rgba(255,244,237,1)] p-4 flex flex-col gap-1">
              <span className="text-xs font-bold text-zinc-900">ILLUSTRATIVE ERROR · No request sent</span>
              <p className="text-xs text-[rgba(102,95,105,1)] leading-relaxed">
                Approved process or required source is missing. Submission remains unavailable.
              </p>
            </div>

            <div className="rounded-xl border border-[rgba(216,206,221,1)] bg-[rgba(245,238,249,1)] p-4 flex flex-col gap-1">
              <span className="text-xs font-bold text-zinc-900">ILLUSTRATIVE RECEIPT · Not an actual confirmation</span>
              <p className="text-xs text-[rgba(102,95,105,1)] leading-relaxed">
                A receipt would confirm submission only—not eligibility, fulfillment, access or delivery timing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
