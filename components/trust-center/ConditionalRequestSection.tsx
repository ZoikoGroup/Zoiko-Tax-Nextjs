import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import { AlertCircle, FileCheck2, User, Briefcase, Mail } from "lucide-react";

export default function ConditionalRequestSection() {
  return (
    <SectionShell className="bg-[#fef9f9]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="CONDITIONAL EVIDENCE REQUEST"
          title="A request is not an access grant."
          description="An approved request process has not been supplied. This page does not collect information, submit requests or promise documents."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Policy requirements */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-slate-900">Source required before any request can be enabled.</h3>
              <p className="text-base text-slate-600">Eligibility, identity checks, sharing conditions and any NDA requirement must follow the actual approved policy. Controlled access is not a universal entitlement.</p>
            </div>
            
            <div className="flex flex-col gap-4 border-l-2 border-orange-500 pl-4 py-2">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Approved request process</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Eligibility / evidence inventory</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Legal-approved confidentiality terms</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Request owner / response expectations</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 pt-2">
              <Link href="/trust-center/evidence-auditability" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Review evidence source pathways <span>↗</span>
              </Link>
              <p className="text-sm text-slate-500">No request, download or portal URL is supplied. No response SLA or automatic access grant is implied.</p>
            </div>
          </div>

          {/* Illustrative request anatomy */}
          <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm border border-orange-100 pointer-events-none opacity-80">
            <div className="flex flex-col gap-2 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">ILLUSTRATIVE · INACTIVE</span>
              <h4 className="text-lg font-bold text-slate-900">Illustrative request anatomy — not an active evidence portal</h4>
              <p className="text-sm text-slate-600">Potential fields only. Nothing is entered or collected; requirements and choices need policy approval.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-400">
                  <User className="h-4 w-4" /> <span className="text-sm">Name</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-400">
                  <Mail className="h-4 w-4" /> <span className="text-sm">Work email</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-400">
                  <Briefcase className="h-4 w-4" /> <span className="text-sm">Organization</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Requester role</span>
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 text-sm text-slate-500">Source required — choices not supplied</div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Review scope</span>
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 text-sm text-slate-500">Source required — choices not supplied</div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Evidence category</span>
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 text-sm text-slate-500">No approved categories supplied</div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Purpose</span>
                  <div className="rounded-xl border border-slate-200 bg-slate-100 p-3 text-sm text-slate-500">Policy-controlled choice — not free text</div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-slate-700">No assumed confidentiality agreement</span>
                    <span className="text-sm text-slate-500">Any confidentiality acknowledgment needs Legal-approved terms. No blanket NDA checkbox, private security questions, vulnerability details or file upload is shown.</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex w-full items-center justify-center rounded-full bg-slate-200 p-4 text-slate-500 font-semibold cursor-not-allowed">
                Submit unavailable · Source required
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
