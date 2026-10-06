import { Accessibility, Bug } from "lucide-react";
import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import Image from "next/image";

export default function AccessibilitySection() {
  return (
    <SectionShell className="bg-[#fef9f9] relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-full max-w-2xl opacity-5 pointer-events-none">
        <Image src="/images/trust-center/accessibility_and_responsible_disclosure.png" alt="" fill className="object-cover object-right" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          eyebrow="DISTINCT REPORTING ROUTES"
          title="Accessibility feedback is not security disclosure."
          description="Each domain needs its own approved statement, scope and reporting policy. Neither is a procurement or sales pathway."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Accessibility Card */}
          <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm border border-orange-100 md:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Accessibility className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Accessibility</h3>
              <p className="text-sm text-slate-600">Use the approved accessibility statement to understand assessed scope, limitations and the appropriate feedback route. No conformance level is inferred from this page.</p>
            </div>
            
            <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Statement / assessed scope</span>
                <span className="text-sm font-medium text-slate-900">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Reporting route / owner</span>
                <span className="text-sm font-medium text-slate-900">Not supplied</span>
              </div>
            </div>
            
            <div className="mt-auto pt-6">
              <Link href="/trust-center/accessibility" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Review Accessibility <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Responsible Disclosure Card */}
          <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm border border-orange-100 md:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Bug className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Responsible Disclosure</h3>
              <p className="text-sm text-slate-600">Use the approved security reporting policy for suspected vulnerabilities. Policy scope, submission channel and handling terms must come from that source—not a generic form.</p>
            </div>
            
            <div className="flex flex-col gap-4 border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Approved reporting policy</span>
                <span className="text-sm font-medium text-slate-900">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Submission channel / owner</span>
                <span className="text-sm font-medium text-slate-900">Not supplied</span>
              </div>
            </div>
            
            <div className="mt-auto pt-6">
              <Link href="/trust-center/responsible-disclosure" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Review Responsible Disclosure <span>↗</span>
              </Link>
            </div>
          </div>
        </div>

        <NoticeCard
          className="bg-white border border-slate-200"
          title="Keep sensitive submissions out of general channels"
          description="Do not include secrets, credentials, unnecessary personal data or vulnerability details in a demo, support or procurement form. A security submission belongs only in the channel named by the approved Responsible Disclosure policy."
        />
      </div>
    </SectionShell>
  );
}
