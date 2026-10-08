import { Accessibility, Bug, ArrowUpRight } from "lucide-react";
import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import Image from "next/image";

export default function AccessibilitySection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/existing-tax-engines/0.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <div className="flex flex-col gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">DISTINCT REPORTING ROUTES</div>
          <h2 className="text-5xl font-bold text-slate-900 leading-[47.52px]">Accessibility feedback is not security disclosure.</h2>
          <p className="w-full max-w-[1060px] text-xl font-normal leading-8 text-[rgba(102,95,105,1)]">
            Each domain needs its own approved statement, scope and reporting policy. Neither is a procurement or sales<br className="hidden md:block" />
            pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Accessibility Card */}
          <div className="flex flex-col gap-6 rounded-3xl bg-[rgba(255,255,255,1)] p-6 md:p-8 border border-[rgba(216,206,221,1)] w-full lg:w-[628px] lg:h-[381px]">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,242,233,1)] text-[rgba(214,90,44,1)]">
                <Accessibility className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Accessibility</h3>
              <p className="text-sm text-slate-600">
                Use the approved accessibility statement to understand assessed scope, limitations<br className="hidden md:block" />
                and the appropriate feedback route. No conformance level is inferred from this page.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Statement / assessed scope</span>
                <span className="text-sm font-semibold text-slate-900">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Reporting route / owner</span>
                <span className="text-sm font-semibold text-slate-900">Not supplied</span>
              </div>
            </div>
            
            <div className="mt-auto pt-2 flex flex-col gap-1.5">
              <Link href="/trust-center/accessibility" className="flex justify-between items-center w-full group">
                <span className="text-base font-normal text-[rgba(164,70,34,1)] group-hover:opacity-80">
                  Review Accessibility
                </span>
                <ArrowUpRight className="w-[18px] h-[18px] text-[rgba(214,90,44,1)] shrink-0 group-hover:opacity-80 transition-opacity" strokeWidth={2} />
              </Link>
              <div className="text-xs text-[rgba(102,95,105,1)]">/trust/accessibility/</div>
            </div>
          </div>

          {/* Responsible Disclosure Card */}
          <div className="flex flex-col gap-6 rounded-3xl bg-[rgba(255,255,255,1)] p-6 md:p-8 border border-[rgba(216,206,221,1)] w-full lg:w-[628px] lg:h-[381px]">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,242,233,1)] text-[rgba(214,90,44,1)]">
                <Bug className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Responsible Disclosure</h3>
              <p className="text-sm text-slate-600">
                Use the approved security reporting policy for suspected<br className="hidden md:block" />
                vulnerabilities. Policy scope, submission channel and handling terms<br className="hidden md:block" />
                must come from that source—not a generic form.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Approved reporting policy</span>
                <span className="text-sm font-semibold text-slate-900">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Submission channel / owner</span>
                <span className="text-sm font-semibold text-slate-900">Not supplied</span>
              </div>
            </div>
            
            <div className="mt-auto pt-2 flex flex-col gap-1.5">
              <Link href="/trust-center/responsible-disclosure" className="flex justify-between items-center w-full group">
                <span className="text-base font-normal text-[rgba(164,70,34,1)] group-hover:opacity-80">
                  Review Responsible Disclosure
                </span>
                <ArrowUpRight className="w-[18px] h-[18px] text-[rgba(214,90,44,1)] shrink-0 group-hover:opacity-80 transition-opacity" strokeWidth={2} />
              </Link>
              <div className="text-xs text-[rgba(102,95,105,1)]">/trust/responsible-disclosure/</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl p-6 bg-[rgba(245,238,249,1)] border border-[rgba(216,206,221,1)]">
          <h4 className="text-sm font-bold text-slate-900">Keep sensitive submissions out of general channels</h4>
          <p className="text-sm text-slate-600 leading-5">
            Do not include secrets, credentials, unnecessary personal data or vulnerability details in a demo, support or procurement form. A security submission belongs<br className="hidden md:block" />
            only in the channel named by the approved Responsible Disclosure policy.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
