import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";

export default function BillingGuideDetail() {
  return (
    <section className="bg-[#FAF3FF] px-6 py-20 lg:px-12 font-sans text-[#1C1917]">
      <div className="mx-auto max-w-7xl">
        {/* Top Header */}
        <div className="flex flex-col gap-2 mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            SELECTED GUIDE - ILLUSTRATIVE EXAMPLE
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Billing/BSS: govern the decision handoff.
          </h1>
          <p className="text-sm font-normal text-[#57534E] max-w-4xl">
            Understand how source context reaches a governed decision boundary
            and returns to the billing workflow—without confusing integration
            with authority.
          </p>
        </div>

        {/* Top 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
          {/* Left Purple Card */}
          <div className="lg:col-span-4 rounded-2xl bg-[#301153] p-8 text-white shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D06236] bg-[#301153]">
                ILLUSTRATIVE GUIDE PATTERN
              </span>
              <h2 className="text-2xl font-bold tracking-tight leading-snug">
                Billing/BSS
                <br />
                decision handoff
              </h2>
              <div className="flex flex-col gap-2 text-xs text-[#E7E5E4] leading-relaxed">
                <p>
                  <strong className="text-white">Family:</strong> Billing/BSS
                </p>
                <p>
                  <strong className="text-white">Problem intent:</strong>{" "}
                  synchronous decision
                </p>
                <p>
                  <strong className="text-white">Recommended surface:</strong>{" "}
                  API
                </p>
                <p>
                  <strong className="text-white">Currentness:</strong> metadata
                  not supplied
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-[#A8A29E] flex flex-col gap-1">
              <p>Not a published technical contract.</p>
              <p>Compatibility and availability are not asserted.</p>
            </div>
          </div>

          {/* Right White Cards Container */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#111111] mb-2">
                Keep source ownership and decision authority separate.
              </h3>
              <p className="text-xs font-normal text-[#57534E] leading-relaxed">
                A billing workflow needs a clear interpretation handoff while
                preserving customer/source responsibility. This conceptual
                pattern helps teams reason about the boundary, not implement an
                unspecified production interface.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* When to use */}
              <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-[#111111]">
                    When to use
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    When assessing a source-owned billing trigger, a
                    contract-defined decision boundary and a downstream
                    result/status handoff.
                  </p>
                </div>
              </div>

              {/* When not to use */}
              <div className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold text-[#111111]">
                    When not to use
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    When exact syntax, activation, universal market support or
                    automatic fiscal/accounting authority is required. Route to
                    the governed owner instead.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#301153] px-1">
              Actors: customer/source system • ZoikoTax integration layer •
              authoritative workflow, where supported • downstream system •
              evidence/audit layer
            </p>
          </div>
        </div>

        {/* Public Guide / Production Contract Banner */}
        <div className="mb-12 flex items-start gap-3 rounded-xl border border-[#D8CEDD] bg-[#F3EBF8] p-4 shadow-sm text-[#111111]">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">Public guide / production contract</p>
            <p className="mt-0.5 text-[#57534E]">
              This public guide describes an illustrative conceptual pattern.
              Exact contracts, authorization, customer configuration and
              entitlements must be established separately. No prerequisite is
              verified by this demonstration.
            </p>
          </div>
        </div>

        {/* Resolve Prerequisites Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-[#111111] mb-6">
            Resolve prerequisites before implementation.
          </h2>
          <div className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border border-[#E7E5E4] bg-white px-6 py-4 shadow-sm gap-4">
              <div className="md:col-span-4 text-xs font-bold text-[#111111]">
                Contract version
              </div>
              <div className="md:col-span-8 text-xs text-[#57534E]">
                Use the current governed contract version in API Reference; no
                version is asserted here.
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border border-[#E7E5E4] bg-white px-6 py-4 shadow-sm gap-4">
              <div className="md:col-span-4 text-xs font-bold text-[#111111]">
                Authorization requirement
              </div>
              <div className="md:col-span-8 text-xs text-[#57534E]">
                Confirm the contract-defined authorization requirement with the
                responsible owner; no protocol or credential is specified.
              </div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border border-[#E7E5E4] bg-white px-6 py-4 shadow-sm gap-4">
              <div className="md:col-span-4 text-xs font-bold text-[#111111]">
                Customer configuration
              </div>
              <div className="md:col-span-8 text-xs text-[#57534E]">
                Customer-specific / contract-defined. Do not infer a setting,
                activation or entitlement from this pattern.
              </div>
            </div>
            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border border-[#E7E5E4] bg-white px-6 py-4 shadow-sm gap-4">
              <div className="md:col-span-4 text-xs font-bold text-[#111111]">
                Coverage and Trust
              </div>
              <div className="md:col-span-8 text-xs text-[#57534E]">
                Independently authoritative. Confirm market scope in Coverage
                and security/privacy evidence in Trust.
              </div>
            </div>
            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border border-[#E7E5E4] bg-white px-6 py-4 shadow-sm gap-4">
              <div className="md:col-span-4 text-xs font-bold text-[#111111]">
                Sandbox access
              </div>
              <div className="md:col-span-8 text-xs text-[#57534E]">
                Non-production; access is separately governed. It is not proof
                of production permission.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="rounded-2xl bg-[#F3EBF8] border border-[#E7E5E4] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-[#111111]">
                Sequence &amp; authority
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Follow the conceptual sequence below; retain distinct source,
                integration and authoritative-workflow roles.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-[#111111]">
                Safe failure behavior
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Pause or use only a source-supported, contract-defined fallback.
                Do not guess outcomes or bypass unresolved prerequisites.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-[#111111]">
                Evidence &amp; qualification
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Carry source lineage, correlation and decision context
                conceptually. Exact shapes belong to the contract;
                customer-specific scope goes to controlled engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Link Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#E7E5E4]/60">
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#111111] border border-[#E7E5E4] shadow-sm hover:bg-[#FAF8FC]"
          >
            API Reference
            <ArrowRight className="h-3 w-3 text-[#D06236]" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#111111] border border-[#E7E5E4] shadow-sm hover:bg-[#FAF8FC]"
          >
            API Changelog
            <ArrowRight className="h-3 w-3 text-[#D06236]" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#111111] border border-[#E7E5E4] shadow-sm hover:bg-[#FAF8FC]"
          >
            Sandbox - non-production
            <ArrowRight className="h-3 w-3 text-[#D06236]" />
          </Link>
          <div className="ml-auto text-[11px] text-[#301153] hidden sm:block">
            Customer-specific architecture → controlled engagement
          </div>
        </div>
      </div>
    </section>
  );
}
