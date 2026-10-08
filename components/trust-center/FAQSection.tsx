import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "./shared";

export default function FAQSection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/existing-tax-engines/0.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        {/* Heading */}
        <div className="flex flex-col gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-[rgba(24,20,27,1)] lg:leading-[47.52px]">
            Direct answers. No inflated claims.
          </h2>
          <p className="w-full max-w-[1060px] text-base sm:text-lg lg:text-xl font-normal leading-8 text-[rgba(102,95,105,1)]">
            Source-safe answers to the questions that start a diligence review.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col w-full">
          {/* FAQ 1 */}
          <div className="flex flex-col gap-3 py-7 border-t border-[rgba(216,206,221,1)]">
            <h3 className="text-lg sm:text-xl font-normal text-[rgba(24,20,27,1)]">
              What is the Trust Center?
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              A central, evidence-bound navigation and assurance surface for ZoikoTax’s trust domains. It is not a certification or guarantee. Approved statements and<br className="hidden lg:block" />
              documents remain authoritative only for their exact scope, date and source.
            </p>
            <div>
              <Link href="/trust-center" className="text-xs font-normal text-[rgba(164,70,34,1)] hover:underline">
                /trust/
              </Link>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="flex flex-col gap-3 py-7 border-t border-[rgba(216,206,221,1)]">
            <h3 className="text-lg sm:text-xl font-normal text-[rgba(24,20,27,1)]">
              Where can I review Security?
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Start with the Security domain. Review only controls supported by its approved source, service and environment scope. No specific control, audit or<br className="hidden lg:block" />
              certification is established by this page.
            </p>
            <div>
              <Link href="/trust-center/security" className="text-xs font-normal text-[rgba(164,70,34,1)] hover:underline">
                /trust/security/
              </Link>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="flex flex-col gap-3 py-7 border-t border-[rgba(216,206,221,1)]">
            <h3 className="text-lg sm:text-xl font-normal text-[rgba(24,20,27,1)]">
              How do privacy and residency differ?
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Privacy & Data Protection covers approved personal-data disclosure. Data Processing & Residency covers exact data-domain location scope, approved options<br className="hidden lg:block" />
              and limitations. Global architecture does not imply universal residency or choice.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-normal text-[rgba(164,70,34,1)]">
              <Link href="/trust-center/privacy" className="hover:underline">
                /trust/privacy/
              </Link>
              <span className="text-[rgba(102,95,105,1)]">·</span>
              <Link href="/trust-center/data-processing-residency" className="hover:underline">
                /trust/data-processing-residency/
              </Link>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="flex flex-col gap-3 py-7 border-t border-[rgba(216,206,221,1)]">
            <h3 className="text-lg sm:text-xl font-normal text-[rgba(24,20,27,1)]">
              Can I request security or audit proof?
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Review Evidence & Auditability and its source and access labels first. Controlled material may be requested only through an approved process, where available.<br className="hidden lg:block" />
              The request policy and artifact inventory are not supplied; access is not guaranteed.
            </p>
            <div>
              <Link href="/trust-center/evidence-auditability" className="text-xs font-normal text-[rgba(164,70,34,1)] hover:underline">
                /trust/evidence-auditability/
              </Link>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="flex flex-col gap-3 py-7 border-t border-[rgba(216,206,221,1)]">
            <h3 className="text-lg sm:text-xl font-normal text-[rgba(24,20,27,1)]">
              Where can I review AI governance?
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Use the dedicated AI Governance domain for source-approved assistive role, authority, transparency and model-governance details. AI assistance is not<br className="hidden lg:block" />
              independent monetary, legal, filing or remittance authority.
            </p>
            <div>
              <Link href="/trust-center/ai-governance" className="text-xs font-normal text-[rgba(164,70,34,1)] hover:underline">
                /trust/ai-governance/
              </Link>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="flex flex-col gap-3 py-7 border-t border-[rgba(216,206,221,1)]">
            <h3 className="text-lg sm:text-xl font-normal text-[rgba(24,20,27,1)]">
              How do I report a vulnerability?
            </h3>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Use the approved Responsible Disclosure policy and its security reporting channel. Do not put vulnerability details, secrets or unnecessary personal data in a<br className="hidden lg:block" />
              demo, support or procurement form. The exact submission channel is not supplied here.
            </p>
            <div>
              <Link href="/trust-center/responsible-disclosure" className="text-xs font-normal text-[rgba(164,70,34,1)] hover:underline">
                /trust/responsible-disclosure/
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
